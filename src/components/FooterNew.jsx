const FooterNew = () => {
  return (
    <footer className="py-12 md:py-16 bg-white border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-2">
            <p className="text-[15px] font-semibold text-neutral-900 mb-2">ATEX Conference 2026</p>
            <p className="text-[13px] text-neutral-500 mb-4">Internal Pitch Deck for Speaker Selection</p>
            <p className="text-[13px] text-neutral-400">
              Contact: <span className="text-neutral-600">Wilson</span> (direct for both speakers)
            </p>
          </div>

          <div>
            <p className="text-[13px] font-medium text-neutral-400 uppercase tracking-wider mb-4">Navigate</p>
            <ul className="space-y-2.5">
              <li><a href="#comparison" className="text-[14px] text-neutral-600 hover:text-neutral-900 transition-colors">Compare</a></li>
              <li><a href="#topics" className="text-[14px] text-neutral-600 hover:text-neutral-900 transition-colors">Expertise</a></li>
              <li><a href="#panels" className="text-[14px] text-neutral-600 hover:text-neutral-900 transition-colors">Sessions</a></li>
              <li><a href="#costs" className="text-[14px] text-neutral-600 hover:text-neutral-900 transition-colors">Investment</a></li>
            </ul>
          </div>

          <div>
            <p className="text-[13px] font-medium text-neutral-400 uppercase tracking-wider mb-4">Speakers</p>
            <div className="space-y-3">
              <div>
                <p className="text-[14px] font-medium text-neutral-900">Jos Dirkx</p>
                <p className="text-[12px] text-neutral-500">Education & AI · Dubai</p>
              </div>
              <div>
                <p className="text-[14px] font-medium text-neutral-900">James Taylor</p>
                <p className="text-[12px] text-neutral-500">HR & Creativity · Dubai</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-neutral-400">
            © 2026 ATEX Conference · Internal Document
          </p>
          <p className="text-[12px] text-neutral-400">
            Version 2.0 · Feb 2026
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterNew;
