import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import './workoutsplit.css'

export default function FullBody() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      <div className="workout-split-wrapper19">

        <h1 className="workout-split-title19">Full Body — Full Routine</h1>
        <p className="workout-split-sub19">
          A simple but effective plan to train the whole body each session for balanced growth.
        </p>

        {/* WORKOUT */}
        <section className="workout-split-section19">
          <h2 className="workout-split-heading19">🏋️ Full Body Workout</h2>

          <ul className="workout-split-list19">
            <li><strong>Squats</strong> — 3×6–8</li>
            <li><strong>Bench Press</strong> — 3×6–8</li>
            <li><strong>Barbell Row</strong> — 3×8–10</li>
            <li><strong>Dumbbell Shoulder Press</strong> — 3×10</li>
            <li><strong>Lat Pulldown</strong> — 3×10–12</li>
            <li><strong>Bicep Curls</strong> — 2×12</li>
            <li><strong>Tricep Extensions</strong> — 2×12</li>
          </ul>
        </section>

        {/* WEEK */}
        <section className="workout-split-section19">
          <h2 className="workout-split-heading19">📅 Weekly Routine</h2>

          <div className="workout-split-week-grid19">
            <div className="workout-split-day19"><strong>Mon:</strong> Full Body</div>
            <div className="workout-split-day19"><strong>Tue:</strong> Rest</div>
            <div className="workout-split-day19"><strong>Wed:</strong> Full Body</div>
            <div className="workout-split-day19"><strong>Thu:</strong> Rest</div>
            <div className="workout-split-day19"><strong>Fri:</strong> Full Body</div>
            <div className="workout-split-day19"><strong>Sat:</strong> Optional Full Body</div>
            <div className="workout-split-day19"><strong>Sun:</strong> Rest</div>
          </div>
        </section>

      </div>
    </>
  );
}
