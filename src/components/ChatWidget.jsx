import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'Hi! 👋 Welcome to Snehal Printers. How can I help you today?',
    },
  ])
  const [inputValue, setInputValue] = useState('')
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const predefinedQuestions = [
    'What are our different products?',
    'If you need something not in our listed products',
    'If you have any other queries',
  ]

  const getBotResponse = (question) => {
    const lowerQuestion = question.toLowerCase()
    
    if (lowerQuestion.includes('product') || lowerQuestion.includes('different')) {
      return {
        type: 'bot',
        text: 'We offer a wide range of printing products including:\n\n• Estimations and Quotations\n• Letter Head\n• Annual Reports\n• Challan & Gate Pass\n• Business Cards\n• Bill Books\n• Business Forms\n• Envelopes\n• Registers\n• Delivery Challan\n• Newsletters and Periodicals\n• Flyers and Leaflets\n• Office Files\n• Sales Brochures\n• Vouchers and Tags\n• Labels and Stickers\n• Notepads and Deskpads\n\nFor more details, please contact us via email: info@snehalprinters.in'
      }
    } else if (lowerQuestion.includes('need something') || lowerQuestion.includes('not in') || lowerQuestion.includes('listed')) {
      return {
        type: 'bot',
        text: 'If you need something that\'s not in our listed products, please contact us! We specialize in custom printing solutions and can accommodate your specific requirements.\n\n📧 Email: info@snehalprinters.in\n📞 Phone: 7755904602'
      }
    } else if (lowerQuestion.includes('query') || lowerQuestion.includes('other') || lowerQuestion.includes('help')) {
      return {
        type: 'bot',
        text: 'For any other queries, please feel free to contact us:\n\n📧 Email: info@snehalprinters.in\n📞 Phone: 7755904602\n📍 Address: Sr. No. 35/3, Near St. Ursula School, Behind Hanuman Mandir, Dattawadi, Akurdi, Pune - 411 035, Maharashtra, India\n\nWe\'re here to help! 😊'
      }
    } else {
      return {
        type: 'bot',
        text: 'Thank you for your message! For any inquiries, please contact us:\n\n📧 Email: info@snehalprinters.in\n📞 Phone: 7755904602\n\nOur team will get back to you shortly.'
      }
    }
  }

  const handleQuestionClick = (question) => {
    const userMessage = { type: 'user', text: question }
    setMessages((prev) => [...prev, userMessage])
    
    setTimeout(() => {
      const botResponse = getBotResponse(question)
      setMessages((prev) => [...prev, botResponse])
    }, 800)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    const userMessage = { type: 'user', text: inputValue }
    setMessages((prev) => [...prev, userMessage])
    setInputValue('')

    setTimeout(() => {
      const botResponse = getBotResponse(inputValue)
      setMessages((prev) => [...prev, botResponse])
    }, 800)
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 left-8 z-50 w-16 h-16 bg-primary text-white rounded-full shadow-2xl hover:shadow-primary/50 transition-shadow flex items-center justify-center"
        aria-label="Open chat"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
          </svg>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 left-8 z-50 w-96 max-h-[600px] bg-white dark:bg-dark rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-secondary p-4 text-white">
              <h3 className="text-lg font-bold">Snehal Printers Assistant</h3>
              <p className="text-sm opacity-90">How can we help you today?</p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-96">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-primary text-white rounded-br-none'
                        : 'bg-gray-100 dark:bg-dark/50 text-dark dark:text-white rounded-bl-none'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Predefined Questions */}
            {messages.length === 1 && (
              <div className="px-4 pb-2">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Quick questions:</p>
                <div className="space-y-2">
                  {predefinedQuestions.map((question, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleQuestionClick(question)}
                      className="w-full text-left px-3 py-2 bg-gray-50 dark:bg-dark/30 hover:bg-primary/10 dark:hover:bg-primary/20 rounded-lg text-sm text-gray-700 dark:text-gray-300 transition-colors"
                    >
                      {question}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark/50 text-dark dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="px-4 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Send
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  )
}

export default ChatWidget