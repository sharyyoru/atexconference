const FutureEvent = () => {
  const eventInfo = {
    name: "CODE DXB 2027",
    tagline: "The Middle East's Premier AI Development Conference",
    dates: "October 5-8, 2027",
    venue: "Dubai World Trade Centre",
    venueDetails: "1,000,000+ sq ft of exhibition space · 8 halls · Heart of Dubai's business district",
    expectedAttendees: "15,000+",
    tracks: 4,
    days: 4
  };

  const tracks = [
    {
      day: 1,
      name: "AI in Healthcare",
      color: "#ef4444",
      bgColor: "#fef2f2",
      icon: "🏥",
      description: "Transforming patient care, diagnostics, drug discovery, and hospital operations through AI",
      topics: ["Medical Imaging AI", "Drug Discovery & Development", "Predictive Diagnostics", "Hospital Operations AI", "Mental Health Tech", "Genomics & Precision Medicine"]
    },
    {
      day: 2,
      name: "AI in Mobility",
      color: "#3b82f6",
      bgColor: "#eff6ff",
      icon: "🚗",
      description: "Autonomous vehicles, smart transportation, urban mobility, and the future of travel",
      topics: ["Autonomous Vehicles", "Smart Traffic Systems", "Electric Vehicle AI", "Urban Air Mobility", "Fleet Management AI", "Last-Mile Delivery Robots"]
    },
    {
      day: 3,
      name: "AI Upskilling & Workforce",
      color: "#10b981",
      bgColor: "#ecfdf5",
      icon: "🎓",
      description: "Preparing the workforce for AI transformation through education, reskilling, and change management",
      topics: ["AI Literacy Programs", "Corporate Reskilling", "AI-Human Collaboration", "Future Skills Framework", "Change Management", "AI Career Pathways"]
    },
    {
      day: 4,
      name: "AI in Engineering",
      color: "#8b5cf6",
      bgColor: "#f5f3ff",
      icon: "⚙️",
      description: "Industrial AI, robotics, manufacturing automation, and engineering innovation",
      topics: ["Industrial Robotics", "Predictive Maintenance", "Digital Twins", "Generative Design", "Construction AI", "Energy Grid Optimization"]
    }
  ];

  const suggestedSpeakers = [
    {
      track: "Healthcare",
      color: "#ef4444",
      speakers: [
        { name: "Dr. Eric Topol", title: "Founder, Scripps Research Translational Institute", expertise: "AI in Medicine, Digital Health", status: "Target", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop" },
        { name: "Dr. Fei-Fei Li", title: "Co-Director, Stanford HAI", expertise: "Healthcare AI, Computer Vision", status: "Target", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop" },
        { name: "Dr. Regina Barzilay", title: "MIT AI Faculty, Cancer Research", expertise: "AI Drug Discovery, Medical NLP", status: "Target", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop" },
        { name: "Dr. Bertalan Meskó", title: "The Medical Futurist", expertise: "Digital Health Trends, Patient AI", status: "Potential", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop" }
      ]
    },
    {
      track: "Mobility",
      color: "#3b82f6",
      speakers: [
        { name: "Dr. Amnon Shashua", title: "CEO, Mobileye (Intel)", expertise: "Autonomous Driving, ADAS", status: "Target", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" },
        { name: "Aurora Innovations Team", title: "Aurora (Self-Driving Tech)", expertise: "Robotaxi, Autonomous Trucking", status: "Target", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop" },
        { name: "Aicha Evans", title: "Former CEO, Zoox", expertise: "Urban Mobility, AV Strategy", status: "Potential", image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=200&h=200&fit=crop" },
        { name: "Karl Iagnemma", title: "President, Motional", expertise: "Robotaxi Deployment, Safety", status: "Potential", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop" }
      ]
    },
    {
      track: "AI Upskilling",
      color: "#10b981",
      speakers: [
        { name: "Brian Evergreen", title: "Former Microsoft AI Head", expertise: "Autonomous Transformation", status: "Target", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop" },
        { name: "Ravin Jesuthasan", title: "Mercer Global Transformation Leader", expertise: "Work Design, AI Workforce", status: "Target", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop" },
        { name: "Heather E. McGowan", title: "Future of Work Strategist", expertise: "Learning Transformation", status: "Potential", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=200&h=200&fit=crop" },
        { name: "Josh Bersin", title: "HR Industry Analyst", expertise: "Corporate Learning, HR Tech", status: "Potential", image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&h=200&fit=crop" }
      ]
    },
    {
      track: "Engineering",
      color: "#8b5cf6",
      speakers: [
        { name: "Dr. Rodney Brooks", title: "Co-founder, iRobot & Rethink Robotics", expertise: "Robotics, Industrial AI", status: "Target", image: "https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?w=200&h=200&fit=crop" },
        { name: "Melonee Wise", title: "VP Robotics, Agility Robotics", expertise: "Humanoid Robots, Logistics AI", status: "Target", image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=200&h=200&fit=crop" },
        { name: "Dr. Pieter Abbeel", title: "UC Berkeley, Covariant Co-founder", expertise: "Robot Learning, Manipulation", status: "Target", image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=200&h=200&fit=crop" },
        { name: "Marc Raibert", title: "Founder, Boston Dynamics", expertise: "Legged Robots, Dynamic Systems", status: "Dream", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&h=200&fit=crop" }
      ]
    }
  ];

  const activations = [
    {
      name: "AI Innovation Pavilion",
      icon: "🚀",
      size: "50,000 sq ft",
      description: "A massive hands-on exhibition showcasing cutting-edge AI demos from 100+ startups, scale-ups, and enterprise innovators. Interactive stations where attendees can experience AI-powered healthcare diagnostics, autonomous vehicle simulations, industrial robots, and workforce AI tools.",
      features: [
        "Live autonomous vehicle test track (indoor)",
        "AI-powered medical diagnostics demos",
        "Industrial robot interaction zone",
        "Startup pitch arena (50 startups)",
        "Enterprise innovation showcases",
        "AI art and creative installations"
      ]
    },
    {
      name: "Future City Experience",
      icon: "🌆",
      size: "30,000 sq ft",
      description: "An immersive walkthrough of a fully AI-integrated city of the future. Experience smart mobility, AI healthcare clinics, automated factories, and AI-enhanced education in a single interconnected environment.",
      features: [
        "Smart home and building automation",
        "AI-powered urban mobility simulation",
        "Digital twin city visualization",
        "Sustainable energy AI showcase",
        "Drone delivery demonstrations",
        "Mixed reality urban planning tools"
      ]
    }
  ];

  const agenda = tracks.map(track => ({
    day: track.day,
    date: `October ${4 + track.day}, 2027`,
    track: track.name,
    color: track.color,
    icon: track.icon,
    sessions: [
      { time: "8:00 AM", type: "Registration", title: "Registration & Networking Breakfast", speaker: null },
      { time: "9:00 AM", type: "Opening", title: `Day ${track.day} Welcome & Track Introduction`, speaker: "Conference Chair" },
      { time: "9:30 AM", type: "Keynote", title: `The Future of AI in ${track.name.replace('AI in ', '').replace(' & Workforce', '')}`, speaker: "Headline Speaker TBC", status: "unfilled" },
      { time: "10:30 AM", type: "Panel", title: `${track.name}: Global Perspectives`, speaker: "4 Industry Leaders", status: "unfilled" },
      { time: "11:30 AM", type: "Break", title: "Networking Break & Exhibition", speaker: null },
      { time: "12:00 PM", type: "Deep Dive", title: `Implementation Case Studies: ${track.topics[0]}`, speaker: "2 Speakers TBC", status: "unfilled" },
      { time: "1:00 PM", type: "Lunch", title: "Networking Lunch & Activations", speaker: null },
      { time: "2:30 PM", type: "Workshop", title: `Hands-On: ${track.topics[1]} Workshop`, speaker: "Workshop Lead TBC", status: "unfilled" },
      { time: "4:00 PM", type: "Fireside", title: `Fireside Chat: ${track.topics[2]} Revolution`, speaker: "CEO + Moderator TBC", status: "unfilled" },
      { time: "5:00 PM", type: "Panel", title: `UAE & GCC ${track.name} Roadmap`, speaker: "Government + Industry", status: "unfilled" },
      { time: "6:00 PM", type: "Closing", title: "Day Wrap-Up & Key Takeaways", speaker: "Track Lead" },
      { time: "7:00 PM", type: "Evening", title: track.day === 4 ? "Gala Dinner & Awards" : "Networking Reception", speaker: null }
    ]
  }));

  const venueComparison = [
    { venue: "Dubai World Trade Centre", capacity: "1,000,000+ sq ft", halls: 8, location: "Sheikh Zayed Road", metro: "World Trade Centre Station", recommended: true },
    { venue: "Dubai Exhibition Centre", capacity: "500,000 sq ft", halls: 4, location: "Expo City Dubai", metro: "Expo 2020 Station", recommended: false }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
      {/* Navigation */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, backgroundColor: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(20px)', borderBottom: '1px solid #f5f5f5' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '56px' }}>
            <a href="/future" style={{ fontSize: '15px', fontWeight: '600', color: '#171717', textDecoration: 'none' }}>
              CODE DXB 2027
            </a>
            <div style={{ display: 'flex', gap: '32px' }}>
              <a href="#tracks" style={{ fontSize: '13px', color: '#525252', textDecoration: 'none' }}>Tracks</a>
              <a href="#speakers" style={{ fontSize: '13px', color: '#525252', textDecoration: 'none' }}>Speakers</a>
              <a href="#activations" style={{ fontSize: '13px', color: '#525252', textDecoration: 'none' }}>Activations</a>
              <a href="#agenda" style={{ fontSize: '13px', color: '#525252', textDecoration: 'none' }}>Agenda</a>
              <a href="#venue" style={{ fontSize: '13px', color: '#525252', textDecoration: 'none' }}>Venue</a>
              <a href="/" style={{ fontSize: '13px', color: '#3b82f6', textDecoration: 'none' }}>← ATEX 2026</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ paddingTop: '120px', paddingBottom: '80px', background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)', color: '#ffffff' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <p style={{ fontSize: '12px', fontWeight: '500', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '16px' }}>Vision 2027</p>
          <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', fontWeight: '700', marginBottom: '24px', lineHeight: '1.1' }}>
            CODE DXB <span style={{ color: '#3b82f6' }}>2027</span>
          </h1>
          <p style={{ fontSize: '20px', color: '#cbd5e1', marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px' }}>
            {eventInfo.tagline}
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '48px', marginBottom: '48px', flexWrap: 'wrap' }}>
            <div>
              <p style={{ fontSize: '32px', fontWeight: '700', color: '#ffffff' }}>{eventInfo.days}</p>
              <p style={{ fontSize: '13px', color: '#94a3b8' }}>Days</p>
            </div>
            <div>
              <p style={{ fontSize: '32px', fontWeight: '700', color: '#ffffff' }}>{eventInfo.tracks}</p>
              <p style={{ fontSize: '13px', color: '#94a3b8' }}>Tracks</p>
            </div>
            <div>
              <p style={{ fontSize: '32px', fontWeight: '700', color: '#ffffff' }}>{eventInfo.expectedAttendees}</p>
              <p style={{ fontSize: '13px', color: '#94a3b8' }}>Expected Attendees</p>
            </div>
            <div>
              <p style={{ fontSize: '32px', fontWeight: '700', color: '#ffffff' }}>100+</p>
              <p style={{ fontSize: '13px', color: '#94a3b8' }}>Speakers</p>
            </div>
          </div>

          <div style={{ display: 'inline-flex', gap: '24px', padding: '24px 32px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ textAlign: 'left' }}>
              <p style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '4px' }}>Dates</p>
              <p style={{ fontSize: '16px', fontWeight: '500', color: '#ffffff' }}>{eventInfo.dates}</p>
            </div>
            <div style={{ width: '1px', backgroundColor: 'rgba(255,255,255,0.2)' }} />
            <div style={{ textAlign: 'left' }}>
              <p style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '4px' }}>Venue</p>
              <p style={{ fontSize: '16px', fontWeight: '500', color: '#ffffff' }}>{eventInfo.venue}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section id="tracks" style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: '600', color: '#171717', marginBottom: '12px' }}>
              Four Days, Four Transformative Tracks
            </h2>
            <p style={{ fontSize: '16px', color: '#737373' }}>
              Deep-dive into AI's impact across healthcare, mobility, workforce, and engineering
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
            {tracks.map((track) => (
              <div key={track.day} style={{ backgroundColor: '#fafafa', borderRadius: '16px', padding: '32px', borderLeft: `4px solid ${track.color}` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <span style={{ fontSize: '32px' }}>{track.icon}</span>
                  <div>
                    <p style={{ fontSize: '12px', color: track.color, fontWeight: '500' }}>Day {track.day}</p>
                    <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#171717' }}>{track.name}</h3>
                  </div>
                </div>
                <p style={{ fontSize: '14px', color: '#525252', marginBottom: '16px', lineHeight: '1.6' }}>{track.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {track.topics.map((topic, i) => (
                    <span key={i} style={{ padding: '4px 10px', backgroundColor: track.bgColor, color: track.color, borderRadius: '12px', fontSize: '11px' }}>
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suggested Speakers */}
      <section id="speakers" style={{ padding: '80px 0', backgroundColor: '#fafafa' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: '600', color: '#171717', marginBottom: '12px' }}>
              Suggested Global Speakers
            </h2>
            <p style={{ fontSize: '16px', color: '#737373' }}>
              World-class experts and thought leaders for each track
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {suggestedSpeakers.map((trackSpeakers) => (
              <div key={trackSpeakers.track} style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '32px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: trackSpeakers.color, marginBottom: '24px' }}>
                  {trackSpeakers.track} Track Speakers
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
                  {trackSpeakers.speakers.map((speaker, i) => (
                    <div key={i} style={{ textAlign: 'center' }}>
                      <img 
                        src={speaker.image}
                        alt={speaker.name}
                        style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: `2px solid ${trackSpeakers.color}`, marginBottom: '12px' }}
                      />
                      <p style={{ fontSize: '14px', fontWeight: '600', color: '#171717', marginBottom: '2px' }}>{speaker.name}</p>
                      <p style={{ fontSize: '11px', color: '#737373', marginBottom: '4px' }}>{speaker.title}</p>
                      <p style={{ fontSize: '10px', color: '#a3a3a3', marginBottom: '8px' }}>{speaker.expertise}</p>
                      <span style={{ 
                        padding: '2px 8px', 
                        borderRadius: '8px', 
                        fontSize: '10px', 
                        fontWeight: '500',
                        backgroundColor: speaker.status === 'Target' ? '#dcfce7' : speaker.status === 'Dream' ? '#fef3c7' : '#f5f5f5',
                        color: speaker.status === 'Target' ? '#166534' : speaker.status === 'Dream' ? '#92400e' : '#525252'
                      }}>
                        {speaker.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activations */}
      <section id="activations" style={{ padding: '80px 0', backgroundColor: '#0f172a' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p style={{ fontSize: '12px', fontWeight: '500', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '12px' }}>Massive Activations</p>
            <h2 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: '600', color: '#ffffff', marginBottom: '12px' }}>
              Two Immersive Experiences
            </h2>
            <p style={{ fontSize: '16px', color: '#94a3b8' }}>
              80,000+ sq ft of hands-on AI innovation
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
            {activations.map((activation, i) => (
              <div key={i} style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '16px', padding: '40px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <span style={{ fontSize: '48px' }}>{activation.icon}</span>
                  <div>
                    <h3 style={{ fontSize: '24px', fontWeight: '600', color: '#ffffff' }}>{activation.name}</h3>
                    <p style={{ fontSize: '14px', color: '#3b82f6' }}>{activation.size}</p>
                  </div>
                </div>
                <p style={{ fontSize: '14px', color: '#cbd5e1', lineHeight: '1.7', marginBottom: '24px' }}>{activation.description}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {activation.features.map((feature, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#3b82f6' }} />
                      <span style={{ fontSize: '13px', color: '#94a3b8' }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section id="agenda" style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: '600', color: '#171717', marginBottom: '12px' }}>
              4-Day Conference Agenda
            </h2>
            <p style={{ fontSize: '16px', color: '#737373' }}>
              Draft schedule with speaker slots to be filled
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {agenda.map((day) => (
              <div key={day.day} style={{ backgroundColor: '#fafafa', borderRadius: '16px', padding: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                  <span style={{ fontSize: '32px' }}>{day.icon}</span>
                  <div>
                    <p style={{ fontSize: '14px', color: day.color, fontWeight: '500' }}>Day {day.day} · {day.date}</p>
                    <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#171717' }}>{day.track}</h3>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {day.sessions.map((session, i) => (
                    <div key={i} style={{ 
                      display: 'grid', 
                      gridTemplateColumns: '80px 100px 1fr 150px', 
                      gap: '16px', 
                      alignItems: 'center',
                      padding: '12px 16px',
                      backgroundColor: session.type === 'Break' || session.type === 'Lunch' || session.type === 'Registration' ? '#f5f5f5' : '#ffffff',
                      borderRadius: '8px'
                    }}>
                      <span style={{ fontSize: '13px', fontWeight: '500', color: '#171717' }}>{session.time}</span>
                      <span style={{ fontSize: '11px', color: day.color, fontWeight: '500', textTransform: 'uppercase' }}>{session.type}</span>
                      <span style={{ fontSize: '13px', color: '#525252' }}>{session.title}</span>
                      <span style={{ 
                        fontSize: '11px', 
                        fontWeight: '500',
                        padding: '4px 10px',
                        borderRadius: '12px',
                        textAlign: 'center',
                        backgroundColor: session.status === 'unfilled' ? '#fef3c7' : '#f5f5f5',
                        color: session.status === 'unfilled' ? '#92400e' : '#737373'
                      }}>
                        {session.speaker || '—'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue */}
      <section id="venue" style={{ padding: '80px 0', backgroundColor: '#fafafa' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: '600', color: '#171717', marginBottom: '12px' }}>
              Venue Recommendation
            </h2>
            <p style={{ fontSize: '16px', color: '#737373' }}>
              Dubai World Trade Centre offers the scale and prestige for a world-class AI conference
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', marginBottom: '32px' }}>
            {venueComparison.map((venue, i) => (
              <div key={i} style={{ 
                backgroundColor: '#ffffff', 
                borderRadius: '16px', 
                padding: '32px',
                border: venue.recommended ? '2px solid #3b82f6' : '1px solid #e5e5e5',
                position: 'relative'
              }}>
                {venue.recommended && (
                  <span style={{ position: 'absolute', top: '-12px', left: '24px', backgroundColor: '#3b82f6', color: '#ffffff', padding: '4px 12px', borderRadius: '12px', fontSize: '11px', fontWeight: '500' }}>
                    Recommended
                  </span>
                )}
                <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#171717', marginBottom: '16px' }}>{venue.venue}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '13px', color: '#737373' }}>Capacity</span>
                    <span style={{ fontSize: '13px', fontWeight: '500', color: '#171717' }}>{venue.capacity}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '13px', color: '#737373' }}>Halls</span>
                    <span style={{ fontSize: '13px', fontWeight: '500', color: '#171717' }}>{venue.halls}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '13px', color: '#737373' }}>Location</span>
                    <span style={{ fontSize: '13px', fontWeight: '500', color: '#171717' }}>{venue.location}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '13px', color: '#737373' }}>Metro Access</span>
                    <span style={{ fontSize: '13px', fontWeight: '500', color: '#171717' }}>{venue.metro}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ backgroundColor: '#171717', borderRadius: '16px', padding: '32px', textAlign: 'center' }}>
            <p style={{ fontSize: '12px', fontWeight: '500', color: '#737373', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '16px' }}>Why Dubai World Trade Centre</p>
            <p style={{ fontSize: '16px', color: '#ffffff', lineHeight: '1.7', maxWidth: '800px', margin: '0 auto' }}>
              Located in the heart of Dubai's business district with direct metro access, DWTC offers <span style={{ color: '#3b82f6' }}>1,000,000+ sq ft</span> of flexible event space across 8 halls. 
              Co-located mega events activate the city and amplify economic impact — making it the premier choice for the region's largest AI development conference.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '48px 0', backgroundColor: '#ffffff', borderTop: '1px solid #f5f5f5' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <p style={{ fontSize: '15px', fontWeight: '600', color: '#171717', marginBottom: '8px' }}>CODE DXB 2027</p>
          <p style={{ fontSize: '13px', color: '#737373', marginBottom: '16px' }}>Vision Document · Internal Planning</p>
          <p style={{ fontSize: '12px', color: '#a3a3a3' }}>© 2026 CODE DXB · Contact: Wilson via Mena Speakers Agency</p>
        </div>
      </footer>
    </div>
  );
};

export default FutureEvent;
