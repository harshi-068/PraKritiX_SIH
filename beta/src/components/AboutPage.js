import React from 'react';
import './AboutPage.css';
import recycleImage from './assets/recycle.jpg'; // Ensure the path is correct
import communityImage from './assets/community.jpeg'; // Ensure the path is correct

const AboutPage = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Prakritix</h1>
        <p>Your partner in sustainable waste management.</p>
      </header>

      <section className="about-content">
        <div className="about-card">
          <img src={recycleImage} alt="Recycle" className="about-image" />
          <h2>Our Mission</h2>
          <p>
            At Prakritix, we aim to revolutionize the way waste is managed in our communities. 
            Our mission is to empower households with tools and knowledge for efficient waste disposal 
            and recycling, ultimately contributing to a cleaner, greener planet.
          </p>
        </div>

        <div className="about-card">
          <img src={communityImage} alt="Community" className="about-image" />
          <h2>Community Engagement</h2>
          <p>
            We believe that collective action is key to solving environmental challenges. 
            Our platform encourages community involvement through sharing, learning, and 
            collaborating on sustainable practices. Join us in creating a strong community 
            dedicated to waste reduction and recycling!
          </p>
        </div>
      </section>

      <footer className="about-footer">
        <p>&copy; 2024 Prakritix. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;
