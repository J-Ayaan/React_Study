// SignupForm.js

import React, { useState } from 'react';

const SignupForm = ({ onLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform signup logic here
    // Check if password matches confirmPassword
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    // Assuming signup logic is successful, you can call onLogin to log in the user
    const userData = {
      name,
      email,
      // Add other user data if needed
    };
    onLogin(userData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
      </p>
      <p>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
      </p>
      <p>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
      </p>
      <p>
        <label>
          Confirm Password:
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </label>
      </p>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;
