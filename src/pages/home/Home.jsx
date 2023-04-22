import React from 'react'
import "./Home.scss"
import Featured from "../../components/featured/Featured.jsx"
import TrustedBy from "../../components/trustedBy/TrustedBy.jsx"
import Slide from "../../components/Slide/Slide.jsx"


const Home = () => {
  return (
    <div className="home" >

      <Featured/>
      <TrustedBy/>
      <Slide/>
    </div>
  )
}

export default Home