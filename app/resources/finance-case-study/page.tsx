
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Download, TrendingUp, Clock, Shield, BarChart3, DollarSign } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import AnimatedCounter from '@/components/animated-counter'

export const metadata: Metadata = {
  title: 'Global Finance Corp Case Study - 10x Faster Data Insights | LeapGen.AI',
  description: 'How Global Finance Corp transformed regulatory reporting and risk analysis with Data Coffee platform.',
}

export default function FinanceCaseStudyPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://img.freepik.com/premium-photo/modern-financial-analysts-office-featuring-large-desk-with-multiple-monitors-displaying-realtime-data-ai-tools-market-analysis-investment-decisions-generative-ai_262708-37406.jpg"
            alt="Global Finance Corp Trading Floor"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Button asChild variant="outline" size="sm">
                <Link href="/resources">
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Back to Resources
                </Link>
              </Button>
            </div>

            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <div className="inline-block px-3 py-1 bg-green-600/20 text-green-400 text-sm rounded-full mb-4">
                Case Study • Data Coffee • Financial Services
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Global Finance Corp: <span className="gradient-text">10x Faster Data Insights</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                How a leading financial services firm transformed regulatory reporting and risk analysis with centralized data platform
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    <AnimatedCounter end={10} suffix="x" />
                  </div>
                  <div className="text-gray-300">Faster Insights</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    <AnimatedCounter end={85} suffix="%" />
                  </div>
                  <div className="text-gray-300">Time Reduction</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-purple-400 mb-2">
                    <AnimatedCounter end={99.9} suffix="%" />
                  </div>
                  <div className="text-gray-300">Data Accuracy</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">
                    $<AnimatedCounter end={15} suffix="M" />
                  </div>
                  <div className="text-gray-300">Annual Savings</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">About Global Finance Corp</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Global Finance Corp is a multinational investment bank and financial services company 
                    with over $2 trillion in assets under management. Operating in 40+ countries, 
                    the firm serves institutional clients, corporations, and high-net-worth individuals.
                  </p>
                  <p>
                    With increasingly complex regulatory requirements and growing data volumes, 
                    the firm needed a unified platform to streamline data management and accelerate 
                    decision-making across all business units.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                    <div className="text-2xl font-bold text-green-400">$2T+</div>
                    <div className="text-sm text-gray-400">Assets Under Management</div>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                    <div className="text-2xl font-bold text-blue-400">40+</div>
                    <div className="text-sm text-gray-400">Countries</div>
                  </div>
                </div>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="https://www.geckoboard.com/uploads/Live-sales-dashboard-example.png"
                  alt="Financial Analytics Dashboard"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">The Challenge</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-red-900/20 border-red-500/30">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-red-400" />
                    <span>Slow Reporting</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Regulatory reports took 2-3 weeks to compile from disparate systems, creating compliance risks.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-orange-900/20 border-orange-500/30">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-orange-400" />
                    <span>Data Silos</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Critical data scattered across 50+ systems, making comprehensive risk analysis nearly impossible.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-yellow-900/20 border-yellow-500/30">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <DollarSign className="w-5 h-5 text-yellow-400" />
                    <span>High Costs</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Manual data processing required 200+ FTE analysts, costing $50M annually in operational expenses.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gray-900 rounded-lg p-8 border border-gray-700">
              <blockquote className="text-xl italic text-gray-300 text-center">
                "Our data was our biggest asset, but it was trapped in silos. We needed real-time insights 
                to stay competitive and compliant, but our current systems couldn't deliver."
              </blockquote>
              <div className="text-center mt-4">
                <div className="font-semibold">Dr. Amanda Foster</div>
                <div className="text-gray-400">Chief Data Officer, Global Finance Corp</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="section-padding bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">The Solution</h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Data Coffee Implementation</h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Global Finance Corp implemented Data Coffee as their centralized data platform, 
                    integrating all trading systems, risk management tools, and regulatory databases 
                    into a unified analytics environment.
                  </p>
                  <p>
                    The platform provided real-time data processing, automated compliance reporting, 
                    and advanced analytics capabilities across all business units.
                  </p>
                </div>
                
                <div className="space-y-4 mt-8">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold text-white">Real-time Data Integration</div>
                      <div className="text-gray-400">Unified view of all trading and risk data across 50+ systems</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold text-white">Automated Reporting</div>
                      <div className="text-gray-400">Generate regulatory reports in minutes instead of weeks</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold text-white">Advanced Analytics</div>
                      <div className="text-gray-400">AI-powered risk modeling and predictive analytics</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="https://i.pinimg.com/originals/88/75/28/887528f840d9027d43b4ce93f54bc1ef.png"
                  alt="Data Coffee Platform"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Results & Impact</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-green-400" />
                    <span>Speed & Efficiency</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300">
                    <li>• 10x faster data insights generation</li>
                    <li>• 85% reduction in report preparation time</li>
                    <li>• Real-time risk monitoring</li>
                    <li>• Automated compliance workflows</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-blue-400" />
                    <span>Risk & Compliance</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300">
                    <li>• 99.9% data accuracy achieved</li>
                    <li>• 100% regulatory compliance</li>
                    <li>• 60% faster risk assessment</li>
                    <li>• Proactive risk identification</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <DollarSign className="w-5 h-5 text-purple-400" />
                    <span>Cost Savings</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300">
                    <li>• $15M annual operational savings</li>
                    <li>• 70% reduction in manual processing</li>
                    <li>• 50% fewer compliance violations</li>
                    <li>• ROI achieved in 8 months</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-yellow-400" />
                    <span>Business Impact</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300">
                    <li>• 40% improvement in trading decisions</li>
                    <li>• Enhanced client reporting capabilities</li>
                    <li>• Faster product time-to-market</li>
                    <li>• Improved competitive positioning</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-lg p-8 border border-green-500/20">
              <blockquote className="text-xl italic text-gray-300 text-center mb-6">
                "Data Coffee transformed how we operate. We now have real-time visibility into our entire business, 
                enabling faster decisions and better risk management. It's been transformational for our competitive edge."
              </blockquote>
              <div className="text-center">
                <div className="font-semibold">James Mitchell</div>
                <div className="text-gray-400">Chief Technology Officer, Global Finance Corp</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="section-padding bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Technical Implementation</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Data Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300">
                    <li>• 50+ system integrations</li>
                    <li>• Real-time data streaming</li>
                    <li>• 10TB daily data processing</li>
                    <li>• 99.99% uptime achieved</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Analytics & AI</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Machine learning risk models</li>
                    <li>• Predictive analytics</li>
                    <li>• Natural language processing</li>
                    <li>• Automated anomaly detection</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Security & Compliance</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300">
                    <li>• End-to-end encryption</li>
                    <li>• SOC 2 Type II certified</li>
                    <li>• GDPR compliant</li>
                    <li>• Multi-factor authentication</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Scalability</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Cloud-native architecture</li>
                    <li>• Auto-scaling capabilities</li>
                    <li>• Global data replication</li>
                    <li>• Disaster recovery ready</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="section-padding bg-gradient-to-r from-green-900/20 to-blue-900/20 border-t border-green-500/20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Download the Complete Case Study</h2>
            <p className="text-xl text-gray-300 mb-8">
              Get the full case study with detailed technical architecture, implementation timeline, 
              and comprehensive ROI analysis from Global Finance Corp's transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="xl">
                <Link href="/contact?type=resource&resource=finance-case-study">
                  <Download className="mr-2 w-5 h-5" />
                  Download PDF Case Study
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link href="/contact?type=demo">
                  Schedule Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
