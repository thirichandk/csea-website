import React, { useState } from 'react';
import { 
  ArrowLeft, 
  BookOpen, 
  ExternalLink, 
  Sparkles, 
  Share2, 
  Check, 
  Award, 
  Palette, 
  Code2, 
  Globe, 
  Layers,
  Calendar,
  FileText
} from 'lucide-react';
import { newsletterData } from '../data/newsletter';
import { officeBearers } from '../data/officeBearers';
import './Newsletter.css';

export default function Newsletter({ onBack }) {
  const [copied, setCopied] = useState(false);
  const edition = newsletterData.currentEdition;
  const teamMembers = officeBearers.newsletter?.members || [];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(edition.externalUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className="newsletter-page">
      <div className="container">
        {/* Top Back Navigation */}
        <div className="back-nav-wrapper">
          <button className="btn-back-home" onClick={onBack}>
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </button>
        </div>

        {/* Page Header */}
        <div className="section-header-wrap">
          <div className="section-badge">
            <Sparkles size={16} className="sparkle-icon" />
            <span>CSEA OFFICIAL PUBLICATION</span>
          </div>
          <h1 className="section-main-title">Scriptus Newsletter</h1>
          <p className="section-subtitle">
            The voice, vision, and creative chronicle of the Department of Computer Science and Engineering, 
            Kongu Engineering College. Explore student milestones, technical essays, coding triumphs, and creative works.
          </p>
        </div>

        {/* Featured Issue Showcase */}
        <section className="featured-issue-section">
          <div className="featured-issue-card glass-panel">
            <div className="issue-poster-col">
              <a 
                href={edition.externalUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="issue-poster-link"
                title="Click to open interactive flipbook"
              >
                <div className="poster-wrapper">
                  <img 
                    src={edition.poster} 
                    alt={`${edition.title} Cover Poster`} 
                    className="issue-poster-img"
                  />
                  <div className="poster-hover-overlay">
                    <BookOpen size={28} />
                    <span>Open Flipbook</span>
                    <ExternalLink size={16} />
                  </div>
                </div>
              </a>
              <div className="poster-caption">
                <span>{edition.edition} · {edition.monthYear}</span>
              </div>
            </div>

            <div className="issue-details-col">
              <div className="issue-status-badge">
                <span className="live-dot"></span>
                <span>LATEST PUBLISHED ISSUE</span>
              </div>

              <h2 className="issue-headline">{edition.title}</h2>
              <p className="issue-subheadline">
                {edition.academicYear} · 56-Page Digital Flipbook Edition
              </p>

              <p className="issue-description">
                {edition.description}
              </p>

              <div className="issue-meta-chips">
                <span className="issue-chip">
                  <Calendar size={14} />
                  <span>{edition.monthYear}</span>
                </span>
                <span className="issue-chip">
                  <Layers size={14} />
                  <span>{edition.pages} Interactive Pages</span>
                </span>
                <span className="issue-chip">
                  <FileText size={14} />
                  <span>{edition.format}</span>
                </span>
                <span className="issue-chip">
                  <Sparkles size={14} />
                  <span>Department of CSE</span>
                </span>
              </div>

              {/* Action Buttons */}
              <div className="issue-action-buttons">
                <a 
                  href={edition.externalUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary btn-read-flipbook"
                >
                  <BookOpen size={18} />
                  <span>Read Edition 01 Flipbook</span>
                  <ExternalLink size={16} />
                </a>

                <button 
                  type="button" 
                  className="btn-secondary btn-share-issue"
                  onClick={handleCopyLink}
                >
                  {copied ? (
                    <>
                      <Check size={16} className="text-emerald" />
                      <span>Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <Share2 size={16} />
                      <span>Share Link</span>
                    </>
                  )}
                </button>
              </div>

              <div className="reader-hint-notice">
                <Sparkles size={14} />
                <span>Features smooth page flips, full-screen mode, zoom, and thumbnail navigation.</span>
              </div>
            </div>
          </div>
        </section>

        {/* What's Inside Grid */}
        <section className="inside-edition-section">
          <div className="section-header-wrap" style={{ marginTop: '2rem' }}>
            <div className="section-badge">HIGHLIGHTS</div>
            <h2 className="section-main-title">Inside Scriptus Edition 01</h2>
            <p className="section-subtitle">
              A curated blend of technical knowledge, artistic expression, and department celebrations.
            </p>
          </div>

          <div className="edition-highlights-grid">
            <div className="highlight-item-card glass-panel">
              <div className="highlight-icon-wrap icon-purple">
                <Sparkles size={22} />
              </div>
              <h3>Faculty & Department Milestones</h3>
              <p>Inaugural ceremony of CSEA and CCC, faculty research achievements, and institutional milestones.</p>
            </div>

            <div className="highlight-item-card glass-panel">
              <div className="highlight-icon-wrap icon-blue">
                <Code2 size={22} />
              </div>
              <h3>Tech Corner & Engineering Trends</h3>
              <p>Technical essays authored by students covering Generative AI, modern web frameworks, and algorithmic frontiers.</p>
            </div>

            <div className="highlight-item-card glass-panel">
              <div className="highlight-icon-wrap icon-amber">
                <Award size={22} />
              </div>
              <h3>Student Triumphs & Placements</h3>
              <p>Celebrating SIH 2024 winners, national hackathon podiums, internships, and top campus placements.</p>
            </div>

            <div className="highlight-item-card glass-panel">
              <div className="highlight-icon-wrap icon-rose">
                <Palette size={22} />
              </div>
              <h3>Creative Canvas & Art Gallery</h3>
              <p>Expressive student hand paintings, digital artwork, creative poetry, and campus photography.</p>
            </div>

            <div className="highlight-item-card glass-panel">
              <div className="highlight-icon-wrap icon-emerald">
                <Globe size={22} />
              </div>
              <h3>CSEA Community & SDG Initiatives</h3>
              <p>Comprehensive coverage of the Say No to Plastic campaign, peer coding workshops, and community outreach.</p>
            </div>

            <div className="highlight-item-card glass-panel">
              <div className="highlight-icon-wrap icon-indigo">
                <BookOpen size={22} />
              </div>
              <h3>Interactive 56-Page Flipbook</h3>
              <p>Full digital reading experience with mobile optimization, quick table of contents, and high-definition pages.</p>
            </div>
          </div>
        </section>

        {/* Editorial Team Section */}
        {teamMembers.length > 0 && (
          <section className="editorial-team-section">
            <div className="section-header-wrap" style={{ marginTop: '2.5rem' }}>
              <div className="section-badge">EDITORIAL BOARD</div>
              <h2 className="section-main-title">Newsletter Committee</h2>
              <p className="section-subtitle">
                The dedicated student editorial team behind the design, curation, and publishing of Scriptus.
              </p>
            </div>

            <div className="newsletter-team-grid">
              {teamMembers.map((member, idx) => (
                <div key={idx} className="newsletter-member-card glass-panel">
                  <div className="member-image-frame">
                    <img 
                      src={member.image || officeBearers.fallbackImage} 
                      alt={member.name} 
                      loading="lazy" 
                    />
                    {member.badge && (
                      <span className="member-badge-tag">{member.badge}</span>
                    )}
                  </div>
                  <h4 className="member-name">{member.name}</h4>
                  <p className="member-role">{member.position}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
