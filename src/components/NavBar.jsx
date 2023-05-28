import React, { useState } from 'react'
import mainLogo from "/assets/shared/logo.svg"
import "../components/NavBar.css"
import { NavLink, Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function NavBar() {

  const [active, setActive] = useState(true)

  const handleHamburgerClick = () =>{
    setActive(!active)
    let sideMenu = document.querySelector(".sideMenu");
    sideMenu.classList.toggle("showMenu")
  
  }
// console.log(active);
  return (
    <>
      <nav className="header_navbar">
        <div className="header_logo" >
          <Link to="/">
            <img src={mainLogo} alt="Main Logo" loading='lazy' />
          </Link>
        </div>
        <div className="header_menu">
            <ul className="header_menu_ul">
                <li className='header_menu_li'><NavLink to=""><span>00</span>Home</NavLink></li>
                <li className='header_menu_li'><NavLink to="/destination"><span>01</span>Destination</NavLink></li>
                <li className='header_menu_li'><NavLink to="/crew"><span>02</span>Crew</NavLink></li>
                <li className='header_menu_li'><NavLink to="/technology"><span>03</span>Technology</NavLink></li>
            </ul>
        </div>

        <div className="hamburger" onClick={handleHamburgerClick}>
         {
           active ?  <MenuIcon className='hamburgerIcon ' /> : <CloseIcon className='hamburgerIcon' />
        } 
        <div className="sideMenu">
          <div className="side_menu_section">
            <ul className="side_menu_ul">
                <li className='side_menu_li'><NavLink to="/"><span>00</span>Home</NavLink></li>
                <li className='side_menu_li'><NavLink to="/destination"><span>01</span>Destination</NavLink></li>
                <li className='side_menu_li'><NavLink to="/crew"><span>02</span>Crew</NavLink></li>
                <li className='side_menu_li'><NavLink to="/technology"><span>03</span>Technology</NavLink></li>
            </ul>
          </div>
        </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
