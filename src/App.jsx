import React, { useState, useEffect } from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Sectors from './pages/Sectors';
import Technology from './pages/sectors/Technology';
import Film from './pages/sectors/Film';
import Games from './pages/sectors/Games';
import Healthcare from './pages/sectors/Healthcare';
import Environment from './pages/sectors/Environment';
import Art from './pages/sectors/Art';
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
      <div className="bg-white app-content min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-semibold mb-4">Welcome to FundFlow</h1>
        <button 
          onClick={handleLogout} 
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Logout
        </button>
        
        {/* Place Routes within main authenticated view */}
        <Routes>
          <Route path="/" element={<div>Welcome to FundFlow Home</div>} />
          <Route path="/sectors" element={<Sectors />} />
          <Route path="/sectors/technology" element={<Technology />} />
          <Route path="/sectors/film" element={<Film />} />
          <Route path="/sectors/games" element={<Games />} />
          <Route path="/sectors/healthcare" element={<Healthcare />} />
          <Route path="/sectors/environment" element={<Environment />} />
          <Route path="/sectors/art" element={<Art />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
