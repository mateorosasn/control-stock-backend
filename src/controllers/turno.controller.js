import Turno from "../models/Turno.js";

// obtener turno
export const obtenerTurnos = async (req, res) => {
  try {
    const turnos = await Turno.find().populate("servicio");
    res.json(turnos);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener turnos" });
  }
};
//  crear turno
export const crearTurno = async (req, res) => {
  try {
    const nuevoTurno = new Turno(req.body);
    const turnoGuardado = await nuevoTurno.save();

    res.status(201).json(turnoGuardado);
  } catch (error) {
    res.status(500).json({ message: "Error al crear turno" });
  }
};

//  eliminar turno
export const eliminarTurno = async (req, res) => {
  try {
    const { id } = req.params;

    await Turno.findByIdAndDelete(id);

    res.json({ message: "Turno eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar turno" });
  }
};
// para actualizar el  turno
export const actualizarTurno = async (req, res) => {
  try {
    const { id } = req.params;

    const turnoActualizado = await Turno.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    res.json(turnoActualizado);
  } catch (error) {
    res.status(500).json({
      message: "Error al actualizar turno",
    });
  }
};