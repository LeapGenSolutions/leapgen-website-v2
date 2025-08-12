
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Download, TrendingUp, Clock, Users, MessageSquare, DollarSign } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import AnimatedCounter from '@/components/animated-counter'

export const metadata: Metadata = {
  title: 'TechFlow Solutions Case Study - 45% Support Cost Reduction | LeapGen.AI',
  description: 'How TechFlow Solutions automated 80% of customer inquiries and reduced support costs by 45% with SurroundAI.',
}

export default function TechFlowCaseStudyPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://img.freepik.com/premium-photo/team-office-computer-night-workshop-planning-strategy-goal-business-overtime-collaboration-teamwork-meeting-desk-creative-vision-innovation-idea-late-work_590464-87120.jpg"
            alt="TechFlow Solutions Office"
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
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="inline-block px-3 py-1 bg-purple-600/20 text-purple-400 text-sm rounded-full mb-4">
                Case Study • SurroundAI • Technology
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                TechFlow Solutions: <span className="gradient-text">45% Support Cost Reduction</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                How a growing SaaS company automated 80% of customer inquiries and improved response times by 75% with SurroundAI
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-purple-400 mb-2">
                    <AnimatedCounter end={45} suffix="%" />
                  </div>
                  <div className="text-gray-300">Cost Reduction</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    <AnimatedCounter end={80} suffix="%" />
                  </div>
                  <div className="text-gray-300">Automated Inquiries</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    <AnimatedCounter end={75} suffix="%" />
                  </div>
                  <div className="text-gray-300">Faster Response</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">
                    <AnimatedCounter end={92} suffix="%" />
                  </div>
                  <div className="text-gray-300">Customer Satisfaction</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">About TechFlow Solutions</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    TechFlow Solutions is a rapidly growing SaaS company providing project management 
                    and workflow automation tools to over 50,000 businesses worldwide. Founded in 2019, 
                    the company experienced explosive growth during the remote work boom.
                  </p>
                  <p>
                    With their customer base growing 300% year-over-year, TechFlow's support team was 
                    overwhelmed with inquiries, leading to longer response times and decreased customer satisfaction.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                    <div className="text-2xl font-bold text-purple-400">50K+</div>
                    <div className="text-sm text-gray-400">Active Customers</div>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                    <div className="text-2xl font-bold text-blue-400">300%</div>
                    <div className="text-sm text-gray-400">YoY Growth</div>
                  </div>
                </div>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="https://as2.ftcdn.net/v2/jpg/02/38/25/49/1000_F_238254938_MJOrtumj1TTBtDcdbJtjcMbMzDWo83tL.jpg"
                  alt="TechFlow Solutions Team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">The Challenge</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-red-900/20 border-red-500/30">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-red-400" />
                    <span>Slow Response Times</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Average response time increased from 2 hours to 24+ hours as ticket volume grew 400%.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-orange-900/20 border-orange-500/30">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-orange-400" />
                    <span>Overwhelmed Team</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Support team burnout increased as agents handled 150+ tickets per day, well above industry standards.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-yellow-900/20 border-yellow-500/30">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-yellow-400" />
                    <span>Rising Costs</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Support costs increased 250% as the company hired additional agents to handle growing ticket volume.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gray-900 rounded-lg p-8 border border-gray-700">
              <blockquote className="text-xl italic text-gray-300 text-center">
                "We were drowning in support tickets. Our team was working overtime, customers were frustrated, 
                and our costs were spiraling out of control. We needed a solution that could scale with our growth."
              </blockquote>
              <div className="text-center mt-4">
                <div className="font-semibold">Sarah Chen</div>
                <div className="text-gray-400">VP of Customer Success, TechFlow Solutions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="section-padding bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">The Solution</h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">SurroundAI Implementation</h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    TechFlow implemented SurroundAI across their entire customer support operation, 
                    integrating with their existing helpdesk system and knowledge base.
                  </p>
                  <p>
                    The AI system was trained on 2 years of historical support data, product documentation, 
                    and common customer scenarios to provide accurate, contextual responses.
                  </p>
                </div>
                
                <div className="space-y-4 mt-8">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold text-white">Intelligent Ticket Routing</div>
                      <div className="text-gray-400">Automatically categorize and route tickets to appropriate agents</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold text-white">Automated Responses</div>
                      <div className="text-gray-400">Handle common inquiries with instant, accurate responses</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold text-white">Agent Assistance</div>
                      <div className="text-gray-400">Provide suggested responses and relevant documentation</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="https://img.freepik.com/premium-photo/web-dashboard-customer-support-ticket-management-response-time-tracking-concept-idea-design-art_655090-978411.jpg"
                  alt="SurroundAI Dashboard"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Results & Impact</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <DollarSign className="w-5 h-5 text-green-400" />
                    <span>Cost Savings</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300">
                    <li>• 45% reduction in support costs</li>
                    <li>• $2.3M annual savings in staffing</li>
                    <li>• 60% reduction in overtime expenses</li>
                    <li>• ROI achieved in 4 months</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-blue-400" />
                    <span>Efficiency Gains</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300">
                    <li>• 75% faster response times</li>
                    <li>• 80% of inquiries automated</li>
                    <li>• 50% increase in agent productivity</li>
                    <li>• 24/7 support availability</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-purple-400" />
                    <span>Customer Experience</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300">
                    <li>• 92% customer satisfaction score</li>
                    <li>• 40% reduction in escalations</li>
                    <li>• 85% first-contact resolution</li>
                    <li>• 30% increase in NPS score</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageSquare className="w-5 h-5 text-yellow-400" />
                    <span>Team Impact</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300">
                    <li>• 70% reduction in agent burnout</li>
                    <li>• Focus on complex, high-value issues</li>
                    <li>• Improved job satisfaction</li>
                    <li>• Enhanced skill development</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-lg p-8 border border-purple-500/20">
              <blockquote className="text-xl italic text-gray-300 text-center mb-6">
                "SurroundAI transformed our support operation. We're now handling 3x the volume with the same team size, 
                and our customers are happier than ever. It's been a game-changer for our business."
              </blockquote>
              <div className="text-center">
                <div className="font-semibold">Mike Rodriguez</div>
                <div className="text-gray-400">CTO, TechFlow Solutions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="section-padding bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Implementation Timeline</h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Week 1-2: Discovery & Planning</h3>
                  <p className="text-gray-300">Data analysis, system integration planning, and team training preparation.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Week 3-4: System Integration</h3>
                  <p className="text-gray-300">SurroundAI integration with existing helpdesk and knowledge base systems.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Week 5-6: Training & Testing</h3>
                  <p className="text-gray-300">AI model training on historical data and pilot testing with select ticket types.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Week 7-8: Full Deployment</h3>
                  <p className="text-gray-300">Gradual rollout to all support channels with continuous monitoring and optimization.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="section-padding bg-gradient-to-r from-purple-900/20 to-blue-900/20 border-t border-purple-500/20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Download the Complete Case Study</h2>
            <p className="text-xl text-gray-300 mb-8">
              Get the full case study with detailed implementation steps, ROI calculations, 
              and lessons learned from TechFlow's AI transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="xl">
                <Link href="/contact?type=resource&resource=techflow-case-study">
                  <Download className="mr-2 w-5 h-5" />
                  Download PDF Case Study
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link href="/contact?type=demo">
                  Schedule Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
