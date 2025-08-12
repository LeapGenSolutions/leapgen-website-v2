'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Coffee, AlertTriangle, CheckCircle, Database, BarChart3, Target, Clock, Shield, Zap } from 'lucide-react'
import AnimatedCounter from '@/components/animated-counter'

export default function EcommerceDataCoffeePage() {
  const [activeTab, setActiveTab] = useState('problem')
  const solutionRef = useRef(null)
  const isInView = useInView(solutionRef, { once: true })

  const problemPoints = [
    "Customer data scattered across multiple platforms and touchpoints",
    "Inconsistent customer profiles leading to poor personalization",
    "Manual data reconciliation consuming valuable time and resources",
    "Inability to create unified view of customer journey"
  ]

  const solutionFeatures = [
    {
      icon: <Database className="w-8 h-8 text-orange-400" />,
      title: "Unified Customer Data Hub",
      description: "Automatically connects and consolidates data from e-commerce platforms, CRM systems, social media, and marketing tools into single customer profiles."
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: "Intelligent Data Cleansing", 
      description: "Identifies and resolves duplicate records, standardizes data formats, and ensures data quality across all customer touchpoints."
    },
    {
      icon: <Target className="w-8 h-8 text-purple-400" />,
      title: "Real-Time Profile Updates",
      description: "Continuously updates customer profiles as new data arrives, ensuring marketing and sales teams always work with current information."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-400" />,
      title: "360-Degree Customer View",
      description: "Creates comprehensive customer profiles including purchase history, preferences, engagement patterns, and predictive insights."
    }
  ]

  const outcomes = [
    { label: "Data Preparation Time Reduction", value: 80, suffix: "%" },
    { label: "Customer Profile Accuracy", value: 95, suffix: "%" },
    { label: "Marketing Campaign Effectiveness", value: 40, suffix: "%" }
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
          <span className="text-white">Data Coffee</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-orange-600/20 text-orange-300 border-orange-500/30">
            <Coffee className="w-4 h-4 mr-2" />
            Data Coffee for E-commerce
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Unify Customer Data for 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400"> Perfect Personalization</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8" style={{ lineHeight: '1.8' }}>
            Transform scattered customer data from multiple touchpoints into unified, accurate profiles. Enable precise personalization and marketing campaigns with a single source of customer truth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-3">
              See Data Coffee Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3">
              Download Integration Guide
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
                <h2 className="text-3xl font-bold text-white">The Customer Data Fragmentation Problem</h2>
              </div>
              
              <p className="text-gray-300 text-lg mb-6" style={{ lineHeight: '1.8' }}>
                E-commerce and retail businesses typically have customer data scattered across multiple platforms—e-commerce sites, CRM systems, social media, email marketing tools, and more. This fragmentation makes it difficult to create accurate, unified customer profiles, leading to poor personalization and missed opportunities.
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
              <h3 className="text-xl font-semibold text-white mb-6">Current Data Challenges</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center p-4 bg-red-900/20 rounded-lg border border-red-800/30">
                  <span className="text-gray-300">Customer Data</span>
                  <span className="text-red-400 font-bold">Fragmented</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-red-900/20 rounded-lg border border-red-800/30">
                  <span className="text-gray-300">Profile Accuracy</span>
                  <span className="text-red-400 font-bold">Inconsistent</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-red-900/20 rounded-lg border border-red-800/30">
                  <span className="text-gray-300">Personalization</span>
                  <span className="text-red-400 font-bold">Limited</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Visualization */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">How Data Coffee Unifies E-commerce Data</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Before */}
            <Card className="bg-red-900/20 border-red-800/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-red-400 mb-6">Before: Scattered Data</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg">
                    <div className="w-4 h-4 bg-red-400 rounded"></div>
                    <span className="text-gray-300">E-commerce Platform, CRM, Social Media, Email</span>
                  </div>
                  <div className="flex items-center justify-center py-2">
                    <ArrowRight className="w-6 h-6 text-red-400" />
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg">
                    <div className="w-4 h-4 bg-red-400 rounded"></div>
                    <span className="text-gray-300">Manual Data Gathering</span>
                  </div>
                  <div className="flex items-center justify-center py-2">
                    <ArrowRight className="w-6 h-6 text-red-400" />
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg">
                    <div className="w-4 h-4 bg-red-400 rounded"></div>
                    <span className="text-gray-300">Inconsistent Customer Profiles</span>
                  </div>
                  <div className="flex items-center justify-center py-2">
                    <ArrowRight className="w-6 h-6 text-red-400" />
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-red-900/30 rounded-lg border border-red-800/50">
                    <div className="w-4 h-4 bg-red-500 rounded"></div>
                    <span className="text-red-300 font-semibold">Poor Personalization</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* After */}
            <Card className="bg-green-900/20 border-green-800/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-green-400 mb-6">After: Unified Customer Hub</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg">
                    <div className="w-4 h-4 bg-green-400 rounded"></div>
                    <span className="text-gray-300">E-commerce Platform, CRM, Social Media, Email</span>
                  </div>
                  <div className="flex items-center justify-center py-2">
                    <ArrowRight className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg">
                    <div className="w-4 h-4 bg-green-400 rounded"></div>
                    <span className="text-gray-300">Data Coffee: Automated Unification</span>
                  </div>
                  <div className="flex items-center justify-center py-2">
                    <ArrowRight className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg">
                    <div className="w-4 h-4 bg-green-400 rounded"></div>
                    <span className="text-gray-300">Unified Customer Profiles</span>
                  </div>
                  <div className="flex items-center justify-center py-2">
                    <ArrowRight className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-green-900/30 rounded-lg border border-green-800/50">
                    <div className="w-4 h-4 bg-green-500 rounded"></div>
                    <span className="text-green-300 font-semibold">Perfect Personalization & Higher Sales</span>
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
            <h2 className="text-4xl font-bold text-white mb-6">The Data Coffee E-commerce Solution</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" style={{ lineHeight: '1.8' }}>
              Data Coffee automatically connects to and consolidates data from various e-commerce platforms, CRM systems, social media, and marketing tools. It creates unified, accurate customer profiles by intelligently matching and merging data from different sources.
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
              Measurable improvements in data quality, marketing effectiveness, and operational efficiency through unified customer data management.
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
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 mb-4">
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
          <div className="bg-gradient-to-r from-orange-900/50 to-red-900/50 p-12 rounded-3xl border border-slate-700">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Unify Your Customer Data?</h2>
            <p className="text-xl text-gray-300 mb-8" style={{ lineHeight: '1.8' }}>
              Join leading e-commerce businesses using Data Coffee to create unified customer profiles that enable perfect personalization and drive higher conversion rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-3">
                Schedule Data Coffee Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3">
                Download Customer Data Guide
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

