import React from "react";
import "./Destination.css";
import { NavLink } from "react-router-dom";

function Destination({name,image, description, distance, time }) {
  return (
    <div className="destination_container">
      <div className="main_section">
        <div className="left_section">
          <div className="destination_heading">
            <span>01</span>
            Pick your destination
          </div>
          <div className="destination_image">
            <img
              src={image}
              alt={`${name} image`}
              loading="lazy"
            />
            
          </div>
        </div>
        <div className="right_section destination-right">
          <div className="planet_menu">
             <ul>
              <li className="planet_menu_li">
                <NavLink  className="links"   to="/destination/">Moon</NavLink>
              </li>
              <li className="planet_menu_li">
                <NavLink className="links"  to="/destination/mars">Mars</NavLink>
              </li>
              <li className="planet_menu_li">
                <NavLink  className="links" to="/destination/europa">Europa</NavLink>
              </li>
              <li className="planet_menu_li">
                <NavLink className="links"  to="/destination/titan">Titan</NavLink>
              </li>
            </ul>
          </div>
          <div className="planet_hero">
            {name}
          </div>
          <div className="planet_info">
            <p>{description}</p>
          </div>
          <div className="distanceAndTime">
            <div className="distance_info ">
              <div className="distanceAndTime_utils_heading">
              AVG. DISTANCE
              </div>
              <div className="distanceAndTime_utils_data">
              {distance}
              </div>
            </div>
            <div className="time_info">
              <div className="distanceAndTime_utils_heading">
              Est. travel time
              </div>
              <div className="distanceAndTime_utils_data">
              {time}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
