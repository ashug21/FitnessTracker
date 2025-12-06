import React, { useState } from "react";
import "./Track.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Track14() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const [heightMode, setHeightMode] = useState("cm"); // <-- NEW (cm or ft)
  const [heightText, setHeightText] = useState("");   // for ft/in
  const [heightCm, setHeightCm] = useState("");        // for cm

  const [weightUnit, setWeightUnit] = useState("kg");
  const [weightValue, setWeightValue] = useState("");

  const [activitylevel, setActivityLevel] = useState("");
  const [result, setResult] = useState("");

  function CalculateactivityLevel(input) {
    if (input === "Sedentary") return 1.2;
    if (input === "Light") return 1.375;
    if (input === "Moderate") return 1.55;
    if (input === "Active") return 1.725;
    if (input === "Very") return 1.9;
    return 1.2;
  }

  // Convert 5'11, 5ft 11 etc → cm
  function parseHeightToCm(value) {
    if (!value) return null;

    value = value.toLowerCase().trim();
    value = value.replace(/feet|foot|ft/g, "'").replace(/inches|inch|in/g, "");

    if (value.includes("'")) {
      const [feet, inches] = value.split("'");
      const f = parseFloat(feet) || 0;
      const i = parseFloat(inches) || 0;
      return f * 30.48 + i * 2.54;
    }

    const parts = value.split(" ");
    if (parts.length === 2) {
      const f = parseFloat(parts[0]) || 0;
      const i = parseFloat(parts[1]) || 0;
      return f * 30.48 + i * 2.54;
    }

    const onlyFeet = parseFloat(value);
    if (!isNaN(onlyFeet)) return onlyFeet * 30.48;

    return null;
  }

  const handleClear = () => {
    setAge("");
    setGender("");
    setHeightMode("cm");
    setHeightText("");
    setHeightCm("");
    setWeightUnit("kg");
    setWeightValue("");
    setActivityLevel("");
    setResult("");
  };

  const TrackCalories = (e) => {
    e.preventDefault();

    if (!age || !gender || !weightValue || !activitylevel) {
      alert("Please fill all fields");
      return;
    }

   
    let heightInCm = 0;

    if (heightMode === "cm") {
      if (!heightCm) {
        alert("Enter height in cm");
        return;
      }
      heightInCm = Number(heightCm);
    } else {
      heightInCm = parseHeightToCm(heightText);
      if (!heightInCm) {
        alert("Invalid height format. Try 5'11 or 5 11");
        return;
      }
    }


    let weightInKg = Number(weightValue);
    if (weightUnit === "lbs") weightInKg *= 0.453592;

    // BMR
    let BMR = 0;
    if (gender === "Male") {
      BMR = 10 * weightInKg + 6.25 * heightInCm - 5 * age + 5;
    } else {
      BMR = 10 * weightInKg + 6.25 * heightInCm - 5 * age - 161;
    }

    const multiplier = CalculateactivityLevel(activitylevel);
    const dailyCalories = BMR * multiplier;

    setResult(dailyCalories);
  };

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
              <input
                onChange={(e) => setAge(e.target.value)}
                value={age}
                type="number"
                className="track-input14"
                placeholder="Enter your age"
              />
            </div>

            <div className="track-group14">
              <label className="track-label14">Gender</label>
              <select
                onChange={(e) => setGender(e.target.value)}
                value={gender}
                className="track-select14"
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            {/* HEIGHT MODE */}
            <div className="track-group14">
              <label className="track-label14">Height</label>

              <select
                onChange={(e) => setHeightMode(e.target.value)}
                value={heightMode}
                className="track-input14"
              >
                <option value="cm">Cm</option>
                <option value="ft">Feet & Inches</option>
              </select>

              {heightMode === "cm" ? (
                <input
                  onChange={(e) => setHeightCm(e.target.value)}
                  value={heightCm}
                  type="number"
                  className="track-input14"
                  placeholder="Enter height in cm"
                />
              ) : (
                <input
                  onChange={(e) => setHeightText(e.target.value)}
                  value={heightText}
                  type="text"
                  className="track-input14"
                  placeholder="e.g. 5'11"
                />
              )}
            </div>

            {/* WEIGHT */}
            <div className="track-group14">
              <label className="track-label14">Weight</label>

              <select
                onChange={(e) => setWeightUnit(e.target.value)}
                value={weightUnit}
                className="track-input14"
              >
                <option value="kg">Kg</option>
                <option value="lbs">Lbs</option>
              </select>

              <input
                onChange={(e) => setWeightValue(e.target.value)}
                value={weightValue}
                type="number"
                className="track-input14"
                placeholder={`Enter weight in ${weightUnit}`}
              />
            </div>

            {/* ACTIVITY */}
            <div className="track-group14">
              <label className="track-label14">Activity Level</label>
              <select
                onChange={(e) => setActivityLevel(e.target.value)}
                value={activitylevel}
                className="track-select14"
              >
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

          {result && (
  <div className="result-container14">

    <div className="result-card14">
      <h2 className="result-calories14">{Math.round(result)} kcal/day</h2>
      <p className="result-description14"><strong>Maintenance calories.</strong></p>
      <p className="result-extra14">
        This is the estimated number of calories you need to maintain your current weight.
      </p>
    </div>

    <div className="result-card14">
      <h2 className="result-calories14">{Math.round(result) + 200} kcal/day</h2>
      <p className="result-description14"><strong> Bulking calories.</strong></p>
      <p className="result-extra14">
        Slight calorie surplus recommended for clean muscle gain without excess fat.
      </p>
    </div>

    <div className="result-card14">
      <h2 className="result-calories14">{Math.round(result) - 200} kcal/day</h2>
      <p className="result-description14"><strong>Cutting calories.</strong> </p>
      <p className="result-extra14">
        A safe deficit to promote fat loss while preserving muscle mass.
      </p>
    </div>

  </div>
)}

        </div>
      </div>

      <br/><br/><br/><br/><br/><br/>
      <Footer />
    </div>
  );
}
