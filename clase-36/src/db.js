import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGOURI = process.env.MONGODB_URI;

//Conexion a base de datos
export const connectDB = async () => {
  try {
    await mongoose.connect(MONGOURI);
    console.log("Database connected");
  } catch (error) {
    console.error("Error connecting to database:", error);
    process.exit(1);
  }
};
