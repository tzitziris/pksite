import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import '../assets/Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar"> 
      <h1 className="title">Fight News</h1>
      <ul className="navLinks"> 
        <li><Link to="/home" className="link">Home</Link></li> 
        <li><Link to="/news" className="link">Latest News</Link></li>
        <li><Link to="/about" className="link">About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;