const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/register", async (req,res)=>{
  try{

    console.log(req.body);   // debugging line

    const {name,email,password} = req.body;

    if(!name || !email || !password){
      return res.status(400).json("All fields required");
    }

    const exist = await User.findOne({email});
    if(exist){
      return res.status(400).json("User already exists");
    }

    const hash = await bcrypt.hash(password,10);

    const user = await User.create({
      name,
      email,
      password:hash
    });

    res.json(user);

  }catch(err){
    console.log("REGISTER ERROR:",err);
    res.status(500).json("Register Server Error");
  }
});

router.post("/login", async (req,res)=>{
  try{

    const {email,password} = req.body;

    const user = await User.findOne({email});
    if(!user) return res.status(400).json("User not found");

    const match = await bcrypt.compare(password,user.password);
    if(!match) return res.status(400).json("Wrong Password");

    const token = jwt.sign({id:user._id},process.env.JWT_SECRET);

    res.json({
      token,
      userId:user._id,
      name:user.name
    });

  }catch(err){
    console.log("LOGIN ERROR:",err);
    res.status(500).json("Login Server Error");
  }
});

module.exports = router;