import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

// Configuración
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// 🔌 Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB conectado 🚀"))
  .catch(err => console.log(err));

// 🧱 Modelo de Turno
const turnoSchema = new mongoose.Schema({
  cliente: String,
  servicio: String
});

const Turno = mongoose.model("Turno", turnoSchema);

// 🏠 Ruta principal
app.get("/", (req, res) => {
  res.send("Backend Barbería funcionando 💈");
});

// 📋 Obtener turnos
app.get("/api/turnos", async (req, res) => {
  try {
    const turnos = await Turno.find();
    res.json(turnos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener turnos" });
  }
});

// ➕ Crear turno
app.post("/api/turnos", async (req, res) => {
  try {
    const nuevoTurno = new Turno({
      cliente: req.body.cliente,
      servicio: req.body.servicio
    });

    await nuevoTurno.save();

    res.json(nuevoTurno);
  } catch (error) {
    res.status(500).json({ error: "Error al crear turno" });
  }
});

// ❌ Eliminar turno
app.delete("/api/turnos/:id", async (req, res) => {
  try {
    await Turno.findByIdAndDelete(req.params.id);

    res.json({ mensaje: "Turno eliminado" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar turno" });
  }
});

// 🚀 Servidor
app.listen(3000, () => {
  console.log("Servidor en http://localhost:3000");
});