import React, { useState } from "react";
import './CheckGoals.css';
import Navbar from "../../Components/Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../../Components/Footer/Footer";


export default function CheckGoals20() {

  const navigate = useNavigate();

  const[goal,setGoal] = useState("");
  const[stepgoal,setStepGoal] = useState("");
  const[workoutweek,setWorkoutWeek] = useState("");
  const[caloriegoal,setCalorieGoal] = useState("");
  const[waterintake,setWaterIntake] = useState("");

  function setData(data) {
    SendDatafromCheckGoals(data);
  }



  const SendDatafromCheckGoals = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/ag/addGoals",
        {
          goal: data.goal,
          stepgoal: data.stepgoal,
          workoutweek: data.workoutweek,
          caloriegoal: data.caloriegoal,
          waterintake: data.waterintake
        }
      );
  
      if (!response.data.success) {
        alert(response.data.message || "Something went wrong");
        return;
      }
  
      alert("Goals saved successfully!");

      navigate('/see-goals');
  
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
        <Navbar/>

        <div className="checkgoals-newpara20">
            <p className="checkgoals-para20">Dont know Maintainence Calories? Calculate Now</p>
           <Link to="/track-calories"><button className="checkgoals-parabutton20">Get Maintaince Calories</button></Link> 
        </div>

      <br/><br/>
          <div className="checkGoalsWrapper20">
      <div className="checkGoalsCard20">

        <h1 className="checkGoalsTitle20">Lean Cut 🔥</h1>

        <div className="checkGoalsRow20">
          <span className="checkGoalsLabel20">Goal :</span>
          <span className="checkGoalsValue20">Get Lean, Lose Fat</span>
        </div>

        <div className="checkGoalsRow20">
          <span className="checkGoalsLabel20">Step-Goal :</span>
          <span className="checkGoalsValue20">5000 steps/day</span>
        </div>

        <div className="checkGoalsRow20">
          <span className="checkGoalsLabel20">Workout / Week :</span>
          <span className="checkGoalsValue20">5 sessions</span>
        </div>

        <div className="checkGoalsRow20">
          <span className="checkGoalsLabel20">Daily Calories :</span>
          <span className="checkGoalsValue20">Maintenance - 200 kcal</span>
        </div>

        <div className="checkGoalsRow20">
          <span className="checkGoalsLabel20">Water Intake :</span>
          <span className="checkGoalsValue20">3-4 L</span>
        </div>

         <div className="checkgoals-button20">

    <button onClick={() => setData({
      goal: "Get Lean, Lose Fat",
      stepgoal: 5000,
      workoutweek: 5,
      caloriegoal: "Maintainence -200",
      waterintake: 3
    })}>
      Add this to your current goal 👉🏻
    </button>
  </div>
       
      </div>


      <div className="checkGoalsCard20">

<h1 className="checkGoalsTitle20">Bulking 🏋🏻‍♀️</h1>

<div className="checkGoalsRow20">
  <span className="checkGoalsLabel20">Goal :</span>
  <span className="checkGoalsValue20">Get Big, More Muscles</span>
</div>

<div className="checkGoalsRow20">
  <span className="checkGoalsLabel20">Step-Goal :</span>
  <span className="checkGoalsValue20">2000 steps/day</span>
</div>

<div className="checkGoalsRow20">
  <span className="checkGoalsLabel20">Workout / Week :</span>
  <span className="checkGoalsValue20">6 sessions</span>
</div>

<div className="checkGoalsRow20">
  <span className="checkGoalsLabel20">Daily Calories :</span>
  <span className="checkGoalsValue20">Maintenance + 400 kcal</span>
</div>

<div className="checkGoalsRow20">
  <span className="checkGoalsLabel20">Water Intake :</span>
  <span className="checkGoalsValue20">3-4 L</span>
</div>

<div className="checkgoals-button20">
<button onClick={() => setData({
      goal: "Get Big, More Muscles",
      stepgoal: 2000,
      workoutweek: 6,
      caloriegoal: "Maintainence + 400",
      waterintake: 4
    })}>
      Add this to your current goal 👉🏻
    </button>
</div>

</div>

<div className="checkGoalsCard20">

<h1 className="checkGoalsTitle20">Yoga 🧘🏻‍♀️</h1>

<div className="checkGoalsRow20">
  <span className="checkGoalsLabel20">Goal :</span>
  <span className="checkGoalsValue20">Mental Peace , Flexibility</span>
</div>

<div className="checkGoalsRow20">
  <span className="checkGoalsLabel20">Step-Goal :</span>
  <span className="checkGoalsValue20">2000 steps/day</span>
</div>

<div className="checkGoalsRow20">
  <span className="checkGoalsLabel20">Workout / Week :</span>
  <span className="checkGoalsValue20">6 sessions</span>
</div>

<div className="checkGoalsRow20">
  <span className="checkGoalsLabel20">Daily Calories :</span>
  <span className="checkGoalsValue20">Maintenance + 100</span>
</div>

<div className="checkGoalsRow20">
  <span className="checkGoalsLabel20">Water Intake :</span>
  <span className="checkGoalsValue20">3 L</span>
</div>

<div className="checkgoals-button20">
<button onClick={() => setData({
  goal: "Mental Peace , Flexibility",
  stepgoal: 2000,
  workoutweek: 6,
  caloriegoal: "Maintainence",
  waterintake: 3
})}>
  Add this to your current goal 👉🏻
</button>
</div>

</div>

<div className="checkGoalsCard20">

<h1 className="checkGoalsTitle20">Lean Bulking 🍽️</h1>

<div className="checkGoalsRow20">
  <span className="checkGoalsLabel20">Goal :</span>
  <span className="checkGoalsValue20">Gain Weight, Less Fat</span>
</div>

<div className="checkGoalsRow20">
  <span className="checkGoalsLabel20">Step-Goal :</span>
  <span className="checkGoalsValue20">3000 steps/day</span>
</div>

<div className="checkGoalsRow20">
  <span className="checkGoalsLabel20">Workout / Week :</span>
  <span className="checkGoalsValue20">6 sessions</span>
</div>

<div className="checkGoalsRow20">
  <span className="checkGoalsLabel20">Daily Calories :</span>
  <span className="checkGoalsValue20">Maintenance + 200 kcal</span>
</div>

<div className="checkGoalsRow20">
  <span className="checkGoalsLabel20">Water Intake :</span>
  <span className="checkGoalsValue20">3-4 L</span>
</div>

<div className="checkgoals-button20">
<button onClick={() => setData({
      goal: "Gain Weight, Less Fat",
      stepgoal: 3000,
      workoutweek: 6,
      caloriegoal: "Maintainence +200",
      waterintake: 4
    })}>
      Add this to your current goal 👉🏻
    </button>
</div>

</div>
<br/><br/><br/><br/><br/><br/><br/><br/>
    </div> 
    

    <Footer/> 
    
    </div>

  );
}
