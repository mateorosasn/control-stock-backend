import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import turnoRoutes from "./src/routes/turno.routes.js";
import authRoutes from "./src/routes/auth.routes.js";


dotenv.config();

const app = express();

// 🔧 Middlewares
app.use(cors());
app.use(express.json());

// 🧾 Rutas
app.use("/api/auth", authRoutes);
app.use("/api/turnos", turnoRoutes);

// 🏠 Ruta principal
app.get("/", (req, res) => {
  res.send("API Barbería funcionando 💈");
});

// 🔌 Conexión a MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB conectado 🚀"))
  .catch((err) => console.log("Error MongoDB:", err));

// 🚀 Iniciar servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT} 🚀`);
});