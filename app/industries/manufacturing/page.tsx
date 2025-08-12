
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Factory, Cog, TrendingUp, Shield, CheckCircle, Wrench, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import AnimatedCounter from '@/components/animated-counter'

export const metadata: Metadata = {
  title: 'Manufacturing AI Solutions - Optimize Operations & Reduce Downtime by 40% | LeapGen.AI',
  description: 'Transform manufacturing with AI-powered predictive maintenance, quality control, and operational optimization. Reduce downtime and improve efficiency.',
  keywords: 'manufacturing AI, predictive maintenance, quality control AI, smart factory, industrial automation',
}

export default function ManufacturingPage() {
  const challenges = [
    {
      title: 'Unplanned Downtime',
      description: 'Equipment failures cause costly production interruptions and delays',
      impact: 'Average cost of $50,000 per hour of unplanned downtime'
    },
    {
      title: 'Quality Control',
      description: 'Manual inspection processes miss defects and slow production',
      impact: 'Higher defect rates and customer complaints'
    },
    {
      title: 'Supply Chain Visibility',
      description: 'Limited visibility into supply chain disruptions and inventory levels',
      impact: 'Production delays and excess inventory costs'
    }
  ]

  const solutions = [
    {
      product: 'Data Coffee',
      title: 'Synthetic Manufacturing Data Generation',
      description: 'Generate realistic synthetic inventory and production data for testing supply chain scenarios, tariff impacts, and risk modeling without exposing sensitive operational data',
      benefits: [
        'Synthetic inventory data for testing',
        'Supply chain risk scenario modeling',
        'Tariff impact simulation datasets',
        'Safe production data for AI training'
      ],
      metrics: '100% data privacy, 95% accuracy for supply chain testing',
      image: 'https://www.automation-mag.com/storage/Press%20Files/06/19/88/61988-Photo3.jpg',
      href: '/products/data-coffee'
    },
    {
      product: 'SurroundAI',
      title: 'Intelligent Operations Support',
      description: 'Automate quality control and provide real-time operational guidance',
      benefits: [
        'Automated quality inspection',
        'Real-time production alerts',
        'Worker safety monitoring',
        'Process optimization recommendations'
      ],
      metrics: '30% improvement in quality scores, 50% faster issue resolution',
      image: 'https://i.ytimg.com/vi/6LlUhF9x8Bk/maxresdefault.jpg',
      href: '/products/surroundai'
    }
  ]

  const useCases = [
    {
      title: 'Automotive Manufacturer',
      challenge: 'Reducing unplanned downtime and improving production efficiency',
      solution: 'Implemented predictive maintenance with Data Coffee',
      results: [
        '45% reduction in unplanned downtime',
        '30% improvement in OEE',
        '$2M annual savings in maintenance costs',
        '25% increase in production capacity'
      ],
      image: 'https://www.advancedtech.com/wp-content/uploads/2023/05/The-important-role-of-AI-in-car-manufacturing_Image-1_1200x628-768x402.jpg'
    },
    {
      title: 'Electronics Manufacturer',
      challenge: 'Improving quality control and reducing defect rates',
      solution: 'Deployed AI-powered visual inspection systems',
      results: [
        '90% improvement in defect detection',
        '60% reduction in manual inspection time',
        '40% decrease in customer complaints',
        '20% increase in production throughput'
      ],
      image: 'https://www.qualitymag.com/ext/resources/Issues/2024/July/Vision-and-Sensors/VS0724-FEAT-101-p1FT-GettyImages-1477215853.jpg?1717666178'
    },
    {
      title: 'Chemical Plant',
      challenge: 'Enhancing safety monitoring and process optimization',
      solution: 'Integrated AI for safety and process monitoring',
      results: [
        '80% improvement in safety incident prediction',
        '35% reduction in process variations',
        '50% faster emergency response times',
        '15% improvement in energy efficiency'
      ],
      image: 'https://i.ytimg.com/vi/g4H6Fkag3cY/maxresdefault.jpg'
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://i.pinimg.com/originals/d3/d6/65/d3d66584f8d545309056c87ae05fcb9a.jpg"
            alt="Manufacturing AI Solutions"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-3">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-xl flex items-center justify-center">
                  <Factory className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-5xl md:text-6xl font-bold">Manufacturing</h1>
                  <p className="text-xl text-orange-400">AI Solutions</p>
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Reduce Downtime by{' '}
                <span className="gradient-text">
                  <AnimatedCounter end={40} suffix="%" />
                </span>{' '}
                with Predictive AI
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Optimize operations and predictive maintenance with intelligent automation. 
                Transform your manufacturing processes with AI that prevents failures, 
                improves quality, and enhances worker safety.
              </p>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400">
                    <AnimatedCounter end={40} suffix="%" />
                  </div>
                  <div className="text-sm text-gray-400">Less Downtime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">
                    <AnimatedCounter end={30} suffix="%" />
                  </div>
                  <div className="text-sm text-gray-400">Better Quality</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">
                    <AnimatedCounter end={25} suffix="%" />
                  </div>
                  <div className="text-sm text-gray-400">Cost Savings</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="xl">
                  <Link href="/contact?type=demo&industry=manufacturing">
                    Schedule Manufacturing Demo
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="xl">
                  <Link href="/resources/manufacturing-roi">
                    Calculate Your Savings
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative lg:mt-0 mt-12">
              <div className="aspect-[4/3] max-w-md mx-auto relative">
                <Image
                  src="https://www.refrigeratedfrozenfood.com/ext/resources/Technology-Showcase/Technology-Showcase3/Swift-Sensors-predictive-maintenance-tools-feature.jpg?1554926701"
                  alt="Manufacturing AI Dashboard"
                  fill
                  className="object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/20 to-yellow-600/20 rounded-2xl" />
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
              Manufacturing <span className="gradient-text">Challenges</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Modern manufacturing faces complex challenges that require intelligent solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-orange-400">{challenge.title}</CardTitle>
                  <CardDescription className="text-gray-300 text-lg">
                    {challenge.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-orange-900/20 rounded-lg p-4 border border-orange-500/20">
                    <div className="text-sm font-semibold text-orange-400 mb-1">Impact:</div>
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
              Smart Manufacturing <span className="gradient-text">AI Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Purpose-built AI solutions that optimize manufacturing operations, 
              prevent equipment failures, and enhance production quality.
            </p>
          </div>

          <div className="space-y-16">
            {solutions.map((solution, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-3">
                    <div className="px-3 py-1 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-full text-sm font-semibold">
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
                  <div className="bg-gradient-to-r from-orange-900/20 to-yellow-900/20 rounded-lg p-4 border border-orange-500/20">
                    <div className="text-sm font-semibold text-orange-400 mb-1">Proven Results:</div>
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
                    <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/20 to-yellow-600/20" />
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
              Manufacturing <span className="gradient-text">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how manufacturers are optimizing operations and reducing costs with our AI solutions.
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
                    <div className="text-sm font-semibold text-orange-400 mb-2">Results:</div>
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

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-orange-900/20 to-yellow-900/20 border-t border-orange-500/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Optimize Manufacturing Operations?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join manufacturers using LeapGen.AI to reduce downtime, improve quality, 
            and enhance operational efficiency with predictive AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="xl">
              <Link href="/contact?type=demo&industry=manufacturing">
                Schedule Your Manufacturing Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl">
              <Link href="/resources/manufacturing-case-studies">
                View Manufacturing Case Studies
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
