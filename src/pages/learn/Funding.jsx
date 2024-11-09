// src/pages/Funding.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Funding = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px' }}>
      <h2>Funding</h2>
      <p>Explore ways to raise capital, refer a startup, and view success stories.</p>
      
      <div style={{ marginTop: '20px' }}>
        <button onClick={() => navigate('/pages/learn/funding/raise-capital')}>Raise Capital</button>
        <button onClick={() => navigate('/pages/learn/funding/refer-startup')} style={{ marginLeft: '10px' }}>Refer a Start-Up</button>
        <button onClick={() => navigate('/pages/learn/funding/success-stories')} style={{ marginLeft: '10px' }}>Success Stories</button>
      </div>
    </div>
  );
};

export default Funding;
