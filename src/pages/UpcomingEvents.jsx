import { Sparkles } from 'lucide-react';
import { getUpcomingEvents } from '../data/upcomingEvents';
import UpcomingEventCard from '../components/UpcomingEventCard';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './UpcomingEvents.css';

export default function UpcomingEvents({ onBack, onViewDetails }) {
  useScrollReveal('upcoming-events');
  const events = getUpcomingEvents();

  return (
    <main className="upcoming-events-page">
      <div className="container">
        <button className="upcoming-back-link" onClick={onBack}>Back to Home</button>
        <section className="upcoming-hero reveal">
          <div className="section-badge"><Sparkles size={15} /> UPCOMING EVENTS</div>
          <h1>What's happening at CSEA</h1>
          <p className="upcoming-hero-subtitle">Discover workshops, learning sessions and opportunities designed to help you learn, connect and grow.</p>
        </section>
        <section className="upcoming-events-grid">
          {events.map((event) => <UpcomingEventCard key={event.id} event={event} onViewDetails={onViewDetails} />)}
        </section>
      </div>
    </main>
  );
}