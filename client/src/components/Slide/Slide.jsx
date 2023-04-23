import React from 'react'
import './Slide.scss'
import  { Slider } from "infinite-react-carousel"
import CatCard from "../catCard/catCard.jsx"
const Slide = ({children, slideToShow,arrowScroll }) => {
  return (
    <div className="slide" >
      <div className="container">
      <Slider arrowScroll={arrowScroll} slidesToShow={slideToShow} >
   {children}
  </Slider>
      </div>
    </div>
  )
}

export default Slide