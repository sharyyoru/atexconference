import { motion } from 'framer-motion';
import { Sparkles, Github, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-blue-400" />
              <span className="text-xl font-bold text-white">ATEX Conference</span>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              2026 Speaker Showcase - Internal Pitch Deck
            </p>
            <p className="text-slate-500 text-xs">
              Justifying investment through proof of influence, post-show value, and delegate quality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#comparison" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                  Comparison Matrix
                </a>
              </li>
              <li>
                <a href="#frameworks" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                  Framework Deep-Dive
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                  Cost Calculator
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                  Delegate Analysis
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div>
            <h4 className="text-white font-semibold mb-4">Speaker Contacts</h4>
            <div className="space-y-3">
              <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                <p className="text-blue-400 font-medium text-sm">Jos Dirkx</p>
                <p className="text-slate-500 text-xs">Direct Contact Confirmed</p>
              </div>
              <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                <p className="text-orange-400 font-medium text-sm">James Taylor</p>
                <p className="text-slate-500 text-xs">Direct Contact (with Maryam)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 ATEX Conference. Internal Document.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/sharyyoru/atexconference"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
