import { CalendarDays } from 'lucide-react';
import './UpcomingEventsAccess.css';

export default function UpcomingEventsAccess({ count, onNavigate }) {
  return (
    <button className="upcoming-events-access" type="button" onClick={onNavigate} aria-label={`View upcoming events${count ? `, ${count} available` : ''}`}>
      <CalendarDays size={18} aria-hidden="true" />
      <span>Upcoming Events</span>
      {count > 0 && <span className="upcoming-events-access-dot" aria-hidden="true" />}
    </button>
  );
}