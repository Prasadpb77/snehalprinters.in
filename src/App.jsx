import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import ChatWidget from './components/ChatWidget'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'dark bg-dark text-white' : 'bg-light text-dark'}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Clients />
      <Contact />
      <Footer />
      <BackToTop />
      <ChatWidget />
    </div>
  )
}

export default App