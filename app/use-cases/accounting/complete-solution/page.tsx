
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Layers, Coffee, TrendingUp, Shield, CheckCircle, Users, Clock, BarChart3, Brain, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const solutionComponents = [
  {
    name: 'Data Coffee',
    icon: Coffee,
    description: 'Automated data preparation and cleansing',
    capabilities: [
      'Multi-source data extraction',
      'Intelligent data validation',
      'Automated cleansing workflows',
      'Audit-ready formatting'
    ],
    color: 'from-orange-600 to-red-600'
  },
  {
    name: 'Surround AI',
    icon: Brain,
    description: 'Advanced financial analysis and anomaly detection',
    capabilities: [
      '100% population testing',
      'Predictive risk assessment',
      'Automated anomaly detection',
      'Financial trend analysis'
    ],
    color: 'from-purple-600 to-blue-600'
  }
]

const workflow = [
  {
    phase: 'Data Ingestion',
    description: 'Data Coffee automatically extracts and prepares client data from multiple sources',
    duration: '2-4 hours',
    traditional: '16-24 hours'
  },
  {
    phase: 'Quality Assurance',
    description: 'Advanced validation ensures 95% data integrity before analysis',
    duration: '1 hour',
    traditional: '8-12 hours'
  },
  {
    phase: 'AI Analysis',
    description: 'Surround AI performs comprehensive financial analysis and anomaly detection',
    duration: '4-6 hours', 
    traditional: '24-32 hours'
  },
  {
    phase: 'Risk Assessment',
    description: 'Automated risk scoring and priority ranking of audit areas',
    duration: '2 hours',
    traditional: '8-16 hours'
  },
  {
    phase: 'Report Generation',
    description: 'Automated generation of audit findings and recommendations',
    duration: '1-2 hours',
    traditional: '4-8 hours'
  }
]

const benefits = [
  {
    metric: '70%',
    title: 'Faster Data Preparation',
    description: 'Combined automation reduces data prep time from days to hours'
  },
  {
    metric: '90%',
    title: 'Better Analysis Accuracy',
    description: 'AI-powered analysis identifies issues traditional methods miss'
  },
  {
    metric: '40%',
    title: 'Quicker Engagements',
    description: 'Complete audit cycles 40% faster with higher quality results'
  },
  {
    metric: '100%',
    title: 'Population Coverage',
    description: 'Analyze entire datasets instead of small samples'
  }
]

const caseStudy = {
  client: 'Large Regional CPA Firm',
  challenge: 'Managing multiple complex audit engagements with tight deadlines and growing client expectations',
  implementation: 'Deployed both Data Coffee and Surround AI for complete audit intelligence automation',
  timeline: '6-week implementation across 12-person audit team',
  results: [
    'Reduced average audit completion time from 10 weeks to 6 weeks',
    'Increased audit capacity by 60% without additional staff',
    'Improved anomaly detection rate from 20% to 92%',
    'Achieved 98% client satisfaction scores (up from 78%)',
    'Generated $2.1M additional revenue in first year through increased capacity',
    'Reduced audit adjustments by 75% due to improved data quality'
  ]
}

export default function CompleteSolutionAccountingPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Breadcrumb Navigation */}
      <section className="bg-gray-950 py-4 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <Link href="/use-cases" className="hover:text-purple-400 transition-colors">Use Cases</Link>
            <span>/</span>
            <Link href="/use-cases/accounting" className="hover:text-purple-400 transition-colors">Accounting & Audit</Link>
            <span>/</span>
            <span className="text-white">Complete Solution</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop"
            alt="Complete Audit Intelligence Solution"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-3">
                <Button asChild variant="outline" size="sm">
                  <Link href="/use-cases/accounting">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Accounting
                  </Link>
                </Button>
              </div>
              
              <div>
                <Badge className="mb-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-400 border-purple-500/30 flex items-center w-fit">
                  <Layers className="w-4 h-4 mr-2" />
                  Complete Audit Intelligence
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                  End-to-End <span className="gradient-text">Audit Automation</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Combine the power of Data Coffee and Surround AI for complete audit intelligence. From data preparation to analysis, experience fully automated audit workflows that deliver superior results in less time.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  <Link href="/contact?product=complete-solution&industry=accounting">
                    Request Enterprise Demo
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/resources/surroundai-roi-calculator">
                    Calculate ROI
                  </Link>
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border-purple-500/30">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Layers className="w-5 h-5 text-purple-400" />
                    <CardTitle className="text-purple-400">Complete Solution Benefits</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400">70%</div>
                      <div className="text-sm text-gray-300">Faster Data Prep</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400">90%</div>
                      <div className="text-sm text-gray-300">Better Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400">40%</div>
                      <div className="text-sm text-gray-300">Quicker Engagements</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400">100%</div>
                      <div className="text-sm text-gray-300">Data Coverage</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Components */}
      <section className="section-padding bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Two Powerful <span className="gradient-text">Solutions Combined</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The complete audit intelligence solution integrates Data Coffee and Surround AI for unprecedented audit automation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {solutionComponents.map((component, index) => {
              const IconComponent = component.icon
              return (
                <Card key={index} className="group hover:scale-105 transition-all duration-300 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${component.color} opacity-5`}></div>
                  <CardHeader className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-r ${component.color} rounded-lg flex items-center justify-center mb-4`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl">{component.name}</CardTitle>
                    <CardDescription className="text-lg text-gray-300">
                      {component.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <div>
                      <h4 className="font-semibold text-white mb-3">Key Capabilities:</h4>
                      <ul className="space-y-2">
                        {component.capabilities.map((capability, idx) => (
                          <li key={idx} className="flex items-start text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                            {capability}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Integrated Workflow */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Streamlined <span className="gradient-text">Audit Workflow</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how the integrated solution transforms traditional audit timelines.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="space-y-6">
              {workflow.map((phase, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-5 gap-6 items-center">
                      <div className="md:col-span-2">
                        <h3 className="text-xl font-semibold text-white mb-2">{phase.phase}</h3>
                        <p className="text-gray-300">{phase.description}</p>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-gray-400 mb-1">Traditional</div>
                        <div className="text-red-400 font-medium">{phase.traditional}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-gray-400 mb-1">With AI</div>
                        <div className="text-green-400 font-medium">{phase.duration}</div>
                      </div>
                      <div className="text-center">
                        <Zap className="w-8 h-8 text-yellow-400 mx-auto" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="section-padding bg-gradient-to-r from-purple-900/10 to-blue-900/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transformational <span className="gradient-text">Results</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The complete solution delivers measurable improvements across all audit metrics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center group hover:scale-105 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-purple-400 mb-3">{benefit.metric}</div>
                  <div className="text-white font-semibold mb-2">{benefit.title}</div>
                  <div className="text-sm text-gray-400">{benefit.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Case Study */}
      <section className="section-padding bg-gray-950 border-y border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Enterprise Success <span className="gradient-text">Story</span>
              </h2>
            </div>

            <Card className="border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-3xl flex items-center space-x-3">
                  <Users className="w-10 h-10 text-purple-400" />
                  <span>{caseStudy.client}</span>
                </CardTitle>
                <CardDescription className="text-xl">
                  {caseStudy.challenge}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-3">Solution Implemented:</h4>
                    <p className="text-gray-300 mb-4">{caseStudy.implementation}</p>
                    
                    <h4 className="font-semibold text-orange-400 mb-3">Implementation Timeline:</h4>
                    <p className="text-gray-300">{caseStudy.timeline}</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-lg p-6 border border-purple-500/20">
                    <h4 className="font-semibold text-purple-400 mb-4 text-center">Key Metrics Achieved</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-400">60%</div>
                        <div className="text-sm text-gray-300">Capacity Increase</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-400">92%</div>
                        <div className="text-sm text-gray-300">Detection Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-400">$2.1M</div>
                        <div className="text-sm text-gray-300">Added Revenue</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-400">98%</div>
                        <div className="text-sm text-gray-300">Client Satisfaction</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-400 mb-4">Complete Results Achieved:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {caseStudy.results.map((result, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
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
              Ready for Complete Audit Transformation?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join industry leaders using the complete audit intelligence solution to revolutionize their practice and deliver exceptional client value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                <Link href="/contact?product=complete-solution&industry=accounting">
                  Schedule Enterprise Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact?type=consultation&industry=accounting">
                  Speak with Expert
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
