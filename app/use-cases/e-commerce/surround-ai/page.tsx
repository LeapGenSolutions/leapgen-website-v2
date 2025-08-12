'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, ShoppingCart, AlertTriangle, CheckCircle, Users, BarChart3, Target, Clock, Shield, Zap } from 'lucide-react'
import AnimatedCounter from '@/components/animated-counter'

export default function EcommerceSurroundAIPage() {
  const [activeTab, setActiveTab] = useState('problem')
  const solutionRef = useRef(null)
  const isInView = useInView(solutionRef, { once: true })

  const problemPoints = [
    "One-size-fits-all approach to marketing and customer engagement",
    "Inability to predict individual customer preferences and behavior",
    "Low conversion rates and generic product recommendations",
    "Failure to build lasting customer loyalty"
  ]

  const solutionFeatures = [
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      title: "Real-Time Customer Profiling",
      description: "Creates dynamic profiles for every customer by analyzing browse history, past purchases, and external data like social media activity."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-400" />,
      title: "Predictive Behavior Analysis", 
      description: "Forecasts what customers are most likely to buy, what promotional offers they would respond to, and optimal timing."
    },
    {
      icon: <Target className="w-8 h-8 text-purple-400" />,
      title: "Hyper-Personalized Recommendations",
      description: "Delivers personalized product recommendations, targeted marketing, and engaging shopping experiences based on similar customer profiles."
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-400" />,
      title: "Real-Time Optimization",
      description: "Continuously analyzes customer behavior to optimize product placement, pricing strategies, and promotional campaigns."
    }
  ]

  const outcomes = [
    { label: "Customer Conversion Rate Increase", value: 25, suffix: "%" },
    { label: "Cart Abandonment Reduction", value: 35, suffix: "%" },
    { label: "Customer Lifetime Value Enhancement", value: 20, suffix: "%" }
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
          <span className="text-white">Surround AI</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-blue-600/20 text-blue-300 border-blue-500/30">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Surround AI for E-commerce
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Transform Customer Experience with 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Hyper-Personalization</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8" style={{ lineHeight: '1.8' }}>
            Move beyond generic marketing campaigns. Predict individual customer preferences and deliver personalized experiences that drive conversion, reduce cart abandonment, and build lasting loyalty.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3">
              See E-commerce Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3">
              Download ROI Calculator
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
                <h2 className="text-3xl font-bold text-white">The E-commerce Personalization Challenge</h2>
              </div>
              
              <p className="text-gray-300 text-lg mb-6" style={{ lineHeight: '1.8' }}>
                E-commerce and retail businesses often struggle with a one-size-fits-all approach to marketing and customer engagement. They lack the ability to predict individual customer preferences and future purchasing behavior. This leads to low conversion rates, generic product recommendations, and a failure to build lasting customer loyalty.
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
                  <span className="text-gray-300">Customer Personalization</span>
                  <span className="text-red-400 font-bold">Generic</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-red-900/20 rounded-lg border border-red-800/30">
                  <span className="text-gray-300">Conversion Rates</span>
                  <span className="text-red-400 font-bold">Low</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-red-900/20 rounded-lg border border-red-800/30">
                  <span className="text-gray-300">Customer Loyalty</span>
                  <span className="text-red-400 font-bold">Weak</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Visualization */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">How Surround AI Transforms E-commerce</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Before */}
            <Card className="bg-red-900/20 border-red-800/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-red-400 mb-6">Before: Generic Approach</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg">
                    <div className="w-4 h-4 bg-red-400 rounded"></div>
                    <span className="text-gray-300">General Marketing</span>
                  </div>
                  <div className="flex items-center justify-center py-2">
                    <ArrowRight className="w-6 h-6 text-red-400" />
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg">
                    <div className="w-4 h-4 bg-red-400 rounded"></div>
                    <span className="text-gray-300">Missed Opportunities</span>
                  </div>
                  <div className="flex items-center justify-center py-2">
                    <ArrowRight className="w-6 h-6 text-red-400" />
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg">
                    <div className="w-4 h-4 bg-red-400 rounded"></div>
                    <span className="text-gray-300">Low Conversion Rates</span>
                  </div>
                  <div className="flex items-center justify-center py-2">
                    <ArrowRight className="w-6 h-6 text-red-400" />
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-red-900/30 rounded-lg border border-red-800/50">
                    <div className="w-4 h-4 bg-red-500 rounded"></div>
                    <span className="text-red-300 font-semibold">Lost Revenue</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* After */}
            <Card className="bg-green-900/20 border-green-800/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-green-400 mb-6">After: Hyper-Personalization</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg">
                    <div className="w-4 h-4 bg-green-400 rounded"></div>
                    <span className="text-gray-300">Customer Browses Website</span>
                  </div>
                  <div className="flex items-center justify-center py-2">
                    <ArrowRight className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg">
                    <div className="w-4 h-4 bg-green-400 rounded"></div>
                    <span className="text-gray-300">Surround AI: Real-time Analysis</span>
                  </div>
                  <div className="flex items-center justify-center py-2">
                    <ArrowRight className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg">
                    <div className="w-4 h-4 bg-green-400 rounded"></div>
                    <span className="text-gray-300">Personalized Product Recommendations</span>
                  </div>
                  <div className="flex items-center justify-center py-2">
                    <ArrowRight className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-green-900/30 rounded-lg border border-green-800/50">
                    <div className="w-4 h-4 bg-green-500 rounded"></div>
                    <span className="text-green-300 font-semibold">Increased Sales & Loyalty</span>
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
            <h2 className="text-4xl font-bold text-white mb-6">The Surround AI E-commerce Solution</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" style={{ lineHeight: '1.8' }}>
              Surround AI creates a real-time, dynamic profile for every customer by analyzing their browse history, past purchases, and external data like social media activity and local events. It doesn't just look at past behavior; it predicts future actions.
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
              Measurable improvements in conversion rates, customer retention, and revenue through personalized customer experiences.
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
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
                  <AnimatedCounter end={outcome.value} suffix={outcome.suffix} />
                </div>
                <p className="text-gray-300 font-medium" style={{ lineHeight: '1.8' }}>{outcome.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-12 rounded-3xl border border-slate-700">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your E-commerce Experience?</h2>
            <p className="text-xl text-gray-300 mb-8" style={{ lineHeight: '1.8' }}>
              Join leading e-commerce businesses using Surround AI to deliver hyper-personalized experiences that drive conversion and build customer loyalty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3">
                Schedule E-commerce Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3">
                Download Personalization Guide
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

