const mongoose = require("mongoose");

const SessionSchema = new mongoose.Schema({
userId:String,
duration:Number,
type:String,
date:{type:Date,default:Date.now}
});

module.exports = mongoose.model("Session",SessionSchema);