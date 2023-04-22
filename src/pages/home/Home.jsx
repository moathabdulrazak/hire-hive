import React from 'react'
import "./Home.scss"
import Featured from "../../components/featured/Featured.jsx"
import TrustedBy from "../../components/trustedBy/TrustedBy.jsx"


const Home = () => {
  return (
    <div className="home" >

      <Featured/>
      <TrustedBy/>
    </div>
  )
}

export default Home