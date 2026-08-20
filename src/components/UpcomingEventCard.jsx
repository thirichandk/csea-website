import { ArrowRight, CalendarDays, Clock3, MapPin } from 'lucide-react';

export default function UpcomingEventCard({ event, onViewDetails }) {
  return (
    <article className="upcoming-event-card reveal">
      <div className="upcoming-event-card-media">
        <img src={event.poster} alt={`${event.title} workshop poster`} loading="lazy" />
      </div>
      <div className="upcoming-event-card-body">
        <span className="upcoming-event-card-label"><span className="upcoming-event-status-dot" />Upcoming</span>
        <h2>{event.shortTitle}</h2>
        <p className="upcoming-event-card-subtitle">{event.subtitle}</p>
        <p className="upcoming-event-card-description">{event.description || event.shortDesc}</p>
        <div className="upcoming-event-card-meta">
          <span><CalendarDays size={16} /> {event.date}</span>
          <span><Clock3 size={16} /> {event.time}</span>
          <span><MapPin size={16} /> {event.venue}</span>
        </div>
        {event.eligibility && <span className="upcoming-eligibility-badge">{event.eligibility}</span>}
        <div className="upcoming-event-card-actions">
          <button className="upcoming-secondary-button" onClick={() => onViewDetails(event.id)}>View Details</button>
          <a className="upcoming-primary-button" href={event.registrationUrl} target="_blank" rel="noopener noreferrer" onClick={() => sessionStorage.setItem('csea_upcoming_events_seen', 'true')}>Register Now <ArrowRight size={16} /></a>
        </div>
      </div>
    </article>
  );
}
