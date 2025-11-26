import React from "react";
import "./Supplement.css";
import { useNavigate } from "react-router-dom";
import protein from '../../assets/protein.png'

export default function Supplement() {
  const navigate = useNavigate();

  return (
    <div className="supplement-wrapper21">
      <div className="supplement-card21">

        <div className="supplement-img-container21">
          <img
            src={protein}
            alt="Protein Powder Supplement"
            className="supplement-img21"
          />
        </div>

        <div className="supplement-content21">
          <h2 className="supplement-title21">Understanding Supplements</h2>

          <p className="supplement-text21">
            Supplements are tools that help enhance performance, recovery, and
            daily nutrition. They fill nutrient gaps and support your training
            goals when whole foods alone are not enough.
          </p>

          <p className="supplement-text21">
            From protein powders that boost muscle repair to creatine that
            increases strength output—choosing the right supplements can help
            you maximize progress safely and effectively.
          </p>

          <button
            className="supplement-btn21"
            onClick={() => navigate("/aboutSupplements")}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
