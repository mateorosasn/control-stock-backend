import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import Producto from "./models/Producto.js";
import turnoRoutes from "./src/routes/turno.routes.js";
import authRoutes from "./src/routes/auth.routes.js";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/auth", authRoutes);
app.use("/api/turnos", turnoRoutes);

// Ruta principal
app.get("/", (req, res) => {
  res.send("API Control Stock 🚀");
});

// Obtener productos
app.get("/api/productos", async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
});

// Crear producto
app.post("/api/productos", async (req, res) => {
  try {
    const nuevoProducto = new Producto(req.body);
    const productoGuardado = await nuevoProducto.save();
    res.json(productoGuardado);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
});

// Eliminar producto
app.delete("/api/productos/:id", async (req, res) => {
  try {
    await Producto.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Producto eliminado" });
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
});

// Conexión a MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB conectado 🚀"))
  .catch((err) => console.log("Error MongoDB:", err));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT} 🚀`);
});