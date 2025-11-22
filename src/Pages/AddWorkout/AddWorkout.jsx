import React, { useState } from "react";
import "./AddWorkout.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";

export default function AddWorkout() {

  const [date, setDate] = useState("");
  const [exercise, setExercise] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/aw/addWorkout", {
        date,
        exercise,
        sets,
        reps,
        weight,
      });
      if (!response.data.success) {
        alert(response.data.message || "Something went wrong");
        return;
      }

      setDate("");
      setExercise("");
      setSets("");
      setReps("");
      setWeight("");

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Navbar />
      <br /> <br />

      <div className="addworkout-container5">
        <h1 className="addworkout-title5">Add Workout Details</h1>

        <form className="addworkout-form5" onSubmit={onSubmit}>

          <div className="form-group5">
            <label>Date</label>
            <input
              type="text"
              onChange={(e) => setDate(e.target.value)}
              value={date}
              placeholder="Enter in dd/mm/yyyy"
            />
          </div>

          <div className="form-group5">
            <label>Exercise Name</label>
            <input
              type="text"
              placeholder="e.g. Bench Press"
              onChange={(e) => setExercise(e.target.value)}
              value={exercise}
            />
          </div>

          <div className="form-group-row5">
            <div className="form-group5">
              <label>Sets</label>
              <input
                type="number"
                placeholder="e.g. 4"
                onChange={(e) => setSets(e.target.value)}
                value={sets}
              />
            </div>

            <div className="form-group5">
              <label>Reps</label>
              <input
                type="number"
                placeholder="e.g. 12"
                onChange={(e) => setReps(e.target.value)}
                value={reps}
              />
            </div>

            <div className="form-group5">
              <label>Weight (kg)</label>
              <input
                type="text"
                placeholder="e.g. 50"
                onChange={(e) => setWeight(e.target.value)}
                value={weight}
              />
            </div>
          </div>

          <button type="submit" className="submit-btn5">Add Workout</button>
        </form>
      </div>

      <Footer />
    </div>
  );
}
