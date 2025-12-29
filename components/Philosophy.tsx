'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const principles = [
  {
    title: "Research to Reality",
    description: "Most ML engineers stop at 95% accuracy. I start there—deployment, monitoring, and scale is where real engineering begins.",
    icon: "🔬"
  },
  {
    title: "Full-Stack Mindset",
    description: "I don't just build models. I build the entire system—from data pipelines to production APIs to user interfaces.",
    icon: "🏗️"
  },
  {
    title: "Impact Over Metrics",
    description: "A model that ships beats a perfect model that doesn't. I optimize for real-world outcomes, not just benchmark scores.",
    icon: "🎯"
  },
  {
    title: "Open & Collaborative",
    description: "The best solutions come from sharing knowledge. I contribute to open source and believe in learning in public.",
    icon: "🤝"
  }
]

export default function Philosophy() {
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
            <span className="text-gradient">My Approach</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            What sets me apart isn't just what I build—it's how I think about solving problems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-glass rounded-xl p-8 card-hover group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {principle.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-primary group-hover:text-white transition-colors">
                {principle.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}