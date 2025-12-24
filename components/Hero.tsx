'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center relative px-5 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <h1 className="font-orbitron text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-wider text-gradient animate-title-glow">
          RAHUL GUPTA
        </h1>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="font-space text-xl sm:text-2xl md:text-3xl text-code-green mb-5 tracking-wide"
      >
        &lt;AI Systems Engineer /&gt;
      </motion.h2>

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

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="flex flex-col sm:flex-row gap-5 mb-8"
      >
        <a
          href="#projects"
          className="relative px-10 py-5 font-space font-bold text-base border-2 border-neon-cyan text-neon-cyan uppercase tracking-wider overflow-hidden group transition-all duration-300 hover:text-dark-bg hover:glow-cyan"
        >
          <span className="absolute top-0 left-0 w-0 h-full bg-neon-cyan transition-all duration-300 group-hover:w-full -z-10" />
          <span className="relative z-10">Explore Projects</span>
        </a>
        
        <a
          href="#contact"
          className="px-10 py-5 font-space font-bold text-base border-2 border-neon-magenta text-neon-magenta uppercase tracking-wider transition-all duration-300 hover:bg-neon-magenta hover:text-dark-bg hover:glow-magenta"
        >
          Get In Touch
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="inline-flex items-center gap-3 px-6 py-3 bg-code-green/10 border border-code-green rounded-full mt-8 animate-pulse-custom"
      >
        <span className="w-2.5 h-2.5 bg-code-green rounded-full animate-blink shadow-[0_0_10px_#00ff88]" />
        <span className="text-sm sm:text-base">GRADUATING MAY 2025 | IMMEDIATE JOINING</span>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-custom"
      >
        <div className="w-8 h-8 border-r-4 border-b-4 border-neon-cyan rotate-45" />
      </motion.div>
    </section>
  )
}
