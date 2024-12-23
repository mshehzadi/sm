import React, { useState } from 'react';
import './Styles/Register.css';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios'; // Import axios to make HTTP requests

function Register() {
  // State to hold form input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State to handle error messages
  const history = useHistory(); // Use history for redirecting after successful signup

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh on form submission

    // Create request payload
    const userData = { name, email, password };

    try {
      // Make a POST request to the backend for signup
      const response = await axios.post('http://localhost:5000/api/auth/signup', userData);  // Make sure this URL matches the backend route

      // If successful, redirect to login page
      if (response.status === 201) {
        history.push('/login'); // Redirect to login page
      }
    } catch (err) {
      console.error("Error during signup:", err.response?.data?.message || err.message);
      // Show error message from backend if available, otherwise show generic error
      setError(err.response?.data?.message || 'Signup failed. Please try again.');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="main-content">
          <div className="box">
            <h1>Create New Account!</h1>
            {/* Render error message */}
            {error && <p className="error">{error}</p>}

            {/* Form to collect user data */}
            <form onSubmit={handleSubmit}>
              <label>Username</label><br/>
              <input 
                type="text" 
                placeholder="Enter your Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
              /><br/>

              <label>Email</label><br/>
              <input 
                type="email" 
                placeholder="Enter your Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              /><br/>

              <label>Password</label><br/>
              <input 
                type="password" 
                placeholder="Enter your Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              /><br/>

              <button type="submit">Signup</button><br/>
            </form>
            
            <p>Already have an account? <Link to="/login">Signin</Link></p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Register;


