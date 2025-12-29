'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const typingPhrases = [
  "I Turn AI Research Into Products That Scale",
  "Building Intelligent Systems From First Principles",
  "Where Cutting-Edge AI Meets Production Engineering",
  "Transforming Complex Research Into Real-World Impact"
]

// Pre-generate particle data to avoid hydration mismatch
const particleData = [...Array(20)].map((_, i) => ({
  id: i,
  left: `${(i * 37.5 + 12.3) % 100}%`,
  top: `${(i * 53.7 + 23.1) % 100}%`,
  width: `${2 + (i % 4)}px`,
  height: `${2 + (i % 4)}px`,
  yOffset: (i % 3) * 10 - 15,
  xOffset: (i % 5) * 6 - 15,
  duration: 5 + (i % 3) * 2,
  delay: (i % 4) * 0.5,
}))

export default function Hero() {
  const [currentPhrase, setCurrentPhrase] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const phrase = typingPhrases[currentPhrase]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < phrase.length) {
          setDisplayText(phrase.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentPhrase((prev) => (prev + 1) % typingPhrases.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentPhrase])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise">
      {/* Animated particles */}
      <div className="absolute inset-0 particles">
        {particleData.map((particle) => (
          <motion.div
            key={particle.id}
            className="particle"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.width,
              height: particle.height,
              background: 'rgba(0, 217, 255, 0.5)',
            }}
            animate={mounted ? {
              y: [0, particle.yOffset, 0],
              x: [0, particle.xOffset, 0],
              opacity: [0.2, 0.8, 0.2],
            } : {}}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Main headline with typing effect */}
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 min-h-[180px] md:min-h-[240px] flex items-center justify-center"
          >
            <span className="text-gradient glow-text">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto"
          >
            AI/ML Architect & Full-Stack Developer | Building intelligent systems from paper to production
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="#projects"
              className="inline-block px-8 py-4 bg-primary text-dark font-bold rounded-lg hover:bg-accent-dark transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
            >
              See My Work
            </a>
          </motion.div>

          {/* Floating elements */}
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="mt-20"
          >
            <div className="flex justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>Available for work</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span>Building the future</span>
              </div>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-2"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-primary rounded-full"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Photo in corner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute top-10 right-10 hidden lg:block"
      >
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary/50 group-hover:border-primary transition-colors">
            {/* Replace with actual image */}
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center text-4xl">
              RG
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}