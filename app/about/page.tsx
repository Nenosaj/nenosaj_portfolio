'use client';

import { motion } from "framer-motion";

const interests = [
  { icon: "🎮", label: "Gaming", color: "from-purple-500 to-pink-500" },
  { icon: "🎵", label: "Music", color: "from-blue-500 to-cyan-500" },
  { icon: "☕", label: "Coffee", color: "from-orange-500 to-red-500" },
  { icon: "🚀", label: "Space", color: "from-indigo-500 to-purple-500" },
];

function About() {
  return (
    <div className="min-h-screen px-4 lg:px-8 py-32 lg:pr-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full mb-6">
            <span className="text-sm text-blue-300 font-medium">The Human Behind the Screen</span>
          </div>
          
          <h1 className="text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="block text-white">Nice to</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500">
              Meet You! 👋
            </span>
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl">
              <div className="prose prose-invert prose-lg max-w-none">
                <p className="text-slate-300 leading-relaxed text-xl">
                  Yo! I'm Jason, a developer who accidentally fell into web development and never looked back. 
                  Started with a "Hello World" and somehow ended up building entire digital universes 🌌
                </p>
                
                <p className="text-slate-400 leading-relaxed">
                  I'm that person who gets excited about perfectly aligned pixels and smooth animations. 
                  Some call it obsessive, I call it... well, also obsessive, but in a productive way!
                </p>

                <p className="text-slate-400 leading-relaxed">
                  When I'm not debugging at 3 AM (which is more often than I'd like to admit), 
                  you'll find me experimenting with new tech, contributing to open source, or explaining 
                  to non-devs why "just making it responsive" isn't actually "just" anything.
                </p>
              </div>
            </div>

            {/* Interests */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  className={`p-6 bg-gradient-to-br ${interest.color} rounded-3xl text-center cursor-pointer shadow-xl`}
                >
                  <div className="text-5xl mb-2">{interest.icon}</div>
                  <div className="text-white font-bold">{interest.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Fun Facts */}
            <div className="p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-400/30 rounded-3xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span>🎯</span> Random Facts About Me
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🌙</span>
                  <div>
                    <div className="text-white font-semibold">Night Owl</div>
                    <div className="text-slate-400">Best code happens after midnight</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎨</span>
                  <div>
                    <div className="text-white font-semibold">Design Nerd</div>
                    <div className="text-slate-400">I notice when buttons are 1px off</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🤝</span>
                  <div>
                    <div className="text-white font-semibold">Team Player</div>
                    <div className="text-slate-400">Collaboration {'>'} Solo missions</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📚</span>
                  <div>
                    <div className="text-white font-semibold">Forever Learning</div>
                    <div className="text-slate-400">Tech moves fast, so do I</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Side Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* Stats */}
            <div className="p-8 bg-gradient-to-br from-slate-800 to-slate-800/50 border border-slate-700 rounded-3xl">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6">
                By The Numbers
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="text-5xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    50+
                  </div>
                  <div className="text-slate-400">Projects Launched</div>
                </div>
                <div className="border-t border-slate-700 pt-6">
                  <div className="text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                    5+
                  </div>
                  <div className="text-slate-400">Years in The Game</div>
                </div>
                <div className="border-t border-slate-700 pt-6">
                  <div className="text-5xl font-black bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
                    ∞
                  </div>
                  <div className="text-slate-400">Lines of Code (probably)</div>
                </div>
              </div>
            </div>

            {/* Current Status */}
            <div className="p-8 bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-3xl backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
                </div>
                <span className="text-green-300 font-bold">Currently Available</span>
              </div>
              <p className="text-slate-300 mb-4">
                Open to freelance projects and full-time opportunities!
              </p>
              <a
                href="/contact"
                className="block w-full px-6 py-3 bg-green-500 text-white text-center rounded-2xl font-bold hover:bg-green-600 transition-colors shadow-lg shadow-green-500/30"
              >
                Let's Build Something Cool
              </a>
            </div>

            {/* Tools I Love */}
            <div className="p-8 bg-slate-800/50 border border-slate-700/50 rounded-3xl backdrop-blur-sm">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <span>🛠️</span> Current Toolkit
              </h3>
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Tailwind", "Node.js", "Next.js", "Figma"].map((tool, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-slate-700/50 text-slate-300 text-sm rounded-xl border border-slate-600/50"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}


export default About;
