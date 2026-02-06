import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'RecruiterAI - Every Hire, Faster and Better',
  description: 'AI recruiting software that automates your entire hiring workflow. Screen 250+ applications in minutes, reduce time-to-hire by 70%.',
  keywords: 'AI recruiting, hiring automation, recruitment software, ATS, applicant tracking',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-white text-gray-900 dark:bg-darkbg dark:text-white antialiased">
        {children}
      </body>
    </html>
  )
}