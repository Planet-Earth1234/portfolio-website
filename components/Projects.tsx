'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Autonomous Job Search Agent',
    tech: ['Flask', 'LLM Agents', 'Chrome Extension', 'Multi-Agent Orchestration'],
    status: '🔴 LIVE BACKEND',
    statusColor: '#ff6600',
    description: 'End-to-end autonomous agent system revolutionizing job applications through intelligent automation',
    highlights: [
      'Architected multi-agent system with Chrome extension for automatic job scraping and semantic ranking using LLM-based relevance matching',
      'Built production Flask backend with modular Python architecture, async task handling, comprehensive logging, and error recovery mechanisms',
      'Implemented tool-calling pipelines for resume-JD alignment, <strong>reducing manual application time by 85%</strong> (12 hrs → 2 hrs/week)',
      'Currently in final testing phase with backend deployed — Private repo available for demonstration'
    ],
    github: 'https://github.com/Planet-Earth1234',
    borderSide: 'left'
  },
  {
    title: 'Overleaf Clone with AI Agents',
    tech: ['Streamlit', 'Ollama', 'Docker', 'DeepSeek-Coder'],
    status: '🔴 PRODUCTION READY',
    statusColor: '#ff6600',
    description: 'AI-powered LaTeX editor with autonomous agents for intelligent document generation',
    highlights: [
      'Developed intelligent LaTeX editor with autonomous agents for code generation, automated section creation, and real-time error fixing',
      'Integrated Ollama + DeepSeek-Coder for context-aware editing, enabling <strong>70% faster workflow</strong> for technical documents through natural language',
      'Containerized TeXLive environment with Docker for reproducible, dependency-free builds with real-time PDF preview',
      'Implemented project management system with version control and collaborative features'
    ],
    borderSide: 'right'
  },
  {
    title: 'Indian Food Classification System',
    tech: ['EfficientNet', 'YOLOv8', 'Docker', 'REST API'],
    status: '📝 PUBLISHED RESEARCH',
    statusColor: '#00ff88',
    description: 'Production-grade computer vision system for multi-class Indian cuisine recognition',
    highlights: [
      'Built 206-class classifier using EfficientNet achieving <strong>89% accuracy</strong>, integrated with YOLOv8 for multi-food detection in single images',
      'Containerized entire ML pipeline with Docker for scalable deployment with <strong>&lt;200ms latency</strong> RESTful API endpoints',
      'Published comprehensive research in IRJIET journal documenting architecture, training methodology, and deployment strategy',
      'Implemented real-time inference optimization for production environments'
    ],
    github: 'https://github.com/Planet-Earth1234',
    borderSide: 'left'
  },
  {
    title: 'Advanced NLP Fine-Tuning',
    tech: ['LoRA/QLoRA', 'BERT', 'mBART', 'Neural Translation'],
    status: '',
    statusColor: '',
    description: 'Parameter-efficient fine-tuning for English-Sanskrit neural machine translation',
    highlights: [
      'Fine-tuned BERT and mBART models using LoRA/QLoRA techniques for low-resource language translation',
      'Achieved <strong>60% reduction in training time</strong> while maintaining translation quality through parameter-efficient methods',
      'Implemented custom tokenization strategies for Sanskrit language processing'
    ],
    borderSide: 'right'
  },
  {
    title: 'ECHO TWEET – Bird Call Classifier',
    tech: ['PyTorch', 'Librosa', 'Audio Processing', 'Spectrograms'],
    status: '📝 PUBLISHED RESEARCH',
    statusColor: '#00ff88',
    description: 'Deep learning audio classifier for bird species identification from vocalizations',
    highlights: [
      'Developed audio classification model using Librosa for feature extraction and spectrogram analysis',
      'Published research in IRJIET (April 2024) documenting methodology and results',
      'Implemented real-time audio processing pipeline for species identification'
    ],
    borderSide: 'left'
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0 }
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-5 relative">
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
            FLAGSHIP PROJECTS
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
          className="space-y-16 mt-10"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group p-8 md:p-10 relative transition-all duration-300"
              style={{
                backgroundColor: 'rgba(26, 0, 51, 0.4)',
                ...(project.borderSide === 'left' 
                  ? { borderLeft: '4px solid var(--color-neon-cyan)' }
                  : { borderRight: '4px solid var(--color-neon-magenta)' })
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(26, 0, 51, 0.7)'
                if (project.borderSide === 'left') {
                  e.currentTarget.style.transform = 'translateX(10px)'
                } else {
                  e.currentTarget.style.transform = 'translateX(-10px)'
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(26, 0, 51, 0.4)'
                e.currentTarget.style.transform = 'translateX(0)'
              }}
            >
              <div className="flex flex-col lg:flex-row justify-between items-start gap-4 mb-5">
                <div className="flex-1">
                  <h3 
                    className="text-2xl md:text-3xl font-black mb-3"
                    style={{
                      fontFamily: 'var(--font-orbitron)',
                      color: 'var(--color-neon-cyan)'
                    }}
                  >
                    {project.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs sm:text-sm rounded-sm"
                        style={{
                          backgroundColor: 'rgba(0, 255, 136, 0.1)',
                          border: '1px solid var(--color-code-green)',
                          color: 'var(--color-code-green)',
                          fontFamily: 'var(--font-space)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {project.status && (
                  <span 
                    className="px-4 py-2 font-bold text-xs sm:text-sm uppercase tracking-wider whitespace-nowrap"
                    style={{
                      backgroundColor: `${project.statusColor}33`,
                      border: `1px solid ${project.statusColor}`,
                      color: project.statusColor
                    }}
                  >
                    {project.status}
                  </span>
                )}
              </div>

              <p className="text-white/85 mb-5 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>

              <ul className="space-y-3">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80 text-sm sm:text-base leading-relaxed">
                    <span 
                      className="text-xl mt-0.5"
                      style={{ color: 'var(--color-warning-orange)' }}
                    >
                      ⚡
                    </span>
                    <span dangerouslySetInnerHTML={{ __html: highlight }} />
                  </li>
                ))}
              </ul>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-5 transition-colors duration-300 text-sm"
                  style={{
                    fontFamily: 'var(--font-space)',
                    color: 'var(--color-neon-cyan)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--color-neon-magenta)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--color-neon-cyan)'
                  }}
                >
                  <span>View on GitHub</span>
                  <span>→</span>
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}