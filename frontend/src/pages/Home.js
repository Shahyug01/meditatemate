import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useEffect, useState, useRef } from "react";

export default function Home(){

const navigate = useNavigate();
const { theme, toggleTheme } = useTheme();

/* ⭐ Quotes stored in useRef → prevents ESLint dependency error */
const quotesRef = useRef([
"Meditation is not escape, it is awareness.",
"Calm mind brings inner strength and confidence.",
"Peace begins with a single deep breath.",
"Train your mind to stay present.",
"Yoga is the journey of the self.",
"Small daily meditation creates powerful change.",
"Your calm mind is your biggest strength.",
"Stillness is where creativity and clarity are born.",
"Breathe in peace, breathe out stress."
]);

const [quote,setQuote] = useState(quotesRef.current[0]);

/* ⭐ Floating Quote Logic */
useEffect(()=>{

const interval = setInterval(()=>{

const randomQuote =
quotesRef.current[
Math.floor(Math.random()*quotesRef.current.length)
];

setQuote(randomQuote);

},5000);

return ()=> clearInterval(interval);

},[]);

return(

<div className="min-h-screen relative overflow-hidden">

{/* Background */}

<div
className="absolute inset-0 bg-cover bg-center scale-105"
style={{
backgroundImage:
"url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2070&auto=format&fit=crop')"
}}
></div>

{/* Overlay */}

<div className={`absolute inset-0 transition-all duration-500 ${
theme==="dark" ? "bg-black/70" : "bg-white/70"
}`}></div>

<div className={`relative z-10 transition-all duration-500 ${
theme==="dark" ? "text-white" : "text-black"
}`}>

{/* Navbar */}

<div className="flex justify-between items-center px-10 py-6">

<h1
onClick={()=>navigate("/")}
className="text-3xl font-bold tracking-wide cursor-pointer hover:scale-105 transition"
>
🧘 MeditateMate
</h1>

<div className="flex items-center gap-4">

<button
onClick={toggleTheme}
className="border px-4 py-2 rounded-lg hover:scale-105 transition backdrop-blur"
>
{theme==="dark" ? "☀ Light" : "🌙 Dark"}
</button>

<button
onClick={()=>navigate("/login")}
className="border px-6 py-2 rounded-lg hover:bg-white hover:text-black transition backdrop-blur"
>
Login
</button>

<button
onClick={()=>navigate("/register")}
className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-lg hover:scale-105 transition text-white shadow-lg"
>
Register
</button>

</div>

</div>

{/* Hero */}

<div className="flex flex-col items-center justify-center text-center mt-40 px-6">

<h2 className="text-6xl font-extrabold leading-tight max-w-4xl drop-shadow-xl">
Find Peace. Track Mood. Meditate Smart.
</h2>

<p className="mt-6 text-xl max-w-2xl opacity-90">
MeditateMate helps you build mindfulness habits with smart
recommendations, mood tracking and meditation analytics.
</p>

<button
onClick={()=>navigate("/register")}
className="mt-10 bg-gradient-to-r from-purple-500 to-pink-500 px-10 py-4 text-xl rounded-xl font-bold hover:scale-110 transition shadow-2xl text-white"
>
Start Meditation Journey
</button>

</div>

{/* Features */}

<div className="grid md:grid-cols-3 gap-8 px-20 mt-40">

<div className="bg-white/20 backdrop-blur-xl p-8 rounded-2xl hover:scale-105 transition shadow-2xl">
<h3 className="text-2xl font-bold mb-3">🧠 Mood Intelligence</h3>
<p className="opacity-90">
Understand emotional patterns and get meditation suggestions
based on your mental state.
</p>
</div>

<div className="bg-white/20 backdrop-blur-xl p-8 rounded-2xl hover:scale-105 transition shadow-2xl">
<h3 className="text-2xl font-bold mb-3">🧘 Guided Meditation</h3>
<p className="opacity-90">
Practice breathing, mindfulness and relaxation sessions
with a built-in meditation timer.
</p>
</div>

<div className="bg-white/20 backdrop-blur-xl p-8 rounded-2xl hover:scale-105 transition shadow-2xl">
<h3 className="text-2xl font-bold mb-3">📊 Progress Analytics</h3>
<p className="opacity-90">
Track your meditation streak, session history and mental wellness growth.
</p>
</div>

</div>

{/* Floating Motivational Quote */}

<div className="flex justify-center mt-24 pb-24 px-6">

<div
key={quote}
className="animate-fade backdrop-blur-xl"
style={{
background:"rgba(255,255,255,0.15)",
padding:"35px",
borderRadius:"25px",
maxWidth:"750px",
textAlign:"center",
fontSize:"24px",
fontWeight:"600",
boxShadow:"0 25px 80px rgba(0,0,0,0.6)",
transition:"all 0.6s"
}}
>
✨ {quote}
</div>

</div>

</div>

</div>
);
}