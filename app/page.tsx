import Hero from '@/components/Hero'
import Philosophy from '@/components/Philosophy'
import Projects from '@/components/Projects'
import TechStack from '@/components/TechStack'
import CurrentFocus from '@/components/CurrentFocus'
import About from '@/components/About'
import Achievements from '@/components/Achievements'
import Collaboration from '@/components/Collaboration'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background gradient mesh */}
      <div className="fixed inset-0 gradient-mesh pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <Philosophy />
        <Projects />
        <TechStack />
        <CurrentFocus />
        <About />
        <Achievements />
        <Collaboration />
        <Footer />
      </div>
    </main>
  )
}