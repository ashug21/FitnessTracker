import React, {useState , useEffect} from "react";
import { Link , useNavigate } from "react-router-dom";
import "./Navbar.css";
import { getAuth , createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import {app , analytics} from '../../../Firebase';


const auth = getAuth(app);



export default function Navbar() {

const navigate = useNavigate();

const Logout = async() => {
  await signOut(auth);
}

const [user , setUser] = useState(null);

  useEffect(() => {
        onAuthStateChanged(auth , user => {
          if(user){
            setUser(user);
          }
          else{
            setUser(null);
          }
        });
    },[])


    if(!user){
  return (

     <nav className="ft-nav1">
<h1 className="ft-logo1">
  <Link to="/">FitnessTracker</Link>
</h1>


      <ul className="ft-links1">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add-workout">AddWorkoutInfo</Link></li>
        <li><Link to="/see-workout">TrackWorkouts</Link></li>
        <li><Link to="/see-goals">SeeGoals</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}
else{
  return(
    <nav className="ft-nav1">
    <h1 className="ft-logo1">
      <Link to="/">FitnessTracker</Link>
    </h1>

    <ul className="ft-links1">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/add-workout">AddWorkoutInfo</Link></li>
      <li><Link to="/see-workout">TrackWorkouts</Link></li>
      <li><Link to="/see-goals">SeeGoals</Link></li>
      <li><Link onClick={Logout}>LogOut</Link></li>
    </ul>
  </nav>
  )
 
}
}
