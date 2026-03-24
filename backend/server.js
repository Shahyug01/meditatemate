const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

/* ===== MIDDLEWARE ===== */
app.use(cors({
  origin: "*"
}));

app.use(express.json());

/* ===== ROOT ROUTE ===== */
app.get("/", (req, res) => {
  res.send("🚀 MeditateMate API Running");
});

/* ===== ROUTES ===== */
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/mood", require("./routes/moodRoutes"));
app.use("/api/session", require("./routes/sessionRoutes"));

/* ===== DATABASE + SERVER START ===== */
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("✅ MongoDB Connected");

  app.listen(PORT, () => {
    console.log("🚀 Server running on port " + PORT);
  });

})
.catch((err) => {
  console.log("❌ MongoDB Connection Failed");
  console.log(err);
  process.exit(1); // VERY IMPORTANT for Render
});