// LoginForm.js
import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass login credentials to parent component
    onLogin(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </p>
      <p>
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </p>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
