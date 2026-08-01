import React from 'react';
import { Calendar, Clock, MapPin, Users, ChevronRight, Award } from 'lucide-react';

export default function EventCard({ event, onViewDetails }) {
  const getCategoryMeta = (cat) => {
    switch (cat) {
      case 'workshop':
        return { label: 'Workshop', className: 'badge-workshop' };
      case 'guest_lecture':
        return { label: 'Guest Lecture', className: 'badge-lecture' };
      case 'bootcamp':
        return { label: 'Bootcamp', className: 'badge-bootcamp' };
      case 'major_event':
        return { label: 'CSEA Major Event', className: 'badge-major' };
      default:
        return { label: 'Event', className: 'badge-default' };
    }
  };

  const meta = getCategoryMeta(event.category);
  
  // Check if this event has substantial detailed info to warrant a details modal
  const hasDetails = !!(event.detailedDesc || event.agenda || event.technicalEvents || event.subEvents || event.highlights);

  return (
    <div className="event-card glass-panel">
      {/* Decorative Top Accent Border */}
      <div className={`card-accent-bar ${meta.className}`}></div>
      
      <div className="card-body">
        {/* Badge & Date Header */}
        <div className="card-header-meta">
          <span className={`category-badge ${meta.className}`}>{meta.label}</span>
          <div className="card-date-wrapper">
            <Calendar size={14} className="date-icon" />
            <span className="card-date">{event.date}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="card-title">{event.title}</h3>

        {/* Short Description */}
        <p className="card-short-desc">{event.shortDesc}</p>

        {/* Stats / Quick Info Chips */}
        {event.stats && (
          <div className="card-stats-chips">
            {event.stats.duration && (
              <span className="info-chip">
                <Clock size={12} />
                <span>{event.stats.duration}</span>
              </span>
            )}
            {event.stats.studentsAttended && (
              <span className="info-chip">
                <Users size={12} />
                <span>{event.stats.studentsAttended} Attended</span>
              </span>
            )}
            {event.stats.type && (
              <span className="info-chip">
                <Award size={12} />
                <span>{event.stats.type}</span>
              </span>
            )}
            {event.stats.scope && (
              <span className="info-chip">
                <Award size={12} />
                <span>{event.stats.scope}</span>
              </span>
            )}
          </div>
        )}

        {/* Call to Action */}
        <div className="card-footer-action">
          {hasDetails ? (
            <button 
              className="btn-card-details" 
              onClick={() => onViewDetails(event)}
            >
              <span>View Details</span>
              <ChevronRight size={16} className="arrow-icon" />
            </button>
          ) : (
            <span className="static-event-tag">CSEA Event</span>
          )}
        </div>
      </div>
    </div>
  );
}
