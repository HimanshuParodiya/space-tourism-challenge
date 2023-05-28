import React, { useEffect } from 'react'
import "./Technology.css"
import { NavLink } from 'react-router-dom'

function Technology({name,image,description}) {


  return (
    <div className='technology_container'>
      <div className="technology_heading">
        <span>03</span>
        SPACE LAUNCH 101
      </div>
      <div className="technology_main_section">
        <div className="technology_left_section">
          <div className="technology_links">
                <NavLink activeclassname="active" className="crew_nav_link" to="/technology/">1</NavLink>
                <NavLink className="crew_nav_link" to="/technology/Spaceport">2</NavLink>
                <NavLink className="crew_nav_link" to="/technology/Space capsule">3</NavLink>
          </div>
          <div className="technology_info_section">
            <div className="terminology_heading">
            THE TERMINOLOGY…
            </div>
            <div className="technology_hero_heading">
              {name}
            </div>
            <div className="technology_info">
              {description}
            </div>
          </div>
        </div>
        <div className="technology_right_section">
          <img src={image} alt={`${name} image`}loading='lazy' />
        </div>
      </div>
    </div>
  )
}

export default Technology
