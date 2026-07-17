import React, { useEffect, useRef, useState } from 'react';
import './Journey.css';

const journeySteps = [
  { icon: '💡', title: 'Ideate', description: 'Brainstorming and idea-pitching.' },
  { icon: '🛠️', title: 'Build', description: 'Hackathons and coding events.' },
  { icon: '📖', title: 'Learn', description: 'Skill-building workshops.' },
  { icon: '👨‍🏫', title: 'Mentor', description: 'Alumni-led bootcamps.' },
  { icon: '🎉', title: 'Celebrate', description: 'Flagship technical fests.' }
];

const Journey = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (wrapperRef.current) {
        const { top, height } = wrapperRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate progress based on how far the container is scrolled through the viewport
        // Start when container top hits middle of viewport, end when container bottom hits middle
        const start = windowHeight / 2;
        let progress = (start - top) / height;
        
        progress = Math.max(0, Math.min(1, progress));
        setScrollProgress(progress * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="section journey" id="journey">
      <div className="container">
        <div className="journey-header reveal">
          <h2 className="heading-lg">The CSEA Journey</h2>
          <p className="text-lg">Transforming potential into excellence step-by-step.</p>
        </div>

        <div className="stepper-wrapper" ref={wrapperRef}>
          <div className="stepper-line-bg"></div>
          <div 
            className="stepper-line-progress" 
            style={{ height: `${scrollProgress}%` }}
          ></div>

          {journeySteps.map((step, index) => {
            const stepThreshold = (index / (journeySteps.length - 1)) * 100;
            const isActive = scrollProgress >= stepThreshold - 10; // little buffer

            return (
              <div 
                key={index} 
                className={`stepper-item ${isActive ? 'active' : ''}`}
              >
                <div className="stepper-icon-wrapper">
                  <div className="stepper-icon">{step.icon}</div>
                </div>
                <div className="stepper-content">
                  <span className="stepper-num">0{index + 1}</span>
                  <h3 className="stepper-title">{step.title}</h3>
                  <p className="stepper-desc">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Journey;
