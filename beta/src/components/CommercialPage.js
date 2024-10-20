import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CommercialPage.css'; // Import Commercial specific CSS
import commercialProfile from './assets/commerical_profile.png'; // Ensure the path is correct

const CommercialPage = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [formData, setFormData] = useState({
    wasteType: '',
    quantity: '',
    location: '',
    pickupSchedule: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Commercial form submitted:', formData);
    // Add submission logic here
  };

  // Handle logout
  const handleLogout = () => {
    // Add any logout logic if needed
    navigate('/'); // Navigate to homepage
  };

  return (
    <div 
      className={`commercial-container ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}
      onMouseEnter={() => setIsSidebarOpen(true)} 
      onMouseLeave={() => setIsSidebarOpen(false)}
    >
      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <div className="profile-section">
            <img src={commercialProfile} alt="Profile" className="profile-pic" />
            <div className="profile-details">
              <h3>Commercial Name</h3>
              <p>commercial@example.com</p>
              <p>Phone: +91-1234567890</p>
              <p>Role: Commercial Provider</p>
            </div>
          </div>
        </div>
        
        <div className="tracking-section">
          <h4>Waste Contributed</h4>
          <ul>
            <li><span className="material-symbols-outlined"></span> Wet Waste: 5kg</li>
            <li><span className="material-symbols-outlined"></span> Dry Waste: 3kg</li>
            <li><span className="material-symbols-outlined"></span> E-Waste: 2 items</li>
          </ul>
          <h4>Redeem Points: <span className="points">120</span></h4>
        </div>

        <button className="logout-btn" onClick={handleLogout}>
          <span className="material-symbols-outlined">logout</span> Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1>Commercial Dashboard</h1>
        <p>Welcome to your waste management tracking system!</p>

        {/* Waste Collection Form */}
        <form className="waste-form" onSubmit={handleSubmit}>
          <h2>Report Waste</h2>
          <label htmlFor="wasteType">Type of Waste:</label>
          <select 
            id="wasteType" 
            name="wasteType" 
            value={formData.wasteType} 
            onChange={handleChange} 
            required
          >
            <option value="">Select Type</option>
            <option value="Biodegradable Waste">Biodegradable Waste</option>
            <option value="Plastic Waste">Plastic Waste</option>
            <option value="Sanitary Waste">Sanitary Waste</option>
            <option value="Medical Waste">Medical Waste</option>
            <option value="e-Waste">e-Waste</option>
          </select>

          <label htmlFor="quantity">Quantity (kg):</label>
          <input 
            type="number" 
            id="quantity" 
            name="quantity" 
            value={formData.quantity} 
            onChange={handleChange} 
            required 
          />
          <label htmlFor='conditions'>Waste Packing Conditions</label>
          <input type='text' id='conitions' placeholder='Enter packing conditions here' />

          <label htmlFor="location">Location:</label>
          <input 
            type="text" 
            id="location" 
            name="location" 
            value={formData.location} 
            onChange={handleChange} 
            required 
          />

          <label htmlFor="pickupSchedule">Pickup Schedule:</label>
          <input 
            type="date" 
            id="pickupSchedule" 
            name="pickupSchedule" 
            value={formData.pickupSchedule} 
            onChange={handleChange} 
            required 
          />

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CommercialPage;
