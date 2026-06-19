import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState(null)
  const [activeFilter, setActiveFilter] = useState('All')

  const portfolioItems = [
    { image: '/quote.jpg', title: 'Estimations & Quotations', category: 'Documents' },
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
    { image: '/np.jpg', title: 'Newsletters & Periodicals', category: 'Publications' },
    { image: '/fly.jpg', title: 'Flyers & Leaflets', category: 'Marketing' },
    { image: '/file.jpg', title: 'Office Files', category: 'Stationery' },
    { image: '/sales.jpg', title: 'Sales Brochures', category: 'Marketing' },
    { image: '/tags.jpg', title: 'Vouchers & Tags', category: 'Documents' },
    { image: '/stick.png', title: 'Labels & Stickers', category: 'Marketing' },
    { image: '/desk.jpg', title: 'Notepads & Deskpads', category: 'Stationery' },
  ]

  const categories = ['All', ...new Set(portfolioItems.map(i => i.category))]
  const filtered = activeFilter === 'All' ? portfolioItems : portfolioItems.filter(i => i.category === activeFilter)

  return (
    <section id="product-section" className="py-24 bg-white dark:bg-ink">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 text-primary font-semibold text-sm tracking-widest uppercase mb-4">
            <span className="w-8 h-px bg-primary" />
            <span>What We Print</span>
            <span className="w-8 h-px bg-primary" />
          </div>
          <h2 className="section-title">Our Products</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto mt-2">
            From business stationery to marketing materials — we print it all
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-slate-100 dark:bg-slate text-slate-600 dark:text-slate-400 hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, index) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl hover:shadow-primary/10 cursor-pointer transition-shadow duration-300 bg-slate-50 dark:bg-slate"
                onClick={() => setSelectedItem(item)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={`${item.title} printing by Snehal Printers`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  <span className="inline-block px-2.5 py-1 bg-primary text-white text-xs font-bold rounded-full mb-2 w-fit">
                    {item.category}
                  </span>
                  <h3 className="text-sm font-bold text-white leading-tight">{item.title}</h3>
                </div>

                {/* Default label */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-white/95 dark:bg-slate/95 group-hover:opacity-0 transition-opacity duration-300">
                  <p className="text-xs font-semibold text-ink dark:text-white truncate">{item.title}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/95 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-white dark:bg-slate rounded-3xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-ink/60 hover:bg-ink/80 rounded-full transition-colors"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-auto max-h-[75vh] object-contain"
              />
              <div className="p-6 border-t border-slate-100 dark:border-white/10">
                <span className="text-xs font-bold text-primary tracking-widest uppercase">{selectedItem.category}</span>
                <h3 className="text-xl font-bold text-ink dark:text-white mt-1">{selectedItem.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Portfolio
