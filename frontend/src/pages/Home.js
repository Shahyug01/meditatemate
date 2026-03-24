import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useEffect, useState } from "react";

export default function Home(){

const navigate = useNavigate();
const { theme, toggleTheme } = useTheme();

const quotes = [
"Meditation is not escape, it is awareness.",
"Calm mind brings inner strength and confidence.",
"Peace begins with a single deep breath.",
"Train your mind to stay present.",
"Yoga is the journey of the self.",
"Small daily meditation creates powerful change.",
"Your calm mind is your biggest strength."
];

const [quote,setQuote] = useState("");

useEffect(()=>{

setQuote(quotes[Math.floor(Math.random()*quotes.length)]);

const interval = setInterval(()=>{
setQuote(quotes[Math.floor(Math.random()*quotes.length)]);
},4000);

return ()=>clearInterval(interval);

},[]);

return(

<div className="min-h-screen relative">

{/* Background */}

<div
className="absolute inset-0 bg-cover bg-center"
style={{
backgroundImage:
"url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2070&auto=format&fit=crop')"
}}
></div>

{/* Overlay */}

<div className={`absolute inset-0 ${theme==="dark" ? "bg-black/60" : "bg-white/60"}`}></div>

<div className={`relative z-10 ${theme==="dark" ? "text-white" : "text-black"}`}>

{/* Navbar */}

<div className="flex justify-between items-center px-10 py-6">

<h1
onClick={()=>navigate("/")}
className="text-3xl font-bold tracking-wide cursor-pointer"
>
🧘 MeditateMate
</h1>

<div className="flex items-center gap-4">

<button
onClick={toggleTheme}
className="border px-4 py-2 rounded-lg hover:scale-105 transition"

>

{theme==="dark" ? "☀ Light" : "🌙 Dark"} </button>

<button
onClick={()=>navigate("/login")}
className="border px-6 py-2 rounded-lg hover:bg-white hover:text-black transition"

>

Login </button>

<button
onClick={()=>navigate("/register")}
className="bg-purple-500 px-6 py-2 rounded-lg hover:bg-purple-600 transition text-white"

>

Register </button>

</div>

</div>

{/* Hero */}

<div className="flex flex-col items-center justify-center text-center mt-40 px-6">

<h2 className="text-6xl font-extrabold leading-tight max-w-4xl">
Find Peace. Track Mood. Meditate Smart.
</h2>

<p className="mt-6 text-xl max-w-2xl">
MeditateMate helps you build mindfulness habits with smart
recommendations, mood tracking and meditation analytics.
</p>

<button
onClick={()=>navigate("/register")}
className="mt-10 bg-gradient-to-r from-purple-500 to-pink-500 px-10 py-4 text-xl rounded-xl font-bold hover:scale-105 transition shadow-2xl text-white"

>

Start Meditation Journey </button>

</div>

{/* Features */}

<div className="grid md:grid-cols-3 gap-8 px-20 mt-40">

<div className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl hover:scale-105 transition shadow-xl">
<h3 className="text-2xl font-bold mb-3">🧠 Mood Intelligence</h3>
<p>
Understand emotional patterns and get meditation suggestions
based on your mental state.
</p>
</div>

<div className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl hover:scale-105 transition shadow-xl">
<h3 className="text-2xl font-bold mb-3">🧘 Guided Meditation</h3>
<p>
Practice breathing, mindfulness and relaxation sessions
with a built-in meditation timer.
</p>
</div>

<div className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl hover:scale-105 transition shadow-xl">
<h3 className="text-2xl font-bold mb-3">📊 Progress Analytics</h3>
<p>
Track your meditation streak, session history and mental wellness growth.
</p>
</div>

</div>

{/* Floating Motivational Quote */}

<div className="flex justify-center mt-20 pb-20">

<div
style={{
background:"rgba(255,255,255,0.15)",
backdropFilter:"blur(10px)",
padding:"30px",
borderRadius:"20px",
maxWidth:"700px",
textAlign:"center",
fontSize:"22px",
fontWeight:"500",
animation:"fadeIn 1s ease",
boxShadow:"0 20px 60px rgba(0,0,0,0.5)"
}}
>
✨ {quote}
</div>

</div>

</div>

</div>
);
}
