import React, { useState } from 'react'
import "./Featured.scss"
import { useNavigate } from "react-router-dom";


const Featured = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/gigs?search=${input}`);
  };
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>Find the perfect <i>freelance</i> services brought to you by the <i> hive</i></h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input
                type="text"
                placeholder='Try "building a fivrr clone"'
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <button onClick={handleSubmit}>Search</button>
          </div>
          <div className="popular">
            <span>Popular</span>
            <button>Web design</button>
            <button>React</button>
            <button>Next.js</button>
            <button>AI services</button>
          </div>
        </div>
        <div className="right">
          <img src="public\img\man.png" alt="" />
        </div>
      </div>

    </div>
  )
}

export default Featured