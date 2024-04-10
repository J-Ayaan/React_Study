// MyProfile.js

import React from 'react';
import MemberInformation from './MemberInformation';
import SignupForm from './SignupForm'; // Import the SignUpForm component
import LoginForm from './LoginForm'; // Import the LoginForm component
import '/Users/jungjunkyeong/Desktop/React_Study/gpttest/src/style.css';

const MyProfile = ({ isLoggedIn, user, onLogin, onLogout }) => {
  return (
    <div className="profile-container">
      {isLoggedIn ? (
        <>
          <h2>Welcome, {user.name}!</h2>
          <MemberInformation user={user} />
          <button onClick={onLogout}>Logout</button>
        </>
      ) : (
        <>
          <h2>Sign Up</h2>
          <SignupForm onLogin={onLogin} /> {/* Pass onLogin function to SignUpForm */}
          <h2>Login</h2>
          <LoginForm onLogin={onLogin} /> {/* Pass onLogin function to LoginForm */}
        </>
      )}
    </div>
  );
};

export default MyProfile;
