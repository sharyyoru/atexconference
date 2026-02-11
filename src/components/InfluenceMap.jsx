import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Building2, Landmark } from 'lucide-react';

const InfluenceMap = () => {
  const [activeLocation, setActiveLocation] = useState(null);

  const locations = [
    { 
      id: 1, 
      name: "Dubai Future Foundation", 
      speaker: "Jos Dirkx",
      type: "Government",
      x: 62, 
      y: 45,
      color: "blue",
      description: "Strategic AI advisory role for future initiatives"
    },
    { 
      id: 2, 
      name: "Evolvence Knowledge", 
      speaker: "Jos Dirkx",
      type: "Investment",
      x: 58, 
      y: 52,
      color: "blue",
      description: "Knowledge investment partnerships"
    },
    { 
      id: 3, 
      name: "ADNOC HQ", 
      speaker: "James Taylor",
      type: "Energy",
      x: 35, 
      y: 38,
      color: "orange",
      description: "HR transformation and creativity workshops"
    },
    { 
      id: 4, 
      name: "Al-Futtaim Group", 
      speaker: "James Taylor",
      type: "Conglomerate",
      x: 65, 
      y: 58,
      color: "orange",
      description: "SuperCollaboration framework implementation"
    },
    { 
      id: 5, 
      name: "Abu Dhabi Convention Bureau", 
      speaker: "James Taylor",
      type: "Government",
      x: 30, 
      y: 45,
      color: "orange",
      description: "Event partnership and local PR support"
    },
    { 
      id: 6, 
      name: "Saudi Arabia (Riyadh)", 
      speaker: "Jos Dirkx",
      type: "Regional",
      x: 15, 
      y: 35,
      color: "blue",
      description: "AI education initiatives in the Kingdom"
    },
  ];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 mb-4">
            <MapPin className="w-4 h-4 text-green-400" />
            <span className="text-sm text-slate-300">Regional Presence</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">The Influence Map</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Visual representation of UAE & regional client footprint
          </p>
        </motion.div>

        {/* Legend */}
        <div className="flex justify-center gap-8 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-blue-500" />
            <span className="text-slate-400 text-sm">Jos Dirkx</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-orange-500" />
            <span className="text-slate-400 text-sm">James Taylor</span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Stylized UAE Map */}
          <div className="relative bg-slate-800/50 border border-slate-700 rounded-3xl p-8 aspect-video">
            {/* Map Background Pattern */}
            <div className="absolute inset-0 opacity-30">
              <svg viewBox="0 0 100 60" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                {/* Simplified UAE outline */}
                <path
                  d="M10,35 Q15,25 25,30 L40,28 Q50,25 60,30 L75,35 Q85,40 80,50 L70,55 Q55,60 40,55 L25,50 Q15,45 10,35 Z"
                  fill="none"
                  stroke="rgba(59, 130, 246, 0.3)"
                  strokeWidth="0.5"
                />
                {/* Abu Dhabi region */}
                <ellipse cx="30" cy="42" rx="15" ry="10" fill="rgba(59, 130, 246, 0.1)" />
                {/* Dubai region */}
                <ellipse cx="62" cy="48" rx="12" ry="8" fill="rgba(249, 115, 22, 0.1)" />
              </svg>
            </div>

            {/* City Labels */}
            <div className="absolute left-[28%] top-[60%] text-slate-500 text-xs font-medium">
              Abu Dhabi
            </div>
            <div className="absolute left-[58%] top-[65%] text-slate-500 text-xs font-medium">
              Dubai
            </div>
            <div className="absolute left-[10%] top-[25%] text-slate-500 text-xs font-medium">
              Saudi Arabia
            </div>

            {/* Location Markers */}
            {locations.map((loc) => (
              <motion.div
                key={loc.id}
                className="absolute cursor-pointer"
                style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                whileHover={{ scale: 1.2 }}
                onMouseEnter={() => setActiveLocation(loc)}
                onMouseLeave={() => setActiveLocation(null)}
              >
                <div className={`relative`}>
                  <div className={`w-4 h-4 rounded-full ${loc.color === 'blue' ? 'bg-blue-500' : 'bg-orange-500'} animate-pulse`} />
                  <div className={`absolute inset-0 w-4 h-4 rounded-full ${loc.color === 'blue' ? 'bg-blue-500' : 'bg-orange-500'} animate-ping opacity-30`} />
                </div>
              </motion.div>
            ))}

            {/* Active Location Tooltip */}
            {activeLocation && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`absolute z-20 bg-slate-900 border ${activeLocation.color === 'blue' ? 'border-blue-500/50' : 'border-orange-500/50'} rounded-xl p-4 shadow-xl max-w-xs`}
                style={{ 
                  left: `${Math.min(activeLocation.x + 5, 70)}%`, 
                  top: `${activeLocation.y}%`,
                  transform: 'translateY(-50%)'
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  {activeLocation.type === 'Government' ? (
                    <Landmark className={`w-4 h-4 ${activeLocation.color === 'blue' ? 'text-blue-400' : 'text-orange-400'}`} />
                  ) : (
                    <Building2 className={`w-4 h-4 ${activeLocation.color === 'blue' ? 'text-blue-400' : 'text-orange-400'}`} />
                  )}
                  <span className={`text-sm font-bold ${activeLocation.color === 'blue' ? 'text-blue-400' : 'text-orange-400'}`}>
                    {activeLocation.name}
                  </span>
                </div>
                <p className="text-slate-400 text-xs mb-2">{activeLocation.description}</p>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-500">Speaker:</span>
                  <span className="text-xs text-white font-medium">{activeLocation.speaker}</span>
                </div>
              </motion.div>
            )}
          </div>

          {/* Location List */}
          <div className="grid md:grid-cols-2 gap-4 mt-8">
            {locations.map((loc) => (
              <motion.div
                key={loc.id}
                whileHover={{ scale: 1.02 }}
                className={`p-4 rounded-xl border transition-colors cursor-pointer ${
                  activeLocation?.id === loc.id
                    ? loc.color === 'blue' 
                      ? 'bg-blue-500/10 border-blue-500/50' 
                      : 'bg-orange-500/10 border-orange-500/50'
                    : 'bg-slate-800/50 border-slate-700 hover:border-slate-600'
                }`}
                onMouseEnter={() => setActiveLocation(loc)}
                onMouseLeave={() => setActiveLocation(null)}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${loc.color === 'blue' ? 'bg-blue-500' : 'bg-orange-500'}`} />
                  <div>
                    <h4 className="text-white font-medium text-sm">{loc.name}</h4>
                    <p className="text-slate-500 text-xs">{loc.speaker} • {loc.type}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InfluenceMap;
