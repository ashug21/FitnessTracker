import React,{lazy,Suspense} from 'react'
import {Route , Routes} from 'react-router-dom'
import Home from './Pages/Home/Home'
import AddWorkout from './Pages/AddWorkout/AddWorkout'
import AddGoals from './Pages/AddGoals/AddGoals'
import SeeWorkout from './Pages/SeeWorkout/SeeWorkout'
import SeeGoals from './Pages/SeeGoals/SeeGoals'
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup'
import Track from './Components/TrackCalories/Track'
const Splits = lazy(() => import("./Pages/WorkoutSplits/Splits"));
import ScrollToTop from "./Components/ScrollToTop";
import PushPullLeg from './Components/workoutSplitsInfo/PushPullLeg'
import BroSplit from './Components/workoutSplitsInfo/BroSplit'
import UpperLower from './Components/workoutSplitsInfo/UpperLower'
import FullBody from './Components/workoutSplitsInfo/FullBody'
import Phul from './Components/workoutSplitsInfo/Phul'
import Phat from './Components/workoutSplitsInfo/Phat'
import Arnold from './Components/workoutSplitsInfo/Arnold'
import CheckGoals from './Pages/CheckGoals/CheckGoals'
const AboutSupplements = lazy(() => import("./Pages/AboutSupplements/AboutSupplements"));
import About from './Pages/About/About'
import Fooditems from './Pages/FoodItems/Fooditems'
const ExerciseDetails = lazy(() => import("./Pages/ExerciseDetails/ExerciseDetails"));
const ExercisesData = lazy(() => import("./Pages/ExercisesData/ExercisesData"));
import AuthenticateUser from './Components/AuthenticateUser'
import Loading from './Components/Loading/Loading'


const App = () => {
  return (
    <div>
      <ScrollToTop/>
      <Suspense fallback={<Loading/>}>     
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/add-workout' element={<AuthenticateUser> <AddWorkout/></AuthenticateUser>} />
        <Route path='/add-goals' element={<AuthenticateUser> <AddGoals/> </AuthenticateUser>} />
        <Route path='/see-workout' element={<AuthenticateUser>  <SeeWorkout/> </AuthenticateUser>} />
        <Route path='/see-goals' element={<AuthenticateUser><SeeGoals/></AuthenticateUser>} />
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
        <Route path='/exercise-details' element={<ExerciseDetails/>} />
        <Route path='/exercise-details/:id' element={<ExercisesData/>} />
      </Routes>
      </Suspense>
    </div>
  )
}

export default App
