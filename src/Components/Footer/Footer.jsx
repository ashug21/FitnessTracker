import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer3">
      <h2 className="footer-logo3">FitnessTracker</h2>

      <div className="footer-links3">
        <a href="/">Home</a>
        <a href="/add-workout">AddWorkout</a>
        <a href="/add-goals">AddGoals</a>
        <a href="/see-workout">SeeWorkout</a>
        <a href="/see-goals">SeeGoals</a>
        <a href="/login">Login</a>
      </div>

      <p className="footer-copy3">© {new Date().getFullYear()} FitnessTracker. All rights reserved.</p>
    </footer>
  );
}
