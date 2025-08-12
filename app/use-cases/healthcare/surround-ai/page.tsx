'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Heart, Shield, Target, Users, BarChart3, CheckCircle, AlertTriangle, Zap, Brain, Activity } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import AnimatedCounter from '@/components/animated-counter'

export default function SurroundAIHealthcarePage() {
  const [benefitsRef, benefitsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [solutionRef, solutionInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const benefits = [
    { value: 25, suffix: '%', label: 'Decrease in Hospital Readmission Rates', icon: Heart },
    { value: 15, suffix: '%', label: 'Enhancement in Diagnostic Accuracy', icon: Target },
    { value: 30, suffix: '%', label: 'Improvement in Patient Treatment Plan Engagement', icon: Users },
  ]

  const problemPoints = [
    'Healthcare systems struggle with sheer volume of unstructured data',
    'Difficulty identifying at-risk patients from physician notes and lab results',
    'Challenge personalizing treatment plans with patient-reported symptoms',
    'Inability to predict potential health crises proactively',
    'Reactive care approach leading to less effective patient outcomes'
  ]

  const solutionFeatures = [
    {
      icon: Brain,
      title: 'Real-time Data Analysis',
      description: 'Analyzes both structured and unstructured patient data in real-time for comprehensive insights'
    },
    {
      icon: Activity,
      title: 'Clinical Note Understanding',
      description: 'Reads clinical notes, understands context of lab results, and connects patient history'
    },
    {
      icon: Zap,
      title: 'Dynamic Patient Models',
      description: 'Builds dynamic models for each patient to predict onset of chronic diseases'
    },
    {
      icon: Target,
      title: 'Proactive Care Assistant',
      description: 'Acts as proactive assistant providing holistic, forward-looking view of patient health'
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
          <Link href="/use-cases/healthcare" className="hover:text-white transition-colors">Healthcare</Link>
          <span>/</span>
          <span className="text-white">Surround AI</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-purple-600/20 text-purple-300 border-purple-500/30">
            <Heart className="w-4 h-4 mr-2" />
            Surround AI for Healthcare
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Transform Patient Care with 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"> Predictive Intelligence</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Unlock the power of unstructured healthcare data to identify at-risk patients, personalize treatment plans, and predict health crises before they occur. Transform reactive care into proactive patient outcomes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3">
              See Healthcare Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-500/10 px-8 py-3">
              Calculate Patient Impact
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
                <h2 className="text-3xl font-bold text-white">The Healthcare Data Challenge</h2>
              </div>
              
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Healthcare systems struggle with the sheer volume of unstructured data—physician's notes, lab results, and patient-reported symptoms. This makes it difficult to identify at-risk patients, personalize treatment plans, or predict potential health crises.
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
                <h3 className="text-xl font-semibold text-white mb-4">The Cost of Reactive Healthcare</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Delayed diagnoses</span>
                    <span className="text-red-400 font-semibold">Critical</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Inefficient care delivery</span>
                    <span className="text-red-400 font-semibold">High</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Poor patient outcomes</span>
                    <span className="text-red-400 font-semibold">Critical</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Missed at-risk patients</span>
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
            <h2 className="text-4xl font-bold text-white mb-6">The Surround AI Healthcare Solution</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Surround AI analyzes and makes sense of both structured and unstructured patient data in real-time, building dynamic models for each patient to predict health outcomes and recommend preventative interventions.
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
            <h3 className="text-2xl font-bold text-white mb-8 text-center">How Surround AI Transforms Healthcare Intelligence</h3>
            
            {/* Before: Traditional Approach */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-red-400 mb-4">❌ Traditional Approach</h4>
              <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
                <div className="bg-red-900/20 p-4 rounded-lg border border-red-500/30 flex-1">
                  <p className="text-white font-medium">Siloed Data</p>
                  <p className="text-gray-300 text-sm">EHR, Billing, Lab Reports</p>
                </div>
                <ArrowRight className="w-6 h-6 text-red-400 transform md:transform-none rotate-90 md:rotate-0" />
                <div className="bg-red-900/20 p-4 rounded-lg border border-red-500/30 flex-1">
                  <p className="text-white font-medium">Reactive Analysis</p>
                  <p className="text-gray-300 text-sm">Delayed Diagnoses</p>
                </div>
                <ArrowRight className="w-6 h-6 text-red-400 transform md:transform-none rotate-90 md:rotate-0" />
                <div className="bg-red-900/20 p-4 rounded-lg border border-red-500/30 flex-1">
                  <p className="text-white font-medium">Inefficient Care</p>
                  <p className="text-gray-300 text-sm">Poor Patient Outcomes</p>
                </div>
              </div>
            </div>

            {/* After: Surround AI Approach */}
            <div>
              <h4 className="text-lg font-semibold text-green-400 mb-4">✅ Surround AI Approach</h4>
              <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
                <div className="bg-green-900/20 p-4 rounded-lg border border-green-500/30 flex-1">
                  <p className="text-white font-medium">Unified Data</p>
                  <p className="text-gray-300 text-sm">EHR, Billing, Lab Reports</p>
                </div>
                <ArrowRight className="w-6 h-6 text-green-400 transform md:transform-none rotate-90 md:rotate-0" />
                <div className="bg-green-900/20 p-4 rounded-lg border border-green-500/30 flex-1">
                  <p className="text-white font-medium">Real-time Analysis</p>
                  <p className="text-gray-300 text-sm">Predictive Health Models</p>
                </div>
                <ArrowRight className="w-6 h-6 text-green-400 transform md:transform-none rotate-90 md:rotate-0" />
                <div className="bg-green-900/20 p-4 rounded-lg border border-green-500/30 flex-1">
                  <p className="text-white font-medium">Proactive Interventions</p>
                  <p className="text-gray-300 text-sm">Improved Patient Outcomes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Advanced Healthcare Intelligence Capabilities</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Heart className="w-6 h-6 mr-3 text-purple-400" />
                  Chronic Disease Prediction
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Predicts the onset of chronic diseases by analyzing patient history and emerging symptoms.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Early disease detection</li>
                  <li>• Risk factor identification</li>
                  <li>• Preventive care recommendations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Users className="w-6 h-6 mr-3 text-purple-400" />
                  Treatment Adherence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Flags patients who are not adhering to their treatment plans and recommends interventions.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Adherence monitoring</li>
                  <li>• Patient engagement tracking</li>
                  <li>• Intervention recommendations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Activity className="w-6 h-6 mr-3 text-purple-400" />
                  Clinical Decision Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Provides clinicians with holistic, forward-looking view of each patient's health status.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Real-time clinical insights</li>
                  <li>• Evidence-based recommendations</li>
                  <li>• Patient risk stratification</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section ref={benefitsRef} className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Proven Healthcare Results</h2>
          
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
          <h2 className="text-4xl font-bold text-white text-center mb-12">How Surround AI Works in Healthcare</h2>
          
          <div className="space-y-8">
            <Card className="bg-slate-800/50 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white">Comprehensive Data Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Surround AI reads clinical notes, understands the context of lab results, and connects a patient's history to emerging symptoms, providing a complete picture of patient health.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white">Dynamic Patient Modeling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  By building dynamic models for each patient, Surround AI can predict the onset of chronic diseases and identify patients at risk of health complications.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white">Proactive Clinical Assistant</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Acts as a proactive assistant for clinicians, providing them with a holistic and forward-looking view of each patient's health, enabling preventative care interventions.
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
            Ready to Transform Patient Care?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading healthcare organizations using Surround AI to predict health outcomes, improve patient engagement, and deliver proactive care.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3">
              Schedule Healthcare Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-500/10 px-8 py-3">
              Calculate Patient Impact
            </Button>
          </div>
        </div>
      </section>

      {/* Back Navigation */}
      <section className="container mx-auto px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <Link href="/use-cases/healthcare" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Healthcare Use Cases
          </Link>
        </div>
      </section>
    </div>
  )
}

