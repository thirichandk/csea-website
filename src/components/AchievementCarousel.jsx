import React, { useEffect, useRef, useState } from 'react';

export default function AchievementCarousel({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  const resumeTimerRef = useRef(null);

  const itemCount = items.length;

  const goToIndex = (index) => {
    setActiveIndex((index + itemCount) % itemCount);
  };

  const showNext = () => goToIndex(activeIndex + 1);
  const showPrev = () => goToIndex(activeIndex - 1);

  const scheduleAutoResume = () => {
    if (resumeTimerRef.current) {
      window.clearTimeout(resumeTimerRef.current);
    }
    resumeTimerRef.current = window.setTimeout(() => {
      setIsPaused(false);
    }, 4500);
  };

  const CAROUSEL_INTERVAL = 2000;

  const handleInteraction = () => {
    setIsPaused(true);
    scheduleAutoResume();
  };

  useEffect(() => {
    if (isPaused) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      showNext();
    }, CAROUSEL_INTERVAL);

    return () => window.clearTimeout(timer);
  }, [activeIndex, isPaused, itemCount]);

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) {
        window.clearTimeout(resumeTimerRef.current);
      }
    };
  }, []);

  const handleTouchStart = (event) => {
    setTouchStartX(event.touches[0]?.clientX ?? null);
  };

  const handleTouchEnd = (event) => {
    if (touchStartX === null) {
      return;
    }

    const touchEndX = event.changedTouches[0]?.clientX ?? 0;
    const deltaX = touchEndX - touchStartX;
    const swipeThreshold = 40;

    if (Math.abs(deltaX) >= swipeThreshold) {
      if (deltaX > 0) {
        showPrev();
      } else {
        showNext();
      }
      handleInteraction();
    }

    setTouchStartX(null);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      showPrev();
      handleInteraction();
    }
    if (event.key === 'ArrowRight') {
      showNext();
      handleInteraction();
    }
  };

  if (itemCount === 0) {
    return null;
  }

  return (
    <section
      className="achievement-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Achievement photo carousel"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="achievement-carousel-image-wrapper">
        {items.map((item, index) => (
          <div
            key={index}
            className={`achievement-carousel-slide ${index === activeIndex ? 'active' : ''}`}
            aria-hidden={index !== activeIndex}
          >
            <img
              src={item.image}
              alt={item.title}
              className="achievement-carousel-image"
            />
          </div>
        ))}

        <button
          type="button"
          className="achievement-carousel-nav achievement-carousel-carousel-nav-prev"
          onClick={() => {
            showPrev();
            handleInteraction();
          }}
          aria-label="Previous achievement image"
        >
          ‹
        </button>
        <button
          type="button"
          className="achievement-carousel-nav achievement-carousel-carousel-nav-next"
          onClick={() => {
            showNext();
            handleInteraction();
          }}
          aria-label="Next achievement image"
        >
          ›
        </button>
      </div>

      <div className="achievement-carousel-dots">
        {items.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`achievement-carousel-dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => {
              goToIndex(index);
              handleInteraction();
            }}
            aria-label={`Show achievement image ${index + 1}`}
            aria-current={index === activeIndex ? 'true' : 'false'}
          />
        ))}
      </div>
    </section>
  );
}
