import mongoose from "mongoose";

const turnoSchema = new mongoose.Schema(
  {
    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    nombre: {
      type: String,
      required: true,
    },

    telefono: {
      type: String,
      required: true,
    },

    servicio: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Servicio",
      required: true,
    },

    barbero: {
      type: String,
      required: true,
    },

    fecha: {
      type: String,
      required: true,
    },

    hora: {
      type: String,
      required: true,
    },

    estado: {
      type: String,
      default: "Pendiente",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Turno", turnoSchema);