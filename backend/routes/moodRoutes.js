const router = require("express").Router();
const Mood = require("../models/Mood");

router.post("/add", async(req,res)=>{
const mood = await Mood.create(req.body);
res.json(mood);
});

router.get("/:userId", async(req,res)=>{
const moods = await Mood.find({userId:req.params.userId});
res.json(moods);
});

module.exports = router;