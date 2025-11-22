import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import './workoutsplit.css'

export default function PPLDetails() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />

      <div className="workout-split-wrapper19">

        <h1 className="workout-split-title19">Push / Pull / Legs — Full Routine</h1>
        <p className="workout-split-sub19">
          A complete weekly workout plan designed for muscle growth, strength, and balanced recovery.
        </p>

        {/* PUSH */}
        <section className="workout-split-section19">
          <h2 className="workout-split-heading19">🔥 Push Day</h2>

          <ul className="workout-split-list19">
            <li><strong>Bench Press</strong> — 4×6–8</li>
            <li><strong>Incline Dumbbell Press</strong> — 3×8–10</li>
            <li><strong>Shoulder Press</strong> — 3×6–8</li>
            <li><strong>Lateral Raises</strong> — 4×12–15</li>
            <li><strong>Cable Fly / Machine Fly</strong> — 3×10–12</li>
            <li><strong>Tricep Pushdowns</strong> — 3×10–12</li>
            <li><strong>Overhead Extensions</strong> — 3×12</li>
          </ul>
        </section>

        {/* PULL */}
        <section className="workout-split-section19">
          <h2 className="workout-split-heading19">💪 Pull Day</h2>

          <ul className="workout-split-list19">
            <li><strong>Deadlifts</strong> — 3×5</li>
            <li><strong>Lat Pulldown / Pull-Ups</strong> — 4×8–10</li>
            <li><strong>Machine or Barbell Rows</strong> — 4×6–10</li>
            <li><strong>Face Pulls</strong> — 3×12–15</li>
            <li><strong>Bicep Curls</strong> — 3×10–12</li>
            <li><strong>Hammer Curls</strong> — 3×12</li>
          </ul>
        </section>

        {/* LEGS */}
        <section className="workout-split-section19">
          <h2 className="workout-split-heading19">🦵 Legs Day</h2>

          <ul className="workout-split-list19">
            <li><strong>Squats</strong> — 4×6–8</li>
            <li><strong>Romanian Deadlifts</strong> — 3×8–10</li>
            <li><strong>Leg Press</strong> — 3×10–12</li>
            <li><strong>Walking Lunges</strong> — 3×10 each leg</li>
            <li><strong>Leg Curls</strong> — 3×12</li>
            <li><strong>Calf Raises</strong> — 4×12–15</li>
          </ul>
        </section>

        {/* WEEK PLAN */}
        <section className="workout-split-section19">
          <h2 className="workout-split-heading19">📅 Weekly Routine</h2>

          <div className="workout-split-week-grid19">
            <div className="workout-split-day19"><strong>Mon:</strong> Push</div>
            <div className="workout-split-day19"><strong>Tue:</strong> Pull</div>
            <div className="workout-split-day19"><strong>Wed:</strong> Legs</div>
            <div className="workout-split-day19"><strong>Thu:</strong> Rest</div>
            <div className="workout-split-day19"><strong>Fri:</strong> Push</div>
            <div className="workout-split-day19"><strong>Sat:</strong> Pull</div>
            <div className="workout-split-day19"><strong>Sun:</strong> Legs / Rest</div>
          </div>
        </section>

      </div>
    </div>
  );
}
