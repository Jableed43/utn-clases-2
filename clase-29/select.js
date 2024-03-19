import { pool } from "./bd.js";

pool.query("select * from alumnos").then(function (resultados) {
  console.log(resultados);
  return resultados;
});
