import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import Main from '../../Components/Main/Main'
import Body from '../../Components/Body/Body'
import Footer from '../../Components/Footer/Footer'
import Calories from '../CalculateCalories/Calories'
import Content from '../../Components/Content/Content'
import Supplement from '../../Components/Supplements/Supplement'
import Exercises from '../../Components/Exercises/Exercises'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Main/>
      <Body/>
      <br/><br/><br/><br/>
      <Calories/>
      <br/> <br/>
      <Content/>
      <br/>
      <Supplement/>
      <Exercises/>
      <Footer/>
    </div>
  )
}

export default Home
