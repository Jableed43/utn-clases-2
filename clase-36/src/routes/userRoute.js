import express from "express";
import {
  create,
  get,
  update,
  deleteUser,
  validate,
  updateView,
  loginView,
  destroySession,
  createView,
} from "../controllers/userController.js";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware.js";

const userRoute = express.Router();

//endpoints
userRoute.post("/create", create);
// /:id -> req.param.id
userRoute.put("/update/:id", verifyTokenMiddleware, update);
userRoute.delete("/deleteUser/:id", verifyTokenMiddleware, deleteUser);
userRoute.post("/login", validate);
userRoute.post("/logout", destroySession);

//vistas
userRoute.get("/create", createView);
userRoute.get("/getAll", verifyTokenMiddleware, get);
userRoute.get("/update/:id", updateView);
userRoute.get("/login", loginView);

export default userRoute;
