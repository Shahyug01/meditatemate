import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

export default function Register(){

const navigate = useNavigate();

const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const registerUser = async ()=>{
await api.post("/auth/register",{name,email,password});
navigate("/login");
};

return(

<div className="page-bg center">

<div className="glass" style={{width:"400px"}}>

<h2 style={{textAlign:"center",marginBottom:"20px"}}>Create Account</h2>

<input className="input" placeholder="Name"
onChange={e=>setName(e.target.value)} />

<input className="input" placeholder="Email"
onChange={e=>setEmail(e.target.value)} />

<input className="input" type="password" placeholder="Password"
onChange={e=>setPassword(e.target.value)} />

<button className="btn" onClick={registerUser}>Register</button>

</div>

</div>
);
}
