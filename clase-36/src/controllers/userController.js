import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const create = async (req, res) => {
  try {
    // tomar datos de body (post)
    const userData = new User(req.body);
    // buscar si existe usuario (filtrar por email)
    //destructuracion
    const { email } = userData;
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.render("create", {
        message: `El email: ${email} ya está en uso`,
      });
    }
    // guardar el usuario
    await userData.save();
    res.render("home");
  } catch (error) {
    res.status(500).render("500", { message: "internal server error" });
  }
};

export const get = async (req, res) => {
  try {
    //user.find trae un mongoose document, con lean se pasa a objeto
    const users = await User.find().lean();
    if (users.length === 0) {
      return res.render("getAll", { message: "No hay usuarios" });
    }
    res.render("getAll", { users: users, titulo: "Todos los usuarios" });
  } catch (error) {
    res.status(500).render("500", { message: "internal server error" });
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
    await User.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.redirect("/api/user/getAll");
  } catch (error) {
    res.status(500).render("500", { message: "internal server error" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const _id = req.params.id;
    await User.findByIdAndDelete(_id);
    res.redirect("/api/user/getAll");
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};

export const validate = async (req, res) => {
  try {
    const userFound = await User.findOne({ email: req.body.email });
    console.log(userFound);
    if (!userFound) {
      res
        .status(400)
        .json({ message: "El email y/o la contraseña son incorrectos" });
    }
    //La contraseña que llega de body la encriptamos y la comparamos contra la guardada
    if (bcrypt.compareSync(req.body.password, userFound.password)) {
      //payload, secreto, tiempo de expiracion
      const payload = {
        userId: userFound._id,
        userEmail: userFound.email,
      };
      //firmar token
      const token = jwt.sign(payload, "secreto", { expiresIn: "1h" });
      req.session.token = token;
      console.log(req.session.token);
      res.redirect("/api/user/getAll");
    } else {
      res.render("login", {
        message: "El email y/o contraseña son incorrectos",
      });
      return;
    }
  } catch (error) {
    res.status(500).render("500", { message: "internal server error" });
  }
};

export const updateView = async (req, res) => {
  try {
    const _id = req.params.id;
    const userFound = await User.findOne({ _id }).lean();
    res.render("update", { user: userFound });
  } catch (error) {
    res.status(500).render("500", { message: "internal server error" });
  }
};

export const loginView = (req, res) => {
  res.render("login");
};

export const destroySession = (req, res) => {
  req.session.destroy(error => {
    if (error) {
      res.render("getAll", { message: "error al destruir sesion" });
    }
    res.redirect("/api/user/login");
  });
};

export const createView = (req, res) => {
  res.render("create");
};
