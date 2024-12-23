import React from 'react';
import { Link } from 'react-router-dom';
import './style/Home.css'; // Make sure the CSS file exists and is correctly linked.

function Home() {
  return (
    <div className="home-container">
      <header className="header">
        <div className="logo">
          <h1>Bias Detector</h1>
        </div>
        <nav className="nav-bar">
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/register" className="authentication">Signup</Link></li>
            <li><Link to="/login" className="authentication">Signin</Link></li>
          </ul>
        </nav>
      </header>

      <div className="image">
        <div className="image-overlay">
          <h2>Are Online Reviews Trustworthy?</h2>
          <p>Take the first step to unbiased decision-making. Our AI detects bias & fake reviews.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
