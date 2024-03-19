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

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
