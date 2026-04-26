import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Manifesto from './components/Manifesto.jsx'
import Practices from './components/Practices.jsx'
import Capabilities from './components/Capabilities.jsx'
import Approach from './components/Approach.jsx'
import Principles from './components/Principles.jsx'
import Cta from './components/Cta.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <Header scrolled={scrolled} />
      <main>
        <Hero />
        <Manifesto />
        <Practices />
        <Capabilities />
        <Approach />
        <Principles />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
