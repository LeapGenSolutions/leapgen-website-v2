
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Download, Heart, TrendingUp, Clock, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Healthcare Case Study - Regional Health Network | LeapGen.AI',
  description: 'How a 500-bed hospital system reduced documentation time by 50% and improved patient satisfaction by 25% with Seismic AI.',
}

export default function HealthcareCaseStudyPage() {
  return (
    <div className="min-h-screen pt-16">
      <section className="section-padding bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Regional Health Network Case Study
              </h1>
              <p className="text-xl text-gray-300">
                How a 500-bed hospital system transformed clinical documentation with AI
              </p>
            </div>

            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-red-400 mb-2">50%</div>
                    <div className="text-gray-300">Reduction in Documentation Time</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-pink-400 mb-2">35%</div>
                    <div className="text-gray-300">Improvement in Billing Accuracy</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-400 mb-2">25%</div>
                    <div className="text-gray-300">Increase in Patient Satisfaction</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="prose prose-invert max-w-none">
              <h2>The Challenge</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Regional Health Network, a 500-bed hospital system serving over 100,000 patients annually, 
                faced significant challenges with clinical documentation. Physicians were spending up to 
                3 hours per day on documentation tasks, leading to burnout and reduced patient interaction time.
              </p>

              <h2>The Solution</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                The hospital implemented Seismic AI across 15 departments, including emergency medicine, 
                internal medicine, and surgery. The AI-powered system provided real-time clinical note 
                generation, automated billing code suggestions, and emotional intelligence insights.
              </p>

              <h2>Results</h2>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-red-400" />
                      <span>Time Savings</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-300">
                      <li>• 2 hours saved per physician per day</li>
                      <li>• 50% reduction in documentation time</li>
                      <li>• 40% increase in patient interaction time</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <TrendingUp className="w-5 h-5 text-pink-400" />
                      <span>Quality Improvements</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-300">
                      <li>• 35% improvement in billing accuracy</li>
                      <li>• 40% reduction in documentation errors</li>
                      <li>• 25% increase in patient satisfaction</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gradient-to-r from-red-900/20 to-pink-900/20 rounded-lg p-8 border border-red-500/20 my-8">
                <h3 className="text-2xl font-bold mb-4">Download Full Case Study</h3>
                <p className="text-gray-300 mb-6">
                  Get the complete case study with detailed implementation timeline, 
                  ROI analysis, and lessons learned.
                </p>
                <Button asChild size="lg">
                  <Link href="/contact?type=resource&resource=healthcare-case-study">
                    <Download className="mr-2 w-5 h-5" />
                    Download PDF
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
