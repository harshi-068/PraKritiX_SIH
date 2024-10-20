// src/components/EcoUnitsPage.js

import React, { useState } from 'react';
import './EcoUnitsPage.css'; // Import CSS
import households from './assets/households.jpg'; // Ensure the path is correct

const EcoUnitsPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Initially closed

  // Sample data for waste collection requests
  const wasteRequests = [
    {
      user: '@RahulKumar',
      materialWaste: 'Plastic Waste',
      quantity: '4kg',
      location: 'Greenwood Avenue, Gujarat',
      pickupTime: '3:00 PM',
    },
    {
      user: '@AnjaliMehta',
      materialWaste: 'Organic Waste',
      quantity: '2kg',
      location: 'Central Park, Gujarat',
      pickupTime: '4:00 PM',
    },
    {
      user: '@SnehaPatel',
      materialWaste: 'e-Waste',
      quantity: '1 item',
      location: 'Mapple Street, Gujarat',
      pickupTime: '5:30 PM',
    },
  ];

  // Function to handle accept action
  const handleAccept = (request) => {
    // Logic to handle acceptance (e.g., updating the state or making an API call)
    alert(`Accepted waste from ${request.user}`);
  };

  // Function to handle decline action
  const handleDecline = (request) => {
    // Logic to handle decline (e.g., updating the state or making an API call)
    alert(`Declined waste from ${request.user}`);
  };

  return (
    <div className={`eco-units-container ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}
      onMouseEnter={() => setIsSidebarOpen(true)} 
      onMouseLeave={() => setIsSidebarOpen(false)}
    >
      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <div className="profile-section">
            <img src={households} alt="Profile" className="profile-pic" />
            <div className="profile-details">
              <h3>John Doe</h3>
              <p>johndoe@gmail.com</p>
              <p>Phone: +91-1234567890</p>
              <p>Role: Eco Unit</p>
            </div>
          </div>
        </div>

        <div className="tracking-section">
          <h4>Waste Collected</h4>
          <ul>
            <li><span className="material-symbols-outlined"></span> Plastic Waste: 4kg</li>
            <li><span className="material-symbols-outlined"></span> Organic Waste: 2kg</li>
            <li><span className="material-symbols-outlined"></span> e-Waste: 1 item</li>
          </ul>
          <h4>Redeem Points: <span className="points">200</span></h4>
        </div>

        <button className="logout-btn"><span className="material-symbols-outlined">logout</span> Logout</button>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1>Waste Collection Notifications</h1>
        <p>Manage the incoming waste collection requests:</p>
        <div className="waste-request-list">
          {wasteRequests.map((request, index) => (
            <div className="request-card" key={index}>
              <h3>User: {request.user}</h3>
              <p>Material Waste: {request.materialWaste}</p>
              <p>Quantity: {request.quantity}</p>
              <p>Location: {request.location}</p>
              <p>Pickup: {request.pickupTime}</p>
              <div className="action-buttons">
                <button className="accept-btn" onClick={() => handleAccept(request)}>Accept</button>
                <button className="decline-btn" onClick={() => handleDecline(request)}>Decline</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EcoUnitsPage;
