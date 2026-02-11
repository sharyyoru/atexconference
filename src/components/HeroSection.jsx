import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-orange-600/20 via-transparent to-transparent" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-slate-300">ATEX Conference 2026 • Speaker Showcase</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            <span className="gradient-text">Show & Tell</span>
            <br />
            <span className="text-white">Internal Pitch Deck</span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Justifying investment through proof of influence, post-show value, and delegate quality
          </p>
        </motion.div>

        {/* Split Screen Speaker Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Jos Dirkx Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
            <div className="relative bg-slate-900/80 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-8 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Jos Dirkx</h3>
                  <p className="text-blue-400 text-sm">AI Headliner</p>
                </div>
              </div>
              
              <p className="text-slate-300 mb-6 italic">
                "The Multimedia AI Strategist: Transforming Education through the Human+ Era."
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-blue-400" />
                  <span className="text-slate-400">Top 100 Woman in AI</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-blue-400" />
                  <span className="text-slate-400">Dubai Future Foundation Advisor</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-blue-400" />
                  <span className="text-slate-400">85,000+ Global Reach</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-slate-700">
                <span className="text-3xl font-bold text-blue-400">~60,000 AED</span>
                <span className="text-slate-500 text-sm ml-2">Landed Cost</span>
              </div>
            </div>
          </motion.div>

          {/* James Taylor Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
            <div className="relative bg-slate-900/80 backdrop-blur-xl border border-orange-500/30 rounded-2xl p-8 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-400 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">James Taylor</h3>
                  <p className="text-orange-400 text-sm">HR Keynote</p>
                </div>
              </div>
              
              <p className="text-slate-300 mb-6 italic">
                "The Creativity Futurist: Bridging HR and AI through SuperCollaboration."
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-orange-400" />
                  <span className="text-slate-400">UAE/UK Resident</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-orange-400" />
                  <span className="text-slate-400">ADNOC & Al-Futtaim Partner</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-orange-400" />
                  <span className="text-slate-400">750+ Leaders Interviewed</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-slate-700">
                <span className="text-3xl font-bold text-orange-400">~75,000 AED</span>
                <span className="text-slate-500 text-sm ml-2">Landed Cost</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center gap-2 text-slate-500"
          >
            <span className="text-sm">Scroll to explore</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
