import React, { useState, useEffect } from "react";
import "./AddGoals.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";
import { useLocation } from "react-router-dom";
import goal_img from '../../assets/goal.png'

export default function AddGoals() {

  const [goal, setGoal] = useState("");
  const [stepgoal, setStepGoal] = useState("");
  const [workoutweek, setWorkoutWeek] = useState("");
  const [caloriegoal, setCalorieGoal] = useState("");
  const [waterintake, setWaterIntake] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/ag/addGoals",
        {
          goal,
          stepgoal,
          workoutweek,
          caloriegoal,
          waterintake,
        }
      );

      if (!response.data.success) {
        alert(response.data.message || "Something went wrong");
        return;
      }

      alert("Goals saved successfully!");

      setGoal("");
      setStepGoal("");
      setWorkoutWeek("");
      setCalorieGoal("");
      setWaterIntake("");

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Navbar />


      <div className="addgoals-container6">
      <h1 className="addgoals-title6">Set Your Goals</h1>
        <div className="addgoals-hero">
          <div className="addgoals-quote">
            <p className="quote-text">“Small daily improvements are the key to  <br/> long-term progress.”</p>
            <p className="quote-author">— Compound Gains</p>
          </div>

          <div className="addgoals-illustration">
  <img src={goal_img} alt="goal illustration" className="goal-image"/>
</div>
        </div>

      

        <form className="addgoals-form6" onSubmit={handleSubmit}>

          <div className="form-group6">
            <label>Goal</label>
            <input
              onChange={(e) => setGoal(e.target.value)}
              value={goal}
              type="text"
              placeholder="e.g., Lose Fat, Build Muscle, Get Lean"
            />
          </div>

          <div className="form-group6">
            <label>Step Goal</label>
            <input
              onChange={(e) => setStepGoal(e.target.value)}
              value={stepgoal}
              type="number"
              placeholder="e.g., 5000"
            />
          </div>

          <div className="form-group6">
            <label>Workout / Week</label>
            <input
              onChange={(e) => setWorkoutWeek(e.target.value)}
              value={workoutweek}
              type="number"
              placeholder="e.g., 5"
            />
          </div>

          <div className="form-group6">
            <label>Daily Calories Goal</label>
            <input
              onChange={(e) => setCalorieGoal(e.target.value)}
              value={caloriegoal}
              type="text"
              placeholder="e.g., 2000"
            />
          </div>

          <div className="form-group6">
            <label>Water Intake (Liters)</label>
            <input
              onChange={(e) => setWaterIntake(e.target.value)}
              value={waterintake}
              type="number"
              placeholder="e.g., 3"
            />
          </div>

          <button type="submit" className="submit-btn6">Save Goals</button>
        </form>
      </div>

      <Footer />
    </div>
  );
}
