
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, TrendingUp, Shield, Target, Users, BarChart3, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import AnimatedCounter from '@/components/animated-counter'

export default function SurroundAISLEDPage() {
  const [benefitsRef, benefitsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [solutionRef, solutionInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const benefits = [
    { value: 30, suffix: '%', label: 'Increase in Resource Allocation Efficiency', icon: TrendingUp },
    { value: 15, suffix: '%', label: 'Improvement in Student Retention Rates', icon: Users },
    { value: 25, suffix: '%', label: 'Enhancement in Public Program Effectiveness', icon: Target }
  ]

  const features = [
    'Integrates with existing government and educational data sources',
    'Analyzes population shifts, economic indicators, and seasonal trends',
    'Processes student performance, attendance, and behavioral data',
    'Provides predictive intelligence for proactive resource allocation',
    'Enables design of targeted intervention programs'
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
            <span className="text-white">Surround AI</span>
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
            
            <Badge className="mb-4 bg-purple-600/20 text-purple-400 border-purple-500/30">
              Surround AI for Government & Education
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Predictive <span className="gradient-text">Intelligence</span> for Public Sector
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Transform reactive decision-making into proactive community service with AI-powered predictions for student success and resource optimization.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600">
                <Link href="/contact?product=surround-ai&industry=sled">
                  Request Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/products/surround-ai">
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
                The Challenge in <span className="gradient-text">Public Sector</span>
              </h2>
              <Card className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-white">Reactive Decision-Making Crisis</h3>
                      <p className="text-gray-300 leading-relaxed" style={{ lineHeight: '1.8' }}>
                        SLED organizations are often bogged down by reactive decision-making. They lack the ability to predict future community needs, such as which students are at risk of dropping out or where public resources will be most needed in the coming year. This leads to inefficient resource allocation and services that are not tailored to the community's evolving needs.
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
                Visualizing the <span className="gradient-text">Transformation</span>
              </h2>
              <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-900/50 border border-gray-800">
                <Image
                  src="https://cdn.abacus.ai/images/18f5cef5-d235-44c6-b645-fe61cae3a225.png"
                  alt="Surround AI SLED transformation: From siloed departments with reactive programs to AI-powered predictive models enabling proactive resource allocation and improved citizen services"
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
                How <span className="gradient-text">Surround AI</span> Works
              </h2>
              <Card className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-8">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Surround AI analyzes historical and real-time public data to create predictive models for community and student needs. For a city government, it can forecast demand for public services (e.g., sanitation, emergency response) based on population shifts, economic indicators, and seasonal trends.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    In education, it can analyze student performance, attendance, and behavioral data to identify individuals at risk and recommend timely interventions. It transforms data into actionable intelligence, enabling SLED leaders to proactively allocate resources and design more effective programs.
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
                Measurable <span className="gradient-text">Impact</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon
                  return (
                    <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors">
                      <CardContent className="p-8 text-center">
                        <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Icon className="w-8 h-8 text-purple-400" />
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
                Implementation <span className="gradient-text">Features</span>
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
      <section className="section-padding bg-gradient-to-r from-purple-900/50 to-blue-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your <span className="gradient-text">Public Services</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                See how Surround AI can help your organization make proactive, data-driven decisions that improve citizen outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  <Link href="/contact?product=surround-ai&industry=sled">
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
