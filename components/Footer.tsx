'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative py-12 border-t border-dark-lighter">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main footer content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold text-gradient mb-2">Rahul Gupta</h3>
              <p className="text-gray-400 text-sm">
                AI/ML Architect & Full-Stack Developer
              </p>
              <p className="text-gray-500 text-xs mt-2">
                Building the future, one model at a time
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-primary mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#projects" className="block text-gray-400 hover:text-primary transition-colors">
                  Projects
                </a>
                <a href="#about" className="block text-gray-400 hover:text-primary transition-colors">
                  About
                </a>
                <a href="#contact" className="block text-gray-400 hover:text-primary transition-colors">
                  Contact
                </a>
                <a 
                  href="https://github.com/Planet-Earth1234" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-400 hover:text-primary transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-bold text-primary mb-4">Connect</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Planet-Earth1234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 card-glass rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors group"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/rahul-g-28333427b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 card-glass rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors group"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://profile-website-murex.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 card-glass rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors group"
                  aria-label="Portfolio"
                >
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-dark-lighter my-8" />

          {/* Bottom row */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <div>
              © 2025 Rahul Gupta. Crafted with 💙 and ☕
            </div>
            <div className="flex gap-4">
              <span>Built with Next.js & Tailwind</span>
              <span>•</span>
              <a 
                href="https://github.com/Planet-Earth1234" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                View source
              </a>
            </div>
          </div>

          {/* Back to top button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-dark rounded-full flex items-center justify-center hover:bg-accent-dark transition-colors shadow-lg shadow-primary/50 z-50"
            aria-label="Back to top"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        </div>
      </div>
    </footer>
  )
}