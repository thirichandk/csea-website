import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Announcement from './components/Announcement';
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
import { eventsData } from './data/events';
import { Sparkles, HelpCircle, ArrowLeft } from 'lucide-react';
import Inaugural from './components/Inaugural';

export default function App() {
  const [view, setView] = useState('home');
  useScrollReveal(view);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const filteredEvents = eventsData.filter((event) => {
    const matchesCategory = activeCategory === 'all' || event.category === activeCategory;
    const matchesSearch = 
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (event.detailedDesc && event.detailedDesc.toLowerCase().includes(searchQuery.toLowerCase())) ||
      event.date.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleNavigateToDiscover = (category = 'all') => {
    // special-case the inaugural announcement to open a dedicated page
    if (category === 'inaugural') {
      setView('inaugural');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setActiveCategory(category);
    setView('discover');
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
        onNavigateOffice={handleNavigateToOfficeBearers}
        onNavigateYearPlan={handleNavigateToYearPlan}
        onNavigateSDG={handleNavigateToSDGActivities}
      />

      <div key={view} style={{ animation: 'fadeInUp 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)' }}>
        {view === 'home' && (
          <main>
            <Hero onDiscover={handleNavigateToDiscover} />
            <Announcement onDiscover={handleNavigateToDiscover} />
            <About />
            <VisionMission />
            <Journey />
            <Marquee />
            <Team />
          </main>
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
                  <span>CSEA CALENDAR 2025 - 2026</span>
                </div>
                <h2 className="section-main-title">Discover CSEA Events</h2>
                <p className="section-subtitle">
                  Browse through our chronological schedule of workshops, guest lectures, 
                  bootcamps, and annual symposium activities designed for CSE students.
                </p>
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

        {view === 'inaugural' && (
          <section className="inaugural-section">
            <div className="container">
              <Inaugural onBack={() => { setView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} />
            </div>
          </section>
        )}
      </div>

      <Footer />

      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </div>
  );
}
