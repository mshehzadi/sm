import React, { useState } from 'react';
import './style/Register.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      // Make API call to register the user
      const response = await axios.post('http://localhost:5000/api/auth/signup', formData);

      // Set success message
      setMessage(response.data.message || 'Signup successful! Redirecting to login...');
      
      // Wait for 2 seconds, then redirect to login page
      setTimeout(() => {
        navigate('/Login'); // Redirect to Login page
      }, 2000);
    } catch (error) {
      // Handle error message
      setMessage(error.response?.data?.message || 'Signup failed. Please try again.');
    } finally {
      setLoading(false); // Stop loading state
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="main-content">
          <div className="box">
            <h1>Create New Account!</h1>

            {/* Display success or error message */}
            {message && <p className={`message ${message.includes('successful') ? 'success' : 'error'}`}>{message}</p>}

            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Username</label><br />
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your Username"
                value={formData.name}
                onChange={handleChange}
                required
              /><br />

              <label htmlFor="email">Email</label><br />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your Email"
                value={formData.email}
                onChange={handleChange}
                required
              /><br />

              <label htmlFor="password">Password</label><br />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your Password"
                value={formData.password}
                onChange={handleChange}
                required
              /><br />

              <button type="submit" name="signup" disabled={loading}>
                {loading ? 'Signing up...' : 'Signup'}
              </button><br />
            </form>

            <p>Already have an account? <Link to="/Login">Signin</Link></p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Register;




