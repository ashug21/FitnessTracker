import React from "react";
import "./AddGoals.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

export default function AddGoals() {
  return (
    <div>
      <Navbar />
      <br /><br />

      <div className="addgoals-container6">
        <h1 className="addgoals-title6">Set Your Goals</h1>

        <form className="addgoals-form6">

          <div className="form-group6">
            <label>Goal</label>
            <input type="text" placeholder="e.g. Build Muscle / Fat Loss" />
          </div>

          <div className="form-group6">
            <label>Step Goal</label>
            <input type="number" placeholder="e.g. 10000" />
          </div>

          <div className="form-group6">
            <label>Workout / Week</label>
            <input type="number" placeholder="e.g. 4" />
          </div>

          <div className="form-group6">
            <label>Daily Calories Goal</label>
            <input type="number" placeholder="e.g. 2200" />
          </div>

          <div className="form-group6">
            <label>Water Intake (Liters)</label>
            <input type="number" placeholder="e.g. 3.5" />
          </div>

          <button className="submit-btn6">Save Goals</button>
        </form>
      </div>

      <Footer/>
    </div>
  );
}
