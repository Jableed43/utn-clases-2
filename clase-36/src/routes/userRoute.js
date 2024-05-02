import express from "express";
import {
  create,
  get,
  update,
  deleteUser,
  validate,
  updateView,
  loginView,
} from "../controllers/userController.js";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware.js";

const userRoute = express.Router();

//endpoints
userRoute.post("/create", create);
userRoute.get("/create", (req, res) => {
  res.render("create");
});
userRoute.get("/getAll", verifyTokenMiddleware, get);
// /:id -> req.param.id
userRoute.get("/update/:id", updateView);
userRoute.put("/update/:id", update);
userRoute.delete("/deleteUser/:id", deleteUser);
userRoute.get("/login", loginView);
userRoute.post("/login", validate);

export default userRoute;
