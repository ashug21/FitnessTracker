import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Loading.css'

const Loading = () => {
  return (
    <div>
      <Navbar/>
      <div className="loading-wrapper50">
        <h1 className='loading50'>Loading...</h1>
      </div>
    </div>
  )
}

export default Loading
