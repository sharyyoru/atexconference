const SpecializedTopics = () => {
  const speakers = [
    {
      name: "Jos Dirkx",
      specialty: "Education & AI Integration",
      color: "#3b82f6",
      bgColor: "#eff6ff",
      description: "Jos specializes in transforming education through AI integration. Her Human+ Era framework prepares educators, students, and institutions for an AI-augmented future while maintaining human creativity at the core.",
      topics: [
        { title: "AI Ethics in Education", desc: "Responsible AI integration in learning environments" },
        { title: "Future Skills Development", desc: "Preparing students for careers that don't exist yet" },
        { title: "Human+ Era Philosophy", desc: "Human potential and AI capabilities working together" },
        { title: "Multimedia Learning", desc: "Integrated music, visuals, and AI for memorable experiences" }
      ],
      audience: ["Ministry of Education", "University Deans", "EdTech Leaders", "Training Directors"],
      quote: "Education is not about replacing teachers with AI—it's about empowering educators to reach every student."
    },
    {
      name: "James Taylor",
      specialty: "HR Innovation & Creativity",
      color: "#10b981",
      bgColor: "#ecfdf5",
      description: "James leads the conversation on SuperCollaboration—human-AI teamwork in the workplace. His expertise helps HR departments and innovation teams unlock creative potential through structured collaboration frameworks.",
      topics: [
        { title: "SuperCollaboration Framework", desc: "High-performance teams with human creativity and AI" },
        { title: "Creativity in the AI Age", desc: "Why human creativity becomes more valuable" },
        { title: "Employee Experience 2.0", desc: "Attracting talent in the automation era" },
        { title: "Regional Workforce Strategy", desc: "UAE-specific talent development insights" }
      ],
      audience: ["CHROs", "HR Directors", "Talent Leaders", "Innovation Officers"],
      quote: "The future isn't human vs. machine—it's human WITH machine."
    }
  ];

  return (
    <section id="topics" style={{ backgroundColor: '#fafafa', padding: '80px 0' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: '600', color: '#171717', marginBottom: '12px' }}>
            Specialized Expertise
          </h2>
          <p style={{ fontSize: '16px', color: '#737373' }}>
            Deep dive into each speaker's focus areas and ideal audience
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {speakers.map((speaker) => (
            <div key={speaker.name} style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '40px' }}>
              <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
                {/* Left */}
                <div style={{ flex: '1', minWidth: '280px' }}>
                  <span style={{ display: 'inline-block', padding: '4px 12px', backgroundColor: speaker.bgColor, color: speaker.color, borderRadius: '16px', fontSize: '12px', fontWeight: '500', marginBottom: '16px' }}>
                    {speaker.specialty}
                  </span>
                  <h3 style={{ fontSize: '24px', fontWeight: '600', color: '#171717', marginBottom: '16px' }}>{speaker.name}</h3>
                  <p style={{ fontSize: '15px', color: '#525252', lineHeight: '1.6', marginBottom: '24px' }}>
                    {speaker.description}
                  </p>
                  <div style={{ borderLeft: `2px solid ${speaker.color}`, paddingLeft: '16px' }}>
                    <p style={{ fontSize: '14px', color: '#525252', fontStyle: 'italic' }}>"{speaker.quote}"</p>
                  </div>
                </div>

                {/* Right */}
                <div style={{ flex: '1.5', minWidth: '320px' }}>
                  <p style={{ fontSize: '12px', fontWeight: '500', color: '#a3a3a3', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '16px' }}>Key Topics</p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginBottom: '24px' }}>
                    {speaker.topics.map((topic, i) => (
                      <div key={i} style={{ padding: '16px', backgroundColor: '#fafafa', borderRadius: '12px' }}>
                        <p style={{ fontSize: '14px', fontWeight: '500', color: '#171717', marginBottom: '4px' }}>{topic.title}</p>
                        <p style={{ fontSize: '13px', color: '#737373' }}>{topic.desc}</p>
                      </div>
                    ))}
                  </div>

                  <p style={{ fontSize: '12px', fontWeight: '500', color: '#a3a3a3', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '12px' }}>Ideal Audience</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {speaker.audience.map((item, i) => (
                      <span key={i} style={{ padding: '6px 12px', backgroundColor: speaker.bgColor, color: speaker.color, borderRadius: '16px', fontSize: '13px' }}>
                        {item}
                      </span>
                    ))}
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

export default SpecializedTopics;
