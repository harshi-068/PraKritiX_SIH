import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import HouseholdsPage from './components/HouseholdsPage';
import AboutPage from './components/AboutPage';
import VendorPage from './components/VendorPage'; // Import VendorPage
import EcoUnitsPage from './components/EcoUnitsPage'; // Import EcoUnitsPage
import CommercialPage from './components/CommercialPage'; // Import CommercialPage

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/households" element={<HouseholdsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/vendor" element={<VendorPage />} /> {/* Add route for VendorPage */}
        <Route path="/eco-units" element={<EcoUnitsPage />} /> {/* Add route for EcoUnitsPage */}
        <Route path="/commercial" element={<CommercialPage />} /> {/* Add route for CommercialPage */}
      </Routes>
    </Router>
  );
}

export default App;
