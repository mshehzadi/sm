import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './GetStarted.css'; // Import CSS styles
import biasImage from './Styles/bias123.jpeg'; // Import the image

const GetStarted = () => {
    console.log('GetStarted component rendered');
    
    return (
        <div className="get-started-content"> {/* Remove container to show content directly on background */}
            <div className="text-section">
                <h1 className="title">Bias Detector</h1>
                <p className="description">
                    Take the first step to unbiased decision-making. Our AI detects bias & fake reviews.
                </p>
                <Link to="/Home">
                    <button className="get-started-button">Get Started</button> {/* Link to Home page */}
                </Link>
            </div>
            <div className="image-section">
                <img
                    src={biasImage} // Use the imported image here
                    alt="AI Illustration"
                    className="right-image"
                />
            </div>
        </div>
    );
};

export default GetStarted;

