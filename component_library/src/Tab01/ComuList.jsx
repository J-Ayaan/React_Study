// ComuList.jsx
import React from 'react';
import BoardHeader from './BoardHeader';
import PostList from './PostList';

const ComuList = () => {
  return (
    <div style={comuListPageContainerStyle}>
      <BoardHeader />
      <PostList />
    </div>
  );
};

const comuListPageContainerStyle = {
  display: 'flex',            // Use flexbox for centering
  flexDirection: 'column',    // Arrange items vertically
  alignItems: 'center',       // Center items horizontally
  textAlign: 'center',
  marginTop: '20px',
  maxWidth: '60%',
  padding: '20px',
  margin: 'auto',             // Center the container horizontally
};

export default ComuList;
