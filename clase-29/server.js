import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { pool } from "./bd.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();

const app = express();
const port = 3000;

// Middleware para analizar las solicitudes entrantes con cuerpo JSON
app.use(bodyParser.json());

// Middleware para analizar las solicitudes entrantes con cuerpos codificados en URL
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para el formulario HTML
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/formulario.html");
});

app.get("/editar", (req, res) => {
  res.sendFile(__dirname + "/editar.html");
});

app.get("/eliminar", (req, res) => {
  res.sendFile(__dirname + "/eliminar.html");
});

app.get("/listar", (req, res) => {
  res.sendFile(__dirname + "/listar.html");
});

app.get("/buscar", (req, res) => {
  res.sendFile(__dirname + "/buscar.html");
});

// Ruta para procesar el formulario y crear un nuevo alumno
app.post("/crear-alumno", async (req, res) => {
  const { nombre, apellido } = req.body;

  // Consulta SQL para insertar un nuevo alumno
  const insertQuery = "INSERT INTO alumnos (nombre, apellido) VALUES (?, ?)";

  try {
    // Ejecutar la consulta con los datos del formulario
    pool.query(insertQuery, [nombre, apellido]);
    res.send("Alumno creado correctamente");
  } catch (error) {
    console.error("Error al crear alumno:", error);
    res.status(500).send("Error al crear alumno");
  }
});

app.get("/buscar-alumno", async (req, res) => {
  const { idAlumno } = req.query;
  console.log("idAlumno", idAlumno);
  // Consulta SQL para buscar un alumno por ID
  const selectQuery = "SELECT * FROM alumnos WHERE idalumnos = ?";

  try {
    // Ejecutar la consulta con el ID del alumno proporcionado
    const alumno = await pool.query(selectQuery, [idAlumno]);

    if (alumno.length > 0) {
      // Si se encontró el alumno, enviar los datos como respuesta
      res.json(alumno);
    } else {
      // Si no se encontró el alumno, enviar un mensaje de error
      res.status(404).json({ error: "Alumno no encontrado nono" });
    }
  } catch (error) {
    console.error("Error al buscar alumno:", error);
    res.status(500).json({ error: "Error al buscar alumno" });
  }
});

app.get("/listar-alumnos", async (req, res) => {
  try {
    // Consulta SQL para obtener todos los alumnos
    const selectQuery = "SELECT * FROM alumnos";

    // Ejecutar la consulta para obtener todos los alumnos
    const alumnos = await pool.query(selectQuery);

    // Enviar la lista de alumnos como respuesta
    res.json(alumnos);
  } catch (error) {
    console.error("Error al obtener la lista de alumnos:", error);
    res.status(500).json({ error: "Error al obtener la lista de alumnos" });
  }
});

app.delete("/eliminar-alumno", async (req, res) => {
  const { idAlumno } = req.query;

  try {
    // Consulta SQL para eliminar un alumno por ID
    const deleteQuery = "DELETE FROM alumnos WHERE idalumnos = ?";

    // Ejecutar la consulta para eliminar al alumno
    await pool.query(deleteQuery, [idAlumno]);

    // Enviar respuesta de éxito
    res.sendStatus(200);
  } catch (error) {
    console.error("Error al eliminar alumno:", error);
    res.status(500).json({ error: "Error al eliminar alumno" });
  }
});

app.put("/editar-alumno", async (req, res) => {
  const { idAlumno } = req.query;
  const { nombre, apellido } = req.body;

  try {
    // Consulta SQL para actualizar los datos del alumno
    const updateQuery =
      "UPDATE alumnos SET nombre = ?, apellido = ? WHERE idalumnos = ?";

    // Ejecutar la consulta para actualizar los datos del alumno
    await pool.query(updateQuery, [nombre, apellido, idAlumno]);

    // Enviar respuesta de éxito
    res.sendStatus(200);
  } catch (error) {
    console.error("Error al editar alumno:", error);
    res.status(500).json({ error: "Error al editar alumno" });
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
