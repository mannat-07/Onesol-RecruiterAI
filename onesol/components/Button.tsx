'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  onClick?: () => void
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function Button({ 
  children, 
  variant = 'primary', 
  onClick,
  className = '',
  size = 'md'
}: ButtonProps) {
  const baseClasses = 'rounded-full font-semibold transition-all duration-300 inline-flex items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed'
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg'
  }
  
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-dark shadow-md hover:shadow-lg dark:bg-primary dark:hover:bg-primary-dark',
    secondary: 'bg-transparent border border-primary text-primary hover:bg-primary hover:text-white hover:shadow-md dark:text-primary dark:border-primary dark:hover:bg-primary dark:hover:text-white'
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  )
}