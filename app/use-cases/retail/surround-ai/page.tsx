'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, TrendingUp, ShoppingCart, Users, BarChart3, Target, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import AnimatedCounter from '@/components/animated-counter'

export default function SurroundAIRetailPage() {
  return (
    <div className="min-h-screen pt-16">
      <section className="bg-gray-950 py-4 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <Link href="/use-cases" className="hover:text-purple-400 transition-colors">Use Cases</Link>
            <span>/</span>
            <Link href="/use-cases/retail" className="hover:text-purple-400 transition-colors">Retail</Link>
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
                <Link href="/use-cases/retail">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Retail
                </Link>
              </Button>
            </div>
            
            <Badge className="mb-4 bg-purple-600/20 text-purple-400 border-purple-500/30">
              Surround AI for Retail
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{ lineHeight: '1.8' }}>
              Transform Retail with <span className="gradient-text">Hyper-Personalization</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8" style={{ lineHeight: '1.8' }}>
              Predict customer behavior, optimize inventory, and deliver personalized shopping experiences that drive revenue growth and customer loyalty.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600">
                <Link href="/contact?product=surround-ai&industry=retail">
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
              <h2 className="text-3xl font-bold text-white">The Retail Intelligence Challenge</h2>
            </div>
            
            <div className="bg-slate-800/50 rounded-lg p-8 mb-8">
              <p className="text-lg text-gray-300 mb-6" style={{ lineHeight: '1.8' }}>
                Retail businesses struggle to understand and predict customer behavior across multiple touchpoints. They lack the ability to deliver personalized experiences at scale, leading to missed sales opportunities and reduced customer loyalty.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3"></div>
                    <p className="text-gray-300" style={{ lineHeight: '1.8' }}>Inability to predict customer preferences and buying patterns</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3"></div>
                    <p className="text-gray-300" style={{ lineHeight: '1.8' }}>Missed opportunities for cross-selling and upselling</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3"></div>
                    <p className="text-gray-300" style={{ lineHeight: '1.8' }}>Ineffective inventory management leading to stockouts or overstock</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3"></div>
                    <p className="text-gray-300" style={{ lineHeight: '1.8' }}>Generic marketing campaigns with low conversion rates</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3"></div>
                    <p className="text-gray-300" style={{ lineHeight: '1.8' }}>Limited understanding of customer journey and touchpoint effectiveness</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3"></div>
                    <p className="text-gray-300" style={{ lineHeight: '1.8' }}>Reactive approach to market trends and customer demands</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">The Cost of Limited Retail Intelligence</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-red-400 font-semibold">Missed personalization opportunities</div>
                  <div className="text-red-300 text-sm">High</div>
                </div>
                <div className="text-center">
                  <div className="text-red-400 font-semibold">Inventory inefficiencies</div>
                  <div className="text-red-300 text-sm">Critical</div>
                </div>
                <div className="text-center">
                  <div className="text-red-400 font-semibold">Low marketing ROI</div>
                  <div className="text-red-300 text-sm">High</div>
                </div>
                <div className="text-center">
                  <div className="text-red-400 font-semibold">Customer churn</div>
                  <div className="text-red-300 text-sm">Medium</div>
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
              <h2 className="text-3xl font-bold text-white">The Surround AI Retail Solution</h2>
            </div>
            
            <div className="bg-slate-700/50 rounded-lg p-8 mb-8">
              <p className="text-lg text-gray-300 mb-6" style={{ lineHeight: '1.8' }}>
                Surround AI creates comprehensive customer intelligence by analyzing purchase history, browsing behavior, demographic data, and real-time interactions to predict preferences and optimize the entire retail experience.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Customer Behavior Prediction</h3>
                  <p className="text-gray-300 mb-4" style={{ lineHeight: '1.8' }}>
                    Analyzes customer data across all touchpoints to predict purchasing behavior, preferences, and lifetime value.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Personalized Recommendations</h3>
                  <p className="text-gray-300 mb-4" style={{ lineHeight: '1.8' }}>
                    Delivers real-time, personalized product recommendations and marketing messages based on individual customer profiles.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Inventory Optimization</h3>
                  <p className="text-gray-300 mb-4" style={{ lineHeight: '1.8' }}>
                    Predicts demand patterns and optimizes inventory levels to reduce stockouts while minimizing carrying costs.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Dynamic Pricing</h3>
                  <p className="text-gray-300 mb-4" style={{ lineHeight: '1.8' }}>
                    Adjusts pricing strategies in real-time based on demand, competition, and customer willingness to pay.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-700/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">How Surround AI Transforms Retail Intelligence</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-red-400 mb-4">❌ Traditional Approach</h4>
                  <div className="space-y-4">
                    <div className="bg-slate-800/50 p-4 rounded-lg">
                      <div className="font-semibold text-gray-300">Fragmented Customer Data</div>
                      <div className="text-sm text-gray-400">POS, Online, Mobile, Social</div>
                    </div>
                    <div className="flex justify-center">
                      <ArrowRight className="w-6 h-6 text-gray-500" />
                    </div>
                    <div className="bg-slate-800/50 p-4 rounded-lg">
                      <div className="font-semibold text-gray-300">Generic Analysis</div>
                      <div className="text-sm text-gray-400">Basic Segmentation</div>
                    </div>
                    <div className="flex justify-center">
                      <ArrowRight className="w-6 h-6 text-gray-500" />
                    </div>
                    <div className="bg-slate-800/50 p-4 rounded-lg">
                      <div className="font-semibold text-gray-300">One-Size-Fits-All</div>
                      <div className="text-sm text-gray-400">Missed Opportunities</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-green-400 mb-4">✅ Surround AI Approach</h4>
                  <div className="space-y-4">
                    <div className="bg-green-900/20 p-4 rounded-lg border border-green-500/30">
                      <div className="font-semibold text-gray-300">Unified Customer Intelligence</div>
                      <div className="text-sm text-gray-400">POS, Online, Mobile, Social</div>
                    </div>
                    <div className="flex justify-center">
                      <ArrowRight className="w-6 h-6 text-green-400" />
                    </div>
                    <div className="bg-green-900/20 p-4 rounded-lg border border-green-500/30">
                      <div className="font-semibold text-gray-300">Predictive Analysis</div>
                      <div className="text-sm text-gray-400">Real-time Behavioral Insights</div>
                    </div>
                    <div className="flex justify-center">
                      <ArrowRight className="w-6 h-6 text-green-400" />
                    </div>
                    <div className="bg-green-900/20 p-4 rounded-lg border border-green-500/30">
                      <div className="font-semibold text-gray-300">Hyper-Personalization</div>
                      <div className="text-sm text-gray-400">Individualized Experiences</div>
                    </div>
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
            <h2 className="text-3xl font-bold text-white text-center mb-12">Advanced Retail Intelligence Capabilities</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-blue-400" />
                  </div>
                  <CardTitle className="text-white">Customer Segmentation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300" style={{ lineHeight: '1.8' }}>
                    Creates dynamic customer segments based on behavior, preferences, and predicted lifetime value for targeted marketing campaigns.
                  </CardDescription>
                  <ul className="mt-4 space-y-2 text-sm text-gray-400">
                    <li>• Behavioral segmentation</li>
                    <li>• Predictive lifetime value</li>
                    <li>• Dynamic segment updates</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-purple-400" />
                  </div>
                  <CardTitle className="text-white">Demand Forecasting</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300" style={{ lineHeight: '1.8' }}>
                    Predicts product demand across different time horizons and locations to optimize inventory and reduce waste.
                  </CardDescription>
                  <ul className="mt-4 space-y-2 text-sm text-gray-400">
                    <li>• Multi-horizon forecasting</li>
                    <li>• Location-based predictions</li>
                    <li>• Seasonal trend analysis</li>
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
                    Optimizes pricing, promotions, and product placement to maximize revenue while maintaining customer satisfaction.
                  </CardDescription>
                  <ul className="mt-4 space-y-2 text-sm text-gray-400">
                    <li>• Dynamic pricing optimization</li>
                    <li>• Promotion effectiveness</li>
                    <li>• Cross-sell optimization</li>
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
            <h2 className="text-3xl font-bold text-white mb-12">Proven Retail Results</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-700/50 rounded-lg p-8">
                <div className="text-4xl font-bold text-green-400 mb-2">
                  <AnimatedCounter end={35} suffix="%" />
                </div>
                <div className="text-lg font-semibold text-white mb-2">Increase in Average Order Value</div>
                <div className="text-gray-400">Through personalized recommendations and dynamic bundling</div>
              </div>
              
              <div className="bg-slate-700/50 rounded-lg p-8">
                <div className="text-4xl font-bold text-blue-400 mb-2">
                  <AnimatedCounter end={28} suffix="%" />
                </div>
                <div className="text-lg font-semibold text-white mb-2">Reduction in Inventory Costs</div>
                <div className="text-gray-400">Optimized stock levels and demand prediction</div>
              </div>
              
              <div className="bg-slate-700/50 rounded-lg p-8">
                <div className="text-4xl font-bold text-purple-400 mb-2">
                  <AnimatedCounter end={42} suffix="%" />
                </div>
                <div className="text-lg font-semibold text-white mb-2">Improvement in Customer Retention</div>
                <div className="text-gray-400">Enhanced personalization and customer experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">How Surround AI Works</h2>
            
            <div className="space-y-8">
              <div className="bg-slate-800/50 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-white mb-4">Data Integration & Customer Profiling</h3>
                <p className="text-gray-300" style={{ lineHeight: '1.8' }}>
                  Surround AI integrates data from POS systems, e-commerce platforms, mobile apps, social media, and customer service interactions to create comprehensive customer profiles. It analyzes purchase history, browsing behavior, demographic information, and engagement patterns to understand individual customer preferences and predict future behavior.
                </p>
              </div>
              
              <div className="bg-slate-800/50 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-white mb-4">Predictive Analytics & Personalization</h3>
                <p className="text-gray-300" style={{ lineHeight: '1.8' }}>
                  The platform uses advanced machine learning algorithms to predict customer behavior, product demand, and optimal pricing strategies. It delivers real-time personalized recommendations, targeted marketing messages, and customized shopping experiences that adapt to each customer's unique preferences and shopping patterns.
                </p>
              </div>
              
              <div className="bg-slate-800/50 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-white mb-4">Continuous Optimization</h3>
                <p className="text-gray-300" style={{ lineHeight: '1.8' }}>
                  Surround AI continuously learns from customer interactions and business outcomes to refine its predictions and recommendations. It automatically adjusts inventory levels, pricing strategies, and marketing campaigns based on real-time performance data, ensuring optimal results and maximum ROI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-purple-900 to-blue-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Retail Intelligence?</h2>
            <p className="text-xl text-gray-300 mb-8" style={{ lineHeight: '1.8' }}>
              Join leading retailers using Surround AI to deliver hyper-personalized experiences, optimize inventory, and drive revenue growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-purple-900 hover:bg-gray-100">
                <Link href="/contact?product=surround-ai&industry=retail">
                  Schedule Retail Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple-900">
                <Link href="/resources/surroundai-roi-calculator">
                  Download ROI Calculator
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

