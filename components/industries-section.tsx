'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Heart, Building2, Factory, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'

const IndustriesSection = () => {
  const industries = [
    {
      name: 'Healthcare',
      icon: Heart,
      description: 'Revolutionize patient care with AI-powered clinical documentation and automated workflows',
      benefits: [
        'Reduce documentation time by 50%',
        'Improve billing accuracy by 35%',
        'Enhance patient satisfaction scores',
        'Ensure HIPAA compliance'
      ],
      image: 'https://thedoctorpreneuracademy.com/wp-content/uploads/2024/06/Ai-hospital-5.jpg',
      href: '/industries/healthcare',
      color: 'from-red-600 to-pink-600'
    },
    {
      name: 'Financial Services',
      icon: Building2,
      description: 'Accelerate data insights and automate compliance with enterprise-grade security',
      benefits: [
        'Generate insights 10x faster',
        'Automate regulatory reporting',
        'Reduce operational costs by 30%',
        'Enhance fraud detection'
      ],
      image: 'https://thumbs.dreamstime.com/z/photo-high-tech-trading-floor-features-digital-screens-financial-analytics-vertical-mobile-wallpaper-photo-high-tech-trading-309989983.jpg',
      href: '/industries/financial-services',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      name: 'Manufacturing',
      icon: Factory,
      description: 'Optimize operations and predictive maintenance with intelligent automation',
      benefits: [
        'Reduce downtime by 40%',
        'Improve quality control',
        'Optimize supply chain',
        'Enhance worker safety'
      ],
      image: 'https://www.modelcamtechnologies.com/images/blogs/Smart-Factory-Using-IoT.jpg',
      href: '/industries/manufacturing',
      color: 'from-orange-600 to-yellow-600'
    },
    {
      name: 'Retail',
      icon: ShoppingCart,
      description: 'Transform customer experience and inventory management with AI-driven insights',
      benefits: [
        'Personalize customer experiences',
        'Optimize inventory levels',
        'Increase sales conversion by 25%',
        'Automate customer support'
      ],
      image: 'https://img.freepik.com/premium-photo/ai-powered-robot-assisting-customer-modern-retail-store-with-her-inquiries_1064559-47348.jpg',
      href: '/industries/retail',
      color: 'from-green-600 to-emerald-600'
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
            Industry-Specific <span className="gradient-text">AI Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our AI solutions are tailored to meet the unique challenges and requirements
            of your industry, ensuring maximum impact and compliance.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {industries.map((industry, index) => {
            const IconComponent = industry.icon

            return (
              <motion.div key={industry.name} variants={itemVariants}>
                <Card className="h-full group hover:scale-105 transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                      <Image
                        src={industry.image}
                        alt={`${industry.name} Industry`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-tr ${industry.color} opacity-20`} />
                    </div>
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={`w-12 h-12 bg-gradient-to-r ${industry.color} rounded-lg flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{industry.name}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-300 leading-relaxed">
                      {industry.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2 mb-6">
                      {industry.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className={`w-2 h-2 bg-gradient-to-r ${industry.color} rounded-full`} />
                          <span className="text-sm text-gray-300">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <Button asChild variant="outline" className="w-full group">
                      <Link href={industry.href}>
                        Explore {industry.name}
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl p-12 border border-purple-500/20"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Don't See Your Industry?
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Our AI solutions are flexible and can be customized for any industry.
            Let's discuss how we can address your specific challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="xl">
              <Link href="/contact?type=consultation">
                Schedule a Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl">
              <Link href="/about">
                Learn About Our Approach
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default IndustriesSection
