import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowUpRight, Check, ChevronLeft, ChevronRight, Leaf, Share2 } from 'lucide-react';
import './PlasticCampaign.css';
import day1 from '../assets/day1.jpeg';
import day2 from '../assets/day2.jpeg';
import day3 from '../assets/day3.jpeg';
import day4 from '../assets/day4.jpeg';
import day5 from '../assets/day5.jpeg';
import day6 from '../assets/day6.jpeg';
import day7 from '../assets/day7.jpeg';
import pledge1 from '../assets/pledge1.jpg';
import pledge2 from '../assets/pledge2.jpg';
import pledge3 from '../assets/pledge3.jpg';
import pledge4 from '../assets/pledge4.jpg';
import clean1 from '../assets/clean1.jpg';
import clean2 from '../assets/clean2.jpg';
import clean3 from '../assets/clean3.jpg';
import clean4 from '../assets/clean4.jpg';
import clean5 from '../assets/clean5.png';
import clean6 from '../assets/clean6.jpg';
import clean7 from '../assets/clean7.png';

const pledgeImages = [pledge1, pledge2, pledge3, pledge4];
const cleaningImages = [clean1, clean2, clean3, clean4, clean5, clean6, clean7];

const campaignStart = new Date(2026, 7, 15);
const campaignEnd = new Date(2026, 7, 31, 23, 59, 59);
const formatDay = (day) => String(day).padStart(2, '0');
const getDate = (day) => new Date(2026, 7, 14 + day);
const getDateLabel = (day) => getDate(day).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' }).toUpperCase();
const getFullDateLabel = (day) => getDate(day).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' }).toUpperCase();

const detailedDays = [
  {
    day: 1,
    title: 'SWITCH TO REUSABLE',
    category: 'AWARENESS',
    poster: day1,
    summary: 'Small change. Big impact. 🌍💚',
    description: 'DAY 01 — SWITCH TO REUSABLE ♻️\n\nSmall change. Big impact. 🌍💚\n\nThe Computer Science and Engineering Association (CSEA) brings you Day 01 of our Plastic-Free Awareness Initiative — encouraging everyone to take a simple step towards a cleaner and greener future.\n\n🛍️ Carry a reusable bag\n\n🥤 Choose reusable alternatives\n\n🚫 Say NO to single-use plastic\n\n🎥 Watch our awareness reel:\n\nLet’s make sustainability a habit, not just a campaign. 🌱\n\nOne bag. One choice. One positive change. 💚',
    instagramUrl: 'https://www.instagram.com/reel/DcDPI6oNtPW/?igsh=MTVhNzN1c2ZjajkwNQ==',
  },
  {
    day: 2,
    title: 'THE BUTTERFLY EFFECT',
    category: 'AWARENESS',
    poster: day2,
    summary: 'One small action can create a chain of effects far beyond what we see.',
    description: 'One piece of plastic thrown away can travel from our streets to drains, rivers and oceans, affecting countless lives. Our smallest choices can create a big impact.',
    highlight: 'EARTH IS NOT ONLY FOR HUMANS.',
    instagramUrl: 'https://www.instagram.com/reel/DcFdFELNJG9/?igsh=ZzZ2cnJlY3kya2xx',
  },
  {
    day: 3,
    title: 'SAY NO TO PLASTIC',
    category: 'SDG 12 • SDG 15',
    poster: day3,
    summary: 'Our waste does not simply disappear.',
    description: 'Today we focus on responsible consumption and protecting life on land. Reduce. Reuse. Recycle.',
    instagramUrl: 'https://www.instagram.com/reel/DcIP0l4Bd_z/?igsh=M2FubTFkNmthMHIy',
  },
  {
    day: 4,
    title: 'REDUCE • REUSE • RECYCLE',
    category: 'AWARENESS',
    poster: day4,
    summary: 'Every choice we make has an impact on our planet.',
    description: 'Reduce unnecessary consumption. Reuse what you already have. Recycle materials responsibly. A sustainable future does not require one person to do everything; it requires all of us to do something.',
    instagramUrl: 'https://www.instagram.com/reel/DcKyBcmNSr5/?igsh=dDRkMGxpZ2Vnemcx',
  },
  {
    day: 5,
    title: 'SAY NO TO UNNECESSARY PLASTIC',
    category: 'AWARENESS',
    poster: day5,
    summary: 'Plastic may be used for a few minutes, but its impact can last for years.',
    description: 'Before using plastic, pause and ask: “Do I really need this plastic?” If a reusable or eco-friendly alternative exists, choose it.',
    instagramUrl: 'https://www.instagram.com/reel/DcNWAxRt-hD/?igsh=bmxmZHRpM2UwYWk0',
  },
  {
    day: 6,
    title: 'MICROPLASTICS: THE INVISIBLE THREAT',
    category: 'AWARENESS',
    poster: day6,
    summary: 'Invisible does not mean harmless.',
    description: 'Larger plastic waste can break down into tiny particles called microplastics, which can enter soil, water, food chains and our environment. Let us understand the problem and make responsible choices.',
    instagramUrl: 'https://www.instagram.com/reel/DcQPEpgtO56/?igsh=MWR2NjV4djU2MjF0Zg==',
    action: true,
  },
  {
    day: 7,
    title: 'BREAK FREE FROM PLASTIC ♻️',
    category: 'AWARENESS',
    poster: day7,
    summary: 'Small Choices. Big Impact.',
    description: 'Going plastic-free starts with the choices we make every day.\n\n👜 Choose reusable, not disposable.\n\n♻️ Reduce. Reuse. Rethink.\n\n🌍 Protect the future through the choices we make today.\n\nA small change in our daily habits can create a much bigger impact on our environment.\n\n🎥 Watch our Day 07 awareness reel and share it with your friends:\n\nInstagram reel:\n\nClosing line:\n\nChoose Reuse. Protect the Future. 🌱\n\n— CSEA | Say No to Plastic',
    instagramUrl: 'https://www.instagram.com/reel/DcSgkFUtoMW/?igsi=MW9qYzZ4NWU2b3M4OA==',
  },
];

const campaignDays = Array.from({ length: 17 }, (_, index) => {
  const dayNumber = index + 1;
  const detail = detailedDays.find((entry) => entry.day === dayNumber) || {
    day: dayNumber,
    title: 'CAMPAIGN CONTINUES',
    category: 'COMING SOON',
    poster: null,
    summary: 'A new awareness activity will be revealed soon.',
    description: 'This campaign day is reserved for the next CSEA sustainability activity.',
    instagramUrl: '',
  };

  return {
    ...detail,
    day: dayNumber,
    dateLabel: getDateLabel(dayNumber),
    fullDateLabel: getFullDateLabel(dayNumber),
    label: `DAY ${formatDay(dayNumber)}`,
  };
});

function getCampaignStatus(today = new Date()) {
  const date = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const start = new Date(campaignStart.getFullYear(), campaignStart.getMonth(), campaignStart.getDate());
  const end = new Date(campaignEnd.getFullYear(), campaignEnd.getMonth(), campaignEnd.getDate());

  if (date < start) {
    return { label: 'CAMPAIGN STARTS SOON', detail: 'The journey begins on 15 August.', completed: 0, activeDay: 1 };
  }

  if (date > end) {
    return { label: 'CAMPAIGN COMPLETED', detail: '17 days of awareness. One shared responsibility.', completed: 17, activeDay: 17 };
  }

  const completed = Math.floor((date - start) / 86400000) + 1;
  return { label: 'CAMPAIGN IN PROGRESS', detail: `DAY ${formatDay(completed)} OF 17`, completed, activeDay: completed };
}

function StoryGallery({ images, altPrefix }) {
  return (
    <div className="plastic-gallery-grid">
      {images.map((image, index) => (
        <figure key={`${altPrefix}-${index}`} className="plastic-gallery-item">
          <img src={image} alt={`${altPrefix} ${index + 1}`} loading="lazy" />
        </figure>
      ))}
    </div>
  );
}

export default function PlasticCampaign() {
  const status = useMemo(() => getCampaignStatus(), []);
  const [selectedDay, setSelectedDay] = useState(status.activeDay);
  const timelineRef = useRef(null);
  const storyRef = useRef(null);

  const moveTimeline = (direction) => {
    timelineRef.current?.scrollBy({ left: direction * 220, behavior: 'smooth' });
  };

  const handleDaySelect = (day) => {
    setSelectedDay(day);
    requestAnimationFrame(() => {
      storyRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  const selectedDayData = campaignDays.find((item) => item.day === selectedDay) || campaignDays[0];

  return (
    <section id="say-no-to-plastic-campaign" className="plastic-campaign-shell">
      <header className="plastic-campaign-hero">
        <div className="plastic-hero-lines" aria-hidden="true" />
        <div className="plastic-hero-leaf" aria-hidden="true">
          <Leaf size={30} />
        </div>

        <div className="plastic-hero-copy">
          <span className="section-badge-orange">CSEA INITIATIVE • SDG ACTIVITY</span>
          <h1>
            SAY <span>NO TO PLASTIC</span>
          </h1>
          <p className="plastic-subtitle">17 Days • One Mission • A Cleaner Tomorrow</p>
          <p className="plastic-description">
            CSEA&apos;s plastic-awareness initiative brings students together to understand plastic pollution,
            make responsible choices, and build practical habits for a cleaner tomorrow.
          </p>

          <div className="plastic-date-range">
            <span>15 AUGUST 2026</span>
            <b>→</b>
            <span>31 AUGUST 2026</span>
          </div>

          <div className="plastic-sdg-badges">
            <span><b>SDG 12</b> Responsible Consumption &amp; Production</span>
            <span><b>SDG 15</b> Life on Land</span>
          </div>

          <button type="button" className="plastic-primary-button" onClick={() => storyRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
            OUR ACTIVITIES
          </button>
        </div>
      </header>

      <section className="plastic-timeline-shell" aria-label="17-day campaign timeline">
        <div className="plastic-journey-header">
          <div>
            <span className="section-badge-orange">17-DAY CAMPAIGN</span>
            <h2>The Journey</h2>
          </div>
          <div className="plastic-status-card">
            <span className="plastic-live-dot" aria-hidden="true" />
            <strong>{status.label}</strong>
            <small>{status.detail}</small>
          </div>
        </div>

        <div className="plastic-progress-track" aria-hidden="true">
          <span style={{ width: `${(status.completed / 17) * 100}%` }} />
        </div>

        <div className="plastic-timeline-controls">
          <button type="button" className="plastic-timeline-arrow" onClick={() => moveTimeline(-1)} aria-label="Show earlier campaign days">
            <ChevronLeft size={18} />
          </button>

          <div className="plastic-timeline-viewport" ref={timelineRef}>
            <div className="plastic-timeline-track">
              <div className="plastic-track-line" aria-hidden="true">
                <span style={{ width: `${(status.completed / 17) * 100}%` }} />
              </div>

              {campaignDays.map((item) => {
                const isCompleted = item.day < status.activeDay;
                const isCurrent = item.day === status.activeDay;
                const isSelected = item.day === selectedDay;
                const isUpcoming = !isCompleted && !isCurrent;

                return (
                  <button
                    key={item.day}
                    type="button"
                    className={`plastic-day-item ${isCompleted ? 'is-completed' : ''} ${isCurrent ? 'is-current' : ''} ${isUpcoming ? 'is-upcoming' : ''} ${isSelected ? 'is-selected' : ''}`}
                    onClick={() => handleDaySelect(item.day)}
                    aria-label={`View day ${item.day} ${item.label} ${item.dateLabel}`}
                    aria-pressed={isSelected}
                  >
                    <span className="plastic-day-node" aria-hidden="true">
                      {isCompleted ? <Check size={15} strokeWidth={3} /> : item.day}
                    </span>
                    <span className="plastic-day-text">
                      <strong>{item.label}</strong>
                      <small>{item.dateLabel}</small>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <button type="button" className="plastic-timeline-arrow" onClick={() => moveTimeline(1)} aria-label="Show later campaign days">
            <ChevronRight size={18} />
          </button>
        </div>
      </section>

      <section className="plastic-story-section" ref={storyRef} aria-live="polite">
        <div key={selectedDayData.day} className="plastic-story-card">
          <div className="plastic-story-poster-wrap">
            {selectedDayData.poster ? (
              <img src={selectedDayData.poster} alt={`${selectedDayData.label} poster`} className="plastic-story-poster" />
            ) : (
              <div className="plastic-story-placeholder">
                <span>CAMPAIGN DAY {formatDay(selectedDayData.day)}</span>
                <strong>Details coming soon</strong>
              </div>
            )}
          </div>

          <div className="plastic-story-copy">
            <div className="plastic-story-meta">
              <span>{selectedDayData.label}</span>
              <span>{selectedDayData.fullDateLabel}</span>
            </div>

            {selectedDayData.category && <span className="plastic-category-badge">{selectedDayData.category}</span>}

            <h3>{selectedDayData.title}</h3>
            <p className="plastic-story-summary">{selectedDayData.summary}</p>
            <p className="plastic-story-description">{selectedDayData.description}</p>

            {selectedDayData.highlight && (
              <blockquote className="plastic-story-quote">“{selectedDayData.highlight}”</blockquote>
            )}

            {selectedDayData.instagramUrl ? (
              <a className="plastic-primary-link" href={selectedDayData.instagramUrl} target="_blank" rel="noopener noreferrer">
                <Share2 size={16} />
                Watch Reel
                <ArrowUpRight size={16} />
              </a>
            ) : (
              <span className="plastic-story-locked">Campaign content is scheduled to be shared soon.</span>
            )}
          </div>
        </div>

        {selectedDayData.day === 6 && (
          <div className="plastic-day6-activities">
            <div className="plastic-day6-header">
              <span>DAY 06 — ACTION BEYOND AWARENESS</span>
              <h4>Awareness becomes meaningful when we act on it.</h4>
            </div>

            <div className="plastic-activity-block">
              <div className="plastic-activity-heading">
                <span>TAKING THE PLEDGE</span>
                <h5>Students came together to take a pledge for responsible plastic use and to commit themselves to making sustainable choices in their everyday lives.</h5>
              </div>
              <StoryGallery images={pledgeImages} altPrefix="Pledge activity" />
            </div>

            <div className="plastic-activity-block">
              <div className="plastic-activity-heading">
                <span>OFFICE BEARERS + VOLUNTEERS</span>
                <h5>CLEANING ACTIVITY</h5>
              </div>
              <p>
                Office bearers and student volunteers came together for a cleaning activity as part of the Say No to Plastic initiative, turning awareness into direct action for a cleaner environment.
              </p>
              <StoryGallery images={cleaningImages} altPrefix="Cleaning activity" />
            </div>
          </div>
        )}
      </section>
    </section>
  );
}
