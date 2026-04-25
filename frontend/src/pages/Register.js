import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

export default function Register(){

const navigate = useNavigate();

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [loading,setLoading] = useState(false);

const registerUser = async ()=>{

try{

setLoading(true);

const res = await api.post("/auth/register",{
name,
email,
password
});

if(res.data.success){

alert("Registration Successful 🎉");
navigate("/login");

}

}catch(err){

if(err.response){

alert(err.response.data.message || "Registration Failed");

}else{

alert("Backend not reachable");

}

}finally{

setLoading(false);

}

};

return(

<div
className="min-h-screen flex items-center justify-center px-4"
style={{
background:"linear-gradient(135deg,#e0f2fe,#ede9fe)"
}}
>

<div
className="w-full max-w-md p-10 rounded-3xl shadow-xl"
style={{
background:"rgba(255,255,255,0.7)",
backdropFilter:"blur(12px)"
}}
>

<h2 className="text-3xl font-bold text-center mb-8 text-gray-700">
Create Account
</h2>

<input
type="text"
placeholder="Name"
value={name}
onChange={e=>setName(e.target.value)}
className="w-full p-4 mb-5 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-purple-300"
/>

<input
type="email"
placeholder="Email"
value={email}
onChange={e=>setEmail(e.target.value)}
className="w-full p-4 mb-5 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-purple-300"
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={e=>setPassword(e.target.value)}
className="w-full p-4 mb-6 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-purple-300"
/>

<button
onClick={registerUser}
disabled={loading}
className="w-full py-4 rounded-xl text-white font-semibold text-lg transition"
style={{
background:"linear-gradient(90deg,#8b5cf6,#a78bfa)"
}}
>
{loading ? "Creating..." : "Register"}
</button>

<p className="text-center mt-6 text-gray-600">
Already have account?
<span
onClick={()=>navigate("/login")}
className="text-purple-600 font-semibold cursor-pointer ml-2"
>
Login
</span>
</p>

</div>

</div>

);
}