'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Brain, Building2, TrendingUp, Users, BarChart3, Zap, Shield, Clock, Database, Target } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import AnimatedCounter from '@/components/animated-counter'

export default function EnterpriseSurroundAIPage() {
  return (
    <div className="min-h-screen pt-16">
      <section className="bg-gray-950 py-4 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <Link href="/use-cases" className="hover:text-purple-400 transition-colors">Use Cases</Link>
            <span>/</span>
            <Link href="/use-cases/enterprise" className="hover:text-purple-400 transition-colors">Enterprise</Link>
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
                <Link href="/use-cases/enterprise">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Enterprise
                </Link>
              </Button>
            </div>
            
            <Badge className="mb-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-400 border-purple-500/30 flex items-center w-fit mx-auto">
              <Brain className="w-4 h-4 mr-2" />
              Surround AI for Enterprise
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{ lineHeight: '1.8' }}>
              Enterprise-Scale <span className="gradient-text">Intelligence</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8" style={{ lineHeight: '1.8' }}>
              Transform your enterprise with AI-powered insights that break down departmental silos, accelerate decision-making, and drive enterprise-wide innovation through unified intelligence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600">
                <Link href="/contact?product=surround-ai&industry=enterprise">
                  Request Enterprise Demo
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
              <h2 className="text-3xl font-bold text-white">The Enterprise Intelligence Challenge</h2>
            </div>
            
            <div className="bg-slate-800/50 rounded-lg p-8 mb-8">
              <p className="text-lg text-gray-300 mb-6" style={{ lineHeight: '1.8' }}>
                Large enterprises struggle with vast amounts of siloed data, making it difficult to get a single, accurate view of their operations, customers, and markets. This results in slow decision-making, a lack of collaboration between departments, and an inability to capitalize on emerging opportunities.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-red-400">Data Silos & Fragmentation</h3>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3"></div>
                    <p className="text-gray-300" style={{ lineHeight: '1.8' }}>Vast amounts of siloed data across sales, marketing, HR, supply chain, and finance</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3"></div>
                    <p className="text-gray-300" style={{ lineHeight: '1.8' }}>Difficulty getting a single, accurate view of operations and customers</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3"></div>
                    <p className="text-gray-300" style={{ lineHeight: '1.8' }}>Lack of collaboration between departments due to data isolation</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-red-400">Strategic Impact</h3>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3"></div>
                    <p className="text-gray-300" style={{ lineHeight: '1.8' }}>Slow decision-making due to incomplete or fragmented information</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3"></div>
                    <p className="text-gray-300" style={{ lineHeight: '1.8' }}>Inability to capitalize on emerging market opportunities</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3"></div>
                    <p className="text-gray-300" style={{ lineHeight: '1.8' }}>Missed opportunities for enterprise-wide innovation and growth</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">The Cost of Fragmented Enterprise Data</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-red-400 font-semibold">Decision Speed</div>
                  <div className="text-red-300 text-sm">Severely Delayed</div>
                </div>
                <div className="text-center">
                  <div className="text-red-400 font-semibold">Market Response</div>
                  <div className="text-red-300 text-sm">Too Slow</div>
                </div>
                <div className="text-center">
                  <div className="text-red-400 font-semibold">Innovation</div>
                  <div className="text-red-300 text-sm">Severely Limited</div>
                </div>
                <div className="text-center">
                  <div className="text-red-400 font-semibold">Collaboration</div>
                  <div className="text-red-300 text-sm">Departmental Silos</div>
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
                Surround AI transforms your enterprise by creating dynamic, real-time models that provide executives with a complete picture of the business. From granular customer sentiment analysis to high-level market trend forecasting, it empowers leaders to make faster, more informed decisions, break down departmental silos, and drive enterprise-wide innovation.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-purple-900/20 p-6 rounded-lg border border-purple-500/30">
                  <div className="flex items-center mb-4">
                    <Database className="w-6 h-6 text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Unified Intelligence Platform</h3>
                  </div>
                  <p className="text-gray-300 mb-4" style={{ lineHeight: '1.8' }}>
                    Analyzes data from every part of the enterprise—sales, marketing, HR, supply chain, and finance—to create comprehensive business intelligence.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Cross-departmental data analysis</li>
                    <li>• Real-time business modeling</li>
                    <li>• Unified enterprise view</li>
                  </ul>
                </div>
                
                <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-500/30">
                  <div className="flex items-center mb-4">
                    <Target className="w-6 h-6 text-blue-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Predictive Market Intelligence</h3>
                  </div>
                  <p className="text-gray-300 mb-4" style={{ lineHeight: '1.8' }}>
                    Provides executives with granular customer insights and high-level market trend forecasts for strategic decision-making.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Customer sentiment analysis</li>
                    <li>• Market trend forecasting</li>
                    <li>• Strategic opportunity identification</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-700/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Enterprise Intelligence Transformation</h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="bg-red-900/20 p-4 rounded-lg border border-red-500/30 flex-1">
                    <h4 className="text-lg font-semibold text-red-400 mb-2">Before: Fragmented Enterprise</h4>
                    <p className="text-sm text-gray-300">Siloed Data → Slow Decisions → Missed Opportunities → Limited Innovation</p>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <ArrowRight className="w-8 h-8 text-purple-400" />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-500/30 flex-1">
                    <h4 className="text-lg font-semibold text-purple-400 mb-2">After: Unified Intelligence</h4>
                    <p className="text-sm text-gray-300">Unified Data → Real-time Insights → Fast Decisions → Enterprise Innovation</p>
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
            <h2 className="text-3xl font-bold text-white text-center mb-12">Enterprise Intelligence Capabilities</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Brain className="w-6 h-6 text-purple-400" />
                  </div>
                  <CardTitle className="text-white">Dynamic Business Modeling</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300" style={{ lineHeight: '1.8' }}>
                    Creates real-time models of business operations, customer behavior, and market dynamics for comprehensive enterprise intelligence.
                  </CardDescription>
                  <ul className="mt-4 space-y-2 text-sm text-gray-400">
                    <li>• Real-time operational modeling</li>
                    <li>• Customer behavior analysis</li>
                    <li>• Market dynamics tracking</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-blue-400" />
                  </div>
                  <CardTitle className="text-white">Strategic Forecasting</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300" style={{ lineHeight: '1.8' }}>
                    Provides high-level market trend forecasts and strategic insights to help executives make informed decisions about future opportunities.
                  </CardDescription>
                  <ul className="mt-4 space-y-2 text-sm text-gray-400">
                    <li>• Market trend analysis</li>
                    <li>• Strategic opportunity identification</li>
                    <li>• Risk assessment and mitigation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-green-400" />
                  </div>
                  <CardTitle className="text-white">Cross-Departmental Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300" style={{ lineHeight: '1.8' }}>
                    Breaks down departmental silos by providing unified insights that enable collaboration and enterprise-wide innovation.
                  </CardDescription>
                  <ul className="mt-4 space-y-2 text-sm text-gray-400">
                    <li>• Unified departmental view</li>
                    <li>• Collaborative intelligence</li>
                    <li>• Innovation acceleration</li>
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
            <h2 className="text-3xl font-bold text-white mb-12">Expected Enterprise Outcomes</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-700/50 rounded-lg p-8">
                <div className="text-4xl font-bold text-purple-400 mb-2">
                  <AnimatedCounter end={50} suffix="%" />
                </div>
                <div className="text-lg font-semibold text-white mb-2">Decision Speed Enhancement</div>
                <div className="text-gray-400">Faster strategic decisions with unified intelligence</div>
              </div>
              
              <div className="bg-slate-700/50 rounded-lg p-8">
                <div className="text-4xl font-bold text-blue-400 mb-2">
                  <AnimatedCounter end={15} suffix="%" />
                </div>
                <div className="text-lg font-semibold text-white mb-2">Operational Cost Reduction</div>
                <div className="text-gray-400">Lower costs through improved efficiency</div>
              </div>
              
              <div className="bg-slate-700/50 rounded-lg p-8">
                <div className="text-4xl font-bold text-green-400 mb-2">
                  <AnimatedCounter end={80} suffix="%" />
                </div>
                <div className="text-lg font-semibold text-white mb-2">Collaboration Improvement</div>
                <div className="text-gray-400">Enhanced cross-departmental insights sharing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Enterprise Implementation Roadmap</h2>
            
            <div className="space-y-8">
              <div className="bg-slate-800/50 rounded-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-purple-400 font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Discovery & Assessment (Weeks 1-4)</h3>
                </div>
                <p className="text-gray-300" style={{ lineHeight: '1.8' }}>
                  Comprehensive analysis of existing data sources, departmental workflows, and strategic objectives. Identify key integration points and establish baseline metrics for measuring success.
                </p>
              </div>
              
              <div className="bg-slate-800/50 rounded-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-blue-400 font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Pilot Deployment (Weeks 5-12)</h3>
                </div>
                <p className="text-gray-300" style={{ lineHeight: '1.8' }}>
                  Deploy Surround AI across 2-3 key departments to demonstrate value and refine integration processes. Build initial models and establish cross-departmental insights capabilities.
                </p>
              </div>
              
              <div className="bg-slate-800/50 rounded-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-green-400 font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Enterprise Rollout (Weeks 13-24)</h3>
                </div>
                <p className="text-gray-300" style={{ lineHeight: '1.8' }}>
                  Scale across all enterprise departments with full unified intelligence capabilities. Implement advanced forecasting models, strategic dashboards, and innovation acceleration processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-purple-900 to-blue-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Enterprise?</h2>
            <p className="text-xl text-gray-300 mb-8" style={{ lineHeight: '1.8' }}>
              Join Fortune 500 companies using Surround AI to break down data silos, accelerate decision-making, and drive enterprise-wide innovation through unified intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-purple-900 hover:bg-gray-100">
                <Link href="/contact?product=surround-ai&industry=enterprise">
                  Schedule Enterprise Demo
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
                <Link href="/use-cases/enterprise/data-coffee">
                  Learn About Data Coffee
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm" className="border-white/50 text-white/80 hover:bg-white/10">
                <Link href="/use-cases/enterprise/complete-solution">
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

