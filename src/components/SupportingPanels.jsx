import { motion } from 'framer-motion';
import { Users, Mic, Calendar, Clock, ArrowRight, CheckCircle, Star } from 'lucide-react';

const SupportingPanels = () => {
  const panelRecommendations = [
    {
      speaker: "Jos Dirkx",
      keynoteTitle: "The Human+ Era: Transforming Education Through AI",
      color: "blue",
      gradient: "from-blue-500 to-cyan-500",
      panels: [
        {
          title: "AI in the Classroom: Reality vs. Hype",
          description: "A candid discussion on what works, what doesn't, and what's next for AI in education",
          panelists: [
            { name: "UAE Ministry of Education Representative", role: "Policy Perspective" },
            { name: "EdTech Startup Founder", role: "Innovation Perspective" },
            { name: "School Principal", role: "Implementation Perspective" },
            { name: "Student Voice Representative", role: "End-User Perspective" }
          ],
          duration: "45 min",
          format: "Moderated Discussion"
        },
        {
          title: "Future Skills: Preparing Students for Jobs That Don't Exist Yet",
          description: "How educators and employers can collaborate to build adaptive, future-ready curricula",
          panelists: [
            { name: "University Dean (Regional)", role: "Academic Strategy" },
            { name: "Corporate L&D Director", role: "Industry Needs" },
            { name: "Career Counselor", role: "Student Guidance" },
            { name: "AI Ethics Researcher", role: "Ethical Framework" }
          ],
          duration: "45 min",
          format: "Panel + Q&A"
        },
        {
          title: "Workshop: Designing Human+ Learning Experiences",
          description: "Hands-on session applying the Human+ Era framework to real educational challenges",
          panelists: [
            { name: "Jos Dirkx", role: "Workshop Lead" },
            { name: "Instructional Designer", role: "Co-Facilitator" }
          ],
          duration: "90 min",
          format: "Interactive Workshop"
        }
      ]
    },
    {
      speaker: "James Taylor",
      keynoteTitle: "SuperCollaboration: The Future of Human-AI Teamwork",
      color: "teal",
      gradient: "from-teal-500 to-emerald-500",
      panels: [
        {
          title: "The CHRO's Dilemma: Balancing Automation and Human Value",
          description: "How HR leaders are navigating the tension between efficiency and employee experience",
          panelists: [
            { name: "CHRO, Major UAE Conglomerate", role: "Enterprise View" },
            { name: "HR Tech Vendor", role: "Technology View" },
            { name: "Employee Experience Consultant", role: "People View" },
            { name: "Labor Economist", role: "Market View" }
          ],
          duration: "45 min",
          format: "Moderated Discussion"
        },
        {
          title: "Creativity at Scale: Innovation Teams in the AI Era",
          description: "Case studies from organizations that have successfully blended human creativity with AI",
          panelists: [
            { name: "Innovation Director, ADNOC", role: "Energy Sector" },
            { name: "Creative Director, Agency", role: "Creative Industry" },
            { name: "Product Manager, Tech Company", role: "Tech Sector" },
            { name: "R&D Lead, Manufacturing", role: "Industrial Sector" }
          ],
          duration: "45 min",
          format: "Case Study Presentations"
        },
        {
          title: "Workshop: Building Your SuperCollaboration Playbook",
          description: "Practical session to create an actionable HR transformation roadmap for your organization",
          panelists: [
            { name: "James Taylor", role: "Workshop Lead" },
            { name: "HR Transformation Consultant", role: "Co-Facilitator" }
          ],
          duration: "90 min",
          format: "Interactive Workshop"
        }
      ]
    }
  ];

  const speakerSuggestions = [
    {
      type: "Opening Keynote Support",
      description: "Consider pairing with a local government representative to add regional context",
      icon: Mic
    },
    {
      type: "Fireside Chat Option",
      description: "Both speakers are experienced in intimate Q&A formats with executives",
      icon: Users
    },
    {
      type: "Joint Session Opportunity",
      description: "A combined session on 'Education meets HR: The Full Employee Lifecycle' could be powerful",
      icon: Star
    }
  ];

  return (
    <section id="panels" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-4">
            <Users className="w-4 h-4" />
            <span>Supporting Program</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Panel & Session Recommendations
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Suggested supporting panels and workshop formats to maximize keynote impact
          </p>
        </motion.div>

        {/* Panel Recommendations */}
        <div className="space-y-12 md:space-y-16">
          {panelRecommendations.map((rec, index) => (
            <motion.div
              key={rec.speaker}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Speaker Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6 md:mb-8">
                <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${rec.gradient} text-white font-semibold text-sm`}>
                  {rec.speaker}
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <ArrowRight className="w-4 h-4 hidden sm:block" />
                  <span className="text-sm md:text-base italic">{rec.keynoteTitle}</span>
                </div>
              </div>

              {/* Panels Grid */}
              <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                {rec.panels.map((panel, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className={`bg-slate-50 rounded-2xl p-5 md:p-6 border border-slate-200 hover:border-${rec.color === 'blue' ? 'blue' : 'teal'}-300 transition-colors`}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${rec.gradient} flex items-center justify-center`}>
                        <Mic className="w-4 h-4 text-white" />
                      </div>
                      <span className={`text-xs font-medium ${rec.color === 'blue' ? 'text-blue-600' : 'text-teal-600'}`}>
                        {panel.format}
                      </span>
                    </div>

                    <h4 className="font-bold text-slate-900 mb-2 text-sm md:text-base leading-tight">
                      {panel.title}
                    </h4>
                    <p className="text-xs md:text-sm text-slate-600 mb-4">
                      {panel.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      <h5 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Suggested Panelists</h5>
                      {panel.panelists.map((panelist, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <CheckCircle className={`w-3 h-3 ${rec.color === 'blue' ? 'text-blue-500' : 'text-teal-500'}`} />
                          <span className="text-xs text-slate-700">{panelist.name}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 pt-3 border-t border-slate-200">
                      <Clock className="w-4 h-4 text-slate-400" />
                      <span className="text-xs text-slate-500">{panel.duration}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Suggestions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16"
        >
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 text-center">
            Additional Format Suggestions
          </h3>
          <div className="grid sm:grid-cols-3 gap-4 md:gap-6">
            {speakerSuggestions.map((suggestion, i) => (
              <div 
                key={i}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-5 border border-purple-200"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-3">
                  <suggestion.icon className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2 text-sm md:text-base">{suggestion.type}</h4>
                <p className="text-xs md:text-sm text-slate-600">{suggestion.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SupportingPanels;
