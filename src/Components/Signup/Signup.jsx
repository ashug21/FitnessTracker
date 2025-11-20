import React, { useEffect, useState } from "react";
import "./Signup.css";
import Navbar from "../Navbar/Navbar";
import { app, analytics } from "../../../Firebase";
import {getAuth,createUserWithEmailAndPassword,onAuthStateChanged,signOut , GoogleAuthProvider , signInWithPopup} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import Google_icon from "../../assets/google.png";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const Signup = () => {
  const navigate = useNavigate();

  // const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      alert(error);
    }
  };

  const signInWithGoogle = async() => {
    await signInWithPopup(auth , googleProvider);
    navigate("/");
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <div>
      <Navbar />

      <div className="signup-wrapper">
        <div className="signup-box">
          <h2 className="signup-heading">Create Account</h2>
          <p className="signup-subtext">
            Join now to start managing your tasks.
          </p>

          <form className="signup-form" onSubmit={handleSubmit}>
            {/* <div className="form-group">
              <label>Full Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="Enter your name"
                required
              />
            </div> */}

            <div className="form-group">
              <label>Email</label>
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
                placeholder="Enter password"
                required
              />
            </div>
            <button type="submit" className="signup-btn">
              Sign Up
            </button>

            <button onClick={signInWithGoogle} type="button" className="google-btn" >
              <img src={Google_icon} alt="Google" className="google-logo" />
              Continue with Google
            </button>
          </form>

          <p className="signup-login">
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
