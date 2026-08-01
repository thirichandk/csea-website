import React, { useState } from 'react';
import './OfficeBearerCard.css';

export default function OfficeBearerCard({ name, position, image, fallbackImage, badge }) {
  const [src, setSrc] = useState(image || fallbackImage);

  const handleError = () => {
    if (src !== fallbackImage) {
      setSrc(fallbackImage);
    }
  };

  return (
    <article className="office-card glass-panel">
      <div className="office-card-image">
        <img
          src={src}
          alt={name}
          onError={handleError}
          loading="lazy"
          className="office-image"
        />
      </div>
      <div className="office-card-body">
        <h3>{name}</h3>
        {badge && <span className="office-badge">{badge}</span>}
        <p>{position}</p>
      </div>
    </article>
  );
}
