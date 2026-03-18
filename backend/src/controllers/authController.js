/* Bcrypt Import-----------------------------------------------*/
import bcrypt from "bcrypt";
/* Database Import---------------------------------------------*/
import { createUser } from "../models/userModels.js";

/* Register----------------------------------------------------*/
export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const result = await createUser(name, email, hashedPassword);

    res.status(201).json({
      message: "User successfully registered.",
      userId: result.insertId,
      name,
      email,
    });
  } catch (error) {
    console.error("Register error:", error);

    res.status(500).json({
      error: "Internal server error.",
    });
  }
};

/* Login-------------------------------------------------------*/
export const loginUser = (req, res) => {
  const { email } = req.body;

  res.json({
    message: "User successfully logged in.",
    email,
  });
};
