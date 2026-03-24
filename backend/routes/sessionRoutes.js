const router = require("express").Router();
const Session = require("../models/Session");

router.post("/start", async(req,res)=>{
const session = await Session.create(req.body);
res.json(session);
});

router.get("/:userId", async(req,res)=>{
const sessions = await Session.find({userId:req.params.userId});
res.json(sessions);
});

module.exports = router;