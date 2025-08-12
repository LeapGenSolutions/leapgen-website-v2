'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Clock, TrendingUp, Shield, CheckCircle, Database, Bot, Brain, Lock } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const GovernmentDataModernizationPage = () => {
  const keyMetrics = [
    { label: 'Document Review Time', value: '80%', description: 'Reduction in manual processing', icon: Clock, color: 'blue' },
    { label: 'Citizen Response Speed', value: '60%', description: 'Faster query responses', icon: TrendingUp, color: 'green' },
    { label: 'Compliance Enhancement', value: 'Enhanced', description: 'Automated data governance', icon: Shield, color: 'purple' },
    { label: 'Decision Making', value: 'Real-time', description: 'Instant insights from data', icon: CheckCircle, color: 'orange' }
  ]

  const challenges = [
    'Processing vast amounts of classified and unclassified documents',
    'Ensuring strict compliance with security regulations',
    'Improving citizen service efficiency and response times',
    'Manual document review consuming excessive resources',
    'Limited real-time decision-making capabilities',
    'Fragmented data across multiple government systems'
  ]

  const solutionFeatures = [
    {
      title: 'Automated Document Processing',
      description: 'Azure Cognitive Services and AI Search for intelligent document analysis',
      icon: Database
    },
    {
      title: 'AI-Powered Virtual Assistant',
      description: 'GPT-based chatbot for enhanced citizen engagement and support',
      icon: Bot
    },
    {
      title: 'Enhanced Decision Intelligence',
      description: 'Machine Learning for real-time summarization and classification',
      icon: Brain
    },
    {
      title: 'Security & Compliance',
      description: 'Private endpoints, RBAC, and multi-regulation compliance',
      icon: Lock
    }
  ]

  const complianceStandards = [
    { name: 'FISMA', description: 'Federal Information Security Management Act' },
    { name: 'HIPAA', description: 'Health Insurance Portability and Accountability Act' },
    { name: 'GDPR', description: 'General Data Protection Regulation' },
    { name: 'FedRAMP', description: 'Federal Risk and Authorization Management Program' }
  ]

  const outcomes = [
    {
      title: 'Operational Efficiency',
      description: '80% reduction in manual document review time and 60% faster citizen responses',
      impact: 'High'
    },
    {
      title: 'Enhanced Security',
      description: 'Secure AI adoption through private deployments and strict access controls',
      impact: 'High'
    },
    {
      title: 'Improved Compliance',
      description: 'Automated data governance ensuring adherence to multiple regulations',
      impact: 'High'
    },
    {
      title: 'Better Decision Making',
      description: 'Real-time insights from unstructured data enabling faster decisions',
      impact: 'Medium'
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-black to-blue-900/20" />
        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <span className="px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-400 font-medium">
                  DataCoffee Success Story
                </span>
                <span className="text-gray-400">Medium Enterprise</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Government Data <span className="gradient-text">Modernization</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                How a leading government agency transformed data processing and citizen 
                services with secure AI-powered automation, achieving 80% efficiency gains 
                while maintaining strict compliance.
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>Leading Government Agency</span>
                <span>•</span>
                <span>Public Sector</span>
                <span>•</span>
                <span>Medium Enterprise</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
                <Image
                  src="https://cdn.abacus.ai/images/1c4a902b-0626-4110-8238-04bda99fe7ab.png"
                  alt="Government Data Processing Dashboard"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Transformative Results</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The DataCoffee implementation delivered significant improvements in efficiency, 
              security, and citizen service quality.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-lg font-semibold text-gray-300 mb-2">{metric.label}</div>
                <div className="text-sm text-gray-400">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-8">The Challenge</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                The government agency faced complex challenges in modernizing their data 
                processing while maintaining the highest security and compliance standards.
              </p>
              <div className="space-y-4">
                {challenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0" />
                    <span className="text-gray-300">{challenge}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 rounded-2xl p-8 border border-red-500/20">
                <h3 className="text-2xl font-bold mb-6 text-red-400">Critical Requirements</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Data Security</span>
                    <span className="text-red-400 font-semibold">Mission Critical</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Compliance</span>
                    <span className="text-red-400 font-semibold">Multi-Standard</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Processing Speed</span>
                    <span className="text-red-400 font-semibold">Real-time Required</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Citizen Service</span>
                    <span className="text-red-400 font-semibold">24/7 Availability</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">The DataCoffee Solution</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We implemented a comprehensive Azure-based AI solution that addressed all 
              security, compliance, and efficiency requirements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {solutionFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-blue-600/10 border border-blue-500/30 rounded-xl p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Compliance Standards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-green-600/10 border border-green-500/30 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-green-400">Compliance Standards Met</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {complianceStandards.map((standard, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-8 h-8 text-green-400" />
                  </div>
                  <div className="font-semibold text-white mb-1">{standard.name}</div>
                  <div className="text-sm text-gray-400">{standard.description}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Business Impact & Outcomes</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The implementation set a new benchmark for AI-driven innovation in the public sector.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-green-600/10 border border-green-500/30 rounded-xl p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{outcome.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    outcome.impact === 'High' ? 'bg-green-600/20 text-green-400' : 'bg-yellow-600/20 text-yellow-400'
                  }`}>
                    {outcome.impact} Impact
                  </span>
                </div>
                <p className="text-gray-300">{outcome.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Modernize Your Data Operations?</h2>
            <p className="text-xl text-gray-300 mb-8">
              See how DataCoffee can deliver secure, compliant, and efficient data processing 
              for your organization with enterprise-grade AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Link href="/contact?type=demo&product=datacoffee">
                  Schedule DataCoffee Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black">
                <Link href="/resources/datacoffee-roi-calculator">
                  Calculate Your ROI
                </Link>
              </Button>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700">
              <Link href="/customer-success" className="text-blue-400 hover:text-blue-300 transition-colors">
                ← Back to Customer Success Stories
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default GovernmentDataModernizationPage

