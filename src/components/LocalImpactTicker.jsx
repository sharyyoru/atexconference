import { motion } from 'framer-motion';

const LocalImpactTicker = () => {
  const tickerItems = [
    "James Taylor: Local PR Active",
    "Jos Dirkx: AI Strategy Expert for UAE Ministries",
    "Total Local Audience Reach: 100K+",
    "Direct Contact Confirmed: Both Speakers",
    "Post-Show Frameworks: Included",
    "UAE Resident Speaker: James Taylor",
    "Top 100 Woman in AI: Jos Dirkx",
    "ADNOC Partnership: Active",
    "Dubai Future Foundation: Strategic Advisor",
  ];

  return (
    <div className="py-4 bg-slate-900 border-y border-slate-800 overflow-hidden">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
        className="flex whitespace-nowrap"
      >
        {[...tickerItems, ...tickerItems].map((item, index) => (
          <span key={index} className="mx-8 text-sm text-slate-400">
            <span className="text-blue-400 mr-2">●</span>
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default LocalImpactTicker;
