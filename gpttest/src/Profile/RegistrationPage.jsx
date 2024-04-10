// RegistrationPage.jsx

import React from 'react';
import RegistrationForm from './RegistrationForm';

const RegistrationPage = () => {
  const handleRegistration = (userData) => {
    // Implement user registration logic here
    console.log('User registration data:', userData);
  };

  return (
    <div>
      <h2>Membership Registration</h2>
      <RegistrationForm onSubmit={handleRegistration} />
    </div>
  );
};

export default RegistrationPage;
