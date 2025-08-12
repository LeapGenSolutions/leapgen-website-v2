
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, FileText, Heart, Clock, Shield, CheckCircle, Brain } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import AnimatedCounter from '@/components/animated-counter'

export const metadata: Metadata = {
  title: 'Seismic - Reduce Documentation Time by 80% with 90% Billing Accuracy | LeapGen.AI',
  description: 'AI-powered clinical notes with emotional intelligence, automated billing codes, and HIPAA compliance. Transform healthcare documentation with Seismic.',
  keywords: 'clinical documentation AI, healthcare AI, medical transcription, HIPAA compliant, clinical notes automation',
}

export default function SeismicPage() {
  const features = [
    {
      icon: FileText,
      title: 'AI-Powered Clinical Documentation',
      description: 'Automatically generate comprehensive clinical notes from patient interactions using advanced natural language processing.',
      benefits: ['Real-time transcription', 'Medical terminology recognition', 'Structured note generation', 'Template customization']
    },
    {
      icon: Brain,
      title: 'Emotional Intelligence Insights',
      description: 'Analyze patient emotional states and communication patterns to enhance care quality and patient satisfaction.',
      benefits: ['Sentiment analysis', 'Emotional state tracking', 'Communication insights', 'Care recommendations']
    },
    {
      icon: Shield,
      title: 'HIPAA Compliant Security',
      description: 'Enterprise-grade security and compliance features designed specifically for healthcare environments.',
      benefits: ['End-to-end encryption', 'Audit trails', 'Access controls', 'Data residency options']
    },
    {
      icon: Clock,
      title: 'Automated Billing Integration',
      description: 'Automatically generate accurate billing codes and documentation to streamline revenue cycle management.',
      benefits: ['ICD-10 code suggestions', 'CPT code automation', 'Documentation compliance', 'Revenue optimization']
    }
  ]

  const useCases = [
    {
      title: 'Primary Care Documentation',
      description: 'Streamline routine visits and chronic care management with automated notes',
      metrics: '80% reduction in documentation time, 90% billing accuracy',
      image: 'https://img.freepik.com/premium-photo/doctor-ai-learning-patient-ai-artificial-intelligence-modern-medical-technology-iot-automation-doctor-using-ai-document-management-concept_10541-9936.jpg'
    },
    {
      title: 'Specialist Consultations',
      description: 'Capture complex specialist interactions with detailed clinical insights',
      metrics: '75% more detailed notes, 50% faster consultations',
      image: 'https://nanoschool.in/wp-content/uploads/2024/07/AIdoctor4.webp'
    },
    {
      title: 'Mental Health Sessions',
      description: 'Document therapy sessions with emotional intelligence and privacy protection',
      metrics: '85% better patient engagement tracking',
      image: 'https://i.ytimg.com/vi/U1LkRg7cwz0/maxresdefault.jpg'
    }
  ]

  const testimonials = [
    {
      quote: "Seismic has revolutionized our clinical documentation. Doctors save 3 hours per day on paperwork, and our billing accuracy improved by 90%.",
      author: "Dr. Michael Rodriguez",
      title: "Chief Medical Officer, Regional Health Network",
      metrics: "3 hours saved daily, 90% billing accuracy improvement"
    },
    {
      quote: "The emotional intelligence insights have transformed how we approach patient care. We can now identify and address patient concerns more effectively.",
      author: "Dr. Sarah Thompson",
      title: "Director of Patient Experience, Metro Medical Center",
      metrics: "40% improvement in patient satisfaction scores"
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://live.staticflickr.com/65535/50722535078_be9a617405_b.jpg"
            alt="Seismic Clinical Documentation"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-3">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-5xl md:text-6xl font-bold">Seismic</h1>
                  <p className="text-xl text-green-400">Clinical Documentation AI</p>
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Reduce Documentation Time by{' '}
                <span className="gradient-text">
                  <AnimatedCounter end={80} suffix="%" />
                </span>{' '}
                with{' '}
                <span className="gradient-text">
                  <AnimatedCounter end={90} suffix="%" />
                </span>{' '}
                Billing Accuracy
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                AI-powered clinical notes with emotional intelligence, automated billing codes, 
                and HIPAA compliance. Transform healthcare documentation while enhancing 
                patient care quality and revenue cycle management.
              </p>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">
                    <AnimatedCounter end={80} suffix="%" />
                  </div>
                  <div className="text-sm text-gray-400">Time Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400">
                    <AnimatedCounter end={90} suffix="%" />
                  </div>
                  <div className="text-sm text-gray-400">Billing Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">100%</div>
                  <div className="text-sm text-gray-400">HIPAA Compliant</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="xl">
                  <Link href="/contact?type=demo&product=seismic">
                    Request Seismic Demo
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="xl">
                  <Link href="/resources/seismic-roi-calculator">
                    Calculate Time Savings
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square max-w-lg mx-auto relative">
                <Image
                  src="https://cdn.prod.website-files.com/6626cd90a59907680f6ccb64/665cd301dd25792d97cb5600_hero-freed-p-800.png"
                  alt="Seismic Clinical Interface"
                  fill
                  className="object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-green-600/20 to-emerald-600/20 rounded-2xl" />
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
              Advanced <span className="gradient-text">Healthcare AI</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Seismic combines cutting-edge AI technology with deep healthcare expertise 
              to deliver documentation solutions that enhance both efficiency and care quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card key={index} className="group hover:scale-105 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
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
              Healthcare <span className="gradient-text">Applications</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Seismic adapts to various healthcare settings and specialties, 
              providing tailored documentation solutions for every care environment.
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
                  <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-lg p-4 border border-green-500/20">
                    <div className="text-sm font-semibold text-green-400 mb-1">Key Results:</div>
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
              Healthcare <span className="gradient-text">Success Stories</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group">
                <CardContent className="p-8">
                  <blockquote className="text-lg text-gray-300 leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-lg p-4 mb-6 border border-green-500/20">
                    <div className="text-sm font-semibold text-green-400 mb-1">Results:</div>
                    <div className="text-sm text-gray-300">{testimonial.metrics}</div>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-green-400">{testimonial.title}</div>
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
            Ready to Transform Healthcare Documentation?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join healthcare organizations using Seismic to improve patient care, 
            reduce administrative burden, and enhance clinical outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="xl">
              <Link href="/contact?type=demo&product=seismic">
                Schedule Your Seismic Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl">
              <Link href="/industries/healthcare">
                Explore Healthcare Solutions
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
