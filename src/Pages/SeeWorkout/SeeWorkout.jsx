// SeeWorkout.jsx
import React, { useState, useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import axios from 'axios'
import './SeeWorkout.css'
import edit from '../../assets/edit.png'
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

const SeeWorkout = () => {
  const [data, setData] = useState([]);
  const [analytics, setAnalytics] = useState(null);
  const [muscles, setMuscles] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editedFields, setEditedFields] = useState({});

  useEffect(() => {
    axios.get("https://fitnesstracker-1-ud7g.onrender.com/aw/analytics")
      .then(res => setAnalytics(res.data))
      .catch(() => {});
  }, []);

  useEffect(() => {
    axios.get("https://fitnesstracker-1-ud7g.onrender.com/aw/muscle-distribution")
      .then(res => setMuscles(res.data.muscleVolume))
      .catch(() => {});
  }, []);

  const getWorkoutdata = async () => {
    try {
      const res = await axios.get("https://fitnesstracker-1-ud7g.onrender.com/aw/getWorkout");
      setData(res.data.data || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWorkoutdata();
  }, []);

  const deleteWorkoutData = async (id) => {
    try {
      await axios.delete(`https://fitnesstracker-1-ud7g.onrender.com/aw/deleteworkout/${id}`);
      getWorkoutdata();
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  const startEdit = (item) => {
    setEditingId(item._id);
    setEditedFields({
      exercise: item.exercise || "",
      date: item.date || "",
      sets: item.sets || "",
      reps: item.reps || "",
      weight: item.weight || ""
    });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditedFields({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedFields(prev => ({ ...prev, [name]: value }));
  };

  const saveEdit = async (id) => {
    try {
      const payload = {};
      if (editedFields.exercise !== undefined) payload.exercise = editedFields.exercise;
      if (editedFields.date !== undefined) payload.date = editedFields.date;
      if (editedFields.sets !== undefined) payload.sets = editedFields.sets;
      if (editedFields.reps !== undefined) payload.reps = editedFields.reps;
      if (editedFields.weight !== undefined) payload.weight = editedFields.weight;
      await axios.patch(`http://fitnesstracker-1-ud7g.onrender.com/aw/update/${id}`, payload);
      cancelEdit();
      getWorkoutdata();
    } catch (error) {
      console.error("Update error:", error);
    }
  };




  return (
    <div>
      <Navbar />

      <div className="workout-container11">
        <h1 className="workout-h911">Your Workout Info</h1>

        <div className="workout-grid11">
          {data.length === 0 ? (
            <h2 className="no-data11">No Workout Details</h2>
          ) : (
            data.map((item) => (
              <div className="workout-card11" key={item._id}>
                <img
                  onClick={() => startEdit(item)}
                  src={edit}
                  alt="edit"
                  className="edit-icon11"
                />

                {editingId === item._id ? (
                  <div className="edit-form11">
                    <input
                      name="exercise"
                      value={editedFields.exercise}
                      onChange={handleChange}
                      className="edit-input11"
                      placeholder="Exercise"
                    />
                    <input
                      name="date"
                      value={editedFields.date}
                      onChange={handleChange}
                      className="edit-input11"
                      placeholder="Date"
                    />
                    <input
                      name="sets"
                      value={editedFields.sets}
                      onChange={handleChange}
                      className="edit-input11"
                      placeholder="Sets"
                    />
                    <input
                      name="reps"
                      value={editedFields.reps}
                      onChange={handleChange}
                      className="edit-input11"
                      placeholder="Reps"
                    />
                    <input
                      name="weight"
                      value={editedFields.weight}
                      onChange={handleChange}
                      className="edit-input11"
                      placeholder="Weight"
                    />

                    <div className="edit-actions11">
                      <button onClick={() => saveEdit(item._id)} className="save-btn11">Save</button>
                      <button onClick={cancelEdit} className="cancel-btn11">Cancel</button>
                    </div>
                  </div>
                ) : (
                  <>
                    <h3 className="workout-exercise11">{item.exercise}</h3>
                    <p className="workout-info11">Date: {item.date}</p>
                    <p className="workout-info11">Sets: {item.sets}</p>
                    <p className="workout-info11">Reps: {item.reps}</p>
                    <p className="workout-info11">Weight: {item.weight}</p>

                    <button
                      onClick={() => deleteWorkoutData(item._id)}
                      className="delete-workout11"
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      <div className="analytics-section5">
        <h2 className="analytics-title5">Your Workout Analytics</h2>

        {!analytics && <p className="loading5">Loading analytics...</p>}

        {analytics && (
          <div className="analytics-grid5">
            <div className="analytics-card5">
              <h3>Total Exercises</h3>
              <p>{analytics.totalWorkouts}</p>
            </div>

            <div className="analytics-card5">
              <h3>Total Volume</h3>
              <p>{analytics.totalVolume} kg</p>
            </div>

            <div className="analytics-card5">
              <h3>Top Exercise</h3>
              <p>{analytics.topExercise}</p>
            </div>
          </div>
        )}
      </div>

      {muscles && (
        <div className="muscle-chart-container">
          <h2 className="muscle-chart-title">Muscle Group Distribution</h2>

          <div className="muscle-chart-wrapper">
            <Pie
              className="muscle-chart-canvas"
              data={{
                labels: ["Chest", "Back", "Legs", "Shoulders", "Arms"],
                datasets: [
                  {
                    data: [
                      muscles.chest,
                      muscles.back,
                      muscles.legs,
                      muscles.shoulders,
                      muscles.arms,
                    ],
                    backgroundColor: [
                      "#ff8a80",
                      "#82b1ff",
                      "#a7ffeb",
                      "#ffd180",
                      "#ea80fc",
                    ],
                    borderWidth: 0,
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: { display: false },
                },
                maintainAspectRatio: false,
              }}
            />
          </div>

          <div className="chart-legend">
            <div className="chart-legend-item">
              <span className="chart-legend-swatch" style={{ background: "#ff8a80" }}></span> Chest
            </div>
            <div className="chart-legend-item">
              <span className="chart-legend-swatch" style={{ background: "#82b1ff" }}></span> Back
            </div>
            <div className="chart-legend-item">
              <span className="chart-legend-swatch" style={{ background: "#a7ffeb" }}></span> Legs
            </div>
            <div className="chart-legend-item">
              <span className="chart-legend-swatch" style={{ background: "#ffd180" }}></span> Shoulders
            </div>
            <div className="chart-legend-item">
              <span className="chart-legend-swatch" style={{ background: "#ea80fc" }}></span> Arms
            </div>
          </div>
        </div>
      )}

      <br/><br/><br/><br/><br/><br/>
      <Footer />
    </div>
  );
}

export default SeeWorkout;
