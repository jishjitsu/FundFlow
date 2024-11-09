// src/pages/SectorDetails.jsx

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const sectors = [
    { 
      name: "Technology", 
      description: "Investment in tech startups and projects",
      products: [
        { id: 1, name: "DeepMind Aurora", description: "Advanced AI research and development platform.", price: "₹199.99", image: "/images/ai-systems.jpg", fundsGenerated: "₹500,000", minimumInvestment: "₹20,000", daysLeft: 15 },
        { id: 2, name: "IonQ Systems", description: "Commercial quantum computing solutions.", price: "₹299.99", image: "/images/quantum-computing.jpg", fundsGenerated: "₹1,000,000", minimumInvestment: "₹50,000", daysLeft: 30 },
        { id: 3, name: "Polygon Labs", description: "Blockchain scaling solutions.", price: "₹249.99", image: "/images/blockchain-tech.jpg", fundsGenerated: "₹750,000", minimumInvestment: "₹25,000", daysLeft: 10 },
        { id: 4, name: "Sidewalk Labs", description: "Urban innovation organization.", price: "₹99.99", image: "/images/smart-cities.jpg", fundsGenerated: "₹300,000", minimumInvestment: "₹10,000", daysLeft: 40 },
        { id: 5, name: "Oculus Quest", description: "VR gaming and metaverse platform.", price: "₹149.99", image: "/images/vr-gaming.jpg", fundsGenerated: "₹200,000", minimumInvestment: "₹15,000", daysLeft: 25 },
        { id: 6, name: "Fastly Edge", description: "Edge computing infrastructure.", price: "₹299.99", image: "/images/edge-computing.jpg", fundsGenerated: "₹850,000", minimumInvestment: "₹20,000", daysLeft: 35 },
        { id: 7, name: "Qualcomm Nexus", description: "5G network solutions.", price: "₹199.99", image: "/images/5g-networks.jpg", fundsGenerated: "₹600,000", minimumInvestment: "₹30,000", daysLeft: 20 },
        { id: 8, name: "Waymo Drive", description: "Autonomous driving technology.", price: "₹249.99", image: "/images/autonomous-vehicles.jpg", fundsGenerated: "₹1,500,000", minimumInvestment: "₹40,000", daysLeft: 60 },
        { id: 9, name: "Particle IoT", description: "IoT development platform.", price: "₹120.00", image: "/images/iot-devices.jpg", fundsGenerated: "₹450,000", minimumInvestment: "₹15,000", daysLeft: 18 }
      ]
    },
    { 
      name: "Healthcare", 
      description: "Opportunities in healthcare innovation",
      products: [
        { id: 10, name: "Intuitive Surgical", description: "Robotic surgery systems.", price: "₹299.99", image: "/images/medical-devices.jpg", fundsGenerated: "₹800,000", minimumInvestment: "₹25,000", daysLeft: 20 },
        { id: 11, name: "Moderna Tech", description: "mRNA therapeutics.", price: "₹500.00", image: "/images/pharmaceuticals.jpg", fundsGenerated: "₹1,200,000", minimumInvestment: "₹30,000", daysLeft: 45 },
        { id: 12, name: "Fitbit Care", description: "Health tracking platform.", price: "₹50.00", image: "/images/health-apps.jpg", fundsGenerated: "₹100,000", minimumInvestment: "₹5,000", daysLeft: 10 },
        { id: 13, name: "Teladoc Health", description: "Virtual healthcare services.", price: "₹250.00", image: "/images/telemedicine.jpg", fundsGenerated: "₹400,000", minimumInvestment: "₹20,000", daysLeft: 22 },
        { id: 14, name: "Apple Health+", description: "Advanced health wearables.", price: "₹180.00", image: "/images/wearable-tech.jpg", fundsGenerated: "₹700,000", minimumInvestment: "₹15,000", daysLeft: 28 },
        { id: 15, name: "Illumina Genesis", description: "Genomic sequencing solutions.", price: "₹600.00", image: "/images/biotechnology.jpg", fundsGenerated: "₹1,500,000", minimumInvestment: "₹50,000", daysLeft: 40 },
        { id: 16, name: "BetterHelp Pro", description: "Online therapy platform.", price: "₹99.00", image: "/images/mental-health.jpg", fundsGenerated: "₹200,000", minimumInvestment: "₹8,000", daysLeft: 30 },
        { id: 17, name: "Herbalife Next", description: "Advanced nutrition solutions.", price: "₹150.00", image: "/images/nutritional-products.jpg", fundsGenerated: "₹400,000", minimumInvestment: "₹10,000", daysLeft: 35 },
        { id: 18, name: "23andMe Plus", description: "Personal genomics service.", price: "₹750.00", image: "/images/genomics.jpg", fundsGenerated: "₹2,000,000", minimumInvestment: "₹60,000", daysLeft: 60 }
      ]
    },
    { 
      name: "Games", 
      description: "Invest in stunning concepts",
      products: [
        { id: 19, name: "Supercell Next", description: "Mobile gaming studio.", price: "₹49.99", image: "/images/mobile-games.jpg", fundsGenerated: "₹300,000", minimumInvestment: "₹10,000", daysLeft: 20 },
        { id: 20, name: "Steam Deck", description: "PC gaming platform.", price: "₹69.99", image: "/images/pc-games.jpg", fundsGenerated: "₹500,000", minimumInvestment: "₹15,000", daysLeft: 35 },
        { id: 21, name: "Meta Quest Pro", description: "VR gaming system.", price: "₹99.99", image: "/images/vr-games.jpg", fundsGenerated: "₹400,000", minimumInvestment: "₹20,000", daysLeft: 15 },
        { id: 22, name: "Xbox Infinity", description: "Next-gen gaming console.", price: "₹59.99", image: "/images/console-games.jpg", fundsGenerated: "₹700,000", minimumInvestment: "₹25,000", daysLeft: 40 },
        { id: 23, name: "ESL Gaming", description: "Esports tournament platform.", price: "₹150.00", image: "/images/esports.jpg", fundsGenerated: "₹600,000", minimumInvestment: "₹30,000", daysLeft: 25 },
        { id: 24, name: "Twitch Prime", description: "Game streaming service.", price: "₹120.00", image: "/images/game-streaming.jpg", fundsGenerated: "₹200,000", minimumInvestment: "₹15,000", daysLeft: 18 },
        { id: 25, name: "Itch.io Plus", description: "Indie game marketplace.", price: "₹39.99", image: "/images/indie-games.jpg", fundsGenerated: "₹100,000", minimumInvestment: "₹5,000", daysLeft: 12 },
        { id: 26, name: "Niantic Next", description: "AR gaming platform.", price: "₹79.99", image: "/images/ar-games.jpg", fundsGenerated: "₹300,000", minimumInvestment: "₹12,000", daysLeft: 28 },
        { id: 27, name: "GeForce Now", description: "Cloud gaming service.", price: "₹89.99", image: "/images/cloud-gaming.jpg", fundsGenerated: "₹400,000", minimumInvestment: "₹18,000", daysLeft: 22 }
      ]
    },
    { 
      name: "Film", 
      description: "Invest in innovative film productions",
      products: [
        { id: 28, name: "Netflix Originals", description: "Original documentary series.", price: "₹75.00", image: "/images/documentary-films.jpg", fundsGenerated: "₹200,000", minimumInvestment: "₹8,000", daysLeft: 15 },
        { id: 29, name: "Vimeo Select", description: "Premium short films.", price: "₹40.00", image: "/images/short-films.jpg", fundsGenerated: "₹120,000", minimumInvestment: "₹5,000", daysLeft: 10 },
        { id: 30, name: "A24 Films", description: "Independent film studio.", price: "₹500.00", image: "/images/feature-films.jpg", fundsGenerated: "₹1,000,000", minimumInvestment: "₹50,000", daysLeft: 60 },
        { id: 31, name: "Pixar Next", description: "Animation studio projects.", price: "₹250.00", image: "/images/film-animation.jpg", fundsGenerated: "₹600,000", minimumInvestment: "₹20,000", daysLeft: 20 },
        { id: 32, name: "Final Draft Cloud", description: "Screenwriting platform.", price: "₹30.00", image: "/images/screenwriting.jpg", fundsGenerated: "₹100,000", minimumInvestment: "₹5,000", daysLeft: 25 },
        { id: 33, name: "Lionsgate Plus", description: "Film production company.", price: "₹400.00", image: "/images/film-production.jpg", fundsGenerated: "₹700,000", minimumInvestment: "₹35,000", daysLeft: 45 },
        { id: 34, name: "Adobe Premier Pro", description: "Post-production suite.", price: "₹150.00", image: "/images/post-production.jpg", fundsGenerated: "₹300,000", minimumInvestment: "₹15,000", daysLeft: 18 },
        { id: 35, name: "MUBI Select", description: "Curated film platform.", price: "₹220.00", image: "/images/film-distribution.jpg", fundsGenerated: "₹500,000", minimumInvestment: "₹20,000", daysLeft: 30 },
        { id: 36, name: "Sundance Lab", description: "Film festival program.", price: "₹60.00", image: "/images/film-festivals.jpg", fundsGenerated: "₹100,000", minimumInvestment: "₹10,000", daysLeft: 40 }
      ]
    },
    {
      name: "Clothing",
      description: "Invest in sustainable and innovative clothing brands.",
      products: [
        { id: 37, name: "Patagonia Green", description: "Sustainable outdoor wear.", price: "₹40.00", image: "/images/organic-cotton.jpg", fundsGenerated: "₹250,000", minimumInvestment: "₹10,000", daysLeft: 20 },
        { id: 38, name: "Lululemon Echo", description: "Eco-friendly activewear.", price: "₹55.00", image: "/images/recycled-activewear.jpg", fundsGenerated: "₹300,000", minimumInvestment: "₹12,000", daysLeft: 25 },
        { id: 39, name: "Everlane Denim", description: "Sustainable denim wear.", price: "₹80.00", image: "/images/sustainable-denim.jpg", fundsGenerated: "₹500,000", minimumInvestment: "₹20,000", daysLeft: 30 },
        { id: 40, name: "Athleta Prime", description: "Premium athleisure brand.", price: "₹120.00", image: "/images/luxury-athleisure.jpg", fundsGenerated: "₹700,000", minimumInvestment: "₹25,000", daysLeft: 40 },
        { id: 41, name: "Bamboo Basics", description: "Eco-friendly essentials.", price: "₹45.00", image: "/images/bamboo-fiber.jpg", fundsGenerated: "₹400,000", minimumInvestment: "₹15,000", daysLeft: 15 },
        { id: 42, name: "Nike Dimension", description: "3D printed sportswear.", price: "₹150.00", image: "/images/3d-fashion.jpg", fundsGenerated: "₹600,000", minimumInvestment: "₹30,000", daysLeft: 50 },
        { id: 43, name: "Allbirds Next", description: "Sustainable footwear.", price: "₹100.00", image: "/images/biodegradable-sneakers.jpg", fundsGenerated: "₹500,000", minimumInvestment: "₹22,000", daysLeft: 35 },
        { id: 44, name: "Supreme Custom", description: "Personalized streetwear.", price: "₹70.00", image: "/images/custom-streetwear.jpg", fundsGenerated: "₹300,000", minimumInvestment: "₹15,000", daysLeft: 28 },
        { id: 45, name: "TheRealReal", description: "Luxury consignment platform.", price: "₹35.00", image: "/images/upcycled-accessories.jpg", fundsGenerated: "₹200,000", minimumInvestment: "₹8,000", daysLeft: 18 }
      ]
    },
    {
      name: "Industrial",
      description: "Investment opportunities in advanced industrial solutions.",
      products: [
        { id: 46, name: "Boston Dynamics", description: "Advanced robotics systems.", price: "₹1,200.00", image: "/images/smart-robotics.jpg", fundsGenerated: "₹1,500,000", minimumInvestment: "₹75,000", daysLeft: 45 },
        { id: 47, name: "Tesla Factory", description: "Sustainable manufacturing.", price: "₹600.00", image: "/images/eco-manufacturing.jpg", fundsGenerated: "₹700,000", minimumInvestment: "₹35,000", daysLeft: 20 },
        { id: 48, name: "Stratasys Pro", description: "Industrial 3D printing.", price: "₹800.00", image: "/images/3d-printing-solutions.jpg", fundsGenerated: "₹1,000,000", minimumInvestment: "₹50,000", daysLeft: 30 },
        { id: 49, name: "Blue Yonder", description: "AI-powered logistics platform.", price: "₹450.00", image: "/images/ai-logistics.jpg", fundsGenerated: "₹600,000", minimumInvestment: "₹25,000", daysLeft: 25 },
        { id: 50, name: "Interface FLOR", description: "Sustainable building materials.", price: "₹300.00", image: "/images/green-materials.jpg", fundsGenerated: "₹400,000", minimumInvestment: "₹15,000", daysLeft: 40 },
        { id: 51, name: "DJI Enterprise", description: "Industrial drone solutions.", price: "₹1,500.00", image: "/images/industrial-drones.jpg", fundsGenerated: "₹2,000,000", minimumInvestment: "₹100,000", daysLeft: 55 },
        { id: 52, name: "Caterpillar Electric", description: "Electric construction equipment.", price: "₹2,500.00", image: "/images/electric-machinery.jpg", fundsGenerated: "₹3,000,000", minimumInvestment: "₹150,000", daysLeft: 60 },
        { id: 53, name: "Carrier Infinity", description: "Smart HVAC systems.", price: "₹500.00", image: "/images/efficient-hvac.jpg", fundsGenerated: "₹800,000", minimumInvestment: "₹40,000", daysLeft: 20 },
        { id: 54, name: "Cognex Vision", description: "Machine vision systems.", price: "₹900.00", image: "/images/quality-control.jpg", fundsGenerated: "₹1,200,000", minimumInvestment: "₹60,000", daysLeft: 35 }
      ]
    },
    {
      name: "Food",
      description: "Innovative investments in food tech and sustainable agriculture.",
      products: [
        { id: 55, name: "Beyond Meat", description: "Plant-based meat alternatives.", price: "₹20.00", image: "/images/plant-meat.jpg", fundsGenerated: "₹500,000", minimumInvestment: "₹20,000", daysLeft: 18 },
        { id: 56, name: "AeroFarms", description: "Vertical farming solutions.", price: "₹75.00", image: "/images/vertical-farming.jpg", fundsGenerated: "₹300,000", minimumInvestment: "₹15,000", daysLeft: 28 },
        { id: 57, name: "Kind Snacks", description: "Healthy snack products.", price: "₹15.00", image: "/images/organic-snacks.jpg", fundsGenerated: "₹200,000", minimumInvestment: "₹10,000", daysLeft: 15 },
        { id: 58, name: "Perfect Day", description: "Animal-free dairy products.", price: "₹30.00", image: "/images/lab-dairy.jpg", fundsGenerated: "₹700,000", minimumInvestment: "₹25,000", daysLeft: 25 },
        { id: 59, name: "John Deere Digital", description: "Smart farming solutions.", price: "₹100.00", image: "/images/precision-agriculture.jpg", fundsGenerated: "₹1,000,000", minimumInvestment: "₹50,000", daysLeft: 35 },
        { id: 60, name: "Brava Home", description: "Smart cooking appliances.", price: "₹250.00", image: "/images/smart-kitchen.jpg", fundsGenerated: "₹500,000", minimumInvestment: "₹30,000", daysLeft: 40 },
        { id: 61, name: "Apeel Sciences", description: "Food preservation tech.", price: "₹80.00", image: "/images/food-waste.jpg", fundsGenerated: "₹400,000", minimumInvestment: "₹15,000", daysLeft: 20 },
        { id: 62, name: "Stevia First", description: "Natural sweetener products.", price: "₹25.00", image: "/images/alt-sweeteners.jpg", fundsGenerated: "₹300,000", minimumInvestment: "₹12,000", daysLeft: 30 },
        { id: 63, name: "Farmigo", description: "Farm-to-consumer platform.", price: "₹120.00", image: "/images/farm-to-table.jpg", fundsGenerated: "₹800,000", minimumInvestment: "₹40,000", daysLeft: 50 }
      ]
    },
    {
      name: "Education",
      description: "Investments in educational technology and resources.",
      products: [
        { id: 73, name: "Coursera Plus", description: "Online learning platform.", price: "₹10.00", image: "/images/online-courses.jpg", fundsGenerated: "₹300,000", minimumInvestment: "₹15,000", daysLeft: 22 },
        { id: 74, name: "ClassVR", description: "VR education platform.", price: "₹90.00", image: "/images/ar-vr-learning.jpg", fundsGenerated: "₹700,000", minimumInvestment: "₹35,000", daysLeft: 40 },
        { id: 75, name: "LeetCode Pro", description: "Coding practice platform.", price: "₹120.00", image: "/images/coding-bootcamp.jpg", fundsGenerated: "₹600,000", minimumInvestment: "₹30,000", daysLeft: 35 },
        { id: 76, name: "KiwiCo", description: "STEM learning kits.", price: "₹50.00", image: "/images/stem-kit.jpg", fundsGenerated: "₹400,000", minimumInvestment: "₹18,000", daysLeft: 28 },
        { id: 77, name: "Udemy Business", description: "Enterprise learning platform.", price: "₹60.00", image: "/images/remote-learning.jpg", fundsGenerated: "₹800,000", minimumInvestment: "₹25,000", daysLeft: 25 },
        { id: 78, name: "MentorMatch", description: "Student mentoring platform.", price: "₹20.00", image: "/images/student-mentorship.jpg", fundsGenerated: "₹250,000", minimumInvestment: "₹12,000", daysLeft: 18 },
        { id: 79, name: "Duolingo Max", description: "Language learning platform.", price: "₹15.00", image: "/images/language-app.jpg", fundsGenerated: "₹300,000", minimumInvestment: "₹10,000", daysLeft: 20 },
        { id: 80, name: "Chegg Study", description: "Digital learning resources.", price: "₹40.00", image: "/images/interactive-textbook.jpg", fundsGenerated: "₹400,000", minimumInvestment: "₹20,000", daysLeft: 30 },
        { id: 81, name: "Unacademy Plus", description: "Test prep platform.", price: "₹200.00", image: "/images/ai-tutors.jpg", fundsGenerated: "₹1,000,000", minimumInvestment: "₹50,000", daysLeft: 45 }
      ]
    }
];

const SectorDetails = () => {
  const { sectorName } = useParams();
  const navigate = useNavigate();
  
  // Find the sector based on the sectorName from URL params
  const sector = sectors.find(s => s.name.toLowerCase() === sectorName.toLowerCase());

  if (!sector) {
    return <p className="text-white">Sector not found</p>;
  }

  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  const handleSectorChange = (event) => {
    const selectedSector = event.target.value;
    navigate(`/sectors/${selectedSector.toLowerCase()}`);
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    minWidth: '100vw',
    backgroundColor: '#000000',
    padding: '20px',
    fontFamily: '"Roboto", sans-serif',
  };

  const headerStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  };

  const cardWrapperStyle = {
    background: 'linear-gradient(49deg, #2d4de0 0, #9f71f0 30%, #fc6277 58%, #f8ef6f 95%)',
    width: '380px',
    height: '350px',
    borderRadius: '12px',
    position: 'relative',
    flex: '0 0 auto',
    cursor: 'pointer',
  };

  const cardContentStyle = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    padding: '40px',
    backgroundColor: '#222222',
    color: '#ffffff',
    borderRadius: '12px',
    transition: '0.2s ease',
    display: 'flex',
    flexDirection: 'column',
  };

  const titleStyle = {
    fontSize: '2.5em',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#ffffff',
  };

  const descriptionStyle = {
    fontSize: '1.1em',
    lineHeight: '1.6',
    color: '#ffffff',
    opacity: '0.9',
  };

  const handleMouseOver = (e) => {
    const card = e.currentTarget;
    const content = card.children[0];
    content.style.inset = '3px';
    content.style.borderRadius = '10px';
  };

  const handleMouseOut = (e) => {
    const card = e.currentTarget;
    const content = card.children[0];
    content.style.inset = '0';
    content.style.borderRadius = '12px';
  };

  return (
    <div style={containerStyle}>
      {/* Header and Dropdown Section */}
      <div style={headerStyle}>
        <h1 style={titleStyle}>{sector.name} Sector</h1>
        <select 
          onChange={handleSectorChange}
          value={sector.name.toLowerCase()}
          className="border border-gray-500 rounded p-2 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {sectors.map((sec, index) => (
            <option key={index} value={sec.name.toLowerCase()} className="bg-gray-800">
              {sec.name}
            </option>
          ))}
        </select>
      </div>

      {/* Sector Description */}
      <p style={descriptionStyle}>{sector.description}</p>

      <h2 style={titleStyle}>Products in {sector.name}</h2>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-6">
        {sector.products.map((product) => (
          <div 
            key={product.id} 
            style={cardWrapperStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={() => handleProductClick(product.id)}
          >
            <div style={cardContentStyle}>
  <img 
    src={product.image} 
    alt={product.name} 
    style={{ width: '100%', height: 'auto', borderRadius: '8px', marginTop: '10px' }}
  />
  <h5 style={{ ...titleStyle, fontSize: '1.5em', textAlign: 'center' }}>{product.name}</h5>  {/* Reduced font size */}
  <p style={ {...descriptionStyle, textAlign: 'center'}}>{product.description}</p>

  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
    <p style={{ ...descriptionStyle, fontSize: '0.9em' }}><strong>Funds Generated:</strong> {product.fundsGenerated}</p>
    <p style={{ ...descriptionStyle, fontSize: '0.9em' }}><strong>Minimum Investment:</strong> {product.minimumInvestment}</p>
    <p style={{ ...descriptionStyle, fontSize: '0.9em' }}><strong>Days Left:</strong> {product.daysLeft} days</p>
  </div>
</div>



          </div>
        ))}
      </div>
    </div>
  );
};

export default SectorDetails;