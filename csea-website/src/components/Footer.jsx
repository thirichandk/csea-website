import React from 'react';
import Logo from './Logo';
import { Mail, MapPin, Globe, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer-main">
      <div className="container footer-container">
        
        {/* Branding & Motto */}
        <div className="footer-brand-section">
          <Logo size="md" showMotto={true} />
          <p className="footer-brand-desc">
            Computer Science and Engineering Association (CSEA) is the leading technical 
            forum of Kongu Engineering College, nurturing student potential since inception.
          </p>
        </div>

        {/* Contact Info */}
        <div className="footer-contact-section">
          <h4>Contact & Location</h4>
          <ul className="footer-contact-list">
            <li>
              <MapPin size={18} className="contact-icon" />
              <span>Department of CSE, Kongu Engineering College, Perundurai, Erode - 638060, Tamil Nadu, India.</span>
            </li>
            <li>
              <Phone size={18} className="contact-icon" />
              <span>+91 4294 226555</span>
            </li>
            <li>
              <Mail size={18} className="contact-icon" />
              <span>csea@kongu.edu</span>
            </li>
            <li>
              <Globe size={18} className="contact-icon" />
              <a href="https://kongu.ac.in" target="_blank" rel="noreferrer">www.kongu.ac.in</a>
            </li>
          </ul>
        </div>

      </div>

      <hr className="footer-divider" />

      {/* Copyright Bar */}
      <div className="footer-bottom-bar">
        <div className="container footer-bottom-container">
          <p>&copy; {new Date().getFullYear()} CSEA - Kongu Engineering College. All Rights Reserved.</p>
          <p className="footer-tagline-motto">WE CAN ∞ WE WILL</p>
        </div>
      </div>
    </footer>
  );
}
