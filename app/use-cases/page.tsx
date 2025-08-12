
'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Building2, Heart, GraduationCap, ShoppingCart, Calculator, Building, Users, CheckCircle, TrendingUp, Shield, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const industries = [
  {
    id: 'finance',
    name: 'Finance & Banking',
    icon: Building2,
    description: 'Transform financial services with predictive intelligence and unified data management',
    challenges: ['Fragmented customer data', 'Fraud detection delays', 'Regulatory compliance complexity'],
    outcomes: ['50% reduction in fraud losses', '20% increase in customer retention', '95% compliance accuracy'],
    href: '/use-cases/finance'
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: Heart,
    description: 'Deliver proactive patient care through integrated health data and predictive analytics',
    challenges: ['Siloed patient records', 'Reactive care models', 'Administrative burden'],
    outcomes: ['25% reduction in readmissions', '40% lower admin costs', '15% better outcomes'],
    href: '/use-cases/healthcare'
  },
  {
    id: 'sled',
    name: 'Government & Education',
    icon: GraduationCap,
    description: 'Optimize public services and educational outcomes with data-driven insights',
    challenges: ['Legacy system silos', 'Resource allocation inefficiencies', 'Manual reporting processes'],
    outcomes: ['30% better resource allocation', '15% improved student retention', '70% faster reporting'],
    href: '/use-cases/sled'
  },
  {
    id: 'retail',
    name: 'E-commerce & Retail',
    icon: ShoppingCart,
    description: 'Personalize customer experiences and optimize operations with AI-driven insights',
    challenges: ['Generic customer experiences', 'High cart abandonment', 'Inventory optimization'],
    outcomes: ['25% higher conversion rates', '35% less cart abandonment', '20% inventory reduction'],
    href: '/use-cases/retail'
  },
  {
    id: 'accounting',
    name: 'Accounting & Audit',
    icon: Calculator,
    description: 'Accelerate audits and enhance accuracy with automated data preparation and analysis',
    challenges: ['Manual data preparation', 'Sample-based testing limitations', 'Time-intensive processes'],
    outcomes: ['70% less prep time', '90% better anomaly detection', '40% faster engagements'],
    href: '/use-cases/accounting'
  },
  {
    id: 'enterprise',
    name: 'Enterprise & Fortune 500',
    icon: Building,
    description: 'Break down data silos and accelerate decision-making across your organization',
    challenges: ['Departmental data silos', 'Slow decision-making', 'Conflicting reports'],
    outcomes: ['50% faster decisions', '15% cost reduction', '80% better collaboration'],
    href: '/use-cases/enterprise'
  },
  {
    id: 'smb',
    name: 'Small & Medium Business',
    icon: Users,
    description: 'Compete with enterprise-level insights without the complexity or cost',
    challenges: ['Limited data resources', 'Manual processes', 'Growth bottlenecks'],
    outcomes: ['10% revenue increase', '85% less manual work', '25% better forecasting'],
    href: '/use-cases/smb'
  }
]

const benefits = [
  {
    icon: TrendingUp,
    title: 'Proven ROI',
    description: 'Our clients see measurable results within 30 days of implementation'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'SOC 2, HIPAA, and GDPR compliant solutions you can trust'
  },
  {
    icon: Zap,
    title: 'Rapid Deployment',
    description: 'Get up and running quickly with our proven implementation process'
  }
]

export default function UseCasesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null)

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg"
            alt="AI Use Cases Across Industries"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              AI Solutions for <span className="gradient-text">Every Industry</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              Discover how Surround AI and Data Coffee transform businesses across sectors with intelligent automation, predictive insights, and unified data management.
            </p>
            
            {/* Key Benefits */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon
                return (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                )
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                <Link href="/contact?type=consultation">
                  Schedule Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                <Link href="/resources/roi-calculator">
                  Calculate Your ROI
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Choose Your <span className="gradient-text">Industry</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore tailored AI solutions designed specifically for your industry's unique challenges and opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => {
              const IconComponent = industry.icon
              return (
                <Card 
                  key={industry.id}
                  className="group hover:scale-105 transition-all duration-300 cursor-pointer"
                  onMouseEnter={() => setSelectedIndustry(industry.id)}
                  onMouseLeave={() => setSelectedIndustry(null)}
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{industry.name}</CardTitle>
                    <CardDescription className="text-gray-300">
                      {industry.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-red-400 mb-2">Key Challenges:</h4>
                      <ul className="text-sm text-gray-400 space-y-1">
                        {industry.challenges.map((challenge, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm text-green-400 mb-2">Expected Outcomes:</h4>
                      <ul className="text-sm text-gray-400 space-y-1">
                        {industry.outcomes.map((outcome, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="w-3 h-3 text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button asChild className="w-full mt-4" variant="outline">
                      <Link href={industry.href}>
                        Explore Solutions
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule a consultation to see how our AI solutions can address your specific industry challenges and drive measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                <Link href="/contact?type=consultation">
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact?type=demo">
                  Request Demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
