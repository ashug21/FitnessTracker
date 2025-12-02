import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { exercises } from "../../../exercises";
import './ExerciseDetails.css'
import Footer from '../../Components/Footer/Footer'
import { Link } from "react-router-dom";

const ExerciseDetails = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(exercises);
  }, []);

  return (
    <div>
      <Navbar />

      {data.length > 0 ? (
        data.map((item) => (
         
            <div  className="exerciseListCard39">
            <img src={item.image} alt={item.name} className="exerciseListImg39" />
          
            <div className="exerciseListContent39">
              <h3 className="exerciseListName39">{item.name}</h3>
          
              <div className="exerciseListInfo39">
                <span className="exerciseTag39">{item.muscle}</span>

                <span className="exerciseTag39">{item.equipment}</span>
              </div>

              <Link to={`/exercise-details/${item.id}`}>
              <p className="exerciseListAction39">View Details →</p>
              </Link>
            
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
  <br/> <br/> <br/> <br/> <br/> <br/>
  <br/> <br/> <br/> <br/> <br/> <br/>
      <Footer/>
    </div>
  );
};

export default ExerciseDetails;
