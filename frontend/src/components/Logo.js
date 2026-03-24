import { useNavigate } from "react-router-dom";

export default function Logo(){

const navigate = useNavigate();

return(

<div
onClick={()=>navigate("/")}
style={{
cursor:"pointer",
display:"flex",
alignItems:"center",
gap:"10px",
marginBottom:"40px"
}}
>

<div style={{
width:"38px",
height:"38px",
borderRadius:"50%",
background:"linear-gradient(45deg,#7c3aed,#ec4899)",
display:"flex",
alignItems:"center",
justifyContent:"center",
fontSize:"18px",
fontWeight:"bold",
color:"white"
}}>
🧘
</div>

<h2 style={{
fontWeight:"700",
letterSpacing:"1px"
}}>
MeditateMate
</h2>

</div>

);
}
