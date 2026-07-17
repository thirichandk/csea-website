import React from 'react';
import './Team.css';

// Auto-import any images placed in src/assets/office-bearers
const images = import.meta.glob('../assets/office-bearers/*.{jpg,jpeg,png,svg}', { eager: true, import: 'default' });

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
  { name: 'Prashandh Raju', year: '[Academic Year]', imgKey: 'prashandh' },
  { name: 'Kavinbharathi', year: '[Academic Year]', imgKey: 'kavin' },
  { name: 'Neeraj', year: '[Academic Year]', imgKey: 'neeraj' }
];

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
                {(() => {
                  const src = findImage(member.imgKey);
                  return src ? (
                    <img src={src} alt={member.name} className="team-photo" />
                  ) : (
                    <div className="skeleton-shimmer"></div>
                  );
                })()}
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <div className="team-divider"></div>
                <p className="team-year">{member.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
