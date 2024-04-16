import React from 'react';

const Mypage = () => {
    return (
        <div style={MyPageContainerStyle}>
            <h2>This is Test My Page.</h2>
        </div>
    );
};

const MyPageContainerStyle = {
    textAlign: 'center',
    marginTop: '20px', // Adjust spacing from the top

    maxWidth: '60%', // Adjust maximum width of content
    padding: '20px', // Add padding as needed
  };
export default Mypage;