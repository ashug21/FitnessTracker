import React from "react";
import "./Exercises.css";
import { Link } from "react-router-dom";
import sample from "../../assets/exercises.png";

const Exercises = () => {
  return (
    <div className="exerciseProCard33">

      <div className="exerciseProImageWrap33">
        <img src={sample} alt="exercise" className="exerciseProImage33" />

        <div className="exerciseProTag33">Expert Guided</div>

        <div className="exerciseProGradient33"></div>
      </div>

      <div className="exerciseProContent33">
        <h2 className="exerciseProTitle33">Master Every Exercise</h2>

        <p className="exerciseProText33">
          Watch detailed video demonstrations, learn the correct form, avoid
          injuries, and follow precise rep schemes for maximum results.
        </p>

        <div className="exerciseProHighlights33">
        

          <div className="exerciseHighlightItem33">
            <span className="exerciseHighlightIcon33">💪</span>
            <p className="exerciseHighlightText33">Target Muscle Groups</p>
          </div>

          <div className="exerciseHighlightItem33">
            <span className="exerciseHighlightIcon33">⚡</span>
            <p className="exerciseHighlightText33">Form & Technique Tips</p>
          </div>
        </div>

        <p className="exerciseProSecondary33">
          Your personal fitness companion — designed to help you understand
          exercises the right way, track progress, and grow stronger each day.
        </p>

        <Link to="/exercise-details" className="exerciseProBtnWrap33">
          <button className="exerciseProBtn33">Explore Now</button>
        </Link>
      </div>
      
    </div>
  );
};

export default Exercises;
