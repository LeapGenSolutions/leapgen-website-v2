
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Layers, Shield, Zap, TrendingUp, Users, Clock, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import AnimatedCounter from '@/components/animated-counter'

export default function CompleteSolutionSLEDPage() {
  const [benefitsRef, benefitsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [solutionRef, solutionInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const benefits = [
    { value: 30, suffix: '%', label: 'Increase in Resource Allocation Efficiency', icon: TrendingUp },
    { value: 25, suffix: '%', label: 'Enhancement in Public Program Effectiveness', icon: Users },
    { value: 50, suffix: '%', label: 'Improvement in Citizen Service Response Times', icon: Zap }
  ]

  const phases = [
    {
      title: 'Data Integration Phase',
      subtitle: 'Data Coffee',
      color: 'orange',
      features: [
        'Connects to transportation, public safety, social services, and educational systems',
        'Automatically cleanses and harmonizes data from multiple departments',
        'Creates unified community data repository'
      ]
    },
    {
      title: 'Predictive Analytics Phase', 
      subtitle: 'Surround AI',
      color: 'purple',
      features: [
        'Applies machine learning models to predict community needs',
        'Identifies optimal resource allocation strategies',
        'Provides early warning systems for at-risk students or community issues',
        'Measures and optimizes program effectiveness'
      ]
    },
    {
      title: 'Outcome Optimization',
      subtitle: 'Combined Impact',
      color: 'blue',
      features: [
        'Enables predictive infrastructure planning (schools, roads, services)',
        'Supports targeted intervention programs',
        'Provides comprehensive impact measurement and reporting'
      ]
    }
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
            <span className="text-white">Complete Solution</span>
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
            
            <Badge className="mb-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-400 border-purple-500/30 flex items-center w-fit mx-auto">
              <Layers className="w-4 h-4 mr-2" />
              Complete SLED Intelligence
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Complete Public Sector <span className="gradient-text">Transformation</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Combine Data Coffee and Surround AI for comprehensive government and education intelligence, ensuring security, compliance, and citizen service excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600">
                <Link href="/contact?product=complete-solution&industry=sled">
                  Request Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/products">
                  Explore Products
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
                The Comprehensive <span className="gradient-text">Challenge</span>
              </h2>
              <Card className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-white">Systemic Inefficiencies in Public Sector</h3>
                      <p className="text-gray-300 leading-relaxed">
                        SLED organizations often operate with legacy systems and siloed data, leading to inefficient services, difficulty in resource allocation, and a lack of a complete picture of constituents' needs. This results in slow response times, ineffective public programs, and challenges in demonstrating the impact of public spending.
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
                Visualizing <span className="gradient-text">Complete Transformation</span>
              </h2>
              <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-900/50 border border-gray-800">
                <Image
                  src="https://cdn.abacus.ai/images/e9543c1b-6a3d-46a0-815a-cec6df9e4724.png"
                  alt="Complete SLED solution: Comprehensive public sector transformation combining Data Coffee's unified data integration with Surround AI's predictive intelligence for maximum organizational impact"
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
                How the <span className="gradient-text">Complete Solution</span> Works
              </h2>
              <Card className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-8">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Data Coffee ingests and harmonizes data from various government and educational departments—transportation, public safety, social services, and school enrollment records. It cleanses and structures this data to create a unified view of the community.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Surround AI then uses this clean data to model and predict community needs, optimize resource allocation, and measure the effectiveness of public programs. For example, it can predict where and when a community will need new services, such as a school expansion or a new road, or identify students at risk of dropping out and what interventions would be most effective.
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
                Combined <span className="gradient-text">Impact</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon
                  return (
                    <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors">
                      <CardContent className="p-8 text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Icon className="w-8 h-8 text-blue-400" />
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

      {/* Implementation Phases */}
      <section className="section-padding bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Implementation <span className="gradient-text">Phases</span>
              </h2>
              <div className="grid gap-8">
                {phases.map((phase, index) => {
                  const colorClasses = {
                    orange: 'border-orange-500/30 bg-orange-600/10',
                    purple: 'border-purple-500/30 bg-purple-600/10', 
                    blue: 'border-blue-500/30 bg-blue-600/10'
                  }
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <Card className={`border ${colorClasses[phase.color as keyof typeof colorClasses]}`}>
                        <CardHeader>
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold">
                              {index + 1}
                            </div>
                            <div>
                              <CardTitle className="text-white">{phase.title}</CardTitle>
                              <CardDescription className="text-gray-400">{phase.subtitle}</CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="grid gap-3">
                            {phase.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center space-x-3">
                                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                <p className="text-gray-300">{feature}</p>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Individual Products CTA */}
      <section className="section-padding bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Or Start with Individual <span className="gradient-text">Solutions</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <TrendingUp className="w-8 h-8 text-purple-400" />
                    <h3 className="text-xl font-semibold text-white">Start with Surround AI</h3>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Begin with predictive intelligence to transform reactive decision-making into proactive resource allocation.
                  </p>
                  <Button asChild className="bg-gradient-to-r from-purple-600 to-purple-700 w-full">
                    <Link href="/use-cases/sled/surround-ai">
                      Learn About Surround AI
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <Clock className="w-8 h-8 text-orange-400" />
                    <h3 className="text-xl font-semibold text-white">Start with Data Coffee</h3>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Begin with data unification to eliminate silos and create a single source of truth across departments.
                  </p>
                  <Button asChild className="bg-gradient-to-r from-orange-600 to-orange-700 w-full">
                    <Link href="/use-cases/sled/data-coffee">
                      Learn About Data Coffee
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-gradient-to-r from-purple-900/50 via-blue-900/50 to-orange-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your <span className="gradient-text">Public Sector Operations</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Discover how the complete solution can revolutionize your organization's efficiency, effectiveness, and citizen service delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  <Link href="/contact?product=complete-solution&industry=sled">
                    Schedule a Demo
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-gray-600 hover:bg-gray-800">
                  <Link href="/use-cases">
                    Explore More Use Cases
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
