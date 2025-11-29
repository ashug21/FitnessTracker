import React from 'react'
import {Route , Routes} from 'react-router-dom'
import Home from './Pages/Home/Home'
import AddWorkout from './Pages/AddWorkout/AddWorkout'
import AddGoals from './Pages/AddGoals/AddGoals'
import SeeWorkout from './Pages/SeeWorkout/SeeWorkout'
import SeeGoals from './Pages/SeeGoals/SeeGoals'
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup'
import Track from './Components/TrackCalories/Track'
import Splits from './Pages/WorkoutSplits/Splits'
import ScrollToTop from "./Components/ScrollToTop";
import PushPullLeg from './Components/workoutSplitsInfo/PushPullLeg'
import BroSplit from './Components/workoutSplitsInfo/BroSplit'
import UpperLower from './Components/workoutSplitsInfo/UpperLower'
import FullBody from './Components/workoutSplitsInfo/FullBody'
import Phul from './Components/workoutSplitsInfo/Phul'
import Phat from './Components/workoutSplitsInfo/Phat'
import Arnold from './Components/workoutSplitsInfo/Arnold'
import CheckGoals from './Pages/CheckGoals/CheckGoals'
import AboutSupplements from './Pages/AboutSupplements/AboutSupplements'
import About from './Pages/About/About'
import Fooditems from './Pages/FoodItems/Fooditems'


const App = () => {
  return (
    <div>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/add-workout' element={<AddWorkout/>} />
        <Route path='/add-goals' element={<AddGoals/>} />
        <Route path='/see-workout' element={<SeeWorkout/>} />
        <Route path='/see-goals' element={<SeeGoals/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/track-calories' element={<Track/>} />
        <Route path='/Workout-splits' element={<Splits/>} />
        <Route path='/ppl' element={<PushPullLeg/>} />
        <Route path='/bs' element={<BroSplit/>} />
        <Route path='/ul' element={<UpperLower/>} />
        <Route path='/fb' element={<FullBody/>} />
        <Route path='/as' element={<Arnold/>} />
        <Route path='/phul' element={<Phul/>} />
        <Route path='/phat' element={<Phat/>} />
        <Route path='/checkgoals' element={<CheckGoals/>} />
        <Route path='/aboutSupplements' element={<AboutSupplements/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/diet' element={<Fooditems/>} />
      </Routes>
    </div>
  )
}

export default App
