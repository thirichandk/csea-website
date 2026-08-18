import React from 'react';
import './PodcastSection.css';
import podcastImage from '../assets/podcast3.jpg';

const PodcastSection = () => {
  const youtubeLink = 'https://youtu.be/2Du9UijuQeg?si=RyAsIgHRTfQtepci';

  return (
    <section className="section podcast-section" id="podcast">
      <div className="container">
        <div className="podcast-card reveal">
          <div className="podcast-media">
            <img
              src={podcastImage}
              alt="CSE Voice podcast"
              className="podcast-image"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80';
              }}
            />
          </div>
          <div className="podcast-content">
            <div className="section-badge">C S E&nbsp;V O I C E</div>
            <h2 className="podcast-title">Podcast Series</h2>
            <p className="podcast-description">
              CSE Voice is a platform where students and professionals share inspiring stories, technical insights, and real-world experiences that shape the future of computing.
            </p>
            <a
              href={youtubeLink}
              target="_blank"
              rel="noreferrer"
              className="podcast-link"
            >
              Watch on YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;
