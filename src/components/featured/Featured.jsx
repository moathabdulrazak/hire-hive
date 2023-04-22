import React from 'react'
import "./Featured.scss"


const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>Find the perfect freelance services brought to you by the hive</h1>
          <div className="search">
            <div className="searchInput">
              <img src="public\img\search.png" alt="" />
              <input type="text" placeholder="Try building a fivrr clone" />
            </div>
            <button>Search</button>
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