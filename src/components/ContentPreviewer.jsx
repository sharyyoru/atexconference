import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, ExternalLink, Video, Music, Mic } from 'lucide-react';

const ContentPreviewer = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [isMuted, setIsMuted] = useState(true);

  const contentItems = [
    {
      id: 1,
      speaker: "Jos Dirkx",
      title: "AI & The Human+ Era",
      type: "Keynote",
      duration: "45 min",
      thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      videoUrl: "#",
      color: "blue",
      gradient: "from-blue-500 to-cyan-400",
      icon: Video,
      description: "Multimedia keynote with integrated live music performance",
      highlights: ["Live AI demonstrations", "Musical interludes", "Interactive audience polling"]
    },
    {
      id: 2,
      speaker: "Jos Dirkx",
      title: "Integrated Multimedia Experience",
      type: "Performance",
      duration: "15 min",
      thumbnail: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&h=400&fit=crop",
      videoUrl: "#",
      color: "blue",
      gradient: "from-blue-500 to-cyan-400",
      icon: Music,
      description: "Signature live music integration with AI-generated visuals",
      highlights: ["Original compositions", "AI-synced visuals", "Immersive audio"]
    },
    {
      id: 3,
      speaker: "James Taylor",
      title: "SuperCollaboration Workshop",
      type: "Workshop",
      duration: "90 min",
      thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      videoUrl: "#",
      color: "orange",
      gradient: "from-orange-500 to-red-400",
      icon: Mic,
      description: "Interactive workshop on human-AI collaboration strategies",
      highlights: ["Group exercises", "Framework implementation", "Case studies"]
    },
    {
      id: 4,
      speaker: "James Taylor",
      title: "750+ Leaders Interview Highlights",
      type: "Content Reel",
      duration: "5 min",
      thumbnail: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=600&h=400&fit=crop",
      videoUrl: "#",
      color: "orange",
      gradient: "from-orange-500 to-red-400",
      icon: Video,
      description: "Curated insights from interviews with global creative minds",
      highlights: ["CEO perspectives", "Innovation insights", "PR-ready content"]
    },
  ];

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-900/20 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 mb-4">
            <Video className="w-4 h-4 text-pink-400" />
            <span className="text-sm text-slate-300">Content Library</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Content Previewer</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Video-heavy section showcasing integrated multimedia clips and speaker content
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {contentItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`relative bg-slate-900/80 border border-slate-700 rounded-2xl overflow-hidden hover:border-${item.color === 'blue' ? 'blue' : 'orange'}-500/50 transition-colors`}>
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={() => setActiveVideo(activeVideo === item.id ? null : item.id)}
                      className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.gradient} flex items-center justify-center shadow-lg hover:scale-110 transition-transform`}
                    >
                      {activeVideo === item.id ? (
                        <Pause className="w-6 h-6 text-white" />
                      ) : (
                        <Play className="w-6 h-6 text-white ml-1" />
                      )}
                    </button>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4 px-2 py-1 bg-black/60 rounded text-xs text-white">
                    {item.duration}
                  </div>

                  {/* Type Badge */}
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${item.gradient} text-white`}>
                    {item.type}
                  </div>
                </div>

                {/* Content Info */}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <item.icon className={`w-4 h-4 ${item.color === 'blue' ? 'text-blue-400' : 'text-orange-400'}`} />
                    <span className={`text-sm ${item.color === 'blue' ? 'text-blue-400' : 'text-orange-400'}`}>
                      {item.speaker}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm mb-4">{item.description}</p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {item.highlights.map((highlight, i) => (
                      <span 
                        key={i} 
                        className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-400"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Rider Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-slate-900/50 border border-slate-700 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-6 text-center">Technical Rider Integration</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-blue-500/10 border border-blue-500/30 rounded-xl">
                <div className="flex items-center gap-2 mb-3">
                  <Music className="w-5 h-5 text-blue-400" />
                  <h4 className="font-semibold text-blue-400">Jos Dirkx Requirements</h4>
                </div>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    High-end AV synchronization system
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    XLR inputs for live music elements
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    High-lumen projectors (min 10,000 ANSI)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    Dedicated sound engineer on-site
                  </li>
                </ul>
              </div>

              <div className="p-5 bg-orange-500/10 border border-orange-500/30 rounded-xl">
                <div className="flex items-center gap-2 mb-3">
                  <Video className="w-5 h-5 text-orange-400" />
                  <h4 className="font-semibold text-orange-400">James Taylor Requirements</h4>
                </div>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                    High-quality video recording setup
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                    Content promotion kit for local PR
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                    Interview booth for post-session content
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                    Social media live streaming capability
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContentPreviewer;
