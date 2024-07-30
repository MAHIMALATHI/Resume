import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SignUp.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add('signup-body');
    return () => {
      document.body.classList.remove('signup-body');
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirm_password) {
      alert('Passwords do not match');
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/insert', {
        email,
        password,
        confirm_password: confirm_password, // Include confirm_password field
      });

      if (response.status === 200) {
        navigate('/home'); // Navigate to the home page after successful sign-up
      } else {
        alert('Failed to sign up');
      }
    } catch (error) {
      alert('An error occurred during sign-up: ' + error.message);
    }
  };

  return (
    <div className="signup-body">
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Confirm Password:</label>
            <input
              type="password"
              value={confirm_password}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <p>Already a user? <Link to="/">Log in</Link></p>
      </div>
    </div>
  );
};

export default SignUp;
