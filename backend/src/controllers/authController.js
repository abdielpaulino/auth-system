/* Database Import---------------------------------------------*/
import { createUser } from "../models/userModel.js";

/* Register----------------------------------------------------*/
export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const result = await createUser(name, email, password);

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
  const { email, password } = req.body;

  res.json({
    message: "User successfully logged in.",
    email,
  });
};
