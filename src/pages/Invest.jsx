import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedSector, setSelectedSector] = useState(location.pathname.split('/')[2] || "");

  const sectors = [
    {
      name: "Technology",
      description: "Investment in tech startups and projects",
      products: [
        { id: 1, refId: 1, name: "AI Systems", description: "Cutting-edge AI technologies.", fundsGenerated: "₹2,500,000", minimumInvestment: " ₹ 50,000", daysLeft: 15 },
        { id: 2, refId: 2, name: "Quantum Computing", description: "Next-gen quantum computing solutions.", fundsGenerated: "₹1,800,000", minimumInvestment: "₹75,000", daysLeft: 30 },
        { id: 3, refId: 3, name: "Blockchain Security", description: "Advanced blockchain security protocols.", fundsGenerated: "₹1,500,000", minimumInvestment: "₹40,000", daysLeft: 20 }
      ]
    },
    {
      name: "Environment",
      description: "Environmental preservation and sustainability",
      products: [
        { id: 4, refId: 64, name: "Ocean Cleanup Tech", description: "Advanced systems for ocean plastic removal.", fundsGenerated: "₹1,200,000", minimumInvestment: "₹30,000", daysLeft: 45 },
        { id: 5, refId: 65, name: "Carbon Capture", description: "Innovative carbon capture technology.", fundsGenerated: "₹900,000", minimumInvestment: "₹25,000", daysLeft: 35 },
        { id: 6, refId: 66, name: "Smart Agriculture", description: "AI-powered sustainable farming.", fundsGenerated: "₹800,000", minimumInvestment: "₹20,000", daysLeft: 25 }
      ]
    },
    {
      name: "Nonprofit",
      description: "Social impact initiatives",
      products: [
        { id: 7, refId: 82, name: "Global Education", description: "Digital education platform for underserved regions.", fundsGenerated: "₹700,000", minimumInvestment: "₹15,000", daysLeft: 40 },
        { id: 8, refId: 83, name: "Healthcare AI", description: "AI diagnostics for remote areas.", fundsGenerated: "₹600,000", minimumInvestment: "₹18,000", daysLeft: 30 },
        { id: 9, refId: 84, name: "Clean Water Tech", description: "Advanced water purification systems.", fundsGenerated: "₹500,000", minimumInvestment: "₹12,000", daysLeft: 20 }
      ]
    }
  ];

  const handleSectorChange = (event) => {
    const sectorName = event.target.value;
    setSelectedSector(sectorName);
    if (sectorName) {
      navigate(`/sectors/${sectorName.toLowerCase().replace(" ", "-")}`);
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
            onClick={() => navigate(`/products/${product.refId}`)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 rounded-xl transform transition-all duration-200 group-hover:scale-[0.99]" />
            <div className="relative bg-gray-900 p-6 rounded-xl transform transition-all duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
              <div className="absolute top-4 right-4 text-sm font-bold">
                {product.daysLeft} DAYS LEFT
              </div>
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-400 mb-4">{product.description}</p>
              <div className="flex justify-between items-center text-sm">
                <div>
                  <div className="font-bold text-green-500">{product.fundsGenerated}</div>
                  <div className="text-gray-500">Raised</div>
                </div>
                <div>
                  <div className="font-bold">{Math.floor(Math.random() * 1000 + 100)}</div>
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

        <ProjectGrid 
          products={sectors[0].products} 
          title="MOST FUNDED TECH PROJECTS" 
        />
        
        <ProjectGrid 
          products={sectors[1].products} 
          title="TOP ENVIRONMENTAL INITIATIVES" 
        />
        
        <ProjectGrid 
          products={sectors[2].products} 
          title="LEADING NONPROFIT VENTURES" 
        />
      </div>
    </div>
  );
};

export default Dashboard;