import { createPortal } from 'react-dom';
import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowUpRight, Check, ChevronDown, Leaf, LockKeyhole, Share2, X } from 'lucide-react';
import './PlasticCampaign.css';
import day1 from '../assets/day1.jpeg';
import day2 from '../assets/day2.jpeg';
import day3 from '../assets/day3.jpeg';
import day4 from '../assets/day4.jpeg';
import day5 from '../assets/day5.jpeg';
import day6 from '../assets/day6.jpeg';

const pledgeImages = [];
const cleaningImages = [];

const detailedDays = [
  { title: 'SWITCH TO REUSABLE', category: 'AWARENESS', poster: day1, summary: 'Small change. Big impact.', description: 'CSEA begins the Plastic-Free Awareness Initiative by encouraging everyone to carry reusable bags, choose reusable alternatives and say NO to single-use plastic. Let sustainability become a habit, not just a campaign. One bag. One choice. One positive change.', instagramUrl: '' },
  { title: 'THE BUTTERFLY EFFECT', category: 'AWARENESS', poster: day2, summary: 'One small action can create a chain of effects far beyond what we see.', description: 'One piece of plastic thrown away can travel from our streets to drains, rivers and oceans, affecting countless lives. Our smallest choices can create a big impact.', highlight: 'EARTH IS NOT ONLY FOR HUMANS.', instagramUrl: 'https://www.instagram.com/reel/DcFdFELNJG9/?igsh=ZzZ2cnJlY3kya2xx' },
  { title: 'SAY NO TO PLASTIC', category: 'SDG 12 • SDG 15', poster: day3, summary: 'Our waste does not simply disappear.', description: 'Today we focus on responsible consumption and protecting life on land. Reduce. Reuse. Recycle.', instagramUrl: 'https://www.instagram.com/reel/DcIP0l4Bd_z/?igsh=M2FubTFkNmthMHIy' },
  { title: 'REDUCE • REUSE • RECYCLE', category: 'AWARENESS', poster: day4, summary: 'Every choice we make has an impact on our planet.', description: 'Reduce unnecessary consumption. Reuse what you already have. Recycle materials responsibly. A sustainable future does not require one person to do everything; it requires all of us to do something.', instagramUrl: 'https://www.instagram.com/reel/DcKyBcmNSr5/?igsh=dDRkMGxpZ2Vnemcx' },
  { title: 'SAY NO TO UNNECESSARY PLASTIC', category: 'AWARENESS', poster: day5, summary: 'Plastic may be used for a few minutes, but its impact can last for years.', description: 'Before using plastic, pause and ask: “Do I really need this plastic?” If a reusable or eco-friendly alternative exists, choose it.', instagramUrl: 'https://www.instagram.com/reel/DcNWAxRt-hD/?igsh=bmxmZHRpM2UwYWk0' },
  { title: 'MICROPLASTICS: THE INVISIBLE THREAT', category: 'AWARENESS', poster: day6, summary: 'Invisible does not mean harmless.', description: 'Larger plastic waste can break down into tiny particles called microplastics, which can enter soil, water, food chains and our environment. Let us understand the problem and make responsible choices.', instagramUrl: 'https://www.instagram.com/reel/DcQPEpgtO56/?igsh=MWR2NjV4djU2MjF0Zg==', action: true },
];

const campaignStart = new Date(2026, 7, 15);
const campaignEnd = new Date(2026, 7, 31, 23, 59, 59);
const formatDay = (day) => String(day).padStart(2, '0');
const getDate = (day) => new Date(2026, 7, 14 + day);
const getDateLabel = (day) => getDate(day).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' }).toUpperCase();

const campaignDays = Array.from({ length: 17 }, (_, index) => ({
  day: index + 1,
  dateLabel: getDateLabel(index + 1),
  label: `DAY ${formatDay(index + 1)}`,
  ...(detailedDays[index] || { title: 'CAMPAIGN CONTINUES', category: 'COMING SOON', summary: 'A new awareness activity will be revealed soon.', description: 'This campaign day is reserved for the next CSEA sustainability activity.' }),
}));

function getCampaignStatus(today = new Date()) {
  const date = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const start = new Date(campaignStart.getFullYear(), campaignStart.getMonth(), campaignStart.getDate());
  const end = new Date(campaignEnd.getFullYear(), campaignEnd.getMonth(), campaignEnd.getDate());
  if (date < start) return { label: 'CAMPAIGN STARTS SOON', detail: 'The journey begins on 15 August.', completed: 0, activeDay: 1 };
  if (date > end) return { label: 'CAMPAIGN COMPLETED', detail: '17 days of awareness. One shared responsibility.', completed: 17, activeDay: 17 };
  const completed = Math.floor((date - start) / 86400000) + 1;
  return { label: 'CAMPAIGN IN PROGRESS', detail: `DAY ${formatDay(completed)} OF 17`, completed, activeDay: completed };
}

function ActionGallery({ title, label, description, images }) {
  return <section className="plastic-action-block"><div className="plastic-action-heading"><span>{label}</span><h4>{title}</h4></div><p>{description}</p>{images.length ? <div className="plastic-action-gallery">{images.map((image, index) => <img key={`${title}-${index}`} src={image} alt={`${title} ${index + 1}`} />)}</div> : <div className="plastic-action-empty">Activity gallery will appear here when assets are added.</div>}</section>;
}

function CampaignDayCard({ item, onClose }) {
  const isComingSoon = !item.poster;
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event) => { if (event.key === 'Escape') onClose(); };
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [onClose]);

  return createPortal(<div className="plastic-day-modal-backdrop" role="presentation" onClick={onClose}>
    <article className={`plastic-day-modal ${isComingSoon ? 'is-coming-soon' : ''}`} role="dialog" aria-modal="true" aria-labelledby="plastic-day-modal-title" onClick={(event) => event.stopPropagation()}>
      <button type="button" className="plastic-day-modal-close" onClick={onClose} aria-label="Close campaign day details"><X size={20} /></button>
      <div className="plastic-day-modal-media">
        {item.poster && <img className="plastic-day-modal-poster" src={item.poster} alt={`${item.label} campaign poster`} />}
      </div>
      <div className="plastic-day-modal-content">
        <div className="plastic-day-modal-topline"><span>{item.label}</span><span>{item.dateLabel}</span></div>
        <span className="plastic-category">{item.category}</span>
        <h2 id="plastic-day-modal-title">{item.title}</h2>
        <p className="plastic-day-modal-summary">{item.summary}</p>
        <p className="plastic-day-modal-description">{item.description}</p>
        {item.highlight && <blockquote>“{item.highlight}”</blockquote>}
        {item.instagramUrl ? <a className="plastic-instagram-link plastic-modal-reel-link" href={item.instagramUrl} target="_blank" rel="noopener noreferrer"><Share2 size={17} /> Watch Reel <ArrowUpRight size={16} /></a> : <span className="plastic-continues-label"><LockKeyhole size={14} /> Campaign Continues</span>}
        {item.action && <details className="plastic-action-details"><summary><span>DAY 06 — ACTION</span><ChevronDown size={17} /></summary><div className="plastic-action-content"><ActionGallery title="PLASTIC-FREE PLEDGE" label="PLEDGE" description="Students came together to take a pledge towards reducing plastic use and building a cleaner, greener future." images={pledgeImages} /><ActionGallery title="CLEANING ACTIVITY" label="COMMUNITY ACTION" description="CSEA office bearers and student volunteers turned the message of sustainability into meaningful action." images={cleaningImages} /></div></details>}
      </div>
    </article>
  </div>, document.body);
}

function CampaignDayNode({ item, index, activeDay, selectedDay, setSelectedDay }) {
  const isOpen = selectedDay === item.day;
  const isCurrent = item.day === activeDay;
  const isCompleted = item.day < activeDay;

  return <div className={`plastic-day-node-wrap node-${index + 1} ${isOpen ? 'is-open' : ''} ${isCurrent ? 'is-current' : ''} ${isCompleted ? 'is-completed' : ''}`}>
    <button type="button" className="plastic-day-node" onClick={() => setSelectedDay(isOpen ? null : item.day)} aria-expanded={isOpen} aria-label={`Open ${item.label}, ${item.dateLabel}`}>{isCompleted ? <Check size={17} strokeWidth={3} /> : <span>{formatDay(item.day)}</span>}</button>
    <div className="plastic-node-label"><strong>{item.label}</strong><span>{item.dateLabel}</span></div>
    {isOpen && <CampaignDayCard item={item} onClose={() => setSelectedDay(null)} />}
  </div>;
}

export default function PlasticCampaign() {
  const status = useMemo(() => getCampaignStatus(), []);
  const [selectedDay, setSelectedDay] = useState(null);
  const timelineViewportRef = useRef(null);

  const moveTimeline = (direction) => {
    timelineViewportRef.current?.scrollBy({ left: direction * 220, behavior: 'smooth' });
  };

  return <section id="say-no-to-plastic-campaign" className="plastic-campaign-shell">
    <header className="plastic-campaign-hero reveal"><div className="plastic-hero-lines" aria-hidden="true" /><div className="plastic-hero-leaf" aria-hidden="true"><Leaf size={31} /></div><div className="plastic-hero-copy"><span className="section-badge-orange">CSEA INITIATIVE • SDG ACTIVITY</span><h1>SAY <span>NO TO PLASTIC</span></h1><p className="plastic-subtitle">17 Days. One Planet. One Responsibility.</p><p className="plastic-description">From Independence Day to the end of August, CSEA is taking a 17-day journey to create awareness about plastic pollution, responsible consumption and protecting our environment.</p><div className="plastic-date-range"><span>15 AUGUST 2026</span><b>↓</b><span>31 AUGUST 2026</span></div><div className="plastic-sdg-badges"><span><b>SDG 12</b> Responsible Consumption &amp; Production</span><span><b>SDG 15</b> Life on Land</span></div></div></header>
    <section className="plastic-journey reveal" aria-label="17-day campaign timeline"><div className="plastic-journey-header"><div><span className="section-badge-orange">17-DAY CAMPAIGN</span><h2>The Journey</h2></div><div className="plastic-status"><span className="plastic-live-dot" /><strong>{status.label}</strong><small>{status.detail}</small></div></div><div className="plastic-progress-track"><span style={{ width: `${(status.completed / 17) * 100}%` }} /></div><div className="plastic-timeline-controls"><button type="button" className="plastic-timeline-arrow" onClick={() => moveTimeline(-1)} aria-label="Show earlier campaign days">‹</button><div className="plastic-timeline-viewport" ref={timelineViewportRef}><div className="plastic-timeline-track"><div className="plastic-track-line" aria-hidden="true"><span style={{ width: `${(status.completed / 17) * 100}%` }} /></div>{campaignDays.map((item, index) => <CampaignDayNode key={item.day} item={item} index={index} activeDay={status.activeDay} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />)}</div></div><button type="button" className="plastic-timeline-arrow" onClick={() => moveTimeline(1)} aria-label="Show later campaign days">›</button></div><p className="plastic-timeline-hint">Click a day to view its story.</p></section>
    <section className="plastic-campaign-close reveal"><div><span className="section-badge-orange">A SHARED RESPONSIBILITY</span><h2>Awareness becomes action.</h2><p>Every reusable choice, every conversation and every act of care moves the campaign forward.</p></div><div className="plastic-close-words"><span>REDUCE</span><span>REUSE</span><span>RECYCLE</span></div></section>
  </section>;
}
