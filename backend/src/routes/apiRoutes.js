import express from "express";

const router = express.Router();

router.get("/api", (req, res) => {
  res.json({ message: "API funfa!" });
});

export default router;
