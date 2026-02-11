const InvestmentSection = () => {
  const speakers = [
    { name: "Jos Dirkx", color: "#3b82f6", bgColor: "#eff6ff", baseFee: 44040, vat: 2202 },
    { name: "James Taylor", color: "#10b981", bgColor: "#ecfdf5", baseFee: 53215, vat: 2661 }
  ];

  const combinedTotal = speakers[0].baseFee + speakers[0].vat + speakers[1].baseFee + speakers[1].vat;

  const included = [
    { item: "Human+ Era Framework", speaker: "Jos", color: "#3b82f6", bg: "#eff6ff" },
    { item: "SuperCollaboration Toolkit", speaker: "James", color: "#10b981", bg: "#ecfdf5" },
    { item: "Post-Event Content Rights", speaker: "Both", color: "#525252", bg: "#f5f5f5" },
    { item: "Local PR Support", speaker: "James", color: "#10b981", bg: "#ecfdf5" },
    { item: "Multimedia Performance", speaker: "Jos", color: "#3b82f6", bg: "#eff6ff" },
    { item: "Workshop Materials", speaker: "Both", color: "#525252", bg: "#f5f5f5" },
  ];

  return (
    <section id="costs" style={{ backgroundColor: '#fafafa', padding: '80px 0' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: '600', color: '#171717', marginBottom: '12px' }}>
            Investment
          </h2>
          <p style={{ fontSize: '16px', color: '#737373' }}>
            Complete cost breakdown. Both speakers are Dubai-based — no travel costs.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', marginBottom: '24px' }}>
          {speakers.map((s) => (
            <div key={s.name} style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#171717' }}>{s.name}</h3>
                <span style={{ padding: '4px 12px', backgroundColor: s.bgColor, color: s.color, borderRadius: '16px', fontSize: '12px', fontWeight: '500' }}>
                  Dubai-based
                </span>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #f5f5f5' }}>
                  <span style={{ fontSize: '14px', color: '#737373' }}>Speaker Fee</span>
                  <span style={{ fontSize: '14px', fontWeight: '500', color: '#171717' }}>{s.baseFee.toLocaleString()} AED</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #f5f5f5' }}>
                  <span style={{ fontSize: '14px', color: '#737373' }}>VAT (5%)</span>
                  <span style={{ fontSize: '14px', fontWeight: '500', color: '#171717' }}>{s.vat.toLocaleString()} AED</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #f5f5f5' }}>
                  <span style={{ fontSize: '14px', color: '#737373' }}>Travel</span>
                  <span style={{ fontSize: '14px', color: '#a3a3a3' }}>Not required</span>
                </div>
              </div>

              <div style={{ backgroundColor: s.color, borderRadius: '12px', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px' }}>Total</span>
                <span style={{ color: '#ffffff', fontSize: '20px', fontWeight: '600' }}>{(s.baseFee + s.vat).toLocaleString()} AED</span>
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
                <p style={{ color: '#a3a3a3', fontSize: '13px', marginBottom: '8px' }}>Combined Investment</p>
                <p style={{ color: '#ffffff', fontSize: '32px', fontWeight: '600' }}>{combinedTotal.toLocaleString()} AED</p>
                <p style={{ color: '#737373', fontSize: '13px', marginTop: '12px' }}>Two keynotes · Full frameworks · No travel</p>
              </div>

              <div style={{ marginTop: '16px', padding: '16px', backgroundColor: '#fafafa', borderRadius: '12px' }}>
                <p style={{ fontSize: '13px', color: '#525252' }}>
                  <span style={{ fontWeight: '500' }}>Contact:</span> Wilson (direct for both speakers, no agents)
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
