
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Users, CheckCircle, AlertTriangle, TrendingUp, Shield, Database, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const outcomes = [
  { metric: '40%', description: 'Reduction in administrative costs associated with data management' },
  { metric: '15%', description: 'Improvement in patient outcomes through proactive care interventions' },
  { metric: '30%', description: 'Enhancement in operational efficiency and reduced patient wait times' }
]

export default function CompleteSolutionHealthcarePage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://img.freepik.com/free-photo/medical-technology-doctor-touch-screen_1150-16896.jpg"
            alt="Complete Healthcare Intelligence Solution"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Users className="w-8 h-8 text-purple-400" />
              <span className="text-purple-400 font-semibold">Complete Healthcare Intelligence</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              The Ultimate <span className="gradient-text">Healthcare AI Platform</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12">
              Combine unified patient data management with predictive health intelligence to deliver proactive, personalized, and efficient healthcare that improves outcomes while reducing costs.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="section-padding bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-red-900/20 border-red-500/30">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="w-6 h-6 text-red-400" />
                    <CardTitle className="text-2xl text-red-400">The Challenge</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    Healthcare providers struggle with fragmented patient data across various systems—Electronic Health Records (EHR), billing, and patient portals. 
                    This creates a disjointed patient experience, delays in care, and higher administrative costs.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    It also hinders research capabilities and the ability to identify at-risk populations for preventative care, 
                    leading to reactive rather than proactive healthcare delivery.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                The Complete <span className="gradient-text">Solution</span>
              </h2>
              <p className="text-gray-300 leading-relaxed">
                By combining Data Coffee's unified patient data management with Surround AI's predictive health analytics, 
                you get a comprehensive platform that transforms healthcare delivery from reactive to proactive.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Complete patient history accessible to all providers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Predictive models for early intervention opportunities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Automated administrative processes reducing staff burden</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Enhanced patient safety through comprehensive data visibility</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Description */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              How the <span className="gradient-text">Complete Solution</span> Works
            </h2>
            <Card className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border-purple-500/20">
              <CardContent className="p-8">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Data Coffee acts as the central hub, automatically collecting and unifying all patient information from disparate sources into a single, 
                  cohesive patient record. It intelligently identifies and merges duplicate records, ensuring each patient has one accurate and complete profile.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Surround AI then analyzes this unified data to create a holistic view of each patient's health. It can predict potential health crises, 
                  recommend personalized treatment plans, and identify patients who would benefit from preventative care programs.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  This enables healthcare providers to deliver more effective, proactive, and personalized care while reducing administrative burden and costs, 
                  ultimately improving patient outcomes and satisfaction.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section className="section-padding bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Expected <span className="gradient-text">Outcomes</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Measurable results from the complete healthcare intelligence solution
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {outcomes.map((outcome, index) => (
              <Card key={index} className="text-center group hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className="text-5xl font-bold gradient-text mb-4">{outcome.metric}</div>
                  <CardDescription className="text-gray-300 text-lg">
                    {outcome.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Real-World <span className="gradient-text">Applications</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Heart className="w-5 h-5 text-purple-400 mr-2" />
                  Proactive Chronic Disease Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Identify patients at risk for chronic diseases and intervene before conditions become critical.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Early detection of diabetes and heart disease risk</li>
                  <li>• Personalized prevention programs</li>
                  <li>• Treatment adherence monitoring</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Shield className="w-5 h-5 text-purple-400 mr-2" />
                  Readmission Prevention
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Predict and prevent hospital readmissions through comprehensive discharge planning and monitoring.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Risk-based discharge planning</li>
                  <li>• Post-discharge monitoring alerts</li>
                  <li>• Coordinated care team communication</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <TrendingUp className="w-5 h-5 text-purple-400 mr-2" />
                  Population Health Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Identify trends and patterns across patient populations for targeted health initiatives.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Community health trend analysis</li>
                  <li>• Targeted vaccination campaigns</li>
                  <li>• Resource allocation optimization</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Database className="w-5 h-5 text-purple-400 mr-2" />
                  Clinical Decision Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Provide clinicians with comprehensive patient insights for better treatment decisions.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Complete medication history visibility</li>
                  <li>• Drug interaction warnings</li>
                  <li>• Evidence-based treatment recommendations</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-purple-900/20 to-blue-900/20 border-y border-purple-500/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transform Healthcare Delivery Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Experience the power of unified patient data and predictive health intelligence working together to revolutionize patient care and operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                <Link href="/contact?type=demo&product=complete-solution&industry=healthcare">
                  Schedule Complete Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/resources/healthcare-roi-calculator">
                  Calculate ROI
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
