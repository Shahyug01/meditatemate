import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useEffect, useState, useRef } from "react";

export default function Home(){

const navigate = useNavigate();
const { theme, toggleTheme } = useTheme();

const quotesRef = useRef([
"Meditation is not escape, it is awareness.",
"Calm mind brings inner strength and confidence.",
"Peace begins with a single deep breath.",
"Train your mind to stay present.",
"Yoga is the journey of the self.",
"Small daily meditation creates powerful change.",
"Your calm mind is your biggest strength."
]);

const [quote,setQuote] = useState(quotesRef.current[0]);

useEffect(()=>{
const interval = setInterval(()=>{
setQuote(
quotesRef.current[
Math.floor(Math.random()*quotesRef.current.length)
]
);
},5000);

return ()=>clearInterval(interval);
},[]);

return(

<div className="min-h-screen relative overflow-hidden">

{/* Background */}

<div
className="absolute inset-0 bg-cover bg-center"
style={{
backgroundImage:
"url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2070&auto=format&fit=crop')"
}}
></div>

<div className={`absolute inset-0 ${
theme==="dark" ? "bg-black/70" : "bg-white/70"
}`}></div>

<div className={`relative z-10 ${
theme==="dark" ? "text-white" : "text-black"
}`}>

{/* Navbar */}

<div className="flex flex-col md:flex-row md:justify-between md:items-center px-6 md:px-10 py-6 gap-4">

<h1
onClick={()=>navigate("/")}
className="text-2xl md:text-3xl font-bold cursor-pointer text-center md:text-left"
>
🧘 MeditateMate
</h1>

<div className="flex flex-wrap justify-center md:justify-end gap-3">

<button
onClick={toggleTheme}
className="border px-4 py-2 rounded-lg hover:scale-105 transition backdrop-blur"
>
{theme==="dark" ? "☀ Light" : "🌙 Dark"}
</button>

<button
onClick={()=>navigate("/login")}
className="border px-5 py-2 rounded-lg hover:bg-white hover:text-black transition"
>
Login
</button>

<button
onClick={()=>navigate("/register")}
className="bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-2 rounded-lg text-white shadow-lg"
>
Register
</button>

</div>

</div>

{/* Hero */}

<div className="flex flex-col items-center text-center mt-24 md:mt-40 px-6">

<h2 className="text-3xl md:text-6xl font-extrabold leading-tight max-w-4xl">
Find Peace. Track Mood. Meditate Smart.
</h2>

<p className="mt-6 text-lg md:text-xl max-w-2xl opacity-90">
MeditateMate helps you build mindfulness habits with smart
recommendations, mood tracking and meditation analytics.
</p>

<button
onClick={()=>navigate("/register")}
className="mt-8 md:mt-10 bg-gradient-to-r from-purple-500 to-pink-500 px-8 md:px-10 py-3 md:py-4 text-lg md:text-xl rounded-xl font-bold hover:scale-105 transition shadow-2xl text-white"
>
Start Meditation Journey
</button>

</div>

{/* Features */}

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-6 md:px-20 mt-20 md:mt-40">

<div className="bg-white/20 backdrop-blur-xl p-6 md:p-8 rounded-2xl shadow-2xl">
<h3 className="text-xl md:text-2xl font-bold mb-3">🧠 Mood Intelligence</h3>
<p className="opacity-90 text-sm md:text-base">
Understand emotional patterns and get meditation suggestions
based on your mental state.
</p>
</div>

<div className="bg-white/20 backdrop-blur-xl p-6 md:p-8 rounded-2xl shadow-2xl">
<h3 className="text-xl md:text-2xl font-bold mb-3">🧘 Guided Meditation</h3>
<p className="opacity-90 text-sm md:text-base">
Practice breathing, mindfulness and relaxation sessions
with a built-in meditation timer.
</p>
</div>

<div className="bg-white/20 backdrop-blur-xl p-6 md:p-8 rounded-2xl shadow-2xl">
<h3 className="text-xl md:text-2xl font-bold mb-3">📊 Progress Analytics</h3>
<p className="opacity-90 text-sm md:text-base">
Track your meditation streak, session history and mental wellness growth.
</p>
</div>

</div>

{/* Floating Quote */}

<div className="flex justify-center mt-16 md:mt-24 pb-20 px-6">

<div
key={quote}
className="animate-fade backdrop-blur-xl"
style={{
background:"rgba(255,255,255,0.15)",
padding:"25px",
borderRadius:"20px",
maxWidth:"600px",
textAlign:"center",
fontSize:"18px",
fontWeight:"600",
boxShadow:"0 20px 60px rgba(0,0,0,0.6)"
}}
>
✨ {quote}
</div>

</div>

</div>

</div>
);
}