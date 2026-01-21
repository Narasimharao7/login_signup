const express = require("express");
const { signup, login } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

// Protected route
router.get("/dashboard", authMiddleware, (req, res) => {
  res.json({ message: "Welcome to dashboard", userId: req.userId });
});

module.exports = router;
