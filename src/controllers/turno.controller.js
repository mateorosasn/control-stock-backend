import Turno from "../models/Turno.js";

// Obtener todos los turnos
export const obtenerTurnos = async (req, res) => {
  try {
    const turnos = await Turno.find().populate("servicio");

    res.json(turnos);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener los turnos",
    });
  }
};

// Crear turno
export const crearTurno = async (req, res) => {
  try {
    const { nombre, telefono, servicio, barbero, fecha, hora } = req.body;

    // Verificar si el horario ya está ocupado para ese barbero
    const turnoExistente = await Turno.findOne({
      barbero,
      fecha,
      hora,
    });

   if (turnoExistente) {
  console.log("⚠️ Horario ocupado");

  return res.status(400).json({
    message: "Ese horario ya está ocupado para ese barbero.",
  });
}

console.log("✅ Creando turno");

    const nuevoTurno = new Turno({
      nombre,
      telefono,
      servicio,
      barbero,
      fecha,
      hora,
      estado: "Pendiente",
    });

    const turnoGuardado = await nuevoTurno.save();

    res.status(201).json(turnoGuardado);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Error al crear turno",
    });
  }
};

// Eliminar turno
export const eliminarTurno = async (req, res) => {
  try {
    const { id } = req.params;

    await Turno.findByIdAndDelete(id);

    res.json({
      message: "Turno eliminado correctamente",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al eliminar turno",
    });
  }
};

// Actualizar turno
export const actualizarTurno = async (req, res) => {
  try {
    const { id } = req.params;

    const turnoActualizado = await Turno.findByIdAndUpdate(
      id,
      {
        ...req.body,
      },
      {
        new: true,
      }
    ).populate("servicio");

    res.json(turnoActualizado);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Error al actualizar turno",
    });
  }
};