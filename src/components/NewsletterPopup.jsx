import { useEffect } from 'react';
import { 
  X, 
  Code2, 
  Palette, 
  Trophy, 
  Briefcase, 
  ExternalLink, 
  Sparkles, 
  BookOpen, 
  ArrowRight 
} from 'lucide-react';
import { newsletterSubmissions } from '../data/newsletterSubmissions';
import './NewsletterPopup.css';

const ICON_MAP = {
  code: Code2,
  palette: Palette,
  trophy: Trophy,
  briefcase: Briefcase,
};

export default function NewsletterPopup({ isOpen, onClose, onReadNewsletter }) {
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
      if (event.key === 'Escape') {
        onClose();
      }
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

  return (
    <div 
      className="newsletter-popup-overlay" 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="newsletter-modal-title"
      onClick={onClose}
    >
      <div 
        className="newsletter-popup-card" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          className="newsletter-popup-close" 
          onClick={onClose} 
          aria-label="Close newsletter submission modal"
          type="button"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="newsletter-popup-header">
          <div className="newsletter-popup-badge">
            <Sparkles size={14} className="newsletter-badge-icon" />
            <span>SCRIPTUS · EDITION 02 SUBMISSIONS OPEN</span>
          </div>

          <h2 id="newsletter-modal-title" className="newsletter-popup-title">
            Be Featured in the Department Newsletter! 🚀
          </h2>

          <p className="newsletter-popup-desc">
            We are curating student stories, technical write-ups, creative artwork, and achievements for the{' '}
            <strong>2nd Edition of Scriptus</strong>. Select a domain below and submit your entry through Google Forms:
          </p>
        </div>

        {/* Categories Grid (4 Google Form Links) */}
        <div className="newsletter-popup-grid" role="list">
          {newsletterSubmissions.map((item) => {
            const IconComponent = ICON_MAP[item.icon] || Sparkles;
            return (
              <div 
                key={item.id} 
                className={`newsletter-field-card theme-${item.theme || 'orange'}`}
                role="listitem"
              >
                <div className="field-card-top">
                  <div className={`field-icon-box theme-${item.theme || 'orange'}`}>
                    <IconComponent size={22} />
                  </div>
                  <div className="field-meta">
                    <span className="field-category-tag">{item.category}</span>
                    <h3 className="field-title">{item.title}</h3>
                  </div>
                </div>

                <p className="field-description">{item.description}</p>

                <div className="field-action-row">
                  <a 
                    href={item.formUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`btn-field-submit theme-${item.theme || 'orange'}`}
                    title={`Open Google Form for ${item.title}`}
                  >
                    <span>{item.buttonText}</span>
                    <ExternalLink size={15} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner & Actions */}
        <div className="newsletter-popup-bottom">
          <div className="newsletter-bottom-hint">
            <span className="hint-indicator">●</span>
            <span>Open to all CSE students · Contributions will be published with full student credits!</span>
          </div>

          <div className="newsletter-popup-actions">
            {onReadNewsletter && (
              <button 
                type="button" 
                className="btn-popup-secondary" 
                onClick={() => {
                  onClose();
                  onReadNewsletter();
                }}
              >
                <BookOpen size={16} />
                <span>Read Edition 01</span>
              </button>
            )}

            <button 
              type="button" 
              className="btn-popup-dismiss" 
              onClick={onClose}
            >
              <span>Remind Me Later</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
