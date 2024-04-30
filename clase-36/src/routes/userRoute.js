import express from "express";
import {
  create,
  get,
  update,
  deleteUser,
  validate,
} from "../controllers/userController.js";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware.js";

const userRoute = express.Router();

//endpoints
userRoute.post("/create", create);
userRoute.get("/getAll", verifyTokenMiddleware, get);
// /:id -> req.param.id
userRoute.put("/update/:id", verifyTokenMiddleware, update);
userRoute.delete("/deleteUser/:id", verifyTokenMiddleware, deleteUser);
userRoute.post("/login", validate);

export default userRoute;
