'use client'

import { motion } from 'framer-motion'

const stats = [
  { number: '89%', label: 'Classification Accuracy' },
  { number: '85%', label: 'Time Reduction' },
  { number: '<200ms', label: 'API Latency' },
  { number: '2', label: 'Published Papers' }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 }
}

export default function Stats() {
  return (
    <section className="py-24 px-5 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-wider mb-16 relative inline-block"
            style={{
              fontFamily: 'var(--font-orbitron)',
              color: 'var(--color-neon-cyan)'
            }}
          >
            BY THE NUMBERS
            <span 
              className="absolute bottom-[-10px] left-0 w-full h-1 bg-gradient-to-r from-[#00ffff] to-transparent"
              style={{ animation: 'lineGrow 1s ease-out' }}
            />
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative text-center p-10 border-2 overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.05), rgba(255, 0, 255, 0.05))',
                borderColor: 'rgba(0, 255, 255, 0.3)'
              }}
            >
              {/* Shimmer effect */}
              <div 
                className="absolute top-0 w-full h-full bg-gradient-to-r from-transparent via-[rgba(0,255,255,0.2)] to-transparent"
                style={{
                  left: '-100%',
                  animation: 'shimmer 3s infinite'
                }}
              />
              
              <div className="relative z-10">
                <div 
                  className="text-4xl sm:text-5xl font-black mb-3"
                  style={{
                    fontFamily: 'var(--font-orbitron)',
                    color: 'var(--color-neon-magenta)'
                  }}
                >
                  {stat.number}
                </div>
                <div 
                  className="text-xs sm:text-sm text-white/70 uppercase tracking-wider"
                  style={{ fontFamily: 'var(--font-space)' }}
                >
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}