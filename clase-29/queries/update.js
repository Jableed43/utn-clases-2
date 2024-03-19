//para actualizar necesitas: criterio(id, email) , datos
import { pool } from "../db.js";

async function actualizar() {
  try {
    var id = 1;
    var updateData = { apellido: "Batman" };
    const resultado = await pool.query(
      "UPDATE alumnos SET ? where idalumnos= ? ",
      [updateData, id]
    );
    console.log(resultado);
  } catch (error) {
    console.error(error);
  } finally {
    await pool.end();
  }
}

actualizar();
