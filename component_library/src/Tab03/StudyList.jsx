import React from 'react';

const StudyList = () => {
    return (
        <div style={StudyListPageContainerStyle}>
            <h2>This is Test Study List Page.</h2>
        </div>
    );
};

const StudyListPageContainerStyle = {
    textAlign: 'center',
    marginTop: '20px', // Adjust spacing from the top

    maxWidth: '60%', // Adjust maximum width of content
    padding: '20px', // Add padding as needed
  };
export default StudyList;