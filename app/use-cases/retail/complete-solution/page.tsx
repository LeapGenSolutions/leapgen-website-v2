'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Layers, ShoppingCart, Database, Brain, TrendingUp, Users, BarChart3, Target, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import AnimatedCounter from '@/components/animated-counter'

export default function CompleteSolutionRetailPage() {
  return (
    <div className="min-h-screen pt-16">
      <section className="bg-gray-950 py-4 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <Link href="/use-cases" className="hover:text-purple-400 transition-colors">Use Cases</Link>
            <span>/</span>
            <Link href="/use-cases/retail" className="hover:text-purple-400 transition-colors">Retail</Link>
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
                <Link href="/use-cases/retail">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Retail
                </Link>
              </Button>
            </div>
            
            <Badge className="mb-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-400 border-purple-500/30 flex items-center w-fit mx-auto">
              <Layers className="w-4 h-4 mr-2" />
              Complete Retail Intelligence
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{ lineHeight: '1.8' }}>
              Complete Retail <span className="gradient-text">Transformation</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8" style={{ lineHeight: '1.8' }}>
              Combine Data Coffee and Surround AI for end-to-end retail intelligence - from unified data preparation to AI-powered customer insights and business optimization.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600">
                <Link href="/contact?product=complete-solution&industry=retail">
                  Request Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/resources/surroundai-roi-calculator">
                  Calculate ROI
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
                <Target className="w-6 h-6 text-red-400" />
              </div>
              <h2 className="text-3xl font-bold text-white">The Complete Retail Challenge</h2>
            </div>
            
            <div className="bg-slate-800/50 rounded-lg p-8 mb-8">
              <p className="text-lg text-gray-300 mb-6" style={{ lineHeight: '1.8' }}>
                Retail businesses face the dual challenge of fragmented data across multiple systems AND the inability to extract actionable insights from that data. They need both unified data preparation and advanced AI analytics to compete effectively in today's market.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-red-400">Data Integration Challenges</h3>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3"></div>
                    <p className="text-gray-300" style={{ lineHeight: '1.8' }}>Siloed data across POS, e-commerce, inventory, and CRM systems</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3"></div>
                    <p className="text-gray-300" style={{ lineHeight: '1.8' }}>Inconsistent data formats and quality issues</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3"></div>
                    <p className="text-gray-300" style={{ lineHeight: '1.8' }}>Manual data reconciliation processes</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-red-400">Intelligence & Analytics Gaps</h3>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3"></div>
                    <p className="text-gray-300" style={{ lineHeight: '1.8' }}>Inability to predict customer behavior and preferences</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3"></div>
                    <p className="text-gray-300" style={{ lineHeight: '1.8' }}>Reactive inventory management and pricing strategies</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3"></div>
                    <p className="text-gray-300" style={{ lineHeight: '1.8' }}>Generic customer experiences and missed personalization opportunities</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">The Cost of Incomplete Retail Intelligence</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-red-400 font-semibold">Revenue Loss</div>
                  <div className="text-red-300 text-sm">High</div>
                </div>
                <div className="text-center">
                  <div className="text-red-400 font-semibold">Operational Inefficiency</div>
                  <div className="text-red-300 text-sm">Critical</div>
                </div>
                <div className="text-center">
                  <div className="text-red-400 font-semibold">Customer Churn</div>
                  <div className="text-red-300 text-sm">High</div>
                </div>
                <div className="text-center">
                  <div className="text-red-400 font-semibold">Competitive Disadvantage</div>
                  <div className="text-red-300 text-sm">Critical</div>
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
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-4">
                <Zap className="w-6 h-6 text-green-400" />
              </div>
              <h2 className="text-3xl font-bold text-white">The Complete Retail Solution</h2>
            </div>
            
            <div className="bg-slate-700/50 rounded-lg p-8 mb-8">
              <p className="text-lg text-gray-300 mb-6" style={{ lineHeight: '1.8' }}>
                The complete retail transformation combines Data Coffee's unified data preparation with Surround AI's advanced analytics to create a comprehensive intelligence platform that transforms raw data into actionable business insights.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-500/30">
                  <div className="flex items-center mb-4">
                    <Database className="w-8 h-8 text-blue-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Data Coffee Foundation</h3>
                  </div>
                  <p className="text-gray-300 mb-4" style={{ lineHeight: '1.8' }}>
                    Unifies and prepares data from all retail touchpoints - POS systems, e-commerce platforms, inventory management, customer service, and marketing channels.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Automated data integration and cleansing</li>
                    <li>• Real-time data synchronization</li>
                    <li>• Unified customer and product records</li>
                    <li>• Data quality monitoring and governance</li>
                  </ul>
                </div>
                
                <div className="bg-purple-900/20 p-6 rounded-lg border border-purple-500/30">
                  <div className="flex items-center mb-4">
                    <Brain className="w-8 h-8 text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Surround AI Intelligence</h3>
                  </div>
                  <p className="text-gray-300 mb-4" style={{ lineHeight: '1.8' }}>
                    Analyzes the unified data to predict customer behavior, optimize operations, and deliver personalized experiences at scale.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Predictive customer analytics</li>
                    <li>• Dynamic pricing optimization</li>
                    <li>• Personalized recommendations</li>
                    <li>• Inventory demand forecasting</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-700/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Complete Retail Transformation Flow</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-500/30 mb-4">
                    <Database className="w-12 h-12 text-blue-400 mx-auto mb-3" />
                    <h4 className="text-lg font-semibold text-white mb-2">Data Coffee</h4>
                    <p className="text-sm text-gray-300">Unifies fragmented retail data into a single, clean, real-time data foundation</p>
                  </div>
                  <div className="text-blue-400 font-semibold">Foundation Layer</div>
                </div>
                
                <div className="flex justify-center items-center">
                  <ArrowRight className="w-8 h-8 text-gray-400" />
                </div>
                
                <div className="text-center">
                  <div className="bg-purple-900/20 p-6 rounded-lg border border-purple-500/30 mb-4">
                    <Brain className="w-12 h-12 text-purple-400 mx-auto mb-3" />
                    <h4 className="text-lg font-semibold text-white mb-2">Surround AI</h4>
                    <p className="text-sm text-gray-300">Transforms unified data into predictive insights and automated actions</p>
                  </div>
                  <div className="text-purple-400 font-semibold">Intelligence Layer</div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <div className="bg-green-900/20 p-6 rounded-lg border border-green-500/30">
                  <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-3" />
                  <h4 className="text-lg font-semibold text-white mb-2">Business Results</h4>
                  <p className="text-gray-300">Increased revenue, reduced costs, improved customer satisfaction, and competitive advantage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Complete Solution Capabilities</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-blue-400" />
                  </div>
                  <CardTitle className="text-white">360° Customer Intelligence</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300" style={{ lineHeight: '1.8' }}>
                    Complete customer view combining transaction history, browsing behavior, preferences, and predictive lifetime value for hyper-personalized experiences.
                  </CardDescription>
                  <ul className="mt-4 space-y-2 text-sm text-gray-400">
                    <li>• Unified customer profiles</li>
                    <li>• Behavioral prediction models</li>
                    <li>• Real-time personalization</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-purple-400" />
                  </div>
                  <CardTitle className="text-white">Intelligent Operations</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300" style={{ lineHeight: '1.8' }}>
                    Automated inventory optimization, dynamic pricing, and supply chain intelligence powered by unified data and predictive analytics.
                  </CardDescription>
                  <ul className="mt-4 space-y-2 text-sm text-gray-400">
                    <li>• Demand forecasting</li>
                    <li>• Automated replenishment</li>
                    <li>• Price optimization</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-green-400" />
                  </div>
                  <CardTitle className="text-white">Revenue Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300" style={{ lineHeight: '1.8' }}>
                    Maximize revenue through intelligent cross-selling, upselling, and customer retention strategies based on comprehensive data insights.
                  </CardDescription>
                  <ul className="mt-4 space-y-2 text-sm text-gray-400">
                    <li>• Cross-sell optimization</li>
                    <li>• Churn prevention</li>
                    <li>• Loyalty program intelligence</li>
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
            <h2 className="text-3xl font-bold text-white mb-12">Complete Solution Results</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-700/50 rounded-lg p-8">
                <div className="text-4xl font-bold text-green-400 mb-2">
                  <AnimatedCounter end={45} suffix="%" />
                </div>
                <div className="text-lg font-semibold text-white mb-2">Revenue Increase</div>
                <div className="text-gray-400">Through combined data unification and AI-powered optimization</div>
              </div>
              
              <div className="bg-slate-700/50 rounded-lg p-8">
                <div className="text-4xl font-bold text-blue-400 mb-2">
                  <AnimatedCounter end={60} suffix="%" />
                </div>
                <div className="text-lg font-semibold text-white mb-2">Operational Efficiency</div>
                <div className="text-gray-400">Automated processes and intelligent decision-making</div>
              </div>
              
              <div className="bg-slate-700/50 rounded-lg p-8">
                <div className="text-4xl font-bold text-purple-400 mb-2">
                  <AnimatedCounter end={55} suffix="%" />
                </div>
                <div className="text-lg font-semibold text-white mb-2">Customer Satisfaction</div>
                <div className="text-gray-400">Personalized experiences and improved service quality</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Implementation Roadmap</h2>
            
            <div className="space-y-8">
              <div className="bg-slate-800/50 rounded-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-blue-400 font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Data Foundation (Weeks 1-4)</h3>
                </div>
                <p className="text-gray-300" style={{ lineHeight: '1.8' }}>
                  Deploy Data Coffee to integrate and unify data from all retail systems. Establish data quality standards, implement real-time synchronization, and create unified customer and product records. This foundation ensures clean, consistent data for AI analysis.
                </p>
              </div>
              
              <div className="bg-slate-800/50 rounded-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-purple-400 font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">AI Intelligence Layer (Weeks 5-8)</h3>
                </div>
                <p className="text-gray-300" style={{ lineHeight: '1.8' }}>
                  Implement Surround AI to analyze the unified data and generate predictive insights. Deploy customer behavior models, demand forecasting algorithms, and personalization engines. Begin with pilot programs for key use cases.
                </p>
              </div>
              
              <div className="bg-slate-800/50 rounded-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-green-400 font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Full Optimization (Weeks 9-12)</h3>
                </div>
                <p className="text-gray-300" style={{ lineHeight: '1.8' }}>
                  Scale the complete solution across all retail operations. Implement automated decision-making, real-time personalization, and continuous optimization. Monitor performance and refine algorithms based on business outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-purple-900 to-blue-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Ready for Complete Retail Transformation?</h2>
            <p className="text-xl text-gray-300 mb-8" style={{ lineHeight: '1.8' }}>
              Join leading retailers using the complete Data Coffee + Surround AI solution to achieve unprecedented levels of customer intelligence and business optimization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-purple-900 hover:bg-gray-100">
                <Link href="/contact?product=complete-solution&industry=retail">
                  Schedule Complete Solution Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple-900">
                <Link href="/resources/surroundai-roi-calculator">
                  Calculate Complete ROI
                </Link>
              </Button>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline" size="sm" className="border-white/50 text-white/80 hover:bg-white/10">
                <Link href="/use-cases/retail/data-coffee">
                  Learn About Data Coffee
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm" className="border-white/50 text-white/80 hover:bg-white/10">
                <Link href="/use-cases/retail/surround-ai">
                  Learn About Surround AI
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

