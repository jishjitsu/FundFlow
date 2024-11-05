import React, { useState, useEffect } from 'react';
import './index.css';
import Login from './pages/Login';
import logo from './assets/F__4_-removebg-preview.png';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import buildings from './assets/Buildings.png';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check for token on initial load
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  // Function to handle login and store JWT token
  const handleLogin = (token) => {
    localStorage.setItem('token', token); // Save the token in localStorage
    setIsAuthenticated(true); // Update the authenticated state
  };

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the token from localStorage
    setIsAuthenticated(false); // Reset the authenticated state
  };

  // Render the login screen with Parallax if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="body">
        <Parallax pages={2}>
          <ParallaxLayer 
            offset={0} 
            speed={1} 
            className='h-screen m-0 p-0'
          >
            <div className='flex flex-col items-center justify-center h-full'>
              <img 
                src={logo} 
                alt="FundFlow Logo"
                className="w-[100px] h-[100px] mb-6" 
              />
              <h1 className='font-Poleno text-6xl text-black text-shadow-md animate-fadeIn'>
                Your Money Matters
              </h1>
              <h6 className='text-2xl text-[#d9d6ba] mt-4 animate-fadeIn delay-200'>
                Let’s turn Small Investments into Big Gains
              </h6>
            </div>
          </ParallaxLayer>

          <ParallaxLayer 
            offset={1} 
            speed={0.1} 
            factor={1}
            className='h-screen m-0 p-0 flex items-center justify-center'
          >
            <img src={buildings} alt="Buildings" className="absolute bottom-0 w-full" />
          </ParallaxLayer>

          <ParallaxLayer 
            offset={1} 
            speed={2}
            factor={1.5}
            className='h-screen m-0 p-0'
          >
            <Login onLogin={handleLogin} /> {/* Pass handleLogin to Login component */}
          </ParallaxLayer>
        </Parallax>
      </div>
    );
  }

  // Main content if authenticated
  return (
    <div className="app-content">
      <h1>Welcome to FundFlow</h1>
      <button onClick={handleLogout}>Logout</button>
      {/* Additional authenticated content can go here */}
    </div>
  );
}

export default App;
