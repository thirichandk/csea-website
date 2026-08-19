import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, CalendarDays, Clock3, MapPin, X } from 'lucide-react';
import { isEventUpcoming } from '../data/upcomingEvents';
import './UpcomingEventModal.css';

const SEEN_KEY = 'csea_upcoming_event_seen';

export default function UpcomingEventModal({ events, onViewEvent, onViewAll }) {
  const [isOpen, setIsOpen] = useState(() => events.length > 0 && !sessionStorage.getItem(SEEN_KEY));
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const touchStart = useRef(null);
  const event = events[activeIndex];

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const closeWithEscape = (keyboardEvent) => {
      if (keyboardEvent.key === 'Escape') closeModal();
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', closeWithEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', closeWithEscape);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !isAutoPlaying || events.length < 2) return undefined;
    const timer = window.setInterval(() => setActiveIndex((index) => (index + 1) % events.length), 5000);
    return () => window.clearInterval(timer);
  }, [isOpen, isAutoPlaying, events.length]);

  const closeModal = () => {
    sessionStorage.setItem(SEEN_KEY, 'true');
    setIsOpen(false);
  };

  const handleViewEvent = () => {
    closeModal();
    onViewEvent(event.id);
  };

  const handleRegister = () => {
    sessionStorage.setItem(SEEN_KEY, 'true');
  };

  const moveTo = (nextIndex) => setActiveIndex((nextIndex + events.length) % events.length);
  const handleTouchStart = (touchEvent) => { touchStart.current = touchEvent.touches[0].clientX; };
  const handleTouchEnd = (touchEvent) => {
    if (touchStart.current === null) return;
    const distance = touchStart.current - touchEvent.changedTouches[0].clientX;
    if (Math.abs(distance) > 45) { setIsAutoPlaying(false); moveTo(activeIndex + (distance > 0 ? 1 : -1)); }
    touchStart.current = null;
  };

  if (!isOpen || !event || !isEventUpcoming(event)) return null;

  return (
    <div className="upcoming-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="upcoming-events-title">
      <div className="upcoming-modal-card" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <button className="upcoming-modal-close" onClick={closeModal} aria-label="Close upcoming event">
          <X size={20} />
        </button>
        <div className="upcoming-modal-label">Upcoming Events</div>
        <p id="upcoming-events-title" className="upcoming-modal-intro">Don't miss the latest events and workshops from CSEA.</p>
        <div className="upcoming-modal-slide">
        <img className="upcoming-modal-poster" src={event.poster} alt={`${event.title} workshop poster`} />
        <p className="upcoming-modal-event-label">Upcoming Event</p>
        <h2>{event.shortTitle}</h2>
        <p className="upcoming-modal-subtitle">{event.subtitle}</p>
        <div className="upcoming-modal-meta">
          <span><CalendarDays size={16} /> {event.date}</span>
          <span><Clock3 size={16} /> {event.time}</span>
          <span><MapPin size={16} /> {event.venue}</span>
        </div>
        {event.eligibility && <div className="upcoming-eligibility-badge">{event.eligibility}</div>}
        <div className="upcoming-modal-actions">
          <button className="upcoming-secondary-button" onClick={handleViewEvent}>View Details <ArrowRight size={16} /></button>
          <a className="upcoming-primary-button" href={event.registrationUrl} target="_blank" rel="noopener noreferrer" onClick={handleRegister}>Register Now</a>
        </div>
        </div>
        {events.length > 1 && <div className="upcoming-carousel-controls">
          <button onClick={() => { setIsAutoPlaying(false); moveTo(activeIndex - 1); }} aria-label="Previous event"><ArrowLeft size={18} /></button>
          <div className="upcoming-carousel-dots">{events.map((slideEvent, index) => <button key={slideEvent.id} className={index === activeIndex ? 'active' : ''} onClick={() => { setIsAutoPlaying(false); moveTo(index); }} aria-label={`Show ${slideEvent.shortTitle}`} />)}</div>
          <button onClick={() => { setIsAutoPlaying(false); moveTo(activeIndex + 1); }} aria-label="Next event"><ArrowRight size={18} /></button>
        </div>}
        <p className="upcoming-slide-count">{activeIndex + 1} of {events.length} events</p>
        <button className="upcoming-view-all" onClick={() => { closeModal(); onViewAll(); }}>View All Upcoming Events</button>
      </div>
    </div>
  );
}