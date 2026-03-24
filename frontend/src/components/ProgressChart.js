import {
LineChart,
Line,
XAxis,
YAxis,
Tooltip,
CartesianGrid
} from "recharts";

export default function ProgressChart({ sessions }) {

if (!sessions || sessions.length === 0) {
return <p>No progress data yet</p>;
}

const data = sessions.map(s => ({
date: new Date(s.createdAt).toLocaleDateString(),
duration: s.duration
}));

return (

<div style={{
width: "100%",
display: "flex",
justifyContent: "center",
marginTop: "20px"
}}>

<LineChart
width={500}
height={300}
data={data}

>

<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="date" />
<YAxis />
<Tooltip />
<Line
type="monotone"
dataKey="duration"
stroke="#ec4899"
strokeWidth={3}
/>

</LineChart>

</div>
);
}
