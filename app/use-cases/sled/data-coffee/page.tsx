
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Coffee, Database, Clock, CheckCircle, BarChart3, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import AnimatedCounter from '@/components/animated-counter'

export default function DataCoffeeSLEDPage() {
  const [benefitsRef, benefitsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [solutionRef, solutionInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const benefits = [
    { value: 70, suffix: '%', label: 'Reduction in Data Preparation Time', icon: Clock },
    { value: 95, suffix: '%', label: 'Increase in Data Accuracy for Reporting', icon: BarChart3 },
    { value: 100, suffix: '%', label: 'Elimination of Manual Cross-Departmental Entry', icon: CheckCircle }
  ]

  const features = [
    'Connects to multiple government and educational data sources automatically',
    'Handles various data types including property tax records and enrollment data',
    'Provides intelligent data cleaning and standardization capabilities',
    'Creates unified community data hub accessible across departments',
    'Ensures single source of truth for all reporting and decision-making'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Breadcrumb */}
      <section className="bg-gray-950 py-4 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <Link href="/use-cases" className="hover:text-purple-400 transition-colors">Use Cases</Link>
            <span>/</span>
            <Link href="/use-cases/sled" className="hover:text-purple-400 transition-colors">SLED</Link>
            <span>/</span>
            <span className="text-white">Data Coffee</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Button asChild variant="outline" size="sm">
                <Link href="/use-cases/sled">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to SLED
                </Link>
              </Button>
            </div>
            
            <Badge className="mb-4 bg-orange-600/20 text-orange-400 border-orange-500/30 flex items-center w-fit mx-auto">
              <Coffee className="w-4 h-4 mr-2" />
              Data Coffee for Government & Education
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Unified Data <span className="gradient-text">Integration</span> for Public Sector
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Transform disparate government systems into a unified data ecosystem, eliminating silos and empowering informed decision-making across all departments.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-orange-600 to-red-600">
                <Link href="/contact?product=data-coffee&industry=sled">
                  Request Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/products/data-coffee">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section-padding bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                The Data <span className="gradient-text">Fragmentation</span> Problem
              </h2>
              <Card className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center">
                      <Database className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-white">Siloed Legacy Systems</h3>
                      <p className="text-gray-300 leading-relaxed" style={{ lineHeight: '1.8' }}>
                        SLED organizations typically operate with disparate, legacy systems that don't communicate with each other. This results in siloed data across departments like public works, social services, and education. Consolidating this data for reporting or analysis is a manual, cumbersome process that is often incomplete and inaccurate.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Visualization */}
      <section className="section-padding bg-black" ref={solutionRef}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={solutionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Visualizing the <span className="gradient-text">Data Unification</span>
              </h2>
              <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-900/50 border border-gray-800">
                <Image
                  src="https://cdn.abacus.ai/images/39565a1d-e8b8-4cfb-bf36-a4c45d683baa.png"
                  alt="Data Coffee SLED transformation: From disparate government systems with manual data gathering to automated unification creating a single community data hub for informed decision-making"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="section-padding bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                How <span className="gradient-text">Data Coffee</span> Works
              </h2>
              <Card className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-8">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Data Coffee automates the process of connecting, cleansing, and unifying data from a wide variety of government and educational systems. It provides an intuitive interface for staff to bring together information from different departments and sources, from property tax records to student enrollment data.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    It intelligently cleans and standardizes this data, creating a reliable, consolidated view of community information. This eliminates the need for manual data wrangling and ensures that all departments are working from a single, accurate source of information for reporting and decision-making.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section-padding bg-gray-950" ref={benefitsRef}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Quantified <span className="gradient-text">Results</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon
                  return (
                    <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors">
                      <CardContent className="p-8 text-center">
                        <div className="w-16 h-16 bg-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Icon className="w-8 h-8 text-orange-400" />
                        </div>
                        <div className="text-4xl font-bold text-white mb-2">
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
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Implementation Features */}
      <section className="section-padding bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Platform <span className="gradient-text">Capabilities</span>
              </h2>
              <div className="grid gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50"
                  >
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <p className="text-gray-300">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-orange-900/50 to-red-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Unify Your <span className="gradient-text">Government Data</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Discover how Data Coffee can eliminate data silos and transform your organization's decision-making capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700">
                  <Link href="/contact?product=data-coffee&industry=sled">
                    Schedule a Demo
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-gray-600 hover:bg-gray-800">
                  <Link href="/use-cases/sled/complete-solution">
                    View Complete Solution
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
