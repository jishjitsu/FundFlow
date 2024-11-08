// src/pages/Dashboard.jsx

import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const sectors = [
  { name: "Technology", description: "Investment in tech startups and projects" },
  { name: "Healthcare", description: "Opportunities in healthcare innovation" },
  { name: "Games", description: "Invest in stunning concepts" },
  { name: "Film", description: "Creative projects and startups" },
  { name: "Environment", description: "Eco-friendly and sustainable initiatives" },
  { name: "Art", description: "Invest in Art and Crafts" }
];

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedSector, setSelectedSector] = useState(location.pathname.split('/')[2] || "");

  const handleSectorChange = (event) => {
    const sectorName = event.target.value;
    setSelectedSector(sectorName);
    if (sectorName) {
      navigate(`/sectors/${sectorName.toLowerCase().replace(" ", "-")}`);
    }
  };

  let sectorContent = null;
  const sectorPath = location.pathname.split('/')[2]; // Get the current sector from the URL
  if (sectorPath) {
    const sector = sectors.find((s) => s.name.toLowerCase().replace(" ", "-") === sectorPath);
    sectorContent = sector ? (
      <div className="sector-details">
        <h2 className="text-2xl font-bold">{sector.name}</h2>
        <p>{sector.description}</p>
      </div>
    ) : (
      <p>Please select a valid sector.</p>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12">
      <h1 className="text-3xl font-semibold mb-10">Select an Investment Sector</h1>

      {/* Dropdown to select a sector */}
      <select
        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        value={selectedSector}
        onChange={handleSectorChange}
      >
        <option value="">Choose a sector</option>
        {sectors.map((sector) => (
          <option key={sector.name} value={sector.name}>
            {sector.name}
          </option>
        ))}
      </select>

      {/* Render sector-specific content */}
      <div className="sector-content mt-6">
        {sectorContent || <p className="text-center">Please select a sector above.</p>}
      </div>
    </div>
  );
};

export default Dashboard;
