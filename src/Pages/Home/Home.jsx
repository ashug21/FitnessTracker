import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import Main from '../../Components/Main/Main'
import Body from '../../Components/Body/Body'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Main/>
      <Body/>
      <br/> <br/>
      <Footer/>
    </div>
  )
}

export default Home
