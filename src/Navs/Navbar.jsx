// src/components/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onLogout }) => {
  return (
    <nav className="bg-[#9fd256bc] text-white p-4 flex justify-between items-center w-full">
      <h1 className="text-black text-2xl font-semibold">FundFlow</h1>
      <div className="flex space-x-4">
        <Link to="/dashboard" className="text-black hover:underline">Invest</Link>
        <Link to="/pages/Analytics" className="text-black hover:underline">Analytics</Link>
        <Link to="/pages/Message" className="text-black hover:underline">Message</Link>
        <Link to="./pages/Learn" className="text-black hover:underline">Learn</Link>
        <button 
          onClick={onLogout} 
          className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};     

export default Navbar;
