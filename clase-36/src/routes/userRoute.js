import express from "express";
import { fetch } from "../controllers/userController.js";

const route = express.Router();

route.get("/getalumnos", fetch);

export default route;
