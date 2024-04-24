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
    const { password, ...rest } = savedUser;
    res.status(200).json(rest);
  } catch (error) {
    res.status(500).json({ message: "internal server error", error });
  }
};

export const get = async (req, res) => {
  try {
    const users = await User.find();
    if (users.length === 0) {
      return res.status(404).json({ message: "There are no users" });
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};

export const update = async (req, res) => {
  try {
    //saber que vamos a actualizar con un identificador unico
    const id = req.params.id;
    //saber si existe la entidad a actualizar
    const userExist = await User.findOne({ _id: id });
    console.log(req.params.id);
    if (!userExist) {
      return res.status(404).json({ message: "User not found" });
    }
    //actualizamos datos de usuario
    const updateUser = await User.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(updateUser);
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const _id = req.params.id;
    const userExist = await User.findOne({ _id });
    if (!userExist) {
      return res.status(404).json({ message: "User not found" });
    }
    await User.findByIdAndDelete(_id);
    res.status(201).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};
