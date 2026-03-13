// App.jsx — Option B: 3D Hero + Scroll Portfolio
import Navbar from './components/ui/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Resume from './components/sections/Resume'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#020205', overflowX: 'hidden' }}>
      {/* Fixed navigation */}
      <Navbar />

      {/* Page sections */}
      <main>
        {/* 1 — Full-screen 3D hero */}
        <Hero />

        {/* 2 — About me */}
        <About />

        {/* 3 — Projects */}
        <Projects />

        {/* 5 — Skills */}
        <Skills />

        {/* 5 — Resume / Timeline */}
        <Resume />

        {/* 6 — Contact + Footer */}
        <Contact />
      </main>
    </div>
  )
}
