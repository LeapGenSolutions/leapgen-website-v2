
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Download, Heart, Clock, Users, FileText, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import AnimatedCounter from '@/components/animated-counter'

export const metadata: Metadata = {
  title: 'Metro Medical Center Case Study - Clinical Documentation Revolution | LeapGen.AI',
  description: 'How Metro Medical Center improved physician satisfaction and billing accuracy with Seismic AI-powered clinical documentation.',
}

export default function MedicalCaseStudyPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://i.pinimg.com/originals/58/28/9e/58289ec5cb7427c591b2583832f4a2b5.jpg"
            alt="Metro Medical Center"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Button asChild variant="outline" size="sm">
                <Link href="/resources">
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Back to Resources
                </Link>
              </Button>
            </div>

            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div className="inline-block px-3 py-1 bg-red-600/20 text-red-400 text-sm rounded-full mb-4">
                Case Study • Seismic • Healthcare
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Metro Medical Center: <span className="gradient-text">Clinical Documentation Revolution</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                How a large hospital system improved physician satisfaction and billing accuracy with AI-powered clinical documentation
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-red-400 mb-2">
                    <AnimatedCounter end={80} suffix="%" />
                  </div>
                  <div className="text-gray-300">Time Reduction</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-pink-400 mb-2">
                    <AnimatedCounter end={90} suffix="%" />
                  </div>
                  <div className="text-gray-300">Billing Accuracy</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    <AnimatedCounter end={95} suffix="%" />
                  </div>
                  <div className="text-gray-300">Physician Satisfaction</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    $<AnimatedCounter end={8.5} suffix="M" />
                  </div>
                  <div className="text-gray-300">Annual Savings</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Hospital Overview */}
      <section className="section-padding bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">About Metro Medical Center</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Metro Medical Center is a 750-bed academic medical center serving over 200,000 patients 
                    annually. As a Level I trauma center and teaching hospital, it operates 15 specialized 
                    departments including emergency medicine, cardiology, oncology, and neurosurgery.
                  </p>
                  <p>
                    With increasing patient volumes and complex documentation requirements, physicians 
                    were spending more time on paperwork than patient care, leading to burnout and 
                    decreased job satisfaction.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                    <div className="text-2xl font-bold text-red-400">750</div>
                    <div className="text-sm text-gray-400">Hospital Beds</div>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                    <div className="text-2xl font-bold text-pink-400">200K+</div>
                    <div className="text-sm text-gray-400">Annual Patients</div>
                  </div>
                </div>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="https://www.pewtrusts.org/-/media/post-launch-images/2018/10/gettyimages-187137135-copy/16x9_m.jpg?h=1024&w=1820&la=en&hash=FAD93E79A05A5C1C608455B976E97A5D"
                  alt="Metro Medical Center Emergency Department"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">The Challenge</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-red-900/20 border-red-500/30">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-red-400" />
                    <span>Documentation Burden</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Physicians spent 4+ hours daily on documentation, reducing patient interaction time by 60%.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-orange-900/20 border-orange-500/30">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="w-5 h-5 text-orange-400" />
                    <span>Billing Errors</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    25% of claims required resubmission due to incomplete or inaccurate documentation.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-yellow-900/20 border-yellow-500/30">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-yellow-400" />
                    <span>Physician Burnout</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    70% of physicians reported high burnout levels, with 30% considering leaving the profession.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gray-900 rounded-lg p-8 border border-gray-700">
              <blockquote className="text-xl italic text-gray-300 text-center">
                "I became a doctor to help patients, not to spend my days typing notes. The documentation burden 
                was overwhelming and taking away from what I love most about medicine - caring for people."
              </blockquote>
              <div className="text-center mt-4">
                <div className="font-semibold">Dr. Sarah Williams</div>
                <div className="text-gray-400">Emergency Medicine Physician, Metro Medical Center</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="section-padding bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">The Solution</h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Seismic AI Implementation</h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Metro Medical Center implemented Seismic across all departments, integrating with 
                    their existing Epic EHR system. The AI-powered platform provides real-time clinical 
                    note generation, automated coding suggestions, and emotional intelligence insights.
                  </p>
                  <p>
                    The system was trained on the hospital's historical data and medical best practices 
                    to ensure accuracy and compliance with healthcare regulations.
                  </p>
                </div>
                
                <div className="space-y-4 mt-8">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold text-white">Real-time Documentation</div>
                      <div className="text-gray-400">AI generates clinical notes during patient encounters</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold text-white">Automated Coding</div>
                      <div className="text-gray-400">Intelligent ICD-10 and CPT code suggestions</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold text-white">Quality Assurance</div>
                      <div className="text-gray-400">Built-in compliance checks and error prevention</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="https://media.gettyimages.com/id/187137135/photo/doctors-using-digital-tablet-together-in-hospital.jpg?s=1024x1024&w=gi&k=20&c=OqVW1YFMWOrBtPqRfIAP994TTkjxYQpNCddZdYXzPl8="
                  alt="Seismic AI in Action"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Results & Impact</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-red-400" />
                    <span>Time Savings</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300">
                    <li>• 80% reduction in documentation time</li>
                    <li>• 3 hours saved per physician per day</li>
                    <li>• 150% increase in patient interaction time</li>
                    <li>• 40% improvement in work-life balance</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="w-5 h-5 text-pink-400" />
                    <span>Quality & Accuracy</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300">
                    <li>• 90% billing accuracy achieved</li>
                    <li>• 85% reduction in claim denials</li>
                    <li>• 95% documentation completeness</li>
                    <li>• 100% regulatory compliance</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-blue-400" />
                    <span>Physician Experience</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300">
                    <li>• 95% physician satisfaction score</li>
                    <li>• 60% reduction in burnout levels</li>
                    <li>• 90% would recommend to colleagues</li>
                    <li>• 25% increase in job satisfaction</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    <span>Financial Impact</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300">
                    <li>• $8.5M annual cost savings</li>
                    <li>• 30% increase in revenue capture</li>
                    <li>• ROI achieved in 6 months</li>
                    <li>• 50% reduction in transcription costs</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-red-900/20 to-pink-900/20 rounded-lg p-8 border border-red-500/20">
              <blockquote className="text-xl italic text-gray-300 text-center mb-6">
                "Seismic gave me my life back. I can focus on what matters most - my patients. The AI handles 
                the documentation seamlessly, and I'm more satisfied with my work than I've been in years."
              </blockquote>
              <div className="text-center">
                <div className="font-semibold">Dr. Michael Chen</div>
                <div className="text-gray-400">Chief Medical Officer, Metro Medical Center</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Journey */}
      <section className="section-padding bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Implementation Journey</h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Month 1: Pilot Program</h3>
                  <p className="text-gray-300">Started with Emergency Department, training 25 physicians on Seismic platform.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Month 2-3: Department Rollout</h3>
                  <p className="text-gray-300">Expanded to Internal Medicine, Cardiology, and Surgery departments.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Month 4-5: Full Implementation</h3>
                  <p className="text-gray-300">Hospital-wide deployment across all 15 departments and specialties.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Month 6+: Optimization</h3>
                  <p className="text-gray-300">Continuous improvement and customization based on user feedback and outcomes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="section-padding bg-gradient-to-r from-red-900/20 to-pink-900/20 border-t border-red-500/20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Download the Complete Case Study</h2>
            <p className="text-xl text-gray-300 mb-8">
              Get the full case study with detailed implementation methodology, physician testimonials, 
              and comprehensive outcome analysis from Metro Medical Center's transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="xl">
                <Link href="/contact?type=resource&resource=medical-case-study">
                  <Download className="mr-2 w-5 h-5" />
                  Download PDF Case Study
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link href="/contact?type=demo">
                  Schedule Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
