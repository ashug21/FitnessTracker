import React from 'react'
import cover_image from '../../assets/image copy.png'
import './Main.css'

const Main = () => {
  return (
    <div>
       <div className="cover-container2">
  <img src={cover_image} className="cover-image" />

  <div className="cover-text2">
    <h1>FitnessTracker</h1>
    <p>Track workouts. Set goals. Transform your life.</p>
    <br/> <br/>
    <button className='button-2'>SignUp</button>
  </div>
</div>

      
    </div>
  )
}

export default Main
