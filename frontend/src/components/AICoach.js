import { useState } from "react";

export default function AICoach(){

const [msg,setMsg] = useState("");
const [chat,setChat] = useState([]);

const sendMessage = ()=>{

if(!msg) return;

let reply = "🧘 Try a 5 minute mindful breathing session.";

if(msg.toLowerCase().includes("stress")){
reply = "💆‍♂️ You seem stressed. Try body scan meditation or listen to calming music.";
}
else if(msg.toLowerCase().includes("sleep")){
reply = "🌙 Try guided sleep meditation and avoid screen before bed.";
}
else if(msg.toLowerCase().includes("focus")){
reply = "🎯 Practice 4-7-8 breathing and short concentration meditation.";
}
else if(msg.toLowerCase().includes("sad")){
reply = "❤️ Try loving-kindness meditation to uplift your mood.";
}

setChat([...chat,{user:msg,bot:reply}]);
setMsg("");
};

return(

<div>

<h3>AI Meditation Coach</h3>

<div style={{
height:"200px",
overflowY:"auto",
background:"rgba(255,255,255,0.05)",
padding:"12px",
borderRadius:"12px",
marginBottom:"10px"
}}>

{
chat.map((c,i)=>(

<div key={i} style={{marginBottom:"10px"}}>
<p><b>You:</b> {c.user}</p>
<p style={{opacity:0.8}}><b>Coach:</b> {c.bot}</p>
</div>
))
}

</div>

<input
className="input"
placeholder="Ask about stress / sleep / focus..."
value={msg}
onChange={e=>setMsg(e.target.value)}
/>

<button className="btn" onClick={sendMessage}>
Send
</button>

</div>
);
}
