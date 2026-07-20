import express from "express";

import {
  obtenerTurnos,
  crearTurno,
  eliminarTurno,
  actualizarTurno,
} from "../controllers/turno.controller.js";

const router = express.Router();

// Obtener todos los turnos
router.get("/", obtenerTurnos);

// Crear un turno
router.post("/", crearTurno);

// Actualizar un turno (incluye cambiar el estado a Confirmado)
router.put("/:id", actualizarTurno);

// Eliminar un turno
router.delete("/:id", eliminarTurno);

export default router;