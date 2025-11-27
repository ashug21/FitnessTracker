import React, { useEffect, useState } from "react";
import "./SeeGoals.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import bin2 from '../../assets/bin.png'
import axios from "axios";
import { Link } from "react-router-dom";
import goal_icon from '../../assets/moti.png'

export default function SeeGoals() {

  const [data, setData] = useState(null);

  const getGoals = async () => {
    try {
      const res = await axios.get("https://fitnesstracker-1-ud7g.onrender.com/ag/getGoals");
      console.log("BACKEND:", res.data.data);
      setData(res.data.data[0]);               
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`https://fitnesstracker-1-ud7g.onrender.com/ag/deleteGoals/${id}`);
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

          <div className="checkgoals-newpara20">
                    <p className="checkgoals-para20">Dont know Maintainence Calories? Calculate Now</p>
                   <Link to="/track-calories"><button className="checkgoals-parabutton20">Calculate Maintaince Calories</button></Link> 
                </div>

        <div className="no-data-div9">
          <h1 className="no-data9">No Goals are set</h1>

          <p className="no-data-text9">
            Can't Decide your goal? Have a look at what suits you best.
          </p>
          <Link to="/add-goals"><button className="no-data-btn9">Add Goals</button></Link>
         <Link to="/checkgoals"><button className="no-data-btn9">Check Out Goals</button></Link> 
        </div>

        
        <br/><br/><br/>  <br/><br/><br/>  <br/><br/><br/>
        <Footer />
      </div>
    );
  }



  return (
    <div>
      <Navbar />
      <div className="seeGoals-outerSpacing9">


        <div className="seeGoals-motivation-banner9">
          <div className="seeGoals-motivation-left9">
            <h3 className="banner-head9">Consistency Builds Champions</h3>
            <p className="banner-sub9">Small wins every day. Log your goal — then chase it.</p>
          </div>
          <div className="seeGoals-motivation-right9">
            <span className="streak-chip9">🔥 Work For Your Goal </span>
            <img
              src={goal_icon}
              alt="motivation"
              className="banner-icon9"
            />
          </div>
        </div>

        <div className="seeGoals-bigContainer9" role="region" aria-labelledby="goals-heading">
          
          <button onClick={() => deleteTask(data._id)} className="container-delete9">
            <img src={bin2} alt="delete" />
          </button>

          <h1 id="goals-heading" className="goals-title9">Your Current Goal</h1>


          <div className="goal-card9">
            <div className="goal-header9">
              <h2>Primary Goal</h2>
            </div>
            <p className="goal-value9">{data.goal}</p>
            <p className="goal-note9">Stay consistent and follow a structured training routine aligned with your goal.</p>
            <div className="goal-footer-chip9">Tip: Track progress weekly</div>
          </div>


          <div className="goal-card9">
            <div className="goal-header9">
              <h2>Step Goal</h2>
            </div>
            <p className="goal-value9">{data.stepgoal} steps / day</p>
            <p className="goal-note9">Daily movement helps improve metabolism, recovery, and overall activity levels.</p>
            <div className="goal-footer-chip9">{Math.min(100, Math.round((data.stepgoal / 10000) * 100))}% of "10k"</div>
          </div>


          <div className="goal-card9">
            <div className="goal-header9">
              <h2>Workouts / Week</h2>
            </div>
            <p className="goal-value9">{data.workoutweek} sessions / week</p>
            <p className="goal-note9">A balanced mix of strength and conditioning maximizes long-term progress.</p>
            <div className="goal-footer-chip9">{data.workoutweek} sessions — keep the tempo</div>
          </div>


          <div className="goal-card9">
            <div className="goal-header9">
              <h2>Daily Calories</h2>

            </div>
            <p className="goal-value9">{data.caloriegoal} kcal / day</p>
            <p className="goal-note9">Maintain steady nutrition to support energy, performance, and recovery.</p>
            <div className="goal-footer-chip9">Aim: consistent daily intake</div>
          </div>


          <div className="goal-card9">
            <div className="goal-header9">
              <h2>Water Intake</h2>
            </div>
            <p className="goal-value9">{data.waterintake} L / day</p>
            <p className="goal-note9">Proper hydration improves performance, digestion, and recovery throughout the day.</p>
            <div className="goal-footer-chip9">Hydration: sip often</div>
          </div>

        </div>
      </div>
      <Footer/>
    </div>
  );
}
