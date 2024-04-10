import React from 'react';
import '/Users/jungjunkyeong/Desktop/React_Study/gpttest/src/style.css';
import BulletinBoard from './BulletinBoard'; // Import the BulletinBoard component

const UnivBoardPage = () => {
  return (
    <div className='univ-board-page-container'>
      <BulletinBoard /> {/* Include the BulletinBoard component here */}
    </div>
  );
};

export default UnivBoardPage;
