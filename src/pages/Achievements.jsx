import React, { useState } from 'react';
import './Achievements.css';
import EnthusiaImg from '../assets/Achievements/Enthusia.png';
import AgritechImg from '../assets/Achievements/Agritech.png';

export default function Achievements() {
  const [filter, setFilter] = useState('all');

  const cards = [
    {
      cat: 'culturals',
      catLabel: 'Culturals',
      title: 'Best Performing Department at Enthusia 2K26',
      image: EnthusiaImg,
      desc: (
        <>
          <strong>Hard Work + Talent = Success!</strong>
          <br /><br />
          Our department proudly secured the Best Performing Department award at Enthusia 2K26. This achievement reflects the dedication, creativity, teamwork, and relentless efforts of our students and faculty throughout the event.
          <br /><br />
          This victory is more than just a trophy—it's a celebration of unity, passion, and excellence. Congratulations to everyone who contributed to making this success possible!
          <br /><br />
          <em>"Together we performed. Together we succeeded. Together we made history."</em>
        </>
      ),
      avatar: '🏆',
      name: 'Department of CSE',
      when: '2026'
    },
    {
      cat: 'hackathon',
      catLabel: 'Hackathon',
      title: '🥈 Second Prize – National Agritech Hackathon 2025',
      image: AgritechImg,
      desc: (
        <>
          <strong>Innovation Beyond the Classroom</strong>
          <br /><br />
          Our students have brought pride to the Department of Computer Science and Engineering by securing Second Prize at the National Agritech Hackathon 2025, held at R.V.R. & J.C. College of Engineering, Guntur.
          <br /><br />
          Competing against talented teams from across the country, our students showcased exceptional technical expertise, innovative thinking, and collaborative problem-solving to develop impactful solutions for real-world agricultural challenges.
          <br /><br />
          <strong>Team Members:</strong>
          <ul style={{ paddingLeft: '20px', marginTop: '8px', listStyleType: 'disc' }}>
            <li>Thineshkumar S (24CSR328)</li>
            <li>Thavanesh Muthu Raja M (24CSR325)</li>
            <li>Thirichand K (24CSR329)</li>
            <li>Vidulasri R D (24CSR342)</li>
            <li>Sweta T (24CSR316)</li>
          </ul>
          <br />
          This achievement reflects our department's commitment to fostering innovation, collaboration, and excellence. We extend our heartfelt congratulations to the team and wish them continued success in their future endeavors.
          <br /><br />
          <em>"Innovation begins with an idea, grows through teamwork, and succeeds through perseverance."</em>
        </>
      ),
      avatar: '🥈',
      name: 'Thineshkumar, Thavanesh, Thirichand, Vidulasri & Sweta',
      when: '2025'
    }
  ];

  const filteredCards = filter === 'all' ? cards : cards.filter(c => c.cat === filter);

  return (
    <div className="achievements-wrap">
      <div className="achievements-hero">
        <div className="achievements-eyebrow">
          <svg viewBox="0 0 24 24"><path d="M12 2l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 17l-5.9 3.2 1.2-6.6L2.5 9l6.6-.9z" /></svg>
          Our Achievements
        </div>
        <h1 className="achievements-display">Wins Worth<br />the <span className="achievements-accent">Applause.</span></h1>
        <p className="achievements-sub">Every hackathon podium, every published paper, every offer letter — this is CSEA's
          scoreboard, built one milestone at a time by our students and faculty.</p>
      </div>


      <div className="achievements-tabs">
        <div className={`achievements-tab ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</div>
        <div className={`achievements-tab ${filter === 'hackathon' ? 'active' : ''}`} onClick={() => setFilter('hackathon')}>Hackathons</div>
        <div className={`achievements-tab ${filter === 'culturals' ? 'active' : ''}`} onClick={() => setFilter('culturals')}>Culturals</div>
      </div>

      <div className={`achievements-grid ${filteredCards.length === 1 ? 'single-card' : ''}`}>
        {filteredCards.map((c, i) => (
          <div className="achievements-card" data-cat={c.cat} key={i}>
            <div className="achievements-ribbon"></div>
            <svg className="achievements-ribbon-icon" viewBox="0 0 24 24"><path d="M12 2l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 17l-5.9 3.2 1.2-6.6L2.5 9l6.6-.9z" /></svg>
            <div className="achievements-cat-label">{c.catLabel}</div>
            {c.image && <img src={c.image} alt={c.title} className="achievements-card-cover" />}
            <h3>{c.title}</h3>
            <div className="achievements-desc">{c.desc}</div>
            <div className="achievements-meta">
              <div className="achievements-avatar">{c.avatar}</div>
              <div>
                <div className="achievements-name">{c.name}</div>
                <div className="achievements-when">{c.when}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="achievements-more"><button className="achievements-btn">View All Achievements</button></div>
    </div>
  );
}
