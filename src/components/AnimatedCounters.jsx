import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Mic, Globe, Award } from 'lucide-react';

const CounterItem = ({ end, suffix, label, icon: Icon, color, delay }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className={`absolute inset-0 bg-gradient-to-r ${color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity`} />
      <div className="relative bg-slate-900/60 backdrop-blur-xl border border-slate-700 rounded-2xl p-8 text-center">
        <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${color} flex items-center justify-center`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <div className="text-4xl md:text-5xl font-black text-white mb-2">
          {count.toLocaleString()}{suffix}
        </div>
        <div className="text-slate-400">{label}</div>
      </div>
    </motion.div>
  );
};

const AnimatedCounters = () => {
  const stats = [
    { end: 85000, suffix: '+', label: 'Global Reach (Jos)', icon: Users, color: 'from-blue-500 to-cyan-400', delay: 0 },
    { end: 750, suffix: '+', label: 'Leaders Interviewed (James)', icon: Mic, color: 'from-orange-500 to-red-400', delay: 0.1 },
    { end: 100, suffix: 'K+', label: 'Combined Local Audience', icon: Globe, color: 'from-purple-500 to-pink-400', delay: 0.2 },
    { end: 2, suffix: '', label: 'Confirmed Direct Contacts', icon: Award, color: 'from-green-500 to-emerald-400', delay: 0.3 },
  ];

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/30 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">The "Proof" Section</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Combined influence metrics demonstrating the reach and impact of our selected speakers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <CounterItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedCounters;
