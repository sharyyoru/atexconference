const InvestmentSection = () => {
  const mainSpeakers = [
    { name: "Dr. Petar Stojanov", role: "Education Keynote", color: "#3b82f6", bgColor: "#eff6ff", baseFee: 4224, vat: 211, travel: false },
    { name: "James Taylor", role: "HR Keynote", color: "#10b981", bgColor: "#ecfdf5", baseFee: 14500, vat: 725, travel: true, travelNote: "Biz class flights + accommodation" }
  ];

  const subSpeakers = [
    { name: "Tariq Qureishy", role: "Education Track Support", color: "#8b5cf6", bgColor: "#f5f3ff", baseFee: 4224, vat: 211 },
    { name: "Natalia Sycheva", role: "HR Track Support", color: "#f59e0b", bgColor: "#fffbeb", baseFee: 4224, vat: 211 }
  ];

  const mainTotal = mainSpeakers.reduce((sum, s) => sum + s.baseFee + s.vat, 0);
  const subTotal = subSpeakers.reduce((sum, s) => sum + s.baseFee + s.vat, 0);
  const grandTotal = mainTotal + subTotal;

  const included = [
    { item: "Smart Failure Methodology", speaker: "Dr. Petar", color: "#3b82f6", bg: "#eff6ff" },
    { item: "SuperCollaboration Toolkit", speaker: "James", color: "#10b981", bg: "#ecfdf5" },
    { item: "Post-Event Content Rights", speaker: "All", color: "#525252", bg: "#f5f5f5" },
    { item: "Workshop Materials", speaker: "All", color: "#525252", bg: "#f5f5f5" },
    { item: "Session Recordings", speaker: "All", color: "#525252", bg: "#f5f5f5" },
    { item: "Follow-up Webinars", speaker: "Main", color: "#525252", bg: "#f5f5f5" },
  ];

  return (
    <section id="costs" style={{ backgroundColor: '#fafafa', padding: '80px 0' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: '600', color: '#171717', marginBottom: '12px' }}>
            Investment
          </h2>
          <p style={{ fontSize: '16px', color: '#737373' }}>
            Complete cost breakdown for all conference speakers (USD)
          </p>
        </div>

        {/* Main Keynote Speakers */}
        <p style={{ fontSize: '12px', fontWeight: '500', color: '#a3a3a3', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '16px' }}>Keynote Speakers</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', marginBottom: '32px' }}>
          {mainSpeakers.map((s) => (
            <div key={s.name} style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#171717' }}>{s.name}</h3>
                  <p style={{ fontSize: '13px', color: '#737373' }}>{s.role}</p>
                </div>
                <span style={{ padding: '4px 12px', backgroundColor: s.bgColor, color: s.color, borderRadius: '16px', fontSize: '12px', fontWeight: '500' }}>
                  Dubai-based
                </span>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #f5f5f5' }}>
                  <span style={{ fontSize: '14px', color: '#737373' }}>Speaker Fee</span>
                  <span style={{ fontSize: '14px', fontWeight: '500', color: '#171717' }}>${s.baseFee.toLocaleString()} USD</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #f5f5f5' }}>
                  <span style={{ fontSize: '14px', color: '#737373' }}>VAT (5%)</span>
                  <span style={{ fontSize: '14px', fontWeight: '500', color: '#171717' }}>${s.vat.toLocaleString()} USD</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #f5f5f5' }}>
                  <span style={{ fontSize: '14px', color: '#737373' }}>Travel</span>
                  <span style={{ fontSize: '14px', color: s.travel ? '#171717' : '#a3a3a3' }}>{s.travel ? s.travelNote : 'Not required'}</span>
                </div>
              </div>

              <div style={{ backgroundColor: s.color, borderRadius: '12px', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px' }}>Total</span>
                <span style={{ color: '#ffffff', fontSize: '20px', fontWeight: '600' }}>${(s.baseFee + s.vat).toLocaleString()} USD</span>
              </div>
            </div>
          ))}
        </div>

        {/* Supporting Speakers */}
        <p style={{ fontSize: '12px', fontWeight: '500', color: '#a3a3a3', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '16px' }}>Supporting Speakers</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', marginBottom: '24px' }}>
          {subSpeakers.map((s) => (
            <div key={s.name} style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#171717' }}>{s.name}</h3>
                  <p style={{ fontSize: '12px', color: '#737373' }}>{s.role}</p>
                </div>
                <span style={{ padding: '4px 12px', backgroundColor: s.bgColor, color: s.color, borderRadius: '16px', fontSize: '11px', fontWeight: '500' }}>
                  Dubai
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', backgroundColor: '#fafafa', borderRadius: '8px' }}>
                <span style={{ fontSize: '13px', color: '#737373' }}>Fee + VAT</span>
                <span style={{ fontSize: '16px', fontWeight: '600', color: '#171717' }}>${(s.baseFee + s.vat).toLocaleString()} USD</span>
              </div>
            </div>
          ))}
        </div>

        {/* Combined + Included */}
        <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '48px' }}>
            <div>
              <p style={{ fontSize: '12px', fontWeight: '500', color: '#a3a3a3', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '16px' }}>What's Included</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {included.map((item, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4px 0' }}>
                    <span style={{ fontSize: '14px', color: '#525252' }}>{item.item}</span>
                    <span style={{ padding: '2px 10px', backgroundColor: item.bg, color: item.color, borderRadius: '12px', fontSize: '12px' }}>
                      {item.speaker}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ backgroundColor: '#171717', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
                <p style={{ color: '#a3a3a3', fontSize: '13px', marginBottom: '8px' }}>Total Speaker Investment</p>
                <p style={{ color: '#ffffff', fontSize: '32px', fontWeight: '600' }}>${grandTotal.toLocaleString()} USD</p>
                <p style={{ color: '#737373', fontSize: '13px', marginTop: '12px' }}>4 speakers · 2 tracks · Full frameworks</p>
                <p style={{ color: '#525252', fontSize: '11px', marginTop: '8px' }}>+ James Taylor travel (biz class + accommodation)</p>
              </div>

              <div style={{ marginTop: '16px', padding: '16px', backgroundColor: '#fafafa', borderRadius: '12px' }}>
                <p style={{ fontSize: '13px', color: '#525252' }}>
                  <span style={{ fontWeight: '500' }}>Contact:</span> Wilson via Mena Speakers Agency
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;
