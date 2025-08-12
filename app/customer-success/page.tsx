'use client'

import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Users, Clock, Shield, Award, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../../components/ui/button'

const CustomerSuccessPage = () => {
  const caseStudies = [
    {
      id: 'healthcare-sales-transformation',
      title: 'Healthcare Sales Transformation',
      company: 'Leading Healthcare Organization',
      industry: 'Healthcare',
      size: 'Large Enterprise',
      product: 'SurroundAI',
      description: 'Revolutionized sales operations with AI-powered automation, reducing response times and boosting productivity.',
      keyMetrics: [
        { label: 'Response Time Reduction', value: '50%', icon: Clock },
        { label: 'Sales Productivity Boost', value: '40%', icon: TrendingUp },
        { label: 'Conversion Rate', value: 'Increased', icon: Award },
        { label: 'Real-time Insights', value: 'Instant', icon: CheckCircle }
      ],
      challenge: 'Manual workflows, fragmented data, and delayed customer response times',
      solution: 'AI Sales Assistant with CRM integration and real-time insights',
      image: 'https://cdn.abacus.ai/images/007859da-9f38-4031-bf4d-1aaf8d834962.png',
      color: 'purple'
    },
    {
      id: 'government-data-modernization',
      title: 'Government Data Modernization',
      company: 'Leading Government Agency',
      industry: 'Government/Public Sector',
      size: 'Medium Enterprise',
      product: 'DataCoffee',
      description: 'Transformed data processing and citizen services with secure AI-powered document automation.',
      keyMetrics: [
        { label: 'Document Review Time', value: '80%', icon: Clock },
        { label: 'Citizen Response Speed', value: '60%', icon: TrendingUp },
        { label: 'Compliance', value: 'Enhanced', icon: Shield },
        { label: 'Decision Making', value: 'Real-time', icon: CheckCircle }
      ],
      challenge: 'Processing vast unstructured data while ensuring strict compliance',
      solution: 'Azure-based AI with automated document processing and virtual assistants',
      image: 'https://cdn.abacus.ai/images/1c4a902b-0626-4110-8238-04bda99fe7ab.png',
      color: 'blue'
    },
    {
      id: 'medical-documentation-revolution',
      title: 'Medical Documentation Revolution',
      company: 'Healthcare Practice',
      industry: 'Healthcare',
      size: 'Small Business',
      product: 'Seismic',
      description: 'Eliminated documentation burden with ambient AI transcription, allowing doctors to focus on patient care.',
      keyMetrics: [
        { label: 'Documentation Time', value: '50%', icon: Clock },
        { label: 'Patient Engagement', value: 'Increased', icon: Users },
        { label: 'HIPAA Compliance', value: 'Enhanced', icon: Shield },
        { label: 'Physician Burnout', value: 'Reduced', icon: CheckCircle }
      ],
      challenge: 'Healthcare professionals spending 30-40% of time on documentation',
      solution: 'Real-time ambient transcription with EHR integration',
      image: 'https://cdn.abacus.ai/images/007859da-9f38-4031-bf4d-1aaf8d834962.png',
      color: 'green'
    }
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'purple':
        return {
          bg: 'bg-purple-600/10',
          border: 'border-purple-500/30',
          text: 'text-purple-400',
          button: 'bg-purple-600 hover:bg-purple-700'
        }
      case 'blue':
        return {
          bg: 'bg-blue-600/10',
          border: 'border-blue-500/30',
          text: 'text-blue-400',
          button: 'bg-blue-600 hover:bg-blue-700'
        }
      case 'green':
        return {
          bg: 'bg-green-600/10',
          border: 'border-green-500/30',
          text: 'text-green-400',
          button: 'bg-green-600 hover:bg-green-700'
        }
      default:
        return {
          bg: 'bg-purple-600/10',
          border: 'border-purple-500/30',
          text: 'text-purple-400',
          button: 'bg-purple-600 hover:bg-purple-700'
        }
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Customer <span className="gradient-text">Success Stories</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Discover how organizations across industries are transforming their operations
              with LeapGen.AI solutions, achieving measurable results and driving innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-6 h-6 text-purple-400" />
                <span className="text-lg">50-80% Efficiency Gains</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-6 h-6 text-blue-400" />
                <span className="text-lg">3 Industry Leaders</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-6 h-6 text-green-400" />
                <span className="text-lg">Proven ROI</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-1 gap-12 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => {
              const colors = getColorClasses(study.color)
              return (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`${colors.bg} ${colors.border} border rounded-2xl p-8 hover:border-opacity-60 transition-all duration-300`}
                >
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Content */}
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center space-x-3 mb-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${colors.bg} ${colors.text}`}>
                            {study.product}
                          </span>
                          <span className="text-gray-400 text-sm">{study.size}</span>
                        </div>
                        <h2 className="text-3xl font-bold mb-3">{study.title}</h2>
                        <p className="text-gray-300 text-lg mb-4">{study.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span>{study.company}</span>
                          <span>•</span>
                          <span>{study.industry}</span>
                        </div>
                      </div>

                      {/* Key Metrics */}
                      <div className="grid grid-cols-2 gap-4">
                        {study.keyMetrics.map((metric, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <div className={`w-10 h-10 rounded-lg ${colors.bg} flex items-center justify-center`}>
                              <metric.icon className={`w-5 h-5 ${colors.text}`} />
                            </div>
                            <div>
                              <div className="font-semibold text-white">{metric.value}</div>
                              <div className="text-sm text-gray-400">{metric.label}</div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Challenge & Solution */}
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-white mb-2">Challenge</h4>
                          <p className="text-gray-300 text-sm">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-2">Solution</h4>
                          <p className="text-gray-300 text-sm">{study.solution}</p>
                        </div>
                      </div>

                      <Button asChild className={`${colors.button} text-white group`}>
                        <Link href={`/customer-success/${study.id}`}>
                          Read Full Case Study
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>

                    {/* Image */}
                    <div className="relative">
                      <div className="aspect-[4/3] relative rounded-xl overflow-hidden">
                        <Image
                          src={study.image}
                          alt={study.title}
                          fill
                          className="object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-tr ${colors.bg} opacity-20`} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
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
            <h2 className="text-4xl font-bold mb-6">Ready to Join Our Success Stories?</h2>
            <p className="text-xl text-gray-300 mb-8">
              See how LeapGen.AI can transform your organization with measurable results and proven ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                <Link href="/contact?type=demo">
                  Schedule Your Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black">
                <Link href="/resources/surroundai-roi-calculator">
                  Calculate Your ROI
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default CustomerSuccessPage

