import { pool } from "../db.js";

// var insertData = "INSERT INTO profesores SET ?";
// var profesorData = { nombre: "Manuel", apellido: "Gomez" };

// pool
//   .query(insertData, [profesorData])
//   .then(function (resultados) {
//     console.log(resultados);
//   })
//   .catch(function (error) {
//     console.error("Error al insertar datos", error);
//   });

// var insertData2 = "INSERT INTO profesores (nombre, apellido) VALUES (?, ?)";
// var profesorData = { nombre: "Florencia", apellido: "Heredia" };

// pool
//   .query(insertData2, [profesorData.nombre, profesorData.apellido])
//   .then(function (resultados) {
//     console.log(resultados);
//   })
//   .catch(function (error) {
//     console.error("Error al insertar datos", error);
//   });

//Cargar varios profesores a la vez

var insertData3 = "INSERT INTO profesores (nombre, apellido) VALUES ?";
var profesorsData = [
  ["Juana", "Perez"],
  ["Ignacio", "Gutierrez"],
  ["Camila", "Heredia"],
];

pool
  .query(insertData3, [profesorsData])
  .then(function (resultados) {
    console.log(resultados);
  })
  .catch(function (error) {
    console.error("Error al insertar datos", error);
  });
