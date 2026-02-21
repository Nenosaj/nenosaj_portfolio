'use client';

import { motion } from "framer-motion";

const skillGroups = [
  {
    emoji: "💻",
    category: "Programming",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Python", level: 85, emoji: "🐍" },
      { name: "JavaScript", level: 80, emoji: "⚡" },
      { name: "C/C++", level: 70, emoji: "🔧" },
      { name: "Shell Scripting", level: 75, emoji: "📜" },
    ],
  },
  {
    emoji: "🔧",
    category: "Hardware & Systems",
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Raspberry Pi", level: 90, emoji: "🍓" },
      { name: "Linux", level: 85, emoji: "🐧" },
      { name: "Computer Architecture", level: 75, emoji: "🧠" },
      { name: "Embedded Systems", level: 70, emoji: "⚙️" },
    ],
  },
  {
    emoji: "🌐",
    category: "Web Development",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "HTML/CSS", level: 85, emoji: "🎨" },
      { name: "React", level: 75, emoji: "⚛️" },
      { name: "Node.js", level: 70, emoji: "🟢" },
      { name: "Responsive Design", level: 80, emoji: "📱" },
    ],
  },
  {
    emoji: "✍️",
    category: "Creative & Other",
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Technical Writing", level: 85, emoji: "📝" },
      { name: "Creative Writing", level: 90, emoji: "✨" },
      { name: "Minimal Design", level: 80, emoji: "🎯" },
      { name: "Problem Solving", level: 88, emoji: "💡" },
    ],
  },
];

function Skills() {
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
            <span className="text-sm text-blue-300 font-medium">💪 What I Know & Love</span>
          </div>
          
          <h1 className="text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="block text-white">My</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500">
              Skills ⚡
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            From programming languages to hardware tinkering, from writing to design — 
            here's what I work with and what I'm passionate about.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + groupIndex * 0.1 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${group.color} opacity-10 blur-2xl rounded-3xl`}></div>
              <div className="relative p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl hover:border-slate-600 transition-all">
                <div className="flex items-center gap-3 mb-8">
                  <div className="text-4xl">{group.emoji}</div>
                  <h2 className="text-2xl font-black text-white">{group.category}</h2>
                </div>
                
                <div className="space-y-6">
                  {group.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{skill.emoji}</span>
                          <span className="text-slate-200 font-semibold">{skill.name}</span>
                        </div>
                        <span className="text-blue-400 font-bold font-mono text-sm">{skill.level}%</span>
                      </div>
                      
                      <div className="h-3 bg-slate-700/50 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ 
                            delay: 0.5 + groupIndex * 0.1 + skillIndex * 0.1,
                            duration: 1,
                            ease: "easeOut"
                          }}
                          className={`h-full bg-gradient-to-r ${group.color} rounded-full relative`}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional sections */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Currently Learning */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="p-8 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-3xl backdrop-blur-sm"
          >
            <h3 className="text-2xl font-black text-white mb-4 flex items-center gap-2">
              <span>📚</span> Currently Learning
            </h3>
            <p className="text-slate-300 mb-4 leading-relaxed">
              Always expanding my knowledge. Right now I'm diving deeper into:
            </p>
            <div className="flex flex-wrap gap-2">
              {["Low-Level Programming", "System Design", "Advanced React", "Docker"].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-xl border border-blue-400/30 font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Approach */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="p-8 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-3xl backdrop-blur-sm"
          >
            <h3 className="text-2xl font-black text-white mb-4 flex items-center gap-2">
              <span>💭</span> My Approach
            </h3>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-start gap-2">
                <span>✓</span>
                <span>Learn by building and experimenting</span>
              </div>
              <div className="flex items-start gap-2">
                <span>✓</span>
                <span>Minimal, meaningful solutions</span>
              </div>
              <div className="flex items-start gap-2">
                <span>✓</span>
                <span>Understanding fundamentals deeply</span>
              </div>
              <div className="flex items-start gap-2">
                <span>✓</span>
                <span>Blend creativity with technology</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-12 p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl text-center"
        >
          <p className="text-xl text-slate-300 italic mb-2">
            "The best way to understand something is to build it yourself."
          </p>
          <p className="text-slate-500">— My learning philosophy</p>
        </motion.div>
      </div>
    </div>
  );
}


export default Skills;
