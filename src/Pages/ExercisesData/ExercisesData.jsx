import React from 'react'
import './ExercisesData.css'
import { useParams } from 'react-router-dom'
import { exercises } from '../../../exercises'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

const ExercisesData = () => {

  const { id } = useParams();
  const exercise = exercises.find((item) => item.id === Number(id));


  const embedUrl = exercise.url.replace("watch?v=", "embed/");

  return (
    <div>
      <Navbar />

      <div className="exerciseDetailPage41">
        <div className="exerciseDetailCard41">

        <div className="exerciseTitleGlow41">
  <h1 className="exerciseTitle41">{exercise.name}</h1>
</div>

          {/* YOUTUBE EMBED */}
          <div className="exerciseVideoWrapper41">
            <iframe
              className="exerciseVideo41"
              src={embedUrl}
              title={exercise.name}
              allowFullScreen
            ></iframe>
          </div>

          <p className="exerciseInfo41"><strong>Muscle:</strong> {exercise.muscle}</p>
          <p className="exerciseInfo41"><strong>Equipment:</strong> {exercise.equipment}</p>


          <p className="exerciseInstructions41"><strong>Exercise Description : </strong> {exercise.instructions}</p>

        </div>
      </div>



      <br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/>
      <Footer/>
    </div>

  );
};

export default ExercisesData;
