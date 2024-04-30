import { Router } from "express";
import {
  create,
  deleteProduct,
  findOne,
  getAll,
  update,
} from "../controllers/productController.js";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware.js";

const productRoute = Router();

//endpoints
productRoute.post("/create", verifyTokenMiddleware, create);
productRoute.get("/getAll", verifyTokenMiddleware, getAll);
//por params le paso name
productRoute.get("/findOne/:name", verifyTokenMiddleware, findOne);
productRoute.delete("/delete/:id", verifyTokenMiddleware, deleteProduct);
productRoute.put("/update/:id", verifyTokenMiddleware, update);
export default productRoute;
