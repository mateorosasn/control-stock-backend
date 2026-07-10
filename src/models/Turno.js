import mongoose from "mongoose";

const turnoSchema = new mongoose.Schema(
  {
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
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Turno", turnoSchema);