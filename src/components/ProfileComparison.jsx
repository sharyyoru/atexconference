import { motion } from 'framer-motion';

const ProfileComparison = () => {
  const metrics = [
    { label: "Global Reach", jos: 95, james: 85 },
    { label: "UAE Influence", jos: 88, james: 98 },
    { label: "C-Suite Access", jos: 92, james: 88 },
    { label: "Post-Show Value", jos: 90, james: 95 },
    { label: "Engagement", jos: 95, james: 90 },
  ];

  return (
    <section id="comparison" className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[clamp(1.75rem,5vw,3rem)] font-semibold text-neutral-900 tracking-tight mb-4">
            Compare Speakers
          </h2>
          <p className="text-neutral-500 max-w-lg mx-auto">
            Side-by-side analysis of qualifications, reach, and value
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 items-start">
          
          {/* Jos Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-right"
          >
            <div className="inline-block mb-8">
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden ring-[3px] ring-blue-500 ring-offset-4 mx-auto md:ml-auto md:mr-0">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face"
                  alt="Jos Dirkx"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-neutral-900 mt-4">Jos Dirkx</h3>
              <p className="text-[13px] text-neutral-500">AI & Education</p>
            </div>

            <div className="space-y-4">
              {metrics.map((m, i) => (
                <div key={i} className="flex items-center justify-end gap-3">
                  <span className="text-[13px] font-medium text-neutral-900">{m.jos}%</span>
                  <div className="w-32 md:w-48 h-2 bg-neutral-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${m.jos}%` }}
                      transition={{ duration: 0.8, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="h-full bg-blue-500 rounded-full"
                      style={{ marginLeft: 'auto' }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-100">
              <div className="space-y-2 text-[13px]">
                <p className="text-neutral-500">Specialty</p>
                <p className="text-neutral-900 font-medium">Education & AI Integration</p>
                <div className="flex flex-wrap justify-end gap-1.5 mt-3">
                  <span className="px-2.5 py-1 bg-blue-50 text-blue-600 rounded-full text-[12px]">AI Ethics</span>
                  <span className="px-2.5 py-1 bg-blue-50 text-blue-600 rounded-full text-[12px]">EdTech</span>
                  <span className="px-2.5 py-1 bg-blue-50 text-blue-600 rounded-full text-[12px]">Multimedia</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Center Labels */}
          <div className="flex flex-col items-center pt-36 md:pt-44">
            <div className="space-y-4">
              {metrics.map((m, i) => (
                <div key={i} className="h-2 flex items-center">
                  <span className="text-[11px] md:text-[12px] text-neutral-400 whitespace-nowrap">{m.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* James Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <div className="inline-block mb-8">
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden ring-[3px] ring-emerald-500 ring-offset-4 mx-auto md:mr-auto md:ml-0">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
                  alt="James Taylor"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-neutral-900 mt-4">James Taylor</h3>
              <p className="text-[13px] text-neutral-500">HR & Creativity</p>
            </div>

            <div className="space-y-4">
              {metrics.map((m, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-32 md:w-48 h-2 bg-neutral-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${m.james}%` }}
                      transition={{ duration: 0.8, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="h-full bg-emerald-500 rounded-full"
                    />
                  </div>
                  <span className="text-[13px] font-medium text-neutral-900">{m.james}%</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-100">
              <div className="space-y-2 text-[13px]">
                <p className="text-neutral-500">Specialty</p>
                <p className="text-neutral-900 font-medium">HR Innovation & Creativity</p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  <span className="px-2.5 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[12px]">HR Strategy</span>
                  <span className="px-2.5 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[12px]">Creativity</span>
                  <span className="px-2.5 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[12px]">Local PR</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 p-6 md:p-8 bg-neutral-50 rounded-2xl"
        >
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div>
              <p className="text-[13px] text-neutral-500 mb-1">Contact for both speakers</p>
              <p className="text-lg font-medium text-neutral-900">Wilson</p>
              <p className="text-[13px] text-neutral-500 mt-2">Direct contact confirmed. No agent intermediary.</p>
            </div>
            <div>
              <p className="text-[13px] text-neutral-500 mb-1">Location</p>
              <p className="text-lg font-medium text-neutral-900">Both Dubai-based</p>
              <p className="text-[13px] text-neutral-500 mt-2">No international travel costs required.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfileComparison;
