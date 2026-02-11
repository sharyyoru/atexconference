import { motion } from 'framer-motion';
import { ArrowDown, Users, Award, Target } from 'lucide-react';

const HeroNew = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            <span>ATEX Conference 2026 • Internal Pitch Deck</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6">
            Speaker
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"> Showcase</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            Comparing two exceptional keynote speakers for your event's success
          </p>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm">
            <div className="flex items-center gap-2 text-slate-600">
              <Users className="w-4 h-4 text-blue-600" />
              <span>Direct Contact Confirmed</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Target className="w-4 h-4 text-orange-500" />
              <span>UAE Presence Verified</span>
            </div>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mb-12"
        >
          {[
            { value: '85K+', label: 'Global Reach', color: 'blue' },
            { value: '750+', label: 'Leaders Interviewed', color: 'orange' },
            { value: '2', label: 'Direct Contacts', color: 'green' },
            { value: '100%', label: 'UAE Verified', color: 'purple' },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-slate-200 text-center">
              <div className={`text-2xl md:text-3xl font-bold ${
                stat.color === 'blue' ? 'text-blue-600' :
                stat.color === 'orange' ? 'text-orange-500' :
                stat.color === 'green' ? 'text-green-600' : 'text-purple-600'
              }`}>
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center"
        >
          <motion.a
            href="#comparison"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <span className="text-sm">Explore Speakers</span>
            <ArrowDown className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroNew;
