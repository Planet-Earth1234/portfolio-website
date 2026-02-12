'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const services = [
  "Co-Founder & Technical Leadership",
  "Venture Capital & Seed Funding",
  "Industrial Partnership & Pilot Programs",
  "Agentic AI Strategy & Implementation",
  "Computer Vision for Industrial Applications",
  "Scaling 0-to-1 Products in Logistics"
]

export default function Collaboration() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="contact" ref={ref} className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Let's Build the Future of Trade</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Seeking ambitious co-founders and investors for VeloxGate. Let's solve the Manual Tax together.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-primary">
              What I'm Looking For
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                  className="flex items-center gap-3 card-glass rounded-lg p-4 group hover:bg-primary/5 transition-colors"
                >
                  <span className="text-primary text-xl group-hover:scale-110 transition-transform">✓</span>
                  <span className="text-gray-300">{service}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact methods */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="card-glass rounded-2xl p-8 md:p-12"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Get In Touch</h3>
              <p className="text-gray-400">Open to serious inquiries about VeloxGate partnerships ⚡</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:rahulgupta190310587044@gmail.com"
                className="px-8 py-4 bg-primary text-dark font-bold rounded-lg hover:bg-accent-dark transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50 w-full sm:w-auto text-center"
              >
                📧 Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/rahul-g-28333427b/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 card-glass font-bold rounded-lg hover:bg-primary/10 transition-all duration-300 hover:scale-105 w-full sm:w-auto text-center"
              >
                💼 LinkedIn
              </a>
              <a
                href="https://github.com/Planet-Earth1234"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 card-glass font-bold rounded-lg hover:bg-primary/10 transition-all duration-300 hover:scale-105 w-full sm:w-auto text-center"
              >
                💻 GitHub
              </a>
            </div>

            {/* Code snippet */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 bg-dark-lighter rounded-lg p-6 overflow-x-auto"
            >
              <pre className="text-sm text-gray-300 font-mono">
                <code>{`class VeloxGateVenture:
    """Disrupting the $180B Manual Tax in Indian Logistics"""
    
    def __init__(self):
        self.tech_stack = ["Agentic AI", "ULIP/FASTag", "Fintech Escrow"]
        self.moat = "Family Commodity Trade Background + SOTA AI Engineering"
        self.target = "70% reduction in Gate TAT (2hrs → 2min)"
        self.market = "Mid-scale manufacturers (unorganized trade)"
    
    def join_the_mission(self, expertise):
        """Looking for 'Wolf' partners who see what I see"""
        if expertise in ["Logistics", "Sales", "Venture Capital"]:
            return "Let's eliminate the Manual Tax together! 🚀"
        elif expertise in ["AI/ML", "DevOps", "Industrial IoT"]:
            return "Let's build the infrastructure! 🏗️"
        return "Always looking for brilliant builders! 💡"
    
    def pitch_deck_request(self):
        return "Private deck available under NDA for serious inquiries"`}</code>
              </pre>
            </motion.div>
          </motion.div>

          {/* Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center space-y-6"
          >
            <div className="card-glass rounded-xl p-6">
              <h4 className="text-xl font-bold text-primary mb-3">Why VeloxGate? Why Now?</h4>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div>
                  <div className="text-2xl mb-2">🎯</div>
                  <h5 className="font-bold mb-1">The Spiky Insight</h5>
                  <p className="text-sm text-gray-400">
                    Grew up in commodity/farsan trade. I know the "Dual-Book" reality that keeps logistics stuck in cash + paper.
                  </p>
                </div>
                <div>
                  <div className="text-2xl mb-2">⚡</div>
                  <h5 className="font-bold mb-1">The Tech Moat</h5>
                  <p className="text-sm text-gray-400">
                    Published AI researcher with production systems handling "Messy Reality" data—oily bills, damaged docs, trust gaps.
                  </p>
                </div>
                <div>
                  <div className="text-2xl mb-2">🚀</div>
                  <h5 className="font-bold mb-1">The Market Timing</h5>
                  <p className="text-sm text-gray-400">
                    ULIP is live. FASTag is at 90%+. The regulatory stack is FINALLY ready for this solution.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-400">If you're a 'Wolf' who sees the opportunity:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 card-glass rounded-full text-sm">🤝 Co-founder partnerships</span>
              <span className="px-4 py-2 card-glass rounded-full text-sm">💰 Seed investment</span>
              <span className="px-4 py-2 card-glass rounded-full text-sm">🏭 Pilot programs</span>
              <span className="px-4 py-2 card-glass rounded-full text-sm">🌏 Industrial partnerships</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}