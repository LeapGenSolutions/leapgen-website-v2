
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Users, CheckCircle, AlertTriangle, TrendingUp, Shield, Database, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const outcomes = [
  { metric: '20%', description: 'Increase in customer lifetime value through personalized offers' },
  { metric: '60%', description: 'Reduction in fraud detection time' },
  { metric: '95%', description: 'Enhancement in regulatory compliance reporting accuracy' }
]

const workflow = [
  {
    step: '1',
    title: 'Data Coffee Unifies',
    description: 'Automatically ingests and cleanses data from all financial systems',
    icon: Database
  },
  {
    step: '2',
    title: 'Creates Golden Records',
    description: 'Builds single, accurate customer profiles across all touchpoints',
    icon: Shield
  },
  {
    step: '3',
    title: 'Surround AI Analyzes',
    description: 'Applies dynamic intelligence to unified data for predictive insights',
    icon: TrendingUp
  },
  {
    step: '4',
    title: 'Delivers Results',
    description: 'Provides real-time recommendations and proactive interventions',
    icon: Zap
  }
]

export default function CompleteSolutionFinancePage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://img.freepik.com/free-photo/futuristic-business-scene-with-ultra-modern-ambiance_23-2151003751.jpg"
            alt="Complete Financial Intelligence Solution"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Users className="w-8 h-8 text-purple-400" />
              <span className="text-purple-400 font-semibold">Complete Financial Intelligence</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              The Ultimate <span className="gradient-text">Financial AI Platform</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12">
              Combine the power of Data Coffee's unified data management with Surround AI's predictive intelligence to transform every aspect of your financial operations.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="section-padding bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-red-900/20 border-red-500/30">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="w-6 h-6 text-red-400" />
                    <CardTitle className="text-2xl text-red-400">The Challenge</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    Financial institutions face a constant battle with data silos, incomplete customer profiles, and a lack of real-time insights. 
                    This leads to missed opportunities for upselling and cross-selling, increased risk exposure due to inaccurate data, and a sluggish response to market changes and customer needs.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    The manual effort required to unify and cleanse data is costly and prone to error, while traditional analytics provide only backward-looking insights.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                The Complete <span className="gradient-text">Solution</span>
              </h2>
              <p className="text-gray-300 leading-relaxed">
                By combining Data Coffee's data unification capabilities with Surround AI's predictive intelligence, 
                you get a comprehensive platform that not only solves your data challenges but transforms them into competitive advantages.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Unified customer data across all systems and touchpoints</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Real-time predictive analytics for proactive decision-making</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Personalized customer experiences at scale</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Enhanced fraud detection and risk management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How the <span className="gradient-text">Complete Solution</span> Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A seamless integration of data unification and AI intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflow.map((step, index) => {
              const IconComponent = step.icon
              return (
                <Card key={index} className="text-center group hover:scale-105 transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">{step.step}</span>
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-purple-400" />
                    </div>
                    <CardDescription className="text-gray-300">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Solution Description */}
      <section className="section-padding bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              The Power of <span className="gradient-text">Integration</span>
            </h2>
            <Card className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border-purple-500/20">
              <CardContent className="p-8">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Surround AI and Data Coffee work together to create a single, comprehensive view of every customer and market trend. 
                  Data Coffee automatically ingests data from all sources—internal systems, public records, and even social media—and intelligently cleanses, 
                  de-duplicates, and normalizes it.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Surround AI then builds on this clean data to create a dynamic, real-time profile. It analyzes customer behavior, spending habits, 
                  and life events to predict future needs and potential risks. This allows your institution to proactively offer relevant products, 
                  identify fraud patterns more quickly, and personalize every customer interaction.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  The result is a financial institution that operates with unprecedented insight, agility, and customer focus—turning data from a 
                  burden into your greatest competitive advantage.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Expected <span className="gradient-text">Outcomes</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Measurable results from the complete financial intelligence solution
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {outcomes.map((outcome, index) => (
              <Card key={index} className="text-center group hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className="text-5xl font-bold gradient-text mb-4">{outcome.metric}</div>
                  <CardDescription className="text-gray-300 text-lg">
                    {outcome.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Real-World <span className="gradient-text">Applications</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Personalized Financial Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Combine unified customer data with predictive analytics to deliver perfectly timed, relevant financial products and services.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Life event-triggered product recommendations</li>
                  <li>• Dynamic pricing based on customer value</li>
                  <li>• Proactive financial planning advice</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Advanced Fraud Prevention</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Leverage clean, comprehensive data to power sophisticated fraud detection models that adapt in real-time.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Real-time transaction risk scoring</li>
                  <li>• Behavioral pattern anomaly detection</li>
                  <li>• Predictive fraud prevention</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Regulatory Compliance Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Ensure perfect regulatory compliance with unified, accurate data and intelligent monitoring systems.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Automated compliance reporting</li>
                  <li>• Real-time regulatory risk monitoring</li>
                  <li>• Audit-ready data lineage</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Customer Retention & Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Predict customer behavior and needs to reduce churn and maximize lifetime value.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Churn prediction and prevention</li>
                  <li>• Cross-sell and upsell optimization</li>
                  <li>• Customer satisfaction forecasting</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-purple-900/20 to-blue-900/20 border-y border-purple-500/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transform Your Financial Institution Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Experience the power of unified data and predictive intelligence working together to revolutionize your financial operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                <Link href="/contact?type=demo&product=complete-solution&industry=finance">
                  Schedule Complete Demo
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
    </div>
  )
}
