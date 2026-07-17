import React, { useEffect } from 'react';
import { X, Calendar, Clock, MapPin, Users, Award, CheckCircle, ArrowRight } from 'lucide-react';
import AnimationPlayground from './AnimationPlayground';

export default function EventModal({ event, onClose }) {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!event) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content glass-panel" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose}>
          <X size={24} />
        </button>

        {/* Modal Scrollable Container */}
        <div className="modal-inner">
          
          {/* Header Banner */}
          <div className="modal-header-banner">
            <span className="modal-category-tag">{event.category.toUpperCase().replace('_', ' ')}</span>
            <h2 className="modal-title">{event.title}</h2>
            <div className="modal-meta-row">
              <span className="modal-meta-item">
                <Calendar size={16} />
                <span>{event.date}</span>
              </span>
              {event.time && (
                <span className="modal-meta-item">
                  <Clock size={16} />
                  <span>{event.time}</span>
                </span>
              )}
            </div>
          </div>

          <hr className="modal-divider" />

          {/* Body Content Grid */}
          <div className="modal-body-grid">
            {/* Left Content Column */}
            <div className="modal-main-column">
              <h3 className="section-title">About the Event</h3>
              <p className="detailed-description">{event.detailedDesc || event.shortDesc}</p>

              {/* Custom Interactive Sandbox for Animation Workshop */}
              {event.id === 'animation-workshop' && (
                <div className="modal-playground-section mb-6">
                  <AnimationPlayground />
                </div>
              )}

              {/* Highlights (for AlgoArena, etc.) */}
              {event.highlights && (
                <div className="highlights-section">
                  <h3 className="section-title">Key Highlights</h3>
                  <ul className="highlights-list">
                    {event.highlights.map((highlight, idx) => (
                      <li key={idx} className="highlight-item">
                        <CheckCircle size={16} className="highlight-icon" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Sub-Events (for Renaissance, Crescita) */}
              {event.technicalEvents && (
                <div className="sub-events-section">
                  <h3 className="section-title">Technical Events</h3>
                  <div className="sub-events-grid">
                    {event.technicalEvents.map((sub, idx) => (
                      <div key={idx} className="sub-event-card">
                        <h4>{sub.name}</h4>
                        <p>{sub.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {event.nonTechnicalEvents && (
                <div className="sub-events-section mt-4">
                  <h3 className="section-title">Non-Technical Events</h3>
                  <div className="sub-events-grid">
                    {event.nonTechnicalEvents.map((sub, idx) => (
                      <div key={idx} className="sub-event-card non-tech">
                        <h4>{sub.name}</h4>
                        <p>{sub.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {event.subEvents && (
                <div className="sub-events-section">
                  <h3 className="section-title">Symposium Events</h3>
                  <div className="sub-events-grid">
                    {event.subEvents.map((sub, idx) => (
                      <div key={idx} className="sub-event-card crescendo">
                        <h4>{sub.name}</h4>
                        <p>{sub.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Information Column */}
            <div className="modal-side-column">
              {/* Event Statistics */}
              <div className="side-card stats-side glass-panel">
                <h4 className="side-title">Quick Stats</h4>
                <div className="side-stats-list">
                  {event.stats && Object.entries(event.stats).map(([key, val]) => (
                    <div key={key} className="side-stat-item">
                      <span className="stat-key">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</span>
                      <span className="stat-val">{val}</span>
                    </div>
                  ))}
                  <div className="side-stat-item">
                    <span className="stat-key">Status</span>
                    <span className="stat-val status-badge">Completed</span>
                  </div>
                </div>
              </div>

              {/* Agenda (for Fullstack, Renaissance, Elevate-X) */}
              {event.agenda && (
                <div className="side-card agenda-side glass-panel">
                  <h4 className="side-title">Event Schedule</h4>
                  <div className="timeline">
                    {event.agenda.map((item, idx) => (
                      <div key={idx} className="timeline-item">
                        <div className="timeline-time">{item.time || item.session}</div>
                        <div className="timeline-content">{item.event || item.activity}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Committee/People */}
              {event.keyPeople && (
                <div className="side-card people-side glass-panel">
                  <h4 className="side-title">Event Organization</h4>
                  <div className="people-list">
                    {event.keyPeople.map((person, idx) => (
                      <div key={idx} className="person-item">
                        <span className="person-name">{person.name}</span>
                        <span className="person-role">{person.role}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
