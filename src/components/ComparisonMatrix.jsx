import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, DollarSign, Users, Award, Music, Newspaper, MapPin, Phone, Target, Briefcase } from 'lucide-react';

const ComparisonMatrix = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState('jos');

  const speakers = {
    jos: {
      name: "Jos Dirkx",
      role: "AI Headliner",
      tagline: "The Multimedia AI Strategist: Transforming Education through the Human+ Era.",
      color: "blue",
      gradient: "from-blue-500 to-cyan-400",
      baseFee: 44040,
      vat: 2202,
      totalBase: 46242,
      travelEst: 14000,
      totalLanded: 60000,
      directContact: "Confirmed. Direct meeting; style confirmed.",
      uaeInfluence: "High. Advisor to Dubai Future Foundation; 'Top 100 Woman in AI' in the region.",
      pastEvents: "85,000+ reached globally; HSBC, Google, Sony.",
      delegateLevel: "Ministries & C-Suite. Focus on AI Ethics & Future.",
      valueAdd: "Integrated live music/multimedia engagement.",
      postShowAsset: "Human+ Era Framework",
      clients: ["Dubai Future Foundation", "Evolvence Knowledge Investments", "Google", "Sony", "HSBC"],
      quote: { text: "Jos brings a revolutionary approach to AI education that resonates deeply with decision-makers.", author: "Peter Diamandis" }
    },
    james: {
      name: "James Taylor",
      role: "HR Keynote",
      tagline: "The Creativity Futurist: Bridging HR and AI through SuperCollaboration.",
      color: "orange",
      gradient: "from-orange-500 to-red-400",
      baseFee: 53215,
      vat: 2660.75,
      totalBase: 55875.75,
      travelEst: 19000,
      totalLanded: 75000,
      directContact: "Confirmed. Direct meeting with Maryam; alignment on PR.",
      uaeInfluence: "Extreme. UAE/UK Resident; strategic partner for ADNOC & Al-Futtaim.",
      pastEvents: "Tens of thousands; Apple, IBM, Deloitte.",
      delegateLevel: "HR Directors & Decision Makers. Focus on Collaboration.",
      valueAdd: "Local PR, Newspaper features, Content creation.",
      postShowAsset: "SuperCollaboration HR Toolkit",
      clients: ["ADNOC", "Al-Futtaim Group", "Abu Dhabi Convention Bureau", "Apple", "IBM", "Deloitte"],
      quote: { text: "James transformed our approach to human-AI collaboration. His frameworks are now embedded in our HR strategy.", author: "HR Director, Al-Futtaim Group" }
    }
  };

  const s = speakers[selectedSpeaker];
  const colorClasses = {
    blue: {
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/30',
      text: 'text-blue-400',
      glow: 'shadow-blue-500/20',
      button: 'bg-blue-600 hover:bg-blue-700'
    },
    orange: {
      bg: 'bg-orange-500/10',
      border: 'border-orange-500/30',
      text: 'text-orange-400',
      glow: 'shadow-orange-500/20',
      button: 'bg-orange-600 hover:bg-orange-700'
    }
  };
  const colors = colorClasses[s.color];

  return (
    <section id="comparison" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Interactive Comparison Matrix</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Side-by-side analysis focusing on Post-Show ROI and requirement fulfillment
          </p>
        </motion.div>

        {/* Speaker Toggle */}
        <div className="flex justify-center gap-4 mb-12">
          {Object.keys(speakers).map(key => (
            <button
              key={key}
              onClick={() => setSelectedSpeaker(key)}
              className={`px-8 py-4 rounded-xl font-bold transition-all duration-300 ${
                selectedSpeaker === key 
                  ? `bg-gradient-to-r ${speakers[key].gradient} text-white shadow-lg scale-105` 
                  : "bg-slate-800 text-slate-400 border border-slate-700 hover:bg-slate-700"
              }`}
            >
              {speakers[key].name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedSpeaker}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-3 gap-8"
          >
            {/* Left: Speaker Info & Requirements */}
            <div className="lg:col-span-2 space-y-6">
              {/* Header Card */}
              <div className={`${colors.bg} ${colors.border} border rounded-2xl p-6`}>
                <div className="flex items-start gap-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${s.gradient} flex items-center justify-center shrink-0`}>
                    <span className="text-2xl font-bold text-white">{s.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{s.name}</h3>
                    <p className={colors.text}>{s.role}</p>
                    <p className="text-slate-300 mt-2 italic">"{s.tagline}"</p>
                  </div>
                </div>
              </div>

              {/* Requirements Grid */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Phone className={`w-5 h-5 ${colors.text}`} />
                    <h4 className="font-semibold text-white">Req 1: Direct Contact</h4>
                  </div>
                  <p className="text-slate-400 text-sm">{s.directContact}</p>
                  <div className="mt-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 text-sm">Verified</span>
                  </div>
                </div>

                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className={`w-5 h-5 ${colors.text}`} />
                    <h4 className="font-semibold text-white">Req 2: UAE Influence</h4>
                  </div>
                  <p className="text-slate-400 text-sm">{s.uaeInfluence}</p>
                  <div className="mt-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 text-sm">Strong Presence</span>
                  </div>
                </div>

                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Users className={`w-5 h-5 ${colors.text}`} />
                    <h4 className="font-semibold text-white">Req 3: Past Events</h4>
                  </div>
                  <p className="text-slate-400 text-sm">{s.pastEvents}</p>
                  <div className="mt-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 text-sm">High Volume</span>
                  </div>
                </div>

                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Target className={`w-5 h-5 ${colors.text}`} />
                    <h4 className="font-semibold text-white">Req 4: Delegate Level</h4>
                  </div>
                  <p className="text-slate-400 text-sm">{s.delegateLevel}</p>
                  <div className="mt-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 text-sm">C-Level Access</span>
                  </div>
                </div>

                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Award className={`w-5 h-5 ${colors.text}`} />
                    <h4 className="font-semibold text-white">Req 5: Value Add</h4>
                  </div>
                  <p className="text-slate-400 text-sm">{s.valueAdd}</p>
                  <div className="mt-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 text-sm">Premium Content</span>
                  </div>
                </div>

                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Briefcase className={`w-5 h-5 ${colors.text}`} />
                    <h4 className="font-semibold text-white">Req 6: Post-Show</h4>
                  </div>
                  <p className="text-slate-400 text-sm">{s.postShowAsset}</p>
                  <div className="mt-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 text-sm">Framework Included</span>
                  </div>
                </div>
              </div>

              {/* Quote Card */}
              <div className={`${colors.bg} ${colors.border} border rounded-2xl p-6`}>
                <div className="flex gap-4">
                  <div className={`text-4xl ${colors.text}`}>"</div>
                  <div>
                    <p className="text-slate-300 italic mb-3">{s.quote.text}</p>
                    <p className={`${colors.text} font-medium`}>— {s.quote.author}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Cost Breakdown */}
            <div className="space-y-6">
              <div className="bg-slate-950 border border-slate-700 rounded-2xl p-6 sticky top-6">
                <h3 className="flex items-center gap-2 text-xl font-bold text-white mb-6">
                  <DollarSign className={colors.text} />
                  Landed Cost (AED)
                </h3>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center py-3 border-b border-slate-800">
                    <span className="text-slate-400">Speaker Fee</span>
                    <span className="text-white font-mono">{s.baseFee.toLocaleString()} AED</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-slate-800">
                    <span className="text-slate-400">VAT (5%)</span>
                    <span className="text-white font-mono">{s.vat.toLocaleString()} AED</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-slate-800">
                    <span className="text-slate-400">Total Base</span>
                    <span className="text-white font-mono">{s.totalBase.toLocaleString()} AED</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-slate-800">
                    <span className="text-slate-400">Travel/Hotel Est.</span>
                    <span className="text-white font-mono">~{s.travelEst.toLocaleString()} AED</span>
                  </div>
                </div>

                <div className={`${colors.bg} ${colors.border} border rounded-xl p-4`}>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300 font-medium">Total Landed</span>
                    <span className={`text-2xl font-bold ${colors.text}`}>~{s.totalLanded.toLocaleString()} AED</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-800">
                  <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Key Clients</h4>
                  <div className="flex flex-wrap gap-2">
                    {s.clients.map((client, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-300">
                        {client}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-800">
                  <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Post-Show Deliverable</h4>
                  <div className={`${colors.bg} ${colors.border} border rounded-lg p-4`}>
                    <p className={`${colors.text} font-bold`}>{s.postShowAsset}</p>
                    <p className="text-slate-500 text-xs mt-1">Included in fee as per direct negotiations</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ComparisonMatrix;
