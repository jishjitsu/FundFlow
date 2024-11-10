import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedSector, setSelectedSector] = useState(location.pathname.split('/')[2] || "");

  const sectors = [
    {
      name: "Technology",
      description: "Investment in tech startups and projects",
      products: [
        { id: 1, name: "AI Systems", description: "Cutting-edge AI technologies.", price: "₹199.99", fundsGenerated: "₹500,000", minimumInvestment: "₹20,000", daysLeft: 15 },
        { id: 2, name: "Quantum Computing", description: "Next-gen quantum computing.", price: "₹299.99", fundsGenerated: "₹1,000,000", minimumInvestment: "₹50,000", daysLeft: 30 },
        { id: 3, name: "Blockchain Tech", description: "Blockchain innovations.", price: "₹249.99", fundsGenerated: "₹750,000", minimumInvestment: "₹25,000", daysLeft: 10 }
      ]
    },
    {
      name: "Healthcare",
      description: "Opportunities in healthcare innovation",
      products: [
        { id: 10, name: "Medical Devices", description: "Innovative medical devices.", price: "₹299.99", fundsGenerated: "₹800,000", minimumInvestment: "₹25,000", daysLeft: 20 },
        { id: 11, name: "Pharmaceuticals", description: "Pharmaceutical advancements.", price: "₹500.00", fundsGenerated: "₹1,200,000", minimumInvestment: "₹30,000", daysLeft: 45 },
        { id: 12, name: "Health Apps", description: "Apps for health monitoring.", price: "₹50.00", fundsGenerated: "₹100,000", minimumInvestment: "₹5,000", daysLeft: 10 }
      ]
    },
    {
      name: "Games",
      description: "Invest in stunning concepts",
      products: [
        { id: 19, name: "Mobile Games", description: "Trending mobile games.", price: "₹49.99", fundsGenerated: "₹300,000", minimumInvestment: "₹10,000", daysLeft: 20 },
        { id: 20, name: "PC Games", description: "High-quality PC games.", price: "₹69.99", fundsGenerated: "₹500,000", minimumInvestment: "₹15,000", daysLeft: 35 },
        { id: 21, name: "VR Games", description: "Immersive VR experiences.", price: "₹99.99", fundsGenerated: "₹400,000", minimumInvestment: "₹20,000", daysLeft: 15 }
      ]
    },
    {
      name: "Film",
      description: "Invest in innovative film productions",
      products: [
        { id: 28, name: "Documentary Films", description: "Engaging documentaries.", price: "₹75.00", fundsGenerated: "₹200,000", minimumInvestment: "₹8,000", daysLeft: 15 },
        { id: 29, name: "Short Films", description: "Creative short films.", price: "₹40.00", fundsGenerated: "₹120,000", minimumInvestment: "₹5,000", daysLeft: 10 },
        { id: 30, name: "Feature Films", description: "High-budget features.", price: "₹500.00", fundsGenerated: "₹1,000,000", minimumInvestment: "₹50,000", daysLeft: 60 }
      ]
    },
    {
      name: "Clothing",
      description: "Invest in sustainable and innovative clothing brands",
      products: [
        { id: 37, name: "Organic Cotton Apparel", description: "Eco-friendly cotton clothing.", price: "₹40.00", fundsGenerated: "₹250,000", minimumInvestment: "₹10,000", daysLeft: 20 },
        { id: 38, name: "Recycled Fabric Activewear", description: "Activewear made from recycled materials.", price: "₹55.00", fundsGenerated: "₹300,000", minimumInvestment: "₹12,000", daysLeft: 25 },
        { id: 39, name: "Sustainable Denim", description: "Environmentally responsible denim.", price: "₹80.00", fundsGenerated: "₹500,000", minimumInvestment: "₹20,000", daysLeft: 30 }
      ]
    },
    {
      name: "Industrial",
      description: "Investment opportunities in advanced industrial solutions",
      products: [
        { id: 46, name: "Smart Robotics", description: "Automated robotics for industry.", price: "₹1,200.00", fundsGenerated: "₹1,500,000", minimumInvestment: "₹75,000", daysLeft: 45 },
        { id: 47, name: "Eco-Friendly Manufacturing", description: "Sustainable production processes.", price: "₹600.00", fundsGenerated: "₹700,000", minimumInvestment: "₹35,000", daysLeft: 20 },
        { id: 48, name: "3D Printing Solutions", description: "Industrial-grade 3D printing.", price: "₹800.00", fundsGenerated: "₹1,000,000", minimumInvestment: "₹50,000", daysLeft: 30 }
      ]
    },
    {
      name: "Food",
      description: "Innovative investments in food tech and sustainable agriculture",
      products: [
        { id: 55, name: "Plant-Based Meat", description: "Delicious plant-based alternatives.", price: "₹20.00", fundsGenerated: "₹500,000", minimumInvestment: "₹20,000", daysLeft: 18 },
        { id: 56, name: "Vertical Farming", description: "Urban agriculture for fresh produce.", price: "₹75.00", fundsGenerated: "₹300,000", minimumInvestment: "₹15,000", daysLeft: 28 },
        { id: 57, name: "Organic Snack Brands", description: "Healthy and organic snacks.", price: "₹15.00", fundsGenerated: "₹200,000", minimumInvestment: "₹10,000", daysLeft: 15 }
      ]
    }
  ];

  const handleSectorChange = (event) => {
    const sectorName = event.target.value;
    setSelectedSector(sectorName);
    if (sectorName) {
      navigate(`/sectors/${sectorName.toLowerCase().replace(/\s+/g, "-")}`);
    }
  };

  const ProjectGrid = ({ products, title }) => (
    <div className="mb-16">
      <h2 className="text-3xl font-bold mb-8">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="relative group cursor-pointer" 
            onClick={() => navigate(`/products/${product.id}`)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 rounded-xl transform transition-all duration-200 group-hover:scale-[0.99]" />
            <div className="relative bg-gray-900 p-6 rounded-xl transform transition-all duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
              <div className="absolute mb-4 right-4 text-sm font-bold">
                <h3>Equity</h3>
                {product.daysLeft} %
              </div>
              <h3 className="text-xl font-bold">{product.name}</h3>
              <p className="text-gray-400 mb-4">{product.description}</p>
              <div className="flex justify-between items-center text-sm">
                <div>
                  <div className="font-bold text-green-500">{product.fundsGenerated}</div>
                  <div className="text-gray-500">Raised</div>
                </div>
                <div>
                  <div className="font-bold">{Math.floor(Math.random() * 100 + 10)}</div>
                  <div className="text-gray-500">Investors</div>
                </div>
                <div>
                  <div className="font-bold text-blue-500">{product.minimumInvestment}</div>
                  <div className="text-gray-500">Min. Investment</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">INVESTMENT OPPORTUNITIES</h1>
          <select
            className="bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedSector}
            onChange={handleSectorChange}
          >
            <option value="">Select an Investment Sector</option>
            {sectors.map((sector) => (
              <option key={sector.name} value={sector.name}>
                {sector.name}
              </option>
            ))}
          </select>
        </div>

        {sectors.map((sector, index) => (
          <ProjectGrid 
            key={sector.name}
            products={sector.products}
            title={sector.name.toUpperCase()}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;