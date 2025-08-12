
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Users, Heart, Zap, Globe, MapPin, Clock, DollarSign } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Careers - Join the LeapGen.AI Team',
  description: 'Join our mission to democratize AI for enterprises. Explore career opportunities at LeapGen.AI.',
}

export default function CareersPage() {
  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health support, and wellness programs'
    },
    {
      icon: Zap,
      title: 'Growth & Learning',
      description: 'Professional development budget, conference attendance, and continuous learning opportunities'
    },
    {
      icon: Globe,
      title: 'Remote-First',
      description: 'Work from anywhere with flexible hours and quarterly team gatherings'
    },
    {
      icon: Users,
      title: 'Inclusive Culture',
      description: 'Diverse, inclusive environment where everyone can thrive and make an impact'
    }
  ]

  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build and scale AI systems that serve millions of users across our platform.',
      requirements: ['5+ years ML/AI experience', 'Python, TensorFlow/PyTorch', 'Cloud platforms (AWS/GCP)']
    },
    {
      title: 'Product Manager - AI Platform',
      department: 'Product',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Drive product strategy and roadmap for our core AI platform and customer-facing features.',
      requirements: ['3+ years product management', 'AI/ML product experience', 'Customer-focused mindset']
    },
    {
      title: 'Customer Success Manager',
      department: 'Customer Success',
      location: 'Remote',
      type: 'Full-time',
      description: 'Help enterprise customers achieve success with our AI solutions and drive expansion.',
      requirements: ['Enterprise customer experience', 'Technical background preferred', 'Excellent communication']
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build and maintain infrastructure that powers our AI platform at scale.',
      requirements: ['Kubernetes, Docker', 'CI/CD pipelines', 'Cloud infrastructure experience']
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://img.freepik.com/premium-photo/brainstorming-diverse-team-corporate-coworkers-collaborating-project-modern-office_1148697-751.jpg"
            alt="LeapGen.AI Team"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Join Our <span className="gradient-text">Mission</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Help us democratize AI for enterprises worldwide. Build the future of artificial intelligence 
              with a team that values innovation, collaboration, and making a real impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="xl">
                <Link href="#positions">
                  View Open Positions
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link href="/about">
                  Learn About Our Team
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Work at <span className="gradient-text">LeapGen.AI</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We believe in creating an environment where talented people can do their best work 
              and make a meaningful impact on the future of AI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <Card key={index} className="text-center group hover:scale-105 transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Open <span className="gradient-text">Positions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our growing team and help shape the future of enterprise AI. 
              We're always looking for talented individuals who share our vision.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {openPositions.map((position, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl mb-2">{position.title}</CardTitle>
                      <div className="flex flex-wrap gap-3 text-sm">
                        <span className="flex items-center space-x-1 text-purple-400">
                          <Users className="w-4 h-4" />
                          <span>{position.department}</span>
                        </span>
                        <span className="flex items-center space-x-1 text-blue-400">
                          <MapPin className="w-4 h-4" />
                          <span>{position.location}</span>
                        </span>
                        <span className="flex items-center space-x-1 text-green-400">
                          <Clock className="w-4 h-4" />
                          <span>{position.type}</span>
                        </span>
                      </div>
                    </div>
                    <Button asChild variant="outline">
                      <Link href="/contact?type=career">
                        Apply Now
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{position.description}</p>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Key Requirements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                      {position.requirements.map((req, idx) => (
                        <li key={idx}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Card className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border-purple-500/30 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Don't See Your Role?</h3>
                <p className="text-gray-300 mb-6">
                  We're always interested in hearing from talented individuals. 
                  Send us your resume and let us know how you'd like to contribute.
                </p>
                <Button asChild size="lg">
                  <Link href="/contact?type=career">
                    Send Us Your Resume
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
