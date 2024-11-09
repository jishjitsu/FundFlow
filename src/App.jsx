import React, { useState, useEffect } from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import SectorDetails from './pages/SectorDetails'; // New component for all sector pages
import ProductDetails from './pages/ProductDetail';
import Analytics from './pages/Analytics';
import Message from './pages/Message';
import Learn from './pages/Learn';
import RiskAssessment from './pages/learn/RiskAssessment';
import Investors from './pages/learn/Investors';
import Funding from './pages/learn/Funding';
import RaiseCapital from './pages/learn/funding/RaiseCapital';
import ReferStartup from './pages/learn/funding/ReferStartup';
import SuccessStories from './pages/learn/funding/SuccessStories';
import Navbar from './Navs/Navbar';
import logo from './assets/F__4_-removebg-preview.png';
import buildings from './assets/Buildings.png';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (token) => {
    localStorage.setItem('token', token);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="body">
        <Parallax pages={2}>
          <ParallaxLayer offset={0} speed={1} className="h-screen m-0 p-0">
            <div className="flex flex-col items-center justify-center h-full">
              <img src={logo} alt="FundFlow Logo" className="w-[100px] h-[100px] mb-6" />
              <h1 className="font-Poleno text-6xl text-black text-shadow-md animate-fadeIn">
                Your Money Matters
              </h1>
              <h6 className="text-2xl text-[#d9d6ba] mt-4 animate-fadeIn delay-200">
                Let’s turn Small Investments into Big Gains
              </h6>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.1} factor={1} className="h-screen m-0 p-0 flex items-center justify-center">
            <img src={buildings} alt="Buildings" className="absolute bottom-0 w-full" />
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={2} factor={1.5} className="h-screen m-0 p-0">
            <Login onLogin={handleLogin} />
          </ParallaxLayer>
        </Parallax>
      </div>
    );
  }

  return (
    <Router>
      <div className="bg-white app-content min-h-screen flex flex-col items-center">
        {isAuthenticated && <Navbar onLogout={handleLogout} />}
        
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sectors/:sectorName" element={<SectorDetails />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/pages/analytics" element={<Analytics />} />
          <Route path="/pages/message" element={<Message />} />
          <Route path="/pages/learn" element={<Learn />} />
          <Route path="/pages/learn/risk-assessment" element={<RiskAssessment />} />
          <Route path="/pages/learn/investors" element={<Investors />} />
          <Route path="/pages/learn/funding" element={<Funding />} />
          <Route path="/pages/learn/funding/raise-capital" element={<RaiseCapital />} />
          <Route path="/pages/learn/funding/refer-startup" element={<ReferStartup />} />
          <Route path="/pages/learn/funding/success-stories" element={<SuccessStories />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
