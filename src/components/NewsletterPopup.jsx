import { useEffect } from 'react';
import { X } from 'lucide-react';
import './NewsletterPopup.css';

const popupCategories = [
  { icon: '💻', title: 'TECH CORNER', detail: 'Technical reports and articles' },
  { icon: '🏆', title: 'STUDENT ACHIEVEMENTS', detail: 'Certificates and achievements' },
  { icon: '🎨', title: 'ARTS & PAINTINGS', detail: 'Creative artwork and paintings' },
  { icon: '💼', title: 'INTERNSHIPS', detail: 'Share your internship experience' },
];

export default function NewsletterPopup({ isOpen, onClose, onViewAllOptions }) {
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = '';
      document.body.style.overflowX = '';
      document.body.style.overflowY = '';
      return undefined;
    }

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
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="newsletter-popup-overlay" role="dialog" aria-modal="true" aria-label="Newsletter submission information">
      <div className="newsletter-popup-card">
        <button className="newsletter-popup-close" onClick={onClose} aria-label="Close newsletter popup">
          <X size={18} />
        </button>

        <div className="newsletter-popup-header">
          <div className="newsletter-popup-badge">CSEA NEWSLETTER</div>
          <h2>YOUR WORK DESERVES TO BE SEEN ✨</h2>
          <p>Have an achievement, technical article, artwork, or internship experience to share?</p>
          <p className="newsletter-popup-subcopy">CSEA invites students to submit their work for a chance to be featured in the CSEA newsletter and website.</p>
        </div>

        <div className="newsletter-popup-options" aria-label="Newsletter categories">
          {popupCategories.map((item) => (
            <div key={item.title} className="newsletter-popup-item">
              <div className="newsletter-popup-item-icon" aria-hidden="true">{item.icon}</div>
              <div className="newsletter-popup-item-copy">
                <span className="newsletter-popup-item-title">{item.title}</span>
                <span className="newsletter-popup-item-detail">{item.detail}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="newsletter-popup-footer">
          <button className="newsletter-popup-primary" onClick={onViewAllOptions}>
            Click to Proceed
          </button>
        </div>
      </div>
    </div>
  );
}
