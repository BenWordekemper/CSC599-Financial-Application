// Home.js
import React from 'react';
import './Home.css'; // Import your CSS file for styling
import Navbar from './Navbar'; // Assuming you have a Navbar component

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="hero-container">
        <div className="hero-content">
          <h1>Welcome to CoinWise</h1>
          <p>Our website will assist young adults in conquering these challenges and offer a tool for young adults who are experiencing new financial independence. Our website will be engaging and easy to maneuver, making it so these young adults have less stress surrounding their finances. </p>
          <button className="cta-button">Get Started</button>
          <button className="cta-button">Learn More</button>

        </div>
      </div>
      <div className="additional-content">
        {/* Add more content or features as needed */}
      </div>
    </div>
  );
};

export default Home;
