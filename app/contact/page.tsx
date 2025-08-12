
'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight, Users, Shield, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { toast } from 'sonner'

function ContactForm() {
  const searchParams = useSearchParams()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    message: '',
    formType: 'general'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const type = searchParams.get('type')
    const product = searchParams.get('product')
    const industry = searchParams.get('industry')
    
    if (type) {
      setFormData(prev => ({ ...prev, formType: type }))
    }
    if (industry) {
      setFormData(prev => ({ ...prev, industry }))
    }
    if (product) {
      setFormData(prev => ({ 
        ...prev, 
        message: `I'm interested in learning more about ${product.charAt(0).toUpperCase() + product.slice(1)} for my organization.`
      }))
    }
  }, [searchParams])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
        toast.success('Thank you! We will get back to you within 24 hours.')
      } else {
        toast.error(result.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      toast.error('Failed to submit form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const getFormTitle = () => {
    const type = formData.formType
    switch (type) {
      case 'demo':
        return 'Schedule Your Free AI Strategy Session'
      case 'consultation':
        return 'Speak with an AI Expert'
      default:
        return 'Get in Touch'
    }
  }

  const getFormDescription = () => {
    const type = formData.formType
    switch (type) {
      case 'demo':
        return 'Get a personalized demo and ROI analysis for your organization. See how our AI solutions can transform your business operations.'
      case 'consultation':
        return 'Speak directly with our AI experts to discuss your specific challenges and explore tailored solutions for your organization.'
      default:
        return 'Ready to transform your business with AI? Contact us to learn how our solutions can help you reduce costs and improve efficiency.'
    }
  }

  const benefits = [
    {
      icon: Users,
      title: 'Expert Consultation',
      description: 'Speak with AI specialists who understand your industry challenges'
    },
    {
      icon: Zap,
      title: 'Rapid Implementation',
      description: 'Get up and running in 30 days with our proven deployment process'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'SOC 2, HIPAA, and GDPR compliant solutions you can trust'
    }
  ]

  const nextSteps = [
    {
      step: '1',
      title: 'Initial Consultation',
      description: 'We discuss your challenges and objectives in a 30-minute call'
    },
    {
      step: '2',
      title: 'Custom Demo',
      description: 'See our solutions in action with your specific use cases'
    },
    {
      step: '3',
      title: 'ROI Analysis',
      description: 'Receive a detailed analysis of potential cost savings and benefits'
    },
    {
      step: '4',
      title: 'Implementation Plan',
      description: 'Get a customized roadmap for deploying AI in your organization'
    }
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-6">Thank You!</h1>
            <p className="text-xl text-gray-300 mb-8">
              We've received your inquiry and will get back to you within 24 hours. 
              Our team is excited to help you transform your business with AI.
            </p>
            <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-lg p-6 border border-purple-500/20 mb-8">
              <h3 className="text-lg font-semibold mb-2">What happens next?</h3>
              <p className="text-gray-300">
                One of our AI specialists will review your inquiry and reach out to schedule 
                a personalized consultation. In the meantime, feel free to explore our resources 
                or check out our case studies.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <a href="/">
                  Return to Homepage
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/resources">
                  Explore Resources
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://bernardmarr.com/wp-content/uploads/2022/08/10-Best-AI-Consultancy-Firms-1.jpg"
            alt="Contact LeapGen.AI"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                {getFormTitle()}
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                {getFormDescription()}
              </p>

              {/* Benefits */}
              <div className="space-y-4">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">{benefit.title}</h3>
                        <p className="text-gray-300">{benefit.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Contact Info */}
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold mb-4">Get Immediate Help</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">609-722-6768</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">contact@leapgen.ai</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Mon-Fri 9AM-6PM Eastern</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
                <CardDescription className="text-gray-300">
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                        Company Domain
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="www.acme.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-gray-300 mb-2">
                      Industry
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="form-input"
                    >
                      <option value="">Select your industry</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="financial-services">Financial Services</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="retail">Retail</option>
                      <option value="technology">Technology</option>
                      <option value="education">Education</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="form-input"
                      placeholder="Tell us about your challenges and how we can help..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Send Message'}
                    {!isSubmitting && <ArrowRight className="ml-2 w-5 h-5" />}
                  </Button>

                  <p className="text-sm text-gray-400 text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Happens Next Section */}
      <section className="section-padding bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Happens <span className="gradient-text">Next?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our proven process ensures you get maximum value from your AI investment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {nextSteps.map((step, index) => (
              <Card key={index} className="text-center group hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-16 flex items-center justify-center">
      <div className="text-white">Loading...</div>
    </div>}>
      <ContactForm />
    </Suspense>
  )
}
