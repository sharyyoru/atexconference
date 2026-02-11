import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HeroNew = () => {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center pt-12 pb-16 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center"
        >
          <p className="text-[13px] text-neutral-500 tracking-wide mb-4">
            ATEX Conference 2026
          </p>
          
          <h1 className="text-[clamp(2.5rem,8vw,5rem)] font-semibold text-neutral-900 tracking-tight leading-[1.05] mb-6">
            Speaker Showcase
          </h1>
          
          <p className="text-[clamp(1rem,2.5vw,1.25rem)] text-neutral-500 max-w-xl mx-auto leading-relaxed mb-12">
            Two exceptional keynote speakers. One powerful event.
            <br className="hidden sm:block" />
            Compare their expertise and value.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-16">
            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="text-[2rem] sm:text-[2.5rem] font-semibold text-neutral-900">85K+</div>
                <div className="text-[13px] text-neutral-500">Global Reach</div>
              </div>
              <div className="w-px h-12 bg-neutral-200 hidden sm:block" />
              <div className="text-center">
                <div className="text-[2rem] sm:text-[2.5rem] font-semibold text-neutral-900">750+</div>
                <div className="text-[13px] text-neutral-500">Leaders Interviewed</div>
              </div>
              <div className="w-px h-12 bg-neutral-200 hidden sm:block" />
              <div className="text-center">
                <div className="text-[2rem] sm:text-[2.5rem] font-semibold text-neutral-900">Dubai</div>
                <div className="text-[13px] text-neutral-500">Both Based</div>
              </div>
            </div>
          </div>

          <motion.a
            href="#comparison"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-flex flex-col items-center text-neutral-400 hover:text-neutral-600 transition-colors"
          >
            <span className="text-[13px] mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroNew;
