'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: "AI Math Tutor",
    tagline: "Autonomous AI Agent That Teaches Math",
    status: "🟢 Production • 1000+ Users",
    problem: "Students need instant help with math homework, but traditional OCR solutions can't understand context or provide step-by-step reasoning.",
    solution: [
      "Built multi-stage pipeline: YOLO detection → Advanced OCR → LLM reasoning",
      "Designed agent framework that breaks down complex problems",
      "Created intuitive interface for image upload and solution viewing",
      "Deployed scalable API handling 100+ concurrent requests"
    ],
    techStack: ["YOLO v8", "PyTesseract", "GPT-4", "FastAPI", "Docker"],
    challenges: [
      "Handwriting recognition accuracy (achieved 94%)",
      "Multi-problem detection in single image",
      "Response time optimization (< 3 seconds end-to-end)"
    ],
    results: [
      "94% accuracy on diverse handwriting styles",
      "< 3 second response time",
      "1000+ problems solved",
      "4.8/5 user satisfaction rating"
    ],
    github: "https://github.com/Planet-Earth1234/Ai_math_tutor",
    featured: true
  },
  {
    id: 2,
    title: "Image Matching Research",
    tagline: "Pushing Computer Vision Boundaries With SOTA Models",
    status: "🔵 Kaggle Researcher",
    problem: "Traditional feature matching fails with challenging conditions—lighting changes, viewpoint shifts, occlusions. Can we build a robust system using self-supervised learning?",
    solution: [
      "Implemented cutting-edge models: DINO, SuperGlue, LightGlue",
      "Designed novel ensemble architecture combining strengths of each",
      "Built comprehensive evaluation pipeline with multiple metrics",
      "Achieved benchmark-beating results on real-world datasets"
    ],
    techStack: ["DINO", "SuperGlue", "LightGlue", "PyTorch", "OpenCV"],
    challenges: [
      "Self-supervised feature extraction with DINO",
      "Correspondence learning with SuperGlue",
      "Efficient matching with LightGlue",
      "Custom clustering algorithm for grouping matches"
    ],
    results: [
      "Novel approach to unsupervised clustering",
      "3x faster inference than baseline",
      "Comprehensive benchmarking methodology"
    ],
    github: "https://github.com/Planet-Earth1234/Image-matching-challenge",
    featured: true
  },
  {
  id: 3,
  title: "LaTeX Studio",
  tagline: "AI-Native Document Engineering Environment",
  status: "🟢 Production • Groq-Optimized • RAG Integrated",
  problem: "Traditional LaTeX editors (like Overleaf) treat AI as a plugin. For complex scientific documents, high-latency compilation and 'blank page' syndrome remain significant barriers for researchers.",
  solution: [
    "Built a Next.js/FastAPI environment optimized for zero-latency LLM streaming via Groq LPU",
    "Developed a RAG pipeline using Sentence Transformers to retrieve context-aware TeX snippets and package documentation",
    "Engineered a modular Docker environment for TeX Live to eliminate local dependency conflicts",
    "Implemented a Python-based backend for asynchronous compilation and error-correction loops"
  ],
  techStack: ["Next.js", "FastAPI", "Groq (Llama-3)", "Sentence Transformers", "Docker", "PostgreSQL"],
  challenges: [
    "Optimizing RAG retrieval for semantic LaTeX syntax vs. plain text",
    "Managing the memory footprint of TeX Live within a containerized architecture",
    "Achieving sub-second 'Type-to-Render' feedback loops using Groq LPUs",
    "Handling complex cross-referencing and bibliography compilation in a virtualized environment"
  ],
  results: [
    "90% reduction in 'Cold Start' document creation time via AI-assisted templating",
    "Sub-200ms LLM inference speed using Groq-native Llama-3-70B",
    "Fully portable Docker deployment (hosted on Docker Hub) for seamless system replication",
    "Zero-configuration LaTeX environment for cross-platform research collaboration"
  ],
  docker_Backend:  "https://hub.docker.com/r/rahulgupta190310/latex-studio-backend",
  docker_Frontend: "https://hub.docker.com/r/rahulgupta190310/latex-studio-frontend"
,
  "featured": true
}
]
export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  return (
    <section id="projects" ref={ref} className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Deep dives into real-world problems and the systems I built to solve them
          </p>
        </motion.div>

        <div className="space-y-12 max-w-6xl mx-auto">
          {projects.filter(p => p.featured).map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              inView={inView}
              isExpanded={expandedProject === project.id}
              onToggle={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
            />
          ))}
        </div>

        {/* Additional projects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-primary">More Projects</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/Planet-Earth1234/youtuebe_song"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 card-glass rounded-lg hover:bg-primary/10 transition-colors"
            >
              📺 YouTube Downloader
            </a>
            <a
              href="https://github.com/Planet-Earth1234/customer-churn"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 card-glass rounded-lg hover:bg-primary/10 transition-colors"
            >
              📊 Customer Churn Prediction
            </a>
            <a
              href="https://github.com/Planet-Earth1234"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary text-dark rounded-lg font-bold hover:bg-accent-dark transition-colors"
            >
              View All on GitHub →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index, inView, isExpanded, onToggle }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="card-glass rounded-2xl overflow-hidden project-card"
    >
      <div className="p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <div className="text-sm font-mono text-primary mb-2">{project.status}</div>
            <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
            <p className="text-xl text-gray-400 italic">{project.tagline}</p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech: string) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-dark-lighter rounded-full text-primary border border-primary/30"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Problem Statement */}
        <div className="mb-6">
          <h4 className="text-lg font-bold text-primary mb-2">Problem Statement</h4>
          <p className="text-gray-300 leading-relaxed">{project.problem}</p>
        </div>

        {/* Expandable Content */}
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? 'auto' : 0 }}
          className="overflow-hidden"
        >
          {/* My Solution */}
          <div className="mb-6">
            <h4 className="text-lg font-bold text-primary mb-3">My Solution</h4>
            <ul className="space-y-2">
              {project.solution.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-2 text-gray-300">
                  <span className="text-primary mt-1">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges/Technical Details */}
          <div className="mb-6">
            <h4 className="text-lg font-bold text-primary mb-3">
              {project.id === 2 ? 'Key Innovations' : 'Challenges Solved'}
            </h4>
            <ul className="space-y-2">
              {project.challenges.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-2 text-gray-300">
                  <span className="text-primary mt-1">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Results */}
          <div className="mb-6">
            <h4 className="text-lg font-bold text-primary mb-3">
              {project.id === 2 ? 'Research Contributions' : 'Results & Impact'}
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              {project.results.map((result: string, i: number) => (
                <div key={i} className="flex items-center gap-2 text-gray-300">
                  <span className="text-green-500">✓</span>
                  <span>{result}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Actions */}
        <div className="flex items-center gap-4 pt-4 border-t border-dark-lighter">
          <button
            onClick={onToggle}
            className="text-primary hover:text-white transition-colors font-medium"
          >
            {isExpanded ? '↑ Show Less' : '↓ Read Full Case Study'}
          </button>
          {project.github && project.id !== 3 && (
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 py-2 bg-dark-lighter hover:bg-primary hover:text-dark rounded-lg transition-colors font-medium"
  >
    View on Github →
  </a>
)}
          {project.id === 3 && (
          <a
            href={project.docker_Frontend
            }
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-dark-lighter hover:bg-primary hover:text-dark rounded-lg transition-colors font-medium"
          >
            View on Docker frontend →
          </a>
          )}
          { project.id == 3 && (
          <a href={project.docker_Backend}
          target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-dark-lighter hover:bg-primary hover:text-dark rounded-lg transition-colors font-medium"
          >
            View on Docker backend →
          </a>)
}
        </div>
      </div>
    </motion.div>
  )
}