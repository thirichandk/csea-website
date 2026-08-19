import { CalendarDays, Clock3, MapPin, GraduationCap, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { getEventById } from '../data/upcomingEvents';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './UpcomingEvents.css';

export default function UpcomingEventDetails({ eventId, onBack }) {
  useScrollReveal(eventId);
  const event = getEventById(eventId);

  if (!event) {
    return <main className="upcoming-events-page"><div className="container"><button className="upcoming-back-link" onClick={onBack}><ArrowLeft size={16} /> Back to Upcoming Events</button><h1 className="upcoming-empty-title">Event not found</h1></div></main>;
  }

  const register = () => sessionStorage.setItem('csea_upcoming_events_seen', 'true');

  return (
    <main className="upcoming-events-page upcoming-event-details-page">
      <div className="container">
        <button className="upcoming-back-link" onClick={onBack}><ArrowLeft size={16} /> Back to Upcoming Events</button>
        <section className="upcoming-details-hero reveal">
          <div className="section-badge"><Sparkles size={15} /> UPCOMING EVENT</div>
          <h1>{event.shortTitle}</h1>
          <p className="upcoming-hero-subtitle">{event.subtitle}</p>
          <a className="upcoming-details-top-cta" href={event.registrationUrl} target="_blank" rel="noopener noreferrer" onClick={register}>Register Now <ArrowRight size={16} /></a>
          <img className="upcoming-details-poster" src={event.poster} alt={`${event.title} workshop poster`} />
        </section>

        <section className="upcoming-details-info-grid">
          <div><CalendarDays /><span>DATE</span><strong>{event.date}</strong></div>
          <div><Clock3 /><span>TIME</span><strong>{event.time}</strong></div>
          <div><MapPin /><span>VENUE</span><strong>{event.venue}</strong></div>
          <div><GraduationCap /><span>ELIGIBILITY</span><strong>{event.eligibility}</strong></div>
        </section>

        <section className="upcoming-details-copy-grid">
          <article className="upcoming-copy-block reveal"><div className="upcoming-section-kicker">About the Event</div><h2>Make your next move count.</h2><p>{event.description}</p></article>
          <article className="upcoming-guest-block reveal"><div className="upcoming-section-kicker">{event.speakerLabel}</div><h2>{event.speaker.name}</h2>{event.speaker.achievement && <p>{event.speaker.achievement}</p>}<p>{event.speaker.designation}</p><p>{event.speaker.organization}</p></article>
        </section>

        <section className="upcoming-details-message reveal"><div className="upcoming-section-kicker">Why You Should Attend</div><h2>{event.message}</h2>{event.organizedBy && <p>{event.organizedBy}</p>}<a href={event.registrationUrl} target="_blank" rel="noopener noreferrer" onClick={register}>Register Now <ArrowRight size={16} /></a></section>
      </div>
    </main>
  );
}
