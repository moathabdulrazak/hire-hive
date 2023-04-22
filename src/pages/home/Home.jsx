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

      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole hive of freelance talent at your <i>buzz...</i></h1>
            <div className="title">
              <img src="public\img\check.png" />
              The best for every budget
            </div>
            <p>Find high quality services at every price point. No hourly rates, just project based pricing!</p>
            <div className="title">
              <img src="public\img\check.png" />
              The best for every budget
            </div>
            <p>Find high quality services at every price point. No hourly rates, just project based pricing!</p>
            <div className="title">
              <img src="public\img\check.png" />
              The best for every budget
            </div>
            <p>Find high quality services at every price point. No hourly rates, just project based pricing!</p>
          </div>
          <div className="item">
            <video src="public\img\video.mp4" controls ></video>
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
        <div className="item">
            <h1>
              Hive <i>business</i>
            </h1>
            <h1>
              A business solution designed for <i>teams</i>
            </h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore Hive Business</button>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <Slide slideToShow={5} arrowScroll={5} >
        {cards.map(card => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
    </div>
  )
}

export default Home