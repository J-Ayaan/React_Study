// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={headerStyle}>
      <div className="logo" style={logoStyle}>Your Logo</div>
      <nav className="navigation" style={navStyle}>
        <ul style={ulStyle}>
          <li style={liStyle}><Link to="/" style={linkStyle}>Home</Link></li>
          <li style={liStyle}><Link to="/Comu" style={linkStyle}>Comu</Link></li>
          <li style={liStyle}><Link to="/Notice" style={linkStyle}>Notice</Link></li>
          <li style={liStyle}><Link to="/Study Recode" style={linkStyle}>Study Recode</Link></li>
          <li style={liStyle}><Link to="/MyPage" style={linkStyle}>MyPage</Link></li>
        </ul>
      </nav>
    </header>
  );
};


// Styles
const headerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '20px 20px',
  display: 'flex',
  justifyContent: 'space-between', // Logo on the left, navigation on the right
  alignItems: 'center', // Center items vertically
};

const logoStyle = {
  fontSize: '24px',
};

const navStyle = {
  flexGrow: 1, // Allow navigation to take up remaining space
};

const ulStyle = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  justifyContent: 'center', // Center items horizontally
};

const liStyle = {
  margin: '0 30px', // Adjust spacing between tabs
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
};

export default Header;
