const CommercialModel = () => {
  const delegatePasses = [
    {
      name: "Entry Pass",
      price: "AED 2,000",
      duration: "One Day",
      color: "#6b7280",
      includes: [
        "Conference sessions for selected day",
        "Exhibition floor access",
        "AI Demo Theatre access",
        "Executive roundtables via app booking",
        "Coffee breaks and lunch",
        "Conference playbook"
      ]
    },
    {
      name: "Executive Pass",
      price: "AED 3,500",
      duration: "Both Days",
      color: "#3b82f6",
      popular: true,
      includes: [
        "Full two-day conference access",
        "Exhibition floor access",
        "AI Demo Theatre access",
        "Executive roundtables via app booking",
        "Coffee breaks and lunch both days",
        "Conference playbook"
      ]
    },
    {
      name: "VIP Leadership Pass",
      price: "AED 6,000",
      duration: "Premium Tier",
      color: "#8b5cf6",
      includes: [
        "Two-day conference access",
        "Priority seating",
        "Both networking dinners with speakers",
        "Exhibition floor access",
        "AI Demo Theatre access",
        "Executive roundtables via app booking",
        "Conference playbook",
        "Toolkits",
        "Selected session recordings"
      ]
    }
  ];

  const exhibitionStands = [
    { name: "Standard Stand", size: "9 sqm", price: "AED 35,000", color: "#6b7280" },
    { name: "Premium Stand", size: "12 sqm", price: "AED 45,000", color: "#3b82f6" },
    { name: "Strategic Corner", size: "18 sqm", price: "AED 65,000", color: "#8b5cf6" }
  ];

  const startupOptions = [
    { name: "Startup Pod", size: "4 sqm", price: "AED 8,000", includes: "Exhibition space" },
    { name: "Startup Pod Plus", size: "4 sqm", price: "AED 12,000", includes: "Exhibition + Demo Theatre pitch slot" }
  ];

  const sponsorshipTiers = [
    { tier: "Title Partner", slots: "1 partner only", range: "AED 400,000 – 500,000", color: "#f59e0b" },
    { tier: "Strategic Partners", slots: "3 partners max", range: "AED 180,000 – 220,000", color: "#8b5cf6" },
    { tier: "Industry Partners", slots: "6 partners max", range: "AED 90,000 – 120,000", color: "#3b82f6" },
    { tier: "Activation Partners", slots: "Per zone", range: "Custom pricing", color: "#10b981" }
  ];

  const activations = [
    { name: "AI Demo Theatre", icon: "🎬", desc: "Product demonstrations and short solution talks" },
    { name: "Executive Roundtables", icon: "🤝", desc: "Private discussions with senior delegates via app booking" },
    { name: "Podcast & Media Corner", icon: "🎙️", desc: "On-site recording for interviews with speakers and delegates" }
  ];

  const revenueModel = [
    { source: "Delegates", percent: 40, color: "#3b82f6" },
    { source: "Sponsorship", percent: 40, color: "#8b5cf6" },
    { source: "Exhibition", percent: 20, color: "#10b981" }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
      {/* Mobile Header */}
      <header style={{ 
        position: 'sticky', 
        top: 0, 
        zIndex: 50, 
        backgroundColor: 'rgba(255,255,255,0.95)', 
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid #f5f5f5',
        padding: '16px 20px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/" style={{ fontSize: '14px', fontWeight: '600', color: '#171717', textDecoration: 'none' }}>
            CODE DXB
          </a>
          <span style={{ fontSize: '11px', color: '#737373', backgroundColor: '#f5f5f5', padding: '4px 10px', borderRadius: '12px' }}>
            Internal Draft
          </span>
        </div>
      </header>

      {/* Hero */}
      <section style={{ 
        padding: '48px 20px 40px', 
        background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)', 
        color: '#ffffff' 
      }}>
        <p style={{ fontSize: '11px', fontWeight: '500', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '12px' }}>
          Commercial Model
        </p>
        <h1 style={{ fontSize: '28px', fontWeight: '700', lineHeight: '1.2', marginBottom: '16px' }}>
          CODE DXB
        </h1>
        <p style={{ fontSize: '15px', color: '#cbd5e1', lineHeight: '1.6', marginBottom: '24px' }}>
          A curated, high-value conference for senior leaders in HR, workforce strategy, and enterprise AI adoption.
        </p>
        
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          <div>
            <p style={{ fontSize: '28px', fontWeight: '700', color: '#ffffff' }}>400</p>
            <p style={{ fontSize: '12px', color: '#94a3b8' }}>delegates/day</p>
          </div>
          <div>
            <p style={{ fontSize: '28px', fontWeight: '700', color: '#ffffff' }}>2</p>
            <p style={{ fontSize: '12px', color: '#94a3b8' }}>days</p>
          </div>
          <div>
            <p style={{ fontSize: '28px', fontWeight: '700', color: '#ffffff' }}>App</p>
            <p style={{ fontSize: '12px', color: '#94a3b8' }}>based access</p>
          </div>
        </div>
      </section>

      {/* Delegate Pricing */}
      <section style={{ padding: '40px 20px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#171717', marginBottom: '8px' }}>
          Delegate Pricing
        </h2>
        <p style={{ fontSize: '13px', color: '#737373', marginBottom: '24px' }}>
          Application-based access to maintain senior audience quality
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {delegatePasses.map((pass, i) => (
            <div 
              key={i} 
              style={{ 
                backgroundColor: '#fafafa', 
                borderRadius: '16px', 
                padding: '24px',
                borderLeft: `4px solid ${pass.color}`,
                position: 'relative'
              }}
            >
              {pass.popular && (
                <span style={{ 
                  position: 'absolute', 
                  top: '-10px', 
                  right: '16px', 
                  backgroundColor: '#3b82f6', 
                  color: '#ffffff', 
                  padding: '4px 12px', 
                  borderRadius: '12px', 
                  fontSize: '10px', 
                  fontWeight: '600' 
                }}>
                  POPULAR
                </span>
              )}
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#171717', marginBottom: '4px' }}>{pass.name}</h3>
                  <p style={{ fontSize: '12px', color: '#737373' }}>{pass.duration}</p>
                </div>
                <p style={{ fontSize: '20px', fontWeight: '700', color: pass.color }}>{pass.price}</p>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {pass.includes.map((item, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <span style={{ color: pass.color, fontSize: '14px', marginTop: '2px' }}>✓</span>
                    <span style={{ fontSize: '13px', color: '#525252', lineHeight: '1.4' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ 
          marginTop: '20px', 
          padding: '16px', 
          backgroundColor: '#fef3c7', 
          borderRadius: '12px',
          borderLeft: '4px solid #f59e0b'
        }}>
          <p style={{ fontSize: '13px', color: '#92400e', lineHeight: '1.5' }}>
            <strong>VIP Note:</strong> Limited tickets to protect networking quality. Dinners after Day 1 & 2 at separate venue with speakers.
          </p>
        </div>
      </section>

      {/* Exhibition Floor */}
      <section style={{ padding: '40px 20px', backgroundColor: '#fafafa' }}>
        <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#171717', marginBottom: '8px' }}>
          Exhibition Floor
        </h2>
        <p style={{ fontSize: '13px', color: '#737373', marginBottom: '8px' }}>
          Curated and limited to 20–30 exhibitors
        </p>
        <p style={{ fontSize: '12px', color: '#a3a3a3', marginBottom: '24px' }}>
          Vendors only. No conference access without delegate passes.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {exhibitionStands.map((stand, i) => (
            <div 
              key={i} 
              style={{ 
                backgroundColor: '#ffffff', 
                borderRadius: '12px', 
                padding: '20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
              }}
            >
              <div>
                <h3 style={{ fontSize: '15px', fontWeight: '600', color: '#171717', marginBottom: '4px' }}>{stand.name}</h3>
                <p style={{ fontSize: '12px', color: '#737373' }}>{stand.size}</p>
              </div>
              <p style={{ fontSize: '16px', fontWeight: '600', color: stand.color }}>{stand.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Startup Pavilion */}
      <section style={{ padding: '40px 20px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#171717', marginBottom: '8px' }}>
          Startup Pavilion
        </h2>
        <p style={{ fontSize: '13px', color: '#737373', marginBottom: '24px' }}>
          10–12 emerging solutions · Highlight area
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {startupOptions.map((option, i) => (
            <div 
              key={i} 
              style={{ 
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', 
                borderRadius: '12px', 
                padding: '20px',
                color: '#ffffff'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <h3 style={{ fontSize: '15px', fontWeight: '600' }}>{option.name}</h3>
                <p style={{ fontSize: '16px', fontWeight: '600' }}>{option.price}</p>
              </div>
              <p style={{ fontSize: '12px', opacity: 0.9 }}>{option.size} · {option.includes}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Activations */}
      <section style={{ padding: '40px 20px', backgroundColor: '#0f172a', color: '#ffffff' }}>
        <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>
          Exhibition Activations
        </h2>
        <p style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '24px' }}>
          Three sponsorable zones driving floor traffic
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {activations.map((zone, i) => (
            <div 
              key={i} 
              style={{ 
                backgroundColor: 'rgba(255,255,255,0.05)', 
                borderRadius: '12px', 
                padding: '20px',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                <span style={{ fontSize: '24px' }}>{zone.icon}</span>
                <h3 style={{ fontSize: '15px', fontWeight: '600' }}>{zone.name}</h3>
              </div>
              <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.5' }}>{zone.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sponsorship */}
      <section style={{ padding: '40px 20px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#171717', marginBottom: '8px' }}>
          Sponsorship Structure
        </h2>
        <p style={{ fontSize: '13px', color: '#737373', marginBottom: '24px' }}>
          Intentionally limited to maintain value
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {sponsorshipTiers.map((tier, i) => (
            <div 
              key={i} 
              style={{ 
                backgroundColor: '#fafafa', 
                borderRadius: '12px', 
                padding: '20px',
                borderLeft: `4px solid ${tier.color}`
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <div>
                  <h3 style={{ fontSize: '15px', fontWeight: '600', color: '#171717' }}>{tier.tier}</h3>
                  <p style={{ fontSize: '12px', color: '#737373' }}>{tier.slots}</p>
                </div>
              </div>
              <p style={{ fontSize: '14px', fontWeight: '600', color: tier.color }}>{tier.range}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Networking Dinners */}
      <section style={{ padding: '40px 20px', backgroundColor: '#fafafa' }}>
        <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#171717', marginBottom: '8px' }}>
          Networking Dinners
        </h2>
        <p style={{ fontSize: '13px', color: '#737373', marginBottom: '24px' }}>
          Two exclusive evenings after each conference day
        </p>

        <div style={{ 
          backgroundColor: '#ffffff', 
          borderRadius: '16px', 
          padding: '24px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <span style={{ fontSize: '20px' }}>🍽️</span>
              <div>
                <p style={{ fontSize: '14px', fontWeight: '500', color: '#171717', marginBottom: '4px' }}>Senior-Level Networking</p>
                <p style={{ fontSize: '13px', color: '#737373' }}>Speakers and VIP delegates only</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <span style={{ fontSize: '20px' }}>👥</span>
              <div>
                <p style={{ fontSize: '14px', fontWeight: '500', color: '#171717', marginBottom: '4px' }}>Limited Capacity</p>
                <p style={{ fontSize: '13px', color: '#737373' }}>Quality over quantity</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <span style={{ fontSize: '20px' }}>🏢</span>
              <div>
                <p style={{ fontSize: '14px', fontWeight: '500', color: '#171717', marginBottom: '4px' }}>Sponsor Tables</p>
                <p style={{ fontSize: '13px', color: '#737373' }}>Executive hosting opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Post-Event Resources */}
      <section style={{ padding: '40px 20px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#171717', marginBottom: '8px' }}>
          Post-Event Resources
        </h2>
        <p style={{ fontSize: '13px', color: '#737373', marginBottom: '24px' }}>
          Extending value beyond the conference
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', backgroundColor: '#fafafa', borderRadius: '12px' }}>
            <span style={{ fontSize: '20px' }}>📘</span>
            <div>
              <p style={{ fontSize: '14px', fontWeight: '500', color: '#171717' }}>Playbooks</p>
              <p style={{ fontSize: '12px', color: '#737373' }}>All delegates</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', backgroundColor: '#fafafa', borderRadius: '12px' }}>
            <span style={{ fontSize: '20px' }}>🧰</span>
            <div>
              <p style={{ fontSize: '14px', fontWeight: '500', color: '#171717' }}>Toolkits & Recordings</p>
              <p style={{ fontSize: '12px', color: '#737373' }}>Executive & VIP tiers</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', backgroundColor: '#fafafa', borderRadius: '12px' }}>
            <span style={{ fontSize: '20px' }}>📊</span>
            <div>
              <p style={{ fontSize: '14px', fontWeight: '500', color: '#171717' }}>Executive Summaries</p>
              <p style={{ fontSize: '12px', color: '#737373' }}>Post-event distribution</p>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Model */}
      <section style={{ padding: '40px 20px', backgroundColor: '#0f172a', color: '#ffffff' }}>
        <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>
          Revenue Target Model
        </h2>
        <p style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '24px' }}>
          Balanced commercial structure
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
          {revenueModel.map((item, i) => (
            <div key={i}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '14px', color: '#ffffff' }}>{item.source}</span>
                <span style={{ fontSize: '14px', fontWeight: '600', color: item.color }}>{item.percent}%</span>
              </div>
              <div style={{ height: '8px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: `${item.percent}%`, height: '100%', backgroundColor: item.color, borderRadius: '4px' }} />
              </div>
            </div>
          ))}
        </div>

        <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.6' }}>
          This balance keeps the event commercially healthy while protecting the curated nature of the audience.
        </p>
      </section>

      {/* Objective */}
      <section style={{ padding: '48px 20px', backgroundColor: '#ffffff' }}>
        <div style={{ 
          backgroundColor: '#f5f3ff', 
          borderRadius: '16px', 
          padding: '24px',
          borderLeft: '4px solid #8b5cf6'
        }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#5b21b6', marginBottom: '12px' }}>
            The Objective
          </h3>
          <p style={{ fontSize: '14px', color: '#525252', lineHeight: '1.7' }}>
            Build a conference where <strong>senior leaders attend for real conversations</strong>, sponsors gain <strong>direct access to decision makers</strong>, and the event remains focused on <strong>quality rather than scale</strong>.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '32px 20px', backgroundColor: '#fafafa', borderTop: '1px solid #f5f5f5' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '14px', fontWeight: '600', color: '#171717', marginBottom: '4px' }}>CODE DXB</p>
          <p style={{ fontSize: '12px', color: '#737373', marginBottom: '16px' }}>Commercial Model · Internal Working Draft</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
            <a href="/" style={{ fontSize: '12px', color: '#3b82f6', textDecoration: 'none' }}>ATEX 2026</a>
            <a href="/future" style={{ fontSize: '12px', color: '#3b82f6', textDecoration: 'none' }}>CODE DXB 2027</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CommercialModel;
