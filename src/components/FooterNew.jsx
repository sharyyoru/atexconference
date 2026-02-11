import { Sparkles, Github, ExternalLink, Mail, Phone } from 'lucide-react';

const FooterNew = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg">ATEX 2026</span>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              Internal Pitch Deck for Speaker Selection
            </p>
            <a
              href="https://github.com/sharyyoru/atexconference"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              View on GitHub
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#comparison" className="text-slate-400 hover:text-white transition-colors">Comparison</a></li>
              <li><a href="#topics" className="text-slate-400 hover:text-white transition-colors">Topics</a></li>
              <li><a href="#panels" className="text-slate-400 hover:text-white transition-colors">Panels</a></li>
              <li><a href="#costs" className="text-slate-400 hover:text-white transition-colors">Investment</a></li>
            </ul>
          </div>

          {/* Speaker Contacts */}
          <div>
            <h4 className="font-semibold mb-4">Speaker Contacts</h4>
            <div className="space-y-3 text-sm">
              <div className="p-3 bg-slate-800 rounded-lg">
                <p className="text-blue-400 font-medium">Jos Dirkx</p>
                <p className="text-slate-500 text-xs">Direct Contact Confirmed</p>
              </div>
              <div className="p-3 bg-slate-800 rounded-lg">
                <p className="text-teal-400 font-medium">James Taylor</p>
                <p className="text-slate-500 text-xs">Contact via Maryam</p>
              </div>
            </div>
          </div>

          {/* Document Info */}
          <div>
            <h4 className="font-semibold mb-4">Document Info</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Version: 2.0</li>
              <li>Last Updated: Feb 2026</li>
              <li>Status: Internal</li>
              <li>Event: ATEX Conference</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center sm:text-left">
            © 2026 ATEX Conference. Internal Document - Not for Distribution.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-slate-600">
              Built with React + Tailwind CSS
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterNew;
