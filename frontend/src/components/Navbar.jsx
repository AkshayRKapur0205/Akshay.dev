import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="container">
          <ul className="nav-links">
            <li><Link to="/" className="nav-item">Akshay.dev</Link></li>
            <li><Link to="/about" className="nav-item">About</Link></li>
            <li><Link to="/projects" className="nav-item">Projects</Link></li>
            <li><Link to="/experience" className="nav-item">Experience</Link></li>
            <li><Link to="/skills" className="nav-item">Skillsets</Link></li>
            <li><Link to="/contact" className="nav-item">Contact</Link></li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
