import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './HouseholdsPage.css'; // Import CSS
import households from './assets/households.jpg'; // Ensure the path is correct

const HouseholdsPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Initially closed
  const [formData, setFormData] = useState({
    wasteType: '',
    picture: null,
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

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      picture: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add submission logic here
    console.log('Form submitted:', formData);
  };

  // Handle logout
  const handleLogout = () => {
    // Add any logout logic if needed (like clearing tokens)
    navigate('/'); // Navigate to homepage
  };

  return (
    <div 
      className={`households-container ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}
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
              <p>Role: Household</p>
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
        <h1>Households Dashboard</h1>
        <p>Welcome to your waste management tracking system!</p>

        {/* Waste Management Form */}
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

          <label htmlFor="picture">Upload Picture:</label>
          <input 
            type="file" 
            id="picture" 
            name="picture" 
            onChange={handleFileChange} 
            required 
          />

          <label htmlFor="quantity">Quantity (kg):</label>
          <input 
            type="number" 
            id="quantity" 
            name="quantity" 
            value={formData.quantity} 
            onChange={handleChange} 
            required 
          />

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

export default HouseholdsPage;
