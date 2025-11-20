import React, { useState, useEffect } from "react";
import cover_image from "../../assets/image copy.png";
import "./Main.css";
import { app, analytics } from "../../../Firebase";
import {getAuth,createUserWithEmailAndPassword,onAuthStateChanged,signOut,
} from "firebase/auth";

import { Link } from "react-router-dom";

const auth = getAuth(app);

const Main = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  if (!user) {
    return (
      <div>
        <div className="cover-container2">
          <img src={cover_image} className="cover-image" />

          <div className="cover-text2">
            <h1>FitnessTracker</h1>
            <p>Track workouts. Set goals. Transform your life.</p>
            <br /> <br />
            <Link to="/signup">
              <button className="button-2">SignUp</button>
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="cover-container2">
          <img src={cover_image} className="cover-image" />

          <div className="cover-text2">
            <h1>FitnessTracker</h1>
            <p>Track workouts. Set goals. Transform your life.</p>
            <br /> <br />
            <Link to="/add-goals">
              <button className="button-2">Add Your Goal</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
};

export default Main;
