import "../styles.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import MusicPlayer from "../components/MusicPlayer";
import MoodForm from "../components/MoodForm";
import BreathingCircle from "../components/BreathingCircle";
import SessionTimer from "../components/SessionTimer";
import MeditationTips from "../components/MeditationTips";
import AISuggestion from "../components/AISuggestion";
import AICoach from "../components/AICoach";
import ThemeToggle from "../components/ThemeToggle";

export default function Dashboard(){


const navigate = useNavigate();

const name = localStorage.getItem("name");

return(

<div className="layout">

{/* ===== SIDEBAR ===== */}

<div className="sidebar">

<h2>🧘 MeditateMate</h2>

<ThemeToggle/>

<button className="nav-btn" onClick={()=>navigate("/dashboard")}>
Dashboard
</button>

<button className="nav-btn" onClick={()=>navigate("/yoga")}>
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

{/* ===== MAIN ===== */}

<div className="main-content">

<h1>Welcome {name} ☁</h1>

<div className="dashboard-grid">

<div className="glass">
<MusicPlayer/>
</div>

<div className="glass">
<MoodForm/>
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
<SessionTimer/>
</div>

<div className="glass">
<MeditationTips/>
</div>

</div>

</div>

</div>

);
}