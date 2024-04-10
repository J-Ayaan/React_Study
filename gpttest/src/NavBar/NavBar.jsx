import React from 'react';
import { Link } from 'react-router-dom';
import '/Users/jungjunkyeong/Project/SOFIT/gpttest/src/style.css';

const NavBar = ({ isLoggedIn, onLogout }) => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/groups">Groups</Link></li>
        <li><Link to="/Univ">Univ</Link></li>
        <li><Link to="/myprofile">My Profile</Link></li>
        {isLoggedIn && <li><button onClick={onLogout}>Logout</button></li>}
      </ul>
    </nav>
  );
};

export default NavBar;
