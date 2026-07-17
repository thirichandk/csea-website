import React from 'react';
import './Team.css';

// Auto-import images from both assets root and office-bearers folder
const imagesA = import.meta.glob('../assets/office-bearers/*.{jpg,jpeg,png,svg}', { eager: true, import: 'default' });
const imagesB = import.meta.glob('../assets/*.{jpg,jpeg,png,svg}', { eager: true, import: 'default' });
const images = { ...imagesA, ...imagesB };

function findImage(hint) {
  if (!hint) return null;
  const key = String(hint).toLowerCase();
  for (const p in images) {
    const file = p.split('/').pop().toLowerCase();
    if (file.includes(key)) return images[p];
  }
  // fallback to defaultProfile if available
  for (const p in images) {
    if (p.toLowerCase().endsWith('defaultprofile.svg')) return images[p];
  }
  return null;
}

const teamMembers = [
  {
    name: 'Mr. M. R. Prasanndh Raaju',
    role: 'M. S in Data Science and Machine Learning, University of Oldenbourg, Germany',
    imgKey: 'prashandh'
  },
  {
    name: 'Mr. A. Kavinbharathi',
    role: 'Business Analyst, Verteil Technologies, Kochin',
    imgKey: 'kavinbharathi'
  },
  {
    name: 'Mr. Neeraja',
    role: 'BA Role, Solartis',
    imgKey: 'neeraj'
  }
];

const assignedImages = teamMembers.map((member) => findImage(member.imgKey));

const Team = () => {
  return (
    <section className="section team" id="team">
      <div className="container">
        <div className="team-header reveal">
          <h2 className="heading-lg">Our Leadership Legacy</h2>
          <p className="text-lg">The visionaries who paved the way.</p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className={`team-card glass reveal delay-${(index + 1) * 200}`}
            >
              <div className="team-image-skeleton">
                {assignedImages[index] ? (
                  <img src={assignedImages[index]} alt={member.name} className="team-photo" />
                ) : (
                  <div className="skeleton-shimmer"></div>
                )}
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <div className="team-divider"></div>
                <p className="team-year">{member.role || member.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
