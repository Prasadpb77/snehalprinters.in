import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = ({ darkMode, setDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#about-section', label: 'About' },
    { href: '#service-section', label: 'Service' },
    { href: '#product-section', label: 'Products' },
    { href: '#testi-section', label: 'Testimonials' },
    { href: '#clients-section', label: 'Clientele' },
    { href: '#contact-section', label: 'Contact' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? darkMode
            ? 'glass-dark shadow-2xl'
            : 'bg-white/90 backdrop-blur-lg shadow-lg'
          : darkMode
          ? 'bg-transparent'
          : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.a
            href="index.html"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center"
          >
            <img
              src="/index.png"
              alt="Snehal Printers Logo"
              className="h-16 w-auto"
            />
          </motion.a>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            <motion.a
              href="tel:+917755904602"
              className={`flex items-center space-x-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'} hover:text-primary transition-colors`}
              whileHover={{ scale: 1.05 }}
            >
              <i className="fas fa-phone-alt"></i>
              <span className="font-medium">7755904602</span>
            </motion.a>
            <motion.a
              href="mailto:info@snehalprinters.in"
              className={`flex items-center space-x-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'} hover:text-primary transition-colors`}
              whileHover={{ scale: 1.05 }}
            >
              <i className="fas fa-envelope"></i>
              <span className="font-medium">info@snehalprinters.in</span>
            </motion.a>
          </div>

          {/* Dark Mode Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-lg transition-colors ${
              darkMode
                ? 'bg-white/10 text-yellow-400 hover:bg-white/20'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-2.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg ${darkMode ? 'text-white' : 'text-dark'}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <AnimatePresence>
          {(isMobileMenuOpen || window.innerWidth >= 1024) && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`lg:block ${isMobileMenuOpen ? 'block' : 'hidden'}`}
            >
              <div className={`flex flex-col lg:flex-row lg:items-center lg:justify-between py-4 space-y-4 lg:space-y-0`}>
                <div className="flex flex-col lg:flex-row lg:items-center space-y-2 lg:space-y-0 lg:space-x-8">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`font-medium hover:text-primary transition-colors ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </div>
                <motion.a
                  href="#contact-section"
                  className="btn-primary inline-block text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get A Quote
                </motion.a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Header