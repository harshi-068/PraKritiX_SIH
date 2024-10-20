import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import Prakritix_logo from './assets/Prakritix_logo.png'; 
import bot from './assets/bot.png'; 
import feed from './assets/feed.png'; 
import share from './assets/share.png'; 

const HomePage = () => {
  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo-section">
          <img src={Prakritix_logo} alt="Logo" className="logo" />
        </div>

        <ul className="nav-links">
          <li><a href=' '>Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="#bujji">Bujji</a></li>
          <li><a href="#feed">Feed</a></li>
          <li><Link to="/login" className="nav-link">Disposing Waste</Link></li>
          <li><Link to="/login" className="nav-link">Collecting Waste</Link></li>
        </ul>

        <div className="auth-links">
          <Link to="/login" className="nav-button">Login</Link>
          <Link to="/register" className="nav-button">Sign Up</Link>
        </div>
      </nav>

      {/* Centered Content */}
      <div className="center-content">
        {/* Carousel Section */}
        <div className="carousel">
          <div className="card">
            <img src={bot} alt="bot" className="card-icon" />
            <h3>Chatbot Assistance</h3>
            <p>"Get instant DIY tips and creative ideas from our chatbot. Perfect for finding unique ways to reuse and recycle products."</p>
          </div>
          <div className="card">
            <img src={feed} alt="Vendor Icon" className="card-icon" />
            <h3>Community Feed</h3>
            <p>"Join our community feed to share and discover innovative DIY recycled projects. Support women earning side income through crafting."</p>
          </div>
          <div className="card">
            <img src={share} alt="Initiative Icon" className="card-icon" />
            <h3>Resource Redirect</h3>
            <p>"Explore and connect with existing resources and websites for more DIY inspiration and recycling solutions. Enhance your creative projects with additional guidance."</p>
          </div>
        </div>  

        {/* Get Started Button */}
        <Link to="/login">
          <button className="get-started-btn">Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
