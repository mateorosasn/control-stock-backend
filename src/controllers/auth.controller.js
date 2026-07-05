import User from "../models/User.js";
import bcrypt from "bcrypt";

// 🟢 Registrar usuario
export const registrar = async (req, res) => {
  try {
    const { nombre, email, password, role } = req.body;

    const existe = await User.findOne({ email });

    if (existe) {
      return res.status(400).json({
        message: "El usuario ya existe",
      });
    }

    const passwordEncriptada = await bcrypt.hash(password, 10);

    const nuevoUsuario = new User({
      nombre,
      email,
      password: passwordEncriptada,
      role: role || "user",
    });

    await nuevoUsuario.save();

    res.status(201).json({
      message: "Usuario registrado correctamente",
      usuario: {
        nombre: nuevoUsuario.nombre,
        email: nuevoUsuario.email,
        role: nuevoUsuario.role,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// 🟢 Login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "Usuario no existe",
      });
    }

    const coincide = await bcrypt.compare(password, user.password);

    if (!coincide) {
      return res.status(401).json({
        message: "Contraseña incorrecta",
      });
    }

    res.json({
      message: "Login exitoso",
      usuario: {
        nombre: user.nombre,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Error en login",
    });
  }
};
