import React from "react";
import "./Calories.css";
import { useNavigate } from "react-router-dom";
import img from '../../assets/calorie.png'

export default function Calories() {
  const navigate = useNavigate();

  return (
    <div className="calories-wrapper13">
      <div className="calories-card13">

        <div className="calories-img-container13">
          <img
            src={img}
            alt="Running on Treadmill"
            className="calories-img13"
          />
        </div>

        <div className="calories-content13">
          <h2 className="calories-title13">Understanding Calories</h2>

          <p className="calories-text13">
            Calories are the energy units your body relies on to perform
            everything—breathing, walking, thinking, training, and recovering.
            A well-balanced calorie intake directly impacts your metabolism,
            performance, and long-term fitness progress.
          </p>

          <p className="calories-text13">
            Tracking your calories helps you stay consistent, create structure
            in your nutrition habits, and align daily energy intake with your
            physique and performance goals. Whether you're cutting, bulking,
            or maintaining, calorie awareness keeps you in control.
          </p>

          <button
            className="calories-btn13"
            onClick={() => navigate("/track-calories")}
          >
            Track Calories
          </button>
        </div>
      </div>

      
    </div>
  );
}
