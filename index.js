import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import Servicio from "./src/models/servicio.js";
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

// Obtener todos los servicios
app.get("/api/servicios", async (req, res) => {
  try {
    const servicios = await Servicio.find();
    res.json(servicios);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
});

// Crear servicio
app.post("/api/servicios", async (req, res) => {
  try {
    const nuevoServicio = new Servicio(req.body);
    const servicioGuardado = await nuevoServicio.save();
    res.status(201).json(servicioGuardado);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
});

// Actualizar servicio
app.put("/api/servicios/:id", async (req, res) => {
  try {
    const servicioActualizado = await Servicio.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );

    res.json(servicioActualizado);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
});

// Eliminar servicio
app.delete("/api/servicios/:id", async (req, res) => {
  try {
    await Servicio.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Servicio eliminado" });
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
});

// Conexión a MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB conectado 🚀"))
  .catch((err) => console.log("Error MongoDB:", err));

// Error 404 - Ruta no encontrada
app.use((req, res) => {
  res.status(404).json({
    status: 404,
    message: "Ruta no encontrada",
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT} 🚀`);
});
