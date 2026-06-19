import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about-section" className="py-24 bg-white dark:bg-ink">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/about.jpg"
                alt="Inside Snehal Printers – offset printing facility in Pune"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-primary text-white px-7 py-5 rounded-2xl shadow-2xl"
            >
              <div className="text-4xl font-bold leading-none">31+</div>
              <div className="text-xs font-semibold tracking-widest uppercase mt-1 text-blue-200">Years of Trust</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 pt-6 lg:pt-0"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center space-x-2 text-primary font-semibold text-sm tracking-widest uppercase">
              <span className="w-8 h-px bg-primary" />
              <span>Who We Are</span>
            </div>

            <h2 className="section-title text-4xl md:text-5xl">
              31+ Years of Print Excellence
            </h2>

            <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed text-base">
              <p>
                Snehal Printers is a full-service printing company based in Pimpri Chinchwad, Pune. We offer a complete range of print services to clients across diverse industries — from startups to established corporates.
              </p>
              <p>
                We are your one-stop shop for all printing requirements. Our customised solutions are tailored to individual needs, ensuring the best results every time — through in-house prepress, printing, finishing, and binding.
              </p>
              <p>
                With over three decades of experience in offset printing, digital printing, graphic design, and copying, we pride ourselves on professionalism, loyalty, and a commitment to delivering outstanding results, no matter how tight the deadline.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-100 dark:border-white/10">
              {[
                { number: '31+', label: 'Years Experience' },
                { number: '500+', label: 'Happy Clients' },
                { number: '1000+', label: 'Projects Done' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center py-4"
                >
                  <div className="text-3xl font-bold text-primary">{stat.number}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-500 mt-1 tracking-wide">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
