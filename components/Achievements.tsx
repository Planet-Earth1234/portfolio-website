'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const achievements = [
  {
    icon: "🎯",
    title: "AI/ML Mastery",
    description: "Building intelligent systems that learn & adapt"
  },
  {
    icon: "💻",
    title: "Full-Stack Sorcery",
    description: "Creating seamless end-to-end experiences"
  },
  {
    icon: "🚀",
    title: "Production Ready",
    description: "Deploying scalable solutions to real users"
  },
  {
    icon: "🧩",
    title: "Problem Solver",
    description: "Architecting elegant solutions to complex challenges"
  }
]

export default function Achievements() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Achievements & Impact</span>
          </h2>
        </motion.div>

        {/* ASCII Art Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="card-glass rounded-xl p-8 font-mono text-xs md:text-sm text-primary/80 overflow-x-auto">
            <pre className="text-center whitespace-pre">
{`╔═══════════════════════════════════════════════════════════════════╗
║                                                                   ║
║     ⚡ TRANSFORMING RESEARCH INTO PRODUCTION SYSTEMS ⚡           ║
║                                                                   ║
║  🏆 End-to-End AI Architect    │    🔬 Research Implementer     ║
║  🚀 Production Deployment Pro   │    📱 Cross-Platform Master    ║
║  🧠 LLM Fine-tuning Expert     │    🎯 Computer Vision Wizard   ║
║  🐳 Container Orchestrator      │    🌐 Full-Stack Craftsman    ║
║                                                                   ║
║             "Building The Future, One Model At A Time"           ║
║                                                                   ║
╚═══════════════════════════════════════════════════════════════════╝`}
            </pre>
          </div>
        </motion.div>

        {/* Achievement cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-glass rounded-xl p-6 text-center group hover:bg-primary/5 transition-colors"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {achievement.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                {achievement.title}
              </h3>
              <p className="text-sm text-gray-400">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto"
        >
          {[
            { label: "GitHub Stars", value: "88+" },
            { label: "Technologies", value: "50+" },
            { label: "Production Systems", value: "5+" },
            { label: "Commits This Year", value: "1000+" },
            { label: "Kaggle Rank", value: "Top 10%" },
            { label: "Open Source", value: "Active" }
          ].map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                {metric.value}
              </div>
              <div className="text-xs text-gray-400">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}