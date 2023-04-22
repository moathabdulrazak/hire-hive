import React from 'react'
 import './GigCard.scss'
import { Link } from "react-router-dom"
const GigCard = ({item}) => {
  return (
    <Link to="/gig/2" >
    <div className="gigCard" >
      <img src={item.img} alt="" />
      <div className="info">
        <div className="user">
          <img src={item.pp} alt="" />
          <span>{item.username}</span>
        </div>
        <p>{item.desc}</p>
        <div className="star">
          <img src="public\img\star.png" alt="" />
          <span>{item.star}</span>
        </div>
      </div>
      <div className="details">
        <img src="public\img\heart.png" alt="" />
        <span>Starting at</span>
        <h2>${item.price}</h2>
      </div>
    </div>
    </Link>
  )
}

export default GigCard