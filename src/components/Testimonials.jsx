import { motion } from 'framer-motion'

const Testimonials = () => {
  const testimonials = [
    {
      quote: 'Online reviews can make or break a customer\'s decision to make a purchase. Read about these customer review sites where your customers\'',
      name: 'Delbert Simonas',
      profession: 'Store Owner',
    },
    {
      quote: 'When you think of Apple you automatically think expensive if your anything like me. When purchasing this laptop I was skeptical on laptops i purchased.',
      name: 'Tikoh Amin',
      profession: 'Salon Owner',
    },
    {
      quote: 'I\'ve wanted a MacBook for a while now because of the build quality and the simplicity of the OS. I spend an average 6 hours a day using it for college and the battery still has a fair.',
      name: 'Malachi Lensing',
      profession: 'Marketing Manager',
    },
    {
      quote: 'This MacBook has excellent processing speed. The screen is crystal clear and I really enjoy the touchbar. I set up the fingerprint reader.',
      name: 'Christian Isla',
      profession: 'Android Developer',
    },
    {
      quote: 'For the last 10 years, I have owned an old Gateway laptop. Although it was amazing and lasted me, it was time for an upgrade. I own an Apple phone so I decided to look into a computer.',
      name: 'Lori Charles',
      profession: 'Sales Manager',
    },
  ]

  return (
    <section id="testi-section" className="py-20 bg-gray-50 dark:bg-dark/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Client Testimonials</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-dark/50 rounded-2xl p-8 shadow-xl card-hover"
            >
              <div className="mb-6">
                <svg className="w-12 h-12 text-primary/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-dark dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.profession}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials