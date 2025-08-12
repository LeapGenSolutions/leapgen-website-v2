
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Database, Building2, TrendingUp, Users, BarChart3, Zap, Shield, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import AnimatedCounter from '@/components/animated-counter'

export default function EnterpriseDataCoffeePage() {
  return (
    <div className="min-h-screen pt-16">
      <section className="bg-gray-950 py-4 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <Link href="/use-cases" className="hover:text-purple-400 transition-colors">Use Cases</Link>
            <span>/</span>
            <Link href="/use-cases/enterprise" className="hover:text-purple-400 transition-colors">Enterprise</Link>
            <span>/</span>
            <span className="text-white">Data Coffee</span>
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
            
            <Badge className="mb-4 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 text-blue-400 border-blue-500/30 flex items-center w-fit mx-auto">
              <Database className="w-4 h-4 mr-2" />
              Data Coffee for Enterprise
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{ lineHeight: '1.8' }}>
              Enterprise Data <span className="gradient-text">Unification</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8" style={{ lineHeight: '1.8' }}>
              Transform enterprise-wide data chaos into a unified, reliable foundation for strategic decision-making across all departments and business units.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600">
                <Link href="/contact?product=data-coffee&industry=enterprise">
                  Request Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/resources/datacoffee-roi-calculator">
                  Calculate ROI
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/products/data-coffee">
                  Start Free Trial
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
              <h2 className="text-3xl font-bold text-white">The Enterprise Data Challenge</h2>
            </div>
            
            <div className="bg-slate-800/50 rounded-lg p-8 mb-8">
              <p className="text-lg text-gray-300 mb-6" style={{ lineHeight: '1.8' }}>
                Large enterprises struggle with vast amounts of siloed data across departments, making it impossible to get a single, accurate view of operations, customers, and markets. This fragmentation results in slow decision-making, lack of collaboration between departments, and inability to capitalize on emerging opportunities.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-red-400">Data Silos & Fragmentation</h3>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3"></div>
                    <p className="text-gray-300" style={{ lineHeight: '1.8' }}>Disconnected systems across sales, marketing, HR, supply chain, and finance</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3"></div>
                    <p className="text-gray-300" style={{ lineHeight: '1.8' }}>Inconsistent data formats and quality standards</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3"></div>
                    <p className="text-gray-300" style={{ lineHeight: '1.8' }}>Manual data reconciliation consuming valuable resources</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-red-400">Business Impact</h3>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3"></div>
                    <p className="text-gray-300" style={{ lineHeight: '1.8' }}>Delayed strategic decision-making due to data preparation bottlenecks</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3"></div>
                    <p className="text-gray-300" style={{ lineHeight: '1.8' }}>Missed opportunities from lack of real-time business insights</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3"></div>
                    <p className="text-gray-300" style={{ lineHeight: '1.8' }}>Departmental silos preventing enterprise-wide collaboration</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">The Cost of Data Fragmentation</h3>
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
                  <div className="text-red-400 font-semibold">Collaboration</div>
                  <div className="text-red-300 text-sm">Severely Limited</div>
                </div>
                <div className="text-center">
                  <div className="text-red-400 font-semibold">Innovation</div>
                  <div className="text-red-300 text-sm">Significantly Hindered</div>
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
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                <Zap className="w-6 h-6 text-blue-400" />
              </div>
              <h2 className="text-3xl font-bold text-white">How Data Coffee Solves Enterprise Data Challenges</h2>
            </div>
            
            <div className="bg-slate-700/50 rounded-lg p-8 mb-8">
              <p className="text-lg text-gray-300 mb-6" style={{ lineHeight: '1.8' }}>
                Data Coffee acts as the central intelligence layer, ingesting and normalizing data from every part of the enterprise—sales, marketing, HR, supply chain, and finance. It creates a "single source of truth" by intelligently cleaning and consolidating all information, enabling faster decision-making and enterprise-wide collaboration.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-500/30">
                  <h3 className="text-xl font-semibold text-white mb-4">Automated Data Integration</h3>
                  <p className="text-gray-300 mb-4" style={{ lineHeight: '1.8' }}>
                    Connects to all enterprise systems automatically, from legacy databases to modern cloud applications, creating seamless data flow across the organization.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• ERP, CRM, and financial system integration</li>
                    <li>• Real-time data synchronization</li>
                    <li>• API-first architecture for scalability</li>
                  </ul>
                </div>
                
                <div className="bg-cyan-900/20 p-6 rounded-lg border border-cyan-500/30">
                  <h3 className="text-xl font-semibold text-white mb-4">Intelligent Data Cleansing</h3>
                  <p className="text-gray-300 mb-4" style={{ lineHeight: '1.8' }}>
                    Advanced algorithms automatically clean, standardize, and de-duplicate data, ensuring consistent quality across all enterprise data sources.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Automated data quality monitoring</li>
                    <li>• Intelligent duplicate detection and merging</li>
                    <li>• Standardized data formats and schemas</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-700/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Enterprise Data Transformation Flow</h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="bg-red-900/20 p-4 rounded-lg border border-red-500/30 flex-1">
                    <h4 className="text-lg font-semibold text-red-400 mb-2">Before: Fragmented Enterprise</h4>
                    <p className="text-sm text-gray-300">Siloed Systems → Manual Data Gathering → Inconsistent Reports → Slow Decision-Making</p>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <ArrowRight className="w-8 h-8 text-blue-400" />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/30 flex-1">
                    <h4 className="text-lg font-semibold text-blue-400 mb-2">After: Unified Enterprise</h4>
                    <p className="text-sm text-gray-300">Connected Systems → Automated Data Coffee Processing → Single Source of Truth → Fast Strategic Decisions</p>
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
            <h2 className="text-3xl font-bold text-white text-center mb-12">Enterprise Data Coffee Capabilities</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Database className="w-6 h-6 text-blue-400" />
                  </div>
                  <CardTitle className="text-white">Universal Data Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300" style={{ lineHeight: '1.8' }}>
                    Connect and unify data from all enterprise systems including ERP, CRM, HR, supply chain, finance, and external data sources into a single, coherent data foundation.
                  </CardDescription>
                  <ul className="mt-4 space-y-2 text-sm text-gray-400">
                    <li>• 500+ pre-built connectors</li>
                    <li>• Real-time and batch processing</li>
                    <li>• Cloud and on-premise support</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-cyan-400" />
                  </div>
                  <CardTitle className="text-white">Enterprise-Grade Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300" style={{ lineHeight: '1.8' }}>
                    Maintain the highest security standards with enterprise-grade encryption, access controls, and compliance frameworks for sensitive business data.
                  </CardDescription>
                  <ul className="mt-4 space-y-2 text-sm text-gray-400">
                    <li>• SOC 2 Type II compliance</li>
                    <li>• Role-based access controls</li>
                    <li>• End-to-end encryption</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-green-400" />
                  </div>
                  <CardTitle className="text-white">Scalable Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300" style={{ lineHeight: '1.8' }}>
                    Handle massive enterprise data volumes with auto-scaling infrastructure that grows with your business needs and data complexity.
                  </CardDescription>
                  <ul className="mt-4 space-y-2 text-sm text-gray-400">
                    <li>• Petabyte-scale processing</li>
                    <li>• Auto-scaling infrastructure</li>
                    <li>• Global deployment options</li>
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
            <h2 className="text-3xl font-bold text-white mb-12">Enterprise Data Coffee Results</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-700/50 rounded-lg p-8">
                <div className="text-4xl font-bold text-blue-400 mb-2">
                  <AnimatedCounter end={50} suffix="%" />
                </div>
                <div className="text-lg font-semibold text-white mb-2">Decision Speed Increase</div>
                <div className="text-gray-400">Faster strategic decisions with unified data access</div>
              </div>
              
              <div className="bg-slate-700/50 rounded-lg p-8">
                <div className="text-4xl font-bold text-cyan-400 mb-2">
                  <AnimatedCounter end={15} suffix="%" />
                </div>
                <div className="text-lg font-semibold text-white mb-2">Operational Cost Reduction</div>
                <div className="text-gray-400">Lower costs through improved efficiency and automation</div>
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
            <h2 className="text-3xl font-bold text-white mb-8">Implementation Roadmap</h2>
            
            <div className="space-y-8">
              <div className="bg-slate-800/50 rounded-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-blue-400 font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Discovery & Planning (Weeks 1-2)</h3>
                </div>
                <p className="text-gray-300" style={{ lineHeight: '1.8' }}>
                  Comprehensive assessment of existing enterprise data landscape, identification of key systems and data sources, and development of integration strategy. Define data governance policies and establish success metrics for the transformation.
                </p>
              </div>
              
              <div className="bg-slate-800/50 rounded-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-cyan-400 font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Core Integration (Weeks 3-8)</h3>
                </div>
                <p className="text-gray-300" style={{ lineHeight: '1.8' }}>
                  Deploy Data Coffee to connect critical enterprise systems starting with high-priority data sources. Implement automated data cleansing and standardization processes. Establish real-time data synchronization across key business functions.
                </p>
              </div>
              
              <div className="bg-slate-800/50 rounded-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-green-400 font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Enterprise Scaling (Weeks 9-16)</h3>
                </div>
                <p className="text-gray-300" style={{ lineHeight: '1.8' }}>
                  Expand integration to all enterprise systems and departments. Implement advanced data governance and security controls. Deploy enterprise-wide dashboards and reporting capabilities. Train teams and establish ongoing data management processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-blue-900 to-cyan-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Unify Your Enterprise Data?</h2>
            <p className="text-xl text-gray-300 mb-8" style={{ lineHeight: '1.8' }}>
              Join Fortune 500 companies using Data Coffee to transform fragmented data into a unified foundation for strategic decision-making and enterprise-wide collaboration.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                <Link href="/contact?product=data-coffee&industry=enterprise">
                  Schedule Enterprise Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900">
                <Link href="/resources/datacoffee-roi-calculator">
                  Calculate Enterprise ROI
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
