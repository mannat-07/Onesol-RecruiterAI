'use client'

import { motion } from 'framer-motion'

export default function JobBoards() {
  const platforms = [
    'LinkedIn',
    'Naukri',
    'Indeed',
    'AngelList',
    'Instahyre',
    'Wellfound',
    'IIMJobs',
    'Glassdoor',
    'Monster',
    'Cutshort'
  ]

  // Double the array for seamless infinite scroll
  const duplicatedPlatforms = [...platforms, ...platforms]

  return (
    <section className="py-12 sm:py-16 bg-gray-50 dark:bg-darkbg overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-8 sm:mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 leading-tight"
          >
            Post Once, <span className="text-gradient">Reach Everywhere</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4"
          >
            RecruiterAI automatically syncs your job postings across all major platforms
          </motion.p>
        </div>

        {/* Infinite scroll container - Simple text only */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-gray-50 dark:from-darkbg to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-gray-50 dark:from-darkbg to-transparent z-10"></div>
          
          <div className="flex overflow-hidden py-6">
            <motion.div
              className="flex gap-8 sm:gap-12"
              animate={{
                x: ['0%', '-50%'],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {duplicatedPlatforms.map((platform, index) => (
                <span
                  key={index}
                  className="flex-shrink-0 text-base sm:text-lg font-semibold text-gray-400 dark:text-gray-500 whitespace-nowrap"
                >
                  {platform}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-8"
        >
          <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
            And 15+ more platforms
          </p>
        </motion.div>
      </div>
    </section>
  )
}