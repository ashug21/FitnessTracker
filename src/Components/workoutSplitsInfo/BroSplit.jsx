import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import './workoutsplit.css'

export default function BroSplit() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      <div className="workout-split-wrapper19">

        <h1 className="workout-split-title19">Bro Split — Full Routine</h1>
        <p className="workout-split-sub19">
          A classic bodybuilding split where each muscle has its own dedicated training day.
        </p>

        {/* Chest */}
        <section className="workout-split-section19">
          <h2 className="workout-split-heading19">🔥 Chest Day</h2>

          <ul className="workout-split-list19">
            <li><strong>Bench Press</strong> — 4×6–8</li>
            <li><strong>Incline Dumbbell Press</strong> — 3×8–10</li>
            <li><strong>Cable Fly</strong> — 3×12</li>
            <li><strong>Chest Press Machine</strong> — 3×10</li>
          </ul>
        </section>

        {/* Back */}
        <section className="workout-split-section19">
          <h2 className="workout-split-heading19">💪 Back Day</h2>

          <ul className="workout-split-list19">
            <li><strong>Pull-Ups / Lat Pulldown</strong> — 4×8–10</li>
            <li><strong>Barbell Row</strong> — 4×6–8</li>
            <li><strong>Seated Row</strong> — 3×10</li>
            <li><strong>Face Pulls</strong> — 3×12–15</li>
          </ul>
        </section>

        {/* Shoulders */}
        <section className="workout-split-section19">
          <h2 className="workout-split-heading19">🏋️ Shoulders Day</h2>

          <ul className="workout-split-list19">
            <li><strong>Overhead Press</strong> — 4×6–8</li>
            <li><strong>Lateral Raises</strong> — 4×12–15</li>
            <li><strong>Rear Delt Fly</strong> — 3×12</li>
            <li><strong>Machine Shoulder Press</strong> — 3×10</li>
          </ul>
        </section>

        {/* Arms */}
        <section className="workout-split-section19">
          <h2 className="workout-split-heading19">💥 Arms Day</h2>

          <ul className="workout-split-list19">
            <li><strong>Bicep Curls</strong> — 3×10–12</li>
            <li><strong>Hammer Curls</strong> — 3×12</li>
            <li><strong>Tricep Pushdown</strong> — 3×10–12</li>
            <li><strong>Overhead Tricep Extension</strong> — 3×12</li>
          </ul>
        </section>

        {/* Legs */}
        <section className="workout-split-section19">
          <h2 className="workout-split-heading19">🦵 Legs Day</h2>

          <ul className="workout-split-list19">
            <li><strong>Squats</strong> — 4×6–8</li>
            <li><strong>Leg Press</strong> — 3×10–12</li>
            <li><strong>Lunges</strong> — 3×10 each leg</li>
            <li><strong>Calf Raises</strong> — 4×12–15</li>
          </ul>
        </section>

        {/* Week */}
        <section className="workout-split-section19">
          <h2 className="workout-split-heading19">📅 Weekly Routine</h2>

          <div className="workout-split-week-grid19">
            <div className="workout-split-day19"><strong>Mon:</strong> Chest</div>
            <div className="workout-split-day19"><strong>Tue:</strong> Back</div>
            <div className="workout-split-day19"><strong>Wed:</strong> Shoulders</div>
            <div className="workout-split-day19"><strong>Thu:</strong> Arms</div>
            <div className="workout-split-day19"><strong>Fri:</strong> Legs</div>
            <div className="workout-split-day19"><strong>Sat:</strong> Optional Arms/Chest</div>
            <div className="workout-split-day19"><strong>Sun:</strong> Rest</div>
          </div>
        </section>

      </div>
    </>
  );
}
