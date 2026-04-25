import {useState} from "react";
import api from "../api";

export default function MoodForm({userId}){

const [mood,setMood]=useState("");

const submit=async()=>{
await api.post("/mood/add",{userId,mood});
alert("Mood Saved");
}

return(

<div>

<h3 style={{marginBottom:"10px"}}>Track Mood</h3>

<select className="input"
onChange={e=>setMood(e.target.value)}>

<option>Select Mood</option>
<option>Happy</option>
<option>Calm</option>
<option>Stressed</option>
<option>Sad</option>
</select>

<button className="primary-btn" onClick={submit}>
  Save Mood
</button>

</div>
);
}
