//nueva tabla
var createTableQuery =
  "CREATE TABLE empleados (id INT AUTO_INCREMENT PRIMARY KEY, nombre VARCHAR(255), salario DECIMAL(10,2))";

pool
  .query(createTableQuery)
  .then(function (resultados) {
    console.log("Tabla 'empleados' creada correctamente.");
  })
  .catch(function (error) {
    console.error("Error al crear la tabla 'empleados':", error);
  });

//modificar tabla
var alterTableQuery = "ALTER TABLE empleados ADD COLUMN edad INT";

pool
  .query(alterTableQuery)
  .then(function (resultados) {
    console.log("Tabla 'empleados' modificada correctamente.");
  })
  .catch(function (error) {
    console.error("Error al modificar la tabla 'empleados':", error);
  });

//eliminar tabla
var dropTableQuery = "DROP TABLE empleados";

pool
  .query(dropTableQuery)
  .then(function (resultados) {
    console.log("Tabla 'empleados' eliminada correctamente.");
  })
  .catch(function (error) {
    console.error("Error al eliminar la tabla 'empleados':", error);
  });
