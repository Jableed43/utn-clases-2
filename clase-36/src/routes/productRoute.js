import { Router } from "express";
import {
  create,
  createView,
  deleteProduct,
  findOne,
  getAll,
  update,
  updateView,
} from "../controllers/productController.js";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware.js";

const productRoute = Router();

//endpoints
productRoute.post("/create", create);
//por params le paso name
productRoute.get("/findOne/:name", findOne);
productRoute.delete("/delete/:id", deleteProduct);
productRoute.put("/update/:id", update);

//vistas
productRoute.get("/create", createView);
productRoute.get("/getAll", getAll);
productRoute.get("/update/:id", updateView);

export default productRoute;
