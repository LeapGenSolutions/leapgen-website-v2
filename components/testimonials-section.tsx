'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import Image from 'next/image'
import { Card, CardContent } from './ui/card'

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      title: 'CTO',
      company: 'TechFlow Solutions',
      industry: 'Technology',
      quote: 'SurroundAI reduced our customer support costs by 45% in just 3 months. The AI handles 80% of our inquiries automatically, and our team can focus on complex issues.',
      rating: 5,
      image: 'https://i.pinimg.com/originals/5f/4a/56/5f4a5607b02c0d3e0cc89c27e64a02ee.jpg',
      metrics: '45% cost reduction, 80% automation rate'
    },
    {
      name: 'Dr. Michael Rodriguez',
      title: 'Chief Medical Officer',
      company: 'Regional Health Network',
      industry: 'Healthcare',
      quote: 'Seismic has revolutionized our clinical documentation. Doctors save 2 hours per day on paperwork, and our billing accuracy improved by 35%.',
      rating: 5,
      image: 'https://i.pinimg.com/736x/dc/87/60/dc8760d2432e68a72d473e40c781f0e0.jpg',
      metrics: '2 hours saved daily, 35% billing accuracy improvement'
    },
    {
      name: 'Jennifer Walsh',
      title: 'VP of Analytics',
      company: 'Global Finance Corp',
      industry: 'Financial Services',
      quote: 'Data Coffee transformed how we handle financial data. We now generate insights 10x faster and our compliance reporting is completely automated.',
      rating: 5,
      image: 'https://i.pinimg.com/originals/b6/0a/f0/b60af0a20d78722d81690af213e5354f.jpg',
      metrics: '10x faster insights, 100% automated compliance'
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
    <section className="section-padding bg-black">
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
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. See how organizations like yours are
            achieving measurable results with LeapGen.AI solutions.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-8 mb-16"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full relative overflow-hidden group">
                <div className="absolute top-4 right-4 text-purple-400 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Quote className="w-12 h-12" />
                </div>
                <CardContent className="p-8">
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-gray-300 leading-relaxed mb-6 text-lg">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Metrics */}
                  <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-lg p-4 mb-6 border border-purple-500/20">
                    <div className="text-sm font-semibold text-purple-400 mb-1">Key Results:</div>
                    <div className="text-sm text-gray-300">{testimonial.metrics}</div>
                  </div>

                  {/* Author */}
                  <div className="flex items-center space-x-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.title}</div>
                      <div className="text-sm text-purple-400">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold mb-6">Trusted by Industry Leaders</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              {/* Company Logos Placeholder */}
              <div className="h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 font-semibold">TechFlow</span>
              </div>
              <div className="h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 font-semibold">HealthNet</span>
              </div>
              <div className="h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 font-semibold">FinanceCorp</span>
              </div>
              <div className="h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 font-semibold">RetailPlus</span>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>SOC 2 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>GDPR Ready</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>99.9% Uptime SLA</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
