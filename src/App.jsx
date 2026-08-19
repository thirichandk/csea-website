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
import EventModal from './components/EventModal';
import OfficeBearers from './components/OfficeBearers';
import YearPlan from './components/YearPlan';
import SDGActivities from './pages/SDGActivities';
import Achievements from './pages/Achievements';
import UpcomingEvents from './pages/UpcomingEvents';
import UpcomingEventDetails from './pages/UpcomingEventDetails';
import UpcomingEventModal from './components/UpcomingEventModal';
import { getUpcomingEvents } from './data/upcomingEvents';
import { eventsData } from './data/events';
import { Sparkles, HelpCircle, ArrowLeft } from 'lucide-react';

const getRoute = () => {
  const parts = window.location.pathname.split('/').filter(Boolean);
  if (parts[0] !== 'upcoming-events') return { view: 'home', eventId: null };
  return { view: parts[1] ? 'upcoming-event-details' : 'upcoming-events', eventId: parts[1] || null };
};

export default function App() {
  const initialRoute = getRoute();
  const [view, setView] = useState(initialRoute.view);
  const [eventId, setEventId] = useState(initialRoute.eventId);
  useScrollReveal(view);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAcademicYear, setSelectedAcademicYear] = useState('2026-2027');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const previousView = useRef(view);

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
    if (event.date?.includes('2026')) return '2026-2027';
    return '2025-2026';
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

    if (selectedAcademicYear === '2026-2027') {
      return matchesCategory && matchesAcademicYear && matchesSearch && event.id === 'csea-inaugural-2026-2027';
    }

    return matchesCategory && matchesAcademicYear && matchesSearch;
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
    setView('sdg');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
                <button className="btn-back-home" onClick={() => { setView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                  <ArrowLeft size={16} />
                  <span>Back to Home</span>
                </button>
              </div>
              <SDGActivities />
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
                    <EventCard key={event.id} event={event} onViewDetails={setSelectedEvent} />
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

      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}

      <UpcomingEventModal events={getUpcomingEvents()} onViewEvent={handleUpcomingEventNavigation} onViewAll={() => handleUpcomingEventNavigation()} />
    </div>
  );
}
