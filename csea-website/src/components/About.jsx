import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="section about" id="about" style={{ position: 'relative' }}>
      {/* Background ambient animation for About section */}
      <div 
        style={{
          position: 'absolute',
          top: '20%',
          right: '5%',
          width: '300px',
          height: '300px',
          background: 'var(--secondary)',
          borderRadius: '50%',
          filter: 'blur(100px)',
          opacity: '0.08',
          animation: 'floatSlow1 15s infinite ease-in-out',
          zIndex: 0
        }}
      />

      <div className="container about-container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="about-left">
          <div className="collage-wrapper">
            <div className="collage-img-1 reveal parallax">
              <img src="/Assets/it park.webp" alt="Kongu Engineering College IT Park" style={{ border: '1px solid var(--border-glass)' }} />
            </div>
            <div className="collage-img-2 reveal delay-200 parallax-reverse">
              <img src="/Assets/it park.webp" alt="Kongu Engineering College IT Park Secondary" style={{ border: '1px solid var(--border-glass)' }} />
            </div>
            <div className="collage-img-3 reveal delay-400">
              <img src="/Assets/it park.webp" alt="Kongu Engineering College IT Park Tertiary" />
            </div>
          </div>
        </div>
        
        <div className="about-right">
          <div 
            className="glass-panel reveal" 
            style={{ 
              padding: '40px', 
              boxShadow: '0 20px 40px rgba(0,0,0,0.03)',
              transform: 'translateY(0)',
              transition: 'transform 0.5s ease',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '2px', background: 'var(--primary)' }}></div>
              <span style={{ color: 'var(--primary)', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '12px' }}>
                About Us
              </span>
            </div>

            <h2 className="heading-lg about-title" style={{ marginBottom: '24px', lineHeight: '1.2' }}>
              Building More <br/> Than <span className="gradient-text">Engineers</span>
            </h2>
            
            <p className="about-text" style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
              The Computer Science and Engineering Association (CSEA) is the official student body dedicated to bridging the gap between academic learning and real-world application. We foster an environment of continuous learning, innovation, and leadership.
            </p>

            <div style={{ marginTop: '32px', display: 'flex', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(255, 87, 34, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '700' }}>Excellence</h4>
                  <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Academic & Tech</span>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(255, 179, 0, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '700' }}>Community</h4>
                  <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Strong Network</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
