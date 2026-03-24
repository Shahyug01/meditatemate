import { useEffect, useState, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import api from "../api";

import Logo from "../components/Logo";
import MoodForm from "../components/MoodForm";
import SessionTimer from "../components/SessionTimer";
import MusicPlayer from "../components/MusicPlayer";
import BreathingCircle from "../components/BreathingCircle";
import MeditationTips from "../components/MeditationTips";
import AISuggestion from "../components/AISuggestion";
import AICoach from "../components/AICoach";
import ThemeToggle from "../components/ThemeToggle";

export default function Dashboard(){

const navigate = useNavigate();
const location = useLocation();

const [sessions,setSessions]=useState([]);
const [duration,setDuration]=useState(5);

const userId = localStorage.getItem("userId");
const name = localStorage.getItem("name");

/* ===== FETCH SESSIONS ===== */

const fetchSessions = useCallback(async ()=>{
try{
const res = await api.get("/session/"+userId);
setSessions(res.data || []);
}catch(err){
console.log(err);
}
},[userId]);

useEffect(()=>{
if(userId){
fetchSessions();
}
},[fetchSessions,userId]);

/* ===== SAVE SESSION ===== */

const saveSession = async ()=>{
try{
await api.post("/session/start",{userId,duration,type:"Meditation"});
fetchSessions();
}catch(err){
console.log(err);
}
};

/* ===== CALCULATE MONTHLY PROGRESS ===== */

const totalMinutes = sessions.reduce((acc,s)=>acc + Number(s.duration),0);

return(

<div className="layout">

{/* ===== SIDEBAR ===== */}

<div className="sidebar">

<Logo/>

<ThemeToggle/>

<button
className="nav-btn"
style={{
background: location.pathname === "/dashboard"
? "linear-gradient(45deg,#7c3aed,#ec4899)"
: "transparent"
}}
onClick={()=>navigate("/dashboard")}
>
Dashboard
</button>

<button
className="nav-btn"
style={{
background: location.pathname === "/yoga"
? "linear-gradient(45deg,#7c3aed,#ec4899)"
: "transparent"
}}
onClick={()=>navigate("/yoga")}
>
Yoga Trainings
</button>

<button
className="nav-btn"
onClick={()=>{
localStorage.clear();
navigate("/login");
}}
>
Logout
</button>

</div>

{/* ===== MAIN CONTENT ===== */}

<div className="main-content">

<h1 style={{marginBottom:"25px"}}>Welcome {name}</h1>

<div className="dashboard-grid">

<div className="glass">
<MusicPlayer/>
</div>

<div className="glass">
<MoodForm userId={userId}/>
</div>

<div className="glass">
<BreathingCircle/>
</div>

<div className="glass">
<AISuggestion/>
</div>

<div className="glass">
<AICoach/>
</div>

<div className="glass">
<h3>Select Duration</h3>
<input
className="input"
type="number"
value={duration}
onChange={e=>setDuration(e.target.value)}
/>
<SessionTimer minutes={duration} onComplete={saveSession}/>
</div>

{/* ===== MONTHLY PROGRESS (NEW SAFE UI) ===== */}

<div className="glass">

<h3 style={{marginBottom:"15px"}}>Monthly Progress</h3>

<h2 style={{
fontSize:"40px",
background:"linear-gradient(45deg,#8b5cf6,#ec4899)",
WebkitBackgroundClip:"text",
color:"transparent"
}}>
{totalMinutes} mins
</h2>

<div style={{
marginTop:"15px",
height:"12px",
background:"#222",
borderRadius:"10px"
}}>
<div style={{
width:`${Math.min(totalMinutes,300)}px`,
height:"100%",
background:"linear-gradient(45deg,#8b5cf6,#ec4899)",
borderRadius:"10px"
}}></div>
</div>

<p style={{marginTop:"10px",opacity:.7}}>
Keep going 🔥 You are building consistency
</p>

</div>

<div className="glass">
<MeditationTips/>
</div>

<div className="glass">

<h3>Your Sessions</h3>

{
sessions.length===0
? <p>No Sessions Yet</p>
: sessions.map(s=>(

<div key={s._id}
style={{
padding:"12px",
borderBottom:"1px solid rgba(255,255,255,0.2)",
display:"flex",
justifyContent:"space-between"
}}>
<span>{s.type}</span>
<span>{s.duration} mins</span>
</div>

))
}

</div>

</div>

</div>

</div>
);
}