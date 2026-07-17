import React from 'react';
import { Search, BookOpen, Calendar, Award, Layers, Sparkles } from 'lucide-react';

export default function CategoryFilter({ 
  activeCategory, 
  setActiveCategory, 
  searchQuery, 
  setSearchQuery 
}) {
  const categories = [
    { label: "All Activities", value: "all", icon: <Layers size={18} /> },
    { label: "Workshops", value: "workshop", icon: <BookOpen size={18} /> },
    { label: "Guest Lectures", value: "guest_lecture", icon: <Calendar size={18} /> },
    { label: "Bootcamps", value: "bootcamp", icon: <Award size={18} /> },
    { label: "Discover CSEA (Major Events)", value: "major_event", icon: <Sparkles size={18} /> }
  ];

  return (
    <div className="filter-container glass-panel">
      {/* Category Tabs */}
      <div className="category-tabs">
        {categories.map((cat) => (
          <button
            key={cat.value}
            className={`category-tab-btn ${activeCategory === cat.value ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.value)}
          >
            {cat.icon}
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Search Input */}
      <div className="search-bar-wrapper">
        <Search className="search-icon" size={18} />
        <input
          type="text"
          placeholder="Search by event title, date, topic..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        {searchQuery && (
          <button 
            className="clear-search-btn"
            onClick={() => setSearchQuery("")}
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
}
