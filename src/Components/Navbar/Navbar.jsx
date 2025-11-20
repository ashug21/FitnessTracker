import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="ft-nav1">
      <h1 className="ft-logo1">FitnessTracker</h1>

      <ul className="ft-links1">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add-workout">AddWorkoutInfo</Link></li>
        <li><Link to="/add-goals">AddGoals</Link></li>
        <li><Link to="/see-workout">SeeWorkout</Link></li>
        <li><Link to="/see-goals">SeeGoals</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}
