'use client'

import { motion } from 'framer-motion'

interface FloatingCardProps {
  name: string
  title: string
  quote: string
  delay: number
  position: string
}

export default function FloatingCard({ name, title, quote, delay, position }: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className={`absolute ${position} hidden xl:block`}
    >
      <motion.div
        animate={{ 
          y: [0, -15, 0],
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay * 0.5
        }}
        className="bg-white/90 dark:bg-darksecondary/90 backdrop-blur-md p-5 sm:p-6 rounded-2xl sm:rounded-3xl shadow-2xl max-w-xs border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 transition-transform duration-300"
      >
        <div className="flex items-start gap-3 mb-3">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg flex-shrink-0">
            {name.charAt(0)}
          </div>
          <div className="min-w-0">
            <div className="font-bold text-gray-900 dark:text-white text-sm sm:text-base truncate">{name}</div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 truncate">{title}</div>
          </div>
        </div>
        <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed italic line-clamp-3">
          "{quote}"
        </p>
      </motion.div>
    </motion.div>
  )
}