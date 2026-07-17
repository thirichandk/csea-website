import React from 'react';
import './OfficeBearers.css';
import OfficeBearerCard from './OfficeBearerCard';
import { officeBearers } from '../data/officeBearers';

const orderedSections = [
  'facultyCoordinators',
  'secretary',
  'treasurer',
  'jointSecretary',
  'executives',
  'newsletter',
  'media'
];

export default function OfficeBearers() {
  return (
    <div className="office-bearers-wrapper">
      <div className="office-header">
        <div className="section-badge">OFFICE BEARERS</div>
        <h2 className="office-title">CSEA Office Bearers</h2>
        <p className="office-description">
          A modern layout for the full CSEA leadership roster with responsive cards, glassmorphism styling, and clean section flow.
        </p>
      </div>

      {orderedSections.map((sectionKey) => {
        const section = officeBearers[sectionKey];
        if (!section) return null;

        return (
          <section key={sectionKey} className="office-section">
            <div className="section-heading-wrap">
              <h3 className="office-section-title">{section.title}</h3>
              <div className="section-divider" />
            </div>
            <div className="office-bearers-grid">
              {section.members.map((member) => (
                <OfficeBearerCard
                  key={member.name}
                  name={member.name}
                  position={member.position}
                  badge={member.badge}
                  image={member.image}
                  fallbackImage={officeBearers.fallbackImage}
                />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
