'use client';

import { motion } from "framer-motion";
import { Rocket, Code, GraduationCap, Lightbulb, Zap, Trophy } from "lucide-react";

const timeline = [
  {
    year: "2026",
    title: "Living the Dream",
    description: "Building cool stuff, mentoring awesome people, and still learning something new every day. The adventure continues! 🚀",
    icon: Rocket,
    color: "from-blue-500 to-cyan-500",
    status: "Present",
  },
  {
    year: "2024-25",
    title: "Level Up: Senior Dev",
    description: "Led some epic projects, broke production a few times (oops), fixed it faster, and learned that good code is code that other people can understand.",
    icon: Trophy,
    color: "from-purple-500 to-pink-500",
    status: "work",
  },
  {
    year: "2022-24",
    title: "The Full Stack Journey",
    description: "Went from frontend-only to full-stack wizard. Turns out, databases are actually pretty cool. Who knew? 🤷‍♂️",
    icon: Code,
    color: "from-green-500 to-emerald-500",
    status: "work",
  },
  {
    year: "2020-22",
    title: "First Real Job",
    description: "Got my first 'real' dev job. Learned that 'it works on my machine' is not an acceptable excuse. Also discovered the joy of code reviews.",
    icon: GraduationCap,
    color: "from-orange-500 to-amber-500",
    status: "milestone",
  },
  {
    year: "2019-20",
    title: "The Awakening",
    description: "Wrote my first 'Hello World'. It didn't work. Spent 2 hours debugging. Forgot a semicolon. Been coding ever since! 😅",
    icon: Lightbulb,
    color: "from-yellow-500 to-orange-500",
    status: "start",
  },
];

function Journey() {
  return (
    <div className="min-h-screen px-4 lg:px-8 py-32 lg:pr-24">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full mb-6">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300 font-medium">My Story So Far</span>
          </div>
          
          <h1 className="text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="block text-white">The Plot</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500">
              So Far 🗺️
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            From confused beginner to slightly-less-confused professional. 
            Here's how I went from "What's HTML?" to building stuff people actually use.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated gradient line */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent rounded-full"></div>

          <div className="space-y-8">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.15 }}
                  className="relative pl-20 group"
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`absolute left-0 top-0 w-12 h-12 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-xl z-10`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>

                  {/* Content Card */}
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-6 hover:border-slate-600 transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                      <div>
                        <div className={`text-sm font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-1`}>
                          {item.year}
                        </div>
                        <h3 className="text-2xl font-black text-white">
                          {item.title}
                        </h3>
                      </div>
                      
                      {item.status === "Present" && (
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/20 border border-green-400/30 rounded-full">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-green-400 text-sm font-bold">NOW</span>
                        </div>
                      )}
                    </div>
                    
                    <p className="text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Connecting dots */}
                  {index < timeline.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 0.3, scale: 1 }}
                      transition={{ delay: 0.4 + index * 0.15 }}
                      className="absolute left-6 -bottom-4 w-1 h-8 bg-gradient-to-b from-slate-600 to-transparent"
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Fun ending */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-16 grid md:grid-cols-2 gap-6"
        >
          <div className="p-8 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-3xl backdrop-blur-sm">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-black text-white mb-2">Still Growing</h3>
            <p className="text-slate-300">
              Every project teaches me something new. Every bug makes me better. 
              Every "it finally works!" moment makes it all worth it.
            </p>
          </div>

          <div className="p-8 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-3xl backdrop-blur-sm">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-black text-white mb-2">What's Next?</h3>
            <p className="text-slate-300">
              Who knows! That's the exciting part. More projects, more learning, 
              and definitely more coffee. ☕
            </p>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-8 p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl text-center"
        >
          <p className="text-2xl text-slate-300 italic mb-3">
            "The best time to start was yesterday. The second best time is now."
          </p>
          <p className="text-slate-500">
            — Ancient Developer Wisdom (probably)
          </p>
        </motion.div>
      </div>
    </div>
  );
}


export default Journey;
