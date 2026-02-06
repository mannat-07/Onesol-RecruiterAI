'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface FAQItemProps {
  question: string
  answer: string
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-200 dark:bg-darksecondary dark:border-gray-700 overflow-hidden mb-3 transition-all duration-300"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <span className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white pr-4 leading-tight">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-4 text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const faqs = [
    {
      question: "How does AI screening work?",
      answer: "Our AI analyzes resumes using natural language processing to identify key skills, experience, and qualifications. It scores candidates based on your custom criteria and only surfaces the top 20% for your review. The system learns from your hiring decisions to improve over time."
    },
    {
      question: "Does RecruiterAI integrate with ATS systems?",
      answer: "Yes! RecruiterAI integrates seamlessly with popular ATS platforms including Greenhouse, Lever, Workday, and BambooHR. We also offer API access for custom integrations. Your existing workflows remain intact while AI handles the heavy lifting."
    },
    {
      question: "What's the pricing?",
      answer: "We offer flexible pricing starting at $299/month for startups (up to 50 applications/month), $799/month for growing companies (up to 500 applications/month), and custom enterprise plans for larger organizations. All plans include unlimited users and AI interviews."
    },
    {
      question: "How long does setup take?",
      answer: "Most companies are up and running in under 30 minutes. Simply connect your job boards, set your screening criteria, and you're ready to go. Our onboarding team provides white-glove support to ensure a smooth transition."
    },
    {
      question: "Is candidate data secure?",
      answer: "Absolutely. We're SOC 2 Type II certified and GDPR compliant. All data is encrypted at rest and in transit. We never share candidate information with third parties, and you maintain full control over your data with easy export options."
    }
  ]

  return (
    <section className="py-12 sm:py-16 bg-gray-50 dark:bg-darkbg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-8 sm:mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 leading-tight"
          >
            Frequently Asked <span className="text-gradient">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4"
          >
            Everything you need to know about RecruiterAI
          </motion.p>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-8"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4 text-xs sm:text-sm">
            Still have questions? We're here to help.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary-dark transition-all duration-300 hover:shadow-md"
          >
            Contact Support
          </a>
        </motion.div>
      </div>
    </section>
  )
}