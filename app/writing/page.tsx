'use client';

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

function Writing() {
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
            <BookOpen className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300 font-medium">Letters, Reflections & Stories</span>
          </div>
          
          <h1 className="text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="block text-white">My</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500">
              Writing ✍️
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            A collection of letters, personal reflections, and small literary pieces. 
            This space is evolving into a blog where I'll share thoughts on technology, creativity, 
            and everything in between.
          </p>
        </motion.div>

        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-12 text-center overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative">
              <div className="text-7xl mb-6">📝</div>
              
              <h2 className="text-4xl font-black text-white mb-4">
                Blog Coming Soon
              </h2>
              
              <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
                I'm currently setting up this space to share my writings. Expect posts about 
                Raspberry Pi adventures, computer architecture deep dives, programming insights, 
                and personal reflections.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <div className="px-6 py-3 bg-blue-500/20 text-blue-400 rounded-2xl border border-blue-400/30 font-bold">
                  Tech Articles
                </div>
                <div className="px-6 py-3 bg-purple-500/20 text-purple-400 rounded-2xl border border-purple-400/30 font-bold">
                  Personal Letters
                </div>
                <div className="px-6 py-3 bg-green-500/20 text-green-400 rounded-2xl border border-green-400/30 font-bold">
                  Creative Pieces
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* What to Expect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          <div className="p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl">
            <div className="text-5xl mb-4">🔧</div>
            <h3 className="text-xl font-black text-white mb-3">Tech & Tinkering</h3>
            <p className="text-slate-400 leading-relaxed">
              Posts about my Raspberry Pi projects, programming experiments, and hardware adventures.
            </p>
          </div>

          <div className="p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl">
            <div className="text-5xl mb-4">🧠</div>
            <h3 className="text-xl font-black text-white mb-3">Learning Notes</h3>
            <p className="text-slate-400 leading-relaxed">
              Deep dives into computer architecture, low-level systems, and technical concepts I'm exploring.
            </p>
          </div>

          <div className="p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl">
            <div className="text-5xl mb-4">✨</div>
            <h3 className="text-xl font-black text-white mb-3">Creative Writing</h3>
            <p className="text-slate-400 leading-relaxed">
              Personal letters, reflections, and small literary pieces exploring ideas and experiences.
            </p>
          </div>
        </motion.div>

        {/* Newsletter Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="p-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-3xl text-center backdrop-blur-sm"
        >
          <div className="text-6xl mb-4">📬</div>
          <h3 className="text-3xl font-black text-white mb-4">Want to Stay Updated?</h3>
          <p className="text-slate-300 mb-6 max-w-md mx-auto">
            I'm setting up a way to notify readers when I publish new posts. 
            In the meantime, feel free to reach out directly!
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl font-bold shadow-lg shadow-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/50 transition-all"
          >
            Get in Touch 💬
          </a>
        </motion.div>
      </div>
    </div>
  );
}


export default Writing;
