'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" ref={ref} className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">More Than Just Code</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative group">
                {/* Glowing background */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 rounded-2xl blur-3xl opacity-30 group-hover:opacity-50 transition-opacity" />
                
                {/* Photo placeholder */}
                <div className="relative aspect-square rounded-2xl overflow-hidden border-4 border-primary/30 group-hover:border-primary transition-colors">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 via-purple-500/20 to-blue-500/20 flex items-center justify-center">
                    <div className="text-9xl font-bold text-primary/50">RG</div>
                  </div>
                </div>
              </div>

              {/* Quick facts */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 grid grid-cols-2 gap-4"
              >
                <div className="card-glass rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-primary mb-1">88+</div>
                  <div className="text-sm text-gray-400">GitHub Stars</div>
                </div>
                <div className="card-glass rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-primary mb-1">50+</div>
                  <div className="text-sm text-gray-400">Technologies</div>
                </div>
                <div className="card-glass rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-primary mb-1">5+</div>
                  <div className="text-sm text-gray-400">Production Apps</div>
                </div>
                <div className="card-glass rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-primary mb-1">Top 10%</div>
                  <div className="text-sm text-gray-400">Kaggle Rank</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Text side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Origin story */}
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">Origin Story</h3>
                <p className="text-gray-300 leading-relaxed">
                  I fell in love with AI when I realized we could teach machines to learn. What excites me isn't just building models—it's building systems that millions of people use. The intersection of research and engineering is where magic happens.
                </p>
              </div>

              {/* Current state */}
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">Today</h3>
                <p className="text-gray-300 leading-relaxed">
                  I specialize in taking cutting-edge research and turning it into production-ready systems. I've built everything from computer vision pipelines to full-stack applications, always with an eye toward scale and reliability. Every project is an opportunity to push boundaries.
                </p>
              </div>

              {/* Philosophy */}
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">Philosophy & Future</h3>
                <p className="text-gray-300 leading-relaxed">
                  The future belongs to engineers who can bridge research and engineering. I'm constantly reading papers, implementing algorithms from scratch, and shipping products that matter. My goal? Build AI systems that actually help people solve real problems.
                </p>
              </div>

              {/* Additional info */}
              <div className="pt-6 border-t border-dark-lighter space-y-2">
                <div className="flex items-center gap-3 text-gray-400">
                  <span className="text-primary">📍</span>
                  <span>Available for remote work worldwide</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <span className="text-primary">💼</span>
                  <span>Open to: Consulting, Collaborations, Full-time</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <span className="text-primary">⚡</span>
                  <span>Fun fact: I automate everything—even this portfolio!</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}