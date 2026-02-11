import { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Plane, Hotel, Car, Calculator, CheckCircle, Info } from 'lucide-react';

const InvestmentSection = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState('both');

  const speakers = {
    jos: {
      name: "Jos Dirkx",
      color: "blue",
      gradient: "from-blue-500 to-cyan-500",
      baseFee: 44040,
      vat: 2202,
      travel: 12000,
      hotel: 3600,
      transfers: 800,
      get total() { return this.baseFee + this.vat + this.travel + this.hotel + this.transfers; }
    },
    james: {
      name: "James Taylor",
      color: "teal", 
      gradient: "from-teal-500 to-emerald-500",
      baseFee: 53215,
      vat: 2661,
      travel: 3500,
      hotel: 3600,
      transfers: 800,
      get total() { return this.baseFee + this.vat + this.travel + this.hotel + this.transfers; }
    }
  };

  const combinedTotal = speakers.jos.total + speakers.james.total;

  const valueProps = [
    { label: "Human+ Era Framework", speaker: "Jos", included: true },
    { label: "SuperCollaboration Toolkit", speaker: "James", included: true },
    { label: "Post-Event Content Rights", speaker: "Both", included: true },
    { label: "Local PR Support", speaker: "James", included: true },
    { label: "Multimedia Performance", speaker: "Jos", included: true },
    { label: "Workshop Materials", speaker: "Both", included: true },
  ];

  return (
    <section id="costs" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
            <Calculator className="w-4 h-4" />
            <span>Investment Analysis</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Landed Cost Breakdown
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Complete cost transparency with all fees, travel, and accommodation in AED
          </p>
        </motion.div>

        {/* Toggle */}
        <div className="flex justify-center mb-8 md:mb-12">
          <div className="inline-flex bg-white rounded-xl p-1.5 shadow-sm border border-slate-200">
            {[
              { key: 'jos', label: 'Jos Dirkx' },
              { key: 'james', label: 'James Taylor' },
              { key: 'both', label: 'Combined' },
            ].map((opt) => (
              <button
                key={opt.key}
                onClick={() => setSelectedSpeaker(opt.key)}
                className={`px-4 sm:px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  selectedSpeaker === opt.key
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {/* Cost Cards */}
          {(selectedSpeaker === 'both' ? ['jos', 'james'] : [selectedSpeaker]).map((key) => {
            const s = speakers[key];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center`}>
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{s.name}</h3>
                    <p className="text-sm text-slate-500">Full Breakdown</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between py-2 border-b border-slate-100">
                    <span className="text-slate-600 text-sm">Speaker Fee</span>
                    <span className="font-medium text-slate-900">{s.baseFee.toLocaleString()} AED</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-100">
                    <span className="text-slate-600 text-sm">VAT (5%)</span>
                    <span className="font-medium text-slate-900">{s.vat.toLocaleString()} AED</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <Plane className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-600 text-sm">Flights (Business)</span>
                    </div>
                    <span className="font-medium text-slate-900">{s.travel.toLocaleString()} AED</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <Hotel className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-600 text-sm">Hotel (3 nights)</span>
                    </div>
                    <span className="font-medium text-slate-900">{s.hotel.toLocaleString()} AED</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <Car className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-600 text-sm">Transfers</span>
                    </div>
                    <span className="font-medium text-slate-900">{s.transfers.toLocaleString()} AED</span>
                  </div>
                </div>

                <div className={`bg-gradient-to-r ${s.gradient} rounded-xl p-4 text-center`}>
                  <span className="text-white/80 text-sm">Total Landed</span>
                  <div className="text-2xl md:text-3xl font-bold text-white">
                    {s.total.toLocaleString()} AED
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Value Proposition / Summary Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className={`bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 ${selectedSpeaker !== 'both' ? 'lg:col-span-2' : ''}`}
          >
            <h3 className="font-bold text-slate-900 mb-4 text-lg">What's Included</h3>
            
            <div className="space-y-3 mb-6">
              {valueProps.map((prop, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="text-slate-700 text-sm">{prop.label}</span>
                  <span className={`ml-auto text-xs px-2 py-1 rounded-full ${
                    prop.speaker === 'Jos' ? 'bg-blue-100 text-blue-700' :
                    prop.speaker === 'James' ? 'bg-teal-100 text-teal-700' :
                    'bg-purple-100 text-purple-700'
                  }`}>
                    {prop.speaker}
                  </span>
                </div>
              ))}
            </div>

            {selectedSpeaker === 'both' && (
              <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-5 text-center">
                <span className="text-slate-400 text-sm">Combined Investment</span>
                <div className="text-3xl md:text-4xl font-bold text-white mt-1">
                  {combinedTotal.toLocaleString()} AED
                </div>
                <p className="text-slate-400 text-xs mt-2">
                  Two premium keynotes with full post-show materials
                </p>
              </div>
            )}

            <div className="mt-6 flex items-start gap-2 p-4 bg-amber-50 rounded-xl border border-amber-200">
              <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-xs text-amber-800">
                <strong>Note:</strong> James Taylor is UAE-based, significantly reducing travel costs. Both speakers have confirmed direct contact without agent intermediaries.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;
