import { useEffect, useState } from "react";

export default function BreathingCircle(){

const [phase,setPhase] = useState("Inhale");
const [scale,setScale] = useState(1);

useEffect(()=>{

const interval = setInterval(()=>{

setPhase(prev => prev === "Inhale" ? "Exhale" : "Inhale");

setScale(prev => prev === 1 ? 1.5 : 1);

},4000);

return ()=>clearInterval(interval);

},[]);

return(

<div style={{textAlign:"center"}}>

<h3 style={{marginBottom:"20px"}}>Guided Breathing</h3>

<div
style={{
width:"220px",
height:"220px",
margin:"auto",
borderRadius:"50%",
background:"linear-gradient(45deg,#7c3aed,#ec4899)",
display:"flex",
alignItems:"center",
justifyContent:"center",
fontSize:"28px",
fontWeight:"bold",
color:"white",
transition:"all 4s ease-in-out",
transform:`scale(${scale})`,
boxShadow:"0 30px 80px rgba(0,0,0,0.9)"
}}
>

{phase}

</div>

<p style={{marginTop:"20px",opacity:0.8}}>
Follow the circle — breathe slowly
</p>

</div>

);
}
