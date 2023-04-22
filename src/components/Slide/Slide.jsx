import React from 'react'
import './Slide.scss'
import  { Slider } from "infinite-react-carousel"
import CatCard from "../catCard/catCard.jsx"
import {cards} from '../../data.js'
const Slide = () => {
  return (
    <div className="slide" >
      <div className="container">
      <Slider>
      {cards.map(card => (
        <CatCard card={card} key={card.id} />
      ))  }
  </Slider>
      </div>
    </div>
  )
}

export default Slide