// src/components/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onLogout }) => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center w-full">
      <h1 className="text-2xl font-semibold">FundFlow</h1>
      <div className="flex space-x-4">
        <Link to="/pages/sectors" className="hover:underline">Invest</Link>
        <Link to="/pages/Analytics" className="hover:underline">Analytics</Link>
        <Link to="/pages/Message" className="hover:underline">Message</Link>
        <Link to="./pages/Learn" className="hover:underline">Learn</Link>
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
