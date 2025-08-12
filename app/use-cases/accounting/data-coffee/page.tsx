
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Coffee, Database, Zap, Shield, CheckCircle, Users, Clock, BarChart3, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const keyFeatures = [
  {
    icon: Database,
    title: 'Automated Data Preparation',
    description: 'Streamline data collection and preparation from multiple client systems and formats',
    benefit: '80% time reduction'
  },
  {
    icon: Shield,
    title: 'Data Quality Assurance',
    description: 'Advanced validation and cleansing ensures 95% data integrity for audit processes',
    benefit: '95% data integrity'
  },
  {
    icon: Zap,
    title: 'Rapid Data Integration',
    description: 'Connect and harmonize data from various accounting systems, ERPs, and databases',
    benefit: '10x faster integration'
  },
  {
    icon: FileText,
    title: 'Audit-Ready Output',
    description: 'Generate clean, standardized datasets optimized for audit analysis and testing',
    benefit: 'Audit-optimized format'
  }
]

const dataSources = [
  'QuickBooks & Sage Accounting Systems',
  'SAP & Oracle ERP Systems', 
  'Bank Statement Files (PDF, CSV, Excel)',
  'Payroll Systems & HR Databases',
  'Inventory Management Systems',
  'CRM & Sales Transaction Data',
  'Tax Preparation Software',
  'Custom Database Exports'
]

const workflow = [
  {
    step: '1',
    title: 'Data Discovery',
    description: 'Automatically identify and catalog all relevant data sources across client systems'
  },
  {
    step: '2', 
    title: 'Smart Extraction',
    description: 'Extract data from various formats while maintaining source integrity and lineage'
  },
  {
    step: '3',
    title: 'Quality Validation',
    description: 'Apply advanced validation rules to identify and flag data quality issues'
  },
  {
    step: '4',
    title: 'Data Cleansing',
    description: 'Automatically clean and standardize data according to audit requirements'
  },
  {
    step: '5',
    title: 'Audit Optimization',
    description: 'Transform data into audit-ready formats for analysis and testing'
  }
]

const benefits = [
  {
    metric: '80%',
    description: 'Reduction in data preparation time',
    impact: 'Hours saved per engagement'
  },
  {
    metric: '95%',
    description: 'Data integrity improvement',
    impact: 'Fewer audit issues and corrections'
  },
  {
    metric: '60%',
    description: 'Faster audit cycle completion', 
    impact: 'Earlier audit delivery'
  },
  {
    metric: '90%',
    description: 'Reduction in manual errors',
    impact: 'Higher audit quality'
  }
]

export default function DataCoffeeAccountingPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Breadcrumb Navigation */}
      <section className="bg-gray-950 py-4 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <Link href="/use-cases" className="hover:text-purple-400 transition-colors">Use Cases</Link>
            <span>/</span>
            <Link href="/use-cases/accounting" className="hover:text-purple-400 transition-colors">Accounting & Audit</Link>
            <span>/</span>
            <span className="text-white">Data Coffee</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
            alt="Data Preparation and Analysis"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-3">
                <Button asChild variant="outline" size="sm">
                  <Link href="/use-cases/accounting">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Accounting
                  </Link>
                </Button>
              </div>
              
              <div>
                <Badge className="mb-4 bg-orange-600/20 text-orange-400 border-orange-500/30 flex items-center w-fit">
                  <Coffee className="w-4 h-4 mr-2" />
                  Data Coffee for Auditors
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                  Automate Data <span className="gradient-text">Preparation</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Eliminate the most time-consuming part of audit engagements. Data Coffee automatically prepares, cleanses, and optimizes client data for audit analysis, reducing preparation time by 80%.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700">
                  <Link href="/contact?product=data-coffee&industry=accounting">
                    Request Demo
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/resources/datacoffee-roi-calculator">
                    Calculate ROI
                  </Link>
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-orange-900/20 border-orange-500/30">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-orange-400" />
                    <CardTitle className="text-orange-400">Time Savings</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Manual Data Prep</span>
                      <span className="text-red-400 font-semibold">40+ hours</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">With Data Coffee</span>
                      <span className="text-green-400 font-semibold">8 hours</span>
                    </div>
                    <div className="h-px bg-gray-700"></div>
                    <div className="flex justify-between items-center font-bold">
                      <span className="text-white">Time Saved</span>
                      <span className="text-green-400 text-xl">32+ hours</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Intelligent Data <span className="gradient-text">Processing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Data Coffee transforms messy, inconsistent client data into clean, audit-ready datasets automatically.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {keyFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card key={index} className="group hover:scale-105 transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl flex items-center justify-between">
                      {feature.title}
                      <Badge variant="secondary" className="text-orange-400 border-orange-400/30">
                        {feature.benefit}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Data Sources */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Connect Any <span className="gradient-text">Data Source</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Data Coffee works seamlessly with all major accounting systems and data formats.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {dataSources.map((source, index) => (
                <Card key={index} className="border-gray-700">
                  <CardContent className="flex items-center p-6">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{source}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="section-padding bg-gradient-to-r from-orange-900/10 to-red-900/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Automated <span className="gradient-text">Workflow</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how Data Coffee transforms raw client data into audit-ready insights.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {workflow.map((item, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{item.step}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & ROI */}
      <section className="section-padding bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Measurable <span className="gradient-text">Impact</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Data Coffee delivers immediate, quantifiable benefits to your audit practice.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center group hover:scale-105 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-orange-400 mb-2">{benefit.metric}</div>
                  <div className="text-white font-semibold mb-2">{benefit.description}</div>
                  <div className="text-sm text-gray-400">{benefit.impact}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="section-padding bg-black border-y border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Success <span className="gradient-text">Story</span>
              </h2>
            </div>

            <Card className="border-orange-500/20">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center space-x-3">
                  <Users className="w-8 h-8 text-orange-400" />
                  <span>Mid-Size Accounting Firm</span>
                </CardTitle>
                <CardDescription className="text-lg">
                  Struggling with time-consuming data preparation across multiple client engagements
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-orange-400 mb-2">Challenge:</h4>
                  <p className="text-gray-300">Audit team spending 60% of engagement time on data preparation and cleansing instead of analysis</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-blue-400 mb-2">Solution:</h4>
                  <p className="text-gray-300">Implemented Data Coffee for automated data preparation across all audit engagements</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-400 mb-4">Results:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Reduced data prep time from 24 hours to 5 hours per engagement</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Increased audit capacity by 40% with same team size</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Improved data quality resulted in 85% fewer audit adjustments</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Completed audit seasons 3 weeks earlier than previous years</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-orange-900/20 to-red-900/20 border-y border-orange-500/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Eliminate Data Preparation Bottlenecks?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join accounting firms using Data Coffee to transform their audit efficiency and focus on high-value analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700">
                <Link href="/contact?product=data-coffee&industry=accounting">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/products/data-coffee">
                  Learn More About Data Coffee
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
