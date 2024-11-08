// src/pages/sectors/Technology.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const sectors = [
  { name: "Technology", description: "Investment in tech startups and projects" },
  { name: "Healthcare", description: "Opportunities in healthcare innovation" },
  { name: "Games", description: "Invest in stunning concepts" },
  { name: "Film", description: "Creative projects and startups" },
  { name: "Environment", description: "Eco-friendly and sustainable initiatives" },
  { name: "Education", description: "Invest in Education startups" },
  {name: "Food", description: "Invest in Food and Beverages"},
  {name: "Clothing", description: "Invest in Drip"},
  {name: "Industrial", description: "Invest in innovative products"},
  {name: "Nonprofit", description: "Invest in helping humanity"},
];

const Healthcare = () => {
  const navigate = useNavigate();
  const [selectedSector, setSelectedSector] = useState("Healthcare");

  const handleSectorChange = (event) => {
    const sectorName = event.target.value;
    setSelectedSector(sectorName);
    if (sectorName) {
      navigate(`/sectors/${sectorName.toLowerCase().replace(" ", "-")}`);
    }
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-semibold mb-4">Healthcare Investments</h1>
      <p>Explore the innovations in the sector of healthcare.</p>

      {/* Dropdown to select a sector */}
      <select
        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 mt-6"
        value={selectedSector}
        onChange={handleSectorChange}
      >
        {sectors.map((sector) => (
          <option key={sector.name} value={sector.name}>
            {sector.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Healthcare;
