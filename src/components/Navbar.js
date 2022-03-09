/* import React from 'react';
import {  Link } from "react-router-dom";







const navbar= () =>{
  
 
  
  
    return (
      <div className ="sum">
        <nav className="item">


          
          <ul className="list">
            <li ><Link to ="/Game">Game</Link></li>
            <li ><Link to ="/pages/form">Formulaire</Link></li>
          </ul>
        </nav>
      </div>
  
  );
}
export default navbar; */


import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"

const Navbar = () => {

  const [navbarOpen, setNavbarOpen] = useState(false) //declare notre state

  const links = [
    {
      id: 1,
      path: "/Game",
      text: "Game",
    },
    {
      id: 2,
      path: "/pages/Form",
      text: "Formulaire",
    },
  ]

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  const closeMenu = () => {
    setNavbarOpen(false)
  }

  return (
    <nav className="navBar">

       <button onClick={handleToggle}>
  {navbarOpen ? (
    <MdClose style={{ color: "#fff", width: "30px", height: "30px" }} />
  ) : (
    <FiMenu style={{ color: "#7b7b7b", width: "30px", height: "30px" }} />
  )}
</button>  

      <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
        {links.map(link => {
          return (
            <li key={link.id}>
              <NavLink 
                       to={link.path}
                       onClick={() => closeMenu()}
              > 
                       {link.text}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
export default Navbar