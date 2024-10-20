import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.title}>Fight News</h1>
      <ul style={styles.navLinks}>
        {/* Replace <a> with <Link> and provide the "to" attribute for routing */}
        <li><Link to="/home" style={styles.link}>Home</Link></li>
        <li><Link to="/news" style={styles.link}>Latest News</Link></li>
        <li><Link to="/about" style={styles.link}>About</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
  },
  title: {
    fontSize: '24px',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '15px',
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
  },
};

export default Navbar;
