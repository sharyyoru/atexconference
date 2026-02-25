const ConferenceSchedule = () => {
  const day1 = {
    title: "Day 1: EduTech Track",
    subtitle: "The AI-Augmented Classroom",
    date: "October 1, 2026",
    keynote: "Dr. Petar Stojanov",
    support: "Tariq Qureishy",
    color: "#3b82f6",
    sessions: [
      { time: "9:00 AM", type: "Welcome", title: "Beyond Experimentation: Proven AI Models for Education Leaders", speaker: null, status: "unfilled" },
      { time: "9:15 AM", type: "Opening Keynote", title: "The Scalable Digital Campus: AI Systems for Personalization & Engagement", speaker: "Dr. Petar Stojanov", status: "confirmed" },
      { time: "10:15 AM", type: "Solution Deep Dive", title: "The AI Compass: Integrating Predictive Analytics for Student Success", speaker: "Tariq Qureishy", status: "confirmed" },
      { time: "11:15 AM", type: "Workshop", title: "The Educator's AI Playbook: Tools for Immediate Classroom Implementation", speaker: null, status: "unfilled" },
      { time: "12:15 PM", type: "Break", title: "Networking Lunch", speaker: null, status: "break" },
      { time: "1:30 PM", type: "Panel", title: "The AI-Assisted Educator: Enhancing Teaching, Not Replacing It", speaker: null, status: "unfilled" },
      { time: "2:30 PM", type: "Case Study", title: "A University's AI Integration: Measuring Impact on Student Engagement", speaker: null, status: "unfilled" },
      { time: "3:15 PM", type: "Break", title: "Coffee & Networking Break", speaker: null, status: "break" },
      { time: "3:45 PM", type: "Strategy Session", title: "Beyond the LMS: The Business of AI-Powered Lifelong Learning Platforms", speaker: null, status: "unfilled" },
      { time: "4:30 PM", type: "Closing", title: "Your CODE DXB Advantage: What Happens Next", speaker: "Dr. Petar Stojanov", status: "confirmed" }
    ]
  };

  const day2 = {
    title: "Day 2: HRTech Track",
    subtitle: "The AI-Driven Workforce",
    date: "October 2, 2026",
    keynote: "James Taylor",
    support: "Natalia Sycheva",
    color: "#10b981",
    sessions: [
      { time: "9:00 AM", type: "Welcome", title: "Beyond the Hype: A Leader's Guide to Real AI Adoption in HR", speaker: null, status: "unfilled" },
      { time: "9:15 AM", type: "Opening Keynote", title: "The 90-Day ROI: Deploying AI for Measurable Gains in Talent Acquisition", speaker: "James Taylor", status: "confirmed" },
      { time: "10:15 AM", type: "Implementation Deep Dive", title: "The AI Career Coach & Internal Mobility Platform", speaker: "Natalia Sycheva", status: "confirmed" },
      { time: "11:15 AM", type: "Panel", title: "Building the Business Case: AI-Driven Upskilling That Delivers Results", speaker: null, status: "unfilled" },
      { time: "12:15 PM", type: "Break", title: "Networking Lunch", speaker: null, status: "break" },
      { time: "1:30 PM", type: "Workshop", title: "The CHRO's AI Toolkit: A Practical Deployment Playbook", speaker: null, status: "unfilled" },
      { time: "2:30 PM", type: "Case Study", title: "From Pilot to Performance: [Leading UAE Co.]'s AI Retention Strategy", speaker: null, status: "unfilled" },
      { time: "3:15 PM", type: "Break", title: "Coffee & Networking Break", speaker: null, status: "break" },
      { time: "3:45 PM", type: "Governance Session", title: "The Ethical Algorithm: Mitigating Bias & Ensuring Compliance in AI Recruitment", speaker: null, status: "unfilled" },
      { time: "4:30 PM", type: "Closing", title: "Your CODE DXB Advantage: What Happens Next", speaker: "James Taylor", status: "confirmed" }
    ]
  };

  const getStatusStyle = (status) => {
    if (status === 'confirmed') return { backgroundColor: '#dcfce7', color: '#166534' };
    if (status === 'unfilled') return { backgroundColor: '#fef3c7', color: '#92400e' };
    return { backgroundColor: '#f5f5f5', color: '#737373' };
  };

  const renderDay = (day) => (
    <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '32px', marginBottom: '32px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
        <div>
          <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#171717', marginBottom: '4px' }}>{day.title}</h3>
          <p style={{ fontSize: '14px', color: '#737373' }}>{day.subtitle} · {day.date}</p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <p style={{ fontSize: '12px', color: '#a3a3a3', marginBottom: '4px' }}>Confirmed Speakers</p>
          <p style={{ fontSize: '14px', fontWeight: '500', color: day.color }}>{day.keynote}</p>
          <p style={{ fontSize: '13px', color: '#737373' }}>{day.support}</p>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {day.sessions.map((session, i) => (
          <div key={i} style={{ 
            display: 'grid', 
            gridTemplateColumns: '80px 140px 1fr 160px', 
            gap: '16px', 
            alignItems: 'center',
            padding: '12px 16px',
            backgroundColor: session.status === 'break' ? '#fafafa' : '#ffffff',
            borderRadius: '8px',
            border: '1px solid #f5f5f5'
          }}>
            <span style={{ fontSize: '13px', fontWeight: '500', color: '#171717' }}>{session.time}</span>
            <span style={{ fontSize: '12px', color: day.color, fontWeight: '500' }}>{session.type}</span>
            <span style={{ fontSize: '13px', color: '#525252' }}>{session.title}</span>
            <span style={{ 
              fontSize: '11px', 
              fontWeight: '500',
              padding: '4px 10px',
              borderRadius: '12px',
              textAlign: 'center',
              ...getStatusStyle(session.status)
            }}>
              {session.speaker || (session.status === 'break' ? '—' : 'Speaker Needed')}
            </span>
          </div>
        ))}
      </div>

      {/* Unfilled Summary */}
      <div style={{ marginTop: '24px', padding: '16px', backgroundColor: '#fffbeb', borderRadius: '12px', border: '1px solid #fef3c7' }}>
        <p style={{ fontSize: '13px', fontWeight: '500', color: '#92400e', marginBottom: '8px' }}>Unfilled Slots for {day.title.split(':')[0]}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {day.sessions.filter(s => s.status === 'unfilled').map((s, i) => (
            <span key={i} style={{ fontSize: '12px', padding: '4px 10px', backgroundColor: '#ffffff', borderRadius: '8px', color: '#92400e' }}>
              {s.type}: {s.time}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="schedule" style={{ backgroundColor: '#fafafa', padding: '80px 0' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: '600', color: '#171717', marginBottom: '12px' }}>
            Conference Schedule
          </h2>
          <p style={{ fontSize: '16px', color: '#737373' }}>
            Two-day agenda with confirmed speakers and open slots
          </p>
        </div>

        {renderDay(day1)}
        {renderDay(day2)}

        {/* Legend */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '4px', backgroundColor: '#dcfce7' }} />
            <span style={{ fontSize: '13px', color: '#737373' }}>Confirmed</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '4px', backgroundColor: '#fef3c7' }} />
            <span style={{ fontSize: '13px', color: '#737373' }}>Speaker Needed</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '4px', backgroundColor: '#f5f5f5' }} />
            <span style={{ fontSize: '13px', color: '#737373' }}>Break</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConferenceSchedule;
