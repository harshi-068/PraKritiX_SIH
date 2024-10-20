// src/components/RegisterPage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './RegisterPage.css'; // Separate CSS for RegisterPage
import cgt_profile from './assets/cgt_profile.jpg';

const RegisterPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [profession, setProfession] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    // Navigate based on role
    switch (role) {
      case 'household':
        navigate('/households');
        break;
      case 'local-vendor':
        navigate('/vendor');
        break;
      case 'commercial':
        navigate('/commercial'); // Ensure you have a CommercialPage set up
        break;
      case 'eco-units':
        navigate('/eco-units');
        break;
      default:
        alert('Please select a valid role');
    }
  };

  return (
    <div className="register-container">
      <div className="image-section">
        <img src={cgt_profile} alt="Register" />
        <h3>Join Our Community!</h3>
        <p>Explore opportunities and make a difference with us.</p>
      </div>

      <div className="form-section">
        <h2>Create Your Account</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Profession (e.g., Housewife, Catering)"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
            required
          />
          
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">Select Role</option>
            <option value="household">Household</option>
            <option value="local-vendor">Local Vendor</option>
            <option value="commercial">Commercial</option>
            <option value="eco-units">Eco Units</option>
          </select>

          <input
            type="password"
            placeholder="Create Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
          <button type="submit" className="btn-primary">Register</button>
        </form>
        
        <p className="form-footer">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
