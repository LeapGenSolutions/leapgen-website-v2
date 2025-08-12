
import { Metadata } from 'next'
import { ArrowRight, Database, Shield, Zap, Users, CheckCircle, TrendingUp, BarChart3, Target } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import AnimatedCounter from '@/components/animated-counter'

export const metadata: Metadata = {
  title: 'Data Coffee for Retail - Unified Customer & Inventory Data | LeapGen.AI',
  description: 'Automate retail data integration from POS systems, e-commerce platforms, and loyalty programs. Create unified customer profiles and eliminate data inconsistencies.',
  keywords: 'retail data integration, customer data unification, POS data, e-commerce analytics, inventory management, retail analytics',
}

export default function RetailDataCoffeePage() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "80% Less Data Consolidation Time",
      description: "Automated data cleansing and integration eliminates manual data wrangling",
      value: 80
    },
    {
      icon: BarChart3,
      title: "95% Analytics Accuracy Improvement", 
      description: "Clean, unified data ensures reliable customer analytics and reports",
      value: 95
    },
    {
      icon: Shield,
      title: "Complete Data Leakage Elimination",
      description: "Single source of truth prevents data inconsistencies across systems",
      value: 100
    }
  ]

  const capabilities = [
    {
      icon: Database,
      title: "Multi-Source Data Integration",
      description: "Automatically connects to POS systems, e-commerce platforms, loyalty programs, and social media data sources",
      features: ["Point-of-sale system integration", "E-commerce platform connectivity", "Loyalty program data sync", "Social media data ingestion"]
    },
    {
      icon: Zap,
      title: "Intelligent Data Cleansing",
      description: "Advanced algorithms clean, de-duplicate, and standardize customer and inventory information",
      features: ["Automated data cleaning", "Duplicate record removal", "Data standardization", "Quality validation"]
    },
    {
      icon: Users,
      title: "Unified Customer Profiles",
      description: "Creates single, accurate view of each customer by merging profiles from different systems",
      features: ["Customer profile unification", "Cross-channel behavior tracking", "Purchase history consolidation", "Preference aggregation"]
    },
    {
      icon: Target,
      title: "Inventory Data Optimization",
      description: "Consolidates inventory data across channels for accurate stock management and forecasting",
      features: ["Multi-channel inventory sync", "Stock level optimization", "Demand forecasting data", "Supply chain integration"]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Breadcrumb */}
      <div className="bg-slate-800/50 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <a href="/use-cases" className="text-blue-400 hover:text-blue-300">Use Cases</a>
            <span className="text-gray-400">/</span>
            <a href="/use-cases/retail" className="text-blue-400 hover:text-blue-300">Retail</a>
            <span className="text-gray-400">/</span>
            <span className="text-gray-300">Data Coffee</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-orange-900/30 border border-orange-800/50 rounded-full mb-6">
              <Database className="w-5 h-5 text-orange-400 mr-2" />
              <span className="text-orange-300 font-medium">Data Coffee for Retail</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8" style={{ lineHeight: '1.8' }}>
              Unify Retail Data from 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400"> All Sources</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12" style={{ lineHeight: '1.8' }}>
              Eliminate manual data wrangling and create unified customer profiles from POS systems, e-commerce platforms, loyalty programs, and social media. Transform messy, inconsistent retail data into reliable insights for better decision-making.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4">
                See Retail Demo
              </Button>
              <Button size="lg" variant="outline" className="border-orange-600 text-orange-400 hover:bg-orange-600/10 px-8 py-4">
                Calculate ROI
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8" style={{ lineHeight: '1.8' }}>
                The Retail Data Challenge
              </h2>
              
              <p className="text-lg text-gray-300 mb-8" style={{ lineHeight: '1.8' }}>
                Retailers collect vast amounts of data from various sources: point-of-sale systems, e-commerce platforms, loyalty programs, and social media. This data is often messy, inconsistent, and duplicated. The manual process of cleaning and unifying this information is slow, costly, and prevents the business from gaining a clear, accurate view of its customers and inventory.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-3"></div>
                  <p className="text-gray-300" style={{ lineHeight: '1.8' }}>Messy, inconsistent data across multiple retail systems</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-3"></div>
                  <p className="text-gray-300" style={{ lineHeight: '1.8' }}>Manual data cleaning and reconciliation processes</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-3"></div>
                  <p className="text-gray-300" style={{ lineHeight: '1.8' }}>Duplicated customer profiles across systems</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-3"></div>
                  <p className="text-gray-300" style={{ lineHeight: '1.8' }}>Inaccurate customer analytics and inventory insights</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-3"></div>
                  <p className="text-gray-300" style={{ lineHeight: '1.8' }}>Wasted marketing spend due to poor data quality</p>
                </div>
              </div>
            </div>

            <div className="bg-red-900/20 p-8 rounded-lg border border-red-800/30">
              <h3 className="text-xl font-semibold text-red-400 mb-6">The Cost of Fragmented Retail Data</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Wasted marketing spend</span>
                  <span className="text-red-400 font-semibold">High</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Poor customer insights</span>
                  <span className="text-red-400 font-semibold">Critical</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Inventory optimization issues</span>
                  <span className="text-red-400 font-semibold">High</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Manual data processing costs</span>
                  <span className="text-red-400 font-semibold">Medium</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Visualization */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-16" style={{ lineHeight: '1.8' }}>
            How Data Coffee Transforms Retail Data
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Before */}
            <Card className="bg-red-900/20 border-red-800/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-red-400 mb-6">Before: Disparate Data Sources</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg">
                    <div className="w-4 h-4 bg-red-400 rounded"></div>
                    <span className="text-gray-300">POS, E-commerce, Loyalty DB</span>
                  </div>
                  <div className="flex items-center justify-center py-2">
                    <ArrowRight className="w-6 h-6 text-red-400" />
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg">
                    <div className="w-4 h-4 bg-red-400 rounded"></div>
                    <span className="text-gray-300">Manual Reconciliation</span>
                  </div>
                  <div className="flex items-center justify-center py-2">
                    <ArrowRight className="w-6 h-6 text-red-400" />
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg">
                    <div className="w-4 h-4 bg-red-400 rounded"></div>
                    <span className="text-gray-300">Inaccurate Customer Profiles & Inventory</span>
                  </div>
                  <div className="flex items-center justify-center py-2">
                    <ArrowRight className="w-6 h-6 text-red-400" />
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-red-900/30 rounded-lg border border-red-800/50">
                    <div className="w-4 h-4 bg-red-500 rounded"></div>
                    <span className="text-red-300 font-semibold">Wasted Marketing Spend</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* After */}
            <Card className="bg-green-900/20 border-green-800/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-green-400 mb-6">After: Unified Data Hub</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg">
                    <div className="w-4 h-4 bg-green-400 rounded"></div>
                    <span className="text-gray-300">POS, E-commerce, Loyalty DB</span>
                  </div>
                  <div className="flex items-center justify-center py-2">
                    <ArrowRight className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg">
                    <div className="w-4 h-4 bg-green-400 rounded"></div>
                    <span className="text-gray-300">Data Coffee: Automated Unification</span>
                  </div>
                  <div className="flex items-center justify-center py-2">
                    <ArrowRight className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg">
                    <div className="w-4 h-4 bg-green-400 rounded"></div>
                    <span className="text-gray-300">Single Customer & Inventory View</span>
                  </div>
                  <div className="flex items-center justify-center py-2">
                    <ArrowRight className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-green-900/30 rounded-lg border border-green-800/50">
                    <div className="w-4 h-4 bg-green-500 rounded"></div>
                    <span className="text-green-300 font-semibold">Effective Marketing & Optimal Inventory</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-16" style={{ lineHeight: '1.8' }}>
            Proven Retail Results
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-8 text-center">
                  <benefit.icon className="w-12 h-12 text-orange-400 mx-auto mb-6" />
                  <div className="text-4xl font-bold text-white mb-4">
                    <AnimatedCounter end={benefit.value} suffix="%" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4" style={{ lineHeight: '1.8' }}>
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300" style={{ lineHeight: '1.8' }}>
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-16" style={{ lineHeight: '1.8' }}>
            Advanced Retail Data Capabilities
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <capability.icon className="w-8 h-8 text-orange-400 mr-4" />
                    <h3 className="text-xl font-semibold text-white" style={{ lineHeight: '1.8' }}>
                      {capability.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-6" style={{ lineHeight: '1.8' }}>
                    {capability.description}
                  </p>
                  <ul className="space-y-2">
                    {capability.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                        <span style={{ lineHeight: '1.8' }}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-16" style={{ lineHeight: '1.8' }}>
            How Data Coffee Works for Retail
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4" style={{ lineHeight: '1.8' }}>
                Data Source Connection
              </h3>
              <p className="text-gray-300" style={{ lineHeight: '1.8' }}>
                Data Coffee automatically connects to all retail data sources including POS systems, e-commerce platforms, loyalty programs, and social media channels.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4" style={{ lineHeight: '1.8' }}>
                Intelligent Data Processing
              </h3>
              <p className="text-gray-300" style={{ lineHeight: '1.8' }}>
                Advanced algorithms automatically clean, de-duplicate, and standardize customer and inventory data, resolving inconsistencies and creating unified profiles.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4" style={{ lineHeight: '1.8' }}>
                Unified Analytics Platform
              </h3>
              <p className="text-gray-300" style={{ lineHeight: '1.8' }}>
                Creates a single source of truth for customer and inventory data, enabling accurate analytics, effective marketing campaigns, and optimal inventory management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8" style={{ lineHeight: '1.8' }}>
            Ready to Unify Your Retail Data?
          </h2>
          <p className="text-xl text-gray-300 mb-12" style={{ lineHeight: '1.8' }}>
            Join leading retailers using Data Coffee to eliminate manual data wrangling, create unified customer profiles, and optimize inventory management.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4">
              Schedule Retail Demo
            </Button>
            <Button size="lg" variant="outline" className="border-orange-600 text-orange-400 hover:bg-orange-600/10 px-8 py-4">
              Download ROI Calculator
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
