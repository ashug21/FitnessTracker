import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import './workoutsplit.css'

export default function UpperLower() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      <div className="workout-split-wrapper19">

        <h1 className="workout-split-title19">Upper / Lower — Full Routine</h1>
        <p className="workout-split-sub19">
          A powerful routine for gaining strength and size with efficient frequency.
        </p>

        {/* UPPER DAY */}
        <section className="workout-split-section19">
          <h2 className="workout-split-heading19">💪 Upper Body Day</h2>

          <ul className="workout-split-list19">
            <li><strong>Bench Press</strong> — 4×6–8</li>
            <li><strong>Lat Pulldown</strong> — 4×8–10</li>
            <li><strong>Dumbbell Shoulder Press</strong> — 3×8–10</li>
            <li><strong>Seated Row</strong> — 3×10</li>
            <li><strong>Lateral Raises</strong> — 3×12</li>
            <li><strong>Bicep Curls</strong> — 3×12</li>
            <li><strong>Tricep Pushdowns</strong> — 3×12</li>
          </ul>
        </section>

        {/* LOWER DAY */}
        <section className="workout-split-section19">
          <h2 className="workout-split-heading19">🦵 Lower Body Day</h2>

          <ul className="workout-split-list19">
            <li><strong>Squats</strong> — 4×6–8</li>
            <li><strong>Romanian Deadlifts</strong> — 3×8–10</li>
            <li><strong>Leg Press</strong> — 3×10–12</li>
            <li><strong>Leg Curls</strong> — 3×12</li>
            <li><strong>Calf Raises</strong> — 4×12–15</li>
          </ul>
        </section>

        {/* WEEK PLAN */}
        <section className="workout-split-section19">
          <h2 className="workout-split-heading19">📅 Weekly Routine</h2>

          <div className="workout-split-week-grid19">
            <div className="workout-split-day19"><strong>Mon:</strong> Upper</div>
            <div className="workout-split-day19"><strong>Tue:</strong> Lower</div>
            <div className="workout-split-day19"><strong>Wed:</strong> Rest</div>
            <div className="workout-split-day19"><strong>Thu:</strong> Upper</div>
            <div className="workout-split-day19"><strong>Fri:</strong> Lower</div>
            <div className="workout-split-day19"><strong>Sat:</strong> Optional Upper</div>
            <div className="workout-split-day19"><strong>Sun:</strong> Rest</div>
          </div>
        </section>

      </div>
    </>
  );
}
