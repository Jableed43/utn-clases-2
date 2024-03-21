import express from "express";
import bodyParser from "body-parser";
import { pool } from "./db.js";
import { fileURLToPath } from "url";
import path from "path";

//Obtenemos la direccion de un archivo
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Rutas
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/vistas/formulario.html"));
});

app.get("/editar", (req, res) => {
  res.sendFile(path.join(__dirname + "/vistas/editar.html"));
});

//Endpoints
app.post("/crear-alumno", async (req, res) => {
  const { nombre, apellido } = req.body;
  console.log(req.body);

  const insertQuery = "INSERT INTO alumnos (nombre, apellido) VALUES (?, ?)";

  try {
    await pool.query(insertQuery, [nombre, apellido]);
    res.send("Alumno creado correctamente");
  } catch (error) {
    console.error("Error al crear el alumno", error);
    res.status(500).send("Error al crear alumno");
  }
});

app.get("/buscar-alumno", async (req, res) => {
  const { idAlumno } = req.query;
  const selectQuery = "SELECT * FROM alumnos WHERE idalumnos = ?";

  try {
    const alumno = await pool.query(selectQuery, [idAlumno]);
    console.log(alumno.length > 0);
    if (alumno.length > 0) {
      res.json(alumno);
    } else {
      res.status(404).json({ error: "alumno no encontrado" });
    }
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
