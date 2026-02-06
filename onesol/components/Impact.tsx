'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface MetricCardProps {
  value: string
  label: string
  delay: number
}

function MetricCard({ value, label, delay }: MetricCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay }}
      className="bg-white p-4 sm:p-5 rounded-xl shadow-sm hover:shadow-md border border-gray-200 dark:bg-darksecondary dark:border-gray-700 text-center transition-all duration-300"
    >
      <div className="text-3xl sm:text-4xl font-black text-gradient mb-1.5">
        {value}
      </div>
      <div className="text-gray-600 dark:text-gray-400 font-medium text-xs sm:text-sm leading-tight">
        {label}
      </div>
    </motion.div>
  )
}

export default function Impact() {
  const metrics = [
    { value: '10x', label: 'Faster screening', delay: 0.1 },
    { value: '70%', label: 'Faster time-to-hire', delay: 0.15 },
    { value: '25x', label: 'Interview capacity', delay: 0.2 },
    { value: '95%', label: 'Application completion', delay: 0.25 },
    { value: '89%', label: 'More qualified candidates', delay: 0.3 },
    { value: '80%', label: 'Lower recruitment costs', delay: 0.35 },
    { value: '50%', label: 'Fewer bad hires', delay: 0.4 },
  ]

  return (
    <section id="features" className="py-12 sm:py-16 bg-gray-50 dark:bg-darkbg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-8 sm:mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 leading-tight"
          >
            Key Results
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4"
          >
            Real results from companies using AI-powered recruiting
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>
      </div>
    </section>
  )
}