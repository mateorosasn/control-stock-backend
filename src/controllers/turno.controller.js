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

    const nuevoTurno = new Turno({
      nombre,
      telefono,
      servicio,
      barbero,
      fecha,
      hora,
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

    const { nombre, telefono, servicio, barbero, fecha, hora } = req.body;

    const turnoActualizado = await Turno.findByIdAndUpdate(
      id,
      {
        nombre,
        telefono,
        servicio,
        barbero,
        fecha,
        hora,
      },
      {
        new: true,
      },
    );

    res.json(turnoActualizado);
  } catch (error) {
    res.status(500).json({
      message: "Error al actualizar turno",
    });
  }
};
