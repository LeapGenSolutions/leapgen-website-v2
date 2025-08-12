'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Brain, Building2, TrendingUp, Users, BarChart3, Zap, Shield, Clock, Target, DollarSign } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import AnimatedCounter from '@/components/animated-counter'

export default function SMBSurroundAIPage() {
  return (
    <div className="min-h-screen pt-16">
      <section className="bg-gray-950 py-4 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <Link href="/use-cases" className="hover:text-purple-400 transition-colors">Use Cases</Link>
            <span>/</span>
            <Link href="/use-cases/smb" className="hover:text-purple-400 transition-colors">SMB</Link>
            <span>/</span>
            <span className="text-white">Surround AI</span>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Button asChild variant="outline" size="sm">
                <Link href="/use-cases/smb">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to SMB
                </Link>
              </Button>
            </div>
            
            <Badge className="mb-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-400 border-purple-500/30 flex items-center w-fit mx-auto">
              <Brain className="w-4 h-4 mr-2" />
              Surround AI for Small & Medium Business
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{ lineHeight: '1.8' }}>
              SMB <span className="gradient-text">Intelligence</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8" style={{ lineHeight: '1.8' }}>
              Empower small and medium businesses with enterprise-grade AI insights, competitive intelligence, and growth optimization tools—without needing a data science team.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600">
                <Link href="/contact?product=surround-ai&industry=smb">
                  Request Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/resources/surroundai-roi-calculator">
                  Calculate ROI
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/products/surround-ai">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mr-4">
                <Building2 className="w-6 h-6 text-red-400" />
              </div>
              <h2 className="text-3xl font-bold text-white">The SMB Intelligence Challenge</h2>
            </div>
            
            <div className="bg-slate-800/50 rounded-lg p-8 mb-8">
              <p className="text-lg text-gray-300 mb-6" style={{ lineHeight: '1.8' }}>
                SMBs often lack the resources to hire data analysts or implement complex AI solutions. As a result, they rely on intuition and limited data from a few sources. This makes it difficult for them to compete with larger businesses, as they can't accurately forecast sales, understand their most profitable customers, or optimize their operations.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-red-400">Resource Limitations</h3>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3"></div>
                    <p className="text-gray-300" style={{ lineHeight: '1.8' }}>Lack of resources to hire data analysts or data science teams</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3"></div>
                    <p className="text-gray-300" style={{ lineHeight: '1.8' }}>Cannot implement complex AI solutions like larger competitors</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3"></div>
                    <p className="text-gray-300" style={{ lineHeight: '1.8' }}>Rely on intuition and limited data from few sources</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-red-400">Competitive Disadvantages</h3>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3"></div>
                    <p className="text-gray-300" style={{ lineHeight: '1.8' }}>Difficulty competing with larger businesses that have advanced analytics</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3"></div>
                    <p className="text-gray-300" style={{ lineHeight: '1.8' }}>Cannot accurately forecast sales or understand customer profitability</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3"></div>
                    <p className="text-gray-300" style={{ lineHeight: '1.8' }}>Unable to optimize operations for maximum efficiency and growth</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">The Cost of Limited Business Intelligence</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-red-400 font-semibold">Sales Forecasting</div>
                  <div className="text-red-300 text-sm">Guesswork Based</div>
                </div>
                <div className="text-center">
                  <div className="text-red-400 font-semibold">Customer Insights</div>
                  <div className="text-red-300 text-sm">Very Limited</div>
                </div>
                <div className="text-center">
                  <div className="text-red-400 font-semibold">Marketing ROI</div>
                  <div className="text-red-300 text-sm">Unknown</div>
                </div>
                <div className="text-center">
                  <div className="text-red-400 font-semibold">Growth Strategy</div>
                  <div className="text-red-300 text-sm">Intuition Only</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4">
                <Brain className="w-6 h-6 text-purple-400" />
              </div>
              <h2 className="text-3xl font-bold text-white">The Surround AI Solution</h2>
            </div>
            
            <div className="bg-slate-700/50 rounded-lg p-8 mb-8">
              <p className="text-lg text-gray-300 mb-6" style={{ lineHeight: '1.8' }}>
                Surround AI is a simplified, powerful AI platform designed specifically for SMBs. It connects to your business's key data sources (e.g., e-commerce, CRM, accounting software) and automatically analyzes the information to provide actionable insights. It acts as a virtual business advisor, giving SMB owners the intelligence they need to make strategic decisions without needing a data science team.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-purple-900/20 p-6 rounded-lg border border-purple-500/30">
                  <div className="flex items-center mb-4">
                    <Target className="w-6 h-6 text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Automated Business Intelligence</h3>
                  </div>
                  <p className="text-gray-300 mb-4" style={{ lineHeight: '1.8' }}>
                    Connects to key data sources and automatically analyzes information to identify profitable customers, predict sales trends, and optimize marketing channels.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Customer profitability analysis</li>
                    <li>• Sales trend prediction</li>
                    <li>• Marketing channel optimization</li>
                  </ul>
                </div>
                
                <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-500/30">
                  <div className="flex items-center mb-4">
                    <DollarSign className="w-6 h-6 text-blue-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Virtual Business Advisor</h3>
                  </div>
                  <p className="text-gray-300 mb-4" style={{ lineHeight: '1.8' }}>
                    Acts as an intelligent business advisor providing strategic recommendations for growth, efficiency, and competitive advantage.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Strategic decision support</li>
                    <li>• Growth opportunity identification</li>
                    <li>• Competitive intelligence insights</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-700/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">SMB Intelligence Transformation</h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="bg-red-900/20 p-4 rounded-lg border border-red-500/30 flex-1">
                    <h4 className="text-lg font-semibold text-red-400 mb-2">Before: Limited Intelligence</h4>
                    <p className="text-sm text-gray-300">Limited Data → Guesswork & Intuition → Ineffective Decisions → Slow Growth</p>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <ArrowRight className="w-8 h-8 text-purple-400" />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-500/30 flex-1">
                    <h4 className="text-lg font-semibold text-purple-400 mb-2">After: AI-Powered Intelligence</h4>
                    <p className="text-sm text-gray-300">Automated Analysis → Actionable Insights → Informed Decisions → Increased Revenue & Efficient Growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">SMB Intelligence Capabilities</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-purple-400" />
                  </div>
                  <CardTitle className="text-white">Customer Intelligence</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300" style={{ lineHeight: '1.8' }}>
                    Identifies your most profitable customers, analyzes buying patterns, and predicts future customer behavior for targeted marketing.
                  </CardDescription>
                  <ul className="mt-4 space-y-2 text-sm text-gray-400">
                    <li>• Customer profitability ranking</li>
                    <li>• Buying pattern analysis</li>
                    <li>• Customer lifetime value prediction</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-blue-400" />
                  </div>
                  <CardTitle className="text-white">Sales Forecasting</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300" style={{ lineHeight: '1.8' }}>
                    Predicts future sales trends based on historical data, seasonal patterns, and market conditions for better planning.
                  </CardDescription>
                  <ul className="mt-4 space-y-2 text-sm text-gray-400">
                    <li>• Revenue forecasting</li>
                    <li>• Seasonal trend analysis</li>
                    <li>• Demand prediction</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-green-400" />
                  </div>
                  <CardTitle className="text-white">Marketing Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300" style={{ lineHeight: '1.8' }}>
                    Analyzes marketing channel effectiveness and recommends optimal budget allocation for maximum ROI.
                  </CardDescription>
                  <ul className="mt-4 space-y-2 text-sm text-gray-400">
                    <li>• Channel performance analysis</li>
                    <li>• Budget optimization</li>
                    <li>• Campaign effectiveness tracking</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-12">Expected SMB Outcomes</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-700/50 rounded-lg p-8">
                <div className="text-4xl font-bold text-purple-400 mb-2">
                  <AnimatedCounter end={10} suffix="%" />
                </div>
                <div className="text-lg font-semibold text-white mb-2">Revenue Increase</div>
                <div className="text-gray-400">Through targeted marketing and sales efforts</div>
              </div>
              
              <div className="bg-slate-700/50 rounded-lg p-8">
                <div className="text-4xl font-bold text-blue-400 mb-2">
                  <AnimatedCounter end={25} suffix="%" />
                </div>
                <div className="text-lg font-semibold text-white mb-2">Forecasting Accuracy</div>
                <div className="text-gray-400">Improved sales forecasting precision</div>
              </div>
              
              <div className="bg-slate-700/50 rounded-lg p-8">
                <div className="text-4xl font-bold text-green-400 mb-2">
                  <AnimatedCounter end={30} suffix="%" />
                </div>
                <div className="text-lg font-semibold text-white mb-2">Marketing Efficiency</div>
                <div className="text-gray-400">Reduced spend on ineffective campaigns</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">SMB Implementation Roadmap</h2>
            
            <div className="space-y-8">
              <div className="bg-slate-800/50 rounded-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-purple-400 font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Quick Setup & Integration (Week 1)</h3>
                </div>
                <p className="text-gray-300" style={{ lineHeight: '1.8' }}>
                  Connect Surround AI to your existing systems (e-commerce, CRM, accounting software) with simple, guided setup process designed for non-technical users.
                </p>
              </div>
              
              <div className="bg-slate-800/50 rounded-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-blue-400 font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Initial Analysis & Insights (Weeks 2-4)</h3>
                </div>
                <p className="text-gray-300" style={{ lineHeight: '1.8' }}>
                  Begin receiving customer profitability insights, sales forecasts, and marketing recommendations. Start optimizing based on initial AI-driven recommendations.
                </p>
              </div>
              
              <div className="bg-slate-800/50 rounded-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-green-400 font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Advanced Intelligence & Growth (Ongoing)</h3>
                </div>
                <p className="text-gray-300" style={{ lineHeight: '1.8' }}>
                  Leverage advanced predictive capabilities for strategic planning, competitive analysis, and growth acceleration with continuous AI learning and optimization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-purple-900 to-blue-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Compete with Enterprise Intelligence?</h2>
            <p className="text-xl text-gray-300 mb-8" style={{ lineHeight: '1.8' }}>
              Join thousands of SMBs using Surround AI to gain competitive advantage through enterprise-grade intelligence without the enterprise complexity or cost.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-purple-900 hover:bg-gray-100">
                <Link href="/contact?product=surround-ai&industry=smb">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple-900">
                <Link href="/resources/surroundai-roi-calculator">
                  Calculate ROI
                </Link>
              </Button>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline" size="sm" className="border-white/50 text-white/80 hover:bg-white/10">
                <Link href="/use-cases/smb/data-coffee">
                  Learn About Data Coffee
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm" className="border-white/50 text-white/80 hover:bg-white/10">
                <Link href="/use-cases/smb/complete-solution">
                  See Complete Solution
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

