import React from 'react';
import { useNavigate } from 'react-router-dom';

const Learn = () => {
  const navigate = useNavigate();

  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    minWidth: '100vw',
    backgroundColor: '#000000',
    padding: '20px',
    fontFamily: '"Roboto", sans-serif',
    gap: '20px',
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
      {/* Investors Section */}
      <div
        style={cardWrapperStyle}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={() => navigate('/pages/learn/investors')}
      >
        <div style={cardContentStyle}>
          <h1 style={titleStyle}>Investors</h1>
          <p style={descriptionStyle}>
            Discover essential insights on connecting with the right investors to fund your projects and bring your ideas to life. Learn how to present your value and build lasting partnerships.
          </p>
        </div>
      </div>

      {/* Risk Assessment Section */}
      <div
        style={cardWrapperStyle}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={() => navigate('/pages/learn/risk-assessment')}
      >
        <div style={cardContentStyle}>
          <h1 style={titleStyle}>Risk Assessment</h1>
          <p style={descriptionStyle}>
            Gain knowledge on evaluating potential risks and making informed decisions. Explore strategies to protect your investments and ensure sustainable growth for your ventures.
          </p>
        </div>
      </div>

      {/* Crowdfunding Section */}
      <div
        style={cardWrapperStyle}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={() => navigate('/pages/learn/funding')}
      >
        <div style={cardContentStyle}>
          <h1 style={titleStyle}>Why Crowd Fund?</h1>
          <p style={descriptionStyle}>
            Connect directly with supporters and access capital without traditional barriers. Build your community while maintaining complete creative control.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Learn;