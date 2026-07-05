import express from "express";

import {
  obtenerTurnos,
  crearTurno,
  eliminarTurno,
  actualizarTurno,
} from "../controllers/turno.controller.js";

const router = express.Router();

router.get("/", obtenerTurnos);

router.post("/", crearTurno);

router.delete("/:id", eliminarTurno);

router.put("/:id", (req, res) => {
  res.send("Funcionando  ");
});

export default router;
