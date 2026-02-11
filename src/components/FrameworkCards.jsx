import { motion } from 'framer-motion';
import { Brain, Users, Lightbulb, Target, Sparkles, Zap, BookOpen, Award } from 'lucide-react';

const FrameworkCards = () => {
  const frameworks = [
    {
      id: 'human-plus',
      speaker: "Jos Dirkx",
      name: "Human+ Era",
      tagline: "Transforming Education through AI",
      color: "blue",
      gradient: "from-blue-500 to-cyan-400",
      frontIcon: Brain,
      description: "A comprehensive framework for integrating AI into human potential development",
      deliverables: [
        { icon: Sparkles, title: "AI Ethics Module", desc: "Ethical AI implementation guidelines" },
        { icon: Lightbulb, title: "Education Transformation", desc: "AI-enhanced learning pathways" },
        { icon: Target, title: "Future Skills Mapping", desc: "Competency frameworks for the AI age" },
        { icon: Award, title: "Certification Path", desc: "Human+ Era certification for attendees" },
      ]
    },
    {
      id: 'supercollaboration',
      speaker: "James Taylor",
      name: "SuperCollaboration",
      tagline: "Bridging HR and AI",
      color: "orange",
      gradient: "from-orange-500 to-red-400",
      frontIcon: Users,
      description: "The definitive HR toolkit for human-AI collaboration in the modern workplace",
      deliverables: [
        { icon: Users, title: "Team Dynamics", desc: "AI-augmented collaboration models" },
        { icon: Zap, title: "Creativity Boost", desc: "Innovation frameworks for teams" },
        { icon: BookOpen, title: "HR Playbook", desc: "Implementation guide for HR leaders" },
        { icon: Target, title: "ROI Metrics", desc: "Measuring collaboration success" },
      ]
    }
  ];

  return (
    <section id="frameworks" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 mb-4">
            <BookOpen className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-slate-300">Post-Show Materials</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Framework Deep-Dive</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Interactive preview of the frameworks included in speaker packages
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {frameworks.map((framework, index) => (
            <motion.div
              key={framework.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flip-card h-[500px]"
            >
              <div className="flip-card-inner relative w-full h-full">
                {/* Front */}
                <div className={`flip-card-front absolute inset-0 bg-gradient-to-br ${framework.gradient} rounded-3xl p-8 flex flex-col justify-between`}>
                  <div>
                    <span className="text-white/70 text-sm">{framework.speaker}</span>
                    <h3 className="text-3xl font-bold text-white mt-2">{framework.name}</h3>
                    <p className="text-white/80 mt-2">{framework.tagline}</p>
                  </div>
                  
                  <div className="flex justify-center">
                    <framework.frontIcon className="w-32 h-32 text-white/30" />
                  </div>

                  <div className="text-center">
                    <span className="text-white/70 text-sm">Hover to explore deliverables →</span>
                  </div>
                </div>

                {/* Back */}
                <div className="flip-card-back absolute inset-0 bg-slate-900 border border-slate-700 rounded-3xl p-8">
                  <div className="h-full flex flex-col">
                    <div className="mb-6">
                      <span className={`text-sm font-medium ${framework.color === 'blue' ? 'text-blue-400' : 'text-orange-400'}`}>
                        {framework.speaker}
                      </span>
                      <h3 className="text-2xl font-bold text-white">{framework.name}</h3>
                      <p className="text-slate-400 text-sm mt-2">{framework.description}</p>
                    </div>

                    <div className="flex-1 space-y-4">
                      {framework.deliverables.map((item, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 bg-slate-800/50 rounded-xl">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                            framework.color === 'blue' ? 'bg-blue-500/20' : 'bg-orange-500/20'
                          }`}>
                            <item.icon className={`w-5 h-5 ${framework.color === 'blue' ? 'text-blue-400' : 'text-orange-400'}`} />
                          </div>
                          <div>
                            <h4 className="text-white font-medium text-sm">{item.title}</h4>
                            <p className="text-slate-500 text-xs">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className={`mt-4 pt-4 border-t border-slate-800 text-center`}>
                      <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                        framework.color === 'blue' ? 'bg-blue-500/20 text-blue-400' : 'bg-orange-500/20 text-orange-400'
                      }`}>
                        Included in Speaker Package
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Download Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="bg-slate-900/50 border border-slate-700 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-4">Post-Show Material Preview</h3>
            <p className="text-slate-400 mb-6">
              Attendees will receive exclusive access to both frameworks as part of their event package
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-lg">
                <Brain className="w-5 h-5 text-blue-400" />
                <span className="text-blue-300 font-medium">Human+ Era PDF</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-lg">
                <Users className="w-5 h-5 text-orange-400" />
                <span className="text-orange-300 font-medium">SuperCollaboration Toolkit</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FrameworkCards;
