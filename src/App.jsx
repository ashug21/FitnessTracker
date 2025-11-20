import React from 'react'
import {Route , Routes} from 'react-router-dom'
import Home from './Pages/Home/Home'
import AddWorkout from './Pages/AddWorkout/AddWorkout'
import AddGoals from './Pages/AddGoals/AddGoals'
import SeeWorkout from './Pages/SeeWorkout/SeeWorkout'
import SeeGoals from './Pages/SeeGoals/SeeGoals'
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/add-workout' element={<AddWorkout/>} />
        <Route path='/add-goals' element={<AddGoals/>} />
        <Route path='/see-workout' element={<SeeWorkout/>} />
        <Route path='/see-goals' element={<SeeGoals/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
    </div>
  )
}

export default App
