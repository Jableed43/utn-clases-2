import { pool } from "./bd.js";

var id = 1;
var obj = { nombre: "Pablo", apellido: "Gomez" };

pool
  .query("update alumnos set ? where idalumnos=?", [obj, id])
  .then(function (resultados) {
    console.log(resultados);
  });
