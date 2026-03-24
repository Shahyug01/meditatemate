import { useNavigate } from "react-router-dom";

export default function Yoga(){

const navigate = useNavigate();

return(

<div className="page-bg">

<h1>Yoga Trainings</h1>

<div className="dashboard-grid">

{/* 1 */}

<div className="glass">
<h3>Morning Stretch Yoga</h3>
<iframe
width="100%"
height="200"
src="https://www.youtube.com/embed/v7AYKMP6rOE"
title="Morning Yoga"
allowFullScreen
></iframe>
</div>

{/* 2 */}

<div className="glass">
<h3>Beginner Yoga Flow</h3>
<iframe
width="100%"
height="200"
src="https://www.youtube.com/embed/4pKly2JojMw"
title="Beginner Yoga"
allowFullScreen
></iframe>
</div>

{/* 3 FIXED */}

<div className="glass">
<h3>Stress Relief Yoga</h3>
<iframe
width="100%"
height="200"
src="https://youtu.be/sTANio_2E0Q?si=hobZAiRpWHZ9vQFp"
title="Stress Yoga"
allowFullScreen
></iframe>
</div>

{/* 4 */}

<div className="glass">
<h3>Yoga for Sleep</h3>
<iframe
width="100%"
height="200"
src="https://www.youtube.com/embed/BiWDsfZ3zbo"
title="Sleep Yoga"
allowFullScreen
></iframe>
</div>

{/* 5 */}

<div className="glass">
<h3>Full Body Flexibility Yoga</h3>
<iframe
width="100%"
height="200"
src="https://www.youtube.com/embed/s2NQhpFGIOg"
title="Flexibility Yoga"
allowFullScreen
></iframe>
</div>

{/* 6 */}

<div className="glass">
<h3>15 Min Relaxation Yoga</h3>
<iframe
width="100%"
height="200"
src="https://www.youtube.com/embed/5Z1c9sY2yYk"
title="Relax Yoga"
allowFullScreen
></iframe>
</div>

</div>

<button className="btn" onClick={()=>navigate("/dashboard")}>
Back to Dashboard </button>

</div>
);
}
