import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Producto from "./models/Producto.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// 🔌 Conexión MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB conectado 🚀"))
  .catch((err) => console.log(err));

// 🏠 Ruta principal
app.get("/", (req, res) => {
  res.send("API Control Stock 🚀");
});

// 📋 Obtener productos
app.get("/api/productos", async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
});

// ➕ Crear producto
app.post("/api/productos", async (req, res) => {
  try {
    const nuevoProducto = new Producto({
      nombre: req.body.nombre,
      stock: req.body.stock,
      descripcion: req.body.descripcion,
      categoria: req.body.categoria,
    });

    const productoGuardado = await nuevoProducto.save();

    res.json(productoGuardado);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
});

// ❌ Eliminar producto
app.delete("/api/productos/:id", async (req, res) => {
  console.log("INTENTANDO ELIMINAR:", req.params.id);

  try {
    await Producto.findByIdAndDelete(req.params.id);

    res.json({
      mensaje: "Producto eliminado",
    });
  } catch (error) {
    console.log("ERROR AL ELIMINAR:", error);

    res.status(500).json({
      mensaje: error.message,
    });
  }
});

app.listen(3000, () => {
  console.log("Servidor en http://localhost:3000");
});