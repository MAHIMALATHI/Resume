import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add('login-body');
    return () => {
      document.body.classList.remove('login-body');
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:5000/view');
      if (response.status === 200) {
        const users = response.data;
        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
          navigate('/home'); // Navigate to the home page after successful login
        } else {
          alert('Please signup the application');
        }
      } else {
        alert('Failed to fetch user data');
      }
    } catch (error) {
      alert('An error occurred during login: ' + error.message);
    }
  };

  // <video className="background-video1" autoPlay loop muted>
  // <source src="https://media.istockphoto.com/id/838143378/video/curriculum-vitae-or-resume-animation.mp4?s=mp4-640x640-is&k=20&c=5fS2V6-f_EgXU1xeZf9XSc5KyUqVfY-ZA-eoH6TiT0M=" type="video/mp4" />
  // Your browser does not support the video tag.
  // </video>
  return (
    <div className="login-body">
    <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label >Email:</label>
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
          <button type="submit" >Login</button>
        </form>
        <p>New User? <Link to="/reg">Register here</Link></p>
      </div>
    </div>
  );
};

export default Login;
