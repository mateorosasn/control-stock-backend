import express from "express";
import { registrar, login } from "../controllers/auth.controller.js";

const router = express.Router();

// Registrar usuario
router.post("/registrar", registrar);

// Iniciar sesión
router.post("/login", login);

export default router;