import { motion } from 'framer-motion'

const Clients = () => {
  const clientImages = [
    '/image1.jpeg', '/image3.jpeg', '/image4.jpeg',
    '/image5.jpeg', '/image6.jpeg', '/image7.jpeg', '/image8.jpeg',
    '/image9.jpeg', '/image10.jpeg', '/image11.jpeg',
  ]

  return (
    <section id="clients-section" className="py-24 bg-slate-50 dark:bg-slate/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center space-x-2 text-primary font-semibold text-sm tracking-widest uppercase mb-4">
            <span className="w-8 h-px bg-primary" />
            <span>Trusted By</span>
            <span className="w-8 h-px bg-primary" />
          </div>
          <h2 className="section-title">Our Clients</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto mt-2 text-sm">
            Proud to serve 500+ businesses across Pune and Maharashtra
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          {/* Edge fades */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 dark:from-ink to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 dark:from-ink to-transparent z-10" />

          <motion.div
            animate={{ x: [0, -1200] }}
            transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 32, ease: 'linear' } }}
            className="flex space-x-8 items-center"
          >
            {[...clientImages, ...clientImages, ...clientImages].map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.08, y: -4 }}
                className="flex-shrink-0 w-28 h-28 bg-white dark:bg-slate rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border border-slate-100 dark:border-white/5"
              >
                <img
                  src={image}
                  alt={`Client of Snehal Printers, Pune`}
                  className="w-full h-full object-contain p-3"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Clients
