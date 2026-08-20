import React from 'react';
import sdg1Img from '../assets/sdg1.jpg';
import sdg2Img from '../assets/sdg2.jpg';
import sdg3Img from '../assets/sdg3.jpg';
import sdg4Img from '../assets/sdg4.jpg';
import meet1Img from '../assets/meet1.jpeg';
import meet2Img from '../assets/meet2.jpeg';
import './SDGActivities.css';

const awarenessActivity = {
  id: 'sdg-awareness-campaign',
  title: 'SDG Awareness Campaign',
  subtitle: 'Creating awareness among students about sustainability, responsible innovation, and the role of engineering in nation-building',
  description: [
    'The SDG awareness session was designed to help students understand the significance of the United Nations Sustainable Development Goals in daily life, education, and future careers. Through a focused interaction, the session connected global sustainability themes with the practical responsibilities of engineering students.',
    'Students were encouraged to recognize how technical learning, teamwork, and community action can contribute to goals such as quality education, decent work, innovation, and partnerships. The campaign emphasized that awareness is the first step toward meaningful participation, leadership, and responsible decision-making.',
  ],
  images: [sdg1Img, sdg2Img, sdg3Img, sdg4Img],
  date: '30.07.2026',
  badges: ['SDG 4', 'SDG 8', 'SDG 9', 'SDG 17'],
};

const activity = {
  id: 'sdg-combined',
  title: 'SDG Awareness & Planning Event',
  subtitle: 'A unified event combining awareness-building and collaborative planning into one SDG experience',
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

export default function SDGActivities({ onOpenCampaign }) {
  return (
    <section className="sdg-activities-page">
      <div className="sdg-content container">
        <article className="sdg-campaign-card glass-panel">
          <div className="sdg-campaign-copy">
            <div className="sdg-card-meta">
              <span>15 August 2026 – 31 August 2026</span>
              <div className="sdg-badges">
                <span className="sdg-badge">SDG 12</span>
                <span className="sdg-badge">SDG 15</span>
              </div>
            </div>
            <h2>SAY NO TO PLASTIC</h2>
            <h3>17 Days • One Mission • A Cleaner Tomorrow</h3>
            <p>CSEA's plastic-awareness initiative brings students together to understand plastic pollution, make responsible choices, and build practical habits for a cleaner tomorrow.</p>
            <button type="button" className="sdg-campaign-button" onClick={onOpenCampaign}>
              Explore Campaign
            </button>
          </div>
        </article>

        <div className="sdg-existing-activities-header">
          <span className="section-badge-blue">MORE SDG ACTIVITIES</span>
          <h2>More SDG Activities</h2>
        </div>

        <section className="sdg-awareness-section glass-panel">
          <div className="sdg-awareness-layout">
            <div className="sdg-awareness-grid">
              {awarenessActivity.images.map((image, index) => (
                <div key={index} className="sdg-awareness-image-card">
                  <img src={image} alt={`${awarenessActivity.title} visual ${index + 1}`} className="sdg-awareness-image" />
                </div>
              ))}
            </div>

            <div className="sdg-awareness-content">
              <div className="sdg-awareness-header">
                <span className="section-badge-blue">SDG Awareness Drive</span>
                <h2>{awarenessActivity.title}</h2>
                <p>{awarenessActivity.subtitle}</p>
              </div>

              <div className="sdg-card-meta">
                <span>{awarenessActivity.date}</span>
                <div className="sdg-badges">
                  {awarenessActivity.badges.map((badge) => (
                    <span key={badge} className="sdg-badge">{badge}</span>
                  ))}
                </div>
              </div>

              {awarenessActivity.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

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
