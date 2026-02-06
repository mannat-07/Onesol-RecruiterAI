'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Button from './Button'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-darkbg/95 backdrop-blur-lg shadow-md border-b border-gray-200/50 dark:border-darksecondary/50'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-black text-gradient cursor-pointer hover:scale-105 transition-transform">
              RecruiterAI
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <a
              href="#features"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors relative group"
            >
              Features
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors relative group"
            >
              How It Works
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors relative group"
            >
              Pricing
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors relative group"
            >
              Testimonials
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-primary transition-colors px-3 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-darksecondary">
              Sign In
            </button>
            <Button variant="primary" size="sm" className="!text-sm">
              Start Free Trial
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-1.5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-darksecondary rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden pb-4 pt-2"
          >
            <div className="flex flex-col gap-1">
              <a
                href="#features"
                className="text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-gray-100 dark:hover:bg-darksecondary transition-colors font-medium py-2 px-3 rounded-lg text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-gray-100 dark:hover:bg-darksecondary transition-colors font-medium py-2 px-3 rounded-lg text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#pricing"
                className="text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-gray-100 dark:hover:bg-darksecondary transition-colors font-medium py-2 px-3 rounded-lg text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-gray-100 dark:hover:bg-darksecondary transition-colors font-medium py-2 px-3 rounded-lg text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <div className="border-t border-gray-200 dark:border-darksecondary mt-3 pt-3 flex flex-col gap-2">
                <button className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors font-semibold text-left py-2 px-3 hover:bg-gray-100 dark:hover:bg-darksecondary rounded-lg text-sm">
                  Sign In
                </button>
                <Button variant="primary" size="sm" className="!w-full">
                  Start Free Trial
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}