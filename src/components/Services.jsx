import { motion } from 'framer-motion'

const Services = () => {
  const services = [
    {
      image: '/service-3.jpg',
      title: 'Offset Printing',
      description: 'Offset printing is our speciality and provides the best option for ensuring your corporate branding remains consistent and colour matched to perfection. With years of experience in the industry, you can be certain that your corporate printing requirements are in great hands and that your branding will come through with flying colours.',
    },
    {
      image: '/service-4.jpg',
      title: 'Digital Printing',
      description: 'Digital printing is a fantastic option when you need something in a hurry. Forgot to get those flyers printed ready for the launch on Monday? Need them to wow your customers? Not a problem, we can help you with a quick turn around on all your short run digital printing needs with high quality.',
    },
  ]

  return (
    <section id="service-section" className="py-20 bg-gray-50 dark:bg-dark/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Services Provided</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="card-hover bg-white dark:bg-dark/50 rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-dark dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services