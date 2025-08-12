
'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Database, BarChart3, Shield, Settings, CheckCircle, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'

export default function DataMaturityCalculatorPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)

  const questions = [
    {
      id: 0,
      category: 'Data Strategy',
      question: 'How well-defined is your organization\'s data strategy?',
      options: [
        { value: '5', label: 'Comprehensive strategy with clear roadmap and governance' },
        { value: '4', label: 'Well-defined strategy with some implementation gaps' },
        { value: '3', label: 'Basic strategy exists but lacks detail' },
        { value: '2', label: 'Informal approach with limited strategic direction' },
        { value: '1', label: 'No formal data strategy in place' }
      ]
    },
    {
      id: 1,
      category: 'Data Quality',
      question: 'What is the current state of your data quality?',
      options: [
        { value: '5', label: 'Excellent - automated quality checks, high accuracy' },
        { value: '4', label: 'Good - regular quality monitoring with minor issues' },
        { value: '3', label: 'Fair - some quality processes but inconsistent' },
        { value: '2', label: 'Poor - significant quality issues affecting decisions' },
        { value: '1', label: 'Very poor - unreliable data with major accuracy problems' }
      ]
    },
    {
      id: 2,
      category: 'Data Architecture',
      question: 'How would you describe your data architecture?',
      options: [
        { value: '5', label: 'Modern, cloud-native with real-time capabilities' },
        { value: '4', label: 'Well-structured hybrid architecture' },
        { value: '3', label: 'Traditional architecture with some modernization' },
        { value: '2', label: 'Legacy systems with limited integration' },
        { value: '1', label: 'Fragmented, outdated infrastructure' }
      ]
    },
    {
      id: 3,
      category: 'Data Governance',
      question: 'What is your level of data governance maturity?',
      options: [
        { value: '5', label: 'Comprehensive governance with clear policies and enforcement' },
        { value: '4', label: 'Good governance framework with regular reviews' },
        { value: '3', label: 'Basic governance policies in place' },
        { value: '2', label: 'Informal governance with limited oversight' },
        { value: '1', label: 'No formal governance structure' }
      ]
    },
    {
      id: 4,
      category: 'Data Integration',
      question: 'How well-integrated are your data sources?',
      options: [
        { value: '5', label: 'Fully integrated with real-time data flows' },
        { value: '4', label: 'Well-integrated with automated ETL processes' },
        { value: '3', label: 'Partially integrated with manual processes' },
        { value: '2', label: 'Limited integration, mostly siloed data' },
        { value: '1', label: 'No integration, completely siloed systems' }
      ]
    },
    {
      id: 5,
      category: 'Analytics Capability',
      question: 'What is your current analytics maturity level?',
      options: [
        { value: '5', label: 'Advanced predictive and prescriptive analytics' },
        { value: '4', label: 'Good diagnostic and some predictive analytics' },
        { value: '3', label: 'Basic descriptive analytics and reporting' },
        { value: '2', label: 'Limited reporting capabilities' },
        { value: '1', label: 'Minimal or no analytics capabilities' }
      ]
    },
    {
      id: 6,
      category: 'Data Security',
      question: 'How robust are your data security measures?',
      options: [
        { value: '5', label: 'Comprehensive security with advanced threat protection' },
        { value: '4', label: 'Strong security measures with regular audits' },
        { value: '3', label: 'Basic security controls in place' },
        { value: '2', label: 'Limited security measures' },
        { value: '1', label: 'Minimal or inadequate security' }
      ]
    },
    {
      id: 7,
      category: 'Data Skills',
      question: 'What is your team\'s data literacy and skills level?',
      options: [
        { value: '5', label: 'High data literacy across organization with specialists' },
        { value: '4', label: 'Good data skills in key roles' },
        { value: '3', label: 'Basic data skills with some training needs' },
        { value: '2', label: 'Limited data skills, significant training required' },
        { value: '1', label: 'Low data literacy across organization' }
      ]
    },
    {
      id: 8,
      category: 'Data Culture',
      question: 'How data-driven is your organizational culture?',
      options: [
        { value: '5', label: 'Highly data-driven with evidence-based decision making' },
        { value: '4', label: 'Generally data-driven with some exceptions' },
        { value: '3', label: 'Mixed approach to data-driven decisions' },
        { value: '2', label: 'Limited use of data in decision making' },
        { value: '1', label: 'Decisions made primarily on intuition/experience' }
      ]
    },
    {
      id: 9,
      category: 'Data Innovation',
      question: 'How advanced are your data innovation initiatives?',
      options: [
        { value: '5', label: 'Leading edge with AI/ML and advanced analytics' },
        { value: '4', label: 'Good innovation with some AI/ML initiatives' },
        { value: '3', label: 'Basic innovation projects underway' },
        { value: '2', label: 'Limited innovation, mostly traditional approaches' },
        { value: '1', label: 'No significant data innovation initiatives' }
      ]
    }
  ]

  const handleAnswerChange = (value: string) => {
    setAnswers({ ...answers, [currentQuestion]: value })
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const calculateScore = () => {
    const totalScore = Object.values(answers).reduce((sum, value) => sum + parseInt(value), 0)
    const maxScore = questions.length * 5
    return Math.round((totalScore / maxScore) * 100)
  }

  const getMaturityLevel = (score: number) => {
    if (score >= 85) return { level: 'Optimized', color: 'text-green-400', description: 'Industry-leading data maturity with advanced capabilities' }
    if (score >= 70) return { level: 'Managed', color: 'text-blue-400', description: 'Well-managed data with good governance and processes' }
    if (score >= 55) return { level: 'Defined', color: 'text-purple-400', description: 'Structured approach with defined processes' }
    if (score >= 40) return { level: 'Developing', color: 'text-yellow-400', description: 'Basic capabilities with room for improvement' }
    return { level: 'Initial', color: 'text-red-400', description: 'Early stage with significant development needed' }
  }

  const getCategoryScores = () => {
    const categories = ['Data Strategy', 'Data Quality', 'Data Architecture', 'Data Governance', 'Data Integration', 'Analytics Capability', 'Data Security', 'Data Skills', 'Data Culture', 'Data Innovation']
    return categories.map((category, index) => {
      const score = answers[index] ? parseInt(answers[index]) : 0
      return { category, score: (score / 5) * 100 }
    })
  }

  if (showResults) {
    const score = calculateScore()
    const maturity = getMaturityLevel(score)
    const categoryScores = getCategoryScores()

    return (
      <div className="min-h-screen pt-16">
        <section className="section-padding bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="container mx-auto px-4">
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
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Your Data Maturity <span className="gradient-text">Assessment Results</span>
                </h1>
                
                <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg p-8 border border-blue-500/20 mb-8">
                  <div className="text-6xl font-bold mb-4 gradient-text">{score}%</div>
                  <div className={`text-2xl font-semibold mb-2 ${maturity.color}`}>{maturity.level}</div>
                  <p className="text-gray-300">{maturity.description}</p>
                </div>
              </div>

              {/* Maturity Model */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-center mb-8">Data Maturity Model</h2>
                <div className="grid grid-cols-5 gap-2 mb-6">
                  {[
                    { level: 'Initial', min: 0, max: 39, color: 'bg-red-600' },
                    { level: 'Developing', min: 40, max: 54, color: 'bg-yellow-600' },
                    { level: 'Defined', min: 55, max: 69, color: 'bg-purple-600' },
                    { level: 'Managed', min: 70, max: 84, color: 'bg-blue-600' },
                    { level: 'Optimized', min: 85, max: 100, color: 'bg-green-600' }
                  ].map((level, index) => (
                    <div key={index} className="text-center">
                      <div className={`h-8 ${level.color} ${score >= level.min && score <= level.max ? 'ring-2 ring-white' : ''} rounded`}></div>
                      <div className="text-xs mt-2 text-gray-400">{level.level}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Breakdown */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-center mb-8">Category Assessment</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {categoryScores.map((item, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold">{item.category}</span>
                          <span className="text-sm text-gray-400">{Math.round(item.score)}%</span>
                        </div>
                        <Progress value={item.score} className="h-2" />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Recommendations */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-center mb-8">Improvement Recommendations</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {score >= 85 ? (
                    <>
                      <Card className="bg-green-900/20 border-green-500/30">
                        <CardHeader>
                          <CardTitle className="flex items-center space-x-2">
                            <CheckCircle className="w-5 h-5 text-green-400" />
                            <span>Maintain Excellence</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-gray-300">
                            <li>• Continue innovation with emerging technologies</li>
                            <li>• Share best practices across industry</li>
                            <li>• Invest in advanced AI/ML capabilities</li>
                            <li>• Mentor other organizations</li>
                          </ul>
                        </CardContent>
                      </Card>
                      <Card className="bg-blue-900/20 border-blue-500/30">
                        <CardHeader>
                          <CardTitle className="flex items-center space-x-2">
                            <BarChart3 className="w-5 h-5 text-blue-400" />
                            <span>Advanced Opportunities</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-gray-300">
                            <li>• Explore edge computing and IoT integration</li>
                            <li>• Implement real-time decision engines</li>
                            <li>• Develop data monetization strategies</li>
                            <li>• Lead industry data standards</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </>
                  ) : score >= 70 ? (
                    <>
                      <Card className="bg-blue-900/20 border-blue-500/30">
                        <CardHeader>
                          <CardTitle className="flex items-center space-x-2">
                            <BarChart3 className="w-5 h-5 text-blue-400" />
                            <span>Optimization Focus</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-gray-300">
                            <li>• Enhance real-time analytics capabilities</li>
                            <li>• Implement advanced data governance</li>
                            <li>• Expand self-service analytics</li>
                            <li>• Develop predictive models</li>
                          </ul>
                        </CardContent>
                      </Card>
                      <Card className="bg-purple-900/20 border-purple-500/30">
                        <CardHeader>
                          <CardTitle className="flex items-center space-x-2">
                            <Settings className="w-5 h-5 text-purple-400" />
                            <span>Process Improvement</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-gray-300">
                            <li>• Automate data quality monitoring</li>
                            <li>• Standardize data integration processes</li>
                            <li>• Enhance data security measures</li>
                            <li>• Improve data literacy training</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </>
                  ) : score >= 55 ? (
                    <>
                      <Card className="bg-purple-900/20 border-purple-500/30">
                        <CardHeader>
                          <CardTitle className="flex items-center space-x-2">
                            <Database className="w-5 h-5 text-purple-400" />
                            <span>Foundation Strengthening</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-gray-300">
                            <li>• Implement comprehensive data governance</li>
                            <li>• Improve data integration capabilities</li>
                            <li>• Enhance data quality processes</li>
                            <li>• Develop analytics competencies</li>
                          </ul>
                        </CardContent>
                      </Card>
                      <Card className="bg-yellow-900/20 border-yellow-500/30">
                        <CardHeader>
                          <CardTitle className="flex items-center space-x-2">
                            <Shield className="w-5 h-5 text-yellow-400" />
                            <span>Infrastructure Investment</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-gray-300">
                            <li>• Modernize data architecture</li>
                            <li>• Invest in cloud capabilities</li>
                            <li>• Strengthen security measures</li>
                            <li>• Build data team capabilities</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </>
                  ) : (
                    <>
                      <Card className="bg-yellow-900/20 border-yellow-500/30">
                        <CardHeader>
                          <CardTitle className="flex items-center space-x-2">
                            <AlertTriangle className="w-5 h-5 text-yellow-400" />
                            <span>Critical Foundations</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-gray-300">
                            <li>• Develop comprehensive data strategy</li>
                            <li>• Establish basic data governance</li>
                            <li>• Improve data quality fundamentals</li>
                            <li>• Build organizational data awareness</li>
                          </ul>
                        </CardContent>
                      </Card>
                      <Card className="bg-red-900/20 border-red-500/30">
                        <CardHeader>
                          <CardTitle className="flex items-center space-x-2">
                            <Database className="w-5 h-5 text-red-400" />
                            <span>Immediate Actions</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-gray-300">
                            <li>• Secure executive sponsorship</li>
                            <li>• Conduct data inventory and audit</li>
                            <li>• Implement basic security measures</li>
                            <li>• Start data literacy training</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </>
                  )}
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-6">Ready to Improve Your Data Maturity?</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Get expert guidance on your data transformation journey with a personalized consultation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="xl">
                    <Link href="/contact?type=consultation&source=data-maturity-calculator">
                      Schedule Data Strategy Consultation
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="xl">
                    <Link href="/resources/data-governance-ai">
                      Download Data Governance Guide
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

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://ubiq.co/analytics-blog/wp-content/uploads/2020/05/sample-dashboard-2.png"
            alt="Data Maturity Calculator"
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
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Database className="w-8 h-8 text-white" />
              </div>
              <div className="inline-block px-3 py-1 bg-blue-600/20 text-blue-400 text-sm rounded-full mb-4">
                Assessment Tool • Data Strategy • 8 Minutes
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Data Maturity <span className="gradient-text">Calculator</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Assess your data infrastructure and identify areas for improvement before AI implementation
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">Question {currentQuestion + 1} of {questions.length}</span>
                <span className="text-sm text-gray-400">{Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete</span>
              </div>
              <Progress value={((currentQuestion + 1) / questions.length) * 100} className="h-2" />
            </div>

            {/* Question Card */}
            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="px-2 py-1 bg-blue-600/20 text-blue-400 text-xs rounded-full">
                    {questions[currentQuestion].category}
                  </span>
                </div>
                <CardTitle className="text-xl">{questions[currentQuestion].question}</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  value={answers[currentQuestion] || ''}
                  onValueChange={handleAnswerChange}
                  className="space-y-4"
                >
                  {questions[currentQuestion].options.map((option, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <RadioGroupItem value={option.value} id={`option-${index}`} className="mt-1" />
                      <Label htmlFor={`option-${index}`} className="text-gray-300 leading-relaxed cursor-pointer">
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={prevQuestion}
                disabled={currentQuestion === 0}
              >
                Previous
              </Button>
              <Button
                onClick={nextQuestion}
                disabled={!answers[currentQuestion]}
              >
                {currentQuestion === questions.length - 1 ? 'Get Results' : 'Next'}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
