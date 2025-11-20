import React, { useState } from "react";
import "./Signup.css";
import Navbar from "../Navbar/Navbar";


const Signup = () => {


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reenterpassword, setReEnterPassword] = useState("");


  const handleSubmit = async() => {

  }

  return (
    <div>
      <Navbar />

      <div className="signup-wrapper">
        <div className="signup-box">
          <h2 className="signup-heading">Create Account</h2>
          <p className="signup-subtext">Join now to start managing your tasks.</p>

          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>

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

            <div className="form-group">
              <label>Confirm Password</label>
              <input
                onChange={(e) => setReEnterPassword(e.target.value)}
                value={reenterpassword}
                type="password"
                placeholder="Re-enter password"
                required
              />
            </div>

            <button type="submit" className="signup-btn">
              Sign Up
            </button>
          </form>

          <p className="signup-login">
            Already have an account? <a href="/login">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
