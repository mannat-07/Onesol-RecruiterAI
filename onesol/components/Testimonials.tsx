'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface TestimonialProps {
  quote: string
  name: string
  title: string
  company: string
  delay: number
}

function TestimonialCard({ quote, name, title, company, delay }: TestimonialProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md border border-gray-200 dark:bg-darksecondary dark:border-gray-700 transition-all duration-300 h-full flex flex-col"
    >
      <div className="mb-4">
        <svg className="w-8 h-8 text-purple-400 dark:text-purple-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      
      <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-5 flex-grow">
        {quote}
      </p>
      
      <div className="flex items-center gap-3 pt-3 border-t border-gray-200 dark:border-gray-700">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-base flex-shrink-0">
          {name.charAt(0)}
        </div>
        <div>
          <div className="font-bold text-gray-900 dark:text-white text-sm">{name}</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">{title}, {company}</div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  const testimonials = [
    {
      quote: "We went from 6 weeks to hire a developer to just 10 days. RecruiterAI handled everything from screening to scheduling. The AI interviews are surprisingly thorough.",
      name: "Rahul Mehta",
      title: "Founder",
      company: "TechStart Solutions",
      delay: 0.2
    },
    {
      quote: "As a non-technical founder, I was drowning in resumes. RecruiterAI screens 200+ applications in minutes and only shows me the top 10%. Game changer for early-stage startups.",
      name: "Priya Sharma",
      title: "CEO",
      company: "InnovateLabs",
      delay: 0.4
    },
    {
      quote: "The passive candidate re-engagement feature is brilliant. We're building a talent pool instead of starting from zero every time. Our cost-per-hire dropped 75%.",
      name: "Amit Patel",
      title: "Head of People",
      company: "ScaleUp Technologies",
      delay: 0.6
    }
  ]

  return (
    <section id="testimonials" className="py-12 sm:py-16 bg-white dark:bg-darkbg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-8 sm:mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 leading-tight"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4"
          >
            See how companies are transforming their hiring process
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}