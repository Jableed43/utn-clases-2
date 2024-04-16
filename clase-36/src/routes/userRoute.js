import express from "express";
import { create, get } from "../controllers/userController.js";

const userRoute = express.Router();

userRoute.post("/create", create);
userRoute.get("/getAll", get);

export default userRoute;
