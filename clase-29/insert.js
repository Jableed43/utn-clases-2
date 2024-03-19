import { pool } from "./bd.js";

var obj = { nombre: "manuel", apellido: "garcia" };

pool.query("insert into alumnos set ?", [obj]).then(function (resultados) {
  console.log(resultados);
});
