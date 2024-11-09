import React, { useState, useEffect } from 'react';
import Chatbot from './Chatbot';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Invest from './pages/Invest';
import SectorDetails from './pages/Sectors/SectorDetails';
import ProductDetails from './pages/Sectors/ProductDetail';
import Analytics from './pages/Analytics';
import ChatPage from './pages/chats/ChatPage';
import Learn from './pages/Learn';
import RiskAssessment from './pages/learn/RiskAssessment';
import Investors from './pages/learn/Investors';
import Funding from './pages/learn/Funding';
import RaiseCapital from './pages/learn/funding/RaiseCapital';
import ReferStartup from './pages/learn/funding/ReferStartup';
import SuccessStories from './pages/learn/funding/SuccessStories';
import Navbar from './Navs/Navbar';
import Dashcomp from './Dashcomp'; // Now Dashcomp
import logo from './assets/F__4_-removebg-preview.png';
import buildings from './assets/Buildings.png';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedEmail = localStorage.getItem('email'); // Get the email from localStorage
    if (token && storedEmail) {
      setIsAuthenticated(true);
      setEmail(storedEmail);
    }
    console.log(email); // Print email to the console to check
  }, [email]);

  const handleLogin = (token, email) => {
    localStorage.setItem('token', token);
    localStorage.setItem('email', email);
    setIsAuthenticated(true);
    setEmail(email);
    console.log(email);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
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

  // Render Dashcomp if the email matches
  if (email === 'okay@123') {
    return <Dashcomp />;
  }

  return (
    <Router>
      <div className="bg-black app-content min-h-screen flex flex-col items-center">
        {isAuthenticated && <Navbar onLogout={handleLogout} />}
        
        <Routes>
          <Route path="/" element={<Navigate to="/pages/analytics" replace />} />
          <Route path="/invest" element={<Invest />} />
          <Route path="/sectors/:sectorName" element={<SectorDetails />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/pages/analytics" element={<Analytics />} />
          <Route path="/pages/message" element={<ChatPage />} />
          <Route path="/pages/learn" element={<Learn />} />
          <Route path="/pages/learn/risk-assessment" element={<RiskAssessment />} />
          <Route path="/pages/learn/investors" element={<Investors />} />
          <Route path="/pages/learn/funding" element={<Funding />} />
          <Route path="/pages/learn/funding/raise-capital" element={<RaiseCapital />} />
          <Route path="/pages/learn/funding/refer-startup" element={<ReferStartup />} />
          <Route path="/pages/learn/funding/success-stories" element={<SuccessStories />} />
        </Routes>
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
