import { useEffect } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { newsletterSubmissions } from '../data/newsletterSubmissions';
import './NewsletterPopup.css';

export default function NewsletterPopup({ isOpen, onClose, onViewAllOptions }) {
  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const previousOverflowX = document.body.style.overflowX;
    const previousOverflowY = document.body.style.overflowY;

    document.body.style.overflow = 'hidden';
    document.body.style.overflowX = 'hidden';
    document.body.style.overflowY = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.overflowX = previousOverflowX;
      document.body.style.overflowY = previousOverflowY;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const openForm = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="newsletter-popup-overlay" role="dialog" aria-modal="true" aria-label="Newsletter submission options">
      <div className="newsletter-popup-card">
        <button className="newsletter-popup-close" onClick={onClose} aria-label="Close newsletter popup">
          <X size={18} />
        </button>

        <div className="newsletter-popup-header">
          <div className="newsletter-popup-badge">CSEA NEWSLETTER</div>
          <h2>YOUR WORK DESERVES TO BE SEEN ✨</h2>
          <p>Have an achievement, technical article, artwork or internship experience to share?</p>
          <p className="newsletter-popup-subcopy">Submit your work and get a chance to be featured in the CSEA newsletter and website.</p>
        </div>

        <div className="newsletter-popup-options">
          {newsletterSubmissions.map((item) => (
            <div key={item.id} className="newsletter-popup-item">
              <div className="newsletter-popup-item-header">
                <span className="newsletter-popup-item-title">{item.category}</span>
              </div>
              <button className="newsletter-popup-submit" onClick={() => openForm(item.formUrl)}>
                SUBMIT NOW
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        <div className="newsletter-popup-footer">
          <button className="newsletter-popup-secondary" onClick={onViewAllOptions}>
            VIEW ALL SUBMISSION OPTIONS
          </button>
        </div>
      </div>
    </div>
  );
}
