import React from "react";
import "./Crew.css";
import { Circle } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

function Crew({ name, image, role, bio }) {
  return (
    <>
      <div className="crew_container">
        <div className="crew_intro_heading">
          <span>02</span>
          MEET YOUR CREW
        </div>
        <div className="crew_main_section">
          <div className="left_section_crew">
            <div className="crew_info_section">

            <div className="crew_designation">{role}</div>
            <div className="crew_name">{name}</div>
            <div className="crew_info">
              <p>{bio}</p>
            </div>
            </div>
            <div className="crew_link_section">
              <div className="crew_link">
                <NavLink className="crew_nav_link" to="/crew/">
                  <Circle className="circle_icon" />
                </NavLink>
                <NavLink
                  className="crew_nav_link"
                  to="/crew/Mission Specialist"
                >
                  <Circle className="circle_icon" />
                </NavLink>
                <NavLink className="crew_nav_link" to="/crew/Pilot">
                  <Circle className="circle_icon" />
                </NavLink>
                <NavLink className="crew_nav_link" to="/crew/Flight Engineer">
                  <Circle className="circle_icon" />
                </NavLink>
              </div>
            </div>
          </div>
          <div className="right_section_crew">
            <img src={image} alt={`${name} image`} loading="lazy" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Crew;
