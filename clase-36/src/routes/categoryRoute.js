import { Router } from "express";
import { getAll, create } from "../controllers/categoryController.js";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware.js";

const categoryRoute = Router();

categoryRoute.get("/getAll", getAll);
categoryRoute.post("/create", verifyTokenMiddleware, create);

export default categoryRoute;
