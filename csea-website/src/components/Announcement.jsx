import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

const Announcement = ({ onDiscover }) => {
  return (
    <section className="section" style={{ padding: '60px 0', position: 'relative', zIndex: 10 }}>
      <div className="container">
        <div 
          className="glass-panel" 
          style={{ 
            padding: '30px 40px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
            background: 'rgba(255, 255, 255, 0.95)',
            border: '2px solid var(--primary-glow)',
            boxShadow: '0 20px 40px rgba(255, 87, 34, 0.1)',
            animation: 'csea-float 6s infinite ease-in-out',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Decorative glowing orb */}
          <div 
            style={{
              position: 'absolute',
              top: '-50%',
              left: '-10%',
              width: '200px',
              height: '200px',
              background: 'var(--primary)',
              filter: 'blur(80px)',
              opacity: '0.15',
              zIndex: 0
            }}
          />

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', zIndex: 1 }}>
            <div 
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                animation: 'csea-pulse 2s infinite'
              }}
            >
              <Sparkles size={28} />
            </div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: '800', letterSpacing: '2px', color: 'var(--primary)', textTransform: 'uppercase', marginBottom: '4px' }}>
                Major Event Alert
              </div>
              <h2 style={{ margin: 0, fontSize: '28px', fontWeight: '800', color: 'var(--text-primary)' }}>
                Inaugural of <span className="gradient-text">CSEA & CCC</span>
              </h2>
              <p style={{ margin: '8px 0 0 0', color: 'var(--text-secondary)', fontSize: '15px', fontWeight: '500' }}>
                Join us for the grand inauguration ceremony marking the beginning of a new era of technical excellence.
              </p>
            </div>
          </div>
          
          <div style={{ zIndex: 1 }}>
            <button 
              className="btn-primary" 
              onClick={() => onDiscover('inaugural')}
              style={{ padding: '14px 32px', fontSize: '16px' }}
            >
              <span>View Details</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Announcement;
