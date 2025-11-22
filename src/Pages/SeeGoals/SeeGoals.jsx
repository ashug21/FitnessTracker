import React, { useEffect, useState } from "react";
import "./SeeGoals.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import bin2 from '../../assets/bin2.png'
import axios from "axios";

export default function SeeGoals() {

  const [data, setData] = useState(null);

  const getGoals = async () => {
    try {
      const res = await axios.get("http://localhost:8080/ag/getGoals");
      console.log("BACKEND:", res.data.data);
      setData(res.data.data[0]);               
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/ag/deleteGoals/${id}`);
      getGoals();
    } catch (error) {
      console.error("Delete error:", error);
    }
  };


  useEffect(() => {
    getGoals();
  }, []);

  if (!data) {
    return (
      <div>
        <Navbar />
        <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
        <br/> <br/> 
        <div className="no-data-div">
         
        <h1 className="no-data">No Goals are set</h1>
        </div>
        <div className="null"></div>


        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="seeGoals-outerSpacing9">
        <div className="seeGoals-bigContainer9" role="region" aria-labelledby="goals-heading">
          
        <button onClick={() => deleteTask(data._id)} className="container-delete9">
          <img src={bin2} />
          </button>

          <h1 id="goals-heading" className="goals-title9">Your Current Goal</h1>

          {/* Primary Goal */}
          <div className="goal-card9">
            <div className="goal-header9">
              <h2>Primary Goal</h2>
            </div>
            <p className="goal-value9">{data.goal}</p>
            <p className="goal-note9">Stay consistent and follow a structured training routine aligned with your goal.</p>
          </div>

          {/* Step Goal */}
          <div className="goal-card9">
            <div className="goal-header9">
              <h2>Step Goal</h2>
            </div>
            <p className="goal-value9">{data.stepgoal} steps / day</p>
            <p className="goal-note9">Daily movement helps improve metabolism, recovery, and overall activity levels.</p>
          </div>

          {/* Workouts Per Week */}
          <div className="goal-card9">
            <div className="goal-header9">
              <h2>Workouts / Week</h2>
            </div>
            <p className="goal-value9">{data.workoutweek} sessions / week</p>
            <p className="goal-note9">A balanced mix of strength and conditioning maximizes long-term progress.</p>
          </div>

          {/* Daily Calories */}
          <div className="goal-card9">
            <div className="goal-header9">
              <h2>Daily Calories</h2>
            </div>
            <p className="goal-value9">{data.caloriegoal} kcal / day</p>
            <p className="goal-note9">Maintain steady nutrition to support energy, performance, and recovery.</p>
          </div>

          {/* Water Intake */}
          <div className="goal-card9">
            <div className="goal-header9">
              <h2>Water Intake</h2>
            </div>
            <p className="goal-value9">{data.waterintake} L / day</p>
            <p className="goal-note9">Proper hydration improves performance, digestion, and recovery throughout the day.</p>
          </div>

        </div>
      </div>
     
     <div className="null"></div>
      <Footer/>
    </div>
  );
}
