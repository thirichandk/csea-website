import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, Home } from 'lucide-react';

export default function Navbar({ activeCategory, setActiveCategory, view, setView, onNavigate, onNavigateOffice, onNavigateYearPlan, onNavigateSDG }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHomeClick = () => {
    setView('home');
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDiscoverClick = () => {
    onNavigate('all');
    setIsOpen(false);
  };

  return (
    <nav className={`navbar-main ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo" onClick={handleHomeClick}>
          <Logo size="lg" />
        </div>

        {/* Desktop Nav Items */}
        <div className="navbar-desktop-menu">
          <button
            className={`nav-link-btn ${view === 'home' ? 'active' : ''}`}
            onClick={handleHomeClick}
          >
            <Home size={16} />
            <span>Home</span>
          </button>

          <button 
            className={`nav-link-btn ${view === 'office' ? 'active' : ''}`}
            onClick={() => { onNavigateOffice(); setIsOpen(false); }}
          >
            <span>Office Bearers</span>
          </button>

          <button
            className={`nav-link-btn ${view === 'yearplan' ? 'active' : ''}`}
            onClick={() => { onNavigateYearPlan(); setIsOpen(false); }}
          >
            <span>Year Plan</span>
          </button>

          <button
            className={`nav-link-btn ${view === 'sdg' ? 'active' : ''}`}
            onClick={() => { onNavigateSDG(); setIsOpen(false); }}
          >
            <span>SDG Activities</span>
          </button>

          <button 
            className={`btn-primary ${view === 'discover' ? 'btn-active' : ''}`}
            onClick={handleDiscoverClick}
          >
            Discover Events
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button className="navbar-mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="navbar-mobile-menu glass-panel">
          <button className={`mobile-nav-link ${view === 'home' ? 'active' : ''}`} onClick={handleHomeClick}>
            <Home size={16} />
            <span>Home</span>
          </button>
          <button className="mobile-nav-link" onClick={() => { onNavigateOffice(); setIsOpen(false); }}>
            <span>Office Bearers</span>
          </button>

          <button className="mobile-nav-link" onClick={() => { onNavigateYearPlan(); setIsOpen(false); }}>
            <span>Year Plan</span>
          </button>

          <button className="mobile-nav-link" onClick={() => { onNavigateSDG(); setIsOpen(false); }}>
            <span>SDG Activities</span>
          </button>

          <button 
            className="btn-primary mobile-cta-btn" 
            onClick={handleDiscoverClick}
          >
            Discover Events
          </button>
        </div>
      )}
    </nav>
  );
}
