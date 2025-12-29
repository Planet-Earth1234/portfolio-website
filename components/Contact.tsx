'use client'

import { motion } from 'framer-motion'

const contacts = [
  {
    icon: '📧',
    label: 'Email',
    value: 'rahulgupta190310587044@gmail.com',
    link: 'mailto:rahulgupta190310587044@gmail.com'
  },
  {
    icon: '📱',
    label: 'Phone',
    value: '+91-8369153581',
    link: 'tel:+918369153581'
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'rahul-g-28333427b',
    link: 'https://linkedin.com/in/rahul-g-28333427b'
  },
  {
    icon: '💻',
    label: 'GitHub',
    value: 'Planet-Earth1234',
    link: 'https://github.com/Planet-Earth1234'
  },
  {
    icon: '🌐',
    label: 'Portfolio',
    value: 'profile-website-murex.vercel.app',
    link: 'https://profile-website-murex.vercel.app'
    
  }
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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-5 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-orbitron text-4xl sm:text-5xl md:text-6xl font-black text-neon-cyan uppercase tracking-wider mb-16 relative inline-block">
            CONNECT
            <span className="absolute bottom-[-10px] left-0 w-full h-1 bg-gradient-to-r from-neon-cyan to-transparent animate-line-grow" />
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10"
        >
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              variants={item}
              href={contact.link}
              target={contact.link.startsWith('http') ? '_blank' : undefined}
              rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group flex items-center gap-4 p-6 bg-electric-blue/10 border border-neon-cyan/30 text-white relative overflow-hidden transition-all duration-300 hover:border-neon-cyan hover:translate-x-1"
            >
              {/* Hover effect */}
              <div className="absolute top-0 left-0 w-0 h-full bg-neon-cyan/20 transition-all duration-300 group-hover:w-full z-0" />
              
              <div className="text-4xl relative z-10">{contact.icon}</div>
              
              <div className="relative z-10">
                <div className="font-space text-xs text-code-green uppercase mb-1">
                  {contact.label}
                </div>
                <div className="text-sm sm:text-base text-white/90">
                  {contact.value}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
