// src/pages/Investors.jsx
import React from 'react';

const Investors = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Investors</h2>
      <p>Educational resources, tips, and strategies for investors.</p>

      <div style={{ margin: '20px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '16px',
            maxWidth: '1024px',
            margin: 'auto',
            padding: '16px',
            borderRadius: '8px',
            border: '1px solid #d1d5db',
            backgroundColor: 'white',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease',
            overflow: 'hidden',
          }}
        >
          <a
            href="#"
            style={{
              gridColumn: 'span 2',
              textAlign: 'left',
              color: '#4a4a4a',
              textDecoration: 'none',
              display: 'block',
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                overflow: 'hidden',
              }}
            >
              <img
                src="/images/ZyOinD4Qhn5ozsoOwtEjM.png"
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease',
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  top: '8px',
                  left: '8px',
                  backgroundColor: '#fef3c7',
                  padding: '4px 8px',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#f59e0b',
                  borderRadius: '9999px',
                }}
              >
                Unity
              </span>
              <img
                src="/images/AnbWyIjnwNbW9Wz6c_cja.svg"
                alt=""
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%) scale(1)',
                  width: '40px',
                  transition: 'transform 0.3s ease',
                }}
              />
            </div>
          </a>
          <div
            style={{
              gridColumn: 'span 3',
              display: 'flex',
              flexDirection: 'column',
              paddingRight: '32px',
              textAlign: 'left',
            }}
          >
            <a
              href="#"
              style={{
                fontSize: '24px',
                fontWeight: '600',
                marginTop: '12px',
                color: '#333',
                textDecoration: 'none',
              }}
            >
              How to make open world with C# in Unity
            </a>
            <p
              style={{
                fontSize: '14px',
                color: '#4a4a4a',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2,
              }}
            >
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna.
            </p>
            <a
              href="#"
              style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#6b7280',
                textDecoration: 'none',
                hover: {
                  color: '#374151',
                },
              }}
            >
              Ben Awad
            </a>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                color: '#4a4a4a',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '12px',
                  fontWeight: '500',
                }}
              >
                <div
                  style={{
                    backgroundColor: '#d1fae5',
                    padding: '2px 8px',
                    borderRadius: '9999px',
                    color: '#10b981',
                  }}
                >
                  Advance level
                </div>
                <div
                  style={{
                    backgroundColor: '#e0f2fe',
                    padding: '2px 8px',
                    borderRadius: '9999px',
                    color: '#3b82f6',
                  }}
                >
                  160 Enrolled
                </div>
              </div>
              <a
                href="#"
                style={{
                  marginTop: '16px',
                  display: 'inline-block',
                  padding: '8px 16px',
                  backgroundColor: '#f97316',
                  color: '#fff',
                  borderRadius: '8px',
                  textAlign: 'center',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: '600',
                  transition: 'transform 0.2s ease',
                }}
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investors;
