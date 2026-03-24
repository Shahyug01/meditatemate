import { useState, useEffect, useRef } from "react";
import confetti from "canvas-confetti";

export default function SessionTimer({ minutes, onComplete }){

const [time,setTime]=useState(minutes * 60);
const [running,setRunning]=useState(false);

const audioRef = useRef(null);
const startedRef = useRef(false);

useEffect(()=>{
setTime(minutes * 60);
},[minutes]);

/* START MUSIC ONLY ONCE */

useEffect(()=>{

if(running && !startedRef.current){

startedRef.current = true;

if(audioRef.current){
audioRef.current.volume = 0.5;
audioRef.current.play().catch(()=>{});
}

}

},[running]);

/* TIMER LOGIC */

useEffect(()=>{

if(!running) return;

const interval = setInterval(()=>{
setTime(prev => prev - 1);
},1000);

return ()=>clearInterval(interval);

},[running]);

/* COMPLETION LOGIC */

useEffect(()=>{

if(time === 0 && running){

setRunning(false);
startedRef.current = false;

/* STOP MUSIC */

if(audioRef.current){
audioRef.current.pause();
audioRef.current.currentTime = 0;
}

/* 🔔 BELL */

const bell = new Audio("/bell.mp3");
bell.play();

/* 🎉 CONFETTI */

confetti({
particleCount:150,
spread:90,
origin:{y:0.6}
});

if(onComplete){
onComplete();
}

alert("Meditation Completed 🧘");

}

},[time,running,onComplete]);

const minutesDisplay = Math.floor(time / 60);
const secondsDisplay = time % 60;

return(

<div style={{textAlign:"center"}}>

<audio ref={audioRef} loop>
<source src="/forest.mp3" type="audio/mpeg"/>
</audio>

<div className="timer-circle">
{minutesDisplay}:{secondsDisplay < 10 ? "0" : ""}{secondsDisplay}
</div>

<button
className="btn"
onClick={()=>setRunning(true)}
style={{marginTop:"20px"}}

>

Start Meditation </button>

</div>

);
}
