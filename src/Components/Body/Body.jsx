import React from "react";
import result from '../../assets/results.jpg'
import "./Body.css";


export default function Body() {
  return (
    <div className="body-wrapper1">

      {/* HERO SECTION */}
      <section className="hero1">
        <div className="hero-text1">
          <h1>Track. Improve. Transform.</h1>
          <p>Your fitness journey starts here. Track workouts, set goals, and become the best version of yourself.</p>
          <button className="hero-btn1">Start Now</button>
        </div>

        <div className="hero-img1">
          <img 
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b"
            alt="Fitness Hero"
          />
        </div>
      </section>


      {/* FEATURE SECTION */}
      <section className="features1">
        <div className="feature-card1">
          <img 
            src="https://images.unsplash.com/photo-1599058917212-d750089bc07e"
            alt="Workout tracking"
          />
          <h3>Track Workouts</h3>
          <p>Monitor your daily exercises and measure improvement over time.</p>
        </div>

        <div className="feature-card1">
          <img 
            src="https://images.unsplash.com/photo-1554284126-aa88f22d8b74"
            alt="Goals"
          />
          <h3>Set Goals</h3>
          <p>Create powerful fitness goals and stay focused on achieving them.</p>
        </div>

        <div className="feature-card1">
          <img 
            src={result}
            alt="Results"
          />
          <h3>See Results</h3>
          <p>Analyze your progress and stay motivated through visual tracking.</p>
        </div>
      </section>

    </div>
  );
}
