import AnimatedBackground from '@/components/AnimatedBackground'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Stats from '@/components/Stats'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <Hero />
        <Skills />
        <Projects />
        <Stats />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
