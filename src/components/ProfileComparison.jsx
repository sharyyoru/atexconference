const ProfileComparison = () => {
  const metrics = [
    { label: "Global Reach", jos: 95, james: 85, josSource: "85K+ social followers, 40+ country keynotes", jamesSource: "750+ leader interviews, 50+ country presence" },
    { label: "UAE Influence", jos: 88, james: 98, josSource: "3 UAE university partnerships", jamesSource: "Dubai-based, ADNOC/Emirates/Etisalat speaker" },
    { label: "C-Suite Access", jos: 92, james: 88, josSource: "Ministry-level education advisory", jamesSource: "CHRO network, SHRM preferred speaker" },
    { label: "Post-Show Value", jos: 90, james: 95, josSource: "Workbooks + implementation guides", jamesSource: "Playbooks + 90-day action plans" },
    { label: "Engagement", jos: 95, james: 90, josSource: "Multimedia + music integration", jamesSource: "Interactive workshops + exercises" },
  ];

  const containerStyle = { maxWidth: '1000px', margin: '0 auto', padding: '80px 24px' };
  const headingStyle = { textAlign: 'center', marginBottom: '64px' };
  const h2Style = { fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: '600', color: '#171717', marginBottom: '12px' };
  const subtitleStyle = { fontSize: '16px', color: '#737373' };

  return (
    <section id="comparison" style={{ backgroundColor: '#ffffff' }}>
      <div style={containerStyle}>
        <div style={headingStyle}>
          <h2 style={h2Style}>Compare Speakers</h2>
          <p style={subtitleStyle}>Side-by-side analysis of qualifications, reach, and value</p>
        </div>

        {/* Two Column Layout */}
        <div style={{ display: 'flex', gap: '48px', marginBottom: '48px' }}>
          {/* Jos */}
          <div style={{ flex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <img 
                src="https://cdn.mena-speakers.com/speakers/Jos_Dirkx_avatar.jpg"
                alt="Jos Dirkx"
                style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #3b82f6', margin: '0 auto 16px' }}
              />
              <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#171717', marginBottom: '4px' }}>Jos Dirkx</h3>
              <p style={{ fontSize: '14px', color: '#737373' }}>AI & Education</p>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {metrics.map((m, i) => (
                <div key={i}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span style={{ fontSize: '13px', color: '#737373' }}>{m.label}</span>
                    <span style={{ fontSize: '13px', fontWeight: '600', color: '#171717' }}>{m.jos}%</span>
                  </div>
                  <div style={{ height: '8px', backgroundColor: '#f5f5f5', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: `${m.jos}%`, height: '100%', backgroundColor: '#3b82f6', borderRadius: '4px' }} />
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid #f5f5f5' }}>
              <p style={{ fontSize: '13px', color: '#737373', marginBottom: '8px' }}>Specialty</p>
              <p style={{ fontSize: '15px', fontWeight: '500', color: '#171717', marginBottom: '12px' }}>Education & AI Integration</p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{ padding: '4px 12px', backgroundColor: '#eff6ff', color: '#2563eb', borderRadius: '16px', fontSize: '12px' }}>AI Ethics</span>
                <span style={{ padding: '4px 12px', backgroundColor: '#eff6ff', color: '#2563eb', borderRadius: '16px', fontSize: '12px' }}>EdTech</span>
                <span style={{ padding: '4px 12px', backgroundColor: '#eff6ff', color: '#2563eb', borderRadius: '16px', fontSize: '12px' }}>Multimedia</span>
              </div>
            </div>
          </div>

          {/* James */}
          <div style={{ flex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <img 
                src="https://cdn.speakerscorner.co.uk/files/media/public/image/james-taylor-500x500.png"
                alt="James Taylor"
                style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #10b981', margin: '0 auto 16px' }}
              />
              <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#171717', marginBottom: '4px' }}>James Taylor</h3>
              <p style={{ fontSize: '14px', color: '#737373' }}>HR & Creativity</p>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {metrics.map((m, i) => (
                <div key={i}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span style={{ fontSize: '13px', color: '#737373' }}>{m.label}</span>
                    <span style={{ fontSize: '13px', fontWeight: '600', color: '#171717' }}>{m.james}%</span>
                  </div>
                  <div style={{ height: '8px', backgroundColor: '#f5f5f5', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: `${m.james}%`, height: '100%', backgroundColor: '#10b981', borderRadius: '4px' }} />
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid #f5f5f5' }}>
              <p style={{ fontSize: '13px', color: '#737373', marginBottom: '8px' }}>Specialty</p>
              <p style={{ fontSize: '15px', fontWeight: '500', color: '#171717', marginBottom: '12px' }}>HR Innovation & Creativity</p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{ padding: '4px 12px', backgroundColor: '#ecfdf5', color: '#059669', borderRadius: '16px', fontSize: '12px' }}>HR Strategy</span>
                <span style={{ padding: '4px 12px', backgroundColor: '#ecfdf5', color: '#059669', borderRadius: '16px', fontSize: '12px' }}>Creativity</span>
                <span style={{ padding: '4px 12px', backgroundColor: '#ecfdf5', color: '#059669', borderRadius: '16px', fontSize: '12px' }}>Local PR</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div style={{ display: 'flex', gap: '32px', padding: '32px', backgroundColor: '#fafafa', borderRadius: '16px', marginBottom: '32px' }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: '13px', color: '#737373', marginBottom: '4px' }}>Contact for both speakers</p>
            <p style={{ fontSize: '18px', fontWeight: '500', color: '#171717' }}>Wilson</p>
            <p style={{ fontSize: '13px', color: '#737373', marginTop: '8px' }}>Via Mena Speakers Agency</p>
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: '13px', color: '#737373', marginBottom: '4px' }}>Location</p>
            <p style={{ fontSize: '18px', fontWeight: '500', color: '#171717' }}>Both Dubai-based</p>
            <p style={{ fontSize: '13px', color: '#737373', marginTop: '8px' }}>No international travel costs required.</p>
          </div>
        </div>

        {/* Methodology */}
        <div style={{ padding: '32px', backgroundColor: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '16px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#171717', marginBottom: '16px' }}>How These Metrics Were Calculated</h3>
          <p style={{ fontSize: '14px', color: '#525252', lineHeight: '1.7', marginBottom: '16px' }}>
            The comparison metrics above are derived from publicly available data, speaker agency profiles, and industry benchmarks. Each score represents a weighted assessment across multiple factors:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '16px' }}>
            <div style={{ padding: '16px', backgroundColor: '#fafafa', borderRadius: '12px' }}>
              <p style={{ fontSize: '13px', fontWeight: '500', color: '#171717', marginBottom: '4px' }}>Global Reach</p>
              <p style={{ fontSize: '12px', color: '#737373' }}>Based on social media following, countries keynoted, and international media mentions</p>
            </div>
            <div style={{ padding: '16px', backgroundColor: '#fafafa', borderRadius: '12px' }}>
              <p style={{ fontSize: '13px', fontWeight: '500', color: '#171717', marginBottom: '4px' }}>UAE Influence</p>
              <p style={{ fontSize: '12px', color: '#737373' }}>Based on local partnerships, Dubai residency, regional corporate clients</p>
            </div>
            <div style={{ padding: '16px', backgroundColor: '#fafafa', borderRadius: '12px' }}>
              <p style={{ fontSize: '13px', fontWeight: '500', color: '#171717', marginBottom: '4px' }}>C-Suite Access</p>
              <p style={{ fontSize: '12px', color: '#737373' }}>Based on executive-level client testimonials and board-level engagements</p>
            </div>
            <div style={{ padding: '16px', backgroundColor: '#fafafa', borderRadius: '12px' }}>
              <p style={{ fontSize: '13px', fontWeight: '500', color: '#171717', marginBottom: '4px' }}>Post-Show Value</p>
              <p style={{ fontSize: '12px', color: '#737373' }}>Based on deliverables included: workbooks, playbooks, follow-up content</p>
            </div>
          </div>
          <p style={{ fontSize: '12px', color: '#a3a3a3', fontStyle: 'italic' }}>
            Sources: Mena Speakers, LinkedIn profiles, speaker websites, SpeakersCorner UK, event testimonials. Metrics compiled Feb 2026.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfileComparison;
