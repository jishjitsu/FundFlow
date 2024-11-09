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
        <>
          <h3>Low Risk: Stable Startup Investment Approach</h3>
          <p>You prefer stable investments within the startup ecosystem, focusing on low-risk ventures. Consider investing in well-established small businesses or sectors with steady demand.</p>
          <ul>
            <li>Established Small Businesses</li>
            <li>Predictable Revenue Models</li>
            <li>Businesses in Stable Sectors</li>
          </ul>
          <p>These types of investments aim for long-term stability and gradual growth, suitable for conservative startup investors.</p>
        </>
      );
    } else if (riskLevel <= 70) {
      return (
        <>
          <h3>Medium Risk: Balanced Startup Investment Approach</h3>
          <p>You are open to moderate risk, seeking a balance between growth and stability. Consider startups with high growth potential and consistent revenue streams in moderately volatile sectors.</p>
          <ul>
            <li>Growth-Oriented Startups</li>
            <li>Established Tech Ventures</li>
            <li>Moderate Funding Rounds</li>
          </ul>
          <p>This strategy balances potential returns with moderate risks, ideal for investors comfortable with some level of startup unpredictability.</p>
        </>
      );
    } else {
      return (
        <>
          <h3>High Risk: Aggressive Startup Investment Strategy</h3>
          <p>You are willing to take on high-risk, high-reward startup investments, focusing on early-stage, innovative, and disruptive startups.</p>
          <ul>
            <li>Seed-Stage Startups</li>
            <li>High-Growth Tech Sectors</li>
            <li>Disruptive Innovation Ventures</li>
          </ul>
          <p>This approach requires a strong tolerance for market swings and an understanding that returns are not guaranteed. High potential rewards, but significant risks are involved.</p>
        </>
      );
    }
  };

  return (
    <div className="risk-assessment-container">
      <header className="page-header">
        <h1>Risk Assessment</h1>
        <p>Understand your risk profile within the startup investment landscape to make informed decisions.</p>
      </header>

      <section className="assessment-tool">
        <h2>Step 1: Assess Your Risk Tolerance Level</h2>
        <label>
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
        <p>
          Based on your input, your risk tolerance is {riskLevel <= 40 ? 'Low' : riskLevel <= 70 ? 'Medium' : 'High'}.
        </p>
      </section>

      <section className="dynamic-content">
        {getRiskContent()}
      </section>

      <section className="risk-vs-reward">
        <h2>Risk vs Reward in Startup Investments</h2>
        <p>In startups, higher risk often correlates with higher potential rewards. It's essential to align investments with your risk tolerance.</p>

        {!graphClicked ? (
          <div className="reward-graphic" onClick={handleGraphClick}>
            <p>Click on the graph to understand the startup risk-reward relationship!</p>
            <div style={{ width: '100%', height: '200px', background: '#ccc', borderRadius: '8px' }}>
              <p style={{ textAlign: 'center', paddingTop: '90px', color: '#fff' }}>Graph/Chart Placeholder</p>
            </div>
          </div>
        ) : (
          <>
            <button onClick={handleShowImageClick} style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px', background: '#0288d1', color: '#fff', borderRadius: '5px', cursor: 'pointer' }}>
              Show Risk vs Reward Image
            </button>

            {showImage && (
              <img 
                src="/src/assets/riskXreward.jpg" 
                alt="Risk vs Reward Chart" 
                className="risk-reward-image" 
                style={{ width: '100%', height: 'auto', borderRadius: '8px', marginTop: '20px' }}
              />
            )}
          </>
        )}
      </section>

      <section className="risk-categories">
        <h2>Types of Investment Risks in Startups</h2>
        <div className="category">
          <h3>Market Risk</h3>
          <p>Market fluctuations can affect the valuation of startups, especially in volatile or emerging sectors.</p>
        </div>
        <div className="category">
          <h3>Liquidity Risk</h3>
          <p>Startups typically have longer exit times, making it harder to convert investments into cash quickly.</p>
        </div>
        <div className="category">
          <h3>Operational Risk</h3>
          <p>Early-stage startups may face challenges in operations, such as leadership changes or scaling issues.</p>
        </div>
      </section>

      <section className="educational-resources">
        <h2>Learn More About Startup Investment Risks</h2>
        <p>Want to dive deeper into risk management in startups? Check out these resources:</p>
        <ul>
          <li><a href="https://www.investopedia.com/articles/investing/091215/guide-investing-startups.asp" target="_blank" rel="noopener noreferrer">Guide to Investing in Startups</a></li>
          <li><a href="https://www.investopedia.com/terms/v/venturecapital.asp" target="_blank" rel="noopener noreferrer">Understanding Venture Capital</a></li>
          <li><a href="https://www.investopedia.com/terms/r/risk-management.asp" target="_blank" rel="noopener noreferrer">Risk Management in Startups</a></li>
        </ul>
      </section>

      <section className="cta">
        <h2>Ready to Invest in Startups?</h2>
        <p>Now that you know your risk level, check out the best startup investment opportunities for you.</p>
        <button onClick={() => navigate('/pages/learn/investors')}>Explore Startup Investment Options</button>
      </section>

      <style jsx>{`
        .risk-assessment-container {
          padding: 30px;
          font-family: 'Roboto', sans-serif;
          background: linear-gradient(135deg, #e0f7fa, #f1f8e9);
          border-radius: 10px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .page-header {
          text-align: center;
          margin-bottom: 30px;
        }

        h1 {
          color: #0277bd;
          font-size: 2.5rem;
        }

        h2, h3 {
          color: #0288d1;
          margin-bottom: 15px;
        }

        p {
          color: #555;
          font-size: 1.1rem;
        }

        .assessment-tool {
          background: #fff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          margin-bottom: 20px;
        }

        .risk-slider {
          width: 100%;
          margin-top: 20px;
          background: #ffcc00;
          border-radius: 5px;
          transition: background 0.3s ease-in-out;
        }

        .risk-slider:hover {
          background: #ffb300;
        }

        .dynamic-content {
          background-color: #f9f9f9;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease-in-out;
        }

        .dynamic-content:hover {
          transform: scale(1.02);
        }

        .category {
          background-color: #ffffff;
          padding: 15px;
          margin-bottom: 10px;
          border-left: 5px solid #0288d1;
          box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .category:hover {
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          border-left: 5px solid #ff8f00;
        }

        .cta button {
          background-color: #0277bd;
          color: #fff;
          padding: 12px 20px;
          border: none;
          font-size: 1rem;
          font-weight: bold;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .cta button:hover {
          background-color: #01579b;
        }
      `}</style>
    </div>
  );
};

export default RiskAssessment;
