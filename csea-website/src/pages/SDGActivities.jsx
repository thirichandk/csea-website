import React from 'react';
import meet1Img from '../assets/meet1.jpeg';
import meet2Img from '../assets/meet2.jpeg';
import './SDGActivities.css';

const activity = {
  id: 'sdg-combined',
  title: 'SDG Awareness & Planning Event',
  subtitle: 'A unified event combining both meetings into a single SDG experience',
  description: [
    'The event began with an SDG awareness session to introduce the United Nations Sustainable Development Goals, helping students understand sustainability, social responsibility, and the role of engineering in achieving SDG 4 and SDG 17.',
    'It then moved into a collaborative planning and discussion segment where students and faculty charted future SDG activities, identified student-led projects, and aligned CSEA events with sustainable development priorities.',
  ],
  images: [meet1Img, meet2Img],
  date: '17.07.2026',
  badges: ['SDG 4', 'SDG 9', 'SDG 17'],
};

const placeholderCards = Array.from({ length: 3 }, (_, index) => ({
  id: `coming-soon-${index + 1}`,
  title: 'Coming Soon',
  description: 'More SDG initiatives are being prepared to inspire student leadership, innovation, and responsible engineering.',
}));

export default function SDGActivities() {
  return (
    <section className="sdg-activities-page">
      <div className="sdg-hero glass-panel">
        <div className="sdg-hero-copy">
          <span className="section-badge-blue">SDG Activities</span>
          <h1>SDG Activities</h1>
          <p>Our initiatives aligned with the United Nations Sustainable Development Goals (SDGs) to create awareness, inspire innovation, and promote sustainable development among students.</p>
        </div>
      </div>

      <div className="sdg-content container">
        <article className="sdg-card">
          <div className="sdg-card-images">
            {activity.images.map((image, index) => (
              <div key={index} className="sdg-card-image-wrapper">
                <img src={image} alt={`${activity.title} ${index + 1}`} className="sdg-card-image" />
              </div>
            ))}
          </div>

          <div className="sdg-card-content">
            <div className="sdg-card-meta">
              <span>{activity.date}</span>
              <div className="sdg-badges">
                {activity.badges.map((badge) => (
                  <span key={badge} className="sdg-badge">{badge}</span>
                ))}
              </div>
            </div>
            <h2>{activity.title}</h2>
            <h3>{activity.subtitle}</h3>
            {activity.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </article>

        <section className="sdg-gallery">
          <div className="gallery-header">
            <h2>More SDG Activities Coming Soon</h2>
            <p>These upcoming initiatives will further expand CSEA's commitment to sustainability, innovation, and student-led social action.</p>
          </div>
          <div className="gallery-grid">
            {placeholderCards.map((card) => (
              <div key={card.id} className="gallery-card glass-panel">
                <div className="gallery-card-tag">{card.title}</div>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
