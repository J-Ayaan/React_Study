// Footer component
import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div className="footer-content" style={footerContentStyle}>
        <p>&copy; {new Date().getFullYear()} Your Website Name</p>
        <nav className="footer-navigation" style={footerNavStyle}>
          <ul style={footerUlStyle}>
            <li style={footerLiStyle}><a href="/" style={footerLinkStyle}>Home</a></li>
            <li style={footerLiStyle}><a href="/about" style={footerLinkStyle}>About</a></li>
            <li style={footerLiStyle}><a href="/contact" style={footerLinkStyle}>Contact</a></li>
            {/* Add more footer navigation links as needed */}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

// Styles
const footerStyle = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
  backgroundColor: '#333',
  color: '#fff',
  padding: '10px',
};

const footerContentStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginLeft:'20px',
};

const footerNavStyle = {
  display: 'inline',
};

const footerUlStyle = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
};

const footerLiStyle = {
  display: 'inline-block',
  marginRight: '40px',
};

const footerLinkStyle = {
  color: '#fff',
  textDecoration: 'none',
};

export default Footer;
