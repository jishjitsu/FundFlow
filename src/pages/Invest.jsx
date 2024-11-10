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
        { id: 1, name: "DeepMind Aurora", description: "Cutting-edge AI technologies.", price: "₹199.99", fundsGenerated: "₹5,000", minimumInvestment: "₹20,000", daysLeft: 15 },
        { id: 2, name: "IonQ Systems", description: "Commercial quantum computing solutions.", price: "₹299.99", fundsGenerated: "₹10,000", minimumInvestment: "₹50,000", daysLeft: 30 },
        { id: 3, name: "Polygon Labs", description: "Blockchain innovations.", price: "₹249.99", fundsGenerated: "₹7,000", minimumInvestment: "₹25,000", daysLeft: 10 }
      ]
    },
    {
      name: "Healthcare",
      description: "Opportunities in healthcare innovation",
      products: [
        { id: 10, name: "Intuitive Surgical", description: "Innovative medical devices.", price: "₹299.99", fundsGenerated: "₹8,000", minimumInvestment: "₹25,000", daysLeft: 20 },
        { id: 11, name: "Moderna Tech", description: "Pharmaceutical advancements.", price: "₹500.00", fundsGenerated: "₹10,000", minimumInvestment: "₹30,000", daysLeft: 45 },
        { id: 12, name: "Fitbit Care", description: "Apps for health monitoring.", price: "₹150.00", fundsGenerated: "₹90,000", minimumInvestment: "₹1,50,000", daysLeft: 10 }
      ]
    },
    {
      name: "Games",
      description: "Invest in stunning concepts",
      products: [
        { id: 19, name: "Supercell Next", description: "Trending mobile games.", price: "₹49.99", fundsGenerated: "₹3,000", minimumInvestment: "₹10,500", daysLeft: 20 },
        { id: 20, name: "Steam Deck", description: "High-quality PC games.", price: "₹69.99", fundsGenerated: "₹5,000", minimumInvestment: "₹15,000", daysLeft: 35 },
        { id: 21, name: "Meta Quest Pro", description: "Immersive VR experiences.", price: "₹99.99", fundsGenerated: "₹4,000", minimumInvestment: "₹20,000", daysLeft: 15 }
      ]
    },
    {
      name: "Film",
      description: "Invest in innovative film productions",
      products: [
        { id: 28, name: "Netflix originals", description: "Engaging documentaries.", price: "₹75.00", fundsGenerated: "₹2,000", minimumInvestment: "₹8,000", daysLeft: 15 },
        { id: 29, name: "Vimeo Select", description: "Creative short films.", price: "₹40.00", fundsGenerated: "₹100", minimumInvestment: "₹5,000", daysLeft: 10 },
        { id: 30, name: "A24 Films", description: "High-budget features.", price: "₹500.00", fundsGenerated: "₹1,000", minimumInvestment: "₹50,000", daysLeft: 60 }
      ]
    },
    {
      name: "Clothing",
      description: "Invest in sustainable and innovative clothing brands",
      products: [
        { id: 37, name: "Patagonia Green", description: "Eco-friendly cotton clothing.", price: "₹40.00", fundsGenerated: "₹2,000", minimumInvestment: "₹10,000", daysLeft: 20 },
        { id: 38, name: "Lulumelon Echo", description: "Activewear made from recycled materials.", price: "₹55.00", fundsGenerated: "₹3,000", minimumInvestment: "₹12,000", daysLeft: 25 },
        { id: 39, name: "Everlane Denim", description: "Environmentally responsible denim.", price: "₹80.00", fundsGenerated: "₹500", minimumInvestment: "₹20,000", daysLeft: 30 }
      ]
    },
    {
      name: "Industrial",
      description: "Investment opportunities in advanced industrial solutions",
      products: [
        { id: 46, name: "Boston Dynamics", description: "Automated robotics for industry.", price: "₹1200.00", fundsGenerated: "₹1,500,000", minimumInvestment: "₹7,50,0000", daysLeft: 45 },
        { id: 47, name: "Tesla Factory", description: "Sustainable production processes.", price: "₹600.00", fundsGenerated: "₹7,00,000", minimumInvestment: "₹3,50,00,000", daysLeft: 20 },
        { id: 48, name: "Stratasys Pro", description: "Industrial-grade 3D printing.", price: "₹800.00", fundsGenerated: "₹1,000,000", minimumInvestment: "₹50,00,000", daysLeft: 30 }
      ]
    },
    {
      name: "Food",
      description: "Innovative investments in food tech and sustainable agriculture",
      products: [
        { id: 55, name: "Beyond Meat", description: "Delicious plant-based alternatives.", price: "₹20.00", fundsGenerated: "₹5,000", minimumInvestment: "₹20,000", daysLeft: 18 },
        { id: 56, name: "Aerofarms", description: "Urban agriculture for fresh produce.", price: "₹75.00", fundsGenerated: "₹3,000", minimumInvestment: "₹15,000", daysLeft: 28 },
        { id: 57, name: "Kind Snacks", description: "Healthy and organic snacks.", price: "₹15.00", fundsGenerated: "₹2,000", minimumInvestment: "₹10,000", daysLeft: 15 }
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