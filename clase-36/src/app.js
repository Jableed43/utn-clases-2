import express from "express";
import bodyParser from "body-parser";
import { connectDB } from "./db.js";
import { PORT } from "./config.js";
import userRoute from "./routes/userRoute.js";
import productRoute from "./routes/productRoute.js";

const app = express();
app.use(bodyParser.json());

// Conexión a la base de datos
connectDB();

// Rutas de la aplicación
//ruta base
app.get("/", (req, res) => {
  res.send("hello world");
});

//rutas de usuario
app.use("/api/user", userRoute);

//rutas de producto
app.use("/api/product", productRoute);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
