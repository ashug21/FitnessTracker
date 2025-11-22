import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import './workoutsplit.css'

export default function Arnold() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      <div className="workout-split-wrapper19">

        <h1 className="workout-split-title19">Arnold Split — Full Routine</h1>
        <p className="workout-split-sub19">
          Arnold Schwarzenegger’s classic high-volume bodybuilding routine.
        </p>

        {/* Day 1 – Chest & Back */}
        <section className="workout-split-section19">
          <h2 className="workout-split-heading19">🔥 Chest & Back</h2>

          <ul className="workout-split-list19">
            <li><strong>Bench Press</strong> — 4×8</li>
            <li><strong>Incline Bench</strong> — 4×10</li>
            <li><strong>Pull-Ups</strong> — 4×8–12</li>
            <li><strong>Barbell Rows</strong> — 4×8–10</li>
          </ul>
        </section>

        {/* Day 2 – Shoulders & Arms */}
        <section className="workout-split-section19">
          <h2 className="workout-split-heading19">💪 Shoulders & Arms</h2>

          <ul className="workout-split-list19">
            <li><strong>Overhead Press</strong> — 4×8</li>
            <li><strong>Lateral Raises</strong> — 4×12</li>
            <li><strong>Bicep Curls</strong> — 4×10</li>
            <li><strong>Tricep Extensions</strong> — 4×10</li>
          </ul>
        </section>

        {/* Day 3 – Legs */}
        <section className="workout-split-section19">
          <h2 className="workout-split-heading19">🦵 Legs Day</h2>

          <ul className="workout-split-list19">
            <li><strong>Squats</strong> — 5×6–10</li>
            <li><strong>Romanian Deadlifts</strong> — 4×8–10</li>
            <li><strong>Leg Press</strong> — 4×12</li>
            <li><strong>Calf Raises</strong> — 5×15</li>
          </ul>
        </section>

        {/* WEEK */}
        <section className="workout-split-section19">
          <h2 className="workout-split-heading19">📅 Weekly Routine</h2>

          <div className="workout-split-week-grid19">
            <div className="workout-split-day19"><strong>Mon:</strong> Chest & Back</div>
            <div className="workout-split-day19"><strong>Tue:</strong> Shoulders & Arms</div>
            <div className="workout-split-day19"><strong>Wed:</strong> Legs</div>
            <div className="workout-split-day19"><strong>Thu:</strong> Chest & Back</div>
            <div className="workout-split-day19"><strong>Fri:</strong> Shoulders & Arms</div>
            <div className="workout-split-day19"><strong>Sat:</strong> Legs</div>
            <div className="workout-split-day19"><strong>Sun:</strong> Rest</div>
          </div>
        </section>

      </div>
    </>
  );
}
