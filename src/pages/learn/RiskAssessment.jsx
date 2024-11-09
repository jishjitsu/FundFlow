import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RiskAssessment = () => {
  const navigate = useNavigate();
  const [riskLevel, setRiskLevel] = useState(0);
  const [graphClicked, setGraphClicked] = useState(false);
  const [showImage, setShowImage] = useState(false);

  const handleSliderChange = (e) => {
    setRiskLevel(e.target.value);
  };

  const handleGraphClick = () => {
    setGraphClicked(true);
  };

  const handleShowImageClick = () => {
    setShowImage(true);
  };

  const getRiskContent = () => {
    if (riskLevel <= 40) {
      return (
        <div className="risk-content">
          <h3>Low Risk: Stable Startup Investment Approach</h3>
          <p>You prefer stable investments within the startup ecosystem, focusing on low-risk ventures. Consider investing in well-established small businesses or sectors with steady demand.</p>
          <ul>
            <li>Established Small Businesses</li>
            <li>Predictable Revenue Models</li>
            <li>Businesses in Stable Sectors</li>
          </ul>
          <p>These types of investments aim for long-term stability and gradual growth, suitable for conservative startup investors.</p>
        </div>
      );
    } else if (riskLevel <= 70) {
      return (
        <div className="risk-content">
          <h3>Medium Risk: Balanced Startup Investment Approach</h3>
          <p>You are open to moderate risk, seeking a balance between growth and stability. Consider startups with high growth potential and consistent revenue streams in moderately volatile sectors.</p>
          <ul>
            <li>Growth-Oriented Startups</li>
            <li>Established Tech Ventures</li>
            <li>Moderate Funding Rounds</li>
          </ul>
          <p>This strategy balances potential returns with moderate risks, ideal for investors comfortable with some level of startup unpredictability.</p>
        </div>
      );
    } else {
      return (
        <div className="risk-content">
          <h3>High Risk: Aggressive Startup Investment Strategy</h3>
          <p>You are willing to take on high-risk, high-reward startup investments, focusing on early-stage, innovative, and disruptive startups.</p>
          <ul>
            <li>Seed-Stage Startups</li>
            <li>High-Growth Tech Sectors</li>
            <li>Disruptive Innovation Ventures</li>
          </ul>
          <p>This approach requires a strong tolerance for market swings and an understanding that returns are not guaranteed. High potential rewards, but significant risks are involved.</p>
        </div>
      );
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      minWidth: '100vw',
      backgroundColor: '#000000',
      padding: '20px',
      fontFamily: '"Roboto", sans-serif',
      color: '#ffffff'
    }}>
      <div className="content-container">
        <header className="page-header">
          <h1 style={{
            fontSize: '2.5em',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: '#ffffff'
          }}>Risk Assessment</h1>
          <p style={{
            fontSize: '1.1em',
            lineHeight: '1.6',
            color: '#ffffff',
            opacity: '0.9'
          }}>Understand your risk profile within the startup investment landscape to make informed decisions.</p>
        </header>

        <section className="assessment-tool">
          <h2 style={{
            fontSize: '1.8em',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: '#ffffff'
          }}>Step 1: Assess Your Risk Tolerance Level</h2>
          <label className="slider-label">
            Risk Level: {riskLevel}%
            <input
              type="range"
              min="0"
              max="100"
              value={riskLevel}
              onChange={handleSliderChange}
              className="risk-slider"
            />
          </label>
          <p className="risk-level" style={{
            fontSize: '1.1em',
            lineHeight: '1.6',
            color: '#ffffff',
            opacity: '0.9'
          }}>
            Based on your input, your risk tolerance is {riskLevel <= 40 ? 'Low' : riskLevel <= 70 ? 'Medium' : 'High'}.
          </p>
        </section>

        <section className="dynamic-content">
          {getRiskContent()}
        </section>

        <section className="risk-vs-reward">
          <h2 style={{
            fontSize: '1.8em',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: '#ffffff'
          }}>Risk vs Reward in Startup Investments</h2>
          <p style={{
            fontSize: '1.1em',
            lineHeight: '1.6',
            color: '#ffffff',
            opacity: '0.9'
          }}>In startups, higher risk often correlates with higher potential rewards. It's essential to align investments with your risk tolerance.</p>

          <div className="graph-container">
            {!graphClicked ? (
              <div className="reward-graphic" onClick={handleGraphClick}>
                <p style={{
                  fontSize: '1.1em',
                  lineHeight: '1.6',
                  color: '#ffffff',
                  opacity: '0.9'
                }}>Click to explore the startup risk-reward relationship!</p>
                <div className="graph-placeholder">
                  <p>Graph/Chart Placeholder</p>
                </div>
              </div>
            ) : (
              <>
                <button onClick={handleShowImageClick} className="show-image-button">
                  Show Risk vs Reward Image
                </button>

                {showImage && (
                  <img 
                    src="/api/placeholder/800/400"
                    alt="Risk vs Reward Chart" 
                    className="risk-reward-image"
                  />
                )}
              </>
            )}
          </div>
        </section>

        <section className="risk-categories">
          <h2 style={{
            fontSize: '1.8em',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: '#ffffff'
          }}>Types of Investment Risks in Startups</h2>
          <div className="categories-grid">
            {['Market Risk', 'Liquidity Risk', 'Operational Risk'].map((risk, index) => (
              <div key={risk} className="category">
                <h3 style={{
                  fontSize: '1.4em',
                  fontWeight: 'bold',
                  marginBottom: '15px',
                  color: '#ffffff'
                }}>{risk}</h3>
                <p style={{
                  fontSize: '1.1em',
                  lineHeight: '1.6',
                  color: '#ffffff',
                  opacity: '0.9'
                }}>
                  {index === 0 && 'Market fluctuations can affect the valuation of startups, especially in volatile or emerging sectors.'}
                  {index === 1 && 'Startups typically have longer exit times, making it harder to convert investments into cash quickly.'}
                  {index === 2 && 'Early-stage startups may face challenges in operations, such as leadership changes or scaling issues.'}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="cta">
          <h2 style={{
            fontSize: '1.8em',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: '#ffffff'
          }}>Ready to Invest in Startups?</h2>
          <p style={{
            fontSize: '1.1em',
            lineHeight: '1.6',
            color: '#ffffff',
            opacity: '0.9'
          }}>Now that you know your risk level, check out the best startup investment opportunities for you.</p>
          <button onClick={() => navigate('/pages/learn/investors')} className="cta-button">
            Explore Startup Investment Options
          </button>
        </section>
      </div>

      <style jsx>{`
        .content-container {
          background-color: #000000;
          border-radius: 10px;
          padding: 40px;
          height: 100%;
        }

        .assessment-tool {
          background-color: #333333;
          padding: 30px;
          border-radius: 10px;
          margin-bottom: 30px;
        }

        .slider-label {
          display: block;
          margin-top: 20px;
          color: #ffffff;
          font-family: "Roboto", sans-serif;
          font-size: 1.1em;
        }

        .risk-slider {
          width: 100%;
          margin-top: 15px;
          height: 8px;
          background: linear-gradient(90deg, #2d4de0, #9f71f0, #fc6277);
          border-radius: 4px;
          appearance: none;
          outline: none;
        }

        .risk-slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          background: #ffffff;
          border-radius: 50%;
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .risk-slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
        }

        .dynamic-content {
          background-color: #333333;
          padding: 30px;
          border-radius: 10px;
          margin-bottom: 30px;
        }

        .risk-content ul {
          margin: 20px 0;
          padding-left: 20px;
          color: rgba(255, 255, 255, 0.9);
          font-size: 1.1em;
          line-height: 1.6;
        }

        .risk-content li {
          margin-bottom: 10px;
        }

        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-top: 20px;
        }

        .category {
          background-color: #333333;
          padding: 25px;
          border-radius: 10px;
          transition: transform 0.3s ease;
        }

        .category:hover {
          transform: translateY(-5px);
        }

        .graph-placeholder {
          width: 100%;
          height: 200px;
          background-color: #333333;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 20px;
        }

        .show-image-button {
          background: linear-gradient(45deg, #2d4de0, #9f71f0);
          color: #ffffff;
          border: none;
          padding: 12px 24px;
          border-radius: 6px;
          font-size: 1.1em;
          font-family: "Roboto", sans-serif;
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .show-image-button:hover {
          transform: scale(1.05);
        }

        .cta {
          text-align: center;
          margin-top: 40px;
        }

        .cta-button {
          background: linear-gradient(45deg, #2d4de0, #9f71f0);
          color: #ffffff;
          border: none;
          padding: 15px 30px;
          border-radius: 8px;
          font-size: 1.2em;
          font-family: "Roboto", sans-serif;
          cursor: pointer;
          transition: transform 0.2s ease;
          margin-top: 20px;
        }

        .cta-button:hover {
          transform: scale(1.05);
        }

        .risk-reward-image {
          width: 100%;
          height: auto;
          border-radius: 8px;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
};

export default RiskAssessment;