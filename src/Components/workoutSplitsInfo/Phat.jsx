import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import './workoutsplit.css'

export default function Phat() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      <div className="workout-split-wrapper19">

        <h1 className="workout-split-title19">PHAT — Full Routine</h1>
        <p className="workout-split-sub19">
          A hybrid program combining powerlifting strength work with bodybuilding hypertrophy volume.
        </p>

        {/* Power Upper */}
        <section className="workout-split-section19">
          <h2 className="workout-split-heading19">💪 Power Upper</h2>

          <ul className="workout-split-list19">
            <li><strong>Bench Press</strong> — 3×3–5</li>
            <li><strong>Barbell Row</strong> — 3×3–5</li>
            <li><strong>Overhead Press</strong> — 2×5</li>
            <li><strong>Weighted Pull-Up</strong> — 2×6</li>
          </ul>
        </section>

        {/* Power Lower */}
        <section className="workout-split-section19">
          <h2 className="workout-split-heading19">🦵 Power Lower</h2>

          <ul className="workout-split-list19">
            <li><strong>Squats</strong> — 3×3–5</li>
            <li><strong>Deadlift</strong> — 1×3–5</li>
            <li><strong>Leg Press</strong> — 2×10</li>
            <li><strong>Calf Raises</strong> — 3×12</li>
          </ul>
        </section>

        {/* Hypertrophy Back/Shoulders */}
        <section className="workout-split-section19">
          <h2 className="workout-split-heading19">🔥 Back & Shoulders (Hypertrophy)</h2>

          <ul className="workout-split-list19">
            <li><strong>Lat Pulldown</strong> — 3×12</li>
            <li><strong>Seated Row</strong> — 3×10–12</li>
            <li><strong>Lateral Raises</strong> — 3×15</li>
            <li><strong>Face Pulls</strong> — 3×15</li>
          </ul>
        </section>

        {/* Hypertrophy Legs */}
        <section className="workout-split-section19">
          <h2 className="workout-split-heading19">🔥 Legs (Hypertrophy)</h2>

          <ul className="workout-split-list19">
            <li><strong>Leg Extensions</strong> — 3×12–15</li>
            <li><strong>RDL</strong> — 3×10–12</li>
            <li><strong>Walking Lunges</strong> — 3×10 each leg</li>
            <li><strong>Hamstring Curls</strong> — 3×12</li>
            <li><strong>Calf Raises</strong> — 4×15</li>
          </ul>
        </section>

        {/* Hypertrophy Arms/Chest */}
        <section className="workout-split-section19">
          <h2 className="workout-split-heading19">🔥 Chest & Arms (Hypertrophy)</h2>

          <ul className="workout-split-list19">
            <li><strong>Incline Dumbbell Press</strong> — 3×12</li>
            <li><strong>Cable Fly</strong> — 3×15</li>
            <li><strong>Bicep Curls</strong> — 3×15</li>
            <li><strong>Tricep Pushdowns</strong> — 3×15</li>
          </ul>
        </section>

        {/* WEEK */}
        <section className="workout-split-section19">
          <h2 className="workout-split-heading19">📅 Weekly Routine</h2>

          <div className="workout-split-week-grid19">
            <div className="workout-split-day19"><strong>Mon:</strong> Power Upper</div>
            <div className="workout-split-day19"><strong>Tue:</strong> Power Lower</div>
            <div className="workout-split-day19"><strong>Wed:</strong> Back/Shoulders Hypertrophy</div>
            <div className="workout-split-day19"><strong>Thu:</strong> Legs Hypertrophy</div>
            <div className="workout-split-day19"><strong>Fri:</strong> Chest & Arms Hypertrophy</div>
            <div className="workout-split-day19"><strong>Sat/Sun:</strong> Rest</div>
          </div>
        </section>

      </div>
    </>
  );
}
