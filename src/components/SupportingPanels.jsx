const SupportingPanels = () => {
  const panels = [
    {
      speaker: "Jos Dirkx",
      keynote: "The Human+ Era",
      color: "#3b82f6",
      sessions: [
        { type: "Panel", title: "AI in the Classroom: Reality vs. Hype", duration: "45 min", panelists: ["Ministry of Education Rep", "EdTech Founder", "School Principal"] },
        { type: "Discussion", title: "Future Skills for Jobs That Don't Exist", duration: "45 min", panelists: ["University Dean", "L&D Director", "AI Ethics Researcher"] },
        { type: "Workshop", title: "Designing Human+ Learning Experiences", duration: "90 min", panelists: ["Jos Dirkx (Lead)", "Instructional Designer"] }
      ]
    },
    {
      speaker: "James Taylor",
      keynote: "SuperCollaboration",
      color: "#10b981",
      sessions: [
        { type: "Panel", title: "The CHRO's Dilemma: Automation vs. Human Value", duration: "45 min", panelists: ["CHRO (UAE Conglomerate)", "HR Tech Vendor", "Employee Experience Lead"] },
        { type: "Case Studies", title: "Creativity at Scale: Innovation in AI Era", duration: "45 min", panelists: ["Innovation Director (ADNOC)", "Creative Director", "Product Manager"] },
        { type: "Workshop", title: "Building Your SuperCollaboration Playbook", duration: "90 min", panelists: ["James Taylor (Lead)", "HR Transformation Consultant"] }
      ]
    }
  ];

  const suggestions = [
    { title: "Opening Keynote Support", desc: "Pair with a local government representative for regional context" },
    { title: "Fireside Chat", desc: "Both speakers excel in intimate Q&A formats with executives" },
    { title: "Joint Session", desc: "Combined session on 'Education meets HR: The Full Employee Lifecycle'" }
  ];

  return (
    <section id="panels" style={{ backgroundColor: '#ffffff', padding: '80px 0' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: '600', color: '#171717', marginBottom: '12px' }}>
            Session Recommendations
          </h2>
          <p style={{ fontSize: '16px', color: '#737373' }}>
            Supporting panels and workshops to maximize keynote impact
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {panels.map((panel) => (
            <div key={panel.speaker}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <span style={{ padding: '6px 14px', backgroundColor: panel.color, color: '#ffffff', borderRadius: '16px', fontSize: '13px', fontWeight: '500' }}>
                  {panel.speaker}
                </span>
                <span style={{ fontSize: '14px', color: '#737373' }}>→ {panel.keynote}</span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                {panel.sessions.map((session, i) => (
                  <div key={i} style={{ backgroundColor: '#fafafa', borderRadius: '12px', padding: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                      <span style={{ fontSize: '12px', fontWeight: '500', color: panel.color }}>{session.type}</span>
                      <span style={{ fontSize: '12px', color: '#a3a3a3' }}>{session.duration}</span>
                    </div>
                    <h4 style={{ fontSize: '15px', fontWeight: '500', color: '#171717', marginBottom: '12px', lineHeight: '1.4' }}>
                      {session.title}
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {session.panelists.map((p, j) => (
                        <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: panel.color }} />
                          <span style={{ fontSize: '13px', color: '#525252' }}>{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Suggestions */}
        <div style={{ marginTop: '64px', paddingTop: '48px', borderTop: '1px solid #f5f5f5' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#171717', marginBottom: '24px', textAlign: 'center' }}>Additional Format Options</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {suggestions.map((s, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '16px' }}>
                <h4 style={{ fontSize: '14px', fontWeight: '500', color: '#171717', marginBottom: '8px' }}>{s.title}</h4>
                <p style={{ fontSize: '13px', color: '#737373' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportingPanels;
