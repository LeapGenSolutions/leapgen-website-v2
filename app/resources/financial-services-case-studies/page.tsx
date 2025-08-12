
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Building2, TrendingUp, Shield, CheckCircle, BarChart3, DollarSign, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import AnimatedCounter from '@/components/animated-counter'

export const metadata: Metadata = {
  title: 'Financial Services Case Studies - Real AI Success Stories | LeapGen.AI',
  description: 'Discover how leading financial institutions transformed operations with AI. Real case studies showing measurable ROI, compliance automation, and customer experience improvements.',
  keywords: 'financial services case studies, banking AI success stories, fintech automation, compliance automation results, financial AI ROI',
}

export default function FinancialServicesCaseStudiesPage() {
  const caseStudies = [
    {
      company: 'Global Investment Bank',
      industry: 'Investment Banking',
      challenge: 'Manual regulatory reporting consuming 200+ hours monthly with high error rates',
      solution: 'Implemented DataCoffee for automated compliance reporting and risk analytics',
      implementation: '12-week phased rollout across 5 business units',
      results: [
        '95% reduction in reporting preparation time',
        '100% automated regulatory submissions',
        '60% improvement in data accuracy',
        '$2.5M annual cost savings',
        '99.9% compliance score achievement'
      ],
      metrics: {
        timeReduction: 95,
        costSavings: 2500000,
        accuracyImprovement: 60,
        complianceScore: 99.9
      },
      image: 'https://markovate.com/wp-content/uploads/2023/08/How-is-AI-in-Banking-Transforming-Financial-World_-2.webp',
      testimonial: {
        quote: "DataCoffee transformed our regulatory reporting from a manual nightmare into an automated, accurate process. We've achieved 100% compliance while reducing costs by millions.",
        author: "Sarah Chen",
        title: "Chief Risk Officer"
      }
    },
    {
      company: 'Regional Credit Union',
      industry: 'Retail Banking',
      challenge: 'High customer service costs and 40% of inquiries requiring human intervention',
      solution: 'Deployed SurroundAI for intelligent customer service and fraud detection',
      implementation: '8-week implementation with staff training and system integration',
      results: [
        '70% of inquiries handled automatically',
        '50% reduction in average response time',
        '85% improvement in fraud detection accuracy',
        '35% increase in customer satisfaction',
        '$1.2M annual operational savings'
      ],
      metrics: {
        automationRate: 70,
        responseTimeReduction: 50,
        fraudDetectionImprovement: 85,
        satisfactionIncrease: 35
      },
      image: 'https://lh4.googleusercontent.com/DERwb0DUGHgEa7OneNzS14hV3cXxkxWhreewq0yY0E6hRdInjIWjOYHrJN_g-XyCrGZHLvywVOyLHZ_6yejiYcEHgAYQMq_d5sCiPUhNB9W-oL2Izkwxai0JOw92HXqv6Xf00t_d',
      testimonial: {
        quote: "SurroundAI has revolutionized our member experience. We're providing better service 24/7 while significantly reducing operational costs.",
        author: "Michael Rodriguez",
        title: "VP of Member Services"
      }
    },
    {
      company: 'Fintech Startup',
      industry: 'Digital Payments',
      challenge: 'Scaling customer support while maintaining security and compliance',
      solution: 'Integrated full LeapGen.AI suite for comprehensive automation',
      implementation: '6-week rapid deployment with agile methodology',
      results: [
        '80% reduction in customer support tickets',
        '99.8% transaction security accuracy',
        '45% faster customer onboarding',
        '300% improvement in scalability',
        '$800K annual savings despite 5x growth'
      ],
      metrics: {
        ticketReduction: 80,
        securityAccuracy: 99.8,
        onboardingSpeed: 45,
        scalabilityImprovement: 300
      },
      image: 'https://www.thebusinessachiever.com/wp-content/uploads/2023/05/How-to-Use-Artificial-Intelligence-as-a-Virtual-Financial-Advisor-800x500.jpg',
      testimonial: {
        quote: "LeapGen.AI enabled us to scale from 10K to 50K customers without proportionally increasing our support team. The ROI has been exceptional.",
        author: "Jennifer Park",
        title: "CEO & Founder"
      }
    },
    {
      company: 'Insurance Corporation',
      industry: 'Insurance',
      challenge: 'Complex claims processing taking 15+ days with high manual review rates',
      solution: 'Implemented AI-powered claims automation and risk assessment',
      implementation: '16-week enterprise rollout across multiple product lines',
      results: [
        '75% reduction in claims processing time',
        '90% automated initial claim reviews',
        '40% improvement in fraud detection',
        '25% increase in customer satisfaction',
        '$3.2M annual operational savings'
      ],
      metrics: {
        processingTimeReduction: 75,
        automationRate: 90,
        fraudDetectionImprovement: 40,
        satisfactionIncrease: 25
      },
      image: 'https://www.slideteam.net/wp/wp-content/uploads/2024/01/Data-fraud-detection-analysis-dashboard-template-1024x576.png',
      testimonial: {
        quote: "Our claims processing transformation has been remarkable. Customers get faster resolutions while we've dramatically improved our fraud detection capabilities.",
        author: "David Thompson",
        title: "Chief Claims Officer"
      }
    }
  ]

  const industryMetrics = [
    {
      metric: 'Average Cost Reduction',
      value: 65,
      suffix: '%',
      description: 'Across all financial services implementations'
    },
    {
      metric: 'Compliance Improvement',
      value: 99.5,
      suffix: '%',
      description: 'Average compliance score achievement'
    },
    {
      metric: 'Customer Satisfaction',
      value: 40,
      suffix: '%',
      description: 'Average improvement in customer satisfaction'
    },
    {
      metric: 'ROI Achievement',
      value: 18,
      suffix: 'mo',
      description: 'Average time to full ROI realization'
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://i.pinimg.com/originals/16/af/1a/16af1afd82b9a6639cc972c45a797192.jpg"
            alt="Financial Services Case Studies"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold">Financial Services</h1>
                <p className="text-xl text-blue-400">Success Stories</p>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Real Results from Leading Financial Institutions Using{' '}
              <span className="gradient-text">AI Transformation</span>
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Discover how banks, credit unions, fintech companies, and insurance providers 
              achieved measurable ROI through AI automation, compliance optimization, 
              and customer experience enhancement.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {industryMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-400">
                    {metric.suffix === '%' ? (
                      <AnimatedCounter end={metric.value} suffix={metric.suffix} />
                    ) : metric.suffix === 'mo' ? (
                      <><AnimatedCounter end={metric.value} />{metric.suffix}</>
                    ) : (
                      metric.value
                    )}
                  </div>
                  <div className="text-sm text-gray-400 font-semibold">{metric.metric}</div>
                  <div className="text-xs text-gray-500">{metric.description}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="xl">
                <Link href="/contact?type=demo&industry=financial-services">
                  Schedule Your Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link href="/resources/financial-services-roi">
                  Calculate Your ROI
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Detailed <span className="gradient-text">Case Studies</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              In-depth analysis of how financial institutions transformed their operations with AI.
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <Card key={index} className="group">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative aspect-video lg:aspect-auto">
                      <Image
                        src={study.image}
                        alt={study.company}
                        fill
                        className="object-cover rounded-l-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-cyan-600/20 rounded-l-lg" />
                    </div>
                    <div className="p-8 space-y-6">
                      <div>
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="px-3 py-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full text-sm font-semibold">
                            {study.industry}
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{study.company}</h3>
                        <p className="text-gray-300 mb-4">
                          <strong className="text-blue-400">Challenge:</strong> {study.challenge}
                        </p>
                        <p className="text-gray-300 mb-4">
                          <strong className="text-green-400">Solution:</strong> {study.solution}
                        </p>
                        <p className="text-gray-300 mb-6">
                          <strong className="text-purple-400">Implementation:</strong> {study.implementation}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-blue-400">Key Results:</h4>
                        <div className="grid gap-2">
                          {study.results.map((result, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-400" />
                              <span className="text-sm text-gray-300">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-lg p-4 border border-blue-500/20">
                        <blockquote className="text-gray-300 italic mb-3">
                          "{study.testimonial.quote}"
                        </blockquote>
                        <div>
                          <div className="font-semibold text-white">{study.testimonial.author}</div>
                          <div className="text-sm text-blue-400">{study.testimonial.title}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Methodology */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Proven <span className="gradient-text">Implementation Methodology</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The systematic approach that delivers consistent results across all financial services implementations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Assessment & Planning</CardTitle>
                <CardDescription className="text-gray-300">
                  Comprehensive analysis of current systems, processes, and compliance requirements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[
                    'Current state assessment',
                    'Compliance gap analysis',
                    'ROI modeling and projections',
                    'Implementation roadmap'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Secure Deployment</CardTitle>
                <CardDescription className="text-gray-300">
                  Phased rollout with comprehensive security and compliance validation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[
                    'Pilot program execution',
                    'Security and compliance testing',
                    'Staff training and change management',
                    'Gradual system integration'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Optimization & Scale</CardTitle>
                <CardDescription className="text-gray-300">
                  Continuous improvement and expansion across the organization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[
                    'Performance monitoring and tuning',
                    'Advanced feature activation',
                    'Organization-wide scaling',
                    'Ongoing support and optimization'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border-t border-blue-500/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Join These Success Stories?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            See how your financial institution can achieve similar results with AI automation, 
            compliance optimization, and enhanced customer experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="xl">
              <Link href="/contact?type=demo&industry=financial-services">
                Schedule Your Financial Services Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl">
              <Link href="/resources/financial-services-roi">
                Calculate Your Potential ROI
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
