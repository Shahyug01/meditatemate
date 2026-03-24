import {useState} from "react";
import api from "../api";
import {useNavigate} from "react-router-dom";

export default function Login(){

const navigate = useNavigate();
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const login = async()=>{
try{
const res = await api.post("/auth/login",{email,password});
localStorage.setItem("userId",res.data.userId);
localStorage.setItem("name",res.data.name);
navigate("/dashboard");
}catch{
alert("Login Failed");
}
}

return(

<div className="page-bg center">

<div className="glass" style={{width:"400px"}}>

<h2 style={{textAlign:"center",marginBottom:"20px"}}>Welcome Back</h2>

<input className="input" placeholder="Email"
onChange={e=>setEmail(e.target.value)} />

<input className="input" type="password" placeholder="Password"
onChange={e=>setPassword(e.target.value)} />

<button className="btn" onClick={login}>Login</button>

</div>

</div>
);
}
