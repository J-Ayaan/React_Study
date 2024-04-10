// MemberInformation.js
import React from 'react';

const MemberInformation = ({ user }) => {
  return (
    <div>
      <h3>Member Information</h3>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      {/* Add more user information fields as needed */}
    </div>
  );
};

export default MemberInformation;
