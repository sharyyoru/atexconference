import { ChevronDown } from 'lucide-react';

const HeroNew = () => {
  return (
    <section style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '60px', paddingBottom: '40px', backgroundColor: '#fafafa' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px', width: '100%', textAlign: 'center' }}>
        <p style={{ fontSize: '13px', color: '#737373', marginBottom: '16px', letterSpacing: '0.5px' }}>
          ATEX Conference 2026
        </p>
        
        <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', fontWeight: '600', color: '#171717', letterSpacing: '-0.02em', lineHeight: '1.1', marginBottom: '20px' }}>
          Speaker Showcase
        </h1>
        
        <p style={{ fontSize: '18px', color: '#737373', maxWidth: '500px', margin: '0 auto 48px', lineHeight: '1.6' }}>
          Two exceptional keynote speakers. One powerful event.<br />
          Compare their expertise and value.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '48px', marginBottom: '48px', flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: '600', color: '#171717' }}>85K+</div>
            <div style={{ fontSize: '13px', color: '#737373' }}>Global Reach</div>
          </div>
          <div style={{ width: '1px', height: '48px', backgroundColor: '#e5e5e5' }} />
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: '600', color: '#171717' }}>750+</div>
            <div style={{ fontSize: '13px', color: '#737373' }}>Leaders Interviewed</div>
          </div>
          <div style={{ width: '1px', height: '48px', backgroundColor: '#e5e5e5' }} />
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: '600', color: '#171717' }}>Dubai</div>
            <div style={{ fontSize: '13px', color: '#737373' }}>Both Based</div>
          </div>
        </div>

        <a href="#comparison" style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', color: '#a3a3a3', textDecoration: 'none' }}>
          <span style={{ fontSize: '13px', marginBottom: '8px' }}>Scroll to explore</span>
          <ChevronDown style={{ width: '20px', height: '20px' }} />
        </a>
      </div>
    </section>
  );
};

export default HeroNew;
