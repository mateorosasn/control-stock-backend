import express from "express";

import {
  obtenerTurnos,
  crearTurno,
  eliminarTurno,
} from "../controllers/turno.controller.js";

const router = express.Router();

// - obtener todos los turnos
router.get("/", obtenerTurnos);

//  crear turno
router.post("/", crearTurno);

//  eliminar turno 
router.delete("/:id", eliminarTurno);

export default router;