import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact-section" className="bg-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold mb-6 gradient-text">Get In Touch</h3>
            <div className="space-y-4">
              <motion.p
                whileHover={{ x: 5 }}
                className="flex items-start space-x-3 text-gray-300"
              >
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>
                  Sr. No. 35/3, Near St. Ursula School, Behind Hanuman Mandir,<br />
                  Dattawadi, Akurdi, Pune - 411 035. Maharashtra, India
                </span>
              </motion.p>
              
              <motion.a
                href="tel:+917755904602"
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-gray-300 hover:text-primary transition-colors"
              >
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>7755904602</span>
              </motion.a>
              
              <motion.a
                href="mailto:info@snehalprinters.in"
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-gray-300 hover:text-primary transition-colors"
              >
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>info@snehalprinters.in</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 gradient-text">Useful Link</h3>
            <ul className="space-y-3">
              {[
                { href: '#about-section', label: 'About' },
                { href: '#service-section', label: 'Service' },
                { href: '#product-section', label: 'Products' },
                { href: '#testi-section', label: 'Testimonials' },
                { href: '#contact-section', label: 'Contact' },
              ].map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6 gradient-text">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-300">Offset Printing</li>
              <li className="text-gray-300">Digital Printing</li>
              <li className="text-gray-300">Graphic Design</li>
              <li className="text-gray-300">B&W Copying</li>
              <li className="text-gray-300">Colour Copying</li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-gray-800 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400">
            &copy; {currentYear} <a href="#" className="text-primary hover:underline">Snehal Printers</a>, All Right Reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Developed by{' '}
            <a
              href="https://www.linkedin.com/in/prasad-bhavsar-868a3019b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Prasad Bhavsar
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer