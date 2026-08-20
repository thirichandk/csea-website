import { ArrowLeft, CalendarDays, Clock3, GraduationCap, MapPin, Sparkles } from 'lucide-react';
import { eventsData, getEventStatus } from '../data/events';
import './CompletedEventDetails.css';

export default function CompletedEventDetails({ eventId, onBack }) {
  const event = eventsData.find((item) => item.id === eventId && getEventStatus(item) === 'completed');

  if (!event) {
    return (
      <main className="completed-event-page">
        <div className="container">
          <button className="upcoming-back-link" onClick={onBack}><ArrowLeft size={16} /> Back to Explore Events</button>
          <h1 className="upcoming-empty-title">Event not found</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="completed-event-page">
      <div className="container">
        <button className="upcoming-back-link" onClick={onBack}><ArrowLeft size={16} /> Back to Explore Events</button>
        <section className="completed-event-hero reveal">
          <div className="section-badge"><Sparkles size={15} /> EVENT COMPLETED</div>
          <p className="completed-event-year">{event.academicYear}</p>
          <h1>{event.title}</h1>
          <p className="completed-event-intro">CSEA Events &amp; Activities</p>
        </section>

        <section className="completed-event-layout">
          <img className="completed-event-poster" src={event.poster} alt={`${event.title} poster`} />
          <div className="completed-event-content">
            <span className="completed-event-status">Completed</span>
            <h2>Event Overview</h2>
            <p>{event.detailedDesc || event.shortDesc}</p>
            <div className="completed-event-meta">
              <div><CalendarDays size={18} /><span><strong>Date</strong>{event.date}</span></div>
              {event.time && <div><Clock3 size={18} /><span><strong>Time</strong>{event.time}</span></div>}
              {event.venue && <div><MapPin size={18} /><span><strong>Venue</strong>{event.venue}</span></div>}
              {event.eligibility && <div><GraduationCap size={18} /><span><strong>Eligibility</strong>{event.eligibility}</span></div>}
            </div>
            {event.speaker && (
              <div className="completed-event-speaker">
                <span>Chief Guest</span>
                <h3>{event.speaker.name}</h3>
                <p>{event.speaker.designation}</p>
                <p>{event.speaker.organization}</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
