
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Download, Brain, Shield, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Enterprise AI Implementation Guide | LeapGen.AI',
  description: 'A comprehensive whitepaper covering strategy, implementation, and best practices for enterprise AI adoption.',
}

export default function EnterpriseAIGuidePage() {
  return (
    <div className="min-h-screen pt-16">
      <section className="section-padding bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                The Complete Guide to Enterprise AI Implementation
              </h1>
              <p className="text-xl text-gray-300">
                A comprehensive whitepaper covering strategy, implementation, and best practices
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">What You'll Learn</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Brain className="w-6 h-6 text-purple-400 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">AI Strategy Development</h3>
                      <p className="text-gray-300">How to develop a comprehensive AI strategy aligned with business objectives</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Zap className="w-6 h-6 text-blue-400 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">Implementation Framework</h3>
                      <p className="text-gray-300">Step-by-step framework for successful AI deployment</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="w-6 h-6 text-green-400 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">Security & Compliance</h3>
                      <p className="text-gray-300">Best practices for maintaining security and regulatory compliance</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border-purple-500/30">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Download Guide</CardTitle>
                  <CardDescription className="text-center text-gray-300">
                    Get instant access to our comprehensive 50-page guide
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button asChild size="lg" className="w-full">
                    <Link href="/contact?type=resource&resource=enterprise-ai-guide">
                      <Download className="mr-2 w-5 h-5" />
                      Download Free Guide
                    </Link>
                  </Button>
                  <p className="text-sm text-gray-400 mt-4">
                    No spam, just valuable insights delivered to your inbox
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="prose prose-invert max-w-none">
              <h2>Table of Contents</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Part 1: Strategy & Planning</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Defining AI Objectives</li>
                      <li>• ROI Assessment Framework</li>
                      <li>• Technology Stack Selection</li>
                      <li>• Team Structure & Skills</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Part 2: Implementation</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Pilot Project Selection</li>
                      <li>• Data Preparation</li>
                      <li>• Model Development</li>
                      <li>• Testing & Validation</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Part 3: Scaling & Operations</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Production Deployment</li>
                      <li>• Monitoring & Maintenance</li>
                      <li>• Performance Optimization</li>
                      <li>• Scaling Across Organization</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Part 4: Best Practices</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Security & Compliance</li>
                      <li>• Change Management</li>
                      <li>• Measuring Success</li>
                      <li>• Common Pitfalls to Avoid</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
