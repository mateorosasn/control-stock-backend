import Turno from "../models/Turno.js";

// 🟢 OBTENER TURNOS
export const obtenerTurnos = async (req, res) => {
  try {
    const turnos = await Turno.find();
    res.json(turnos);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener turnos" });
  }
};

// 🟡 CREAR TURNO
export const crearTurno = async (req, res) => {
  try {
    const nuevoTurno = new Turno(req.body);
    const turnoGuardado = await nuevoTurno.save();

    res.status(201).json(turnoGuardado);
  } catch (error) {
    res.status(500).json({ message: "Error al crear turno" });
  }
};

// 🔴 ELIMINAR TURNO
export const eliminarTurno = async (req, res) => {
  try {
    const { id } = req.params;

    await Turno.findByIdAndDelete(id);

    res.json({ message: "Turno eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar turno" });
  }
};