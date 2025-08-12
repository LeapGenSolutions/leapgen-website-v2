
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Bot, Users, TrendingUp, Clock, Shield, Zap, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import AnimatedCounter from '@/components/animated-counter'

export const metadata: Metadata = {
  title: 'SurroundAI - Cut Customer Support Costs by 60% | LeapGen.AI',
  description: 'Reduce response times by 75%, improve satisfaction scores by 30%, and free up your team for strategic work with SurroundAI customer support automation.',
  keywords: 'AI customer support, chatbot automation, customer service AI, support cost reduction',
}

export default function SurroundAIPage() {
  const features = [
    {
      icon: Bot,
      title: 'Intelligent AI Assistants',
      description: 'Customizable AI agents that understand your business context and provide accurate, helpful responses to customer inquiries.',
      benefits: ['Natural language processing', 'Multi-language support', 'Context-aware responses', 'Continuous learning']
    },
    {
      icon: Users,
      title: 'Seamless Human Handoff',
      description: 'Smart escalation system that knows when to transfer complex issues to human agents with full conversation context.',
      benefits: ['Intelligent routing', 'Context preservation', 'Priority queuing', 'Agent notifications']
    },
    {
      icon: TrendingUp,
      title: 'Advanced Analytics',
      description: 'Comprehensive insights into customer interactions, satisfaction scores, and operational efficiency metrics.',
      benefits: ['Real-time dashboards', 'Performance metrics', 'Trend analysis', 'Custom reports']
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Round-the-clock customer support that never sleeps, ensuring your customers get help whenever they need it.',
      benefits: ['Always-on support', 'Global time zones', 'Instant responses', 'No wait times']
    }
  ]

  const useCases = [
    {
      title: 'E-commerce Support',
      description: 'Handle order inquiries, returns, and product questions automatically',
      metrics: '80% of inquiries resolved without human intervention',
      image: 'https://blog.happyfox.com/wp-content/uploads/2020/11/X-examples-of-chatbots-in-E-commerce_V1-01.png'
    },
    {
      title: 'Technical Support',
      description: 'Provide instant troubleshooting and technical assistance',
      metrics: '60% reduction in ticket volume to human agents',
      image: 'https://lh3.googleusercontent.com/JGh04QQeEmGHIO0pU4nHxpB-4S7xqLdsIJqYKoa78Iryo8mcv6ydUB_eHBUx5c9kDTciqvORuZ3AeGI4JxX0hLdBbxmpZmnpRwg1MMQztr0u5090nWvmGwdarHBFw7n1dyFfCGKwWnHYf4HDqIA2KIY'
    },
    {
      title: 'Lead Qualification',
      description: 'Engage prospects and qualify leads through intelligent conversations',
      metrics: '45% increase in qualified lead conversion',
      image: 'https://i.ytimg.com/vi/dh286BbvaRs/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLACheZq9Je7ODXrBGRcNN2Gj3x6Sw'
    }
  ]

  const testimonials = [
    {
      quote: "SurroundAI reduced our customer support costs by 60% in just 3 months. The AI handles 80% of our inquiries automatically.",
      author: "Sarah Chen",
      title: "CTO, TechFlow Solutions",
      metrics: "60% cost reduction, 80% automation rate"
    },
    {
      quote: "Our customer satisfaction scores improved by 35% since implementing SurroundAI. Customers love the instant responses.",
      author: "Mike Rodriguez",
      title: "Customer Success Director, RetailPlus",
      metrics: "35% satisfaction improvement, 24/7 availability"
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://static.liveperson.com/static-assets/2023/06/23162249/MessagingAI_Feature.1_ProductUI_JV_0523%402x.png"
            alt="SurroundAI Dashboard"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-3">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-5xl md:text-6xl font-bold">SurroundAI</h1>
                  <p className="text-xl text-purple-400">Customer Support Automation</p>
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Cut Customer Support Costs by{' '}
                <span className="gradient-text">
                  <AnimatedCounter end={60} suffix="%" />
                </span>{' '}
                with AI-Powered Automation
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Reduce response times by 75%, improve satisfaction scores by 30%, 
                and free up your team for strategic work with intelligent AI assistants 
                that understand your business.
              </p>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">
                    <AnimatedCounter end={75} suffix="%" />
                  </div>
                  <div className="text-sm text-gray-400">Faster Responses</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">
                    <AnimatedCounter end={60} suffix="%" />
                  </div>
                  <div className="text-sm text-gray-400">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">24/7</div>
                  <div className="text-sm text-gray-400">Availability</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="xl">
                  <Link href="/contact?type=demo&product=surroundai">
                    See SurroundAI in Action
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="xl">
                  <Link href="/resources/surroundai-case-study">
                    View Case Studies
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square max-w-lg mx-auto relative">
                <Image
                  src="https://i.ytimg.com/vi/cyqt5t8b82E/maxresdefault.jpg"
                  alt="SurroundAI Interface"
                  fill
                  className="object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-blue-600/20 rounded-2xl" />
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
              Powerful Features for <span className="gradient-text">Modern Support</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              SurroundAI combines advanced AI technology with intuitive design to deliver 
              exceptional customer support experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card key={index} className="group hover:scale-105 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
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

      {/* Use Cases Section */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Real-World <span className="gradient-text">Use Cases</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how organizations across industries are using SurroundAI to transform 
              their customer support operations.
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
                  <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-lg p-4 border border-purple-500/20">
                    <div className="text-sm font-semibold text-purple-400 mb-1">Key Result:</div>
                    <div className="text-sm text-gray-300">{useCase.metrics}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-950">
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
                  <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-lg p-4 mb-6 border border-purple-500/20">
                    <div className="text-sm font-semibold text-purple-400 mb-1">Results:</div>
                    <div className="text-sm text-gray-300">{testimonial.metrics}</div>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-purple-400">{testimonial.title}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-purple-900/20 to-blue-900/20 border-t border-purple-500/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Customer Support?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of organizations using SurroundAI to reduce costs, 
            improve efficiency, and delight customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="xl">
              <Link href="/contact?type=demo&product=surroundai">
                Schedule Your SurroundAI Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl">
              <Link href="/resources/surroundai-roi-calculator">
                Calculate Your ROI
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
