// BoardHeader.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const BoardHeader = () => {
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    border: '1px solid black',
    padding: '10px',
    maxWidth: '800px',
    width: '100%',
    margin: '10px',
  };

  const SearchContainerStyle = {
    display: 'flex',
    alignItems: 'center', // Align items vertically within the container
  };

  const inputStyle = {
    width: '300px', // Increase the width of the input
    padding: '8px', // Add padding to the input
    fontSize: '16px', // Set font size
    marginRight: '10px', // Add a small gap between input and button
  };

  const buttonStyle = {
    padding: '8px 16px', // Add padding to the buttons
    fontSize: '16px',    // Set font size
    marginRight: '10px', // Add a small gap between input and button
  };

  const writeButtonStyle = {
    ...buttonStyle,
    marginLeft: 'auto', // Push the button to the right
  };

  return (
    <div style={headerStyle}>
      <div style={SearchContainerStyle}>
        <input style={inputStyle} type="text" placeholder="Search..." />
        <button style={buttonStyle}>검색</button>
        <button style={buttonStyle}>정렬</button>
      </div>
      {/* Writing button aligned to the right */}
      <Link to="/create" style={{ textDecoration: 'none' }}>
        <button style={writeButtonStyle}>글작성</button>
      </Link>
    </div>
  );
};

export default BoardHeader;
