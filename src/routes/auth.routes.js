import express from "express";
import { registrar, loginAdmin } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/registrar", registrar);
router.post("/login", loginAdmin);

export default router;