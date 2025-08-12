'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Database, Building2, TrendingUp, Users, BarChart3, Zap, Shield, Clock, Target, DollarSign, FileText, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import AnimatedCounter from '@/components/animated-counter'

export default function SMBDataCoffeePage() {
  return (
    <div className="min-h-screen pt-16">
      <section className="bg-gray-950 py-4 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <Link href="/use-cases" className="hover:text-purple-400 transition-colors">Use Cases</Link>
            <span>/</span>
            <Link href="/use-cases/smb" className="hover:text-purple-400 transition-colors">SMB</Link>
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
                <Link href="/use-cases/smb">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to SMB
                </Link>
              </Button>
            </div>
            
            <Badge className="mb-4 bg-gradient-to-r from-orange-600/20 to-red-600/20 text-orange-400 border-orange-500/30 flex items-center w-fit mx-auto">
              <Database className="w-4 h-4 mr-2" />
              Data Coffee for Small & Medium Business
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{ lineHeight: '1.8' }}>
              SMB Data <span className="gradient-text">Simplification</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8" style={{ lineHeight: '1.8' }}>
              Streamline data management for small and medium businesses with affordable, easy-to-use data integration and preparation tools that eliminate manual data headaches.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-orange-600 to-red-600">
                <Link href="/contact?product=data-coffee&industry=smb">
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
              <h2 className="text-3xl font-bold text-white">The SMB Data Management Challenge</h2>
            </div>
            
            <div className="bg-slate-800/50 rounded-lg p-8 mb-8">
              <p className="text-lg text-gray-300 mb-6" style={{ lineHeight: '1.8' }}>
                SMBs typically manage their data in a patchwork of spreadsheets, basic accounting software, and simple e-commerce platforms. This data is often inconsistent, full of errors, and stored in a way that makes it difficult to get a complete picture of the business. The manual effort to maintain and combine this data is a major pain point, diverting valuable time and resources from core business activities.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-red-400">Data Fragmentation Issues</h3>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3"></div>
                    <p className="text-gray-300" style={{ lineHeight: '1.8' }}>Data scattered across spreadsheets, accounting software, and e-commerce platforms</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3"></div>
                    <p className="text-gray-300" style={{ lineHeight: '1.8' }}>Inconsistent data formats and frequent errors across systems</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3"></div>
                    <p className="text-gray-300" style={{ lineHeight: '1.8' }}>Difficult to get complete picture of business performance</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-red-400">Resource Drain</h3>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3"></div>
                    <p className="text-gray-300" style={{ lineHeight: '1.8' }}>Manual effort to maintain and combine data is a major pain point</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3"></div>
                    <p className="text-gray-300" style={{ lineHeight: '1.8' }}>Valuable time diverted from core business activities</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3"></div>
                    <p className="text-gray-300" style={{ lineHeight: '1.8' }}>Resources wasted on data reconciliation instead of growth</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">The Cost of Fragmented SMB Data</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-red-400 font-semibold">Data Quality</div>
                  <div className="text-red-300 text-sm">Error-Prone</div>
                </div>
                <div className="text-center">
                  <div className="text-red-400 font-semibold">Reporting</div>
                  <div className="text-red-300 text-sm">Unreliable</div>
                </div>
                <div className="text-center">
                  <div className="text-red-400 font-semibold">Time Management</div>
                  <div className="text-red-300 text-sm">Major Drain</div>
                </div>
                <div className="text-center">
                  <div className="text-red-400 font-semibold">Business Insights</div>
                  <div className="text-red-300 text-sm">Limited</div>
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
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mr-4">
                <Database className="w-6 h-6 text-orange-400" />
              </div>
              <h2 className="text-3xl font-bold text-white">The Data Coffee Solution</h2>
            </div>
            
            <div className="bg-slate-700/50 rounded-lg p-8 mb-8">
              <p className="text-lg text-gray-300 mb-6" style={{ lineHeight: '1.8' }}>
                Data Coffee is an easy-to-use, automated data cleansing and integration tool designed specifically for SMBs. It connects to their existing systems and automatically cleans, standardizes, and consolidates the data. It eliminates the need for manual data entry and spreadsheet management, creating a single, reliable source of truth for the business.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-orange-900/20 p-6 rounded-lg border border-orange-500/30">
                  <div className="flex items-center mb-4">
                    <Zap className="w-6 h-6 text-orange-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Automated Data Integration</h3>
                  </div>
                  <p className="text-gray-300 mb-4" style={{ lineHeight: '1.8' }}>
                    Connects to existing systems and automatically cleans, standardizes, and consolidates data from multiple sources.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Automated data cleansing</li>
                    <li>• Multi-source integration</li>
                    <li>• Data standardization</li>
                  </ul>
                </div>
                
                <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-500/30">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-blue-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Single Source of Truth</h3>
                  </div>
                  <p className="text-gray-300 mb-4" style={{ lineHeight: '1.8' }}>
                    Creates a unified business dashboard where SMB owners can see all customer, sales, and financial data in one place.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Unified business dashboard</li>
                    <li>• Reliable data insights</li>
                    <li>• Eliminated manual entry</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-700/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">SMB Data Transformation</h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="bg-red-900/20 p-4 rounded-lg border border-red-500/30 flex-1">
                    <h4 className="text-lg font-semibold text-red-400 mb-2">Before: Fragmented Data</h4>
                    <p className="text-sm text-gray-300">Disparate Systems → Manual Reconciliation → Inconsistent & Error-Prone Data → Unreliable Reporting</p>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <ArrowRight className="w-8 h-8 text-orange-400" />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="bg-orange-900/20 p-4 rounded-lg border border-orange-500/30 flex-1">
                    <h4 className="text-lg font-semibold text-orange-400 mb-2">After: Unified Data</h4>
                    <p className="text-sm text-gray-300">Automated Integration → Single Business Dashboard → Reliable Insights → Smarter Business Decisions & Saved Time</p>
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
            <h2 className="text-3xl font-bold text-white text-center mb-12">SMB Data Management Capabilities</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Database className="w-6 h-6 text-orange-400" />
                  </div>
                  <CardTitle className="text-white">Automated Data Cleansing</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300" style={{ lineHeight: '1.8' }}>
                    Automatically cleans and standardizes data from QuickBooks, Shopify, Mailchimp, and other SMB systems.
                  </CardDescription>
                  <ul className="mt-4 space-y-2 text-sm text-gray-400">
                    <li>• Error detection and correction</li>
                    <li>• Data format standardization</li>
                    <li>• Duplicate removal</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-blue-400" />
                  </div>
                  <CardTitle className="text-white">Business Reporting</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300" style={{ lineHeight: '1.8' }}>
                    Generates accurate business reports and financial statements from unified, clean data.
                  </CardDescription>
                  <ul className="mt-4 space-y-2 text-sm text-gray-400">
                    <li>• Financial statement accuracy</li>
                    <li>• Business performance reports</li>
                    <li>• Real-time dashboards</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-green-400" />
                  </div>
                  <CardTitle className="text-white">Time Savings</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300" style={{ lineHeight: '1.8' }}>
                    Eliminates manual data entry and reconciliation tasks, freeing up time for core business activities.
                  </CardDescription>
                  <ul className="mt-4 space-y-2 text-sm text-gray-400">
                    <li>• Automated data entry</li>
                    <li>• Reduced reconciliation time</li>
                    <li>• Focus on business growth</li>
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
                <div className="text-4xl font-bold text-orange-400 mb-2">
                  <AnimatedCounter end={85} suffix="%" />
                </div>
                <div className="text-lg font-semibold text-white mb-2">Error Reduction</div>
                <div className="text-gray-400">Reduced manual data entry and errors</div>
              </div>
              
              <div className="bg-slate-700/50 rounded-lg p-8">
                <div className="text-4xl font-bold text-blue-400 mb-2">
                  <AnimatedCounter end={95} suffix="%" />
                </div>
                <div className="text-lg font-semibold text-white mb-2">Reporting Accuracy</div>
                <div className="text-gray-400">Improved business reporting and financial statements</div>
              </div>
              
              <div className="bg-slate-700/50 rounded-lg p-8">
                <div className="text-4xl font-bold text-green-400 mb-2">
                  <AnimatedCounter end={10} suffix=" hrs" />
                </div>
                <div className="text-lg font-semibold text-white mb-2">Weekly Time Savings</div>
                <div className="text-gray-400">Saved in data management and reconciliation</div>
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
                  <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-orange-400 font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">System Connection & Setup (Week 1)</h3>
                </div>
                <p className="text-gray-300" style={{ lineHeight: '1.8' }}>
                  Connect Data Coffee to your existing systems (QuickBooks, Shopify, Mailchimp, etc.) with simple, guided setup process designed for non-technical users.
                </p>
              </div>
              
              <div className="bg-slate-800/50 rounded-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-blue-400 font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Data Cleansing & Integration (Weeks 2-3)</h3>
                </div>
                <p className="text-gray-300" style={{ lineHeight: '1.8' }}>
                  Automated data cleansing begins, standardizing and consolidating information from all sources. Initial unified dashboard becomes available with clean, reliable data.
                </p>
              </div>
              
              <div className="bg-slate-800/50 rounded-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-green-400 font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Ongoing Optimization & Growth (Week 4+)</h3>
                </div>
                <p className="text-gray-300" style={{ lineHeight: '1.8' }}>
                  Continuous data optimization with automated maintenance, error prevention, and enhanced reporting capabilities for sustained business growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-orange-900 to-red-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Eliminate Data Headaches?</h2>
            <p className="text-xl text-gray-300 mb-8" style={{ lineHeight: '1.8' }}>
              Join thousands of SMBs using Data Coffee to streamline data management, improve reporting accuracy, and save valuable time for business growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-orange-900 hover:bg-gray-100">
                <Link href="/contact?product=data-coffee&industry=smb">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-orange-900">
                <Link href="/resources/datacoffee-roi-calculator">
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

