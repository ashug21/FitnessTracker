import React from 'react'
import { food } from '../../../Food'
import Navbar from '../../Components/Navbar/Navbar'
import './Footitems.css'

const Fooditems = () => {
  return (
    <div className="food-page40">
      <Navbar/>
      <div className="food-container40">
        {food.map((item, i) => (
          <div className="food-card40" key={i}>
            <img className="food-img40" src={item.image} alt={item.name} />
            <h2 className="food-name40">{item.name}</h2>
            <p className="food-ingredients40">{item.ingredients.join(', ')}</p>
            <p className="food-type40">Type: {item.type}</p>
            <p className="food-calories40">{item.calories} kcal</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Fooditems
