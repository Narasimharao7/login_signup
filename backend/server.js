import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();

/* ✅ CORS CONFIG — MUST BE AT TOP */
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

/* ✅ Handle Preflight */
app.options("*", cors());

app.use(express.json());

/* ✅ ROUTES */
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

/* ✅ HEALTH CHECK */
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
