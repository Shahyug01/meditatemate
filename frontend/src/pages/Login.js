import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

export default function Login(){

const navigate = useNavigate();

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [loading,setLoading] = useState(false);
const [error,setError] = useState("");

const handleLogin = async ()=>{

setError("");
setLoading(true);

try{

const res = await api.post("/auth/login",{
email,
password
});

localStorage.setItem("token",res.data.token);
localStorage.setItem("userId",res.data.user._id);
localStorage.setItem("name",res.data.user.name);

navigate("/dashboard");

}catch(err){

if(err.response){

if(err.response.status === 404){
setError("User does not exist. Redirecting to Register...");
setTimeout(()=>navigate("/register"),2000);
}

else if(err.response.status === 401){
setError("Incorrect password");
}

else{
setError("Server error. Try again.");
}

}else{
setError("Backend not reachable");
}

}

setLoading(false);
};

return(

<div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-100 to-purple-200">

<div className="bg-white p-10 rounded-3xl shadow-2xl w-[400px]">

<h2 className="text-3xl font-bold text-center mb-6">
Welcome Back
</h2>

<input
className="w-full p-3 mb-4 border rounded-xl"
placeholder="Email"
value={email}
onChange={e=>setEmail(e.target.value)}
/>

<input
className="w-full p-3 mb-4 border rounded-xl"
type="password"
placeholder="Password"
value={password}
onChange={e=>setPassword(e.target.value)}
/>

{error && (
<p className="text-red-500 text-center mb-3">{error}</p>
)}

<button
onClick={handleLogin}
className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-xl font-bold"
>

{loading ? "Logging..." : "Login"}

</button>

</div>

</div>
);
}