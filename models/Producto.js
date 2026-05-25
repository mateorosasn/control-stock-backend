import mongoose from "mongoose";

const productoSchema = new mongoose.Schema({
  Nombre: {
    type: String,
    required: true,
  },

  stock: {
    type: Number,
    required: true,
  },

  Descripcion: {
    type: String,
    required: true,
  },

  Categoria: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Producto", productoSchema);
