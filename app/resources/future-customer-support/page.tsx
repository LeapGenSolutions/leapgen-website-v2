
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Download, Users, Bot, Heart, TrendingUp, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'The Future of Customer Support: AI-Human Collaboration | LeapGen.AI',
  description: 'Research-backed insights on optimizing customer support with AI while maintaining human touch.',
}

export default function FutureCustomerSupportPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://i.ytimg.com/vi/hFRoo7WDF5Y/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGEggGSh_MA8=&rs=AOn4CLD76SHXA79_YXxXz9-xqdMqTO71vQ"
            alt="Future of Customer Support"
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
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <div className="inline-block px-3 py-1 bg-purple-600/20 text-purple-400 text-sm rounded-full mb-4">
                Whitepaper • Customer Support • AI Strategy
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                The Future of Customer Support: <span className="gradient-text">AI-Human Collaboration</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Research-backed insights on optimizing customer support with AI while maintaining the human touch that customers value
              </p>
            </div>

            {/* Key Insights */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Bot className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">AI Automation</h3>
                  <p className="text-gray-300 text-sm">80% of routine inquiries can be automated while improving response times</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Heart className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Human Touch</h3>
                  <p className="text-gray-300 text-sm">Complex issues still require human empathy and problem-solving skills</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Hybrid Model</h3>
                  <p className="text-gray-300 text-sm">Best results come from seamless AI-human collaboration</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Research Overview */}
      <section className="section-padding bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Research Overview</h2>
            
            <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg p-8 border border-purple-500/20 mb-12">
              <p className="text-lg text-gray-300 leading-relaxed">
                This comprehensive whitepaper analyzes data from over 500 companies and 10,000 customer interactions 
                to understand how AI is reshaping customer support. Our research reveals the optimal balance between 
                automation and human intervention for maximum customer satisfaction and operational efficiency.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">Key Research Findings</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div>
                      <h4 className="font-semibold text-white">Customer Preference Patterns</h4>
                      <p className="text-gray-300">73% prefer AI for simple queries, 89% want human agents for complex issues</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div>
                      <h4 className="font-semibold text-white">Efficiency Metrics</h4>
                      <p className="text-gray-300">AI reduces response times by 85% while maintaining 92% accuracy rates</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div>
                      <h4 className="font-semibold text-white">Cost Impact Analysis</h4>
                      <p className="text-gray-300">Hybrid models achieve 60% cost reduction with higher satisfaction scores</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                    <div>
                      <h4 className="font-semibold text-white">Agent Satisfaction</h4>
                      <p className="text-gray-300">Support agents report 40% higher job satisfaction with AI assistance</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="https://i.pinimg.com/originals/27/94/97/2794977786d7f9b35cf19276a212816f.png"
                  alt="Customer Support Analytics"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current State Analysis */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Current State of Customer Support</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-red-900/20 border-red-500/30">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-red-400" />
                    <span>Traditional Challenges</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Long wait times (avg. 8 minutes)</li>
                    <li>• High agent turnover (75% annually)</li>
                    <li>• Inconsistent service quality</li>
                    <li>• Escalating operational costs</li>
                    <li>• Limited 24/7 availability</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-green-900/20 border-green-500/30">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Bot className="w-5 h-5 text-green-400" />
                    <span>AI Opportunities</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Instant response capabilities</li>
                    <li>• 24/7 availability</li>
                    <li>• Consistent service delivery</li>
                    <li>• Scalable cost structure</li>
                    <li>• Multilingual support</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gray-900 rounded-lg p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-center">Industry Statistics</h3>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">67%</div>
                  <div className="text-gray-300">of customers prefer self-service options</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-pink-400 mb-2">$1.3T</div>
                  <div className="text-gray-300">annual cost of poor customer service</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">90%</div>
                  <div className="text-gray-300">of customers expect immediate responses</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">50%</div>
                  <div className="text-gray-300">of support tickets are repetitive</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Hybrid Model */}
      <section className="section-padding bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">The Optimal Hybrid Model</h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">AI-First Approach with Human Escalation</h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Our research shows that the most successful customer support operations use an AI-first 
                    approach where artificial intelligence handles initial customer interactions and routes 
                    complex issues to human agents.
                  </p>
                  <p>
                    This model achieves the best of both worlds: the efficiency and availability of AI 
                    combined with the empathy and problem-solving capabilities of human agents.
                  </p>
                </div>
                
                <div className="space-y-4 mt-8">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold text-white">Intelligent Routing</div>
                      <div className="text-gray-400">AI determines the best path for each customer inquiry</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold text-white">Seamless Handoffs</div>
                      <div className="text-gray-400">Smooth transitions between AI and human agents</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold text-white">Context Preservation</div>
                      <div className="text-gray-400">Full conversation history maintained across channels</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="https://i.pinimg.com/originals/2f/f7/8c/2ff78c28b83ab68f5c2c0f405a6eea3c.png"
                  alt="Hybrid Support Model"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Framework */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Implementation Framework</h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Assessment & Planning</h3>
                  <p className="text-gray-300">Analyze current support operations, identify automation opportunities, and develop implementation roadmap.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">AI System Deployment</h3>
                  <p className="text-gray-300">Implement AI chatbots and routing systems, train on historical data, and establish escalation protocols.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Agent Training & Integration</h3>
                  <p className="text-gray-300">Train human agents to work effectively with AI systems and handle escalated complex issues.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Continuous Optimization</h3>
                  <p className="text-gray-300">Monitor performance metrics, gather feedback, and continuously improve the AI-human collaboration model.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="section-padding bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Measuring Success</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Customer Experience Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Customer Satisfaction Score (CSAT)</li>
                    <li>• Net Promoter Score (NPS)</li>
                    <li>• First Contact Resolution Rate</li>
                    <li>• Average Response Time</li>
                    <li>• Customer Effort Score (CES)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Operational Efficiency Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Cost per Contact</li>
                    <li>• Agent Utilization Rate</li>
                    <li>• Automation Rate</li>
                    <li>• Escalation Rate</li>
                    <li>• Agent Satisfaction Score</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Whitepaper Contents</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Part 1: Research Methodology</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Study Design & Scope</li>
                    <li>• Data Collection Methods</li>
                    <li>• Industry Analysis</li>
                    <li>• Statistical Findings</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Part 2: Current State Analysis</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Traditional Support Challenges</li>
                    <li>• Customer Expectations</li>
                    <li>• Technology Adoption Trends</li>
                    <li>• Cost Structure Analysis</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Part 3: The Hybrid Model</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• AI-Human Collaboration Framework</li>
                    <li>• Optimal Task Distribution</li>
                    <li>• Escalation Strategies</li>
                    <li>• Technology Integration</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Part 4: Implementation Guide</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Step-by-Step Deployment</li>
                    <li>• Change Management</li>
                    <li>• Performance Metrics</li>
                    <li>• ROI Calculation</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="section-padding bg-gradient-to-r from-purple-900/20 to-pink-900/20 border-t border-purple-500/20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Download the Complete Whitepaper</h2>
            <p className="text-xl text-gray-300 mb-8">
              Get the comprehensive 38-page research report with detailed analysis, implementation frameworks, 
              and real-world case studies on AI-human collaboration in customer support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="xl">
                <Link href="/contact?type=resource&resource=future-customer-support">
                  <Download className="mr-2 w-5 h-5" />
                  Download Free Whitepaper
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
