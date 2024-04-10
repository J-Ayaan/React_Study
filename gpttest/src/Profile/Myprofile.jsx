// MyProfile.js
import React from 'react';
import MemberInformation from './MemberInformation';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import '/Users/jungjunkyeong/Project/SOFIT/gpttest/src/style.css';

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
          <SignupForm />
          <h2>Login</h2>
          <LoginForm onLogin={onLogin} />
        </>
      )}
    </div>
  );
};

export default MyProfile;
