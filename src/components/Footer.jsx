import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-ink text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img src="/index.png" alt="Snehal Printers" className="h-14 w-auto mb-5" />
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Pimpri Chinchwad's trusted print partner for 31+ years. From offset to digital — we deliver quality that speaks for itself.
            </p>
            <div className="flex space-x-3 mt-6">
              <motion.a
                href="tel:+919503105900"
                whileHover={{ y: -2 }}
                className="flex items-center space-x-2 bg-white/5 hover:bg-primary/20 text-slate-300 hover:text-white border border-white/10 hover:border-primary/30 px-4 py-2.5 rounded-xl text-sm transition-all"
              >
                <i className="fas fa-phone text-primary text-xs" />
                <span>9503105900</span>
              </motion.a>
              <motion.a
                href="mailto:info@snehalprinters.in"
                whileHover={{ y: -2 }}
                className="flex items-center space-x-2 bg-white/5 hover:bg-primary/20 text-slate-300 hover:text-white border border-white/10 hover:border-primary/30 px-4 py-2.5 rounded-xl text-sm transition-all"
              >
                <i className="fas fa-envelope text-primary text-xs" />
                <span>Email Us</span>
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-5">Navigate</h4>
            <ul className="space-y-3">
              {[
                { href: '#about-section', label: 'About Us' },
                { href: '#service-section', label: 'Services' },
                { href: '#product-section', label: 'Products' },
                { href: '#clients-section', label: 'Clients' },
                { href: '#contact-section', label: 'Contact' },
              ].map((link, index) => (
                <motion.li key={index} whileHover={{ x: 4 }}>
                  <a href={link.href} className="text-slate-400 hover:text-white text-sm transition-colors flex items-center space-x-2">
                    <span className="w-1 h-1 bg-primary rounded-full" />
                    <span>{link.label}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-5">Services</h4>
            <ul className="space-y-3">
              {['Offset Printing', 'Digital Printing', 'Graphic Design', 'B&W Copying', 'Colour Copying', 'Finishing & Binding'].map((s, i) => (
                <li key={i} className="text-slate-400 text-sm flex items-center space-x-2">
                  <span className="w-1 h-1 bg-accent rounded-full" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Address strip */}
        <div className="border-t border-white/10 pt-6 mb-6">
          <p className="text-slate-500 text-xs text-center">
            <i className="fas fa-map-marker-alt text-primary mr-2" />
            Sr. No. 35/3, Near St. Ursula School, Behind Hanuman Mandir, Dattawadi, Akurdi, Pune – 411 035. Maharashtra, India
          </p>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 gap-2">
          <p>
            &copy; {currentYear}{' '}
            <a href="/" className="text-slate-400 hover:text-white transition-colors font-medium">Snehal Printers</a>.
            {' '}All rights reserved.
          </p>
          <p>
            Developed by{' '}
            <a
              href="https://www.linkedin.com/in/prasad-bhavsar-868a3019b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors font-semibold"
            >
              Prasad Bhavsar
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
