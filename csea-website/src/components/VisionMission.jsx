import React from 'react';
import './VisionMission.css';
import PodcastSection from './PodcastSection';

const VisionMission = () => {
  return (
    <>
      <PodcastSection />
      <section className="section bento-section" id="vision">
      <div className="container">
        
        <div className="bento-grid">
          {/* Hero Card - Vision */}
          <div className="bento-card bento-hero reveal">
            <h2 className="bento-title">Our Vision</h2>
            <blockquote className="vision-quote">
              “To cultivate a vibrant community of innovative thinkers, responsible professionals, and future technology leaders”
            </blockquote>
          </div>

          {/* Mission Cards */}
          <div className="bento-card reveal delay-100">
            <div className="bento-icon">💡</div>
            <h3 className="bento-card-title">Innovation</h3>
            <p className="bento-card-desc">Encourage students to explore and create meaningful solutions.</p>
          </div>

          <div className="bento-card reveal delay-200">
            <div className="bento-icon">📈</div>
            <h3 className="bento-card-title">Professional Growth</h3>
            <p className="bento-card-desc">Enhance technical leadership and communication skills.</p>
          </div>

          <div className="bento-card reveal delay-300">
            <div className="bento-icon">🏢</div>
            <h3 className="bento-card-title">Industry Readiness</h3>
            <p className="bento-card-desc">Bridge the gap with practical exposure and networking.</p>
          </div>

          <div className="bento-card reveal delay-400">
            <div className="bento-icon">🤝</div>
            <h3 className="bento-card-title">Collaboration</h3>
            <p className="bento-card-desc">Foster teamwork and interdisciplinary learning.</p>
          </div>

          <div className="bento-card reveal delay-500 bento-wide">
            <div className="bento-icon">📚</div>
            <h3 className="bento-card-title">Lifelong Learning</h3>
            <p className="bento-card-desc">Promote continuous growth and adaptability in an ever-changing tech landscape.</p>
          </div>

        </div>
      </div>
    </section>
    </>
  );
};

export default VisionMission;
