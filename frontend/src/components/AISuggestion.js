import { useState } from "react";

export default function AISuggestion(){

const [mood,setMood] = useState("");
const [suggestion,setSuggestion] = useState("");

const generateSuggestion = ()=>{

if(mood === "Happy"){
setSuggestion("🌞 Try Gratitude Meditation for 10 minutes to enhance positivity.");
}
else if(mood === "Calm"){
setSuggestion("🌿 Practice Deep Breathing Meditation to maintain inner balance.");
}
else if(mood === "Stressed"){
setSuggestion("💆‍♂️ Do Body Scan Meditation or listen to soothing music.");
}
else if(mood === "Sad"){
setSuggestion("❤️ Try Loving-Kindness Meditation to uplift emotional state.");
}
else{
setSuggestion("🧘 Start with a simple 5-minute mindful breathing session.");
}

};

return(

<div>

<h3>AI Meditation Suggestion</h3>

<select
className="input"
value={mood}
onChange={e=>setMood(e.target.value)}

>

<option value="">Select Mood</option>
<option value="Happy">Happy</option>
<option value="Calm">Calm</option>
<option value="Stressed">Stressed</option>
<option value="Sad">Sad</option>

</select>

<button className="btn" onClick={generateSuggestion}>
Get Suggestion
</button>

{
suggestion && (

<p style={{
marginTop:"15px",
lineHeight:"26px",
background:"rgba(255,255,255,0.1)",
padding:"15px",
borderRadius:"12px"
}}>
{suggestion}
</p>
)
}

</div>

);
}
