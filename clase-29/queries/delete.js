import { pool } from "../db.js";

var id = 1;

pool.query("DELETE FROM alumnos").then(function (resultados) {
  console.log(resultados);
});
