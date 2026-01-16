import React, { useState, useEffect, use } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "../../../Firebase";
import Default_img from "../../assets/Default.png";
import guest from '../../assets/Guest.png'

const auth = getAuth(app);

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [avatar, setAvatar] = useState(null);

  const Logout = async () => {
    await signOut(auth);
  };



  useEffect(() => {
    onAuthStateChanged(auth , user => {
      if(user){
        if (auth.currentUser && auth.currentUser.email === "admin@gmail.com") {
           setAvatar(guest); 
          }
      }
    })
  })

  
  useEffect(() => {
    onAuthStateChanged(auth, (loggedUser) => {
      if (loggedUser) {
        setUser(loggedUser);


        const googlePhoto = loggedUser.photoURL ||
          (loggedUser.providerData &&
            loggedUser.providerData[0] &&
            loggedUser.providerData[0].photoURL);

        setAvatar(googlePhoto || null);
      } else {
        setUser(null);
        setAvatar(null);
      }
    });
  }, []);

  if (!user) {
    return (
      <nav className="ft-nav1">
        <h1 className="ft-logo1">
          <Link to="/">FitnessTracker</Link>
        </h1>

        <ul className="ft-links1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add-workout">Add Workout</Link>
          </li>
          <li>
            <Link to="/see-workout">Workout History</Link>
          </li>
          <li>
            <Link to="/see-goals">My Goals</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>

          <div className="ft-avatar-container1">
            <img
              className="ft-avatar-img1"
              src={Default_img}
              alt="default-avatar"
              referrerPolicy="no-referrer"
            />
          </div>
        </ul>
      </nav>
    );
  }

  return (
    <nav className="ft-nav1">
      <h1 className="ft-logo1">
        <Link to="/">FitnessTracker</Link>
      </h1>

      <ul className="ft-links1">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add-workout">Add Workout</Link>
        </li>
        <li>
          <Link to="/see-workout">Workout History</Link>
        </li>
        <li>
          <Link to="/see-goals">My Goals</Link>
        </li>
        <li>
          <Link onClick={Logout}>Logout</Link>
        </li>

        <div className="ft-avatar-container1">
          <img
            className="ft-avatar-img1"
            src={avatar || Default_img}
            alt="user-avatar"
            referrerPolicy="no-referrer"
          />
        </div>
      </ul>
    </nav>
  );
}
