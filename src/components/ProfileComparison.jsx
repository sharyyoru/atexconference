import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Star, CheckCircle, MapPin, Users, Briefcase } from 'lucide-react';

const ProfileComparison = () => {
  const speakers = {
    jos: {
      name: "Jos Dirkx",
      role: "AI & Education Headliner",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
      color: "blue",
      tagline: "The Multimedia AI Strategist",
      rating: 4.8,
      badge: "Top 100 Women in AI"
    },
    james: {
      name: "James Taylor",
      role: "HR & Creativity Keynote",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      color: "teal",
      tagline: "The Creativity Futurist",
      rating: 4.7,
      badge: "UAE/UK Resident"
    }
  };

  const metrics = [
    { label: "Global Reach", jos: 95, james: 85, josValue: "85K+", jamesValue: "50K+", josTrend: 5, jamesTrend: 3 },
    { label: "UAE Influence", jos: 88, james: 98, josValue: "High", jamesValue: "Extreme", josTrend: 3, jamesTrend: 5 },
    { label: "C-Suite Access", jos: 92, james: 85, josValue: "Excellent", jamesValue: "Strong", josTrend: 4, jamesTrend: 2 },
    { label: "Post-Show Value", jos: 90, james: 95, josValue: "Framework", jamesValue: "PR + Toolkit", josTrend: 3, jamesTrend: 5 },
    { label: "Engagement Style", jos: 95, james: 88, josValue: "Multimedia", jamesValue: "Workshop", josTrend: 5, jamesTrend: 4 },
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    return (
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < fullStars ? 'text-yellow-400 fill-yellow-400' :
              i === fullStars && hasHalf ? 'text-yellow-400 fill-yellow-400/50' :
              'text-slate-300'
            }`}
          />
        ))}
        <span className="ml-2 text-sm font-medium text-slate-600">{rating}</span>
      </div>
    );
  };

  return (
    <section id="comparison" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Profile Comparison
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Side-by-side analysis of speaker qualifications, reach, and value
          </p>
        </motion.div>

        {/* Main Comparison Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-slate-50 rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-sm border border-slate-200"
        >
          {/* Header with Profiles */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12">
            {/* Jos Profile */}
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-3 md:mb-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full overflow-hidden ring-4 ring-blue-500 ring-offset-2 ring-offset-slate-50">
                  <img 
                    src={speakers.jos.avatar} 
                    alt={speakers.jos.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 md:w-8 md:h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
              </div>
              <div className="bg-blue-500 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-2">
                {speakers.jos.name}
              </div>
              <p className="text-xs md:text-sm text-slate-500 mb-1 hidden sm:block">{speakers.jos.role}</p>
              <span className="text-xs text-blue-600 font-medium hidden md:block">{speakers.jos.badge}</span>
            </div>

            {/* Center Labels */}
            <div className="flex flex-col items-center justify-center">
              <span className="text-xs md:text-sm font-medium text-slate-400 uppercase tracking-wider">VS</span>
            </div>

            {/* James Profile */}
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-3 md:mb-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full overflow-hidden ring-4 ring-teal-500 ring-offset-2 ring-offset-slate-50">
                  <img 
                    src={speakers.james.avatar} 
                    alt={speakers.james.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 md:w-8 md:h-8 bg-teal-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
              </div>
              <div className="bg-teal-500 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-2">
                {speakers.james.name}
              </div>
              <p className="text-xs md:text-sm text-slate-500 mb-1 hidden sm:block">{speakers.james.role}</p>
              <span className="text-xs text-teal-600 font-medium hidden md:block">{speakers.james.badge}</span>
            </div>
          </div>

          {/* Metrics Comparison */}
          <div className="space-y-4 md:space-y-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="grid grid-cols-3 gap-2 md:gap-4 items-center"
              >
                {/* Jos Bar */}
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="hidden sm:flex items-center gap-1 text-xs md:text-sm font-medium min-w-[40px]">
                    {metric.josTrend > 0 && <TrendingUp className="w-3 h-3 md:w-4 md:h-4 text-green-500" />}
                    <span className="text-green-600">+{metric.josTrend}</span>
                  </div>
                  <div className="flex-1 h-8 md:h-10 bg-slate-200 rounded-lg overflow-hidden flex items-center justify-end">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${metric.jos}%` }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg flex items-center justify-end px-2 md:px-3"
                    >
                      <span className="text-white text-xs md:text-sm font-bold">{metric.jos}%</span>
                    </motion.div>
                  </div>
                </div>

                {/* Center Label */}
                <div className="text-center">
                  <span className="text-xs md:text-sm font-medium text-slate-700">{metric.label}</span>
                </div>

                {/* James Bar */}
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="flex-1 h-8 md:h-10 bg-slate-200 rounded-lg overflow-hidden flex items-center">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${metric.james}%` }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-teal-500 to-teal-400 rounded-lg flex items-center px-2 md:px-3"
                    >
                      <span className="text-white text-xs md:text-sm font-bold">{metric.james}%</span>
                    </motion.div>
                  </div>
                  <div className="hidden sm:flex items-center gap-1 text-xs md:text-sm font-medium min-w-[40px]">
                    <span className="text-green-600">+{metric.jamesTrend}</span>
                    {metric.jamesTrend > 0 && <TrendingUp className="w-3 h-3 md:w-4 md:h-4 text-green-500" />}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Rating Footer */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-12 pt-6 md:pt-8 border-t border-slate-200">
            <div className="text-center">
              <p className="text-xs text-slate-500 mb-2 hidden sm:block">{speakers.jos.tagline}</p>
              <div className="flex justify-center">
                {renderStars(speakers.jos.rating)}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-sm md:text-base font-bold text-slate-900">Profile Rating</span>
            </div>
            <div className="text-center">
              <p className="text-xs text-slate-500 mb-2 hidden sm:block">{speakers.james.tagline}</p>
              <div className="flex justify-center">
                {renderStars(speakers.james.rating)}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quick Info Cards */}
        <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mt-8 md:mt-12">
          {/* Jos Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-5 md:p-6 border border-blue-200"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center shrink-0">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Jos Dirkx</h3>
                <p className="text-sm text-slate-600 mb-3">Direct contact confirmed. Advisor to Dubai Future Foundation.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-700 rounded text-xs font-medium">AI Ethics</span>
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-700 rounded text-xs font-medium">Education</span>
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-700 rounded text-xs font-medium">Multimedia</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* James Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-5 md:p-6 border border-teal-200"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal-500 flex items-center justify-center shrink-0">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">James Taylor</h3>
                <p className="text-sm text-slate-600 mb-3">UAE resident. Strategic partner for ADNOC & Al-Futtaim Group.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-teal-500/10 text-teal-700 rounded text-xs font-medium">HR Innovation</span>
                  <span className="px-2 py-1 bg-teal-500/10 text-teal-700 rounded text-xs font-medium">Creativity</span>
                  <span className="px-2 py-1 bg-teal-500/10 text-teal-700 rounded text-xs font-medium">Local PR</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProfileComparison;
