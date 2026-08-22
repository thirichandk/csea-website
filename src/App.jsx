import React, { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import VisionMission from './components/VisionMission';
import Journey from './components/Journey';
import Marquee from './components/Marquee';
import Team from './components/Team';
import Footer from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';

import CategoryFilter from './components/CategoryFilter';
import EventCard from './components/EventCard';
import OfficeBearers from './components/OfficeBearers';
import YearPlan from './components/YearPlan';
import PlasticCampaign from './components/PlasticCampaign';
import SDGActivities from './pages/SDGActivities';
import Achievements from './pages/Achievements';
import UpcomingEvents from './pages/UpcomingEvents';
import UpcomingEventDetails from './pages/UpcomingEventDetails';
import UpcomingEventModal from './components/UpcomingEventModal';
import UpcomingEventsAccess from './components/UpcomingEventsAccess';
import CompletedEventDetails from './pages/CompletedEventDetails';
import { getPromotedUpcomingEvents, getUpcomingEvents } from './data/upcomingEvents';
import { eventsData, getEventStatus } from './data/events';
import { Sparkles, HelpCircle, ArrowLeft } from 'lucide-react';

const UPCOMING_PROMOTION_SEEN_KEY = 'csea_upcoming_promotion_seen';

const getRoute = () => {
  const parts = window.location.pathname.split('/').filter(Boolean);
  if (parts[0] === 'explore-events') return { view: parts[1] ? 'completed-event-details' : 'discover', eventId: parts[1] || null };
  if (parts[0] === 'sdg') return { view: parts[1] === 'say-no-to-plastic' ? 'plastic-campaign' : 'sdg', eventId: null };
  if (parts[0] === 'upcoming-events') return { view: parts[1] ? 'upcoming-event-details' : 'upcoming-events', eventId: parts[1] || null };
  return { view: 'home', eventId: null };
};

export default function App() {
  const initialRoute = getRoute();
  const [view, setView] = useState(initialRoute.view);
  const [eventId, setEventId] = useState(initialRoute.eventId);
  useScrollReveal(view);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAcademicYear, setSelectedAcademicYear] = useState('2026-2027');
  const [isUpcomingPromotionOpen, setIsUpcomingPromotionOpen] = useState(() => (
    initialRoute.view === 'home' && !sessionStorage.getItem(UPCOMING_PROMOTION_SEEN_KEY)
  ));
  const previousView = useRef(view);

  useEffect(() => {
    if (isUpcomingPromotionOpen) sessionStorage.setItem(UPCOMING_PROMOTION_SEEN_KEY, 'true');
  }, [isUpcomingPromotionOpen]);

  useEffect(() => {
    const handlePopState = () => {
      const route = getRoute();
      setView(route.view);
      setEventId(route.eventId);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (previousView.current !== 'home' && view === 'home' && window.location.pathname.startsWith('/upcoming-events')) {
      window.history.replaceState({}, '', '/');
    }
    previousView.current = view;
  }, [view]);

  const handleUpcomingEventNavigation = (nextEventId = null) => {
    const nextPath = nextEventId ? `/upcoming-events/${nextEventId}` : '/upcoming-events';
    window.history.pushState({}, '', nextPath);
    setEventId(nextEventId);
    setView(nextEventId ? 'upcoming-event-details' : 'upcoming-events');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackFromUpcomingEvent = () => {
    window.history.pushState({}, '', '/upcoming-events');
    setEventId(null);
    setView('upcoming-events');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getAcademicYear = (event) => {
    if (event.academicYear) return event.academicYear;
    const yearMatch = event.date?.match(/\b(20\d{2})\b/);
    if (!yearMatch) return '2025-2026';
    const year = Number(yearMatch[1]);
    const monthNames = ['january', 'february', 'march', 'april', 'may', 'june'];
    const month = event.date.trim().split(/\s+/)[0].toLowerCase();
    return monthNames.includes(month) ? `${year - 1}-${year}` : `${year}-${year + 1}`;
  };

  const academicYearOptions = [...new Set(eventsData.map(getAcademicYear))].sort((a, b) => b.localeCompare(a));

  const filteredEvents = eventsData.filter((event) => {
    const matchesCategory = activeCategory === 'all' || event.category === activeCategory;
    const matchesAcademicYear = getAcademicYear(event) === selectedAcademicYear;
    const matchesSearch = 
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (event.detailedDesc && event.detailedDesc.toLowerCase().includes(searchQuery.toLowerCase())) ||
      event.date.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesAcademicYear && matchesSearch && getEventStatus(event) === 'completed';
  });

  const handleNavigateToDiscover = (category = 'all') => {
    setActiveCategory(category);
    setView('discover');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToAboutCSEA = () => {
    setView('about');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToOfficeBearers = () => {
    setView('office');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToYearPlan = () => {
    setView('yearplan');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToAchievements = () => {
    setView('achievements');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToSDGActivities = () => {
    window.history.pushState({}, '', '/sdg');
    setView('sdg');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToPlasticCampaign = () => {
    window.history.pushState({}, '', '/sdg/say-no-to-plastic');
    setView('plastic-campaign');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCompletedEventNavigation = (event) => {
    window.history.pushState({}, '', `/explore-events/${event.id}`);
    setEventId(event.id);
    setView('completed-event-details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackFromCompletedEvent = () => {
    window.history.pushState({}, '', '/explore-events');
    setEventId(null);
    setView('discover');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleUpcomingAccess = () => handleUpcomingEventNavigation();

  return (
    <div className="app-wrapper">
      <Navbar 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
        view={view}
        setView={setView}
        onNavigate={handleNavigateToDiscover}
        onNavigateAboutCSEA={handleNavigateToAboutCSEA}
        onNavigateOffice={handleNavigateToOfficeBearers}
        onNavigateYearPlan={handleNavigateToYearPlan}
        onNavigateAchievements={handleNavigateToAchievements}
        onNavigateSDG={handleNavigateToSDGActivities}
      />

      <div key={view} style={{ animation: 'fadeInUp 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)' }}>
        {view === 'upcoming-events' && <UpcomingEvents onBack={() => { window.history.pushState({}, '', '/'); setView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} onViewDetails={handleUpcomingEventNavigation} />}
        {view === 'upcoming-event-details' && <UpcomingEventDetails eventId={eventId} onBack={handleBackFromUpcomingEvent} />}
        {view === 'completed-event-details' && <CompletedEventDetails eventId={eventId} onBack={handleBackFromCompletedEvent} />}

        {view === 'home' && (
          <main>
            <Hero onDiscover={handleNavigateToDiscover} />
            <About />
            <VisionMission />
            <Journey />
            <Marquee />
            <Team />
          </main>
        )}

        {view === 'about' && (
          <section className="office-bearers-section">
            <div className="container">
              <div className="back-nav-wrapper">
                <button className="btn-back-home" onClick={() => { setView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                  <ArrowLeft size={16} />
                  <span>Back to Home</span>
                </button>
              </div>
              <div className="office-header">
                <div className="section-badge">ABOUT CSEA</div>
                <h2 className="office-title">About CSEA</h2>
                <p className="office-description" style={{ textAlign: 'left', maxWidth: '900px' }}>
                  The Computer Science and Engineering Association (CSEA) is a vibrant student-driven body that forms the backbone of academic, technical, and cultural activities in the CSE department. It serves as a dynamic forum where students come together to explore, learn, and innovate beyond the classroom. By organizing guest lectures, technical talks, workshops, hackathons, symposium, and cultural events, CSEA provides ample opportunities to sharpen technical knowledge, foster leadership, and nurture creativity. Acting as a bridge between industry, and students, the association keeps members connected with emerging technologies while encouraging collaboration, problem-solving, and holistic growth. With its diverse initiatives, CSEA not only cultivates professional excellence but also builds a strong sense of community, preparing students to meet industry expectations and contribute meaningfully to society.
                </p>
              </div>
            </div>
          </section>
        )}

        {view === 'office' && (
          <section className="office-bearers-section">
            <div className="container">
              <div className="back-nav-wrapper">
                <button className="btn-back-home" onClick={() => { setView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                  <ArrowLeft size={16} />
                  <span>Back to Home</span>
                </button>
              </div>
              <OfficeBearers />
            </div>
          </section>
        )}

        {view === 'yearplan' && (
          <section className="office-bearers-section">
            <div className="container">
              <div className="back-nav-wrapper">
                <button className="btn-back-home" onClick={() => { setView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                  <ArrowLeft size={16} />
                  <span>Back to Home</span>
                </button>
              </div>
              <YearPlan />
            </div>
          </section>
        )}

        {view === 'achievements' && (
          <section className="office-bearers-section">
            <div className="container">

              <Achievements />
            </div>
          </section>
        )}

        {view === 'sdg' && (
          <section className="sdg-section">
            <div className="container">
              <div className="back-nav-wrapper">
                <button className="btn-back-home" onClick={() => { window.history.pushState({}, '', '/'); setView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                  <ArrowLeft size={16} />
                  <span>Back to Home</span>
                </button>
              </div>
              <SDGActivities onOpenCampaign={handleNavigateToPlasticCampaign} />
            </div>
          </section>
        )}

        {view === 'plastic-campaign' && (
          <section className="sdg-section">
            <div className="container">
              <div className="back-nav-wrapper">
                <button className="btn-back-home" onClick={() => { window.history.pushState({}, '', '/sdg'); setView('sdg'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                  <ArrowLeft size={16} />
                  <span>Back to SDG Activities</span>
                </button>
              </div>
              <PlasticCampaign />
            </div>
          </section>
        )}

        {view === 'discover' && (
          <section className="events-section-container">
            <div className="container">
              <div className="back-nav-wrapper">
                <button className="btn-back-home" onClick={() => { setView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                  <ArrowLeft size={16} />
                  <span>Back to Home</span>
                </button>
              </div>
              <div className="section-header-wrap">
                <div className="section-badge">
                  <Sparkles size={16} className="sparkle-icon" />
                  <span>CSEA CALENDAR {selectedAcademicYear}</span>
                </div>
                <h2 className="section-main-title">Recent Events Archive</h2>
                <p className="section-subtitle">
                  Explore the completed events for the selected academic year. Use the year switcher to browse recent CSEA activity by cohort and session.
                </p>
              </div>

              <div className="filter-container glass-panel">
                <div className="category-tabs">
                  {academicYearOptions.map((year) => (
                    <button
                      key={year}
                      className={`category-tab-btn ${selectedAcademicYear === year ? 'active' : ''}`}
                      onClick={() => setSelectedAcademicYear(year)}
                    >
                      <Sparkles size={18} />
                      <span>{year}</span>
                    </button>
                  ))}
                </div>
              </div>

              <CategoryFilter 
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
              {filteredEvents.length > 0 ? (
                <div className="events-grid">
                  {filteredEvents.map((event) => (
                    <EventCard key={event.id} event={event} onViewDetails={handleCompletedEventNavigation} />
                  ))}
                </div>
              ) : (
                <div className="no-events-card glass-panel">
                  <HelpCircle size={48} className="no-events-icon" />
                  <h3>No matching events found</h3>
                  <p>We couldn't find anything matching "{searchQuery}" in this category. Try checking another category or refining your keywords.</p>
                  <button className="btn-secondary" onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}>
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </section>
        )}

      </div>

      <Footer />

      <UpcomingEventModal
        event={getPromotedUpcomingEvents()[0]}
        isOpen={isUpcomingPromotionOpen}
        onClose={() => setIsUpcomingPromotionOpen(false)}
        onExplore={() => { setIsUpcomingPromotionOpen(false); handleUpcomingEventNavigation(); }}
      />
      <UpcomingEventsAccess count={getUpcomingEvents().length} onNavigate={handleUpcomingAccess} />
    </div>
  );
}
