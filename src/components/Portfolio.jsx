import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState(null)

  const portfolioItems = [
    { image: '/quote.jpg', title: 'Estimations and Quotations', category: 'Documents' },
    { image: '/letterh.jpg', title: 'Letter Head', category: 'Stationery' },
    { image: '/annual.jpg', title: 'Annual Reports', category: 'Reports' },
    { image: '/Challan.png', title: 'Challan', category: 'Documents' },
    { image: '/gate.jpg', title: 'Gate Pass', category: 'Documents' },
    { image: '/busi.jpg', title: 'Business Cards', category: 'Stationery' },
    { image: '/reciept.jpeg', title: 'Bill Books', category: 'Documents' },
    { image: '/busiform.png', title: 'Business Form', category: 'Forms' },
    { image: '/enev.png', title: 'Envelopes', category: 'Stationery' },
    { image: '/reg.jpg', title: 'Registers', category: 'Documents' },
    { image: '/del.jpg', title: 'Delivery Challan', category: 'Documents' },
    { image: '/np.jpg', title: 'Newsletters and Periodicals', category: 'Publications' },
    { image: '/fly.jpg', title: 'Flyers and Leaflets', category: 'Marketing' },
    { image: '/file.jpg', title: 'Office Files', category: 'Stationery' },
    { image: '/sales.jpg', title: 'Sales Brochures', category: 'Marketing' },
    { image: '/tags.jpg', title: 'Vouchers and Tags', category: 'Documents' },
    { image: '/stick.png', title: 'Labels and Stickers', category: 'Marketing' },
    { image: '/desk.jpg', title: 'Notepads and Deskpads', category: 'Stationery' },
  ]

  return (
    <section id="product-section" className="py-20 bg-white dark:bg-dark/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Our Products</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer card-hover"
              onClick={() => setSelectedItem(item)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-3 py-1 bg-primary text-dark text-xs font-semibold rounded-full mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <div className="flex items-center text-primary">
                    <i className="fas fa-eye mr-2"></i>
                    <span className="text-sm font-medium">View Details</span>
                  </div>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-primary/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white dark:bg-dark rounded-2xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="p-6 bg-white dark:bg-dark">
                <h3 className="text-2xl font-bold text-dark dark:text-white">{selectedItem.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">{selectedItem.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Portfolio
