import { pool } from "../db.js";

var dropTableQuery = "DROP TABLE profesores";

pool
  .query(dropTableQuery)
  .then(function (resultados) {
    console.log(resultados);
  })
  .catch(error => console.error(error));
