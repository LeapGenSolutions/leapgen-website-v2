'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Calculator, AlertTriangle, CheckCircle, Shield, BarChart3, Target, Clock, Search, Zap } from 'lucide-react'
import AnimatedCounter from '@/components/animated-counter'

export default function AccountingSurroundAIPage() {
  const [activeTab, setActiveTab] = useState('problem')
  const solutionRef = useRef(null)
  const isInView = useInView(solutionRef, { once: true })

  const problemPoints = [
    "Manual audit processes that are time-consuming and error-prone",
    "Difficulty detecting sophisticated fraud and financial anomalies",
    "Reactive approach to compliance and risk management",
    "Limited ability to analyze large volumes of financial data efficiently"
  ]

  const solutionFeatures = [
    {
      icon: <Search className="w-8 h-8 text-blue-400" />,
      title: "Intelligent Anomaly Detection",
      description: "Automatically identifies unusual patterns, transactions, and behaviors that may indicate fraud, errors, or compliance issues across financial data."
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: "Predictive Risk Assessment", 
      description: "Analyzes historical data and current trends to predict potential audit risks, compliance violations, and areas requiring attention."
    },
    {
      icon: <Target className="w-8 h-8 text-purple-400" />,
      title: "Automated Audit Workflows",
      description: "Streamlines audit processes by automatically flagging high-risk transactions, generating audit trails, and prioritizing review areas."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-400" />,
      title: "Real-Time Compliance Monitoring",
      description: "Continuously monitors financial activities against regulatory requirements and internal policies, providing instant alerts for violations."
    }
  ]

  const outcomes = [
    { label: "Audit Efficiency Improvement", value: 60, suffix: "%" },
    { label: "Fraud Detection Accuracy", value: 85, suffix: "%" },
    { label: "Compliance Risk Reduction", value: 70, suffix: "%" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation Breadcrumb */}
      <div className="container mx-auto px-6 pt-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
          <a href="/use-cases" className="hover:text-white transition-colors">Use Cases</a>
          <span>/</span>
          <a href="/use-cases/accounting" className="hover:text-white transition-colors">Accounting</a>
          <span>/</span>
          <span className="text-white">Surround AI</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-blue-600/20 text-blue-300 border-blue-500/30">
            <Calculator className="w-4 h-4 mr-2" />
            Surround AI for Accounting & Audit
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Transform Auditing with 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400"> Intelligent Detection</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8" style={{ lineHeight: '1.8' }}>
            Move beyond manual audit processes. Leverage AI to detect fraud, identify anomalies, predict risks, and ensure compliance with unprecedented accuracy and efficiency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-3">
              See Audit AI Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3">
              Download Compliance Guide
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
                <h2 className="text-3xl font-bold text-white">The Audit & Compliance Challenge</h2>
              </div>
              
              <p className="text-gray-300 text-lg mb-6" style={{ lineHeight: '1.8' }}>
                Accounting and audit firms face increasing pressure to detect fraud, ensure compliance, and manage risk while dealing with growing volumes of financial data. Traditional manual processes are time-consuming, error-prone, and often miss sophisticated fraud schemes or subtle anomalies that could indicate serious issues.
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
              <h3 className="text-xl font-semibold text-white mb-6">Current Audit Challenges</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center p-4 bg-red-900/20 rounded-lg border border-red-800/30">
                  <span className="text-gray-300">Fraud Detection</span>
                  <span className="text-red-400 font-bold">Manual</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-red-900/20 rounded-lg border border-red-800/30">
                  <span className="text-gray-300">Risk Assessment</span>
                  <span className="text-red-400 font-bold">Reactive</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-red-900/20 rounded-lg border border-red-800/30">
                  <span className="text-gray-300">Audit Efficiency</span>
                  <span className="text-red-400 font-bold">Low</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Visualization */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">How Surround AI Transforms Auditing</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Before */}
            <Card className="bg-red-900/20 border-red-800/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-red-400 mb-6">Before: Manual Processes</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg">
                    <div className="w-4 h-4 bg-red-400 rounded"></div>
                    <span className="text-gray-300">Large Volume Financial Data</span>
                  </div>
                  <div className="flex items-center justify-center py-2">
                    <ArrowRight className="w-6 h-6 text-red-400" />
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg">
                    <div className="w-4 h-4 bg-red-400 rounded"></div>
                    <span className="text-gray-300">Manual Review & Sampling</span>
                  </div>
                  <div className="flex items-center justify-center py-2">
                    <ArrowRight className="w-6 h-6 text-red-400" />
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg">
                    <div className="w-4 h-4 bg-red-400 rounded"></div>
                    <span className="text-gray-300">Missed Anomalies & Fraud</span>
                  </div>
                  <div className="flex items-center justify-center py-2">
                    <ArrowRight className="w-6 h-6 text-red-400" />
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-red-900/30 rounded-lg border border-red-800/50">
                    <div className="w-4 h-4 bg-red-500 rounded"></div>
                    <span className="text-red-300 font-semibold">Compliance Risks & Inefficiency</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* After */}
            <Card className="bg-green-900/20 border-green-800/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-green-400 mb-6">After: AI-Powered Intelligence</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg">
                    <div className="w-4 h-4 bg-green-400 rounded"></div>
                    <span className="text-gray-300">Large Volume Financial Data</span>
                  </div>
                  <div className="flex items-center justify-center py-2">
                    <ArrowRight className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg">
                    <div className="w-4 h-4 bg-green-400 rounded"></div>
                    <span className="text-gray-300">Surround AI: Intelligent Analysis</span>
                  </div>
                  <div className="flex items-center justify-center py-2">
                    <ArrowRight className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg">
                    <div className="w-4 h-4 bg-green-400 rounded"></div>
                    <span className="text-gray-300">Automated Anomaly & Fraud Detection</span>
                  </div>
                  <div className="flex items-center justify-center py-2">
                    <ArrowRight className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-green-900/30 rounded-lg border border-green-800/50">
                    <div className="w-4 h-4 bg-green-500 rounded"></div>
                    <span className="text-green-300 font-semibold">Enhanced Compliance & Efficiency</span>
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
            <h2 className="text-4xl font-bold text-white mb-6">The Surround AI Audit Solution</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" style={{ lineHeight: '1.8' }}>
              Surround AI analyzes vast amounts of financial data to identify patterns, anomalies, and potential fraud that would be impossible to detect manually. It learns from historical audit findings and continuously improves its detection capabilities.
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
              Measurable improvements in audit efficiency, fraud detection accuracy, and compliance risk management through AI-powered intelligence.
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
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 mb-4">
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
          <div className="bg-gradient-to-r from-blue-900/50 to-green-900/50 p-12 rounded-3xl border border-slate-700">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Audit Practice?</h2>
            <p className="text-xl text-gray-300 mb-8" style={{ lineHeight: '1.8' }}>
              Join leading accounting and audit firms using Surround AI to detect fraud, ensure compliance, and deliver superior audit quality with unprecedented efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-3">
                Schedule Audit AI Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3">
                Download Fraud Detection Guide
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

