const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

/* ===== MIDDLEWARE ===== */
app.use(cors());
app.use(express.json());

/* ===== DEBUG LOG ===== */
console.log("Server starting...");

/* ===== ROUTES ===== */

const authRoutes = require("./routes/authRoutes");
const moodRoutes = require("./routes/moodRoutes");
const sessionRoutes = require("./routes/sessionRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/mood", moodRoutes);
app.use("/api/session", sessionRoutes);

/* ===== TEST ROUTES ===== */

app.get("/", (req, res) => {
  res.send("Server Running ✅");
});

app.get("/test", (req, res) => {
  res.send("API Working ✅");
});

/* ===== ERROR HANDLER ===== */
app.use((req, res) => {
  res.status(404).json({
    message: "Route not found ❌",
    url: req.originalUrl
  });
});

/* ===== START SERVER ===== */

const PORT = process.env.PORT || 5000;

// ✅ FIXED MongoDB connection (NO OPTIONS)
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB Connected ✅");

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})
.catch((err) => {
  console.log("MongoDB Error ❌");
  console.log(err.message);
});