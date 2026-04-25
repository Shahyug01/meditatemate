import { useEffect, useState, useRef } from "react";

export default function BreathingCircle() {
  const [phase, setPhase] = useState("Inhale");
  const [scale, setScale] = useState(1);
  const [glow, setGlow] = useState(false);
  const [running, setRunning] = useState(false);

  const timeoutRef = useRef(null);
  const bellRef = useRef(new Audio("/bell.mp3"));

  const playBell = () => {
    const bell = bellRef.current;
    bell.currentTime = 0;
    bell.volume = 0.2;
    bell.play().catch(() => {});
  };

  const startBreathing = () => {
    if (running) return;

    setRunning(true);

    const runCycle = () => {
      setPhase("Inhale");
      setScale(1.3);
      setGlow(true);
      playBell();

      timeoutRef.current = setTimeout(() => {
        setPhase("Exhale");
        setScale(1);
        setGlow(false);
        playBell();

        timeoutRef.current = setTimeout(runCycle, 4000);
      }, 4000);
    };

    runCycle();
  };

  const stopBreathing = () => {
    setRunning(false);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = null;

    setScale(1);
    setGlow(false);
    setPhase("Inhale");
  };

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <div className="session-container">
      <h2 className="timer-title">Guided Breathing</h2>

      <div
        className={`breathing-circle ${glow ? "glow" : ""}`}
        style={{ transform: `scale(${scale})` }}
      >
        <div className="energy-ring"></div>
        <span className="breath-text">{phase}</span>
      </div>

      <p className="breathing-sub">Follow the circle — breathe slowly</p>

      <div className="timer-buttons">
        <button onClick={startBreathing} className="primary-btn">
          Start
        </button>

        <button onClick={stopBreathing} className="secondary-btn">
          Stop
        </button>
      </div>
    </div>
  );
}