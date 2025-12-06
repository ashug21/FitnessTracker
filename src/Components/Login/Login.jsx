import React,{useEffect, useState} from "react";
import "./Login.css";
import Navbar from "../Navbar/Navbar";
import {app , analytics} from '../../../Firebase'
import {getAuth , signInWithEmailAndPassword , onAuthStateChanged , GoogleAuthProvider ,signInWithPopup} from 'firebase/auth';
import {Link , useNavigate} from 'react-router-dom'
import Google_icon from "../../assets/google.png";
import Guest from '../../assets/Guest.png'

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();





const Login = () => {




const navigate = useNavigate();

const [email , setEmail] = useState("");
const [password , setPassword] = useState("");
const [user , setUser] = useState(null);

const handleLogin = async(e) => {
 
  e.preventDefault();
  try {
   await signInWithEmailAndPassword(auth , email , password);
    navigate('/');
  } catch (error) { 
    alert(error);
  }
}


const handleGuestUser = async(e) => {

  e.preventDefault();

  const guestEmail = "admin@gmail.com";
  const guestPassword = "admins"

  try {
    await signInWithEmailAndPassword(auth , guestEmail , guestPassword);
    navigate('/');
    
  } catch (error) {
    alert(error);
  }
 
}

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

const signInWithGoogle = async() => {

await signInWithPopup(auth , googleProvider);
navigate('/');
}

  return (
    <div>
      <Navbar />


      <div className="login-wrapper">
        <div className="login-box">
          <h2 className="login-heading">Welcome Back 👋</h2>
          <p className="login-subtext">Please login to your account</p>

          <form className="login-form" onSubmit={handleLogin}>
            <div className="form-group">
              <label>Email Address</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Enter your password"
                required
              />
            </div>

            <button className="login-btn" type="submit">
              Login
            </button>
           
          <button onClick={signInWithGoogle} type="button" className="google-btn" >
          <img src={Google_icon} alt="Google" className="google-logo" />
          Continue with Google
          </button>
          <button onClick={handleGuestUser} type="button" className="guest-btn">
  <img src={Guest} alt="Guest" className="guest-logo" />
  Continue as Guest User
</button>
          </form>

          <p className="login-signup">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
