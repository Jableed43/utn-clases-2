import { pool } from "../db.js";

const id = 1;
const nombre = "Pablo";

pool
  .query("SELECT * FROM alumnos WHERE nombre = ? and idalumnos = ?", [
    nombre,
    id,
  ])
  .then(function (resultados) {
    console.log(resultados);
  });
