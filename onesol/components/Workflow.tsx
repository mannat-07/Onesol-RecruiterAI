'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface FlowStep {
  label: string
  type?: 'decision' | 'action' | 'result'
}

interface WorkflowProps {
  title: string
  steps: FlowStep[]
  highlight: string
  delay: number
}

function WorkflowCard({ title, steps, highlight, delay }: WorkflowProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md border border-gray-200 dark:bg-darksecondary dark:border-gray-700 transition-all duration-300 h-full flex flex-col"
    >
      <h3 className="text-base sm:text-lg font-bold mb-4 text-gray-900 dark:text-white leading-tight">{title}</h3>
      
      <div className="space-y-2.5 mb-4 flex-grow">
        {steps.map((step, index) => (
          <div key={index}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.3, delay: delay + index * 0.08 }}
              className={`p-3 rounded-lg transition-all duration-300 ${
                step.type === 'decision' 
                  ? 'bg-purple-50 border border-purple-200 dark:bg-purple-900/20 dark:border-purple-800' 
                  : step.type === 'result'
                  ? 'bg-green-50 border border-green-200 dark:bg-green-900/20 dark:border-green-800'
                  : 'bg-gray-50 border border-gray-200 dark:bg-gray-800/50 dark:border-gray-700'
              }`}
            >
              <p className="font-medium text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-snug">{step.label}</p>
            </motion.div>
            
            {index < steps.length - 1 && (
              <div className="flex justify-center my-2">
                <div className="w-0.5 h-4 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-start gap-2">
          <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <p className="text-primary font-semibold text-xs sm:text-sm leading-snug">{highlight}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Workflow() {
  const workflows = [
    {
      title: 'Automated Screening & Scheduling',
      steps: [
        { label: 'New application received', type: 'action' as const },
        { label: 'AI resume screening (top 20%)', type: 'action' as const },
        { label: 'Screening questions sent', type: 'action' as const },
        { label: 'Decision: Score >75%?', type: 'decision' as const },
        { label: 'Auto interview scheduling or rejection', type: 'result' as const },
      ],
      highlight: 'Screen 250+ applications in minutes',
      delay: 0.2
    },
    {
      title: 'Multi-stage Interview Automation',
      steps: [
        { label: 'AI interview conducted', type: 'action' as const },
        { label: 'AI scoring & evaluation', type: 'action' as const },
        { label: 'Decision: Score >80%?', type: 'decision' as const },
        { label: 'Auto schedule next round or reject', type: 'result' as const },
        { label: 'Offer letter automation', type: 'result' as const },
      ],
      highlight: 'Reduce time-to-hire from 42 days to 12 days',
      delay: 0.4
    },
    {
      title: 'Passive Candidate Re-engagement',
      steps: [
        { label: 'Borderline candidate (60-74%)', type: 'action' as const },
        { label: 'Added to talent pool', type: 'action' as const },
        { label: 'Wait 3 months', type: 'action' as const },
        { label: 'Auto re-engagement when role opens', type: 'result' as const },
      ],
      highlight: 'Never start hiring from scratch again',
      delay: 0.6
    }
  ]

  return (
    <section id="how-it-works" className="py-12 sm:py-16 bg-white dark:bg-darkbg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-8 sm:mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 leading-tight"
          >
            How It Works
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4"
          >
            Build custom hiring workflows in minutes. No coding required.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {workflows.map((workflow, index) => (
            <WorkflowCard key={index} {...workflow} />
          ))}
        </div>
      </div>
    </section>
  )
}