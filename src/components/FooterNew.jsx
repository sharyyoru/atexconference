const FooterNew = () => {
  return (
    <footer style={{ padding: '48px 0', backgroundColor: '#ffffff', borderTop: '1px solid #f5f5f5' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '48px', marginBottom: '48px' }}>
          <div>
            <p style={{ fontSize: '15px', fontWeight: '600', color: '#171717', marginBottom: '8px' }}>ATEX Conference 2026</p>
            <p style={{ fontSize: '13px', color: '#737373', marginBottom: '16px' }}>Internal Pitch Deck for Speaker Selection</p>
            <p style={{ fontSize: '13px', color: '#a3a3a3' }}>
              Contact: <span style={{ color: '#525252' }}>Wilson</span> (direct for both speakers)
            </p>
          </div>

          <div>
            <p style={{ fontSize: '12px', fontWeight: '500', color: '#a3a3a3', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '16px' }}>Navigate</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href="#comparison" style={{ fontSize: '14px', color: '#525252', textDecoration: 'none' }}>Compare</a>
              <a href="#topics" style={{ fontSize: '14px', color: '#525252', textDecoration: 'none' }}>Expertise</a>
              <a href="#panels" style={{ fontSize: '14px', color: '#525252', textDecoration: 'none' }}>Sessions</a>
              <a href="#costs" style={{ fontSize: '14px', color: '#525252', textDecoration: 'none' }}>Investment</a>
            </div>
          </div>

          <div>
            <p style={{ fontSize: '12px', fontWeight: '500', color: '#a3a3a3', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '16px' }}>Speakers</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div>
                <p style={{ fontSize: '14px', fontWeight: '500', color: '#171717' }}>Jos Dirkx</p>
                <p style={{ fontSize: '12px', color: '#737373' }}>Education & AI · Dubai</p>
              </div>
              <div>
                <p style={{ fontSize: '14px', fontWeight: '500', color: '#171717' }}>James Taylor</p>
                <p style={{ fontSize: '12px', color: '#737373' }}>HR & Creativity · Dubai</p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ paddingTop: '24px', borderTop: '1px solid #f5f5f5', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontSize: '13px', color: '#a3a3a3' }}>© 2026 ATEX Conference · Internal Document</p>
          <p style={{ fontSize: '12px', color: '#a3a3a3' }}>Version 2.0 · Feb 2026</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterNew;
