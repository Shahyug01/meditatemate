import { useState, useEffect, useRef } from "react";

export default function SessionTimer({ onComplete }) {
  const [duration, setDuration] = useState(5);
  const [secondsLeft, setSecondsLeft] = useState(5 * 60);
  const [running, setRunning] = useState(false);

  const intervalRef = useRef(null);
  const audioRef = useRef(new Audio("/bell.mp3"));

  useEffect(() => {
    setSecondsLeft(duration * 60);
    setRunning(false);
    clearInterval(intervalRef.current);
  }, [duration]);

  useEffect(() => {
    if (!running) return;

    intervalRef.current = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);

          audioRef.current.currentTime = 0;
          audioRef.current.play().catch(() => {});

          setRunning(false);
          onComplete && onComplete();

          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [running]);

  const minutesDisplay = Math.floor(secondsLeft / 60);
  const secondsDisplay = secondsLeft % 60;

  return (
    <div className="session-container">
      <h2 className="timer-title">Select Duration</h2>

      {/* Duration */}
      <select
        value={duration}
        onChange={(e) => setDuration(Number(e.target.value))}
        className="duration-input"
      >
        <option value={1}>1 min</option>
        <option value={3}>3 min</option>
        <option value={5}>5 min</option>
        <option value={10}>10 min</option>
        <option value={15}>15 min</option>
      </select>

      {/* Timer */}
      <div className={`timer-circle ${running ? "pulse" : ""}`}>
        {minutesDisplay}:{secondsDisplay.toString().padStart(2, "0")}
      </div>

      {/* Buttons */}
      <div className="timer-buttons">
        <button
          onClick={() => setRunning(!running)}
          className="primary-btn"
        >
          {running ? "Pause" : "Start"}
        </button>

        <button
          onClick={() => {
            setRunning(false);
            setSecondsLeft(duration * 60);
          }}
          className="secondary-btn"
        >
          Reset
        </button>
      </div>
    </div>
  );
}