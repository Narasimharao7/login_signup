import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();

/* -------------------- CORS CONFIG -------------------- */
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://login-signup-hazel-one.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  }),
);

/* -------------------- MIDDLEWARE -------------------- */
app.use(express.json());

/* -------------------- ROUTES -------------------- */
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

/* -------------------- HEALTH CHECK -------------------- */
app.get("/", (req, res) => {
  res.send("Backend running successfully 🚀");
});

/* -------------------- START SERVER AFTER DB CONNECT -------------------- */
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected ✅");

    await sequelize.sync(); // ✅ NO alter in production
    console.log("Database synced 🔥");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("DB connection error ❌", error);
    process.exit(1); // stop server if DB fails
  }
};

startServer();
