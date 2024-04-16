// WritingButton.jsx
import React from 'react';

const WritingButton = () => {
  const buttonStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
  };

  return (
    <button style={buttonStyle}>Write</button>
  );
};

export default WritingButton;
