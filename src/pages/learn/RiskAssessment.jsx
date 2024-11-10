import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const sectors = [
  { name: "Technology", risk: "high", description: "Investment in tech startups and projects" },
  { name: "Healthcare", risk: "medium", description: "Opportunities in healthcare innovation" },
  { name: "Games", risk: "high", description: "Invest in stunning concepts" },
  { name: "Film", risk: "high", description: "Invest in innovative film productions" },
  { name: "Clothing", risk: "low", description: "Invest in sustainable and innovative clothing brands" },
  { name: "Industrial", risk: "medium", description: "Investment opportunities in advanced industrial solutions" },
  { name: "Food", risk: "low", description: "Innovative investments in food tech and sustainable agriculture" },
  { name: "Education", risk: "low", description: "Investments in educational technology and resources" }
];

const RiskAssessment = () => {
  const navigate = useNavigate();
  const [riskLevel, setRiskLevel] = useState(0);

  const handleSliderChange = (e) => {
    setRiskLevel(e.target.value);
  };

  const getRecommendedSectors = () => {
    if (riskLevel <= 40) {
      return sectors.filter(sector => sector.risk === "low");
    } else if (riskLevel <= 70) {
      return sectors.filter(sector => sector.risk === "medium");
    } else {
      return sectors.filter(sector => sector.risk === "high");
    }
  };

  const getRiskContent = () => {
    const recommendedSectors = getRecommendedSectors();
    
    return (
      <div className="risk-content" style={{
        backgroundColor: '#333333',
        padding: '30px',
        borderRadius: '10px',
        marginBottom: '30px'
      }}>
        <h3 style={{
          fontSize: '1.4em',
          fontWeight: 'bold',
          marginBottom: '20px',
          color: '#ffffff'
        }}>
          {riskLevel <= 40 ? 'Low Risk: Conservative Investment Strategy' :
           riskLevel <= 70 ? 'Medium Risk: Balanced Investment Approach' :
           'High Risk: Aggressive Investment Strategy'}
        </h3>
        
        <p style={{
          fontSize: '1.1em',
          lineHeight: '1.6',
          color: '#ffffff',
          opacity: '0.9',
          marginBottom: '20px'
        }}>
          {riskLevel <= 40 ? 
            'Based on your risk tolerance, we recommend focusing on established sectors with stable revenue streams and proven business models.' :
           riskLevel <= 70 ? 
            'Your balanced risk profile suggests investing in sectors with moderate growth potential and established market presence.' :
            'Your high risk tolerance allows for investment in innovative and disruptive sectors with high growth potential.'}
        </p>

        <div style={{
          marginTop: '30px'
        }}>
          <h4 style={{
            fontSize: '1.2em',
            fontWeight: 'bold',
            marginBottom: '15px',
            color: '#ffffff'
          }}>Recommended Sectors:</h4>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '20px',
            marginTop: '20px'
          }}>
            {recommendedSectors.map((sector) => (
              <div key={sector.name} style={{
                backgroundColor: '#444444',
                padding: '20px',
                borderRadius: '8px',
                transition: 'transform 0.3s ease'
              }} className="sector-card">
                <h5 style={{
                  fontSize: '1.1em',
                  fontWeight: 'bold',
                  marginBottom: '10px',
                  color: '#ffffff'
                }}>{sector.name}</h5>
                <p style={{
                  fontSize: '1em',
                  color: '#ffffff',
                  opacity: '0.9'
                }}>{sector.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: '#000000',
      padding: '20px',
      color: '#ffffff'
    }}>
      <div style={{ 
        padding: '40px',
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto'
      }}>
        <header>
          <h1 style={{
            fontSize: '2.5em',
            fontWeight: 'bold',
            marginBottom: '20px'
          }}>Risk Assessment</h1>
          <p style={{
            fontSize: '1.1em',
            lineHeight: '1.6',
            opacity: '0.9',
            marginBottom: '40px'
          }}>Determine your risk tolerance and discover suitable investment sectors.</p>
        </header>

        <section style={{
          backgroundColor: '#333333',
          padding: '30px',
          borderRadius: '10px',
          marginBottom: '30px'
        }}>
          <h2 style={{
            fontSize: '1.8em',
            fontWeight: 'bold',
            marginBottom: '20px'
          }}>Assess Your Risk Tolerance</h2>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '10px'
            }}>
              <span style={{ fontSize: '1.1em' }}>Risk Level:</span>
              <span style={{ 
                fontSize: '1.1em',
                minWidth: '4ch',
                textAlign: 'right'
              }}>{riskLevel}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={riskLevel}
              onChange={handleSliderChange}
              style={{
                width: '100%',
                height: '8px',
                background: 'linear-gradient(90deg, #2d4de0, #9f71f0, #fc6277)',
                borderRadius: '4px',
                appearance: 'none',
                outline: 'none'
              }}
            />
          </div>
        </section>

        {getRiskContent()}

        <button 
          onClick={() => navigate('/invest')}
          style={{
            background: 'linear-gradient(45deg, #2d4de0, #9f71f0)',
            color: '#ffffff',
            border: 'none',
            padding: '15px 30px',
            borderRadius: '8px',
            fontSize: '1.2em',
            cursor: 'pointer',
            marginTop: '30px',
            width: 'fit-content'
          }}
        >
          Explore Investment Options
        </button>
      </div>

      <style jsx>{`
        .sector-card:hover {
          transform: translateY(-5px);
        }
        
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          background: #ffffff;
          border-radius: 50%;
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        input[type="range"]::-webkit-slider-thumb:hover {
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
};

export default RiskAssessment;