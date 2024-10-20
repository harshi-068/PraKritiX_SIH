import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import cgt_profile from './assets/cgt_profile.jpg';

const LoginPage = () => {
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    switch (role) {
      case 'households':
        navigate('/households');
        break;
        case 'commercial':
          navigate('/commercial');
          break;
      case 'local-vendor':
        navigate('/vendor');
        break;
      case 'eco-units':
        navigate('/eco-units');
        break;
      default:
        alert('Role not implemented yet!');
    }
  };

  return (
    <div className="login-container">
      <div className="image-section">
        <img src={cgt_profile} alt="Login" />
        <h3>Welcome Back!</h3>
        <p>Login to continue your journey with us.</p>
      </div>

      <div className="form-section">
        <h2>Login to Your Account</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <select value={role} onChange={(e) => setRole(e.target.value)} required>
            <option value="">Select Waste Type</option>
            <option value="households">Households</option>
            <option value="commercial">Commercial</option>
            <option value="local-vendor">Local Vendor</option>
            <option value="eco-units">Eco Units</option>
          </select>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="btn-primary">Login</button>
        </form>
        <p className="form-footer">
          Don't have an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
