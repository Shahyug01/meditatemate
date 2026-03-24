import { useRef, useState } from "react";

export default function MusicPlayer(){

const audioRef = useRef(null);
const [playing,setPlaying]=useState(false);
const [volume,setVolume]=useState(0.5);

const togglePlay = ()=>{
if(playing){
audioRef.current.pause();
}else{
audioRef.current.play();
}
setPlaying(!playing);
};

const changeVolume=(e)=>{
const v=e.target.value;
setVolume(v);
audioRef.current.volume=v;
};

return(

<div>

<h3>Meditation Music</h3>

<audio ref={audioRef} src="/meditation.mp3" loop />

<button className="btn" onClick={togglePlay}>
{playing ? "Pause Music" : "Play Music"}
</button>

<input
type="range"
min="0"
max="1"
step="0.01"
value={volume}
onChange={changeVolume}
style={{width:"100%",marginTop:"15px"}}
/>

</div>
);
}
