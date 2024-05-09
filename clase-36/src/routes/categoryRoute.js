import { Router } from "express";
import {
  getAll,
  create,
  deleteCategory,
  createView,
} from "../controllers/categoryController.js";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware.js";

const categoryRoute = Router();

categoryRoute.post("/create", verifyTokenMiddleware, create);
categoryRoute.delete("/delete/:id", verifyTokenMiddleware, deleteCategory);

// views
categoryRoute.get("/getAll", getAll);
categoryRoute.get("/create", createView);

export default categoryRoute;
