export const eventsData = [
  // ==================== WORKSHOPS ====================
  {
    id: "fullstack-development",
    title: "Fullstack Development Workshop",
    category: "workshop",
    date: "July 19, 2025",
    time: "8:45 AM onwards",
    shortDesc: "A hands-on training initiative organized by CSEA to enhance students' knowledge in the field of fullstack development tools.",
    detailedDesc: "Organized by the Computer Science and Engineering Association (CSEA) of Kongu Engineering College, this workshop was conducted as part of the technical training initiative. The program was designed to introduce participants to modern fullstack architectures, databases, frontend frameworks, and backend deployments. The interactive sessions helped students bridge the gap between frontend styling and database connectivity, encouraging them to design complete applications independently.",
    agenda: [
      { time: "08:45 AM", event: "Prayer Song by Ms. N.S. Inigashree" },
      { time: "09:00 AM", event: "Welcome Address by Mr. S. Pravin (Joint Secretary, CSEA)" },
      { time: "09:15 AM", event: "Felicitation Address by Dr. S. Malliga (Head of Department, CSE)" },
      { time: "09:30 AM", event: "Technical Training Session Starts" },
      { time: "04:30 PM", event: "Valedictory & Feedback Session" }
    ],
    stats: {
      duration: "1 Day",
      type: "Technical Training"
    },
    keyPeople: [
      { name: "Ms. N.S. Inigashree", role: "Prayer Song Vocalist" },
      { name: "Mr. S. Pravin", role: "Joint Secretary, CSEA" },
      { name: "Dr. S. Malliga", role: "Head of the Department, CSE" }
    ]
  },
  {
    id: "ethos-soft-skills",
    title: "Ethos Soft Skills",
    category: "workshop",
    date: "August 2025",
    shortDesc: "An essential soft skills training designed to groom professional etiquettes, communication, and leadership capabilities.",
    detailedDesc: "The Ethos Soft Skills Workshop focuses on holistic student development. From understanding professional body language to handling interviews and corporate communication, this workshop equips students with critical non-technical skills required to survive and thrive in competitive corporate environments.",
    stats: {
      duration: "1 Day",
      type: "Soft Skills"
    }
  },
  {
    id: "animation-workshop",
    title: "Animation",
    category: "workshop",
    date: "September 24, 2025",
    time: "9:30 AM - 4:30 PM",
    shortDesc: "Creative hands-on workshop covering digital animation principles, CSS micro-interactions, and visual tools.",
    detailedDesc: "An immersive workshop that introduced students to the creative and motion-oriented side of web development. Participants learned about keyframes, vector animations, UI transitions, and motion logic using Figma, CSS transitions, and SVG manipulation. The workshop combined design theory with practical labs, helping students build engaging, animated user interfaces that feel alive.",
    stats: {
      duration: "1 Day",
      type: "Design & Creative",
      softwareUsed: "Figma, CSS3, SVGs"
    },
    keyPeople: [
      { name: "CSEA Design Team", role: "Event Lead & Instructors" }
    ]
  },
  {
    id: "resume-reboot",
    title: "Resume Reboot",
    category: "workshop",
    date: "October 2025",
    shortDesc: "Interactive resume building session focusing on ATS optimization, portfolios, and professional branding.",
    detailedDesc: "Resume Reboot was organized to assist students in preparing resumes that stand out to tech recruiters. Mentors reviewed portfolios, walked through ATS (Applicant Tracking System) filtering mechanisms, and provided templates to construct clear, achievements-focused resumes.",
    stats: {
      duration: "1 Day",
      type: "Career Placement"
    }
  },
  {
    id: "aiml-unlocked",
    title: "“AIML Unlocked – From Basics to Brilliance”",
    category: "workshop",
    date: "December 2025",
    shortDesc: "Comprehensive session demystifying Artificial Intelligence & Machine Learning foundations.",
    detailedDesc: "AIML Unlocked provided a structured roadmap for students eager to enter the field of AI. From simple linear regression to deep learning and Generative AI, this workshop included coding labs where students built and evaluated their first machine learning models using Python and popular libraries.",
    stats: {
      duration: "2 Days",
      type: "Emerging Tech"
    }
  },
  {
    id: "scratch-to-stack",
    title: "Scratch to Stack workshop for 1st year",
    category: "workshop",
    date: "January 2026",
    shortDesc: "A targeted foundational workshop designed specifically for 1st-year students to kickstart programming.",
    detailedDesc: "This introductory workshop targeted first-year students to remove the fear of programming. Using visual block-based languages initially (Scratch), students transitioned into writing actual code, learning basic HTML, CSS, and JavaScript, and building their very first website layout.",
    stats: {
      duration: "1 Day",
      targetAudience: "1st Year CSE Students"
    }
  },

  // ==================== GUEST LECTURES ====================
  {
    id: "ai-trends-applications",
    title: "AI: Trends and Applications",
    category: "guest_lecture",
    date: "August 12, 2025",
    shortDesc: "Expert lecture on the evolving landscapes of GenAI, computer vision, and industrial automation.",
    detailedDesc: "An insightful guest lecture led by industry veterans discussing the rapid integration of artificial intelligence in corporate sectors. The session walked students through NLP advancements, autonomous agents, and how CSE graduates can position themselves to build AI-first products.",
    stats: {
      type: "Technical Guest Lecture"
    }
  },
  {
    id: "campus-to-corporate",
    title: "“From Campus to Corporate: Skills that get you hired”",
    category: "guest_lecture",
    date: "September 04, 2025",
    shortDesc: "Placement prep lecture detailing corporate expectations, technical screenings, and interview survival.",
    detailedDesc: "A vital guidance session covering the gap between academic curricula and corporate expectations. The speaker emphasized problem-solving mindsets, the importance of system design basics, and collaborative development tools like Git.",
    stats: {
      type: "Career Alignment"
    }
  },
  {
    id: "ai-strategic-security",
    title: "“AI for Strategic Sector Security”",
    category: "guest_lecture",
    date: "October 15, 2025",
    shortDesc: "Exploring high-stakes AI applications in cybersecurity, defense systems, and threat detection.",
    detailedDesc: "This guest lecture detailed how defense, aerospace, and government security agencies leverage AI. Topics covered real-time threat intelligence, military grade encryption, automated response systems, and the ethical dilemmas surrounding autonomous security systems.",
    stats: {
      type: "Specialized Security"
    }
  },
  {
    id: "resilience-adaptability",
    title: "“Resilience & Adaptability: Surviving 20+ Years in the Changing IT World”",
    category: "guest_lecture",
    date: "February 08, 2026",
    shortDesc: "Veteran industry speaker sharing wisdom on staying relevant through decades of technology shifts.",
    detailedDesc: "A highly motivating lecture by an IT industry veteran who has seen transitions from mainframe to cloud and AI. The lecture focused on the mental resilience required to continuously unlearn and relearn, build lasting networks, and adapt to changing software methodologies.",
    stats: {
      type: "Professional Mentorship"
    }
  },

  // ==================== BOOTCAMPS ====================
  {
    id: "bootcamp-phase1",
    title: "Bootcamp Phase - I (Alumni Mentoring)",
    category: "bootcamp",
    date: "July 2025",
    shortDesc: "One-to-one mentoring bootcamp connecting IV-year placement candidates with top industry alumni.",
    detailedDesc: "Specifically designed for final-year placement-willing students. This bootcamp paired students directly with alumni working in reputed product and service companies. Mentors provided personalized feedback on portfolios, conducted mock technical interviews, and guided students on targeted company preparation.",
    stats: {
      targetAudience: "IV Year Placement Students",
      mentorship: "1-on-1 Alumni Guidance"
    }
  },
  {
    id: "bootcamp-phase2",
    title: "Skill Development Bootcamp - Phase II",
    category: "bootcamp",
    date: "August 28-29, 2025",
    shortDesc: "Two-Day intensive bootcamp focusing on Data Structures, Algorithms, and Aptitude cracking.",
    detailedDesc: "Organized by the CSEA at Kongu Engineering College. This two-day bootcamp provided intense training in Core Data Structures (Trees, Graphs, HashMaps) and dynamic programming concepts. The aptitude section focused on quick mathematical tricks, logical reasoning, and analytical skill enhancement to help students crack screening tests.",
    stats: {
      duration: "2 Days",
      topics: "Data Structures & Aptitude"
    }
  },
  {
    id: "aptitude-bootcamp",
    title: "Aptitude Bootcamp",
    category: "bootcamp",
    date: "September 2025",
    shortDesc: "Specialized bootcamp to sharpen logical reasoning, quantitative skills, and cognitive test scores.",
    detailedDesc: "A bootcamp dedicated entirely to solving competitive aptitude questions. Students practiced under strict timed environments and learned shortcut strategies for arithmetic, permutation-combination, probability, and verbal reasoning sections.",
    stats: {
      type: "Placement Pre-requisite"
    }
  },

  // ==================== DISCOVER CSEA (MAJOR EVENTS) ====================
  {
    id: "algoarena",
    title: "AlgoArena 2025 - 24-Hour Hackathon",
    category: "major_event",
    date: "September 17, 2025",
    shortDesc: "An intense 24-hour hackathon challenging students to convert ideas into Smart India Hackathon prototypes.",
    detailedDesc: "Organized by CSEA, AlgoArena was a signature 24-hour hackathon held as part of the academic year 2025–2026 initiatives. The event served as a platform for students to convert their ideas (pre-shortlisted in the preliminary Ideathon round) into fully functional prototypes. Teams worked intensively for 24 hours under strict timelines on real-world Smart India Hackathon (SIH) problem statements. With round-the-clock guidance from mentors, participants demonstrated teamwork and engineering skills, culminating in live demonstrations before a panel of industry experts.",
    highlights: [
      "Conducted post college-level Ideathon round to select top concepts.",
      "Tackled real-world Smart India Hackathon (SIH) problem statements.",
      "24-hour continuous coding with strict timeline constraints.",
      "Mentors guided teams on database design, API integration, and pitching.",
      "Expert panel evaluation on originality, functionality, scalability, and societal impact.",
      "Cash prizes and mentorship opportunities awarded to the winning teams."
    ],
    stats: {
      duration: "24 Hours",
      type: "Hackathon",
      level: "College Level (SIH Context)"
    }
  },
  {
    id: "renaissance",
    title: "Renaissance 2025",
    category: "major_event",
    date: "September 26, 2025",
    shortDesc: "A flagship mega-symposium by CSEA & CSE Coding Club, packing technical coding challenges and creative non-tech games.",
    detailedDesc: "Renaissance 2025 was a massive event conducted jointly by the Computer Science and Engineering Association (CSEA) and the CSE Coding Club (CCC) at Kongu Engineering College. Commencing with the Kongu Anthem, the event set an inspiring tone with felicitation addresses and the official CSEA Newsletter launch. The symposium featured diverse technical events tailored to challenge coding efficiency and presenting skills, paired with non-technical team games that brought immense collaboration and excitement.",
    agenda: [
      { time: "09:00 AM", event: "Kongu Anthem" },
      { time: "09:10 AM", event: "Welcome Address by Mr. S.S Dharaneesh (Joint Secretary, CCC)" },
      { time: "09:20 AM", event: "Felicitation by Dr. S. Malliga (Head of CSE Dept)" },
      { time: "09:35 AM", event: "CSEA Newsletter Edition 1 Unveiling by Mr. V. Kamal Kishore (Joint Sec, CSEA)" },
      { time: "10:00 AM", event: "Commencement of Technical & Non-Technical Events" },
      { time: "04:00 PM", event: "Valedictory Ceremony & Winner Announcement" },
      { time: "04:15 PM", event: "Vote of Thanks by Mr. R. Arvind (Treasurer, CSEA)" },
      { time: "04:30 PM", event: "National Anthem" }
    ],
    technicalEvents: [
      { name: "Word Spark", desc: "Presentation of current computer trends evaluated on clarity, content, and domain knowledge." },
      { name: "Idea Quest", desc: "Live project demonstrations showing originality, research, and potential for improvement." },
      { name: "Coderush", desc: "A 2nd-year individual coding challenge involving rolling dice to pick coding tasks, optimized code length, and minimal complexity." },
      { name: "Spinathon", desc: "A 3rd-year coding contest centered around highly optimized solution structures and code compilation times." },
      { name: "Quiztron", desc: "A rapid-fire CS quiz open to all students covering core computer science paradigms." },
      { name: "Web Weave", desc: "Design & development contest: 2nd years recreated Figma mockups, and 3rd years built responsive React applications." }
    ],
    nonTechnicalEvents: [
      { name: "Word Whirl", desc: "A three-round verbal game testing creativity, acting, and speed playing with words." },
      { name: "Phantom Within", desc: "A thrilling adventure game inside a dark room testing collaboration and quick reflexes." }
    ],
    stats: {
      collabs: "CSEA & CSE Coding Club (CCC)",
      activities: "6 Technical, 2 Non-Technical Events"
    },
    keyPeople: [
      { name: "Mr. S.S Dharaneesh", role: "Joint Secretary, CCC" },
      { name: "Dr. S. Malliga", role: "Head of CSE Department" },
      { name: "Mr. V. Kamal Kishore", role: "Joint Secretary, CSEA (Newsletter Release)" },
      { name: "Mr. R. Arvind", role: "Treasurer, CSEA" }
    ]
  },
  {
    id: "elevate-x",
    title: "ELEVATE X - Idea Pitching Event",
    category: "major_event",
    date: "November 01, 2025",
    shortDesc: "An intensive pitch deck preparation and presentation event to promote innovation and entrepreneurship.",
    detailedDesc: "Organized by the Department of CSE, Kongu Engineering College, under the banner of CSEA. The morning was dedicated to teaching students how to make professional, investment-ready pitch decks, which they then presented in the afternoon session to a panel. Newsletter Edition 2 was officially unveiled during the event. Valedictory session hosted Chief Guest Mr. K. Santhosh Gandhi who motivated students to step into innovation and startups.",
    agenda: [
      { session: "Forenoon (CC09 & CC10, AO Block)", activity: "Idea Pitch Preparation & Deck Structuring Workshop" },
      { session: "Afternoon (Seminar Hall)", activity: "Idea Presentation & Pitching Contest" },
      { session: "Valedictory", activity: "CSEA Newsletter Edition 2 Release" },
      { session: "Valedictory", activity: "Welcome Address by Mr. Vishal A C (Media Team, CSEA)" },
      { session: "Chief Guest Address", activity: "Interactive speech by Mr. K. Santhosh Gandhi (MD, Viswam Group of Companies)" },
      { session: "Valedictory", activity: "Prize Distribution & Vote of Thanks by Ms. C. Kavishree (Newsletter Team, CSEA)" }
    ],
    stats: {
      studentsAttended: 71,
      locations: "CC09, CC10 & Dr. Sarvepalli Radhakrishnan Seminar Hall",
      newsletterReleased: "Edition 2"
    },
    keyPeople: [
      { name: "Mr. Vishal A C", role: "Media Team, CSEA" },
      { name: "Mr. K. Santhosh Gandhi", role: "Chief Guest (MD, Viswam Group of Companies)" },
      { name: "Ms. C. Kavishree", role: "Newsletter Team, CSEA (Vote of Thanks)" }
    ]
  },
  {
    id: "vit-prelims",
    title: "VIT Prelims",
    category: "major_event",
    date: "December 2025",
    shortDesc: "Preliminary screening and selection round for national level symposia entries.",
    detailedDesc: "A highly competitive qualifying event conducted to select the best student representatives for inter-collegiate and national level coding competitions. Evaluated by senior faculty mentors on algorithmic problem solving.",
    stats: {
      type: "Competition Qualifier"
    }
  },
  {
    id: "crescita-26",
    title: "Crescita '26 (Symposium)",
    category: "major_event",
    date: "February 2026",
    shortDesc: "Annual National Level Technical Symposium by CSEA featuring workshops, debates, and tech challenges.",
    detailedDesc: "Crescita (Cresciton) is CSEA's flagship national level technical symposium. It brings together engineering students from all across India to compete in technical, semi-technical, and analytical challenges, alongside state-of-the-art workshops led by industry specialists.",
    subEvents: [
      { name: "Cyber Workshop", desc: "Hands-on training in security, cryptography, and penetration testing." },
      { name: "Gen AI Workshop", desc: "Building projects with Generative AI APIs and prompt engineering." },
      { name: "SpeakSphere (Debate)", desc: "Debate competition testing technical ethics, public speaking, and quick thinking." },
      { name: "Pitch it Prove it", desc: "Idea pitching and entrepreneurship challenge before tech-investor panels." },
      { name: "Bid 2 Build", desc: "Auction-based structural or tech stack building challenge." },
      { name: "VibeXecute", desc: "Rapid hack-style implementation and coding under constraints." }
    ],
    stats: {
      type: "National Symposium & Workshops",
      scope: "National Level"
    }
  },
  {
    id: "teachers-day",
    title: "Teachers Day Celebrations",
    category: "major_event",
    date: "September 05, 2025",
    shortDesc: "Gratitude celebration honoring CSE faculty with recreational events and newsletters.",
    detailedDesc: "Organized by the CSEA student team to express gratitude to the professors and lab staff of the CSE Department. The celebration featured quick games, dynamic presentations, and cake cutting to build department-wide camaraderie.",
    stats: {
      type: "Departmental Event"
    }
  }
];
