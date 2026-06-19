import { motion } from 'framer-motion'

const Services = () => {
  const services = [
    {
      image: '/service-3.jpg',
      icon: '🖨️',
      title: 'Offset Printing',
      description: 'Offset printing is our speciality and provides the best option for ensuring your corporate branding remains consistent and colour matched to perfection. With years of experience, you can be certain your corporate printing requirements are in great hands.',
      badge: 'Most Popular',
    },
    {
      image: '/service-4.jpg',
      icon: '⚡',
      title: 'Digital Printing',
      description: 'Digital printing is a fantastic option when you need something in a hurry. Need flyers ready for Monday\'s launch? Not a problem — we can help with a quick turnaround on all your short-run digital printing needs, without compromising on quality.',
      badge: 'Fast Turnaround',
    },
  ]

  return (
    <section id="service-section" className="py-24 bg-slate-50 dark:bg-slate/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 text-primary font-semibold text-sm tracking-widest uppercase mb-4">
            <span className="w-8 h-px bg-primary" />
            <span>What We Do</span>
            <span className="w-8 h-px bg-primary" />
          </div>
          <h2 className="section-title">Services Provided</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto mt-2">
            Premium printing solutions crafted for businesses across Pune and Maharashtra
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-white dark:bg-slate rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={service.image}
                  alt={`${service.title} services at Snehal Printers, Pune`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-wide">
                  {service.badge}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-2xl">{service.icon}</span>
                  <h3 className="text-xl font-bold text-ink dark:text-white">
                    {service.title}
                  </h3>
                </div>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
                  {service.description}
                </p>
                <motion.a
                  href="#contact-section"
                  whileHover={{ x: 4 }}
                  className="inline-flex items-center space-x-2 text-primary font-semibold text-sm mt-6 group/link"
                >
                  <span>Request a Quote</span>
                  <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional services strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {['Graphic Design', 'B&W Copying', 'Colour Copying', 'Finishing & Binding', 'Prepress'].map((s) => (
            <span key={s} className="px-4 py-2 bg-white dark:bg-slate border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 text-sm font-medium rounded-full">
              {s}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
