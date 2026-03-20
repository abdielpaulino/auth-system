// Bcrypt Import-----------------------------------------------
import bcrypt from "bcrypt";
// Database Import---------------------------------------------
import { createUser, findUserByEmail } from "../models/userModel.js";

// Register----------------------------------------------------
export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await findUserByEmail(email);

    if (existingUser) {
      return res.status(409).json({
        error: "Email is already in use.",
      });
    }

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

// Login-------------------------------------------------------
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const normalizedEmail = email.trim().toLowerCase();

    const user = await findUserByEmail(normalizedEmail);

    if (!user) {
      return res.status(401).json({
        error: "Invalid credentials.",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        error: "Invalid credentials.",
      });
    }

    return res.status(200).json({
      message: "Login successful.",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login error:", error);

    return res.status(500).json({
      error: "Internal server error.",
    });
  }
};
