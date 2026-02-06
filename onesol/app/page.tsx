'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Workflow from '@/components/Workflow'
import Impact from '@/components/Impact'
import JobBoards from '@/components/JobBoards'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Workflow />
      <Impact />
      <JobBoards />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}