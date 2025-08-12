
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'
import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LeapGen.AI - Reduce Support Costs by 40% with Enterprise AI Solutions',
  description: 'Join 500+ organizations using LeapGen.AI to automate customer support, unlock data insights, and revolutionize clinical documentation—with enterprise-grade security and rapid deployment.',
  keywords: 'AI solutions, customer support automation, data analytics, clinical documentation, enterprise AI, SurroundAI, Data Coffee, Seismic',
  authors: [{ name: 'LeapGen.AI' }],
  openGraph: {
    title: 'LeapGen.AI - Enterprise AI Solutions',
    description: 'Reduce Support Costs by 40% and Accelerate Data Insights with Enterprise AI Solutions',
    url: 'https://leapgen.ai',
    siteName: 'LeapGen.AI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LeapGen.AI - Enterprise AI Solutions',
    description: 'Reduce Support Costs by 40% and Accelerate Data Insights with Enterprise AI Solutions',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster 
          position="top-right"
          toastOptions={{
            style: {
              background: '#111827',
              color: '#ffffff',
              border: '1px solid #374151',
            },
          }}
        />
      </body>
    </html>
  )
}
