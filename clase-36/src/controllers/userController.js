import User from "../models/userModel.js";

export const create = async (req, res) => {
  try {
    // tomar datos de body (post)
    const userData = new User(req.body);

    // buscar si existe usuario (filtrar por email)
    //destructuracion
    const { email } = userData;
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res
        .status(400)
        .json({ message: `User with email: ${email} already exist` });
    }
    // guardar el usuario
    const savedUser = await userData.save();
    // mostrar informacion del usuario guardado
    res.status(200).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};

export const get = async (req, res) => {
  try {
    const users = await User.find();
    if (users.length === 0) {
      return res.status(404).json({ messaje: "There are no users" });
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};
