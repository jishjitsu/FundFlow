// src/pages/SectorsPage.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const sectors = [
  { name: "Technology", description: "Investment in tech startups and projects" },
  { name: "Healthcare", description: "Opportunities in healthcare innovation" },
  { name: "Games", description: "Invest in stunning concepts" },
  { name: "Film", description: "Creative projects and startups" },
  { name: "Environment", description: "Eco-friendly and sustainable initiatives" },
  { name: "Art", description: "Invest in Art and Crafts" }
];

const Sectors = () => {
  const navigate = useNavigate();
  const [selectedSector, setSelectedSector] = useState("");

  const handleSectorChange = (event) => {
    const sectorName = event.target.value;
    if (sectorName) {
      navigate(`/sectors/${sectorName.toLowerCase().replace(" ", "-")}`);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-12">
      <h1 className="text-3xl font-semibold mb-10">Select an Investment Sector</h1>
      <select
        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        value={selectedSector}
        onChange={(event) => {
          setSelectedSector(event.target.value);
          handleSectorChange(event);
        }}
      >
        <option value="">Choose a sector</option>
        {sectors.map((sector) => (
          <option key={sector.name} value={sector.name}>
            {sector.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Sectors;
