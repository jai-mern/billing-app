import React, { useState } from 'react';
import { logIn } from '../services/auth';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false); // State to track login process

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoggingIn(true); // Set isLoggingIn to true when login process starts
    try {
      await logIn(email, password);
      // Reset form fields and login status on successful login
      setEmail('');
      setPassword('');
      setError('');
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoggingIn(false); // Reset login status regardless of success or failure
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleLogin}>
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
        <button
          type="submit"
          style={{ backgroundColor: isLoggingIn ? 'gray' : 'green', cursor: isLoggingIn ? 'not-allowed' : 'pointer' }}
          disabled={isLoggingIn}
        >
          {isLoggingIn ? 'Logging In...' : 'Log In'}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
