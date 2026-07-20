import User from "../models/User.js";
import bcrypt from "bcrypt";

// 🟢 Registrar usuario
export const registrar = async (req, res) => {
  try {
    const { nombre, email, password, role } = req.body;

    if (!nombre || !email || !password) {
      return res.status(400).json({
        message: "Todos los campos son obligatorios",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        message: "La contraseña debe tener mínimo 6 caracteres",
      });
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValido.test(email)) {
      return res.status(400).json({
        message: "El email ingresado no es válido",
      });
    }

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
        _id: nuevoUsuario._id,
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

    if (!email || !password) {
      return res.status(400).json({
        message: "Todos los campos son obligatorios",
      });
    }

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

    return res.status(200).json({
      message: "Login exitoso",
      usuario: {
        _id: user._id,
        nombre: user.nombre,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Error en login",
    });
  }
};
