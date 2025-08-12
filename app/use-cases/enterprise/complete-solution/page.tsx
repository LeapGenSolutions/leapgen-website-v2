'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Layers, Building2, TrendingUp, Users, BarChart3, Zap, Shield, Clock, Database, Brain } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import AnimatedCounter from '@/components/animated-counter'

export default function EnterpriseCompleteSolutionPage() {
  return (
    <div className="min-h-screen pt-16">
      <section className="bg-gray-950 py-4 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <Link href="/use-cases" className="hover:text-purple-400 transition-colors">Use Cases</Link>
            <span>/</span>
            <Link href="/use-cases/enterprise" className="hover:text-purple-400 transition-colors">Enterprise</Link>
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
                <Link href="/use-cases/enterprise">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Enterprise
                </Link>
              </Button>
            </div>
            
            <Badge className="mb-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-400 border-purple-500/30 flex items-center w-fit mx-auto">
              <Layers className="w-4 h-4 mr-2" />
              Complete Enterprise Intelligence
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{ lineHeight: '1.8' }}>
              Total Enterprise <span className="gradient-text">Transformation</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8" style={{ lineHeight: '1.8' }}>
              Combine Data Coffee and Surround AI to create the ultimate enterprise intelligence platform that unifies all data sources and delivers AI-powered insights for strategic decision-making.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600">
                <Link href="/contact?product=complete-solution&industry=enterprise">
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
              <h2 className="text-3xl font-bold text-white">The Complete Enterprise Challenge</h2>
            </div>
            
            <div className="bg-slate-800/50 rounded-lg p-8 mb-8">
              <p className="text-lg text-gray-300 mb-6" style={{ lineHeight: '1.8' }}>
                Large enterprises struggle with vast amounts of siloed data, making it difficult to get a single, accurate view of their operations, customers, and markets. This results in slow decision-making, a lack of collaboration between departments, and an inability to capitalize on emerging opportunities.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-red-400">Data & Intelligence Gaps</h3>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3"></div>
                    <p className="text-gray-300" style={{ lineHeight: '1.8' }}>Fragmented data across sales, marketing, HR, supply chain, and finance systems</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3"></div>
                    <p className="text-gray-300" style={{ lineHeight: '1.8' }}>Lack of real-time insights and predictive analytics capabilities</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3"></div>
                    <p className="text-gray-300" style={{ lineHeight: '1.8' }}>Manual processes consuming valuable executive time and resources</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-red-400">Strategic Impact</h3>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3"></div>
                    <p className="text-gray-300" style={{ lineHeight: '1.8' }}>Delayed strategic decisions due to incomplete information</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3"></div>
                    <p className="text-gray-300" style={{ lineHeight: '1.8' }}>Missed market opportunities from lack of real-time intelligence</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3"></div>
                    <p className="text-gray-300" style={{ lineHeight: '1.8' }}>Departmental silos preventing enterprise-wide innovation</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">The Cost of Fragmented Enterprise Intelligence</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-red-400 font-semibold">Decision Speed</div>
                  <div className="text-red-300 text-sm">Severely Delayed</div>
                </div>
                <div className="text-center">
                  <div className="text-red-400 font-semibold">Operational Costs</div>
                  <div className="text-red-300 text-sm">Significantly Higher</div>
                </div>
                <div className="text-center">
                  <div className="text-red-400 font-semibold">Innovation</div>
                  <div className="text-red-300 text-sm">Severely Limited</div>
                </div>
                <div className="text-center">
                  <div className="text-red-400 font-semibold">Market Response</div>
                  <div className="text-red-300 text-sm">Too Slow</div>
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
                <Layers className="w-6 h-6 text-purple-400" />
              </div>
              <h2 className="text-3xl font-bold text-white">The Complete Enterprise Solution</h2>
            </div>
            
            <div className="bg-slate-700/50 rounded-lg p-8 mb-8">
              <p className="text-lg text-gray-300 mb-6" style={{ lineHeight: '1.8' }}>
                Data Coffee acts as the central intelligence layer, ingesting and normalizing data from every part of the enterprise—sales, marketing, HR, supply chain, and finance. It creates a "single source of truth" by intelligently cleaning and consolidating all this information. Surround AI then builds dynamic, real-time models on this unified data. It provides executives with a complete picture of the business, from a granular view of customer sentiment to a high-level forecast of market trends. This empowers leaders to make faster, more informed decisions, break down departmental silos, and drive enterprise-wide innovation.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-500/30">
                  <div className="flex items-center mb-4">
                    <Database className="w-6 h-6 text-blue-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Data Coffee Foundation</h3>
                  </div>
                  <p className="text-gray-300 mb-4" style={{ lineHeight: '1.8' }}>
                    Creates the unified data foundation by automatically connecting, cleaning, and consolidating all enterprise data sources into a single source of truth.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Universal system integration (ERP, CRM, HR, Finance)</li>
                    <li>• Intelligent data cleansing and standardization</li>
                    <li>• Real-time data synchronization</li>
                  </ul>
                </div>
                
                <div className="bg-purple-900/20 p-6 rounded-lg border border-purple-500/30">
                  <div className="flex items-center mb-4">
                    <Brain className="w-6 h-6 text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Surround AI Intelligence</h3>
                  </div>
                  <p className="text-gray-300 mb-4" style={{ lineHeight: '1.8' }}>
                    Transforms the unified data into dynamic, real-time business intelligence with predictive analytics and strategic insights.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Real-time business modeling and forecasting</li>
                    <li>• Predictive market trend analysis</li>
                    <li>• Executive dashboard and strategic insights</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-700/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Complete Enterprise Transformation Flow</h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="bg-red-900/20 p-4 rounded-lg border border-red-500/30 flex-1">
                    <h4 className="text-lg font-semibold text-red-400 mb-2">Before: Fragmented Enterprise</h4>
                    <p className="text-sm text-gray-300">Siloed Data → Manual Analysis → Delayed Decisions → Missed Opportunities</p>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <ArrowRight className="w-8 h-8 text-purple-400" />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-500/30 flex-1">
                    <h4 className="text-lg font-semibold text-purple-400 mb-2">After: Unified Intelligence</h4>
                    <p className="text-sm text-gray-300">Data Coffee Unification → Surround AI Analysis → Real-time Insights → Strategic Innovation</p>
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
            <h2 className="text-3xl font-bold text-white text-center mb-12">Complete Solution Capabilities</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Database className="w-6 h-6 text-blue-400" />
                  </div>
                  <CardTitle className="text-white">360° Data Unification</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300" style={{ lineHeight: '1.8' }}>
                    Complete integration of all enterprise data sources with intelligent cleansing, standardization, and real-time synchronization across departments.
                  </CardDescription>
                  <ul className="mt-4 space-y-2 text-sm text-gray-400">
                    <li>• All enterprise systems connected</li>
                    <li>• Automated data quality assurance</li>
                    <li>• Single source of truth established</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Brain className="w-6 h-6 text-purple-400" />
                  </div>
                  <CardTitle className="text-white">AI-Powered Intelligence</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300" style={{ lineHeight: '1.8' }}>
                    Advanced AI models that transform unified data into predictive insights, market forecasts, and strategic recommendations for executive decision-making.
                  </CardDescription>
                  <ul className="mt-4 space-y-2 text-sm text-gray-400">
                    <li>• Real-time business modeling</li>
                    <li>• Predictive market analysis</li>
                    <li>• Strategic recommendation engine</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-green-400" />
                  </div>
                  <CardTitle className="text-white">Enterprise Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300" style={{ lineHeight: '1.8' }}>
                    Break down departmental silos and enable enterprise-wide innovation through shared insights, collaborative intelligence, and unified strategic vision.
                  </CardDescription>
                  <ul className="mt-4 space-y-2 text-sm text-gray-400">
                    <li>• Cross-departmental insights</li>
                    <li>• Collaborative intelligence platform</li>
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
            <h2 className="text-3xl font-bold text-white mb-12">Complete Solution Results</h2>
            
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
            <h2 className="text-3xl font-bold text-white mb-8">Complete Solution Implementation</h2>
            
            <div className="space-y-8">
              <div className="bg-slate-800/50 rounded-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-blue-400 font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Foundation Phase (Weeks 1-4)</h3>
                </div>
                <p className="text-gray-300" style={{ lineHeight: '1.8' }}>
                  Deploy Data Coffee to establish the unified data foundation. Connect all enterprise systems, implement data cleansing and standardization processes, and create the single source of truth that will power AI intelligence.
                </p>
              </div>
              
              <div className="bg-slate-800/50 rounded-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-purple-400 font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Intelligence Phase (Weeks 5-12)</h3>
                </div>
                <p className="text-gray-300" style={{ lineHeight: '1.8' }}>
                  Implement Surround AI on the unified data foundation. Deploy real-time business modeling, predictive analytics, and executive dashboards. Train AI models on enterprise-specific patterns and requirements.
                </p>
              </div>
              
              <div className="bg-slate-800/50 rounded-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-green-400 font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Optimization Phase (Weeks 13-20)</h3>
                </div>
                <p className="text-gray-300" style={{ lineHeight: '1.8' }}>
                  Fine-tune the complete solution for maximum enterprise impact. Optimize AI models, expand insights capabilities, and establish ongoing innovation processes. Train teams and implement governance frameworks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-purple-900 to-blue-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Ready for Complete Enterprise Transformation?</h2>
            <p className="text-xl text-gray-300 mb-8" style={{ lineHeight: '1.8' }}>
              Join Fortune 500 companies using the complete Data Coffee + Surround AI solution to transform fragmented operations into unified, intelligent enterprises that drive innovation and strategic success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-purple-900 hover:bg-gray-100">
                <Link href="/contact?product=complete-solution&industry=enterprise">
                  Schedule Enterprise Demo
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
                <Link href="/use-cases/enterprise/surround-ai">
                  Learn About Surround AI
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm" className="border-white/50 text-white/80 hover:bg-white/10">
                <Link href="/use-cases/enterprise/data-coffee">
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

