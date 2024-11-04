// HeaderSection.jsx
import React from 'react';
import logo from './assets/F__4_-removebg-preview.png';

function FeatureCard({ title, brief, details }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)} 
      className="bg-[#11a14a] text-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm">{isHovered ? details : brief}</p>
    </div>
  );
}

function HeaderSection() {
  return (
    <div className='flex flex-col items-center justify-center h-full'>
      <img 
        src={logo} 
        alt="FundFlow Logo"
        className="w-[100px] h-[100px] mb-6" 
      />
      <h1 className='font-Poleno text-6xl text-black text-shadow-md animate-fadeIn'>
        Your Money Matters
      </h1>
      <h6 className='text-2xl text-[#d9d6ba] mt-4 animate-fadeIn delay-200'>
        Let’s turn Small Investments into Big Gains
      </h6>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl p-8">
        <FeatureCard 
          title="Secure & Transparent"
          brief="Invest with confidence in a secure platform."
          details="FundFlow offers transparent investment tracking and secure transactions, giving you peace of mind."
        />
        <FeatureCard 
          title="Low Entry Barriers"
          brief="Accessible investment opportunities for everyone."
          details="Join with small amounts and gradually build your portfolio across diverse sectors."
        />
        <FeatureCard 
          title="Diverse Opportunities"
          brief="Explore multiple sectors and asset types."
          details="Invest in various sectors, including technology, real estate, and small businesses, for a diversified portfolio."
        />
        <FeatureCard 
          title="Community Engagement"
          brief="Connect with fellow investors and startups."
          details="Engage in investor groups and direct channels with startups to stay updated and informed."
        />
      </div>
    </div>
  );
}

export default HeaderSection;
