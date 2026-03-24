const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

/* ===== MIDDLEWARE ===== */
app.use(cors());
app.use(express.json());

/* ===== ROUTES ===== */
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/mood", require("./routes/moodRoutes"));
app.use("/api/session", require("./routes/sessionRoutes"));

/* ===== ROOT ROUTE (IMPORTANT FOR RENDER) ===== */
app.get("/", (req, res) => {
  res.send("MeditateMate API Running 🚀");
});

/* ===== DATABASE + SERVER START ===== */
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("❌ MongoDB Error:", err);
  });