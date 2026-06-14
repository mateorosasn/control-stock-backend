import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Producto from "./models/Producto.js";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// 🔌 Conexión a MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB conectado 🚀"))
  .catch((err) => console.log(err));

// 🏠 Ruta principal
app.get("/", (req, res) => {
  res.send("API Barbería funcionando 💈");
});

// 📋 Obtener todos los productos
app.get("/api/productos", async (req, res) => {
  try {
    const productos = await Producto.find();

    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({
      mensaje: error.message,
    });
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

    res.status(201).json(productoGuardado);
  } catch (error) {
    res.status(500).json({
      mensaje: error.message,
    });
  }
});

// ✏️ Editar producto
app.put("/api/productos/:id", async (req, res) => {
  try {
    const productoActualizado = await Producto.findByIdAndUpdate(
      req.params.id,
      {
        nombre: req.body.nombre,
        stock: req.body.stock,
        descripcion: req.body.descripcion,
        categoria: req.body.categoria,
      },
      {
        new: true,
      }
    );

    res.status(200).json(productoActualizado);
  } catch (error) {
    res.status(500).json({
      mensaje: error.message,
    });
  }
});

// ❌ Eliminar producto
app.delete("/api/productos/:id", async (req, res) => {
  try {
    await Producto.findByIdAndDelete(req.params.id);

    res.status(200).json({
      mensaje: "Producto eliminado correctamente",
    });
  } catch (error) {
    res.status(500).json({
      mensaje: error.message,
    });
  }
});

// 🚀 Iniciar servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT} 🚀`);
});