import { motion } from 'framer-motion';

const SupportingPanels = () => {
  const panels = [
    {
      speaker: "Jos Dirkx",
      keynote: "The Human+ Era",
      color: "blue",
      sessions: [
        { type: "Panel", title: "AI in the Classroom: Reality vs. Hype", duration: "45 min", panelists: ["Ministry of Education Rep", "EdTech Founder", "School Principal"] },
        { type: "Discussion", title: "Future Skills for Jobs That Don't Exist", duration: "45 min", panelists: ["University Dean", "L&D Director", "AI Ethics Researcher"] },
        { type: "Workshop", title: "Designing Human+ Learning Experiences", duration: "90 min", panelists: ["Jos Dirkx (Lead)", "Instructional Designer"] }
      ]
    },
    {
      speaker: "James Taylor",
      keynote: "SuperCollaboration",
      color: "emerald",
      sessions: [
        { type: "Panel", title: "The CHRO's Dilemma: Automation vs. Human Value", duration: "45 min", panelists: ["CHRO (UAE Conglomerate)", "HR Tech Vendor", "Employee Experience Lead"] },
        { type: "Case Studies", title: "Creativity at Scale: Innovation in AI Era", duration: "45 min", panelists: ["Innovation Director (ADNOC)", "Creative Director", "Product Manager"] },
        { type: "Workshop", title: "Building Your SuperCollaboration Playbook", duration: "90 min", panelists: ["James Taylor (Lead)", "HR Transformation Consultant"] }
      ]
    }
  ];

  const suggestions = [
    { title: "Opening Keynote Support", desc: "Pair with a local government representative for regional context" },
    { title: "Fireside Chat", desc: "Both speakers excel in intimate Q&A formats with executives" },
    { title: "Joint Session", desc: "Combined session on 'Education meets HR: The Full Employee Lifecycle'" }
  ];

  return (
    <section id="panels" className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[clamp(1.75rem,5vw,3rem)] font-semibold text-neutral-900 tracking-tight mb-4">
            Session Recommendations
          </h2>
          <p className="text-neutral-500 max-w-lg mx-auto">
            Supporting panels and workshops to maximize keynote impact
          </p>
        </motion.div>

        <div className="space-y-12">
          {panels.map((panel, index) => (
            <motion.div
              key={panel.speaker}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className={`px-3 py-1 rounded-full text-[13px] font-medium ${
                  panel.color === 'blue' ? 'bg-blue-500 text-white' : 'bg-emerald-500 text-white'
                }`}>
                  {panel.speaker}
                </span>
                <span className="text-[14px] text-neutral-500">→ {panel.keynote}</span>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {panel.sessions.map((session, i) => (
                  <div key={i} className="bg-neutral-50 rounded-xl p-5">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-[12px] font-medium ${
                        panel.color === 'blue' ? 'text-blue-600' : 'text-emerald-600'
                      }`}>
                        {session.type}
                      </span>
                      <span className="text-[12px] text-neutral-400">{session.duration}</span>
                    </div>
                    <h4 className="text-[15px] font-medium text-neutral-900 mb-3 leading-snug">
                      {session.title}
                    </h4>
                    <div className="space-y-1.5">
                      {session.panelists.map((p, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <div className={`w-1 h-1 rounded-full ${
                            panel.color === 'blue' ? 'bg-blue-400' : 'bg-emerald-400'
                          }`} />
                          <span className="text-[13px] text-neutral-600">{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Suggestions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 pt-16 border-t border-neutral-100"
        >
          <h3 className="text-lg font-semibold text-neutral-900 mb-6 text-center">Additional Format Options</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {suggestions.map((s, i) => (
              <div key={i} className="text-center p-5">
                <h4 className="text-[14px] font-medium text-neutral-900 mb-2">{s.title}</h4>
                <p className="text-[13px] text-neutral-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SupportingPanels;
