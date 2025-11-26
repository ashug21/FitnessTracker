import React, { useState, useEffect } from "react";
import img1 from "../../assets/image copy.png";
import img2 from "../../assets/calorie.png";
import img3 from "../../assets/banner.png";
import "./Main.css";
import { app } from "../../../Firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Link } from "react-router-dom";

const auth = getAuth(app);

const Main = () => {
  const [user, setUser] = useState(null);

  // slideshow state
  const images = [img1, img2, img3];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user || null);
    });
  }, []);

  // auto image slider
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="cover-container2">
      <img
  key={index}
  src={images[index]}
  className="cover-image smooth-fade"
/>

        <div className="cover-text2">
          <h1>FitnessTracker</h1>
          <p>Track workouts. Set goals. Transform your life.</p>
          <br /><br />
          {!user ? (
            <Link to="/signup">
              <button className="button-2">Add Your Goal</button>
            </Link>
          ) : (
            <Link to="/add-goals">
              <button className="button-2">Add Your Goal</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
