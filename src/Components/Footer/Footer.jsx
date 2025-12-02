import React,{useState , useEffect} from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import {getAuth , signInWithEmailAndPassword , onAuthStateChanged , GoogleAuthProvider ,signInWithPopup} from 'firebase/auth';
import {app , analytics} from '../../../Firebase'

const auth = getAuth(app);

export default function Footer() {

  const [user , setUser] = useState(null);


  useEffect(() => {
    onAuthStateChanged(auth ,user => {
        if(user){
          setUser(user);
        }
        else{
          setUser(null);
        }
    });
  },[]);

  if(!user){
    return (
      <footer className="ft-footer">
        <div className="ft-footer-content">
          <h2 className="ft-footer-logo">FitnessTracker</h2>
  
          <div className="ft-footer-links">
            <Link to="/">Home</Link>
            <Link to="/add-workout">Add Workout</Link>
            <Link to="/add-goals">Add Goals</Link>
            <Link to="/see-workout">See Workout</Link>
            <Link to="/see-goals">See Goals</Link>
            <Link to="/track-calories">Track Calories</Link>
            <Link to="/workout-splits">Workout Splits</Link>
            <Link to="/login">Login</Link>
            <Link to="/diet">Diet</Link>
  
            <Link to="/about">About</Link>
            <Link to="">Blog</Link>
            <Link to="">Support</Link>
            <Link to="">Contact</Link>
            <Link to="">Privacy Policy</Link>
            <Link to="">Terms of Service</Link>
          </div>
        </div>
  
        <p className="ft-footer-copy">
          © {new Date().getFullYear()} FitnessTracker — All rights reserved.
        </p>
      </footer>
    );
  }
  else{
    return (
      <footer className="ft-footer">
        <div className="ft-footer-content">
          <h2 className="ft-footer-logo">FitnessTracker</h2>
  
          <div className="ft-footer-links">
            <Link to="/">Home</Link>
            <Link to="/add-workout">Add Workout</Link>
            <Link to="/add-goals">Add Goals</Link>
            <Link to="/see-workout">See Workout</Link>
            <Link to="/see-goals">See Goals</Link>
            <Link to="/track-calories">Track Calories</Link>
            <Link to="/workout-splits">Workout Splits</Link>
            <Link to="/diet">Diet</Link>

  
            <Link to="/about">About</Link>
            <Link to="">Blog</Link>
            <Link to="">Support</Link>
            <Link to="">Contact</Link>
            <Link to="">Privacy Policy</Link>
            <Link to="">Terms of Service</Link>
          </div>
        </div>
  
        <p className="ft-footer-copy">
          © {new Date().getFullYear()} FitnessTracker — All rights reserved.
        </p>
      </footer>
    );
  }
  
}
