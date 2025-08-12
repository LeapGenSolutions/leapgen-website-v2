
'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Download, Phone } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const CTASection = () => {
  const ctaOptions = [
    {
      icon: Calendar,
      title: 'Schedule Your Free AI Strategy Session',
      description: 'Get a personalized demo and ROI analysis for your organization',
      buttonText: 'Book Free Demo',
      href: '/contact?type=demo',
      primary: true
    },
    {
      icon: Download,
      title: 'Download ROI Calculator',
      description: 'Calculate potential cost savings and efficiency gains',
      buttonText: 'Get Calculator',
      href: '/resources/roi-calculator',
      primary: false
    },
    {
      icon: Phone,
      title: 'Speak with an Expert',
      description: 'Get immediate answers to your AI implementation questions',
      buttonText: 'Call Now',
      href: '/contact?type=consultation',
      primary: false
    }
  ]

  return (
    <section className="section-padding bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to <span className="gradient-text">Transform</span> Your Business?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Join 500+ organizations already using LeapGen.AI to reduce costs by 60%, 
            improve efficiency, and drive measurable results. Get started today.
          </p>
          
          {/* Urgency Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-full px-6 py-3 border border-purple-500/30 mb-12"
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-gray-300">
              <strong className="text-white">50+ demos</strong> scheduled this month
            </span>
          </motion.div>
        </motion.div>

        {/* CTA Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {ctaOptions.map((option, index) => {
            const IconComponent = option.icon
            
            return (
              <Card key={index} className={`group hover:scale-105 transition-all duration-300 ${
                option.primary ? 'ring-2 ring-purple-500/50 bg-gradient-to-br from-purple-900/20 to-blue-900/20' : ''
              }`}>
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${
                    option.primary 
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600' 
                      : 'bg-gray-800 group-hover:bg-gray-700'
                  } transition-colors`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">
                    {option.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {option.description}
                  </p>
                  <Button 
                    asChild 
                    variant={option.primary ? "default" : "outline"} 
                    size="lg" 
                    className="w-full group"
                  >
                    <Link href={option.href}>
                      {option.buttonText}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </motion.div>

        {/* Trust Signals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400 mb-1">99.9%</div>
              <div className="text-sm text-gray-400">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">30-Day</div>
              <div className="text-sm text-gray-400">Implementation</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-1">24/7</div>
              <div className="text-sm text-gray-400">Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400 mb-1">SOC 2</div>
              <div className="text-sm text-gray-400">Certified</div>
            </div>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
            Enterprise-grade security • HIPAA compliant • GDPR ready
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
