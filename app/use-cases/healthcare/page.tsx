
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Heart, TrendingUp, Shield, Users, CheckCircle, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const solutions = [
  {
    id: 'surround-ai',
    name: 'Surround AI for Healthcare',
    description: 'Predictive health analytics for proactive patient care',
    icon: TrendingUp,
    keyBenefits: ['25% reduction in readmissions', '15% better diagnostic accuracy', '30% improved patient engagement'],
    href: '/use-cases/healthcare/surround-ai'
  },
  {
    id: 'data-coffee',
    name: 'Data Coffee for Healthcare',
    description: 'Unified patient records and automated data management',
    icon: Shield,
    keyBenefits: ['40% lower admin costs', '70% less manual data entry', '95% data accuracy improvement'],
    href: '/use-cases/healthcare/data-coffee'
  },
  {
    id: 'complete-solution',
    name: 'Complete Healthcare Intelligence',
    description: 'Integrated solution for comprehensive patient care and operations',
    icon: Users,
    keyBenefits: ['40% reduction in admin costs', '15% better patient outcomes', '30% operational efficiency gain'],
    href: '/use-cases/healthcare/complete-solution'
  }
]

const challenges = [
  'Unstructured data across EHR, billing, and lab systems',
  'Reactive care models leading to poor outcomes',  
  'Manual patient record reconciliation',
  'Difficulty identifying at-risk patients',
  'Administrative burden consuming staff time',
  'Fragmented patient treatment histories'
]

export default function HealthcareUseCasesPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://img.freepik.com/free-photo/medical-banner-with-doctor-wearing-goggles_23-2149611193.jpg"
            alt="AI Solutions for Healthcare"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-3 mb-4">
                <Heart className="w-8 h-8 text-purple-400" />
                <span className="text-purple-400 font-semibold">Healthcare</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Transform Healthcare with <span className="gradient-text">Predictive Intelligence</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Move from reactive to proactive care. Unify patient data, predict health risks, and deliver personalized treatment plans that improve outcomes while reducing costs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  <Link href="/contact?type=demo&industry=healthcare">
                    See Healthcare Solutions
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/resources/healthcare-roi-calculator">
                    Calculate Healthcare ROI
                  </Link>
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-red-900/20 border-red-500/30">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="w-5 h-5 text-red-400" />
                    <CardTitle className="text-red-400">Healthcare Challenges</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start text-gray-300">
                        <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="section-padding bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              AI Solutions for <span className="gradient-text">Healthcare Providers</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the right AI solution to transform your healthcare operations and patient outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution) => {
              const IconComponent = solution.icon
              return (
                <Card key={solution.id} className="group hover:scale-105 transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{solution.name}</CardTitle>
                    <CardDescription className="text-gray-300">
                      {solution.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-green-400 mb-2">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {solution.keyBenefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button asChild className="w-full" variant="outline">
                      <Link href={solution.href}>
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-purple-900/20 to-blue-900/20 border-y border-purple-500/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Improve Patient Outcomes?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule a consultation to see how our AI solutions can help you deliver proactive care, reduce costs, and improve patient satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                <Link href="/contact?type=consultation&industry=healthcare">
                  Schedule Consultation
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
