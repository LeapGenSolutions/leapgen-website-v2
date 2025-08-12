
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Play, Calendar, Clock, Users, CheckCircle, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Getting Started with AI: 30-Minute Implementation Roadmap | LeapGen.AI',
  description: 'Live webinar covering essential steps for successful AI implementation in your organization.',
}

export default function AIImplementationWebinarPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://img.freepik.com/premium-photo/business-management-seminar-with-speaker-presenting-innovation-strategies-attentive-audience-large-screen-showing-digital-roadmap_1299130-27182.jpg?w=740"
            alt="AI Implementation Webinar"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Button asChild variant="outline" size="sm">
                <Link href="/resources">
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Back to Resources
                </Link>
              </Button>
            </div>

            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Play className="w-8 h-8 text-white" />
              </div>
              <div className="inline-block px-3 py-1 bg-red-600/20 text-red-400 text-sm rounded-full mb-4">
                Live Webinar • AI Implementation • 30 Minutes
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Getting Started with AI: <span className="gradient-text">30-Minute Implementation Roadmap</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join our expert-led webinar covering the essential steps for successful AI implementation in your organization
              </p>
            </div>

            {/* Webinar Details */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Clock className="w-12 h-12 text-red-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Duration</h3>
                  <p className="text-gray-300">30 minutes + 15 min Q&A</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Users className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Audience</h3>
                  <p className="text-gray-300">Business leaders & IT executives</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Calendar className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Schedule</h3>
                  <p className="text-gray-300">Weekly sessions available</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Speaker Section */}
      <section className="section-padding bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Meet Your Expert Speaker</h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="https://i.ytimg.com/vi/eqW3J0D36tQ/maxresdefault.jpg"
                  alt="Dr. Sarah Mitchell - AI Implementation Expert"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4">Dr. Sarah Mitchell</h3>
                <p className="text-lg text-purple-400 mb-6">Chief AI Strategist, LeapGen.AI</p>
                
                <div className="space-y-4 text-gray-300 mb-8">
                  <p>
                    Dr. Mitchell brings over 15 years of experience in AI implementation across Fortune 500 companies. 
                    She has led successful AI transformations in healthcare, finance, and technology sectors.
                  </p>
                  <p>
                    As a former MIT researcher and current Chief AI Strategist at LeapGen.AI, she specializes in 
                    translating complex AI concepts into actionable business strategies.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                    <div className="text-2xl font-bold text-purple-400">500+</div>
                    <div className="text-sm text-gray-400">AI Projects Led</div>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                    <div className="text-2xl font-bold text-orange-400">15</div>
                    <div className="text-sm text-gray-400">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What You'll Learn</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>AI Readiness Assessment</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Evaluate your organization's AI readiness</li>
                    <li>• Identify key success factors</li>
                    <li>• Assess data infrastructure requirements</li>
                    <li>• Determine skill gaps and training needs</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    <span>Strategic Planning</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Define clear AI objectives and KPIs</li>
                    <li>• Develop a phased implementation roadmap</li>
                    <li>• Identify high-impact use cases</li>
                    <li>• Create a business case for AI investment</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    <span>Technology Selection</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Choose the right AI platforms and tools</li>
                    <li>• Understand build vs. buy decisions</li>
                    <li>• Evaluate vendor capabilities</li>
                    <li>• Plan for scalability and integration</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-yellow-400" />
                    <span>Implementation Best Practices</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Start with pilot projects for quick wins</li>
                    <li>• Manage change and user adoption</li>
                    <li>• Ensure data quality and governance</li>
                    <li>• Measure success and iterate</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section className="section-padding bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Webinar Agenda</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold">
                  0-5
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Welcome & Introduction</h3>
                  <p className="text-gray-300">Overview of AI transformation trends and what makes implementations successful</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold">
                  5-15
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">The 5-Step AI Implementation Framework</h3>
                  <p className="text-gray-300">Detailed walkthrough of our proven methodology for AI deployment</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-yellow-600 rounded-lg flex items-center justify-center text-white font-bold">
                  15-25
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Real-World Case Studies</h3>
                  <p className="text-gray-300">Success stories from healthcare, finance, and technology sectors</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold">
                  25-30
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Your Next Steps</h3>
                  <p className="text-gray-300">Actionable takeaways and resources to begin your AI journey</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                  30-45
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Live Q&A Session</h3>
                  <p className="text-gray-300">Get your specific questions answered by our AI implementation expert</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What Attendees Say</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border-purple-500/30">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-300 mb-4">
                    "This webinar gave me the clarity I needed to start our AI initiative. The framework is practical and the case studies were incredibly relevant to our industry."
                  </blockquote>
                  <div>
                    <div className="font-semibold">Jennifer Chen</div>
                    <div className="text-gray-400">CTO, TechFlow Solutions</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border-green-500/30">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-300 mb-4">
                    "Excellent content delivered in a concise format. The Q&A session was particularly valuable - Dr. Mitchell answered all our specific questions."
                  </blockquote>
                  <div>
                    <div className="font-semibold">Michael Rodriguez</div>
                    <div className="text-gray-400">VP of Operations, Global Finance Corp</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Materials */}
      <section className="section-padding bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Exclusive Bonus Materials</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">AI Readiness Checklist</h3>
                  <p className="text-gray-300 text-sm">Comprehensive assessment tool to evaluate your organization's AI readiness</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <CheckCircle className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Implementation Template</h3>
                  <p className="text-gray-300 text-sm">Step-by-step project plan template for your AI implementation</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <CheckCircle className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">ROI Calculator</h3>
                  <p className="text-gray-300 text-sm">Excel tool to calculate potential ROI from your AI investments</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="section-padding bg-gradient-to-r from-red-900/20 to-orange-900/20 border-t border-red-500/20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Register for the Next Session</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of business leaders who have attended this popular webinar. 
              Limited seats available for each session.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="xl">
                <Link href="/contact?type=webinar&resource=ai-implementation-webinar">
                  <Play className="mr-2 w-5 h-5" />
                  Register Free
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link href="/contact?type=demo">
                  Schedule Private Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Can't attend live? Register anyway to receive the recording and bonus materials.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
