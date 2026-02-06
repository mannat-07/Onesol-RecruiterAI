'use client'

import { motion } from 'framer-motion'
import Button from './Button'

export default function Hero() {
  const painPoints = [
    {
      name: 'Sarah K.',
      title: 'Founder at TechStart',
      quote: 'Candidates wait 3 weeks for replies while I\'m juggling everything. We\'re losing great talent to competitors.',
      position: 'top-24 left-4 xl:left-10',
      delay: 0.3
    },
    {
      name: 'Rahul M.',
      title: 'Hiring Manager at GrowthCo',
      quote: 'Posted on LinkedIn. Got 200 applications. Skimmed 20. Hired on gut feeling. They quit in 2 months.',
      position: 'top-32 right-4 xl:right-10',
      delay: 0.5
    },
    {
      name: 'Priya S.',
      title: 'CEO at InnovateLabs',
      quote: 'I\'m the CEO, product lead, AND doing HR. There\'s zero time to read 200 resumes.',
      position: 'bottom-32 left-8 xl:left-20',
      delay: 0.7
    },
    {
      name: 'Amit T.',
      title: 'Head of HR at ScaleUp',
      quote: 'Our best candidate accepted another offer while we were still scheduling interviews.',
      position: 'bottom-24 right-8 xl:right-20',
      delay: 0.9
    }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-darkbg dark:via-darksecondary dark:to-darkbg pt-32 sm:pt-36 pb-16 sm:pb-20">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-20 w-64 h-64 sm:w-72 sm:h-72 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-20 w-64 h-64 sm:w-72 sm:h-72 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      {/* Floating Pain Points - Hidden on mobile, visible on large screens */}
      <div className="hidden lg:block">
        {painPoints.map((point, index) => (
          <motion.div
            key={index}
            className={`absolute ${point.position} max-w-xs pointer-events-none z-20`}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              y: [0, -15, 0]
            }}
            transition={{ 
              opacity: { duration: 0.6, delay: point.delay },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: point.delay
              }
            }}
          >
            {/* User Icon Circle */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: point.delay }}
              className="relative z-10"
            >
              <div className="w-10 h-10 bg-transparent border-2 border-white rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
            </motion.div>

            {/* Connecting Line */}
            <motion.div
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: point.delay + 0.3 }}
              className="h-8 border-l-2 border-dotted border-white ml-5 origin-top"
            />

            {/* Quote Card */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: point.delay + 0.5 }}
              className="bg-white/90 dark:bg-darksecondary/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-gray-200/50 dark:border-gray-700/50"
            >
              <p className="text-xs text-gray-700 dark:text-gray-300 mb-2 italic leading-relaxed">
                "{point.quote}"
              </p>
              <div className="flex items-center gap-2">
                <div>
                  <p className="text-xs font-semibold text-gray-900 dark:text-white">{point.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{point.title}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl lg:max-w-3xl xl:max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8 leading-[1.1] tracking-tight">
              Every Hire,{' '}
              <span className="text-gradient block sm:inline mt-2 sm:mt-0">
                Faster and Better
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 mb-10 sm:mb-12 md:mb-14 leading-relaxed max-w-3xl mx-auto px-4"
          >
            Stop losing great candidates to slow, manual hiring processes. Let AI handle the heavy lifting while you focus on building your team.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
          >
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              Start Hiring Smarter
            </Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              See How It Works
            </Button>
          </motion.div>

          {/* Trust badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 sm:mt-16 md:mt-20"
          >
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 font-medium">
              Trusted by <span className="text-primary">500+ companies</span> worldwide
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}