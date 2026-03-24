import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle(){

const { theme, toggleTheme } = useTheme();

return (
<button
className="btn"
style={{width:"160px"}}
onClick={toggleTheme}

>

{theme === "dark" ? "☀ Light Mode" : "🌙 Dark Mode"} </button>
);

}
