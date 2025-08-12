
'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Bot, Database, FileText, Users, TrendingUp, Shield } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import AnimatedCounter from '@/components/animated-counter'

const ProductsSection = () => {
  const products = [
    {
      name: 'SurroundAI',
      icon: Bot,
      headline: 'Cut Customer Support Costs by 60% with AI-Powered Automation',
      description: 'Reduce response times by 75%, improve satisfaction scores by 30%, and free up your team for strategic work',
      benefits: [
        '75% faster response times',
        '60% reduction in support costs',
        '30% improvement in satisfaction',
        '24/7 automated support'
      ],
      image: 'https://static.liveperson.com/static-assets/2023/06/23162249/MessagingAI_Feature.1_ProductUI_JV_0523%402x.png',
      href: '/products/surroundai',
      color: 'purple'
    },
    {
      name: 'DataCoffee',
      icon: Database,
      headline: 'Secure Data Governance with Synthetic Data Generation',
      description: 'Create realistic synthetic data from production without exposing sensitive information. GDPR, HIPAA, and FedRAMP compliant.',
      benefits: [
        '100% privacy protection',
        'GDPR/HIPAA/FedRAMP compliant',
        'Real-time data anonymization',
        'Synthetic test data generation'
      ],
      image: 'https://thumbs.dreamstime.com/b/seven-components-data-governance-181051583.jpg',
      href: '/products/data-coffee',
      color: 'blue'
    },
    {
      name: 'Seismic',
      icon: FileText,
      headline: 'Reduce Documentation Time by 80% with 90% Billing Accuracy',
      description: 'AI-powered clinical notes with emotional intelligence, automated billing codes, and HIPAA compliance',
      benefits: [
        '80% less documentation time',
        '90% billing accuracy improvement',
        'HIPAA compliant',
        'Emotional intelligence insights'
      ],
      image: 'https://www.pulmonologyadvisor.com/wp-content/uploads/sites/21/2020/09/AI-medicine-G-840370370.jpg',
      href: '/products/seismic',
      color: 'green'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section className="section-padding bg-gray-950">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Enterprise AI Solutions That{' '}
            <span className="gradient-text">Deliver Results</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our three core products work together to transform your business operations, 
            reduce costs, and accelerate growth with measurable outcomes.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-8 mb-16"
        >
          {products.map((product, index) => {
            const IconComponent = product.icon
            const colorClasses = {
              purple: 'from-purple-600 to-purple-800 border-purple-500/30',
              blue: 'from-blue-600 to-blue-800 border-blue-500/30',
              green: 'from-green-600 to-green-800 border-green-500/30'
            }

            return (
              <motion.div key={product.name} variants={itemVariants}>
                <Card className="h-full group hover:scale-105 transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                      <Image
                        src={product.image}
                        alt={`${product.name} Interface`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-tr ${colorClasses[product.color as keyof typeof colorClasses]} opacity-20`} />
                    </div>
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={`w-12 h-12 bg-gradient-to-r ${colorClasses[product.color as keyof typeof colorClasses]} rounded-lg flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-2xl">{product.name}</CardTitle>
                    </div>
                    <CardDescription className="text-lg font-semibold text-white mb-2">
                      {product.headline}
                    </CardDescription>
                    <CardDescription className="text-gray-300 leading-relaxed">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3 mb-6">
                      {product.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className={`w-2 h-2 bg-gradient-to-r ${colorClasses[product.color as keyof typeof colorClasses]} rounded-full`} />
                          <span className="text-sm text-gray-300">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <Button asChild variant="outline" className="w-full group">
                      <Link href={product.href}>
                        Learn More About {product.name}
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl p-8 border border-purple-500/20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
                <AnimatedCounter end={500} suffix="+" />
              </div>
              <div className="text-gray-300">Organizations Trust Us</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                <AnimatedCounter end={99} suffix=".9%" />
              </div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
                <AnimatedCounter end={60} suffix="%" />
              </div>
              <div className="text-gray-300">Average Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                <AnimatedCounter end={30} />-Day
              </div>
              <div className="text-gray-300">Implementation</div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to Transform Your Business?
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the 500+ organizations already using LeapGen.AI to reduce costs, 
            improve efficiency, and drive measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="xl">
              <Link href="/contact?type=demo">
                Schedule Your Free Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl">
              <Link href="/resources/roi-calculator">
                Calculate Your ROI
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProductsSection
