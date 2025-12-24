'use client'

import { useEffect, useRef } from 'react'

export default function AnimatedBackground() {
  const particlesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!particlesRef.current) return

    // Generate particles
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div')
      particle.className = 'particle'
      particle.style.cssText = `
        position: absolute;
        width: 3px;
        height: 3px;
        background: #00ffff;
        border-radius: 50%;
        opacity: 0.6;
        box-shadow: 0 0 10px #00ffff;
        animation: float 15s infinite ease-in-out;
        animation-delay: ${Math.random() * 5}s;
        top: ${Math.random() * 100}%;
        left: ${Math.random() * 100}%;
      `
      particlesRef.current.appendChild(particle)
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 opacity-15 overflow-hidden">
      <div className="absolute w-full h-full bg-gradient-to-b from-deep-purple via-dark-bg to-[#000033]">
        {/* Grid overlay */}
        <div 
          className="absolute w-[200%] h-[200%] animate-grid-move opacity-20"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 2px, #00ffff 3px, transparent 4px),
              repeating-linear-gradient(90deg, transparent, transparent 2px, #0066ff 3px, transparent 4px)
            `
          }}
        />
      </div>
      
      {/* Particles container */}
      <div ref={particlesRef} className="absolute w-full h-full" />
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-100px) translateX(50px); }
          50% { transform: translateY(-50px) translateX(-50px); }
          75% { transform: translateY(-150px) translateX(100px); }
        }
      `}</style>
    </div>
  )
}
