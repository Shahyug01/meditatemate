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

/* ===== ROUTES ===== */
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/mood", require("./routes/moodRoutes"));
app.use("/api/session", require("./routes/sessionRoutes"));

/* ===== ROOT TEST ROUTE ===== */
app.get("/", (req,res)=>{
res.send("MeditateMate API Running 🚀");
});

/* ===== DATABASE CONNECTION ===== */
const startServer = async ()=>{

try{

await mongoose.connect(process.env.MONGO_URI);

console.log("✅ MongoDB Connected");

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
console.log(`🚀 Server running on port ${PORT}`);
});

}catch(err){

console.log("❌ MongoDB Connection Failed");
console.log(err);

}

};

startServer();
