'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Zap, AlertTriangle, CheckCircle, Users, BarChart3, Target, Clock, Shield, Database, Coffee, ShoppingCart } from 'lucide-react'
import AnimatedCounter from '@/components/animated-counter'

export default function EcommerceCompleteSolutionPage() {
  const [activeTab, setActiveTab] = useState('problem')
  const solutionRef = useRef(null)
  const isInView = useInView(solutionRef, { once: true })

  const problemPoints = [
    "Fragmented customer data across multiple platforms and touchpoints",
    "Generic marketing approaches that fail to engage individual customers",
    "Low conversion rates and high cart abandonment",
    "Inability to predict customer behavior and preferences"
  ]

  const solutionFeatures = [
    {
      icon: <Database className="w-8 h-8 text-orange-400" />,
      title: "Unified Customer Foundation",
      description: "Data Coffee consolidates customer data from e-commerce platforms, CRM systems, social media, and marketing tools into comprehensive profiles."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-400" />,
      title: "Predictive Customer Intelligence", 
      description: "Surround AI analyzes unified customer data to predict behavior, preferences, and optimal engagement strategies for each individual."
    },
    {
      icon: <Target className="w-8 h-8 text-purple-400" />,
      title: "Hyper-Personalized Experiences",
      description: "Deliver individualized product recommendations, targeted promotions, and personalized shopping experiences in real-time."
    },
    {
      icon: <Clock className="w-8 h-8 text-green-400" />,
      title: "Real-Time Optimization",
      description: "Continuously optimize pricing, inventory, marketing campaigns, and customer touchpoints based on predictive insights."
    }
  ]

  const outcomes = [
    { label: "Customer Conversion Rate Increase", value: 35, suffix: "%" },
    { label: "Cart Abandonment Reduction", value: 45, suffix: "%" },
    { label: "Customer Lifetime Value Growth", value: 30, suffix: "%" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation Breadcrumb */}
      <div className="container mx-auto px-6 pt-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
          <a href="/use-cases" className="hover:text-white transition-colors">Use Cases</a>
          <span>/</span>
          <a href="/use-cases/e-commerce" className="hover:text-white transition-colors">E-commerce</a>
          <span>/</span>
          <span className="text-white">Complete Solution</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-gradient-to-r from-orange-600/20 to-purple-600/20 text-orange-300 border-orange-500/30">
            <Zap className="w-4 h-4 mr-2" />
            Complete E-commerce Solution
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Master E-commerce with 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-400"> Complete Intelligence</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8" style={{ lineHeight: '1.8' }}>
            Combine Data Coffee's unified customer data foundation with Surround AI's predictive intelligence to create the ultimate e-commerce experience that drives conversion, reduces abandonment, and maximizes customer lifetime value.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-orange-600 to-purple-600 hover:from-orange-700 hover:to-purple-700 text-white px-8 py-3">
              See Complete Solution Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3">
              Download E-commerce ROI Calculator
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <AlertTriangle className="w-8 h-8 text-red-400 mr-3" />
                <h2 className="text-3xl font-bold text-white">The Complete E-commerce Challenge</h2>
              </div>
              
              <p className="text-gray-300 text-lg mb-6" style={{ lineHeight: '1.8' }}>
                E-commerce businesses face a dual challenge: fragmented customer data across multiple platforms and the inability to deliver truly personalized experiences. This combination results in generic marketing, low conversion rates, high cart abandonment, and missed opportunities for customer loyalty and revenue growth.
              </p>
              
              <div className="space-y-4">
                {problemPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-300" style={{ lineHeight: '1.8' }}>{point}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-6">Current E-commerce Challenges</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center p-4 bg-red-900/20 rounded-lg border border-red-800/30">
                  <span className="text-gray-300">Customer Data</span>
                  <span className="text-red-400 font-bold">Fragmented</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-red-900/20 rounded-lg border border-red-800/30">
                  <span className="text-gray-300">Personalization</span>
                  <span className="text-red-400 font-bold">Generic</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-red-900/20 rounded-lg border border-red-800/30">
                  <span className="text-gray-300">Customer Experience</span>
                  <span className="text-red-400 font-bold">Suboptimal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Visualization */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Complete E-commerce Transformation</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Before */}
            <Card className="bg-red-900/20 border-red-800/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-red-400 mb-6">Before: Fragmented & Generic</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg">
                    <div className="w-4 h-4 bg-red-400 rounded"></div>
                    <span className="text-gray-300">Scattered Customer Data</span>
                  </div>
                  <div className="flex items-center justify-center py-2">
                    <ArrowRight className="w-6 h-6 text-red-400" />
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg">
                    <div className="w-4 h-4 bg-red-400 rounded"></div>
                    <span className="text-gray-300">Generic Marketing & Recommendations</span>
                  </div>
                  <div className="flex items-center justify-center py-2">
                    <ArrowRight className="w-6 h-6 text-red-400" />
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg">
                    <div className="w-4 h-4 bg-red-400 rounded"></div>
                    <span className="text-gray-300">Low Conversion & High Abandonment</span>
                  </div>
                  <div className="flex items-center justify-center py-2">
                    <ArrowRight className="w-6 h-6 text-red-400" />
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-red-900/30 rounded-lg border border-red-800/50">
                    <div className="w-4 h-4 bg-red-500 rounded"></div>
                    <span className="text-red-300 font-semibold">Lost Revenue & Customers</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* After */}
            <Card className="bg-green-900/20 border-green-800/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-green-400 mb-6">After: Unified & Intelligent</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg">
                    <div className="w-4 h-4 bg-green-400 rounded"></div>
                    <span className="text-gray-300">Data Coffee: Unified Customer Profiles</span>
                  </div>
                  <div className="flex items-center justify-center py-2">
                    <ArrowRight className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg">
                    <div className="w-4 h-4 bg-green-400 rounded"></div>
                    <span className="text-gray-300">Surround AI: Predictive Intelligence</span>
                  </div>
                  <div className="flex items-center justify-center py-2">
                    <ArrowRight className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg">
                    <div className="w-4 h-4 bg-green-400 rounded"></div>
                    <span className="text-gray-300">Hyper-Personalized Experiences</span>
                  </div>
                  <div className="flex items-center justify-center py-2">
                    <ArrowRight className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-green-900/30 rounded-lg border border-green-800/50">
                    <div className="w-4 h-4 bg-green-500 rounded"></div>
                    <span className="text-green-300 font-semibold">Maximum Revenue & Customer Loyalty</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section ref={solutionRef} className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">The Complete E-commerce Solution</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" style={{ lineHeight: '1.8' }}>
              Data Coffee first consolidates customer data from all touchpoints into unified profiles. Surround AI then analyzes this comprehensive data to predict individual customer behavior, preferences, and optimal engagement strategies, enabling true hyper-personalization at scale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {solutionFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-slate-600 transition-colors"
              >
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                </div>
                <p className="text-gray-300" style={{ lineHeight: '1.8' }}>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Expected Outcomes</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" style={{ lineHeight: '1.8' }}>
              Measurable improvements in conversion rates, customer retention, and revenue through the combination of unified data and predictive intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 text-center"
              >
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-400 mb-4">
                  <AnimatedCounter end={outcome.value} suffix={outcome.suffix} />
                </div>
                <p className="text-gray-300 font-medium" style={{ lineHeight: '1.8' }}>{outcome.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Benefits */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Why the Complete Solution Works</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-orange-900/20 border-orange-800/30">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Coffee className="w-8 h-8 text-orange-400 mr-3" />
                  <h3 className="text-2xl font-bold text-orange-400">Data Coffee Foundation</h3>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-3" style={{ lineHeight: '1.8' }}>
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span>Unifies data from e-commerce platforms, CRM, social media, and marketing tools</span>
                  </li>
                  <li className="flex items-start space-x-3" style={{ lineHeight: '1.8' }}>
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span>Creates comprehensive, accurate customer profiles</span>
                  </li>
                  <li className="flex items-start space-x-3" style={{ lineHeight: '1.8' }}>
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span>Eliminates data silos and manual reconciliation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-purple-900/20 border-purple-800/30">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <ShoppingCart className="w-8 h-8 text-purple-400 mr-3" />
                  <h3 className="text-2xl font-bold text-purple-400">Surround AI Intelligence</h3>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-3" style={{ lineHeight: '1.8' }}>
                    <CheckCircle className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                    <span>Predicts individual customer behavior and preferences</span>
                  </li>
                  <li className="flex items-start space-x-3" style={{ lineHeight: '1.8' }}>
                    <CheckCircle className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                    <span>Delivers hyper-personalized product recommendations</span>
                  </li>
                  <li className="flex items-start space-x-3" style={{ lineHeight: '1.8' }}>
                    <CheckCircle className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                    <span>Optimizes pricing, inventory, and marketing campaigns</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-orange-900/50 to-purple-900/50 p-12 rounded-3xl border border-slate-700">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Master E-commerce Intelligence?</h2>
            <p className="text-xl text-gray-300 mb-8" style={{ lineHeight: '1.8' }}>
              Join leading e-commerce businesses using the complete LeapGen solution to create unified customer intelligence that drives maximum conversion, retention, and revenue growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-orange-600 to-purple-600 hover:from-orange-700 hover:to-purple-700 text-white px-8 py-3">
                Schedule Complete Solution Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3">
                Download E-commerce ROI Calculator
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

