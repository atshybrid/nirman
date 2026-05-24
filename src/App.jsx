import { useEffect } from 'react'
import Preloader from './components/Preloader'
import TopBar from './components/TopBar'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Locations from './components/Locations'
import Services from './components/Services'
import GreenTech from './components/GreenTech'
import Projects from './components/Projects'
import Stats from './components/Stats'
import About from './components/About'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CtaBanner from './components/CtaBanner'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import BackToTop from './components/BackToTop'
import MobileCTA from './components/MobileCTA'
import { useScrollReveal } from './hooks/useScrollReveal'
import './App.css'

function App() {
  useScrollReveal()

  useEffect(() => {
    document.body.classList.add('has-mobile-cta')
    return () => document.body.classList.remove('has-mobile-cta')
  }, [])

  return (
    <>
      <Preloader />
      <ScrollProgress />
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Locations />
        <Services />
        <GreenTech />
        <Projects />
        <Stats />
        <About />
        <Process />
        <Testimonials />
        <FAQ />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
      <MobileCTA />
    </>
  )
}

export default App
