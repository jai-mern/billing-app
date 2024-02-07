import React, { useState } from 'react';
import { signUp } from '../services/auth';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isEmailValid = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPasswordValid = (password) => {
    // Password length validation
    return password.length >= 8;
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!isEmailValid(email)) {
      setError('Please enter a valid email address');
      return;
    }
    if (!isPasswordValid(password)) {
      setError('Password must be at least 8 characters long');
      return;
    }
    try {
      await signUp(email, password);
      // Redirect to dashboard or perform other actions after successful signup
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2 style={{ color: 'blue' }}>Sign Up</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSignUp}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupForm;
