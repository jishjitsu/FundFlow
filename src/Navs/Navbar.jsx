import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; // Make sure this file is correctly referenced

const Navbar = ({ onLogout }) => {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center w-full">
      <h1 className="text-gradient text-2xl font-semibold">FundFlow</h1>
      <div className="flex space-x-4">
        <Link
          to="/pages/analytics"
          className="navbar-link"
        >
          Dashboard
        </Link>
        <Link
          to="/invest"
          className="navbar-link"
        >
          Invest
        </Link>
        <Link
          to="/pages/Message"
          className="navbar-link"
        >
          Message
        </Link>
        <Link
          to="./pages/Learn"
          className="navbar-link learn"
        >
          Learn
        </Link>
        <button
          onClick={onLogout}
          className="navbar-button"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
