import { motion } from 'framer-motion';

const SpecializedTopics = () => {
  const speakers = [
    {
      name: "Jos Dirkx",
      specialty: "Education & AI Integration",
      color: "blue",
      description: "Jos specializes in transforming education through AI integration. Her Human+ Era framework prepares educators, students, and institutions for an AI-augmented future while maintaining human creativity at the core.",
      topics: [
        { title: "AI Ethics in Education", desc: "Responsible AI integration in learning environments" },
        { title: "Future Skills Development", desc: "Preparing students for careers that don't exist yet" },
        { title: "Human+ Era Philosophy", desc: "Human potential and AI capabilities working together" },
        { title: "Multimedia Learning", desc: "Integrated music, visuals, and AI for memorable experiences" }
      ],
      audience: ["Ministry of Education", "University Deans", "EdTech Leaders", "Training Directors"],
      quote: "Education is not about replacing teachers with AI—it's about empowering educators to reach every student."
    },
    {
      name: "James Taylor",
      specialty: "HR Innovation & Creativity",
      color: "emerald",
      description: "James leads the conversation on SuperCollaboration—human-AI teamwork in the workplace. His expertise helps HR departments and innovation teams unlock creative potential through structured collaboration frameworks.",
      topics: [
        { title: "SuperCollaboration Framework", desc: "High-performance teams with human creativity and AI" },
        { title: "Creativity in the AI Age", desc: "Why human creativity becomes more valuable" },
        { title: "Employee Experience 2.0", desc: "Attracting talent in the automation era" },
        { title: "Regional Workforce Strategy", desc: "UAE-specific talent development insights" }
      ],
      audience: ["CHROs", "HR Directors", "Talent Leaders", "Innovation Officers"],
      quote: "The future isn't human vs. machine—it's human WITH machine."
    }
  ];

  return (
    <section id="topics" className="py-20 md:py-32 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[clamp(1.75rem,5vw,3rem)] font-semibold text-neutral-900 tracking-tight mb-4">
            Specialized Expertise
          </h2>
          <p className="text-neutral-500 max-w-lg mx-auto">
            Deep dive into each speaker's focus areas and ideal audience
          </p>
        </motion.div>

        <div className="space-y-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 md:p-10"
            >
              <div className="grid md:grid-cols-[1fr_1.5fr] gap-8 md:gap-12">
                {/* Left - Speaker Info */}
                <div>
                  <div className={`inline-block px-3 py-1 rounded-full text-[12px] font-medium mb-4 ${
                    speaker.color === 'blue' ? 'bg-blue-50 text-blue-600' : 'bg-emerald-50 text-emerald-600'
                  }`}>
                    {speaker.specialty}
                  </div>
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-4">{speaker.name}</h3>
                  <p className="text-[15px] text-neutral-600 leading-relaxed mb-6">
                    {speaker.description}
                  </p>
                  
                  <div className={`border-l-2 ${speaker.color === 'blue' ? 'border-blue-500' : 'border-emerald-500'} pl-4`}>
                    <p className="text-[14px] text-neutral-600 italic">"{speaker.quote}"</p>
                  </div>
                </div>

                {/* Right - Topics & Audience */}
                <div>
                  <h4 className="text-[13px] font-medium text-neutral-400 uppercase tracking-wider mb-4">Key Topics</h4>
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {speaker.topics.map((topic, i) => (
                      <div key={i} className="p-4 bg-neutral-50 rounded-xl">
                        <h5 className="text-[14px] font-medium text-neutral-900 mb-1">{topic.title}</h5>
                        <p className="text-[13px] text-neutral-500">{topic.desc}</p>
                      </div>
                    ))}
                  </div>

                  <h4 className="text-[13px] font-medium text-neutral-400 uppercase tracking-wider mb-3">Ideal Audience</h4>
                  <div className="flex flex-wrap gap-2">
                    {speaker.audience.map((item, i) => (
                      <span 
                        key={i}
                        className={`px-3 py-1.5 rounded-full text-[13px] ${
                          speaker.color === 'blue' 
                            ? 'bg-blue-50 text-blue-700' 
                            : 'bg-emerald-50 text-emerald-700'
                        }`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecializedTopics;
