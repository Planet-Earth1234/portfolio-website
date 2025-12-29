'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const services = [
  "AI/ML Consulting & Development",
  "Full-Stack Application Development",
  "Technical Architecture & System Design",
  "Research Implementation & Production Deployment",
  "Open Source Collaboration",
  "Speaking & Mentoring"
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
              <span className="text-gradient">Let's Build Something Amazing</span>
            </h2>
            <p className="text-gray-400 text-lg">
              I'm always open to discussing innovative projects and collaboration opportunities
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
              Types of Work I Do
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
              <p className="text-gray-400">Usually respond within 24 hours ⚡</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:your.email@example.com"
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
                <code>{`class CollaborationOpportunities:
    """Let's build something revolutionary together!"""
    
    def __init__(self):
        self.expertise = {
            "ai_ml": ["Computer Vision", "NLP", "LLMs"],
            "development": ["Full-Stack", "Mobile", "APIs"],
            "consulting": ["AI Strategy", "Architecture"]
        }
    
    def lets_collaborate(self, your_idea):
        if your_idea.is_revolutionary():
            return "Let's build the future together! 🚀"
        else:
            return "Let's make it revolutionary first! 💡"`}</code>
              </pre>
            </motion.div>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center space-y-4"
          >
            <p className="text-gray-400">If you find my work interesting or useful:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 card-glass rounded-full text-sm">⭐ Star my repos</span>
              <span className="px-4 py-2 card-glass rounded-full text-sm">🔱 Fork & contribute</span>
              <span className="px-4 py-2 card-glass rounded-full text-sm">💬 Open issues</span>
              <span className="px-4 py-2 card-glass rounded-full text-sm">🤝 Collaborate</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}