'use client'

import { motion } from 'framer-motion'

const skills = [
  {
    category: 'AI/ML Core',
    items: [
      'PyTorch & TensorFlow',
      'Transformers & Hugging Face',
      'LoRA/QLoRA Fine-tuning',
      'LangChain & Multi-Agent Systems',
      'Scikit-learn & ML Pipelines'
    ]
  },
  {
    category: 'Computer Vision',
    items: [
      'YOLOv8 Object Detection',
      'EfficientNet Architecture',
      'OpenCV & Image Processing',
      'OCR with Tesseract',
      'Real-time Inference Optimization'
    ]
  },
  {
    category: 'Generative AI',
    items: [
      'LLaMA & Ollama Integration',
      'DeepSeek-Coder',
      'Image-GPT',
      'Autonomous Agent Orchestration',
      'Tool-Calling Pipelines'
    ]
  },
  {
    category: 'Full-Stack & DevOps',
    items: [
      'Python, JavaScript, SQL',
      'Flask & Streamlit',
      'Docker & Containerization',
      'REST API Design',
      'Git & Linux Systems'
    ]
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-5 relative">
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
            TECHNICAL ARSENAL
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
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group p-8 relative overflow-hidden transition-all duration-300 hover:-translate-y-2"
              style={{
                background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.1), rgba(255, 0, 255, 0.1))',
                border: '1px solid rgba(0, 255, 255, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-neon-cyan)'
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 255, 255, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0, 255, 255, 0.3)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Shine effect */}
              <div 
                className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-br from-transparent via-[rgba(0,255,255,0.1)] to-transparent rotate-45 transition-all duration-500 group-hover:left-[100%]"
              />
              
              <h3 
                className="font-bold text-xl uppercase mb-4 relative z-10"
                style={{
                  fontFamily: 'var(--font-space)',
                  color: 'var(--color-neon-magenta)'
                }}
              >
                {skill.category}
              </h3>
              
              <ul className="space-y-2 relative z-10">
                {skill.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80 text-sm sm:text-base">
                    <span 
                      className="font-bold mt-1"
                      style={{ color: 'var(--color-code-green)' }}
                    >
                      ▸
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}