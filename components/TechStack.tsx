'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const techStack = {
  "AI & Machine Learning": [
    "PyTorch", "TensorFlow", "Keras", "Scikit-Learn", "JAX"
  ],
  "Computer Vision": [
    "YOLO", "OpenCV", "Detectron2", "Albumentations", "DINO"
  ],
  "NLP & LLMs": [
    "HuggingFace", "Transformers", "LangChain", "OpenAI", "Anthropic"
  ],
  "Backend & APIs": [
    "Django", "FastAPI", "Flask", "PostgreSQL", "MongoDB"
  ],
  "Frontend & Mobile": [
    "React", "Next.js", "React Native", "TypeScript", "TailwindCSS"
  ],
  "MLOps & Cloud": [
    "Docker", "Kubernetes", "AWS", "MLflow", "GitHub Actions"
  ],
  "Data Science": [
    "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly"
  ]
}

export default function TechStack() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Technologies I Master</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit spanning AI, full-stack development, and cloud infrastructure
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-12">
          {Object.entries(techStack).map(([category, technologies], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-primary">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: catIndex * 0.1 + techIndex * 0.05 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="px-5 py-3 card-glass rounded-lg cursor-pointer group relative overflow-hidden"
                  >
                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    
                    <span className="relative z-10 font-medium group-hover:text-primary transition-colors">
                      {tech}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-500 text-sm">
            And 20+ more technologies in my arsenal
          </p>
        </motion.div>
      </div>
    </section>
  )
}