const SubSpeakers = () => {
  const speakers = [
    {
      name: "Tariq Qureishy",
      role: "Education Track Support",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpPBd-XWlnynV_cfvuuTIpIrVivCpRRLfmqg&s",
      color: "#8b5cf6",
      bgColor: "#f5f3ff",
      track: "EduTech",
      fee: "4,224 USD + VAT",
      location: "Dubai",
      bio: "Tariq Qureishy is a renowned futurist, keynote speaker, and founder of Xponential Group. With over 25 years of leadership experience at Dow Jones Markets, The Times & Sunday Times, and Bloomberg Media, he brings deep understanding of innovation and technology's role in shaping the future.",
      expertise: [
        "AI for Good",
        "Technology vs Humanity",
        "Moonshot Thinking",
        "Exponential Growth"
      ],
      highlights: [
        "400+ keynotes delivered globally",
        "Host of 'Voices of the Future' podcast",
        "TEDx and global conference speaker",
        "Bridges technology and human values"
      ]
    },
    {
      name: "Natalia Sycheva",
      role: "HR Track Support",
      image: "https://thematrixgreenpill.com/wp-content/uploads/2019/09/Natalia-Sycheva-TMGP-1280x960-1.jpg",
      color: "#f59e0b",
      bgColor: "#fffbeb",
      track: "HRTech",
      fee: "4,224 USD + VAT",
      location: "Dubai",
      bio: "Natalia Sycheva is the founder and Managing Director of Integra Seven, a consultancy helping organizations evolve through innovation, new business models, and human capacity building. With 15+ years of experience across governments, private sectors, and venture capitalists, she specializes in fostering entrepreneurship ecosystems.",
      expertise: [
        "AI Adoption Strategy",
        "Digital Transformation",
        "Future of Work",
        "Human-Centered Leadership"
      ],
      highlights: [
        "Dubai Chamber of Commerce advisor",
        "GITEX x Expand North Star speaker",
        "Travel & tourism AI innovation expert",
        "Sustainable growth strategist"
      ]
    }
  ];

  return (
    <section id="subspeakers" style={{ backgroundColor: '#fafafa', padding: '80px 0' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: '600', color: '#171717', marginBottom: '12px' }}>
            Supporting Speakers
          </h2>
          <p style={{ fontSize: '16px', color: '#737373' }}>
            Expert voices complementing our keynote speakers across both tracks
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {speakers.map((speaker) => (
            <div key={speaker.name} style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '40px', display: 'flex', gap: '40px' }}>
              {/* Image and Basic Info */}
              <div style={{ flexShrink: 0, textAlign: 'center' }}>
                <img 
                  src={speaker.image}
                  alt={speaker.name}
                  style={{ width: '140px', height: '140px', borderRadius: '50%', objectFit: 'cover', border: `3px solid ${speaker.color}`, marginBottom: '16px' }}
                />
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#171717', marginBottom: '4px' }}>{speaker.name}</h3>
                <p style={{ fontSize: '13px', color: '#737373', marginBottom: '12px' }}>{speaker.role}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <span style={{ padding: '4px 12px', backgroundColor: speaker.bgColor, color: speaker.color, borderRadius: '16px', fontSize: '12px', fontWeight: '500' }}>
                    {speaker.track} Track
                  </span>
                  <span style={{ fontSize: '12px', color: '#737373' }}>{speaker.location}</span>
                  <span style={{ fontSize: '13px', fontWeight: '500', color: '#171717' }}>{speaker.fee}</span>
                </div>
              </div>

              {/* Details */}
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: '14px', color: '#525252', lineHeight: '1.7', marginBottom: '24px' }}>
                  {speaker.bio}
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
                  <div>
                    <p style={{ fontSize: '12px', fontWeight: '500', color: '#a3a3a3', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '12px' }}>Expertise</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {speaker.expertise.map((exp, i) => (
                        <span key={i} style={{ padding: '4px 12px', backgroundColor: speaker.bgColor, color: speaker.color, borderRadius: '16px', fontSize: '12px' }}>
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p style={{ fontSize: '12px', fontWeight: '500', color: '#a3a3a3', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '12px' }}>Highlights</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {speaker.highlights.map((h, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: speaker.color }} />
                          <span style={{ fontSize: '13px', color: '#525252' }}>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubSpeakers;
