// HomePage.jsx
import React from 'react';

const HomePage = () => {
    return (
        <div style={homePageContainerStyle}>
            <h2>This is Test Home Page.</h2>
            {/* Add more content as needed */}
        </div>
    );
};

const homePageContainerStyle = {
    textAlign: 'center',
    marginTop: '20px', // Adjust spacing from the top

    maxWidth: '60%', // Adjust maximum width of content
    padding: '20px', // Add padding as needed
};

export default HomePage;
