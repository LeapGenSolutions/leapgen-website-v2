'use client'

import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Clock, Award, CheckCircle, Users, Target, Zap, BarChart3 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const HealthcareSalesTransformationPage = () => {
  const keyMetrics = [
    { label: 'Response Time Reduction', value: '50%', description: 'Faster customer inquiry responses', icon: Clock, color: 'purple' },
    { label: 'Sales Productivity Boost', value: '40%', description: 'Increased sales team efficiency', icon: TrendingUp, color: 'blue' },
    { label: 'Conversion Rate', value: 'Increased', description: 'Higher lead-to-customer conversion', icon: Award, color: 'green' },
    { label: 'Real-time Insights', value: 'Instant', description: 'Immediate access to customer data', icon: CheckCircle, color: 'orange' }
  ]

  const challenges = [
    'Manual workflows causing inefficiencies',
    'Fragmented data across multiple systems',
    'Delayed response times for customer inquiries',
    'Sales reps relying on outdated reports',
    'Missed opportunities due to slow processes',
    'Limited real-time customer insights'
  ]

  const solutionFeatures = [
    {
      title: 'AI Sales Assistant',
      description: 'OpenAI-powered assistant integrated with existing CRM systems',
      icon: Users
    },
    {
      title: 'RAG Technology',
      description: 'Retrieval-Augmented Generation for precise, context-aware responses',
      icon: Target
    },
    {
      title: 'NLP Capabilities',
      description: 'Natural language processing for understanding customer queries',
      icon: Zap
    },
    {
      title: 'Automated Workflows',
      description: 'Automated FAQs, proposal generation, and interaction summaries',
      icon: BarChart3
    }
  ]

  const outcomes = [
    {
      title: 'Operational Efficiency',
      description: '50% reduction in response times and 40% boost in sales productivity',
      impact: 'High'
    },
    {
      title: 'Revenue Growth',
      description: 'Measurable increase in conversion rates through personalized interactions',
      impact: 'High'
    },
    {
      title: 'Data-Driven Insights',
      description: 'Real-time access to customer insights and recommendations',
      impact: 'Medium'
    },
    {
      title: 'Scalable Operations',
      description: 'Transformed sales operations with scalable, data-driven approach',
      impact: 'High'
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-purple-900/20" />
        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <span className="px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-400 font-medium">
                  SurroundAI Success Story
                </span>
                <span className="text-gray-400">Large Enterprise</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Healthcare Sales <span className="gradient-text">Transformation</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                How a leading healthcare organization revolutionized their sales operations 
                with AI-powered automation, achieving 50% faster response times and 40% 
                productivity gains.
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>Leading Healthcare Organization</span>
                <span>•</span>
                <span>Healthcare Industry</span>
                <span>•</span>
                <span>Large Enterprise</span>
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
                  src="https://cdn.abacus.ai/images/007859da-9f38-4031-bf4d-1aaf8d834962.png"
                  alt="Healthcare Sales AI Dashboard"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent" />
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
            <h2 className="text-4xl font-bold mb-6">Measurable Results</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The AI Sales Assistant delivered significant improvements across all key performance indicators.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-8 h-8 text-purple-400" />
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
                The healthcare organization faced significant inefficiencies in their sales process 
                that were impacting customer satisfaction and revenue growth.
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
                <h3 className="text-2xl font-bold mb-6 text-red-400">Impact on Business</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Response Time</span>
                    <span className="text-red-400 font-semibold">Slow & Inconsistent</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Sales Productivity</span>
                    <span className="text-red-400 font-semibold">Below Potential</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Customer Satisfaction</span>
                    <span className="text-red-400 font-semibold">Declining</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Revenue Growth</span>
                    <span className="text-red-400 font-semibold">Stagnant</span>
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
            <h2 className="text-4xl font-bold mb-6">The SurroundAI Solution</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We implemented a comprehensive AI Sales Assistant that integrated seamlessly 
              with their existing systems while providing advanced automation capabilities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {solutionFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-purple-600/10 border border-purple-500/30 rounded-xl p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
              The implementation delivered transformative results across all areas of the sales operation.
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
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Sales Operations?</h2>
            <p className="text-xl text-gray-300 mb-8">
              See how SurroundAI can deliver similar results for your organization with 
              AI-powered sales automation and real-time insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                <Link href="/contact?type=demo&product=surroundai">
                  Schedule SurroundAI Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black">
                <Link href="/resources/surroundai-roi-calculator">
                  Calculate Your ROI
                </Link>
              </Button>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700">
              <Link href="/customer-success" className="text-purple-400 hover:text-purple-300 transition-colors">
                ← Back to Customer Success Stories
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HealthcareSalesTransformationPage

