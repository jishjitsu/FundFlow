import React from 'react';

const Investors = () => {
  const cardData = [
    { title: 'Investment Basics', link: '#', videoLink: 'https://www.youtube.com/watch?v=5A8Qkm9jauY', tag: 'Finance' },
    { title: 'Stock Market 101', link: '#', videoLink: 'https://www.youtube.com/watch?v=4RAs9Y5wwDo', tag: 'Stocks' },
    { title: 'Crypto Fundamentals', link: '#', videoLink: 'https://www.youtube.com/watch?v=xT2uCEp9f84', tag: 'Crypto' },
    { title: 'Real Estate Investing', link: '#', videoLink: 'https://www.youtube.com/watch?v=677ZtSMr4-4', tag: 'Real Estate' },
    { title: 'Building Wealth', link: '#', videoLink: 'https://www.youtube.com/watch?v=MJ-8TSrn0Js', tag: 'Wealth' },
    { title: 'Risk Management', link: '#', videoLink: 'https://www.youtube.com/watch?v=4WaJD0MF4q4', tag: 'Risk' },
    { title: 'Portfolio Diversification', link: '#', videoLink: 'https://www.youtube.com/watch?v=tHxwyWnNu0c', tag: 'Diversification' },
  ];

  const getThumbnailUrl = (url) => {
    try {
      const videoId = new URL(url).searchParams.get("v");
      return videoId ? `https://img.youtube.com/vi/${videoId}/0.jpg` : '/api/placeholder/380/200';
    } catch {
      return '/api/placeholder/380/200';
    }
  };

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="flex flex-wrap justify-center gap-8">
        {cardData.map((card, index) => (
          <div 
            key={index} 
            className="group relative w-[380px] rounded-xl transition-transform duration-300 hover:scale-105"
          >
            {/* Gradient border background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#2d4de0] via-[#9f71f0] to-[#fc6277] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Card content container */}
            <div className="relative bg-[#222222] m-[3px] rounded-lg overflow-hidden">
              {/* Image section */}
              <a href={card.videoLink} target="_blank" rel="noopener noreferrer" className="block h-[200px]">
                <img
                  src={getThumbnailUrl(card.videoLink)}
                  alt={card.title}
                  className="h-full w-full object-cover"
                />
              </a>

              {/* Content section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                <p className="text-gray-400 mb-4">
                  Learn about {card.tag.toLowerCase()} with in-depth resources and expert tips to help you make informed investment decisions.
                </p>
                <a
                  href={card.link}
                  className="text-orange-400 hover:text-orange-300 font-semibold no-underline"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Investors;