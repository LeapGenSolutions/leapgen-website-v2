'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Brain, Database, Building2, TrendingUp, Users, BarChart3, Zap, Shield, Clock, Target, DollarSign, FileText, CheckCircle, Lightbulb } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import AnimatedCounter from '@/components/animated-counter'

export default function SMBCompleteSolutionPage() {
  return (
    <div className="min-h-screen pt-16">
      <section className="bg-gray-950 py-4 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <Link href="/use-cases" className="hover:text-purple-400 transition-colors">Use Cases</Link>
            <span>/</span>
            <Link href="/use-cases/smb" className="hover:text-purple-400 transition-colors">SMB</Link>
            <span>/</span>
            <span className="text-white">Complete Solution</span>
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
            
            <Badge className="mb-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-400 border-purple-500/30 flex items-center w-fit mx-auto">
              <Lightbulb className="w-4 h-4 mr-2" />
              Complete SMB Intelligence
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{ lineHeight: '1.8' }}>
              Complete SMB <span className="gradient-text">Growth Solution</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8" style={{ lineHeight: '1.8' }}>
              Combine Data Coffee and Surround AI for complete small and medium business intelligence, enabling data-driven growth at affordable pricing with unified data management and predictive insights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600">
                <Link href="/contact?product=complete-solution&industry=smb">
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
                <Link href="/products">
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
              <h2 className="text-3xl font-bold text-white">The Complete SMB Challenge</h2>
            </div>
            
            <div className="bg-slate-800/50 rounded-lg p-8 mb-8">
              <p className="text-lg text-gray-300 mb-6" style={{ lineHeight: '1.8' }}>
                SMBs face a dual challenge: their data is fragmented across multiple systems (spreadsheets, accounting software, e-commerce platforms) AND they lack the resources to extract meaningful insights from this data. They need both unified data management and intelligent analysis to compete effectively, but traditional solutions are too expensive and complex for small businesses.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-red-400">Data Management Problems</h3>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3"></div>
                    <p className="text-gray-300" style={{ lineHeight: '1.8' }}>Data scattered across multiple disconnected systems</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3"></div>
                    <p className="text-gray-300" style={{ lineHeight: '1.8' }}>Manual data entry and reconciliation consuming valuable time</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3"></div>
                    <p className="text-gray-300" style={{ lineHeight: '1.8' }}>Inconsistent and error-prone business reporting</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-red-400">Intelligence Gaps</h3>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3"></div>
                    <p className="text-gray-300" style={{ lineHeight: '1.8' }}>Lack of resources for data analysts or complex AI solutions</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3"></div>
                    <p className="text-gray-300" style={{ lineHeight: '1.8' }}>Relying on intuition instead of data-driven decisions</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3"></div>
                    <p className="text-gray-300" style={{ lineHeight: '1.8' }}>Missing opportunities for growth and optimization</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">The Cost of Fragmented SMB Operations</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-red-400 font-semibold">Data Quality</div>
                  <div className="text-red-300 text-sm">Error-Prone</div>
                </div>
                <div className="text-center">
                  <div className="text-red-400 font-semibold">Decision Making</div>
                  <div className="text-red-300 text-sm">Intuition-Based</div>
                </div>
                <div className="text-center">
                  <div className="text-red-400 font-semibold">Growth Potential</div>
                  <div className="text-red-300 text-sm">Limited</div>
                </div>
                <div className="text-center">
                  <div className="text-red-400 font-semibold">Competitive Edge</div>
                  <div className="text-red-300 text-sm">Disadvantaged</div>
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
                <Lightbulb className="w-6 h-6 text-purple-400" />
              </div>
              <h2 className="text-3xl font-bold text-white">The Complete SMB Solution</h2>
            </div>
            
            <div className="bg-slate-700/50 rounded-lg p-8 mb-8">
              <p className="text-lg text-gray-300 mb-6" style={{ lineHeight: '1.8' }}>
                The Complete SMB Solution combines Data Coffee's automated data management with Surround AI's intelligent analysis, creating a comprehensive business intelligence platform designed specifically for small and medium businesses. Data Coffee unifies and cleans all business data, while Surround AI transforms that clean data into actionable insights and predictions.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-orange-900/20 p-6 rounded-lg border border-orange-500/30">
                  <div className="flex items-center mb-4">
                    <Database className="w-6 h-6 text-orange-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Data Coffee Foundation</h3>
                  </div>
                  <p className="text-gray-300 mb-4" style={{ lineHeight: '1.8' }}>
                    Automatically connects, cleans, and unifies data from all business systems into a single, reliable source of truth.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Automated data integration</li>
                    <li>• Error detection and correction</li>
                    <li>• Unified business dashboard</li>
                  </ul>
                </div>
                
                <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-500/30">
                  <div className="flex items-center mb-4">
                    <Brain className="w-6 h-6 text-blue-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Surround AI Intelligence</h3>
                  </div>
                  <p className="text-gray-300 mb-4" style={{ lineHeight: '1.8' }}>
                    Transforms clean data into predictive insights, sales forecasting, and automated business recommendations.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Predictive analytics</li>
                    <li>• Sales forecasting</li>
                    <li>• Automated recommendations</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-700/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Complete SMB Transformation</h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="bg-red-900/20 p-4 rounded-lg border border-red-500/30 flex-1">
                    <h4 className="text-lg font-semibold text-red-400 mb-2">Before: Fragmented Operations</h4>
                    <p className="text-sm text-gray-300">Disconnected Data + Manual Processes + Intuition-Based Decisions → Limited Growth & Competitive Disadvantage</p>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <ArrowRight className="w-8 h-8 text-purple-400" />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-500/30 flex-1">
                    <h4 className="text-lg font-semibold text-purple-400 mb-2">After: Unified Intelligence</h4>
                    <p className="text-sm text-gray-300">Unified Data + Automated Insights + Data-Driven Decisions → Accelerated Growth & Competitive Advantage</p>
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
            <h2 className="text-3xl font-bold text-white text-center mb-12">Complete SMB Intelligence Capabilities</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Database className="w-6 h-6 text-orange-400" />
                  </div>
                  <CardTitle className="text-white">Unified Data Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300" style={{ lineHeight: '1.8' }}>
                    Automatically connects and cleans data from QuickBooks, Shopify, Mailchimp, and other SMB systems.
                  </CardDescription>
                  <ul className="mt-4 space-y-2 text-sm text-gray-400">
                    <li>• Automated data integration</li>
                    <li>• Error detection and correction</li>
                    <li>• Single source of truth</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Brain className="w-6 h-6 text-blue-400" />
                  </div>
                  <CardTitle className="text-white">Predictive Intelligence</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300" style={{ lineHeight: '1.8' }}>
                    Transforms clean data into sales forecasts, customer insights, and growth recommendations.
                  </CardDescription>
                  <ul className="mt-4 space-y-2 text-sm text-gray-400">
                    <li>• Sales forecasting</li>
                    <li>• Customer behavior analysis</li>
                    <li>• Growth recommendations</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-green-400" />
                  </div>
                  <CardTitle className="text-white">Business Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300" style={{ lineHeight: '1.8' }}>
                    Automated recommendations for marketing optimization, inventory management, and operational efficiency.
                  </CardDescription>
                  <ul className="mt-4 space-y-2 text-sm text-gray-400">
                    <li>• Marketing optimization</li>
                    <li>• Inventory management</li>
                    <li>• Operational efficiency</li>
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
            <h2 className="text-3xl font-bold text-white mb-12">Expected Complete Solution Outcomes</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-700/50 rounded-lg p-8">
                <div className="text-4xl font-bold text-purple-400 mb-2">
                  <AnimatedCounter end={20} suffix="%" />
                </div>
                <div className="text-lg font-semibold text-white mb-2">Revenue Growth</div>
                <div className="text-gray-400">Combined data management and predictive insights</div>
              </div>
              
              <div className="bg-slate-700/50 rounded-lg p-8">
                <div className="text-4xl font-bold text-blue-400 mb-2">
                  <AnimatedCounter end={40} suffix="%" />
                </div>
                <div className="text-lg font-semibold text-white mb-2">Operational Efficiency</div>
                <div className="text-gray-400">Automated data management and intelligent optimization</div>
              </div>
              
              <div className="bg-slate-700/50 rounded-lg p-8">
                <div className="text-4xl font-bold text-green-400 mb-2">
                  <AnimatedCounter end={15} suffix=" hrs" />
                </div>
                <div className="text-lg font-semibold text-white mb-2">Weekly Time Savings</div>
                <div className="text-gray-400">Eliminated manual work and automated insights</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Complete Solution Implementation Roadmap</h2>
            
            <div className="space-y-8">
              <div className="bg-slate-800/50 rounded-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-orange-400 font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Data Foundation Setup (Weeks 1-2)</h3>
                </div>
                <p className="text-gray-300" style={{ lineHeight: '1.8' }}>
                  Deploy Data Coffee to connect and unify all business systems. Automated data cleansing begins, creating a single source of truth for all business information.
                </p>
              </div>
              
              <div className="bg-slate-800/50 rounded-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-blue-400 font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Intelligence Layer Activation (Weeks 3-4)</h3>
                </div>
                <p className="text-gray-300" style={{ lineHeight: '1.8' }}>
                  Activate Surround AI to begin analyzing clean data. Initial predictive models and business insights become available with automated recommendations.
                </p>
              </div>
              
              <div className="bg-slate-800/50 rounded-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-purple-400 font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Optimization & Growth (Week 5+)</h3>
                </div>
                <p className="text-gray-300" style={{ lineHeight: '1.8' }}>
                  Continuous optimization with advanced predictive analytics, automated business recommendations, and data-driven growth strategies for sustained competitive advantage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-purple-900 to-pink-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your SMB?</h2>
            <p className="text-xl text-gray-300 mb-8" style={{ lineHeight: '1.8' }}>
              Join thousands of SMBs using the Complete Solution to unify data management, gain predictive insights, and accelerate growth with affordable, enterprise-grade intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-purple-900 hover:bg-gray-100">
                <Link href="/contact?product=complete-solution&industry=smb">
                  Start Complete Solution
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
                <Link href="/use-cases/smb/surround-ai">
                  Learn About Surround AI
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm" className="border-white/50 text-white/80 hover:bg-white/10">
                <Link href="/use-cases/smb/data-coffee">
                  Learn About Data Coffee
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

