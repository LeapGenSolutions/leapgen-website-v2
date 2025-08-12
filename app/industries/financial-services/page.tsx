
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Building2, TrendingUp, Shield, Clock, CheckCircle, BarChart3, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import AnimatedCounter from '@/components/animated-counter'

export const metadata: Metadata = {
  title: 'Financial Services AI Solutions - Accelerate Insights & Automate Compliance | LeapGen.AI',
  description: 'Transform financial services with AI-powered data analytics, automated compliance reporting, and enhanced fraud detection. Enterprise-grade security and regulatory compliance.',
  keywords: 'financial services AI, banking AI, fintech automation, compliance automation, financial data analytics',
}

export default function FinancialServicesPage() {
  const challenges = [
    {
      title: 'Regulatory Compliance',
      description: 'Complex and ever-changing regulations require constant monitoring and reporting',
      impact: 'High compliance costs and risk of regulatory penalties'
    },
    {
      title: 'Data Silos',
      description: 'Critical data scattered across multiple systems and departments',
      impact: 'Slow decision-making and missed opportunities'
    },
    {
      title: 'Fraud Detection',
      description: 'Traditional rule-based systems miss sophisticated fraud patterns',
      impact: 'Financial losses and damaged customer trust'
    }
  ]

  const solutions = [
    {
      product: 'Data Coffee',
      title: 'Synthetic Financial Data Generation',
      description: 'Generate realistic synthetic financial data for testing, model training, and compliance validation without exposing sensitive customer information',
      benefits: [
        'Synthetic customer transaction data',
        'Safe data for AI model training',
        'Compliance testing with realistic datasets',
        'Privacy-protected analytics'
      ],
      metrics: '100% privacy protection, 95% statistical accuracy for testing',
      image: 'https://i.pinimg.com/originals/77/81/07/77810700da014950450d1a576b8e5120.jpg',
      href: '/products/data-coffee'
    },
    {
      product: 'SurroundAI',
      title: 'Intelligent Customer Service',
      description: 'Provide 24/7 customer support and streamline financial advisory services',
      benefits: [
        'Automated account inquiries',
        'Personalized financial advice',
        'Fraud alert notifications',
        'Seamless human handoff'
      ],
      metrics: '60% reduction in call volume, 40% improvement in customer satisfaction',
      image: 'https://www.thebusinessachiever.com/wp-content/uploads/2023/05/How-to-Use-Artificial-Intelligence-as-a-Virtual-Financial-Advisor-800x500.jpg',
      href: '/products/surroundai'
    }
  ]

  const useCases = [
    {
      title: 'Regional Bank',
      challenge: 'Streamlining regulatory reporting and risk management',
      solution: 'Implemented Data Coffee for unified data analytics',
      results: [
        '90% reduction in reporting preparation time',
        '100% automated regulatory submissions',
        '50% improvement in risk detection accuracy',
        '30% reduction in compliance costs'
      ],
      image: 'https://markovate.com/wp-content/uploads/2023/08/How-is-AI-in-Banking-Transforming-Financial-World_-2.webp'
    },
    {
      title: 'Investment Firm',
      challenge: 'Enhancing client service while managing high inquiry volume',
      solution: 'Deployed SurroundAI for client support automation',
      results: [
        '70% of client inquiries automated',
        '24/7 portfolio monitoring alerts',
        '45% faster response times',
        '35% increase in client satisfaction'
      ],
      image: 'https://lh4.googleusercontent.com/DERwb0DUGHgEa7OneNzS14hV3cXxkxWhreewq0yY0E6hRdInjIWjOYHrJN_g-XyCrGZHLvywVOyLHZ_6yejiYcEHgAYQMq_d5sCiPUhNB9W-oL2Izkwxai0JOw92HXqv6Xf00t_d'
    },
    {
      title: 'Credit Union',
      challenge: 'Improving fraud detection and member experience',
      solution: 'Leveraged AI for real-time fraud monitoring',
      results: [
        '85% improvement in fraud detection',
        '60% reduction in false positives',
        '40% faster transaction processing',
        '25% increase in member trust scores'
      ],
      image: 'https://www.slideteam.net/wp/wp-content/uploads/2024/01/Data-fraud-detection-analysis-dashboard-template-1024x576.png'
    }
  ]

  const compliance = [
    {
      regulation: 'SOX Compliance',
      description: 'Automated financial reporting and audit trail management',
      features: ['Automated controls testing', 'Real-time monitoring', 'Audit documentation', 'Risk assessment']
    },
    {
      regulation: 'GDPR & CCPA',
      description: 'Data privacy and protection for customer information',
      features: ['Data encryption', 'Access controls', 'Consent management', 'Right to deletion']
    },
    {
      regulation: 'PCI DSS',
      description: 'Secure payment card data handling and processing',
      features: ['Secure data storage', 'Network monitoring', 'Access logging', 'Vulnerability scanning']
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://i.pinimg.com/originals/16/af/1a/16af1afd82b9a6639cc972c45a797192.jpg"
            alt="Financial Services AI Solutions"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-3">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-5xl md:text-6xl font-bold">Financial Services</h1>
                  <p className="text-xl text-blue-400">AI Solutions</p>
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Generate Insights{' '}
                <span className="gradient-text">
                  <AnimatedCounter end={10} suffix="x" />
                </span>{' '}
                Faster While Automating Compliance
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Accelerate data insights and automate compliance with enterprise-grade security. 
                Transform financial operations with AI that understands regulatory requirements 
                and delivers measurable business value.
              </p>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">
                    <AnimatedCounter end={10} suffix="x" />
                  </div>
                  <div className="text-sm text-gray-400">Faster Insights</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">100%</div>
                  <div className="text-sm text-gray-400">Automated Compliance</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">
                    <AnimatedCounter end={30} suffix="%" />
                  </div>
                  <div className="text-sm text-gray-400">Cost Reduction</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="xl">
                  <Link href="/contact?type=demo&industry=financial-services">
                    Schedule Financial Services Demo
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

            <div className="relative lg:mt-0 mt-12">
              <div className="aspect-[4/3] max-w-md mx-auto relative">
                <Image
                  src="https://media.striim.com/wp-content/uploads/2016/04/21064130/Financial-Monitoring-Application-.png"
                  alt="Financial Services AI Dashboard"
                  fill
                  className="object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-cyan-600/20 rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="section-padding bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Financial Services <span className="gradient-text">Challenges</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The financial industry faces unique challenges that require specialized AI solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-400">{challenge.title}</CardTitle>
                  <CardDescription className="text-gray-300 text-lg">
                    {challenge.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-500/20">
                    <div className="text-sm font-semibold text-blue-400 mb-1">Impact:</div>
                    <div className="text-sm text-gray-300">{challenge.impact}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              AI-Powered <span className="gradient-text">Financial Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Purpose-built AI solutions that address the specific needs of financial services 
              organizations while maintaining the highest standards of security and compliance.
            </p>
          </div>

          <div className="space-y-16">
            {solutions.map((solution, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-3">
                    <div className="px-3 py-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full text-sm font-semibold">
                      {solution.product}
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold">{solution.title}</h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {solution.description}
                  </p>
                  <div className="space-y-2">
                    {solution.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-lg p-4 border border-blue-500/20">
                    <div className="text-sm font-semibold text-blue-400 mb-1">Proven Results:</div>
                    <div className="text-sm text-gray-300">{solution.metrics}</div>
                  </div>
                  <Button asChild variant="outline" size="lg">
                    <Link href={solution.href}>
                      Learn More About {solution.product}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="aspect-video relative overflow-hidden rounded-2xl">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-cyan-600/20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="section-padding bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Financial Services <span className="gradient-text">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how financial institutions are transforming operations and improving customer experiences with our AI solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={useCase.image}
                      alt={useCase.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
                  <CardDescription className="text-gray-300 mb-4">
                    <strong>Challenge:</strong> {useCase.challenge}
                  </CardDescription>
                  <CardDescription className="text-gray-300">
                    <strong>Solution:</strong> {useCase.solution}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-blue-400 mb-2">Results:</div>
                    {useCase.results.map((result, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        <span className="text-sm text-gray-300">{result}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Regulatory <span className="gradient-text">Compliance & Security</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built specifically for financial services with comprehensive compliance features 
              and enterprise-grade security controls.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {compliance.map((item, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{item.regulation}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {item.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border-t border-blue-500/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Financial Operations?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join leading financial institutions using LeapGen.AI to accelerate insights, 
            automate compliance, and enhance customer experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="xl">
              <Link href="/contact?type=demo&industry=financial-services">
                Schedule Your Financial Services Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl">
              <Link href="/resources/financial-services-case-studies">
                View Financial Case Studies
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
