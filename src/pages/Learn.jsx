import React from 'react';
import { useNavigate } from 'react-router-dom';

const Learn = () => {
  const navigate = useNavigate();

  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f8f9fa',
  };

  const cardStyle = {
    backgroundColor: '#4caf50',
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
  };

  const hoverStyle = {
    transform: 'scale(1.1)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
  };

  return (
    <div style={containerStyle}>
      {/* Top card centered */}
      <div 
        style={{ ...cardStyle, gridColumn: '2 / 3' }} 
        onClick={() => navigate('/pages/learn/risk-assessment')}
        onMouseOver={e => Object.assign(e.currentTarget.style, hoverStyle)}
        onMouseOut={e => Object.assign(e.currentTarget.style, cardStyle)}
      >
        <h3>Risk Assessment</h3>
      </div>

      {/* Bottom left card */}
      <div 
        style={{ ...cardStyle, gridColumn: '1 / 2' }} 
        onClick={() => navigate('/pages/learn/investors')}
        onMouseOver={e => Object.assign(e.currentTarget.style, hoverStyle)}
        onMouseOut={e => Object.assign(e.currentTarget.style, cardStyle)}
      >
        <h3>Investors</h3>
      </div>

      {/* Bottom right card */}
      <div 
        style={{ ...cardStyle, gridColumn: '3 / 4' }} 
        onClick={() => navigate('/pages/learn/funding')}
        onMouseOver={e => Object.assign(e.currentTarget.style, hoverStyle)}
        onMouseOut={e => Object.assign(e.currentTarget.style, cardStyle)}
      >
        <h3>Funding</h3>
      </div>
    </div>
  );
};

export default Learn;
