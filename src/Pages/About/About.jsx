import React from "react";
import "./About.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about-page">
      <Navbar />

      <header className="about-hero">
        <div className="about-hero-content">
          <h1 className="about-title">FitnessTracker</h1>
          <p className="about-sub">
            Track workouts • Set goals • Transform your life — all in one clean,
            fast React app.
          </p>

          <div className="about-cta-row">
            <Link to="/add-workout" className="about-cta">Add Workout</Link>
            <Link to="/add-goals" className="about-cta ghost">Set Goals</Link>
            <Link to="/see-workout" className="about-cta ghost">See Workouts</Link>
          </div>
        </div>

        <div className="about-hero-art">
          <div className="hero-card">
            <h4>What it does</h4>
            <ul>
              <li>Save & view workout entries</li>
              <li>Create, save and reuse goal templates</li>
              <li>Simple UI, local images & Firebase auth</li>
            </ul>
          </div>
        </div>
      </header>

      <section className="about-section features">
        <h2>Core features</h2>
        <div className="features-grid">
          <article>
            <h3>Workouts</h3>
            <p>Add date, exercise, sets, reps and weight. View and delete entries.</p>
          </article>

          <article>
            <h3>Goals</h3>
            <p>Prebuilt templates + custom goals , save them to your profile.</p>
          </article>

          <article>
            <h3>Supplements</h3>
            <p>Reference page for supplements & quick descriptions.</p>
          </article>

          <article>
            <h3>Auth</h3>
            <p>Firebase authentication (signup / login). Clean protected flows.</p>
          </article>
        </div>
      </section>

      <section className="about-section stack">
        <h2>Tech stack</h2>
        <div className="stack-list">
          <span>React + Vite</span>
          <span>Firebase (Auth)</span>
          <span>Express / Node (server)</span>
          <span>MongoDB (data)</span>
          <span>Axios for API calls</span>
        </div>
        <p className="repo-link">
          Source: <Link to="https://github.com/ashug21/FitnessTracker" target="_blank" rel="noreferrer">github.com/ashug21/FitnessTracker</Link>
        </p>
      </section>

     <br/><br/><br/><br/><br/><br/><br/>

      <Footer />
    </div>
  );
}
