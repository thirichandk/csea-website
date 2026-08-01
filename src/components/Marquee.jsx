import React from 'react';
import './Marquee.css';

const Marquee = () => {
  const items = [
    '💡 Innovate (Hackathons)',
    '🏆 Compete (Contests)',
    '📚 Learn (Workshops)',
    '👨‍🏫 Mentor (Bootcamps)',
    '🌐 Connect (Networking)',
    '🎊 Celebrate (Fests)'
  ];

  // Duplicate items array a few times to ensure seamless infinite scrolling
  const marqueeContent = [...items, ...items, ...items].map((item, index) => (
    <React.Fragment key={index}>
      <span className="marquee-item">{item}</span>
      <span className="marquee-separator">✦</span>
    </React.Fragment>
  ));

  return (
    <div className="marquee-container">
      <div className="marquee-track">
        {marqueeContent}
      </div>
    </div>
  );
};

export default Marquee;
