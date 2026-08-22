import { CalendarDays } from 'lucide-react';

export default function UpcomingEventCard({ event, onViewDetails }) {
  return (
    <article className="upcoming-event-card reveal">
      <div className="upcoming-event-card-media">
        <img src={event.poster} alt={`${event.title} workshop poster`} loading="lazy" />
      </div>
      <div className="upcoming-event-card-body">
        <span className="upcoming-event-card-label"><span className="upcoming-event-status-dot" />Upcoming</span>
        {event.registrationStatus && <span className="upcoming-registration-status">{event.registrationStatus}</span>}
        <div className="upcoming-event-card-category">{event.category} <span>{event.day}</span></div>
        <h2>{event.shortTitle}</h2>
        <p className="upcoming-event-card-subtitle">{event.subtitle}</p>
        <p className="upcoming-event-card-description">{event.description || event.shortDesc}</p>
        <div className="upcoming-event-card-meta">
          <span><CalendarDays size={16} /> {event.date}</span>
        </div>
        {event.topic && <p className="upcoming-event-card-topic"><strong>Topic:</strong> {event.topic}</p>}
        {event.highlight && <p className="upcoming-event-card-highlight">{event.highlight}</p>}
        <div className="upcoming-event-card-actions">
          <button className="upcoming-secondary-button" onClick={() => onViewDetails(event.id)}>VIEW DETAILS</button>
        </div>
      </div>
    </article>
  );
}
