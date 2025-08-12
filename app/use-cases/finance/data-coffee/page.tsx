'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Database, Shield, Target, Users, BarChart3, CheckCircle, AlertTriangle, Zap, Coffee, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import AnimatedCounter from '@/components/animated-counter'

export default function DataCoffeeFinancePage() {
  const [benefitsRef, benefitsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [solutionRef, solutionInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const benefits = [
    { value: 80, suffix: '%', label: 'Reduction in Time Spent on Data Consolidation and Cleansing', icon: Database },
    { value: 95, suffix: '%', label: 'Improvement in Regulatory Compliance Report Accuracy', icon: Shield },
    { value: 100, suffix: '%', label: 'Elimination of Data Leakage from Single Source of Truth', icon: Lock },
  ]

  const problemPoints = [
    'Financial data fragmented across multiple systems (legacy databases, CRMs, loan origination software)',
    'Data frequently inconsistent, incomplete, or duplicated',
    'Significant manual effort required to clean and consolidate data',
    'Delayed reporting and inaccurate customer insights',
    'Higher risk of non-compliance due to data inconsistencies'
  ]

  const solutionFeatures = [
    {
      icon: Coffee,
      title: 'Automated Data Preparation',
      description: 'Powerful data preparation and integration tool designed specifically for business users'
    },
    {
      icon: Database,
      title: 'Universal Connectivity',
      description: 'Automatically connects to all internal and external data sources across your organization'
    },
    {
      icon: Zap,
      title: 'Intelligent Processing',
      description: 'Uses intelligent algorithms to cleanse, standardize, and de-duplicate data automatically'
    },
    {
      icon: Target,
      title: 'Golden Record Creation',
      description: 'Creates a single, reliable "golden record" for each customer with consistent information'
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
          <Link href="/use-cases/finance" className="hover:text-white transition-colors">Finance</Link>
          <span>/</span>
          <span className="text-white">Data Coffee</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-purple-600/20 text-purple-300 border-purple-500/30">
            <Coffee className="w-4 h-4 mr-2" />
            Data Coffee for Finance
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Unify Financial Data with 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"> Intelligent Integration</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Transform fragmented financial data across multiple systems into a single, reliable source of truth. Eliminate manual data reconciliation and ensure regulatory compliance with automated data preparation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3">
              See Data Integration Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-500/10 px-8 py-3">
              Calculate Time Savings
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
                <h2 className="text-3xl font-bold text-white">The Financial Data Challenge</h2>
              </div>
              
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Financial data is often fragmented across multiple systems: legacy databases, CRMs, loan origination software, and compliance tools. This data is frequently inconsistent, incomplete, or duplicated, requiring significant manual effort to clean and consolidate.
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
                <h3 className="text-xl font-semibold text-white mb-4">The Cost of Fragmented Financial Data</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Delayed reporting</span>
                    <span className="text-red-400 font-semibold">High</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Inaccurate customer insights</span>
                    <span className="text-red-400 font-semibold">Critical</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Compliance risk</span>
                    <span className="text-red-400 font-semibold">Critical</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Manual reconciliation effort</span>
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
            <h2 className="text-4xl font-bold text-white mb-6">The Data Coffee Solution</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Data Coffee is a powerful data preparation and integration tool designed for business users. It automatically connects to all of a bank's internal and external data sources, creating a single, reliable "golden record" for each customer.
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
            <h3 className="text-2xl font-bold text-white mb-8 text-center">How Data Coffee Transforms Financial Data Management</h3>
            
            {/* Before: Traditional Approach */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-red-400 mb-4">❌ Traditional Approach</h4>
              <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
                <div className="bg-red-900/20 p-4 rounded-lg border border-red-500/30 flex-1">
                  <p className="text-white font-medium">Disparate Sources</p>
                  <p className="text-gray-300 text-sm">CRM, Legacy DB, Spreadsheets</p>
                </div>
                <ArrowRight className="w-6 h-6 text-red-400 transform md:transform-none rotate-90 md:rotate-0" />
                <div className="bg-red-900/20 p-4 rounded-lg border border-red-500/30 flex-1">
                  <p className="text-white font-medium">Manual Reconciliation</p>
                  <p className="text-gray-300 text-sm">Inconsistent, Duplicate Data</p>
                </div>
                <ArrowRight className="w-6 h-6 text-red-400 transform md:transform-none rotate-90 md:rotate-0" />
                <div className="bg-red-900/20 p-4 rounded-lg border border-red-500/30 flex-1">
                  <p className="text-white font-medium">Delayed Reporting</p>
                  <p className="text-gray-300 text-sm">Compliance Risk & Poor Insights</p>
                </div>
              </div>
            </div>

            {/* After: Data Coffee Approach */}
            <div>
              <h4 className="text-lg font-semibold text-green-400 mb-4">✅ Data Coffee Approach</h4>
              <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
                <div className="bg-green-900/20 p-4 rounded-lg border border-green-500/30 flex-1">
                  <p className="text-white font-medium">Unified Sources</p>
                  <p className="text-gray-300 text-sm">CRM, Legacy DB, Spreadsheets</p>
                </div>
                <ArrowRight className="w-6 h-6 text-green-400 transform md:transform-none rotate-90 md:rotate-0" />
                <div className="bg-green-900/20 p-4 rounded-lg border border-green-500/30 flex-1">
                  <p className="text-white font-medium">Automated Unification</p>
                  <p className="text-gray-300 text-sm">Single Golden Record</p>
                </div>
                <ArrowRight className="w-6 h-6 text-green-400 transform md:transform-none rotate-90 md:rotate-0" />
                <div className="bg-green-900/20 p-4 rounded-lg border border-green-500/30 flex-1">
                  <p className="text-white font-medium">Real-time Access</p>
                  <p className="text-gray-300 text-sm">Accurate Insights & Compliance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Advanced Data Integration Capabilities</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Database className="w-6 h-6 mr-3 text-purple-400" />
                  Data Cleansing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Intelligent algorithms automatically cleanse, standardize, and de-duplicate data from multiple sources.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Automated data validation</li>
                  <li>• Duplicate record elimination</li>
                  <li>• Format standardization</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-purple-400" />
                  Compliance Ready
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Ensures all departments work with the same accurate information for regulatory submissions.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Regulatory reporting accuracy</li>
                  <li>• Audit trail maintenance</li>
                  <li>• Data lineage tracking</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Target className="w-6 h-6 mr-3 text-purple-400" />
                  Golden Records
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Creates a single, reliable "golden record" for each customer, eliminating data inconsistencies.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Single source of truth</li>
                  <li>• Customer 360-degree view</li>
                  <li>• Real-time data synchronization</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section ref={benefitsRef} className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Proven Data Management Results</h2>
          
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
          <h2 className="text-4xl font-bold text-white text-center mb-12">How Data Coffee Works</h2>
          
          <div className="space-y-8">
            <Card className="bg-slate-800/50 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white">Automated Data Connection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Data Coffee automatically connects to all of a bank's internal and external data sources, eliminating the need for manual data gathering and integration efforts.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white">Intelligent Data Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Uses intelligent algorithms to cleanse, standardize, and de-duplicate data, creating a single, reliable "golden record" for each customer that all departments can trust.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white">Business User Friendly</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Designed specifically for business users, Data Coffee simplifies the process of creating clean, structured data sets ready for analysis, reporting, and regulatory submissions.
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
            Ready to Unify Your Financial Data?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading financial institutions using Data Coffee to eliminate manual data reconciliation and ensure regulatory compliance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3">
              Schedule Data Integration Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-500/10 px-8 py-3">
              Calculate Time Savings
            </Button>
          </div>
        </div>
      </section>

      {/* Back Navigation */}
      <section className="container mx-auto px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <Link href="/use-cases/finance" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Finance Use Cases
          </Link>
        </div>
      </section>
    </div>
  )
}

