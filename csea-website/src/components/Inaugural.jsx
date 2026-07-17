import React from 'react';
import { ArrowLeft } from 'lucide-react';
import invitationImg from '../assets/inaugural-invitation.jpg';
import './Inaugural.css';

export default function Inaugural({ onBack }) {
  return (
    <section className="inaugural-section">
      <div className="container inaugural-container">
        <div className="back-nav-wrapper">
          <button className="btn-back-home" onClick={onBack}>
            <ArrowLeft size={16} />
            <span>Back</span>
          </button>
        </div>

        <div className="inaugural-card glass-panel animate-inaugural">
          <div className="inaugural-media">
            <img src={invitationImg} alt="Inaugural Invitation" className="inaugural-image animate-image" />
          </div>

          <div className="inaugural-content">
            <h1 className="inaugural-title">Inaugural Ceremony — CSEA & CSE Coding Club</h1>
            <p className="inaugural-sub">Hosted by the Department of Computer Science and Engineering, Kongu Engineering College</p>

            <div className="inaugural-meta">
              <div><strong>Date:</strong> 18th July 2026</div>
              <div><strong>Time:</strong> 2:00 PM — 4:00 PM</div>
              <div><strong>Venue:</strong> Convention Centre</div>
            </div>

            <h3 className="section-heading">Chief Guest</h3>
            <div className="guest-info-inline">
              <h4>Ms. Umayal Muthupalaniappan</h4>
              <p className="guest-role">Senior Member Technical Staff, athenahealth</p>
            </div>

            <h3 className="section-heading">Topic</h3>
            <div className="topic-box">
              <strong>AI Agents — The Next Evolution of AI</strong>
              <p className="topic-sub">"Degrees teach possibilities; action creates outcomes."</p>
            </div>

            <p className="inaugural-desc">
              The Management, Principal, Faculty, Staff and Student Members of the Computer Science Engineering Association and CSE Coding Club cordially invite you for the inaugural ceremony. Join us for the keynote address and the inauguration of CSEA activities.
            </p>

            <div className="inaugural-actions">
              <button className="btn-outlined" onClick={onBack}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
