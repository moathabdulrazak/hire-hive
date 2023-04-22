import React from 'react'
import "./Home.scss"
import Featured from "../../components/featured/Featured.jsx"
import TrustedBy from "../../components/trustedBy/TrustedBy.jsx"
import Slide from "../../components/Slide/Slide.jsx"

import {cards} from '../../data.js'
import CatCard from "../../components/catCard/catCard.jsx"
const Home = () => {
  return (
    <div className="home" >

      <Featured/>
      <TrustedBy/>
      <Slide slideToShow={5} arrowScroll={5} >
        {cards.map(card => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
    </div>
  )
}

export default Home