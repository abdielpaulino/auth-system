import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import { registerValidation } from "../middlewares/registerValidation.js";

const router = express.Router();

router.post("/register", registerValidation, registerUser);
router.post("/login", loginUser);

export default router;
