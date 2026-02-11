import { motion } from 'framer-motion';

const InvestmentSection = () => {
  const speakers = [
    {
      name: "Jos Dirkx",
      color: "blue",
      baseFee: 44040,
      vat: 2202,
      get total() { return this.baseFee + this.vat; }
    },
    {
      name: "James Taylor",
      color: "emerald",
      baseFee: 53215,
      vat: 2661,
      get total() { return this.baseFee + this.vat; }
    }
  ];

  const combinedTotal = speakers[0].total + speakers[1].total;

  const included = [
    { item: "Human+ Era Framework", speaker: "Jos" },
    { item: "SuperCollaboration Toolkit", speaker: "James" },
    { item: "Post-Event Content Rights", speaker: "Both" },
    { item: "Local PR Support", speaker: "James" },
    { item: "Multimedia Performance", speaker: "Jos" },
    { item: "Workshop Materials", speaker: "Both" },
  ];

  return (
    <section id="costs" className="py-20 md:py-32 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[clamp(1.75rem,5vw,3rem)] font-semibold text-neutral-900 tracking-tight mb-4">
            Investment
          </h2>
          <p className="text-neutral-500 max-w-lg mx-auto">
            Complete cost breakdown. Both speakers are Dubai-based — no travel costs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {speakers.map((s, index) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 md:p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-neutral-900">{s.name}</h3>
                <span className={`px-2.5 py-1 rounded-full text-[12px] font-medium ${
                  s.color === 'blue' ? 'bg-blue-50 text-blue-600' : 'bg-emerald-50 text-emerald-600'
                }`}>
                  Dubai-based
                </span>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between py-2.5 border-b border-neutral-100">
                  <span className="text-[14px] text-neutral-500">Speaker Fee</span>
                  <span className="text-[14px] font-medium text-neutral-900">{s.baseFee.toLocaleString()} AED</span>
                </div>
                <div className="flex justify-between py-2.5 border-b border-neutral-100">
                  <span className="text-[14px] text-neutral-500">VAT (5%)</span>
                  <span className="text-[14px] font-medium text-neutral-900">{s.vat.toLocaleString()} AED</span>
                </div>
                <div className="flex justify-between py-2.5 border-b border-neutral-100">
                  <span className="text-[14px] text-neutral-500">Travel</span>
                  <span className="text-[14px] text-neutral-400">Not required</span>
                </div>
              </div>

              <div className={`rounded-xl p-4 ${s.color === 'blue' ? 'bg-blue-500' : 'bg-emerald-500'}`}>
                <div className="flex justify-between items-center">
                  <span className="text-white/80 text-[13px]">Total</span>
                  <span className="text-xl font-semibold text-white">{s.total.toLocaleString()} AED</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Combined + Included */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-6 md:p-8"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-[13px] font-medium text-neutral-400 uppercase tracking-wider mb-4">What's Included</h3>
              <div className="space-y-2.5">
                {included.map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-1">
                    <span className="text-[14px] text-neutral-700">{item.item}</span>
                    <span className={`text-[12px] px-2 py-0.5 rounded-full ${
                      item.speaker === 'Jos' ? 'bg-blue-50 text-blue-600' :
                      item.speaker === 'James' ? 'bg-emerald-50 text-emerald-600' :
                      'bg-neutral-100 text-neutral-600'
                    }`}>
                      {item.speaker}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="bg-neutral-900 rounded-xl p-6 text-center">
                <p className="text-neutral-400 text-[13px] mb-2">Combined Investment</p>
                <p className="text-3xl md:text-4xl font-semibold text-white">{combinedTotal.toLocaleString()} AED</p>
                <p className="text-neutral-500 text-[13px] mt-3">Two keynotes · Full frameworks · No travel costs</p>
              </div>

              <div className="mt-4 p-4 bg-neutral-50 rounded-xl">
                <p className="text-[13px] text-neutral-600">
                  <span className="font-medium">Contact:</span> Wilson (direct for both speakers, no agents)
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestmentSection;
