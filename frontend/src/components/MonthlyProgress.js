import { useState } from "react";

export default function MonthlyProgress() {

  const [progress] = useState({
    totalMinutes: 120,
    days: 12,
    streak: 5,
    goal: 300
  });

  const percentage = Math.min(
    (progress.totalMinutes / progress.goal) * 100,
    100
  );

  return (
    <div className="glass progress-card">

      <h3 className="progress-title">📊 Monthly Progress</h3>

      {/* Stats */}
      <div className="progress-stats">

        <div className="stat-box">
          <h4>{progress.totalMinutes} min</h4>
          <p>Total Time</p>
        </div>

        <div className="stat-box">
          <h4>{progress.days}</h4>
          <p>Days Practiced</p>
        </div>

        <div className="stat-box">
          <h4>{progress.streak}</h4>
          <p>Day Streak</p>
        </div>

      </div>

      {/* Progress Bar */}
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      <p className="progress-label">
        {Math.round(percentage)}% of monthly goal
      </p>

    </div>
  );
}