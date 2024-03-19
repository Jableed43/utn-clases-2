import { pool } from "../db.js";

var alterTableQuery = "ALTER TABLE alumnos ADD COLUMN edad INT";

pool
  .query(alterTableQuery)
  .then(function (resultados) {
    console.log(resultados);
  })
  .catch(error => console.error(error));
