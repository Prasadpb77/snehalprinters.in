import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about-section" className="py-20 bg-white dark:bg-dark/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/about.jpg"
                alt="About Snehal Printers"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
            </div>
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-primary text-dark px-6 py-4 rounded-xl shadow-xl"
            >
              <div className="text-3xl font-bold">31+</div>
              <div className="text-sm font-medium">Years Experience</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="section-title">
              <b>31+ Years Experience</b>
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Snehal Printers is a printing company in Pimpri Chinchwad, Pune, Maharashtra. Offering full range of print services to a variety of clients operating across many different Industrial sectors. We are a one-stop shop for all your printing requirements our customised solutions are tailored specifically to your individual needs, ensuring the best results every time throughout the in house prepress, printing, finishing and binding process.
              </p>
              <p>
                At Snehal Printers, we believe in creating value for our customers who are looking for the highest quality of printing, b & w copying, colour copying, graphic design. Our strong reputation is built on the successful delivery of all assignments, no matter how challenging the brief or how tight the time frame and combine experience of over 30 years.
              </p>
              <p>
                We collaborate with customers to understand their requirements fully and to provide the optimal results using the highest specifications appropriate for their budget. We pride ourselves on professionalism, loyalty and a commitment to upholding the needs of our clients, making Snehal Printers the premier destination for printing.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
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
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
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