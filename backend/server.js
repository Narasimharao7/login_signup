import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./config/db.js"; // database connection

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import User from "./models/User.js"; // import models to sync tables

dotenv.config();

const app = express();

/* -------------------- CORS CONFIG -------------------- */
app.use(
  cors({
    origin: [
      "http://localhost:5173", // local frontend
      "https://login-signup-hazel-one.vercel.app", // deployed frontend
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  }),
);

/* Handle preflight requests */
app.options("*", cors());

/* -------------------- MIDDLEWARE -------------------- */
app.use(express.json());

/* -------------------- ROUTES -------------------- */
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

/* -------------------- HEALTH CHECK -------------------- */
app.get("/", (req, res) => {
  res.send("Backend running successfully 🚀");
});

/* -------------------- DATABASE SYNC -------------------- */
sequelize
  .sync({ alter: true })
  .then(() => console.log("Database tables synced 🔥"))
  .catch((err) => console.log("Database sync error ❌", err));

/* -------------------- START SERVER -------------------- */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
