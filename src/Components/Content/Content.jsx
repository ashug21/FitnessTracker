import React from "react";
import './Content.css';
import { Link } from "react-router-dom";

export default function Content() {
  return (
    <div className="workout-card15 classname15" role="region" aria-labelledby="ws-title" tabIndex={0}>
      
      <div className="card-media15" aria-hidden="true">
        <img 
          src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg" 
          alt="Fitness training" 
          className="card-image15"
        />
      </div>

      <div className="card-content15">
        <h3 id="ws-title">Workout Splits — Smart Guide</h3>

        <p className="lead15">
          Quick, clear, and science-backed splits for any goal — build mass, get lean, or maintain strength.
        </p>

        <ul className="highlights15" aria-hidden="false">
          <li><strong>Push/Pull/Legs</strong> — ideal for hypertrophy and balanced recovery.</li>
          <li><strong>Upper/Lower</strong> — efficient 4-day structure for strength gains.</li>
          <li><strong>Full Body</strong> — perfect for time-crunched schedules and beginners.</li>
        </ul>

        <div className="meta15">
          <div className="cal15">Est. weekly sessions: <strong>3–6</strong></div>
          <div className="duration15">Avg. session: <strong>45–70 min</strong></div>
        </div>
        <br/><br/>
        <Link className="cta15" to="/workout-splits">
          Explore More About Splits
        </Link>
      </div>

      <div className="card-accent15" aria-hidden="true"></div>
    </div>
  );
}
