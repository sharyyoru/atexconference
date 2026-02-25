const SpeakerRequirements = () => {
  const categories = [
    {
      title: "Pre-Event Marketing Value",
      icon: "📣",
      color: "#8b5cf6",
      items: [
        { task: "Official co-announcement as Founding Head Speaker", platform: "All platforms", speaker: "Main Keynotes" },
        { task: "Launch video announcing involvement", platform: "Website, LinkedIn, Ads", speaker: "Main Keynotes" },
        { task: "LinkedIn thought leadership posts (2-3)", platform: "LinkedIn", speaker: "All Speakers" },
        { task: "Teaser clips ('Why I'm speaking at Code DXB')", platform: "Social Media", speaker: "Main Keynotes" },
        { task: "Quote and endorsement for press releases", platform: "Press, Website, Sponsor Deck", speaker: "Main Keynotes" },
        { task: "Pre-event webinar or fireside session", platform: "Virtual (30-45 days before)", speaker: "Main Keynotes" },
        { task: "Feature in delegate and sponsor email campaigns", platform: "Email Marketing", speaker: "All Speakers" },
        { task: "Use of name, photo, quotes across landing pages", platform: "Website, Paid Ads", speaker: "All Speakers" }
      ]
    },
    {
      title: "Programme & Conference Value",
      icon: "🎯",
      color: "#3b82f6",
      items: [
        { task: "Shape and refine conference agenda with organisers", platform: "Advisory", speaker: "Main Keynotes" },
        { task: "Advise on key topics (UAE, AI, workforce transformation)", platform: "Advisory", speaker: "Main Keynotes" },
        { task: "Help screen, validate, and nominate supporting speakers", platform: "Advisory", speaker: "Main Keynotes" },
        { task: "Deliver flagship keynote aligned with event theme", platform: "Main Stage", speaker: "Main Keynotes" },
        { task: "Moderate a high-level panel session", platform: "Main Stage", speaker: "Main Keynotes" },
        { task: "Participate in VIP roundtables with sponsors", platform: "VIP Sessions", speaker: "Main Keynotes" },
        { task: "Contribute to overall programme credibility", platform: "Positioning", speaker: "All Speakers" }
      ]
    },
    {
      title: "Content & Media Value",
      icon: "🎬",
      color: "#10b981",
      items: [
        { task: "Filmed in-depth interview for long-form content", platform: "YouTube / Documentary", speaker: "Main Keynotes" },
        { task: "Short-form video clips filmed on-site (5-10)", platform: "Reels, Social", speaker: "All Speakers" },
        { task: "Behind-the-scenes content for brand storytelling", platform: "Social Media", speaker: "All Speakers" },
        { task: "Post-event recap video featuring key insights", platform: "All Platforms", speaker: "Main Keynotes" },
        { task: "Rights for organisers to reuse content/likeness (6-12 months)", platform: "Marketing", speaker: "All Speakers" }
      ]
    },
    {
      title: "Social Media Amplification",
      icon: "📱",
      color: "#f59e0b",
      items: [
        { task: "Minimum 3 LinkedIn posts pre-event", platform: "LinkedIn", speaker: "All Speakers" },
        { task: "1 post during event week", platform: "LinkedIn", speaker: "All Speakers" },
        { task: "1 post-event reflection post tagging Code DXB", platform: "LinkedIn", speaker: "All Speakers" },
        { task: "Cross-tagging official event pages", platform: "All Social", speaker: "All Speakers" },
        { task: "Optional story mentions during event days", platform: "Instagram/LinkedIn", speaker: "All Speakers" }
      ]
    },
    {
      title: "Strategic Credibility & Network Value",
      icon: "🤝",
      color: "#ec4899",
      items: [
        { task: "Introductions to 3-5 potential speakers/sponsors/partners", platform: "Network", speaker: "Main Keynotes" },
        { task: "Advisory input on attracting government/enterprise attendees", platform: "Advisory", speaker: "Main Keynotes" },
        { task: "Support positioning event towards ministries/corporates", platform: "Outreach", speaker: "Main Keynotes" },
        { task: "Listed as Advisory Head Speaker on official materials", platform: "All Materials", speaker: "Main Keynotes" }
      ]
    },
    {
      title: "Sponsor & Revenue Support",
      icon: "💼",
      color: "#06b6d4",
      items: [
        { task: "Private session or roundtable with Platinum sponsors", platform: "VIP Sessions", speaker: "Main Keynotes" },
        { task: "Closed-door executive discussion (AI in HR for C-level)", platform: "Executive Session", speaker: "Main Keynotes" },
        { task: "Meet and greet with VIP delegates", platform: "Networking", speaker: "All Speakers" },
        { task: "Optional corporate workshop as premium add-on", platform: "Workshop", speaker: "Main Keynotes" }
      ]
    },
    {
      title: "Post-Event Long-Term Value",
      icon: "🚀",
      color: "#84cc16",
      items: [
        { task: "Contribution to official post-event report", platform: "Report", speaker: "Main Keynotes" },
        { task: "Continued ambassador role for 6-12 months", platform: "Marketing", speaker: "Main Keynotes" },
        { task: "Participation in future Code DXB webinars/content", platform: "Virtual", speaker: "Main Keynotes" },
        { task: "Ongoing use in marketing as 'Founding Head Speaker'", platform: "All Materials", speaker: "Main Keynotes" }
      ]
    }
  ];

  const speakers = [
    { name: "Dr. Petar Stojanov", role: "Education Keynote", color: "#3b82f6", type: "Main Keynotes" },
    { name: "James Taylor", role: "HR Keynote", color: "#10b981", type: "Main Keynotes" },
    { name: "Tariq Qureishy", role: "Education Support", color: "#8b5cf6", type: "Supporting" },
    { name: "Natalia Sycheva", role: "HR Support", color: "#f59e0b", type: "Supporting" }
  ];

  return (
    <section id="requirements" style={{ backgroundColor: '#ffffff', padding: '80px 0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: '600', color: '#171717', marginBottom: '12px' }}>
            Speaker Requirements & Deliverables
          </h2>
          <p style={{ fontSize: '16px', color: '#737373', maxWidth: '700px', margin: '0 auto' }}>
            Comprehensive deliverables matrix to maximize credibility, content output, audience trust, and sponsor confidence
          </p>
        </div>

        {/* Speaker Legend */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '48px', flexWrap: 'wrap' }}>
          {speakers.map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', backgroundColor: '#fafafa', borderRadius: '24px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: s.color }} />
              <span style={{ fontSize: '13px', fontWeight: '500', color: '#171717' }}>{s.name}</span>
              <span style={{ fontSize: '11px', color: '#737373' }}>({s.role})</span>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {categories.map((cat, i) => (
            <div key={i} style={{ backgroundColor: '#fafafa', borderRadius: '16px', padding: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <span style={{ fontSize: '24px' }}>{cat.icon}</span>
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#171717' }}>{cat.title}</h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {cat.items.map((item, j) => (
                  <div key={j} style={{ 
                    display: 'grid', 
                    gridTemplateColumns: '1fr 150px 120px', 
                    gap: '16px', 
                    alignItems: 'center',
                    padding: '12px 16px',
                    backgroundColor: '#ffffff',
                    borderRadius: '8px'
                  }}>
                    <span style={{ fontSize: '14px', color: '#525252' }}>{item.task}</span>
                    <span style={{ fontSize: '12px', color: '#737373' }}>{item.platform}</span>
                    <span style={{ 
                      fontSize: '11px', 
                      fontWeight: '500',
                      padding: '4px 10px',
                      borderRadius: '12px',
                      textAlign: 'center',
                      backgroundColor: item.speaker === 'Main Keynotes' ? '#eff6ff' : '#f5f5f5',
                      color: item.speaker === 'Main Keynotes' ? '#3b82f6' : '#737373'
                    }}>
                      {item.speaker}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core Objective */}
        <div style={{ marginTop: '48px', padding: '32px', backgroundColor: '#171717', borderRadius: '16px', textAlign: 'center' }}>
          <p style={{ fontSize: '12px', fontWeight: '500', color: '#737373', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '16px' }}>Core Objective</p>
          <p style={{ fontSize: '18px', color: '#ffffff', lineHeight: '1.6', maxWidth: '700px', margin: '0 auto' }}>
            Maximise <span style={{ color: '#3b82f6' }}>credibility</span>, <span style={{ color: '#10b981' }}>content output</span>, <span style={{ color: '#f59e0b' }}>audience trust</span>, and <span style={{ color: '#ec4899' }}>sponsor confidence</span> — not just stage presence.
          </p>
        </div>

        {/* Contract Note */}
        <div style={{ marginTop: '24px', padding: '16px', backgroundColor: '#fafafa', borderRadius: '12px', textAlign: 'center' }}>
          <p style={{ fontSize: '13px', color: '#737373' }}>
            <span style={{ fontWeight: '500' }}>Note:</span> Social media amplification requirements to be contractually defined with each speaker.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpeakerRequirements;
