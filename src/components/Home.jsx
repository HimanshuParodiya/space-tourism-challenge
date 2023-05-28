import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div className="container">
      <div className="main_section">
        <div className="left_section">
          <div className="home_heading">
            SO, YOU WANT TO TRAVEL TO
          </div>
          <div className="home_hero_heading">
            SPACE
          </div>
          <div className="home_paragraph_section">
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
          </div>
        </div>
        <div className="right_section">
            <Link to="/destination">
          <div className="explore_button">
              EXPLORE
          </div>
              </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
