import React,{useState,useEffect, act} from "react";
import "./Track.css";
import Navbar from "../Navbar/Navbar";

export default function Track14() {

    const [age , setAge] = useState("");
    const [gender , setGender] = useState("");
    const [height , setHeight] = useState("");
    const [weight , setWeight] = useState("");
    const [activitylevel , setActivityLevel] = useState("");

    const[result , setResult] = useState('');


    function CalculateactivityLevel(input) {
        if (input === "Sedentary") return 1.2;
        if (input === "Light") return 1.375;
        if (input === "Moderate") return 1.55;
        if (input === "Active") return 1.725;
        if (input === "Very") return 1.9;
        return 1.2;
    }

    const handleClear = () => {
        setAge("");
        setGender("");
        setHeight("");
        setWeight("");
        setActivityLevel("");

    }


    const TrackCalories = async(e) => {
        e.preventDefault();

        let daily_calories = 0;

        const user = CalculateactivityLevel(activitylevel);


        if(gender === "Male"){
            const BMR = (10 * weight) + (6.25 * height) - (5 * age) + 5;
            daily_calories = BMR * Number(user);
        }
        else{
            const BMR = (10 * weight) + (6.25 * height) - (5 * age) - 161;
            daily_calories = BMR * Number(user);
        }
        setResult(daily_calories);
    }


  return (
    <div>
    <Navbar />
  
    <div className="track-wrapper14">
      <div className="track-card14">
  
        <h1 className="track-title14">Track Your Daily Calories</h1>
        <p className="track-sub14">
          Enter your details to understand your daily calorie needs based on your lifestyle.
        </p>
  
        <form className="track-form14" onSubmit={TrackCalories}>
          <div className="track-group14">
            <label className="track-label14">Age</label>
            <input onChange={(e) => setAge(e.target.value)} value={age} type="number" className="track-input14" placeholder="Enter your age" />
          </div>
  
          <div className="track-group14">
            <label className="track-label14">Gender</label>
            <select onChange={(e) => setGender(e.target.value)} value={gender} className="track-select14">
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
  
          <div className="track-group14">
            <label className="track-label14">Height (cm)</label>
            <input onChange={(e) => setHeight(e.target.value)} value={height} type="number" className="track-input14" placeholder="Enter height" />
          </div>
  
          <div className="track-group14">
            <label className="track-label14">Weight (kg)</label>
            <input onChange={(e) => setWeight(e.target.value)} value={weight} type="number" className="track-input14" placeholder="Enter weight" />
          </div>
  
          <div className="track-group14">
            <label className="track-label14">Activity Level</label>
            <select onChange={(e) => setActivityLevel(e.target.value)} value={activitylevel} className="track-select14">
              <option value="">Select activity level</option>
              <option value="Sedentary">Sedentary</option>
              <option value="Light">Light Activity</option>
              <option value="Moderate">Moderate Activity</option>
              <option value="Active">Active</option>
              <option value="Very">Very Active</option>
            </select>
          </div>
  
          <div className="track-btns14">
            <button type="submit" className="track-btn-calc14">Calculate</button>
            <button type="reset" onClick={handleClear} className="track-btn-clear14">Clear</button>
          </div>
        </form>

        <br/><br/>


        {result && (
          <div className="result-container14">
            <div className="result-card14">
              <h2 className="result-calories14">{Math.round(result)} kcal/day</h2>
              <p className="result-description14">
                This is your estimated <strong>maintenance calorie intake</strong>.
                Eating this amount daily will help you maintain your current weight.
              </p>
            </div>
            <div className="result-card14">
              <h2 className="result-calories14">{Math.round(result) + 200} kcal/day</h2>
              <p className="result-description14">
              This is your estimated <strong>Bulking calorie intake</strong>. intake.
Eating this amount daily may help you gain weight and muscle more quickly, also a little bit of fat gain.

              </p>
            </div>
            <div className="result-card14">
              <h2 className="result-calories14">{Math.round(result) - 200} kcal/day</h2>
              <p className="result-description14">
              This is your estimated <strong>Cutting calorie intake</strong>.
Eating this amount daily may help you lose fat while maintaining muscle mass.

              </p>
            </div>
          </div>
        )}
  
      </div>
    </div>
  </div>
  
   
  );
}
