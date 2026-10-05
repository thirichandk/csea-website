import { useEffect } from 'react';
import { ArrowRight, X } from 'lucide-react';
import './UpcomingEventModal.css';

export default function UpcomingEventModal({ event, isOpen, onClose, onExplore }) {
  const shouldShow = Boolean(isOpen && event);

  useEffect(() => {
    if (!shouldShow) return undefined;

    const bodyStyle = document.body.style;
    const previousOverflow = bodyStyle.overflow;
    const previousOverflowX = bodyStyle.overflowX;
    const previousOverflowY = bodyStyle.overflowY;

    bodyStyle.overflow = 'hidden';
    bodyStyle.overflowX = 'hidden';
    bodyStyle.overflowY = 'hidden';

    const closeWithEscape = (keyboardEvent) => {
      if (keyboardEvent.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', closeWithEscape);

    return () => {
      bodyStyle.overflow = previousOverflow;
      bodyStyle.overflowX = previousOverflowX;
      bodyStyle.overflowY = previousOverflowY;
      document.removeEventListener('keydown', closeWithEscape);
    };
  }, [shouldShow, onClose]);

  if (!shouldShow) return null;

  return (
    <div 
      className="upcoming-modal-overlay" 
      role="dialog" 
      aria-modal="true" 
      aria-label="Upcoming event promotion"
      onClick={onClose}
    >
      <div className="upcoming-modal-card" onClick={(e) => e.stopPropagation()}>
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