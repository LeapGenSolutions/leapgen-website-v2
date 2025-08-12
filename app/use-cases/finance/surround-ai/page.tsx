'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, TrendingUp, Shield, Target, Users, BarChart3, CheckCircle, AlertTriangle, Zap, Brain, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import AnimatedCounter from '@/components/animated-counter'

export default function SurroundAIFinancePage() {
  const [benefitsRef, benefitsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [solutionRef, solutionInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const benefits = [
    { value: 50, suffix: '%', label: 'Reduction in Fraudulent Transaction Losses', icon: Shield },
    { value: 20, suffix: '%', label: 'Increase in Customer Retention for High-Value Clients', icon: Users },
    { value: 75, suffix: '%', label: 'Enhancement in Portfolio Risk Analysis Accuracy', icon: BarChart3 },
  ]

  const problemPoints = [
    'Inability to predict complex customer behaviors in real-time',
    'Missed opportunities for personalized financial services',
    'Ineffective fraud prevention with traditional rule-based systems',
    'Reactive posture towards rapidly changing financial landscape',
    'Limited ability to identify subtle patterns in market shifts'
  ]

  const solutionFeatures = [
    {
      icon: Brain,
      title: 'Dynamic Intelligence Platform',
      description: 'Builds and maintains continuous, real-time understanding of all relevant data points'
    },
    {
      icon: Eye,
      title: 'Predictive Model Generation',
      description: 'Analyzes historical and live transaction data, market trends, and external factors'
    },
    {
      icon: Zap,
      title: 'Adaptive Learning',
      description: 'Unlike static models, adapts as new information becomes available'
    },
    {
      icon: Target,
      title: 'Sophisticated Analysis',
      description: 'Goes beyond simple rule-based systems with deeper, more nuanced insights'
    }
  ]

  return (    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation Breadcrumb */}
      <div className="container mx-auto px-6 pt-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/use-cases" className="hover:text-white transition-colors">Use Cases</Link>
          <span>/</span>
          <Link href="/use-cases/finance" className="hover:text-white transition-colors">Finance</Link>
          <span>/</span>
          <span className="text-white">Surround AI</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-purple-600/20 text-purple-300 border-purple-500/30">
            <TrendingUp className="w-4 h-4 mr-2" />
            Surround AI for Finance
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Transform Financial Intelligence with 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"> Dynamic Prediction</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8" style={{ lineHeight: '1.8' }}>
            Move beyond traditional risk models and customer segmentation. Predict complex customer behaviors and market shifts in real-time with sophisticated AI that adapts to your changing financial landscape.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3">
              See Financial Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-500/10 px-8 py-3">
              Calculate ROI
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
                <h2 className="text-3xl font-bold text-white">The Financial Intelligence Challenge</h2>
              </div>
              
              <p className="text-gray-300 text-lg mb-6" style={{ lineHeight: '1.8' }}>
                Financial institutions struggle to move beyond traditional risk models and customer segmentation. They lack the ability to predict complex, nuanced customer behaviors and market shifts in real-time, leading to missed opportunities and reactive responses.
              </p>
              
              <div className="space-y-4">
                {problemPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300" style={{ lineHeight: '1.8' }}>{point}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 p-8 rounded-2xl border border-red-500/20">
                <h3 className="text-xl font-semibold text-white mb-4">The Cost of Reactive Financial Intelligence</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Missed personalization opportunities</span>
                    <span className="text-red-400 font-semibold">High</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Ineffective fraud prevention</span>
                    <span className="text-red-400 font-semibold">Critical</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Reactive market response</span>
                    <span className="text-red-400 font-semibold">High</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Limited customer insights</span>
                    <span className="text-red-400 font-semibold">Medium</span>
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
            <h2 className="text-4xl font-bold text-white mb-6">The Surround AI Financial Solution</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" style={{ lineHeight: '1.8' }}>
              Surround AI is a dynamic intelligence platform that builds continuous, real-time understanding of all relevant data points. It analyzes historical and live transaction data, market trends, and external factors to generate adaptive predictive models.
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
            <h3 className="text-2xl font-bold text-white mb-8 text-center">How Surround AI Transforms Financial Intelligence</h3>
            
            {/* Before: Traditional Approach */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-red-400 mb-4">❌ Traditional Approach</h4>
              <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
                <div className="bg-red-900/20 p-4 rounded-lg border border-red-500/30 flex-1">
                  <p className="text-white font-medium">Fragmented Data</p>
                  <p className="text-gray-300 text-sm">CRM, Transactions, Market News</p>
                </div>
                <ArrowRight className="w-6 h-6 text-red-400 transform md:transform-none rotate-90 md:rotate-0" />
                <div className="bg-red-900/20 p-4 rounded-lg border border-red-500/30 flex-1">
                  <p className="text-white font-medium">Disconnected Analysis</p>
                  <p className="text-gray-300 text-sm">Static Reports</p>
                </div>
                <ArrowRight className="w-6 h-6 text-red-400 transform md:transform-none rotate-90 md:rotate-0" />
                <div className="bg-red-900/20 p-4 rounded-lg border border-red-500/30 flex-1">
                  <p className="text-white font-medium">Slow Response</p>
                  <p className="text-gray-300 text-sm">Missed Opportunities</p>
                </div>
              </div>
            </div>

            {/* After: Surround AI Approach */}
            <div>
              <h4 className="text-lg font-semibold text-green-400 mb-4">✅ Surround AI Approach</h4>
              <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
                <div className="bg-green-900/20 p-4 rounded-lg border border-green-500/30 flex-1">
                  <p className="text-white font-medium">Unified Data Sources</p>
                  <p className="text-gray-300 text-sm">CRM, Transactions, Market News</p>
                </div>
                <ArrowRight className="w-6 h-6 text-green-400 transform md:transform-none rotate-90 md:rotate-0" />
                <div className="bg-green-900/20 p-4 rounded-lg border border-green-500/30 flex-1">
                  <p className="text-white font-medium">Dynamic Analysis</p>
                  <p className="text-gray-300 text-sm">Real-time Predictive Insights</p>
                </div>
                <ArrowRight className="w-6 h-6 text-green-400 transform md:transform-none rotate-90 md:rotate-0" />
                <div className="bg-green-900/20 p-4 rounded-lg border border-green-500/30 flex-1">
                  <p className="text-white font-medium">Proactive Action</p>
                  <p className="text-gray-300 text-sm">Personalized Offers & Fraud Prevention</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Advanced Financial Intelligence Capabilities</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-purple-400" />
                  Fraud Detection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Identifies subtle patterns of fraud that traditional rule-based systems miss through dynamic behavioral modeling.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Real-time transaction analysis</li>
                  <li>• Behavioral pattern recognition</li>
                  <li>• Adaptive fraud scoring</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Users className="w-6 h-6 mr-3 text-purple-400" />
                  Customer Intelligence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Predicts customer churn and recommends the next best action for personalized financial services.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Churn prediction modeling</li>
                  <li>• Personalized product recommendations</li>
                  <li>• Customer lifetime value optimization</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <BarChart3 className="w-6 h-6 mr-3 text-purple-400" />
                  Risk Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Enhances portfolio risk analysis and modeling accuracy through sophisticated predictive algorithms.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Portfolio risk modeling</li>
                  <li>• Market trend analysis</li>
                  <li>• Regulatory compliance monitoring</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section ref={benefitsRef} className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Proven Financial Results</h2>
          
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
          <h2 className="text-4xl font-bold text-white text-center mb-12">How Surround AI Works</h2>
          
          <div className="space-y-8">
            <Card className="bg-slate-800/50 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white">Data Integration & Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Surround AI analyzes historical and live transaction data, market trends, and external factors like news or economic indicators to generate predictive models. Unlike static models, it adapts as new information becomes available.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white">Sophisticated Pattern Recognition</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  The platform provides a deeper, more sophisticated layer of analysis that goes beyond simple rule-based systems, identifying subtle patterns that traditional methods miss.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white">Actionable Intelligence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Delivers actionable insights for financial advisors and automated personalized product offers for customers, enabling proactive rather than reactive financial services.
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
            Ready to Transform Your Financial Intelligence?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading financial institutions using Surround AI to predict customer behavior, prevent fraud, and optimize portfolio performance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3">
              Schedule Financial Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-500/10 px-8 py-3">
              Download ROI Calculator
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

