import Alumno from "../models/alumnoModel.js";

export const fetch = async (req, res) => {
  try {
    const alumnos = await Alumno.find();
    if (alumnos.length === 0) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json(alumnos);
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};
