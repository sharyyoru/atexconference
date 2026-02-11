const PostShowResources = () => {
  const resources = [
    {
      speaker: "Jos Dirkx",
      color: "#3b82f6",
      bgColor: "#eff6ff",
      materials: [
        {
          type: "Workbook",
          title: "Human+ Era Implementation Guide",
          description: "Step-by-step workbook for integrating AI into educational curricula. Includes assessment templates, implementation checklists, and progress tracking tools.",
          pages: "48 pages",
          format: "Digital PDF + Print"
        },
        {
          type: "Playbook",
          title: "AI Ethics Decision Framework",
          description: "Practical playbook for making ethical AI decisions in educational settings. Includes case studies, decision trees, and policy templates.",
          pages: "32 pages",
          format: "Digital PDF"
        },
        {
          type: "Toolkit",
          title: "Future Skills Assessment Kit",
          description: "Complete toolkit for evaluating and developing future-ready skills in students and educators. Includes rubrics and self-assessment tools.",
          pages: "24 pages",
          format: "Digital PDF + Spreadsheets"
        }
      ]
    },
    {
      speaker: "James Taylor",
      color: "#10b981",
      bgColor: "#ecfdf5",
      materials: [
        {
          type: "Playbook",
          title: "SuperCollaboration Playbook",
          description: "Comprehensive guide to building high-performance human-AI teams. Includes team exercises, collaboration frameworks, and success metrics.",
          pages: "56 pages",
          format: "Digital PDF + Print"
        },
        {
          type: "Workbook",
          title: "Creative Leadership Workbook",
          description: "Interactive workbook for developing creative leadership capabilities. Includes self-assessments, action plans, and 90-day implementation guide.",
          pages: "40 pages",
          format: "Digital PDF"
        },
        {
          type: "Toolkit",
          title: "HR Innovation Toolkit",
          description: "Ready-to-use templates for HR transformation initiatives. Includes change management templates, communication plans, and ROI calculators.",
          pages: "28 pages",
          format: "Digital PDF + Templates"
        }
      ]
    }
  ];

  const bonuses = [
    { title: "Video Recordings", desc: "Full keynote recordings for internal sharing", icon: "🎬" },
    { title: "Q&A Transcript", desc: "Complete transcript of audience Q&A sessions", icon: "📝" },
    { title: "Executive Summary", desc: "One-page summary for leadership distribution", icon: "📊" },
    { title: "Follow-up Webinar", desc: "30-min virtual follow-up session (optional)", icon: "💻" }
  ];

  return (
    <section id="resources" style={{ backgroundColor: '#fafafa', padding: '80px 0' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: '600', color: '#171717', marginBottom: '12px' }}>
            Post-Show Resources
          </h2>
          <p style={{ fontSize: '16px', color: '#737373', maxWidth: '600px', margin: '0 auto' }}>
            Actionable workbooks and playbooks your audience takes home — extending the value far beyond the event
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginBottom: '48px' }}>
          {resources.map((speaker) => (
            <div key={speaker.speaker} style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
                <span style={{ padding: '6px 14px', backgroundColor: speaker.color, color: '#ffffff', borderRadius: '16px', fontSize: '14px', fontWeight: '500' }}>
                  {speaker.speaker}
                </span>
                <span style={{ fontSize: '14px', color: '#737373' }}>Audience Materials</span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                {speaker.materials.map((material, i) => (
                  <div key={i} style={{ backgroundColor: '#fafafa', borderRadius: '12px', padding: '24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                      <span style={{ padding: '4px 10px', backgroundColor: speaker.bgColor, color: speaker.color, borderRadius: '8px', fontSize: '11px', fontWeight: '600', textTransform: 'uppercase' }}>
                        {material.type}
                      </span>
                      <span style={{ fontSize: '11px', color: '#a3a3a3' }}>{material.pages}</span>
                    </div>
                    <h4 style={{ fontSize: '15px', fontWeight: '600', color: '#171717', marginBottom: '8px', lineHeight: '1.3' }}>
                      {material.title}
                    </h4>
                    <p style={{ fontSize: '13px', color: '#737373', lineHeight: '1.5', marginBottom: '12px' }}>
                      {material.description}
                    </p>
                    <p style={{ fontSize: '12px', color: '#a3a3a3' }}>{material.format}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Bonuses */}
        <div style={{ backgroundColor: '#171717', borderRadius: '16px', padding: '40px' }}>
          <p style={{ fontSize: '12px', fontWeight: '500', color: '#737373', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '24px', textAlign: 'center' }}>
            Additional Inclusions
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {bonuses.map((bonus, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '24px', marginBottom: '12px' }}>{bonus.icon}</div>
                <p style={{ fontSize: '14px', fontWeight: '500', color: '#ffffff', marginBottom: '4px' }}>{bonus.title}</p>
                <p style={{ fontSize: '12px', color: '#737373' }}>{bonus.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostShowResources;
