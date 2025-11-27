import React, { useState, useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import axios from 'axios'
import './SeeWorkout.css'

const SeeWorkout = () => {

  const [data, setData] = useState([]);
  

  const getWorkoutdata = async () => {
    try {
      const res = await axios.get("https://fitnesstracker-1-ud7g.onrender.com/aw/getWorkout");
      console.log("BACKEND:", res.data.data);
      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteWorkoutData = async (id) => {
    try {
      await axios.delete(`https://fitnesstracker-1-ud7g.onrender.com/aw/deleteworkout/${id}`);
      getWorkoutdata();
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  useEffect(() => {
    getWorkoutdata();
  }, []);

  if (!data || data.length === 0) {
    return (
      <div>
        <Navbar />
        <div className="no-data-div11">
          <h1 className="no-data11">No Workout Details</h1>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      <div className="workout-container11">
        <h1 className="workout-h911">Your Workout Info</h1>

        <div className="workout-grid11">
          {data.map((item) => (
            <div className="workout-card11" key={item._id}>
              <h3 className="workout-exercise11">{item.exercise}</h3>
              <p className="workout-info11">Date: {item.date}</p>
              <p className="workout-info11">Sets: {item.sets}</p>
              <p className="workout-info11">Reps: {item.reps}</p>
              <p className="workout-info11">Weight: {item.weight}</p>

              <button 
                onClick={() => deleteWorkoutData(item._id)}
                className="delete-workout11">
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>

      <br/><br/><br/><br/><br/><br/>
      <Footer />
    </div>
  );
}

export default SeeWorkout;
