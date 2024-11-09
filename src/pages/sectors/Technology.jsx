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
  { name: "Food", description: "Invest in Food and Beverages" },
  { name: "Clothing", description: "Invest in Drip" },
  { name: "Industrial", description: "Invest in innovative products" },
  { name: "Nonprofit", description: "Invest in helping humanity" },
];

const products = [
  { 
    id: 1, 
    name: "AI Revolution", 
    description: "Investment in cutting-edge AI technologies.", 
    price: "$199.99", 
    image: "/images/ai-revolution.jpg", 
    fundsGenerated: "$500,000", 
    minimumInvestment: "$20,000", 
    daysLeft: 15 
  },
  { 
    id: 2, 
    name: "Quantum Computing", 
    description: "Invest in next-gen quantum computing startups.", 
    price: "$299.99", 
    image: "/images/quantum-computing.jpg", 
    fundsGenerated: "$1,000,000", 
    minimumInvestment: "$50,000", 
    daysLeft: 30 
  },
  { 
    id: 3, 
    name: "Smart Cities", 
    description: "Investment in smart city infrastructure projects.", 
    price: "$99.99", 
    image: "/images/smart-cities.jpg", 
    fundsGenerated: "$300,000", 
    minimumInvestment: "$10,000", 
    daysLeft: 40 
  },
  { 
    id: 4, 
    name: "Blockchain Innovations", 
    description: "Funding blockchain startups and products.", 
    price: "$249.99", 
    image: "/images/blockchain-innovations.jpg", 
    fundsGenerated: "$750,000", 
    minimumInvestment: "$25,000", 
    daysLeft: 10 
  },
  { 
    id: 5, 
    name: "VR Gaming", 
    description: "Invest in virtual reality gaming technology.", 
    price: "$149.99", 
    image: "/images/vr-gaming.jpg", 
    fundsGenerated: "$200,000", 
    minimumInvestment: "$15,000", 
    daysLeft: 25 
  },
  { 
    id: 6, 
    name: "Space Exploration", 
    description: "Invest in commercial space travel and exploration.", 
    price: "$500.00", 
    image: "/images/space-exploration.jpg", 
    fundsGenerated: "$2,000,000", 
    minimumInvestment: "$100,000", 
    daysLeft: 50 
  },
  { 
    id: 7, 
    name: "5G Networks", 
    description: "Investment in the future of 5G network infrastructure.", 
    price: "$199.99", 
    image: "/images/5g-networks.jpg", 
    fundsGenerated: "$600,000", 
    minimumInvestment: "$30,000", 
    daysLeft: 20 
  },
  { 
    id: 8, 
    name: "Autonomous Vehicles", 
    description: "Invest in self-driving car technologies and companies.", 
    price: "$249.99", 
    image: "/images/autonomous-vehicles.jpg", 
    fundsGenerated: "$1,500,000", 
    minimumInvestment: "$40,000", 
    daysLeft: 60 
  },
  { 
    id: 9, 
    name: "Edge Computing", 
    description: "Investment in decentralized edge computing technologies.", 
    price: "$299.99", 
    image: "/images/edge-computing.jpg", 
    fundsGenerated: "$850,000", 
    minimumInvestment: "$20,000", 
    daysLeft: 35 
  },
];

const Technology = () => {
  const navigate = useNavigate();
  const [selectedSector, setSelectedSector] = useState("Technology");

  const handleSectorChange = (event) => {
    const sectorName = event.target.value;
    setSelectedSector(sectorName);
    if (sectorName) {
      navigate(`/sectors/${sectorName.toLowerCase().replace(" ", "-")}`);
    }
  };

  const handleProductClick = (id) => {
    // Navigate to the product detail page with the product ID
    navigate(`/products/${id}`);
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-semibold mb-4">Technology Investments</h1>
      <p>Explore groundbreaking technology projects and innovations.</p>

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

      {/* Product Cards */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-300 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            onClick={() => handleProductClick(product.id)}
          >
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded mb-4" />
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p className="text-gray-600 mt-2">{product.description}</p>
            <p className="text-lg font-semibold mt-4">{product.price}</p>

            {/* New Fields */}
            <div className="mt-4">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Funds Generated:</span>
                <span>{product.fundsGenerated}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>Minimum Investment:</span>
                <span>{product.minimumInvestment}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>Days Left:</span>
                <span>{product.daysLeft} days</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technology;
