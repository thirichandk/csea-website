import React from 'react';
import './Hero.css';

const Hero = ({ onDiscover }) => {
  return (
    <section className="hero" id="home">
      <div className="hero-video-wrapper">
        <video 
          className="hero-video" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="/Assets/CSEA logo intro.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero-overlay"></div>
      
      <div className="container hero-container">
        <div className="hero-content reveal">
          <div className="hero-badge" style={{ animation: 'float 3s infinite ease-in-out' }}>
            <span style={{ fontSize: '1.15rem' }}>Welcome to CSEA KEC</span>
          </div>
          
          <h1 className="heading-hero hero-title" style={{ animation: 'fadeInUp 1s ease-out' }}>
            Innovating the <br /> Future Together
          </h1>
          
          <p className="text-lg hero-subtitle delay-100 reveal" style={{ maxWidth: '800px', fontWeight: '500' }}>
            Computer Science and Engineering Association. 
            Empowering students with technology, leadership, and vision.
          </p>
          
          <div className="hero-cta delay-200 reveal">
            <button className="btn-primary" onClick={() => onDiscover('all')} style={{ animation: 'pulseInfinity 3s infinite' }}>
              <span>Explore Events</span>
            </button>
            <a href="#about" className="btn-outlined">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
