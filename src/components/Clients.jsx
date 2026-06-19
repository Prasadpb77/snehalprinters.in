import { motion } from 'framer-motion'

const Clients = () => {
  const clientImages = [
    '/image1.jpeg',
    '/image2.jpeg',
    '/image3.jpeg',
    '/image4.jpeg',
    '/image5.jpeg',
    '/image6.jpeg',
    '/image7.jpeg',
    '/image8.jpeg',
    '/image9.jpeg',
    '/image10.jpeg',
    '/image11.jpeg',
  ]

  return (
    <section id="clients-section" className="py-20 bg-white dark:bg-dark/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Our Clients</h2>
        </motion.div>

        <div className="relative overflow-hidden">
          {/* Fading edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-dark to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-dark to-transparent z-10" />
          
          <motion.div
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 30,
                ease: 'linear',
              },
            }}
            className="flex space-x-12 items-center"
          >
            {[...clientImages, ...clientImages].map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="flex-shrink-0 w-32 h-32 bg-gray-100 dark:bg-dark/30 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={image}
                  alt={`Client ${index + 1}`}
                  className="w-full h-full object-contain p-4"
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