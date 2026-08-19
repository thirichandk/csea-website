import sihPoster from '../assets/sih.png';
import linkedinPoster from '../assets/linkedin.jpeg';

export const upcomingEvents = [
  {
    id: 'sih-2026-workshop',
    eventDate: '2026-08-24',
    title: 'SIH 2026 Workshop - Full Stack Solutions for SIH',
    shortTitle: 'SIH 2026 Workshop',
    subtitle: 'Full Stack Solutions for SIH',
    description: 'Join us for an insightful workshop on Smart India Hackathon (SIH) and learn how to transform innovative ideas into impactful full-stack solutions.',
    date: '24 August 2026',
    time: '8:45 AM - 4:15 PM',
    venue: 'Admin Block, CC15',
    speakerLabel: 'Featured Guest',
    speaker: { name: 'Ms. R. Shree Varshana', achievement: 'SIH Winner - 2024', designation: 'Advanced Associate Software Engineer', organization: 'Accenture, Chennai' },
    eligibility: 'All eligible students',
    message: 'Learn, innovate, collaborate, and get inspired for SIH 2026!',
    poster: sihPoster,
    registrationUrl: 'https://forms.gle/WSTNCKjfsrF9eFae6',
  },
  {
    id: 'linkedin-placement-workshop',
    eventDate: '2026-08-24',
    title: 'Leveraging LinkedIn for Placements and Career Growth',
    shortTitle: 'Level Up Your LinkedIn Presence!',
    subtitle: 'LEVEL UP YOUR LINKEDIN PRESENCE!',
    description: 'Are you wondering how to use LinkedIn effectively to build your professional profile, connect with recruiters, discover job opportunities, and improve your placement prospects? The Computer Science and Engineering Association (CSEA) presents a special workshop on using LinkedIn strategically for placements, internships, networking, personal branding, and career growth.',
    date: '24 August 2026',
    time: '8:45 AM - 4:15 PM',
    venue: 'ITP CC16',
    speakerLabel: 'Featured Speaker',
    speaker: { name: 'Mr. B. Ahamad Thowfeek', designation: 'Product Designer & Full Stack Developer', organization: 'Founder - Combo Square' },
    eligibility: 'Exclusively for II & III Year Students',
    organizedBy: 'Computer Science and Engineering Association (CSEA), Kongu Engineering College',
    message: "Don't just create a LinkedIn profile - learn how to turn it into a powerful career opportunity!",
    poster: linkedinPoster,
    registrationUrl: 'https://forms.gle/4FK4pxReNQwnD3it7',
  },
];

const eventEndOfDay = (eventDate) => new Date(`${eventDate}T23:59:59`);

export const isEventUpcoming = (event, now = new Date()) => eventEndOfDay(event.eventDate) >= now;
export const getUpcomingEvents = (now = new Date()) => upcomingEvents.filter((event) => isEventUpcoming(event, now));
export const getEventById = (eventId) => upcomingEvents.find((event) => event.id === eventId);