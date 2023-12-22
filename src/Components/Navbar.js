import React from "react";
import "./Navbar.css"; // Import your CSS file
import { useState } from "react";
import { Link,Router, Route, Routes } from "react-router-dom";
import About from "./About";
import { FaSearch } from "react-icons/fa";
import { BsFillPencilFill } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";
import { BsTelephoneForward } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";

function Navbar() {
    const [toggle, setToggle]= useState(false)

    function togglesEnter(){
        setToggle(true)
    }
    function togglesLeave(){
        setToggle(false)
    }
  return (
  <>
    <div className="navbar container-fluid ">
      <ul>
        <li className="left">
          <img src="logo.png" alt="Logo" />
          
        </li>
        <li><input type="text"  id="input" value="nauman malik" /></li>
        
        
      </ul>
    </div>
<div>
 
</div>

<div className="container"id="nav">
  
<i style={{marginRight:"-10px"}}><FaSearch /> </i>  <Link to="/"  style={{  fontWeight:"500", fontSize:"0.9rem", textDecoration:"none"}} id="link"> About</Link>
 <i style={{marginRight:"-10px"}}><BsFillPencilFill /></i> <Link to="/skills" style={{ fontWeight:"500",fontSize:"0.9rem", textDecoration:"none"}} id="link">Skills</Link>
 <i style={{marginRight:"-10px"}}><RiComputerLine /></i><Link to="/projects" style={{ fontWeight:"500", fontSize:"0.9rem", textDecoration:"none"}} id="link"> Projects</Link>
 <i style={{marginRight:"-10px"}}><BsTelephoneForward /></i><Link to="/contact" style={{ fontWeight:"500", fontSize:"0.9rem", textDecoration:"none"}} id="link"> Contact</Link>
 <i style={{marginRight:"-10px"}}><FaMapMarkerAlt /></i> <Link to="/map" style={{fontWeight:"500", fontSize:"0.9rem", textDecoration:"none"}} id="link"> Map</Link>
  
  

</div>
     

    </>
    
  );
}

export default Navbar;