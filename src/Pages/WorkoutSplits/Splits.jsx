import React from "react";
import "./Splits.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";

export default function Splits() {
  return (
    <div>
      <Navbar />

      {/* PUSH PULL LEGS */}
      <div className="ppl-card15">
        <div className="ppl-image-wrapper15">
          <img
            src="https://images.pexels.com/photos/3838389/pexels-photo-3838389.jpeg"
            alt="Push Pull Legs Workout"
            className="ppl-image15"
          />
        </div>

        <div className="ppl-content15">
          <h2 className="ppl-title15">Push / Pull / Legs Split</h2>

          <p className="ppl-description15">
            The Push/Pull/Legs split organizes your training into three focused 
            sessions that target your entire body with balanced recovery. It's simple, 
            effective, and one of the best structures for gaining muscle and strength.
          </p>

          <div className="ppl-sections15">
            <div className="ppl-section15">
              <h3>Push Day</h3>
              <p>Chest, shoulders and triceps — bench press, dips, shoulder press.</p>
            </div>

            <div className="ppl-section15">
              <h3>Pull Day</h3>
              <p>Back and biceps — rows, pulldowns, deadlifts, face pulls.</p>
            </div>

            <div className="ppl-section15">
              <h3>Leg Day</h3>
              <p>Lower body — squats, RDLs, lunges, leg press, calves.</p>
            </div>
          </div>

          <Link to="/ppl" className="ppl-btn15">View Full Routine →</Link>
        </div>
      </div>



      {/* BRO SPLIT */}
      <div className="ppl-card15">
        <div className="ppl-image-wrapper15">
          <img
            src="https://images.pexels.com/photos/1552101/pexels-photo-1552101.jpeg"
            alt="Bro Split Workout"
            className="ppl-image15"
          />
        </div>

        <div className="ppl-content15">
          <h2 className="ppl-title15">Bro Split</h2>

          <p className="ppl-description15">
            The Bro Split trains one major muscle group per day. Great for bodybuilding 
            and maximum focus on each muscle.
          </p>

          <div className="ppl-sections15">
            <div className="ppl-section15"><h3>Chest Day</h3><p>Bench press, incline press, flyes.</p></div>
            <div className="ppl-section15"><h3>Back Day</h3><p>Rows, pulldowns, deadlifts.</p></div>
            <div className="ppl-section15"><h3>Shoulders Day</h3><p>Overhead press, laterals, rear delts.</p></div>
            <div className="ppl-section15"><h3>Arms Day</h3><p>Curls, skull crushers, pushdowns.</p></div>
            <div className="ppl-section15"><h3>Leg Day</h3><p>Squats, lunges, hamstring work.</p></div>
          </div>

          <Link to="/bs" className="ppl-btn15">View Full Routine →</Link>
        </div>
      </div>



      {/* UPPER LOWER SPLIT */}
      <div className="ppl-card15">
        <div className="ppl-image-wrapper15">
          <img
            src="https://images.pexels.com/photos/6855345/pexels-photo-6855345.jpeg"
            alt="Upper Lower Split Workout"
            className="ppl-image15"
          />
        </div>

        <div className="ppl-content15">
          <h2 className="ppl-title15">Upper / Lower Split</h2>

          <p className="ppl-description15">
            A balanced 4-day split that trains the entire upper body one day and 
            lower body the next. Efficient and great for strength.
          </p>

          <div className="ppl-sections15">
            <div className="ppl-section15">
              <h3>Upper Day</h3>
              <p>Chest, back, shoulders, arms — presses, rows, pulldowns.</p>
            </div>

            <div className="ppl-section15">
              <h3>Lower Day</h3>
              <p>Quads, hamstrings, glutes — squats, leg press, RDLs.</p>
            </div>

            <div className="ppl-section15">
              <h3>Frequency</h3>
              <p>4 days/week — Upper → Lower → rest → Upper → Lower.</p>
            </div>
          </div>

          <Link to="/ul" className="ppl-btn15">View Full Routine →</Link>
        </div>
      </div>



      {/* FULL BODY SPLIT */}
      <div className="ppl-card15">
        <div className="ppl-image-wrapper15">
          <img
            src="https://images.pexels.com/photos/6453391/pexels-photo-6453391.jpeg"
            alt="Full Body Split Workout"
            className="ppl-image15"
          />
        </div>

        <div className="ppl-content15">
          <h2 className="ppl-title15">Full Body Split</h2>

          <p className="ppl-description15">
            A beginner-friendly split that trains the entire body each session. 
            Great for strength, fat loss, and overall fitness.
          </p>

          <div className="ppl-sections15">
            <div className="ppl-section15"><h3>Main Lifts</h3><p>Squats, bench, rows, deadlifts.</p></div>
            <div className="ppl-section15"><h3>Benefits</h3><p>Fast progress, high calorie burn.</p></div>
            <div className="ppl-section15"><h3>Frequency</h3><p>3 days/week for full recovery.</p></div>
          </div>

          <Link to="/fb" className="ppl-btn15">View Full Routine →</Link>
        </div>
      </div>



      {/* ARNOLD SPLIT */}
      <div className="ppl-card15">
        <div className="ppl-image-wrapper15">
          <img
            src="https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg"
            alt="Arnold Split Workout"
            className="ppl-image15"
          />
        </div>

        <div className="ppl-content15">
          <h2 className="ppl-title15">Arnold Split</h2>

          <p className="ppl-description15">
            A 6-day advanced bodybuilding split built around high volume and 
            twice-per-week muscle frequency.
          </p>

          <div className="ppl-sections15">
            <div className="ppl-section15"><h3>Days 1 & 4</h3><p>Chest & Back.</p></div>
            <div className="ppl-section15"><h3>Days 2 & 5</h3><p>Shoulders & Arms.</p></div>
            <div className="ppl-section15"><h3>Days 3 & 6</h3><p>Legs & Calves.</p></div>
          </div>

          <Link to="/as" className="ppl-btn15">View Full Routine →</Link>
        </div>
      </div>



      {/* PHUL SPLIT */}
      <div className="ppl-card15">
        <div className="ppl-image-wrapper15">
          <img
            src="https://images.pexels.com/photos/4761785/pexels-photo-4761785.jpeg"
            alt="PHUL Workout"
            className="ppl-image15"
          />
        </div>

        <div className="ppl-content15">
          <h2 className="ppl-title15">PHUL Split</h2>

          <p className="ppl-description15">
            A 4-day program combining strength and hypertrophy. Great for size 
            and strength gains together.
          </p>

          <div className="ppl-sections15">
            <div className="ppl-section15"><h3>Upper Power</h3><p>Heavy presses & rows.</p></div>
            <div className="ppl-section15"><h3>Lower Power</h3><p>Squats, deadlifts.</p></div>
            <div className="ppl-section15"><h3>Upper Hypertrophy</h3><p>Volume chest/back/arms.</p></div>
            <div className="ppl-section15"><h3>Lower Hypertrophy</h3><p>Quads & hamstrings volume.</p></div>
          </div>

          <Link to="/phul" className="ppl-btn15">View Full Routine →</Link>
        </div>
      </div>



      {/* PHAT SPLIT */}
      <div className="ppl-card15">
        <div className="ppl-image-wrapper15">
          <img
            src="https://images.pexels.com/photos/6339463/pexels-photo-6339463.jpeg"
            alt="PHAT Workout"
            className="ppl-image15"
          />
        </div>

        <div className="ppl-content15">
          <h2 className="ppl-title15">PHAT Split</h2>

          <p className="ppl-description15">
            A hybrid program blending powerlifting strength work and bodybuilding 
            volume for maximum progress.
          </p>

          <div className="ppl-sections15">
            <div className="ppl-section15"><h3>Power Days</h3><p>Low reps, heavy loads.</p></div>
            <div className="ppl-section15"><h3>Hypertrophy Days</h3><p>High reps, controlled volume.</p></div>
            <div className="ppl-section15"><h3>Frequency</h3><p>5 days/week — intense & effective.</p></div>
          </div>

          <Link to="/phat" className="ppl-btn15">View Full Routine →</Link>
        </div>
      </div>
    <Footer/>
    </div>
  );
}
