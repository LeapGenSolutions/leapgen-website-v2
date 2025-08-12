
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ShoppingCart, Users, TrendingUp, Target, CheckCircle, Smartphone, Package } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import AnimatedCounter from '@/components/animated-counter'

export const metadata: Metadata = {
  title: 'Retail AI Solutions - Increase Sales Conversion by 25% | LeapGen.AI',
  description: 'Transform retail with AI-powered customer experience, inventory optimization, and personalized recommendations. Increase sales and improve customer satisfaction.',
  keywords: 'retail AI, customer experience AI, inventory optimization, personalized recommendations, retail automation',
}

export default function RetailPage() {
  const challenges = [
    {
      title: 'Customer Experience',
      description: 'Providing personalized experiences across multiple touchpoints and channels',
      impact: 'Lost sales opportunities and reduced customer loyalty'
    },
    {
      title: 'Inventory Management',
      description: 'Balancing stock levels to avoid overstock and stockouts',
      impact: 'Increased carrying costs and missed sales opportunities'
    },
    {
      title: 'Customer Support',
      description: 'Managing high volume of customer inquiries across channels',
      impact: 'Long wait times and decreased customer satisfaction'
    }
  ]

  const solutions = [
    {
      product: 'SurroundAI',
      title: 'Personalized Customer Experience',
      description: 'Deliver personalized shopping experiences and automate customer support across all channels',
      benefits: [
        'Personalized product recommendations',
        '24/7 customer support automation',
        'Intelligent chatbot assistance',
        'Omnichannel experience'
      ],
      metrics: '25% increase in conversion rates, 40% reduction in support costs',
      image: 'https://tovie.ai/wp-content/uploads/2022/06/di_02.png',
      href: '/products/surroundai'
    },
    {
      product: 'Data Coffee',
      title: 'Synthetic Retail Data Generation',
      description: 'Generate realistic synthetic customer and transaction data for testing personalization algorithms, inventory models, and market analysis without exposing real customer information',
      benefits: [
        'Synthetic customer purchase data',
        'Safe data for recommendation testing',
        'Privacy-protected market analysis',
        'Realistic datasets for AI training'
      ],
      metrics: '100% customer privacy protection, 95% statistical accuracy',
      image: 'https://i.pinimg.com/736x/35/4a/d7/354ad7ba4657b168e770f9f5f13571ed.jpg',
      href: '/products/data-coffee'
    }
  ]

  const useCases = [
    {
      title: 'Fashion Retailer',
      challenge: 'Improving online customer experience and reducing cart abandonment',
      solution: 'Implemented AI-powered personalization and support',
      results: [
        '35% increase in online conversion rates',
        '50% reduction in cart abandonment',
        '40% improvement in customer satisfaction',
        '25% increase in average order value'
      ],
      image: 'https://dressipi.com/uploads/examples_of_ai-blog-banner-1.jpg'
    },
    {
      title: 'Electronics Store Chain',
      challenge: 'Optimizing inventory across multiple locations',
      solution: 'Deployed AI for demand forecasting and inventory management',
      results: [
        '30% reduction in excess inventory',
        '25% improvement in stock availability',
        '20% increase in inventory turnover',
        '15% reduction in carrying costs'
      ],
      image: 'https://img.freepik.com/premium-photo/smart-retail-store-with-ai-inventory-management-store-where-inventory-is-managed-by-ai-systems_1230253-21056.jpg?w=2000'
    },
    {
      title: 'Grocery Chain',
      challenge: 'Enhancing customer service and reducing wait times',
      solution: 'Integrated AI chatbots and customer service automation',
      results: [
        '60% of inquiries handled automatically',
        '70% reduction in average response time',
        '45% improvement in customer satisfaction',
        '30% increase in customer retention'
      ],
      image: 'https://i.ytimg.com/vi/iYmGwyeDkT4/maxresdefault.jpg'
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://insighttech.intel.com/wp-content/uploads/sites/45/2020/06/retail-analytics-AI-technology-digital-display-1-565x400.png"
            alt="Retail AI Solutions"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-3">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center">
                  <ShoppingCart className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-5xl md:text-6xl font-bold">Retail</h1>
                  <p className="text-xl text-green-400">AI Solutions</p>
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Increase Sales Conversion by{' '}
                <span className="gradient-text">
                  <AnimatedCounter end={25} suffix="%" />
                </span>{' '}
                with Personalized AI
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Transform customer experience and inventory management with AI-driven insights. 
                Deliver personalized shopping experiences, optimize inventory levels, 
                and automate customer support for maximum impact.
              </p>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">
                    <AnimatedCounter end={25} suffix="%" />
                  </div>
                  <div className="text-sm text-gray-400">Higher Conversion</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400">
                    <AnimatedCounter end={30} suffix="%" />
                  </div>
                  <div className="text-sm text-gray-400">Inventory Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">24/7</div>
                  <div className="text-sm text-gray-400">Customer Support</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="xl">
                  <Link href="/contact?type=demo&industry=retail">
                    Schedule Retail Demo
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="xl">
                  <Link href="/resources/retail-roi">
                    Calculate Your ROI
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square max-w-lg mx-auto relative">
                <Image
                  src="https://i.ytimg.com/vi/_qReGTOrKTk/maxresdefault.jpg"
                  alt="Retail AI Dashboard"
                  fill
                  className="object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-green-600/20 to-emerald-600/20 rounded-2xl" />
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
              Retail <span className="gradient-text">Challenges</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Modern retail requires intelligent solutions to meet evolving customer expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-green-400">{challenge.title}</CardTitle>
                  <CardDescription className="text-gray-300 text-lg">
                    {challenge.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-green-900/20 rounded-lg p-4 border border-green-500/20">
                    <div className="text-sm font-semibold text-green-400 mb-1">Impact:</div>
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
              Smart Retail <span className="gradient-text">AI Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AI-powered solutions that enhance customer experience, optimize operations, 
              and drive measurable business growth in retail environments.
            </p>
          </div>

          <div className="space-y-16">
            {solutions.map((solution, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-3">
                    <div className="px-3 py-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full text-sm font-semibold">
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
                  <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-lg p-4 border border-green-500/20">
                    <div className="text-sm font-semibold text-green-400 mb-1">Proven Results:</div>
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
                    <div className="absolute inset-0 bg-gradient-to-tr from-green-600/20 to-emerald-600/20" />
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
              Retail <span className="gradient-text">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how retailers are transforming customer experiences and optimizing operations with our AI solutions.
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
                    <div className="text-sm font-semibold text-green-400 mb-2">Results:</div>
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
      <section className="section-padding bg-gradient-to-r from-green-900/20 to-emerald-900/20 border-t border-green-500/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Retail Operations?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join retailers using LeapGen.AI to increase sales, improve customer satisfaction, 
            and optimize operations with intelligent AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="xl">
              <Link href="/contact?type=demo&industry=retail">
                Schedule Your Retail Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl">
              <Link href="/resources/retail-case-studies">
                View Retail Case Studies
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
