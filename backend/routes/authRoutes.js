const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

/* ===== REGISTER ===== */
router.post("/register", async (req, res) => {
  try {
    console.log("Register route hit ✅");

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword
    });

    await user.save();

    return res.status(201).json({
      success: true,
      message: "User registered successfully"
    });

  } catch (err) {
    console.log("REGISTER ERROR ❌:", err.message);

    return res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
});

/* ===== LOGIN ===== */
router.post("/login", async (req, res) => {
  try {
    console.log("Login route hit ✅");

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password required"
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found"
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Incorrect password"
      });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });

  } catch (err) {
    console.log("LOGIN ERROR ❌:", err.message);

    return res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
});

module.exports = router;