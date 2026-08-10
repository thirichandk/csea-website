import React, { useState, useEffect } from 'react';
import './Achievements.css';
import AchievementCarousel from '../components/AchievementCarousel';
import EnthusiaImg from '../assets/Achievements/Enthusia.png';
import AgritechImg from '../assets/Achievements/Agritech.png';
import InnoImg from '../assets/Achievements/Inno.jpeg';
import VanImg from '../assets/Achievements/Van.jpeg';
import Outgoing2025Img from '../assets/Achievements/outgoing2025.png';

export default function Achievements() {
  const [filter, setFilter] = useState('all');
  const [modalImage, setModalImage] = useState(null);
  const [expandedCards, setExpandedCards] = useState({});

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setModalImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleExpand = (id) => {
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const cards = [
    {
      id: 'outgoing-2025',
      cat: 'academics',
      catLabel: 'Academics',
      title: '🎓 Best Outgoing Student 2025 – Prasanndh Raaju',
      image: Outgoing2025Img,
      summary: 'Prasanndh Raaju earned Best Outgoing Student 2025 through academic excellence, 24 papers, 30 projects, innovation funding, and global offers for MS study.',
      desc: (
        <>
          <strong>Best Outgoing Student 2025 (Roll No: 22CSR151)</strong>
          <br /><br />
          Prasanndh Raaju was honored as the Best Outgoing Student 2025 for demonstrating exceptional academic performance, research productivity, innovation funding, and international higher education recognition:
          <br /><br />
          <ul style={{ paddingLeft: '20px', marginTop: '8px', listStyleType: 'disc' }}>
            <li><strong>Academic Standing:</strong> Secured <strong>8.77 CGPA</strong>.</li>
            <li><strong>Paper Presentations:</strong> Presented <strong>24 papers</strong> and won <strong>2 Prizes</strong>.</li>
            <li><strong>Project Competitions:</strong> Presented <strong>30 projects</strong> and won <strong>2 Prizes</strong>.</li>
            <li><strong>Innovation Funding:</strong> Received <strong>Rs. 1,95,000/-</strong> for projects from MoE's Innovation Cell, Govt. of India & Niral Thiruvizha 2024.</li>
            <li><strong>Global Offers:</strong> Received scholarship offers from <strong>University of Hertfordshire</strong> and <strong>Heriot-Watt University</strong> for MS in Data Science.</li>
          </ul>
          <br />
          <em>"Excellence is not an act, but a habit."</em>
        </>
      ),
      avatar: '🎓',
      name: 'Prasanndh Raaju (22CSR151)',
      when: '2025'
    },
    {
      id: 'sih-2024-innovisionersz',
      cat: 'hackathon',
      catLabel: 'Hackathon',
      title: '🏆 Winners – Smart India Hackathon (SIH) 2024',
      image: InnoImg,
      summary: 'Team INNOVISIONERSZ won First Place at SIH 2024 with a national-level innovation solution and strong teamwork.',
      teamMembers: [
        'Mano Sundar M',
        'Gowtham S',
        'Kaviya P',
        'Kavya P',
        'Kalaiselvan K',
        'Muthu Karuppan P'
      ],
      desc: (
        <>
          <strong>National SIH 2024 Champions – Team INNOVISIONERSZ</strong>
          <br /><br />
          Our department team <strong>INNOVISIONERSZ</strong> secured First Place in the prestigious Smart India Hackathon (SIH) 2024, demonstrating exceptional problem-solving, innovative design, and technical mastery on a national stage.
          <br /><br />
          <strong>Team Members:</strong>
          <ul style={{ paddingLeft: '20px', marginTop: '8px', listStyleType: 'disc' }}>
            <li>Mano Sundar M</li>
            <li>Gowtham S</li>
            <li>Kaviya P</li>
            <li>Kavya P</li>
            <li>Kalaiselvan K</li>
            <li>Muthu Karuppan P</li>
          </ul>
          <br />
          <em>"Innovation distinguishes between a leader and a follower."</em>
        </>
      ),
      avatar: '🏆',
      name: 'Team INNOVISIONERSZ',
      when: '2024'
    },
    {
      id: 'sih-2024-vanguards',
      cat: 'hackathon',
      catLabel: 'Hackathon',
      title: '🏆 Winners – Smart India Hackathon (SIH) 2024',
      image: VanImg,
      summary: 'Team VANGUARDS ELEVATE won SIH 2024 by building a high-impact technical solution and competing against top national teams.',
      teamMembers: [
        'Shree Varshana R',
        'Tamilarasi P',
        'Tharun S',
        'Vaishnavi K',
        'Vibudesh R B',
        'Vignesh G'
      ],
      desc: (
        <>
          <strong>National SIH 2024 Champions – Team VANGUARDS ELEVATE</strong>
          <br /><br />
          Our department team <strong>VANGUARDS ELEVATE</strong> emerged as Winners at the Smart India Hackathon (SIH) 2024, competing against top talents nationwide and building high-impact tech solutions.
          <br /><br />
          <strong>Team Members:</strong>
          <ul style={{ paddingLeft: '20px', marginTop: '8px', listStyleType: 'disc' }}>
            <li>Shree Varshana R</li>
            <li>Tamilarasi P</li>
            <li>Tharun S</li>
            <li>Vaishnavi K</li>
            <li>Vibudesh R B</li>
            <li>Vignesh G</li>
          </ul>
          <br />
          <em>"Empowered minds building tomorrow's solutions."</em>
        </>
      ),
      avatar: '🏆',
      name: 'Team VANGUARDS ELEVATE',
      when: '2024'
    },
    {
      id: 'enthusia-2026',
      cat: 'culturals',
      catLabel: 'Culturals',
      title: 'Best Performing Department at Enthusia 2K26',
      image: EnthusiaImg,
      summary: 'CSEA earned Best Performing Department at Enthusia 2K26 by highlighting the department’s talent, teamwork, and event leadership.',
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
      id: 'agritech-2025',
      cat: 'hackathon',
      catLabel: 'Hackathon',
      title: '🥈 Second Prize – National Agritech Hackathon 2025',
      image: AgritechImg,
      summary: 'The CSEA team secured Second Prize at National Agritech Hackathon 2025 with a real-world agricultural innovation and strong technical execution.',
      teamMembers: [
        'Thineshkumar S (24CSR328)',
        'Thavanesh Muthu Raja M (24CSR325)',
        'Thirichand K (24CSR329)',
        'Vidulasri R D (24CSR342)',
        'Sweta T (24CSR316)'
      ],
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
  const carouselItems = cards.map((c) => ({ image: c.image, title: c.title }));
  const featuredCard = filteredCards[0];
  const secondaryCards = filteredCards.slice(1);

  return (
    <div className="achievements-wrap">
      <AchievementCarousel items={carouselItems} />
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
        <div className={`achievements-tab ${filter === 'academics' ? 'active' : ''}`} onClick={() => setFilter('academics')}>Academics</div>
        <div className={`achievements-tab ${filter === 'culturals' ? 'active' : ''}`} onClick={() => setFilter('culturals')}>Culturals</div>
      </div>

      <div className="achievement-showcase">
        {featuredCard ? (
          <article className="achievement-featured-card achievement-showcase-card" data-achievement-id={featuredCard.id}>
            <div className="achievement-featured-media" onClick={() => setModalImage({ src: featuredCard.image, title: featuredCard.title })}>
              <img src={featuredCard.image} alt={featuredCard.title} />
            </div>
            <div className="achievement-featured-content">
              <div className={`achievement-badge achievement-badge-${featuredCard.cat}`}>
                {featuredCard.catLabel}
              </div>
              <h2 className="achievement-featured-title">{featuredCard.title}</h2>
              <p className="achievement-featured-summary">{featuredCard.summary}</p>
              <div className="achievement-featured-meta">
                <span className="achievement-meta-pill">{featuredCard.catLabel}</span>
                <span className="achievement-meta-year">{featuredCard.when}</span>
              </div>
              <div className="achievement-featured-actions">
                <button
                  className="achievement-action-link"
                  onClick={() => toggleExpand(featuredCard.id)}
                  aria-expanded={!!expandedCards[featuredCard.id]}
                >
                  {expandedCards[featuredCard.id] ? 'Show less about achievement' : 'Read full achievement'}
                </button>
              </div>
              {expandedCards[featuredCard.id] && (
                <div className="achievement-expanded-content">
                  {featuredCard.desc}
                </div>
              )}
            </div>
          </article>
        ) : (
          <div className="achievement-empty-state">No achievements found for this filter.</div>
        )}

        {secondaryCards.length > 0 && (
          <div className="achievement-secondary-grid">
            {secondaryCards.map((c) => (
              <article key={c.id} className="achievement-card-small achievement-showcase-card" data-achievement-id={c.id}>
                <div className="achievement-card-image" onClick={() => setModalImage({ src: c.image, title: c.title })}>
                  <img src={c.image} alt={c.title} />
                </div>
                <div className="achievement-card-body">
                  <div className={`achievement-badge achievement-badge-${c.cat}`}>{c.catLabel}</div>
                  <h3>{c.title}</h3>
                  <p className="achievement-card-summary">
                    {expandedCards[c.id] ? '' : c.summary}
                  </p>
                  {expandedCards[c.id] && <div className="achievement-expanded-content">{c.desc}</div>}
                  <div className="achievement-card-meta-row">
                    <span>{c.when}</span>
                    {c.teamMembers && <span>{c.teamMembers.length} team members</span>}
                  </div>
                  <button
                    className="achievement-action-link"
                    onClick={() => toggleExpand(c.id)}
                    aria-expanded={!!expandedCards[c.id]}
                  >
                    {expandedCards[c.id] ? 'Collapse details' : 'Read more'}
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      <div className="achievements-more"><button className="achievements-btn">View All Achievements</button></div>

      {modalImage && (
        <div className="achievements-modal-overlay" onClick={() => setModalImage(null)}>
          <div className="achievements-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="achievements-modal-close" onClick={() => setModalImage(null)} aria-label="Close modal">
              &times;
            </button>
            <img src={modalImage.src} alt={modalImage.title} className="achievements-modal-img" />
            <div className="achievements-modal-title">{modalImage.title}</div>
          </div>
        </div>
      )}
    </div>
  );
}
