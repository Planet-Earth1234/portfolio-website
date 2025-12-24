'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="text-center py-10 px-5 border-t mt-24"
      style={{
        borderColor: 'rgba(0, 255, 255, 0.2)'
      }}
    >
      <p 
        className="mb-2"
        style={{
          fontFamily: 'var(--font-space)',
          color: 'var(--color-code-green)'
        }}
      >
        rahul@ai-systems:~$ <span style={{ color: 'var(--color-neon-cyan)' }}>./build-future.sh</span>
      </p>
      <p className="text-white/50 text-sm mb-1">
        University of Mumbai | B.E. Computer Science (AI & ML) | CGPA: 8.36 (Current)
      </p>
      <p className="text-white/50 text-sm mt-5">
        Graduating May 2025 | Available for Immediate Joining
      </p>
      <p className="text-white/30 text-xs mt-5">
        © {new Date().getFullYear()} Rahul Gupta. Built with Next.js 16.1.1
      </p>
    </motion.footer>
  )
}