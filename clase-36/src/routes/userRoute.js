import express from "express";
import {
  create,
  get,
  update,
  deleteUser,
  validate,
} from "../controllers/userController.js";
import User from "../models/userModel.js";

const userRoute = express.Router();

//endpoints
userRoute.post("/create", create);
// userRoute.get("/getAll", get);
// /:id -> req.param.id
userRoute.put("/update/:id", update);
userRoute.delete("/deleteUser/:id", deleteUser);
userRoute.post("/login", validate);

// vistas:
userRoute.get("/create", (req, res) => {
  res.render("create", { title: "Create User" });
});

userRoute.get("/getAll", async (req, res) => {
  // Simplemente renderiza la vista, los datos se pueden pasar desde el controlador si es necesario
  try {
    const users = await User.find();
    res.render("getAll", { title: "All Users", users: users });
    console.log(users);
  } catch (error) {
    console.log(error);
  }
});

userRoute.get("/update/:id", (req, res) => {
  res.render("update", {
    title: "Update User",
    userId: req.params.id,
    user: {},
  });
});

userRoute.get("/deleteUser/:id", (req, res) => {
  res.render("delete", { title: "Delete User", userId: req.params.id });
});

userRoute.get("/login", (req, res) => {
  res.render("login", { title: "Login" });
});
export default userRoute;
