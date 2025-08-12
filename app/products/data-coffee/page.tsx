
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Database, Shield, Zap, CheckCircle, TrendingUp, Lock, Users, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import AnimatedCounter from '@/components/animated-counter'

export const metadata: Metadata = {
  title: 'Data Coffee - Data Governance & Transformation Platform | LeapGen.AI',
  description: 'Powerful data governance and transformation platform that consolidates fragmented data from multiple sources, ensures regulatory compliance with GDPR, HIPAA, FedRAMP, and CCPA through tokenization and anonymization.',
  keywords: 'data governance, data transformation, tokenization, anonymization, GDPR compliance, HIPAA compliance, synthetic data, data privacy',
}

export default function DataCoffeePage() {
  const features = [
    {
      icon: Lock,
      title: 'Tokenization & Anonymization Engine',
      description: 'Centralized system for protecting PII/PHI with real-time masking, allowing for secure and cross-referenceable data across different applications.',
      benefits: ['Real-time PII/PHI protection', 'Cross-system data referencing', 'GDPR, HIPAA, FedRAMP compliance', 'Secure data masking']
    },
    {
      icon: FileText,
      title: 'Synthetic Data Generator',
      description: 'Creates usable data clones that retain statistical accuracy without containing any real user information, ideal for safe testing, QA, and model training.',
      benefits: ['Statistically accurate data clones', 'Zero real user information', 'Safe testing environments', 'AI model training data']
    },
    {
      icon: Database,
      title: 'Cross-System Interoperability',
      description: 'Works with various systems including EHRs, CRMs, databases, APIs, and analytics platforms to consolidate fragmented data.',
      benefits: ['EHR/CRM integration', 'API connectivity', 'Database compatibility', 'Analytics platform support']
    },
    {
      icon: Shield,
      title: 'Audit-Ready Governance Framework',
      description: 'Complete framework with data lineage, access logging, and governance dashboards to ensure operational transparency.',
      benefits: ['Complete data lineage', 'Access logging', 'Governance dashboards', 'Operational transparency']
    }
  ]

  const useCases = [
    {
      title: 'Healthcare Data Sharing',
      description: 'Secure PHI sharing between providers while maintaining HIPAA compliance',
      metrics: '100% HIPAA compliance, 90% faster data sharing',
      image: 'https://lh4.googleusercontent.com/63mN-yy-kRnLcgpVFeleK8Zlama9-SnY-oi6E5O6uJcsqUaG4CRg1_earcaPt3UKjHdEUXCqSEaCSQDuPA0bx3gnSNP6NlerDH2K_U0e50XzWgM7sBTf96Yk7uA25UIGg65jTai7y4yP4hVi5m-5IB0'
    },
    {
      title: 'Financial Services Testing',
      description: 'Safe synthetic data for application testing without production data exposure',
      metrics: '95% reduction in security risks, 80% faster testing cycles',
      image: 'https://i.pinimg.com/736x/13/f6/4f/13f64fe47096f0d8ebabb9075362d85e.jpg'
    },
    {
      title: 'AI Model Development',
      description: 'Privacy-safe datasets for training AI models without compromising sensitive data',
      metrics: '100% privacy protection, 75% faster model development',
      image: 'https://miro.medium.com/v2/resize:fit:1400/1*cG6U1qstYDijh9bPL42e-Q.jpeg'
    }
  ]

  const integrations = [
    {
      name: 'SurroundAI Integration',
      description: 'Privacy layer for all chat interactions with real-time PII/PHI masking',
      benefits: ['Real-time conversation anonymization', 'Secure analytics pipeline', 'Synthetic chat data for training']
    },
    {
      name: 'Seismic Integration',
      description: 'Anonymizes clinical transcripts and creates synthetic conversation data',
      benefits: ['HIPAA-compliant clinical data', 'Synthetic medical conversations', 'Protected patient insights']
    }
  ]

  const testimonials = [
    {
      quote: "DataCoffee transformed our data governance. We can now share patient data securely between our network of hospitals while maintaining 100% HIPAA compliance.",
      author: "Dr. Jennifer Walsh",
      title: "Chief Data Officer, Regional Health Network",
      metrics: "100% HIPAA compliance, 90% faster data sharing"
    },
    {
      quote: "Our development teams can now test with realistic data without any security concerns. DataCoffee's synthetic data is indistinguishable from production data.",
      author: "David Kim",
      title: "VP of Engineering, FinTech Solutions",
      metrics: "95% reduction in security risks, 80% faster testing"
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://static.vecteezy.com/system/resources/previews/011/006/295/original/data-protection-concept-data-security-and-privacy-and-internet-security-flat-illustration-vector.jpg"
            alt="DataCoffee Data Governance Platform"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-3">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-5xl md:text-6xl font-bold">DataCoffee</h1>
                  <p className="text-xl text-blue-400">Data Governance & Synthetic Data Platform</p>
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Create Synthetic Test Data from Production{' '}
                <span className="gradient-text">Without Data Leaving Your Organization</span>
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                DataCoffee is a comprehensive data governance platform that creates realistic synthetic data 
                from your production systems while ensuring sensitive information never leaves your organization. 
                Perfect for regulated industries requiring GDPR, HIPAA, and FedRAMP compliance.
              </p>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">100%</div>
                  <div className="text-sm text-gray-400">Privacy Protected</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">
                    <AnimatedCounter end={95} suffix="%" />
                  </div>
                  <div className="text-sm text-gray-400">Statistical Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">
                    <AnimatedCounter end={80} suffix="%" />
                  </div>
                  <div className="text-sm text-gray-400">Faster Testing</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="xl">
                  <Link href="/contact?type=demo&product=data-coffee">
                    Explore DataCoffee
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="xl">
                  <Link href="/resources/data-governance-guide">
                    Data Governance Guide
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square max-w-lg mx-auto relative">
                <Image
                  src="https://corporater.com/wp-content/uploads/2021/07/data-and-information-governance-software-1a.png"
                  alt="DataCoffee Data Governance Dashboard"
                  fill
                  className="object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-cyan-600/20 rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Enterprise-Grade <span className="gradient-text">Data Governance</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              DataCoffee provides comprehensive data governance capabilities designed for regulated 
              industries that need to maintain strict compliance while enabling data-driven innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card key={index} className="group hover:scale-105 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-2xl">{feature.title}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-300 text-lg leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-sm text-gray-300">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Integration Ecosystem */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Core Data Infrastructure for{' '}
              <span className="gradient-text">LeapGen Ecosystem</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              DataCoffee serves as the foundational data layer for all LeapGen products, 
              ensuring privacy and compliance across your entire AI ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {integrations.map((integration, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center space-x-3">
                    <Users className="w-8 h-8 text-blue-400" />
                    <span>{integration.name}</span>
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-lg">
                    {integration.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {integration.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="section-padding bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Proven <span className="gradient-text">Use Cases</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Organizations across regulated industries use DataCoffee to unlock the value 
              of their data while maintaining strict compliance and security standards.
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
                  <CardDescription className="text-gray-300">
                    {useCase.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-lg p-4 border border-blue-500/20">
                    <div className="text-sm font-semibold text-blue-400 mb-1">Key Results:</div>
                    <div className="text-sm text-gray-300">{useCase.metrics}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Customer <span className="gradient-text">Success Stories</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group">
                <CardContent className="p-8">
                  <blockquote className="text-lg text-gray-300 leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-lg p-4 mb-6 border border-blue-500/20">
                    <div className="text-sm font-semibold text-blue-400 mb-1">Results:</div>
                    <div className="text-sm text-gray-300">{testimonial.metrics}</div>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-blue-400">{testimonial.title}</div>
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
            Ready to Secure Your Data Governance?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join organizations using DataCoffee to maintain compliance, protect sensitive data, 
            and enable safe innovation with synthetic data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="xl">
              <Link href="/contact?type=demo&product=data-coffee">
                Schedule Your DataCoffee Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl">
              <Link href="/resources/datacoffee-roi-calculator">
                Calculate Your ROI
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl">
              <Link href="/resources/compliance-checklist">
                Download Compliance Checklist
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
