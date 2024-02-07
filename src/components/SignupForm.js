import React, { useState } from 'react';
import { signUp } from '../services/auth';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSigningUp, setIsSigningUp] = useState(false); // State to track signup process

  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsSigningUp(true); // Set isSigningUp to true when signup process starts
    try {
      await signUp(email, password);
      // Reset form fields and signup status on successful signup
      setEmail('');
      setPassword('');
      setError('');
    } catch (error) {
      setError(error.message);
    } finally {
      setIsSigningUp(false); // Reset signup status regardless of success or failure
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
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
        <button
          type="submit"
          style={{ backgroundColor: isSigningUp ? 'gray' : 'blue', cursor: isSigningUp ? 'not-allowed' : 'pointer' }}
          disabled={isSigningUp}
        >
          {isSigningUp ? 'Signing Up...' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
