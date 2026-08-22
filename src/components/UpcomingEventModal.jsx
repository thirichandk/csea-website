import { useEffect } from 'react';
import { ArrowRight, X } from 'lucide-react';
import './UpcomingEventModal.css';

export default function UpcomingEventModal({ event, isOpen, onClose, onExplore }) {

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const closeWithEscape = (keyboardEvent) => {
      if (keyboardEvent.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', closeWithEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', closeWithEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !event) return null;

  return (
    <div className="upcoming-modal-overlay" role="dialog" aria-modal="true" aria-label="Upcoming event promotion">
      <div className="upcoming-modal-card">
        <button className="upcoming-modal-close" onClick={onClose} aria-label="Close upcoming event">
          <X size={20} />
        </button>
        <img className="upcoming-modal-poster" src={event.poster} alt={`${event.title} poster`} />
        <div className="upcoming-modal-actions">
          <button className="upcoming-primary-button" onClick={onExplore}>EXPLORE <ArrowRight size={16} /></button>
        </div>
      </div>
    </div>
  );
}