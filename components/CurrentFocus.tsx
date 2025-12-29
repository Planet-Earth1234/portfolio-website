'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const focusAreas = [
  {
    title: "Autonomous AI Agents",
    description: "Building agent frameworks that can plan, execute, and self-correct. Experimenting with function calling and RAG systems.",
    status: "In Development",
    icon: "🤖",
    progress: 75
  },
  {
    title: "Production LLM Systems",
    description: "Fine-tuning and deploying LLMs at scale. Focus on PEFT, LoRA, and efficient inference.",
    status: "Research Phase",
    icon: "🧠",
    progress: 60
  },
  {
    title: "MLOps Infrastructure",
    description: "Building robust pipelines for model training, versioning, monitoring, and deployment.",
    status: "Optimizing",
    icon: "🚀",
    progress: 85
  }
]

export default function CurrentFocus() {
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
            <span className="text-gradient">What I'm Building Now</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Current projects and research areas I'm actively exploring
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="card-glass rounded-xl p-8 relative overflow-hidden group"
            >
              {/* Glowing border on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {area.icon}
                </div>

                {/* Status badge */}
                <div className="inline-block px-3 py-1 bg-primary/20 border border-primary/50 rounded-full text-xs font-mono text-primary mb-4">
                  {area.status}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {area.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-6">
                  {area.description}
                </p>

                {/* Progress bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Progress</span>
                    <span>{area.progress}%</span>
                  </div>
                  <div className="h-2 bg-dark-lighter rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${area.progress}%` } : {}}
                      transition={{ duration: 1, delay: index * 0.15 + 0.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}