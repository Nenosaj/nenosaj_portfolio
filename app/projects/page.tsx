'use client';

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "@/components/ImageWithFallback";

interface Project {
  id: string;
  title: string;
  emoji: string;
  category: string;
  description: string;
  gradient: string;
  longDescription: string;
  techStack: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageQuery: string;
}

const projects: Project[] = [
  {
    id: "task-master",
    title: "TaskMaster Pro",
    emoji: "✅",
    category: "Productivity App",
    description: "A modern task management app with drag-and-drop, real-time sync, and smart reminders.",
    gradient: "from-blue-500 to-cyan-500",
    longDescription: "TaskMaster Pro is a full-featured productivity application built with React and TypeScript. It features a beautiful interface with smooth animations, drag-and-drop task organization, and cloud sync capabilities. Perfect for individuals and teams who want to stay organized.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Firebase"],
    features: [
      "🎯 Drag & drop task organization",
      "🔄 Real-time cloud synchronization",
      "🔔 Smart notifications and reminders",
      "📊 Progress tracking and analytics",
      "🎨 Customizable themes and layouts",
      "👥 Team collaboration features"
    ],
    imageQuery: "productivity app dashboard",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "weather-now",
    title: "WeatherNow",
    emoji: "🌤️",
    category: "Weather Dashboard",
    description: "Beautiful weather app with hourly forecasts, radar maps, and location-based alerts.",
    gradient: "from-purple-500 to-pink-500",
    longDescription: "WeatherNow provides accurate weather information with a stunning visual design. Get real-time weather updates, detailed forecasts, interactive radar maps, and severe weather alerts. Built with modern web technologies for a fast and responsive experience.",
    techStack: ["React", "Next.js", "OpenWeather API", "Mapbox", "Chart.js"],
    features: [
      "🌡️ Real-time weather data",
      "📍 Location-based forecasts",
      "🗺️ Interactive radar maps",
      "⚡ Severe weather alerts",
      "📈 Temperature trends & charts",
      "🌍 Multi-location support"
    ],
    imageQuery: "weather app interface",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "fitness-track",
    title: "FitnessTrack",
    emoji: "💪",
    category: "Health & Fitness",
    description: "Track workouts, set goals, and visualize your fitness journey with beautiful charts.",
    gradient: "from-green-500 to-emerald-500",
    longDescription: "FitnessTrack helps you stay motivated and reach your fitness goals. Log your workouts, track your progress over time, set personal records, and see your achievements visualized in beautiful charts and graphs. Whether you're a beginner or a pro, FitnessTrack adapts to your needs.",
    techStack: ["React", "Redux", "Recharts", "Node.js", "MongoDB"],
    features: [
      "🏋️ Workout logging and history",
      "📊 Progress charts and analytics",
      "🎯 Goal setting and tracking",
      "🏆 Achievement badges",
      "📱 Mobile-responsive design",
      "🔥 Streak tracking"
    ],
    imageQuery: "fitness tracking app",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "recipe-book",
    title: "RecipeBook",
    emoji: "👨‍🍳",
    category: "Food & Cooking",
    description: "Discover, save, and share your favorite recipes with a beautiful cooking companion.",
    gradient: "from-orange-500 to-red-500",
    longDescription: "RecipeBook is your digital cookbook that makes cooking fun and organized. Browse thousands of recipes, save your favorites, create shopping lists, and share your own culinary creations. With step-by-step instructions and ingredient scaling, cooking has never been easier.",
    techStack: ["React", "TypeScript", "Supabase", "TailwindCSS", "React Query"],
    features: [
      "🍳 Recipe discovery and search",
      "⭐ Save favorite recipes",
      "🛒 Auto-generated shopping lists",
      "👥 Share recipes with friends",
      "⏲️ Cook mode with timers",
      "📐 Ingredient scaling"
    ],
    imageQuery: "recipe cooking app",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "code-snippets",
    title: "SnippetVault",
    emoji: "💻",
    category: "Developer Tool",
    description: "Organize and share your code snippets with syntax highlighting and tagging.",
    gradient: "from-indigo-500 to-purple-500",
    longDescription: "SnippetVault is a developer's best friend for organizing code snippets. Save frequently used code blocks, organize them with tags and collections, and access them instantly whenever you need. Features beautiful syntax highlighting for 100+ programming languages.",
    techStack: ["React", "Monaco Editor", "Firebase", "Prism.js", "Markdown"],
    features: [
      "🎨 Syntax highlighting",
      "🏷️ Tag-based organization",
      "🔍 Full-text search",
      "📁 Collections and folders",
      "🔗 Easy sharing with links",
      "🌙 Dark/Light themes"
    ],
    imageQuery: "code editor interface",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "budget-buddy",
    title: "BudgetBuddy",
    emoji: "💰",
    category: "Finance Tracker",
    description: "Smart expense tracking and budgeting app to help you manage your money better.",
    gradient: "from-yellow-500 to-orange-500",
    longDescription: "BudgetBuddy makes personal finance simple. Track your expenses, set budgets, visualize spending patterns, and get insights into your financial health. With smart categorization and beautiful charts, staying on top of your finances has never been easier.",
    techStack: ["React", "TypeScript", "Chart.js", "LocalStorage", "PWA"],
    features: [
      "💳 Expense tracking",
      "📊 Budget management",
      "📈 Spending analytics",
      "🏷️ Auto-categorization",
      "📱 Works offline (PWA)",
      "💡 Money-saving insights"
    ],
    imageQuery: "budget finance app",
    liveUrl: "#",
    githubUrl: "#"
  }
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen px-4 lg:px-8 py-32 lg:pr-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full mb-6">
            <span className="text-sm text-blue-300 font-medium">Things I've Built</span>
          </div>
          
          <h1 className="text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="block text-white">My</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500">
              Projects 🚀
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            From productivity apps to developer tools — here's a showcase of projects 
            I've built with passion and lots of coffee ☕
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group relative cursor-pointer"
            >
              <div className="relative h-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-6 hover:border-slate-600 transition-all overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                
                <div className="relative">
                  <div className="text-5xl mb-4">{project.emoji}</div>
                  
                  <h3 className="text-2xl font-black text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="text-blue-400 font-semibold mb-3 text-sm">
                    {project.category}
                  </div>

                  <p className="text-slate-400 mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-2 text-blue-400 font-bold text-sm group-hover:gap-3 transition-all">
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              className="fixed inset-4 md:inset-8 lg:inset-16 z-50 overflow-y-auto"
            >
              <div className="min-h-full flex items-center justify-center p-4">
                <div className="relative w-full max-w-5xl bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl">
                  {/* Close button */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-6 right-6 z-10 p-3 bg-slate-800 hover:bg-slate-700 rounded-2xl transition-colors border border-slate-700"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>

                  {/* Project Image */}
                  <div className="relative h-64 md:h-96 bg-slate-800 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${selectedProject.gradient} opacity-20`}></div>
                    <ImageWithFallback
                      src={`https://source.unsplash.com/featured/1200x600/?${selectedProject.imageQuery}`}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-12">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="text-6xl">{selectedProject.emoji}</div>
                      <div className="flex-1">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-2">
                          {selectedProject.title}
                        </h2>
                        <div className="text-blue-400 font-bold text-lg">
                          {selectedProject.category}
                        </div>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 mb-8">
                      {selectedProject.liveUrl && (
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl font-bold hover:shadow-xl hover:shadow-blue-500/50 transition-all"
                        >
                          <ExternalLink className="w-5 h-5" />
                          <span>View Live</span>
                        </a>
                      )}
                      {selectedProject.githubUrl && (
                        <a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 border-2 border-slate-700 text-white rounded-2xl font-bold hover:border-slate-600 transition-all"
                        >
                          <Github className="w-5 h-5" />
                          <span>Source Code</span>
                        </a>
                      )}
                    </div>

                    {/* Description */}
                    <div className="mb-8">
                      <h3 className="text-2xl font-black text-white mb-4">📖 About This Project</h3>
                      <p className="text-slate-300 leading-relaxed text-lg">
                        {selectedProject.longDescription}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <h3 className="text-2xl font-black text-white mb-4">✨ Key Features</h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        {selectedProject.features.map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-2 p-3 bg-slate-800/50 rounded-xl border border-slate-700/50"
                          >
                            <span className="text-slate-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h3 className="text-2xl font-black text-white mb-4">🛠️ Tech Stack</h3>
                      <div className="flex flex-wrap gap-3">
                        {selectedProject.techStack.map((tech, index) => (
                          <span
                            key={index}
                            className={`px-4 py-2 bg-gradient-to-r ${selectedProject.gradient} text-white rounded-xl font-bold shadow-lg`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}


export default Projects;
