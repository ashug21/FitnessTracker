import React from "react";
import "./AddWorkout.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

export default function AddWorkout() {


  return (

    <div>
      <Navbar/>
      <br/> <br/>
 <div className="addworkout-container5">
      <h1 className="addworkout-title5">Add Workout Details</h1>

      <form className="addworkout-form5">

        <div className="form-group5">
          <label>Date</label>
          <input type="date" />
        </div>

        <div className="form-group5">
          <label>Exercise Name</label>
          <input type="text" placeholder="e.g. Bench Press" />
        </div>

        <div className="form-group-row5">
          <div className="form-group5">
            <label>Sets</label>
            <input type="number" placeholder="e.g. 4" />
          </div>

          <div className="form-group5">
            <label>Reps</label>
            <input type="number" placeholder="e.g. 12" />
          </div>

          <div className="form-group5">
            <label>Weight (kg)</label>
            <input type="number" placeholder="e.g. 50" />
          </div>
        </div>

        <button className="submit-btn5">Add Workout</button>
      </form>
    </div>

    <Footer/>
    </div>
   
  );
}
