'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Clock, Users, Shield, CheckCircle, Mic, FileText, Zap, Heart } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const MedicalDocumentationRevolutionPage = () => {
  const keyMetrics = [
    { label: 'Documentation Time', value: '50%', description: 'Reduction per patient encounter', icon: Clock, color: 'green' },
    { label: 'Patient Engagement', value: 'Increased', description: 'More face-to-face interaction', icon: Users, color: 'blue' },
    { label: 'HIPAA Compliance', value: 'Enhanced', description: 'Automated compliance checks', icon: Shield, color: 'purple' },
    { label: 'Physician Burnout', value: 'Reduced', description: 'Less administrative burden', icon: CheckCircle, color: 'orange' }
  ]

  const challenges = [
    'Healthcare professionals spending 30-40% of time on documentation',
    'Inefficient manual note-taking affecting patient engagement',
    'HIPAA compliance risks with traditional documentation',
    'Need for real-time, structured clinical documentation',
    'Physician burnout from repetitive administrative tasks',
    'Seamless EHR integration requirements'
  ]

  const solutionFeatures = [
    {
      title: 'Real-Time Ambient Transcription',
      description: 'Azure OpenAI and Speech-to-Text for live conversation transcription',
      icon: Mic
    },
    {
      title: 'EHR Integration & Automation',
      description: 'Seamless integration with Epic, Cerner, and other leading EHR platforms',
      icon: FileText
    },
    {
      title: 'Security & Compliance',
      description: 'End-to-end encryption with HIPAA compliance and RBAC controls',
      icon: Shield
    },
    {
      title: 'AI-Powered Summarization',
      description: 'Context-aware clinical summaries with actionable insights',
      icon: Zap
    }
  ]

  const ehrPlatforms = [
    { name: 'Epic', description: 'Full integration with Epic EHR systems' },
    { name: 'Cerner', description: 'Native Cerner platform connectivity' },
    { name: 'Allscripts', description: 'Seamless Allscripts integration' },
    { name: 'athenahealth', description: 'Complete athenahealth compatibility' }
  ]

  const outcomes = [
    {
      title: 'Clinical Efficiency',
      description: '50% reduction in documentation time allowing more patient focus',
      impact: 'High'
    },
    {
      title: 'Patient Care Quality',
      description: 'Increased patient engagement through enhanced doctor-patient interaction',
      impact: 'High'
    },
    {
      title: 'Compliance Assurance',
      description: 'Enhanced HIPAA compliance with automated documentation standards',
      impact: 'High'
    },
    {
      title: 'Physician Wellbeing',
      description: 'Reduced burnout through AI-driven automation and real-time assistance',
      impact: 'Medium'
    }
  ]

  const workflowSteps = [
    {
      step: '1',
      title: 'Ambient Listening',
      description: 'Seismic AI listens to doctor-patient conversations in real-time'
    },
    {
      step: '2',
      title: 'AI Processing',
      description: 'Natural language processing extracts medical terms and insights'
    },
    {
      step: '3',
      title: 'Structured Documentation',
      description: 'Automatically generates structured clinical notes and summaries'
    },
    {
      step: '4',
      title: 'EHR Integration',
      description: 'Seamlessly populates EHR fields with relevant patient data'
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-black to-green-900/20" />
        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <span className="px-4 py-2 bg-green-600/20 border border-green-500/30 rounded-full text-green-400 font-medium">
                  Seismic Success Story
                </span>
                <span className="text-gray-400">Small Business</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Medical Documentation <span className="gradient-text">Revolution</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                How a healthcare practice eliminated documentation burden with ambient AI 
                transcription, reducing documentation time by 50% while enhancing patient 
                care and HIPAA compliance.
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>Healthcare Practice</span>
                <span>•</span>
                <span>Healthcare Industry</span>
                <span>•</span>
                <span>Small Business</span>
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
                  alt="Medical AI Transcription Interface"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-green-600/20 to-transparent" />
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
            <h2 className="text-4xl font-bold mb-6">Clinical Impact Results</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Seismic AI delivered transformative improvements in clinical efficiency, 
              patient care, and physician satisfaction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center hover:border-green-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-8 h-8 text-green-400" />
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
              <h2 className="text-4xl font-bold mb-8">The Healthcare Documentation Crisis</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Healthcare professionals were drowning in administrative tasks, spending more 
                time on documentation than patient care, leading to burnout and reduced quality of care.
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
                <h3 className="text-2xl font-bold mb-6 text-red-400">The Administrative Burden</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-400 mb-2">30-40%</div>
                    <div className="text-gray-300">Time spent on documentation</div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Patient Interaction</span>
                      <span className="text-red-400 font-semibold">Reduced</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Physician Satisfaction</span>
                      <span className="text-red-400 font-semibold">Declining</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Care Quality</span>
                      <span className="text-red-400 font-semibold">At Risk</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">How Seismic AI Works</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our ambient AI transcription seamlessly integrates into clinical workflows, 
              capturing and processing conversations in real-time.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-green-500/30">
                  <span className="text-2xl font-bold text-green-400">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">The Seismic AI Solution</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We developed a comprehensive ambient transcription tool that revolutionizes 
              clinical documentation while maintaining the highest security standards.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {solutionFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-green-600/10 border border-green-500/30 rounded-xl p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* EHR Integration */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-blue-600/10 border border-blue-500/30 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-blue-400">EHR Platform Integration</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ehrPlatforms.map((platform, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FileText className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="font-semibold text-white mb-1">{platform.name}</div>
                  <div className="text-sm text-gray-400">{platform.description}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Clinical Impact & Outcomes</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The implementation transformed clinical workflows and significantly improved 
              both physician satisfaction and patient care quality.
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
      <section className="py-20 bg-gradient-to-r from-green-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Revolutionize Your Clinical Documentation?</h2>
            <p className="text-xl text-gray-300 mb-8">
              See how Seismic AI can eliminate documentation burden and help your physicians 
              focus on what matters most - patient care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                <Link href="/contact?type=demo&product=seismic">
                  Schedule Seismic Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black">
                <Link href="/products/seismic">
                  Learn More About Seismic
                </Link>
              </Button>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700">
              <Link href="/customer-success" className="text-green-400 hover:text-green-300 transition-colors">
                ← Back to Customer Success Stories
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default MedicalDocumentationRevolutionPage

