'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Heart, Database, Shield, Target, Users, BarChart3, CheckCircle, AlertTriangle, Zap, Coffee, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import AnimatedCounter from '@/components/animated-counter'

export default function DataCoffeeHealthcarePage() {
  const [benefitsRef, benefitsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [solutionRef, solutionInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const benefits = [
    { value: 40, suffix: '%', label: 'Reduction in Administrative Costs Associated with Data Management', icon: Database },
    { value: 70, suffix: '%', label: 'Elimination of Manual Data Entry and Reconciliation', icon: Shield },
    { value: 95, suffix: '%', label: 'Improvement in Quality and Accuracy of Patient Records', icon: Heart },
  ]

  const problemPoints = [
    'Patient data stored in multitude of siloed systems (EHRs, billing software, lab portals)',
    'Fragmentation creates massive administrative burden for healthcare staff',
    'Manual merging of records leads to dangerous errors in patient care',
    'Process of correcting inconsistencies is costly, time-consuming, and error-prone',
    'Administrative burden prevents staff from focusing on patient care'
  ]

  const solutionFeatures = [
    {
      icon: Coffee,
      title: 'Intelligent Data Integration',
      description: 'Automated platform that creates unified patient records from all healthcare data sources'
    },
    {
      icon: Database,
      title: 'Universal Healthcare Connectivity',
      description: 'Connects to all healthcare provider data sources including EHRs, billing, and lab systems'
    },
    {
      icon: Zap,
      title: 'Automated Data Processing',
      description: 'Automatically cleans, de-duplicates, and standardizes patient information'
    },
    {
      icon: Target,
      title: 'Single Source of Truth',
      description: 'Ensures every doctor, nurse, and administrator sees the same accurate patient data'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation Breadcrumb */}
      <div className="container mx-auto px-6 pt-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/use-cases" className="hover:text-white transition-colors">Use Cases</Link>
          <span>/</span>
          <Link href="/use-cases/healthcare" className="hover:text-white transition-colors">Healthcare</Link>
          <span>/</span>
          <span className="text-white">Data Coffee</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-purple-600/20 text-purple-300 border-purple-500/30">
            <Coffee className="w-4 h-4 mr-2" />
            Data Coffee for Healthcare
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Unify Patient Data with 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"> Intelligent Integration</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Transform fragmented patient data across multiple healthcare systems into a single, unified patient record. Eliminate administrative burden and reduce care errors with automated data integration.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3">
              See Healthcare Integration Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-500/10 px-8 py-3">
              Calculate Administrative Savings
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <AlertTriangle className="w-8 h-8 text-red-400 mr-3" />
                <h2 className="text-3xl font-bold text-white">The Healthcare Data Challenge</h2>
              </div>
              
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Patient data is stored in a multitude of siloed systems—EHRs, billing software, and lab portals. This fragmentation creates a massive administrative burden for staff and can lead to dangerous errors in patient care.
              </p>
              
              <div className="space-y-4">
                {problemPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 p-8 rounded-2xl border border-red-500/20">
                <h3 className="text-xl font-semibold text-white mb-4">The Cost of Fragmented Patient Data</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Administrative burden</span>
                    <span className="text-red-400 font-semibold">Critical</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Patient care errors</span>
                    <span className="text-red-400 font-semibold">Critical</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Delayed care delivery</span>
                    <span className="text-red-400 font-semibold">High</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Higher operational costs</span>
                    <span className="text-red-400 font-semibold">High</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section ref={solutionRef} className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">The Data Coffee Healthcare Solution</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Data Coffee is an intelligent data integration platform that automates the process of creating a unified patient record. It connects to all healthcare provider data sources and creates a single source of truth for patient information.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {solutionFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={solutionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-purple-600/20 rounded-lg">
                        <feature.icon className="w-6 h-6 text-purple-400" />
                      </div>
                      <CardTitle className="text-white">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Solution Flow Visualization */}
          <div className="bg-slate-800/30 p-8 rounded-2xl border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">How Data Coffee Transforms Healthcare Data Management</h3>
            
            {/* Before: Traditional Approach */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-red-400 mb-4">❌ Traditional Approach</h4>
              <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
                <div className="bg-red-900/20 p-4 rounded-lg border border-red-500/30 flex-1">
                  <p className="text-white font-medium">Disparate Sources</p>
                  <p className="text-gray-300 text-sm">EHR, Billing, Patient Portal</p>
                </div>
                <ArrowRight className="w-6 h-6 text-red-400 transform md:transform-none rotate-90 md:rotate-0" />
                <div className="bg-red-900/20 p-4 rounded-lg border border-red-500/30 flex-1">
                  <p className="text-white font-medium">Manual Data Entry</p>
                  <p className="text-gray-300 text-sm">Inconsistent Patient Records</p>
                </div>
                <ArrowRight className="w-6 h-6 text-red-400 transform md:transform-none rotate-90 md:rotate-0" />
                <div className="bg-red-900/20 p-4 rounded-lg border border-red-500/30 flex-1">
                  <p className="text-white font-medium">Administrative Burden</p>
                  <p className="text-gray-300 text-sm">Delayed Care & Higher Costs</p>
                </div>
              </div>
            </div>

            {/* After: Data Coffee Approach */}
            <div>
              <h4 className="text-lg font-semibold text-green-400 mb-4">✅ Data Coffee Approach</h4>
              <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
                <div className="bg-green-900/20 p-4 rounded-lg border border-green-500/30 flex-1">
                  <p className="text-white font-medium">Unified Sources</p>
                  <p className="text-gray-300 text-sm">EHR, Billing, Patient Portal</p>
                </div>
                <ArrowRight className="w-6 h-6 text-green-400 transform md:transform-none rotate-90 md:rotate-0" />
                <div className="bg-green-900/20 p-4 rounded-lg border border-green-500/30 flex-1">
                  <p className="text-white font-medium">Automated Unification</p>
                  <p className="text-gray-300 text-sm">Single Unified Patient Record</p>
                </div>
                <ArrowRight className="w-6 h-6 text-green-400 transform md:transform-none rotate-90 md:rotate-0" />
                <div className="bg-green-900/20 p-4 rounded-lg border border-green-500/30 flex-1">
                  <p className="text-white font-medium">Seamless Access</p>
                  <p className="text-gray-300 text-sm">Efficient Administration & Safe Care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Advanced Healthcare Data Integration Capabilities</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Database className="w-6 h-6 mr-3 text-purple-400" />
                  Data Unification
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Automatically cleans, de-duplicates, and standardizes patient information from all healthcare systems.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Patient record consolidation</li>
                  <li>• Duplicate elimination</li>
                  <li>• Data standardization</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-purple-400" />
                  Care Safety
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Reduces administrative costs and provides solid foundation for accurate reporting and analysis.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Error reduction</li>
                  <li>• Care quality improvement</li>
                  <li>• Patient safety enhancement</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Heart className="w-6 h-6 mr-3 text-purple-400" />
                  Staff Efficiency
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Frees up healthcare staff to focus on patient care instead of administrative data management tasks.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Reduced administrative burden</li>
                  <li>• More time for patient care</li>
                  <li>• Improved staff satisfaction</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section ref={benefitsRef} className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Proven Healthcare Data Management Results</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={benefitsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-purple-500/30 text-center p-8">
                    <CardContent className="space-y-4">
                      <div className="flex justify-center">
                        <div className="p-3 bg-purple-600/20 rounded-full">
                          <Icon className="w-8 h-8 text-purple-400" />
                        </div>
                      </div>
                      <div className="text-4xl font-bold text-white">
                        {benefitsInView && (
                          <AnimatedCounter 
                            end={benefit.value} 
                            suffix={benefit.suffix}
                          />
                        )}
                      </div>
                      <p className="text-gray-300">{benefit.label}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Implementation Details */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">How Data Coffee Works in Healthcare</h2>
          
          <div className="space-y-8">
            <Card className="bg-slate-800/50 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white">Automated Healthcare Data Connection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Data Coffee connects to all of a healthcare provider's data sources and automatically cleans, de-duplicates, and standardizes patient information across all systems.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white">Unified Patient Record Creation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Creates a single source of truth ensuring that every doctor, nurse, and administrator sees the same, accurate patient data, eliminating dangerous care errors.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white">Administrative Burden Reduction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  By creating a single source of truth, Data Coffee frees up healthcare staff to focus on patient care, reduces administrative costs, and provides accurate reporting foundation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Unify Your Patient Data?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading healthcare organizations using Data Coffee to eliminate administrative burden and improve patient care quality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3">
              Schedule Healthcare Integration Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-500/10 px-8 py-3">
              Calculate Administrative Savings
            </Button>
          </div>
        </div>
      </section>

      {/* Back Navigation */}
      <section className="container mx-auto px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <Link href="/use-cases/healthcare" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Healthcare Use Cases
          </Link>
        </div>
      </section>
    </div>
  )
}

