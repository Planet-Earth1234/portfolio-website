'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

// SystemLog Component
const SystemLog = () => {
  const [logs, setLogs] = useState<string[]>([])
  const [cycle, setCycle] = useState(0)

  useEffect(() => {
    const initialLogs = [
      'System initialized...',
      `User Agent: ${navigator.userAgent.split(' ')[0]}`,
      `Viewport: ${window.innerWidth}x${window.innerHeight}px`,
      'Optimizing for technical review...',
      'Loading autonomous modules...',
      'Connecting to AI systems...',
      'Initializing neural networks...',
      'Compiling agent workflows...',
      'All systems operational ✓'
    ]

    setLogs([])
    
    initialLogs.forEach((log, i) => {
      setTimeout(() => {
        setLogs(prev => {
          const newLogs = [...prev, log]
          return newLogs.slice(-5)
        })
      }, i * 800)
    })

    const totalTime = initialLogs.length * 800 + 2000
    const cycleTimeout = setTimeout(() => {
      setCycle(prev => prev + 1)
    }, totalTime)

    return () => clearTimeout(cycleTimeout)
  }, [cycle])

  return (
    <div 
      className="fixed top-4 right-4 bg-black/80 border border-cyan-500/30 rounded p-3 text-xs w-80 backdrop-blur-sm z-40"
      style={{ fontFamily: 'Space Mono, monospace' }}
    >
      <div className="flex items-center gap-2 mb-2 text-green-400">
        <span>▸</span>
        <span>system.log</span>
      </div>
      <div className="space-y-1 max-h-32 overflow-hidden">
        {logs.map((log, i) => (
          <div 
            key={`${cycle}-${i}`} 
            className="text-white/60 text-[11px] animate-pulse"
          >
            <span className="text-green-400">&gt;</span> {log}
          </div>
        ))}
      </div>
    </div>
  )
}

// TypingText Component
const TypingText = () => {
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const fullText = 'AI Systems Engineer'

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (!isDeleting && displayText.length < fullText.length) {
      timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1))
      }, 100)
    } else if (!isDeleting && displayText.length === fullText.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length - 1))
      }, 50)
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, fullText])

  return (
    <span>
      &lt;{displayText}
      <span 
        className="inline-block w-0.5 h-5 ml-1 align-middle bg-green-400"
        style={{ animation: 'blink 1s ease-in-out infinite' }}
      />
      {' / >;'}
    </span>
  )
}

// Main Hero Component
export default function Hero() {
  return (
    <>
      <SystemLog />
      <section className="min-h-screen flex flex-col justify-center items-center text-center relative px-5 py-24">
        
        {/* Name Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-wider text-gradient"
            style={{ 
              fontFamily: 'Orbitron, sans-serif',
              animation: 'titleGlow 3s ease-in-out infinite' 
            }}
          >
            RAHUL GUPTA
          </h1>
        </motion.div>

        {/* Animated Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl sm:text-2xl md:text-3xl mb-5 tracking-wide text-green-400"
          style={{ fontFamily: 'Space Mono, monospace' }}
        >
          <TypingText />
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Building autonomous LLM agents, production-ready AI systems, and full-stack ML applications. 
          Specializing in transformers, computer vision, and agentic AI architectures. 
          <strong className="text-white"> Available May 2025</strong> for immediate joining post-graduation.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-5 mb-8"
        >
          <a
            href="#projects"
            className="relative px-10 py-5 font-bold text-base border-2 uppercase tracking-wider overflow-hidden group transition-all duration-300"
            style={{ 
              fontFamily: 'Space Mono, monospace',
              borderColor: 'var(--color-neon-cyan, #22d3ee)',
              color: 'var(--color-neon-cyan, #22d3ee)'
            }}
          >
            <span 
              className="absolute top-0 left-0 w-0 h-full transition-all duration-300 group-hover:w-full -z-10 bg-cyan-400"
            />
            <span className="relative z-10 group-hover:text-black">Explore Projects</span>
          </a>
          
          <a
            href="#contact"
            className="px-10 py-5 font-bold text-base border-2 uppercase tracking-wider transition-all duration-300 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-black"
            style={{ fontFamily: 'Space Mono, monospace' }}
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full mt-8 bg-green-400/10 border border-green-400"
          style={{ animation: 'pulseCustom 2s ease-in-out infinite' }}
        >
          <span 
            className="w-2.5 h-2.5 rounded-full bg-green-400 shadow-[0_0_10px_#4ade80]"
            style={{ animation: 'blink 1.5s ease-in-out infinite' }}
          />
          <span className="text-sm sm:text-base">GRADUATING MAY 2025 | IMMEDIATE JOINING</span>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          style={{ animation: 'bounceCustom 2s infinite' }}
        >
          <div className="w-8 h-8 border-r-4 border-b-4 border-cyan-400 rotate-45" />
        </motion.div>
      </section>
    </>
  )
}