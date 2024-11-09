const sectorsData = [
    { 
      name: "Technology", 
      description: "Investment in tech startups and projects",
      products: [
        { id: 1, name: "AI Systems", description: "Cutting-edge AI technologies.", price: "$199.99", image: "/images/ai-systems.jpg", fundsGenerated: "$500,000", minimumInvestment: "$20,000", daysLeft: 15 },
        { id: 2, name: "Quantum Computing", description: "Next-gen quantum computing.", price: "$299.99", image: "/images/quantum-computing.jpg", fundsGenerated: "$1,000,000", minimumInvestment: "$50,000", daysLeft: 30 },
        { id: 3, name: "Blockchain Tech", description: "Blockchain innovations.", price: "$249.99", image: "/images/blockchain-tech.jpg", fundsGenerated: "$750,000", minimumInvestment: "$25,000", daysLeft: 10 },
        { id: 4, name: "Smart Cities", description: "Smart city infrastructure.", price: "$99.99", image: "/images/smart-cities.jpg", fundsGenerated: "$300,000", minimumInvestment: "$10,000", daysLeft: 40 },
        { id: 5, name: "VR Gaming", description: "VR gaming technology.", price: "$149.99", image: "/images/vr-gaming.jpg", fundsGenerated: "$200,000", minimumInvestment: "$15,000", daysLeft: 25 },
        { id: 6, name: "Edge Computing", description: "Decentralized edge computing.", price: "$299.99", image: "/images/edge-computing.jpg", fundsGenerated: "$850,000", minimumInvestment: "$20,000", daysLeft: 35 },
        { id: 7, name: "5G Networks", description: "Future of 5G infrastructure.", price: "$199.99", image: "/images/5g-networks.jpg", fundsGenerated: "$600,000", minimumInvestment: "$30,000", daysLeft: 20 },
        { id: 8, name: "Autonomous Vehicles", description: "Self-driving car tech.", price: "$249.99", image: "/images/autonomous-vehicles.jpg", fundsGenerated: "$1,500,000", minimumInvestment: "$40,000", daysLeft: 60 },
        { id: 9, name: "IoT Devices", description: "Smart IoT devices.", price: "$120.00", image: "/images/iot-devices.jpg", fundsGenerated: "$450,000", minimumInvestment: "$15,000", daysLeft: 18 }
      ]
    },
    { 
      name: "Healthcare", 
      description: "Opportunities in healthcare innovation",
      products: [
        { id: 10, name: "Medical Devices", description: "Innovative medical devices.", price: "$299.99", image: "/images/medical-devices.jpg", fundsGenerated: "$800,000", minimumInvestment: "$25,000", daysLeft: 20 },
        { id: 11, name: "Pharmaceuticals", description: "Pharmaceutical advancements.", price: "$500.00", image: "/images/pharmaceuticals.jpg", fundsGenerated: "$1,200,000", minimumInvestment: "$30,000", daysLeft: 45 },
        { id: 12, name: "Health Apps", description: "Apps for health monitoring.", price: "$50.00", image: "/images/health-apps.jpg", fundsGenerated: "$100,000", minimumInvestment: "$5,000", daysLeft: 10 },
        { id: 13, name: "Telemedicine", description: "Telemedicine platforms.", price: "$250.00", image: "/images/telemedicine.jpg", fundsGenerated: "$400,000", minimumInvestment: "$20,000", daysLeft: 22 },
        { id: 14, name: "Wearable Tech", description: "Wearable health trackers.", price: "$180.00", image: "/images/wearable-tech.jpg", fundsGenerated: "$700,000", minimumInvestment: "$15,000", daysLeft: 28 },
        { id: 15, name: "Biotechnology", description: "Biotech for health.", price: "$600.00", image: "/images/biotechnology.jpg", fundsGenerated: "$1,500,000", minimumInvestment: "$50,000", daysLeft: 40 },
        { id: 16, name: "Mental Health Platforms", description: "Mental health solutions.", price: "$99.00", image: "/images/mental-health.jpg", fundsGenerated: "$200,000", minimumInvestment: "$8,000", daysLeft: 30 },
        { id: 17, name: "Nutritional Products", description: "Innovative nutrition.", price: "$150.00", image: "/images/nutritional-products.jpg", fundsGenerated: "$400,000", minimumInvestment: "$10,000", daysLeft: 35 },
        { id: 18, name: "Genomics", description: "Genetic research projects.", price: "$750.00", image: "/images/genomics.jpg", fundsGenerated: "$2,000,000", minimumInvestment: "$60,000", daysLeft: 60 }
      ]
    },
    { 
      name: "Games", 
      description: "Invest in stunning concepts",
      products: [
        { id: 19, name: "Mobile Games", description: "Trending mobile games.", price: "$49.99", image: "/images/mobile-games.jpg", fundsGenerated: "$300,000", minimumInvestment: "$10,000", daysLeft: 20 },
        { id: 20, name: "PC Games", description: "High-quality PC games.", price: "$69.99", image: "/images/pc-games.jpg", fundsGenerated: "$500,000", minimumInvestment: "$15,000", daysLeft: 35 },
        { id: 21, name: "VR Games", description: "Immersive VR experiences.", price: "$99.99", image: "/images/vr-games.jpg", fundsGenerated: "$400,000", minimumInvestment: "$20,000", daysLeft: 15 },
        { id: 22, name: "Console Games", description: "Games for consoles.", price: "$59.99", image: "/images/console-games.jpg", fundsGenerated: "$700,000", minimumInvestment: "$25,000", daysLeft: 40 },
        { id: 23, name: "E-Sports Platform", description: "Invest in e-sports.", price: "$150.00", image: "/images/esports.jpg", fundsGenerated: "$600,000", minimumInvestment: "$30,000", daysLeft: 25 },
        { id: 24, name: "Game Streaming", description: "Streaming for gamers.", price: "$120.00", image: "/images/game-streaming.jpg", fundsGenerated: "$200,000", minimumInvestment: "$15,000", daysLeft: 18 },
        { id: 25, name: "Indie Games", description: "Innovative indie games.", price: "$39.99", image: "/images/indie-games.jpg", fundsGenerated: "$100,000", minimumInvestment: "$5,000", daysLeft: 12 },
        { id: 26, name: "AR Games", description: "Augmented reality games.", price: "$79.99", image: "/images/ar-games.jpg", fundsGenerated: "$300,000", minimumInvestment: "$12,000", daysLeft: 28 },
        { id: 27, name: "Cloud Gaming", description: "Next-gen cloud gaming.", price: "$89.99", image: "/images/cloud-gaming.jpg", fundsGenerated: "$400,000", minimumInvestment: "$18,000", daysLeft: 22 }
      ]
    },
    { 
      name: "Film", 
      description: "Invest in innovative film productions",
      products: [
        { id: 28, name: "Documentary Films", description: "Engaging documentaries.", price: "$75.00", image: "/images/documentary-films.jpg", fundsGenerated: "$200,000", minimumInvestment: "$8,000", daysLeft: 15 },
        { id: 29, name: "Short Films", description: "Creative short films.", price: "$40.00", image: "/images/short-films.jpg", fundsGenerated: "$120,000", minimumInvestment: "$5,000", daysLeft: 10 },
        { id: 30, name: "Feature Films", description: "High-budget features.", price: "$500.00", image: "/images/feature-films.jpg", fundsGenerated: "$1,000,000", minimumInvestment: "$50,000", daysLeft: 60 },
        { id: 31, name: "Film Animation", description: "Invest in animation.", price: "$250.00", image: "/images/film-animation.jpg", fundsGenerated: "$600,000", minimumInvestment: "$20,000", daysLeft: 20 },
        { id: 32, name: "Screenwriting Projects", description: "Unique screenwriting.", price: "$30.00", image: "/images/screenwriting.jpg", fundsGenerated: "$100,000", minimumInvestment: "$5,000", daysLeft: 25 },
        { id: 33, name: "Film Production", description: "Film production support.", price: "$400.00", image: "/images/film-production.jpg", fundsGenerated: "$700,000", minimumInvestment: "$35,000", daysLeft: 45 },
        { id: 34, name: "Post-Production", description: "Post-production work.", price: "$150.00", image: "/images/post-production.jpg", fundsGenerated: "$300,000", minimumInvestment: "$15,000", daysLeft: 18 },
        { id: 35, name: "Film Distribution", description: "Distribution channels.", price: "$220.00", image: "/images/film-distribution.jpg", fundsGenerated: "$500,000", minimumInvestment: "$20,000", daysLeft: 30 },
        { id: 36, name: "Film Festivals", description: "Film festival entries.", price: "$60.00", image: "/images/film-festivals.jpg", fundsGenerated: "$100,000", minimumInvestment: "$10,000", daysLeft: 40 }
      ]
    },
    {
    name: "Clothing",
    description: "Invest in sustainable and innovative clothing brands.",
    products: [
      { id: 37, name: "Organic Cotton Apparel", description: "Eco-friendly cotton clothing.", price: "$40.00", image: "/images/organic-cotton.jpg", fundsGenerated: "$250,000", minimumInvestment: "$10,000", daysLeft: 20 },
      { id: 38, name: "Recycled Fabric Activewear", description: "Activewear made from recycled materials.", price: "$55.00", image: "/images/recycled-activewear.jpg", fundsGenerated: "$300,000", minimumInvestment: "$12,000", daysLeft: 25 },
      { id: 39, name: "Sustainable Denim", description: "Environmentally responsible denim.", price: "$80.00", image: "/images/sustainable-denim.jpg", fundsGenerated: "$500,000", minimumInvestment: "$20,000", daysLeft: 30 },
      { id: 40, name: "Luxury Athleisure", description: "High-end athleisure wear.", price: "$120.00", image: "/images/luxury-athleisure.jpg", fundsGenerated: "$700,000", minimumInvestment: "$25,000", daysLeft: 40 },
      { id: 41, name: "Bamboo Fiber Clothing", description: "Soft and sustainable bamboo fabrics.", price: "$45.00", image: "/images/bamboo-fiber.jpg", fundsGenerated: "$400,000", minimumInvestment: "$15,000", daysLeft: 15 },
      { id: 42, name: "3D Printed Fashion", description: "Fashion with 3D printing technology.", price: "$150.00", image: "/images/3d-fashion.jpg", fundsGenerated: "$600,000", minimumInvestment: "$30,000", daysLeft: 50 },
      { id: 43, name: "Biodegradable Sneakers", description: "Eco-friendly biodegradable shoes.", price: "$100.00", image: "/images/biodegradable-sneakers.jpg", fundsGenerated: "$500,000", minimumInvestment: "$22,000", daysLeft: 35 },
      { id: 44, name: "Customizable Streetwear", description: "Unique, customizable designs.", price: "$70.00", image: "/images/custom-streetwear.jpg", fundsGenerated: "$300,000", minimumInvestment: "$15,000", daysLeft: 28 },
      { id: 45, name: "Upcycled Accessories", description: "Accessories from repurposed materials.", price: "$35.00", image: "/images/upcycled-accessories.jpg", fundsGenerated: "$200,000", minimumInvestment: "$8,000", daysLeft: 18 }
    ]
  },
  {
    name: "Industrial",
    description: "Investment opportunities in advanced industrial solutions.",
    products: [
      { id: 46, name: "Smart Robotics", description: "Automated robotics for industry.", price: "$1,200.00", image: "/images/smart-robotics.jpg", fundsGenerated: "$1,500,000", minimumInvestment: "$75,000", daysLeft: 45 },
      { id: 47, name: "Eco-Friendly Manufacturing", description: "Sustainable production processes.", price: "$600.00", image: "/images/eco-manufacturing.jpg", fundsGenerated: "$700,000", minimumInvestment: "$35,000", daysLeft: 20 },
      { id: 48, name: "3D Printing Solutions", description: "Industrial-grade 3D printing.", price: "$800.00", image: "/images/3d-printing-solutions.jpg", fundsGenerated: "$1,000,000", minimumInvestment: "$50,000", daysLeft: 30 },
      { id: 49, name: "AI for Logistics", description: "Optimized logistics using AI.", price: "$450.00", image: "/images/ai-logistics.jpg", fundsGenerated: "$600,000", minimumInvestment: "$25,000", daysLeft: 25 },
      { id: 50, name: "Green Building Materials", description: "Environmentally safe materials.", price: "$300.00", image: "/images/green-materials.jpg", fundsGenerated: "$400,000", minimumInvestment: "$15,000", daysLeft: 40 },
      { id: 51, name: "Industrial Drones", description: "Drones for large-scale operations.", price: "$1,500.00", image: "/images/industrial-drones.jpg", fundsGenerated: "$2,000,000", minimumInvestment: "$100,000", daysLeft: 55 },
      { id: 52, name: "Electric Heavy Machinery", description: "Electric machinery for sustainability.", price: "$2,500.00", image: "/images/electric-machinery.jpg", fundsGenerated: "$3,000,000", minimumInvestment: "$150,000", daysLeft: 60 },
      { id: 53, name: "Energy-Efficient HVAC", description: "High-efficiency HVAC systems.", price: "$500.00", image: "/images/efficient-hvac.jpg", fundsGenerated: "$800,000", minimumInvestment: "$40,000", daysLeft: 20 },
      { id: 54, name: "Automated Quality Control", description: "AI-driven quality assurance.", price: "$900.00", image: "/images/quality-control.jpg", fundsGenerated: "$1,200,000", minimumInvestment: "$60,000", daysLeft: 35 }
    ]
  },
  {
    name: "Food",
    description: "Innovative investments in food tech and sustainable agriculture.",
    products: [
      { id: 55, name: "Plant-Based Meat", description: "Delicious plant-based alternatives.", price: "$20.00", image: "/images/plant-meat.jpg", fundsGenerated: "$500,000", minimumInvestment: "$20,000", daysLeft: 18 },
      { id: 56, name: "Vertical Farming", description: "Urban agriculture for fresh produce.", price: "$75.00", image: "/images/vertical-farming.jpg", fundsGenerated: "$300,000", minimumInvestment: "$15,000", daysLeft: 28 },
      { id: 57, name: "Organic Snack Brands", description: "Healthy and organic snacks.", price: "$15.00", image: "/images/organic-snacks.jpg", fundsGenerated: "$200,000", minimumInvestment: "$10,000", daysLeft: 15 },
      { id: 58, name: "Lab-Grown Dairy", description: "Dairy without the cow.", price: "$30.00", image: "/images/lab-dairy.jpg", fundsGenerated: "$700,000", minimumInvestment: "$25,000", daysLeft: 25 },
      { id: 59, name: "Precision Agriculture", description: "Tech for optimized farming.", price: "$100.00", image: "/images/precision-agriculture.jpg", fundsGenerated: "$1,000,000", minimumInvestment: "$50,000", daysLeft: 35 },
      { id: 60, name: "Smart Kitchens", description: "IoT-enabled kitchen devices.", price: "$250.00", image: "/images/smart-kitchen.jpg", fundsGenerated: "$500,000", minimumInvestment: "$30,000", daysLeft: 40 },
      { id: 61, name: "Food Waste Management", description: "Solutions for reducing waste.", price: "$80.00", image: "/images/food-waste.jpg", fundsGenerated: "$400,000", minimumInvestment: "$15,000", daysLeft: 20 },
      { id: 62, name: "Alternative Sweeteners", description: "Natural sugar alternatives.", price: "$25.00", image: "/images/alt-sweeteners.jpg", fundsGenerated: "$300,000", minimumInvestment: "$12,000", daysLeft: 30 },
      { id: 63, name: "Farm-to-Table Platforms", description: "Direct supply from farms.", price: "$120.00", image: "/images/farm-to-table.jpg", fundsGenerated: "$800,000", minimumInvestment: "$40,000", daysLeft: 50 }
    ]
  },
  {
    name: "Nonprofit",
    description: "Invest in initiatives that drive positive social impact.",
    products: [
      { id: 64, name: "Clean Water Projects", description: "Access to clean water.", price: "$30.00", image: "/images/clean-water.jpg", fundsGenerated: "$200,000", minimumInvestment: "$8,000", daysLeft: 22 },
      { id: 65, name: "Education for All", description: "Programs for accessible education.", price: "$45.00", image: "/images/education.jpg", fundsGenerated: "$300,000", minimumInvestment: "$12,000", daysLeft: 18 },
      { id: 66, name: "Food Security", description: "Initiatives to combat hunger.", price: "$50.00", image: "/images/food-security.jpg", fundsGenerated: "$500,000", minimumInvestment: "$20,000", daysLeft: 40 },
      { id: 67, name: "Healthcare Outreach", description: "Healthcare in remote areas.", price: "$100.00", image: "/images/healthcare.jpg", fundsGenerated: "$400,000", minimumInvestment: "$15,000", daysLeft: 30 },
      { id: 68, name: "Renewable Energy Access", description: "Solar power in underserved regions.", price: "$80.00", image: "/images/solar-energy.jpg", fundsGenerated: "$600,000", minimumInvestment: "$25,000", daysLeft: 35 },
      { id: 69, name: "Disaster Relief", description: "Aid for disaster-stricken areas.", price: "$20.00", image: "/images/disaster-relief.jpg", fundsGenerated: "$300,000", minimumInvestment: "$10,000", daysLeft: 15 },
      { id: 70, name: "Youth Empowerment", description: "Programs for youth development.", price: "$65.00", image: "/images/youth-empowerment.jpg", fundsGenerated: "$400,000", minimumInvestment: "$18,000", daysLeft: 28 },
      { id: 71, name: "Mental Health Awareness", description: "Support for mental health.", price: "$40.00", image: "/images/mental-health.jpg", fundsGenerated: "$250,000", minimumInvestment: "$10,000", daysLeft: 20 },
      { id: 72, name: "Animal Welfare", description: "Protection for animals.", price: "$35.00", image: "/images/animal-welfare.jpg", fundsGenerated: "$200,000", minimumInvestment: "$9,000", daysLeft: 25 }
    ]
  },
  {
    name: "Education",
    description: "Investments in educational technology and resources.",
    products: [
      { id: 73, name: "Online Courses", description: "Courses in various domains.", price: "$10.00", image: "/images/online-courses.jpg", fundsGenerated: "$300,000", minimumInvestment: "$15,000", daysLeft: 22 },
      { id: 74, name: "AR/VR Learning", description: "Immersive learning experiences.", price: "$90.00", image: "/images/ar-vr-learning.jpg", fundsGenerated: "$700,000", minimumInvestment: "$35,000", daysLeft: 40 },
      { id: 75, name: "Coding Bootcamps", description: "Intensive coding programs.", price: "$120.00", image: "/images/coding-bootcamp.jpg", fundsGenerated: "$600,000", minimumInvestment: "$30,000", daysLeft: 35 },
      { id: 76, name: "STEM Education Kits", description: "Hands-on STEM learning.", price: "$50.00", image: "/images/stem-kit.jpg", fundsGenerated: "$400,000", minimumInvestment: "$18,000", daysLeft: 28 },
      { id: 77, name: "Remote Learning Platforms", description: "Accessible online schooling.", price: "$60.00", image: "/images/remote-learning.jpg", fundsGenerated: "$800,000", minimumInvestment: "$25,000", daysLeft: 25 },
      { id: 78, name: "Student Mentorship", description: "Guidance for students.", price: "$20.00", image: "/images/student-mentorship.jpg", fundsGenerated: "$250,000", minimumInvestment: "$12,000", daysLeft: 18 },
      { id: 79, name: "Language Learning Apps", description: "Apps to learn new languages.", price: "$15.00", image: "/images/language-app.jpg", fundsGenerated: "$300,000", minimumInvestment: "$10,000", daysLeft: 20 },
      { id: 80, name: "Interactive Textbooks", description: "Digital, interactive textbooks.", price: "$40.00", image: "/images/interactive-textbook.jpg", fundsGenerated: "$400,000", minimumInvestment: "$20,000", daysLeft: 30 },
      { id: 81, name: "AI-Powered Tutors", description: "Personalized AI tutoring.", price: "$200.00", image: "/images/ai-tutors.jpg", fundsGenerated: "$1,000,000", minimumInvestment: "$50,000", daysLeft: 45 }
    ]
  },
  {
    name: "Environment",
    description: "Opportunities in environmental preservation and sustainability.",
    products: [
      { id: 82, name: "Reforestation Programs", description: "Planting trees to restore forests.", price: "$10.00", image: "/images/reforestation.jpg", fundsGenerated: "$400,000", minimumInvestment: "$15,000", daysLeft: 30 },
      { id: 83, name: "Wildlife Conservation", description: "Protecting endangered species.", price: "$70.00", image: "/images/conservation.jpg", fundsGenerated: "$500,000", minimumInvestment: "$20,000", daysLeft: 25 },
      { id: 84, name: "Plastic Pollution Cleanup", description: "Removing plastics from oceans.", price: "$60.00", image: "/images/plastic-cleanup.jpg", fundsGenerated: "$600,000", minimumInvestment: "$25,000", daysLeft: 40 },
      { id: 85, name: "Renewable Energy Initiatives", description: "Promoting solar and wind energy.", price: "$150.00", image: "/images/renewable-energy.jpg", fundsGenerated: "$1,000,000", minimumInvestment: "$50,000", daysLeft: 50 },
      { id: 86, name: "Recycling Programs", description: "Efforts to increase recycling rates.", price: "$35.00", image: "/images/recycling.jpg", fundsGenerated: "$200,000", minimumInvestment: "$10,000", daysLeft: 22 },
      { id: 87, name: "Ocean Conservation", description: "Protection of marine ecosystems.", price: "$80.00", image: "/images/ocean-conservation.jpg", fundsGenerated: "$300,000", minimumInvestment: "$12,000", daysLeft: 28 },
      { id: 88, name: "Clean Energy R&D", description: "Research in clean energy tech.", price: "$250.00", image: "/images/clean-energy.jpg", fundsGenerated: "$700,000", minimumInvestment: "$30,000", daysLeft: 45 },
      { id: 89, name: "Biodiversity Preservation", description: "Efforts to preserve biodiversity.", price: "$100.00", image: "/images/biodiversity.jpg", fundsGenerated: "$500,000", minimumInvestment: "$25,000", daysLeft: 35 },
      { id: 90, name: "Sustainable Agriculture", description: "Eco-friendly farming methods.", price: "$50.00", image: "/images/sustainable-agriculture.jpg", fundsGenerated: "$400,000", minimumInvestment: "$18,000", daysLeft: 30 }
    ]
  }
];

export default sectorsData;