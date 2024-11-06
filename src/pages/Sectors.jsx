// src/pages/SectorsPage.jsx

import React from 'react';
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

  const handleCardClick = (sectorName) => {
    navigate(`/sectors/${sectorName.toLowerCase().replace(" ", "-")}`);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-12">
      <h1 className="text-3xl font-semibold mb-10">Investment Sectors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        {sectors.map((sector) => (
          <div
            key={sector.name}
            className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => handleCardClick(sector.name)}
          >
            <h2 className="text-xl font-bold mb-2">{sector.name}</h2>
            <p className="text-gray-700">{sector.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sectors;
