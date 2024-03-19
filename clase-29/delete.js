import { pool } from "./bd.js";

var id = 1;

pool
  .query("delete from alumnos where id = ?", [id])
  .then(function (resultados) {
    console.log(resultados);
  });
