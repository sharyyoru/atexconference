const ProfileComparison = () => {
  const metrics = [
    { label: "Global Reach", jos: 95, james: 85 },
    { label: "UAE Influence", jos: 88, james: 98 },
    { label: "C-Suite Access", jos: 92, james: 88 },
    { label: "Post-Show Value", jos: 90, james: 95 },
    { label: "Engagement", jos: 95, james: 90 },
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
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face"
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
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
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
        <div style={{ display: 'flex', gap: '32px', padding: '32px', backgroundColor: '#fafafa', borderRadius: '16px' }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: '13px', color: '#737373', marginBottom: '4px' }}>Contact for both speakers</p>
            <p style={{ fontSize: '18px', fontWeight: '500', color: '#171717' }}>Wilson</p>
            <p style={{ fontSize: '13px', color: '#737373', marginTop: '8px' }}>Direct contact confirmed. No agent intermediary.</p>
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: '13px', color: '#737373', marginBottom: '4px' }}>Location</p>
            <p style={{ fontSize: '18px', fontWeight: '500', color: '#171717' }}>Both Dubai-based</p>
            <p style={{ fontSize: '13px', color: '#737373', marginTop: '8px' }}>No international travel costs required.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileComparison;
