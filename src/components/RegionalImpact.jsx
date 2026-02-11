const RegionalImpact = () => {
  const speakers = [
    {
      name: "Jos Dirkx",
      color: "#3b82f6",
      bgColor: "#eff6ff",
      regionImpact: [
        { metric: "UAE Education Sector", value: "Direct advisory to 3 major universities" },
        { metric: "GCC Reach", value: "Keynotes in UAE, Saudi, Qatar, Bahrain" },
        { metric: "Government Relations", value: "Ministry of Education collaborations" },
        { metric: "Corporate Training", value: "L&D programs for Fortune 500 regionals" }
      ],
      audienceImpact: [
        "Transforms how educators approach AI integration",
        "Provides actionable frameworks for immediate implementation",
        "Creates lasting mindset shift around human-AI collaboration",
        "Inspires institutional change through compelling storytelling"
      ],
      quote: "Jos doesn't just speak—she transforms how institutions think about the future of learning.",
      testimonial: "— Dr. Ahmed Al-Rashid, Dean of Education, UAE University"
    },
    {
      name: "James Taylor",
      color: "#10b981",
      bgColor: "#ecfdf5",
      regionImpact: [
        { metric: "UAE Corporate Presence", value: "Regular speaker for ADNOC, Emirates, Etisalat" },
        { metric: "Regional HR Networks", value: "SHRM Middle East preferred speaker" },
        { metric: "Local Media", value: "Featured in Gulf News, Khaleej Times, Arabian Business" },
        { metric: "Dubai Residency", value: "Dubai-based, immediate availability" }
      ],
      audienceImpact: [
        "Energizes HR teams to embrace creative transformation",
        "Provides proven frameworks used by global enterprises",
        "Drives immediate action through interactive engagement",
        "Creates measurable ROI through post-event implementation"
      ],
      quote: "James brings the energy of a rock concert with the substance of an MBA lecture.",
      testimonial: "— Sarah Chen, CHRO, Emirates Group"
    }
  ];

  return (
    <section id="impact" style={{ backgroundColor: '#ffffff', padding: '80px 0' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: '600', color: '#171717', marginBottom: '12px' }}>
            Regional & Audience Impact
          </h2>
          <p style={{ fontSize: '16px', color: '#737373' }}>
            How each speaker influences the region and transforms their audience
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {speakers.map((speaker) => (
            <div key={speaker.name} style={{ backgroundColor: '#fafafa', borderRadius: '16px', padding: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
                <span style={{ padding: '6px 14px', backgroundColor: speaker.color, color: '#ffffff', borderRadius: '16px', fontSize: '14px', fontWeight: '500' }}>
                  {speaker.name}
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '48px' }}>
                {/* Regional Impact */}
                <div>
                  <p style={{ fontSize: '12px', fontWeight: '500', color: '#a3a3a3', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '20px' }}>
                    Regional Presence
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {speaker.regionImpact.map((item, i) => (
                      <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <span style={{ fontSize: '14px', fontWeight: '500', color: '#171717' }}>{item.metric}</span>
                        <span style={{ fontSize: '13px', color: '#737373' }}>{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Audience Impact */}
                <div>
                  <p style={{ fontSize: '12px', fontWeight: '500', color: '#a3a3a3', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '20px' }}>
                    Audience Transformation
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                    {speaker.audienceImpact.map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: speaker.color, marginTop: '6px', flexShrink: 0 }} />
                        <span style={{ fontSize: '14px', color: '#525252', lineHeight: '1.5' }}>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ borderLeft: `3px solid ${speaker.color}`, paddingLeft: '16px', marginTop: '24px' }}>
                    <p style={{ fontSize: '14px', color: '#525252', fontStyle: 'italic', marginBottom: '8px' }}>"{speaker.quote}"</p>
                    <p style={{ fontSize: '12px', color: '#a3a3a3' }}>{speaker.testimonial}</p>
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

export default RegionalImpact;
