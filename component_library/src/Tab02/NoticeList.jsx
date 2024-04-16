import React from 'react';

const NoticeList = () => {
    return (
        <div style={NoticeListPageContainerStyle}>
            <h2>This is Test Notice List Page.</h2>
        </div>
    );
};

const NoticeListPageContainerStyle = {
    textAlign: 'center',
    marginTop: '20px', // Adjust spacing from the top

    maxWidth: '60%', // Adjust maximum width of content
    padding: '20px', // Add padding as needed
  };
export default NoticeList;