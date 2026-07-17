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
    const { nombre, telefono, servicio, barbero, fecha, hora, usuario } =
      req.body;
    // Validar campos obligatorios
    if (!nombre || !telefono || !servicio || !barbero || !fecha || !hora) {
      return res.status(400).json({
        message: "Todos los campos son obligatorios.",
      });
    }

    // Validar teléfono (solo números y mínimo 8 dígitos)
    if (!/^[0-9]{8,15}$/.test(telefono)) {
      return res.status(400).json({
        message: "El teléfono ingresado no es válido.",
      });
    }

    // Validar fecha anterior
    const hoy = new Date().toISOString().split("T")[0];

    if (fecha < hoy) {
      return res.status(400).json({
        message: "No se pueden reservar turnos en fechas anteriores.",
      });
    }

    // Verificar horario ocupado
    const turnoExistente = await Turno.findOne({
      barbero,
      fecha,
      hora,
    });

    if (turnoExistente) {
      return res.status(400).json({
        message: "Ese horario ya está ocupado para ese barbero.",
      });
    }

    const nuevoTurno = new Turno({
      usuario,
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
// Actualizar turno
export const actualizarTurno = async (req, res) => {
  try {
    const { id } = req.params;

    const { nombre, telefono, servicio, barbero, fecha, hora } = req.body;

    // Validar campos obligatorios
    if (!nombre || !telefono || !servicio || !barbero || !fecha || !hora) {
      return res.status(400).json({
        message: "Todos los campos son obligatorios.",
      });
    }

    // Validar teléfono
    if (!/^[0-9]{8,15}$/.test(telefono)) {
      return res.status(400).json({
        message: "El teléfono ingresado no es válido.",
      });
    }

    // Validar fecha anterior
    const hoy = new Date().toISOString().split("T")[0];

    if (fecha < hoy) {
      return res.status(400).json({
        message: "No se pueden reservar turnos en fechas anteriores.",
      });
    }

    // Verificar si el horario está ocupado por otro turno
    const turnoExistente = await Turno.findOne({
      _id: { $ne: id },
      barbero,
      fecha,
      hora,
    });

    if (turnoExistente) {
      return res.status(400).json({
        message: "Ese horario ya está ocupado para ese barbero.",
      });
    }

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
    ).populate("servicio");

    res.status(200).json(turnoActualizado);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Error al actualizar turno",
    });
  }
};
