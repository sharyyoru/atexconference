import { motion } from 'framer-motion';
import { GraduationCap, Users, Brain, Lightbulb, Target, Sparkles, BookOpen, Zap, Heart, Globe } from 'lucide-react';

const SpecializedTopics = () => {
  const speakers = [
    {
      name: "Jos Dirkx",
      specialty: "Education & AI Integration",
      color: "blue",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
      icon: GraduationCap,
      description: "Jos specializes in transforming education through AI integration. Her Human+ Era framework focuses on preparing educators, students, and institutions for an AI-augmented future while maintaining human creativity and critical thinking at the core.",
      topics: [
        {
          icon: Brain,
          title: "AI Ethics in Education",
          desc: "How to integrate AI responsibly in learning environments while fostering critical thinking"
        },
        {
          icon: Lightbulb,
          title: "Future Skills Development",
          desc: "Preparing the next generation for careers that don't yet exist"
        },
        {
          icon: Sparkles,
          title: "Human+ Era Philosophy",
          desc: "The symbiotic relationship between human potential and AI capabilities"
        },
        {
          icon: BookOpen,
          title: "Multimedia Learning",
          desc: "Using integrated music, visuals, and AI to create memorable learning experiences"
        }
      ],
      audience: ["Ministry of Education Officials", "University Deans", "EdTech Leaders", "Corporate Training Directors", "AI Ethics Officers"],
      quote: "Education is not about replacing human teachers with AI—it's about empowering educators to reach every student in ways never before possible."
    },
    {
      name: "James Taylor",
      specialty: "HR Innovation & Creativity",
      color: "teal",
      gradient: "from-teal-500 to-emerald-500",
      bgGradient: "from-teal-50 to-emerald-50",
      borderColor: "border-teal-200",
      icon: Users,
      description: "James is the leading voice on SuperCollaboration—the art of human-AI teamwork in the workplace. His expertise lies in helping HR departments, enterprise leaders, and innovation teams unlock creative potential through structured collaboration frameworks.",
      topics: [
        {
          icon: Users,
          title: "SuperCollaboration Framework",
          desc: "Building high-performance teams that leverage both human creativity and AI efficiency"
        },
        {
          icon: Zap,
          title: "Creativity in the AI Age",
          desc: "Why human creativity becomes MORE valuable as AI handles routine tasks"
        },
        {
          icon: Heart,
          title: "Employee Experience 2.0",
          desc: "Designing workplaces that attract and retain talent in the automation era"
        },
        {
          icon: Globe,
          title: "Regional Workforce Strategy",
          desc: "UAE-specific insights on talent development and HR transformation"
        }
      ],
      audience: ["CHROs", "HR Directors", "Talent Acquisition Leaders", "Innovation Officers", "Enterprise Decision Makers"],
      quote: "The future of work isn't human vs. machine—it's human WITH machine. The organizations that understand this will win the talent war."
    }
  ];

  return (
    <section id="topics" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
            <Target className="w-4 h-4" />
            <span>Specialized Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Speaker Topics & Focus Areas
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Understanding each speaker's specialized domains and ideal audience composition
          </p>
        </motion.div>

        <div className="space-y-8 md:space-y-12">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${speaker.bgGradient} rounded-3xl p-6 md:p-8 lg:p-10 border ${speaker.borderColor}`}
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 md:mb-8">
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${speaker.gradient} flex items-center justify-center shrink-0`}>
                  <speaker.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900">{speaker.name}</h3>
                  <p className={`text-sm md:text-base font-medium ${speaker.color === 'blue' ? 'text-blue-600' : 'text-teal-600'}`}>
                    {speaker.specialty}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-700 mb-6 md:mb-8 leading-relaxed">
                {speaker.description}
              </p>

              {/* Topics Grid */}
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                {speaker.topics.map((topic, i) => (
                  <div 
                    key={i} 
                    className="bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-white shadow-sm"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${speaker.gradient} flex items-center justify-center shrink-0`}>
                        <topic.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1 text-sm md:text-base">{topic.title}</h4>
                        <p className="text-xs md:text-sm text-slate-600">{topic.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Target Audience */}
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 md:p-5 mb-6">
                <h4 className="font-semibold text-slate-900 mb-3 text-sm md:text-base">Ideal Audience</h4>
                <div className="flex flex-wrap gap-2">
                  {speaker.audience.map((item, i) => (
                    <span 
                      key={i}
                      className={`px-3 py-1.5 rounded-full text-xs md:text-sm font-medium ${
                        speaker.color === 'blue' 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'bg-teal-100 text-teal-700'
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className={`border-l-4 ${speaker.color === 'blue' ? 'border-blue-500' : 'border-teal-500'} pl-4 md:pl-6`}>
                <p className="text-slate-700 italic text-sm md:text-base">"{speaker.quote}"</p>
                <p className={`mt-2 font-medium text-sm ${speaker.color === 'blue' ? 'text-blue-600' : 'text-teal-600'}`}>
                  — {speaker.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecializedTopics;
