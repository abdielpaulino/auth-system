import express from "express";
import cors from "cors";
import apiRoutes from "./routes/apiRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));

app.use(express.json({ limit: "10kb" }));

// Routes------------------------------------------------------
app.use(apiRoutes);
app.use("/api/auth", authRoutes);

// Globa Erros Message-----------------------------------------
app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    error: "Internal server error.",
  });
});

export default app;
