import React,{useEffect, useState} from "react";
import "./Login.css";
import Navbar from "../Navbar/Navbar";
import {app , analytics} from '../../../Firebase'
import {getAuth , signInWithEmailAndPassword , onAuthStateChanged , GoogleAuthProvider ,signInWithPopup} from 'firebase/auth';
import {Link , useNavigate} from 'react-router-dom'

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
            <button type="button" className="google-btn" onClick={signInWithGoogle}>
  <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="g" />
  Continue with Google
</button>

          </form>

          <p className="login-signup">
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
