export default function ProgressChart({ sessions = [] }) {

if (!sessions.length) {
return <p style={{opacity:0.6}}>No meditation progress yet</p>;
}

const total = sessions.reduce(
(sum,s)=> sum + Number(s.duration),
0
);

const avg = Math.round(total / sessions.length);

return (

<div>

<h3 style={{marginBottom:20}}>📊 Meditation Progress</h3>

<div style={{
display:"flex",
justifyContent:"space-between",
marginBottom:15
}}>
<span>Total Sessions</span>
<strong>{sessions.length}</strong>
</div>

<div style={{
display:"flex",
justifyContent:"space-between",
marginBottom:15
}}>
<span>Total Minutes</span>
<strong>{total}</strong>
</div>

<div style={{
display:"flex",
justifyContent:"space-between",
marginBottom:15
}}>
<span>Average Duration</span>
<strong>{avg} mins</strong>
</div>

{/* Progress Bar */}

<div style={{
background:"#e2e8f0",
height:12,
borderRadius:10,
overflow:"hidden",
marginTop:20
}}>

<div style={{
width: `${Math.min(total,100)}%`,
height:"100%",
background:"linear-gradient(90deg,#7c3aed,#a78bfa)"
}}/>

</div>

</div>

);
}