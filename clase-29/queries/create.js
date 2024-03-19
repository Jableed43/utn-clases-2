import { pool } from "../db.js";
//INTEGER = ENTERO
var createTable =
  "CREATE TABLE profesores (idProfesor INT AUTO_INCREMENT PRIMARY KEY, nombre VARCHAR(50), apellido VARCHAR(50))";

pool.query(createTable).then(function (resultados) {
  console.log(resultados);
});
