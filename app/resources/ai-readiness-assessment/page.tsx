
'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle, AlertTriangle, TrendingUp, Users, Database, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'

export default function AIReadinessAssessmentPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)

  const questions = [
    {
      id: 0,
      category: 'Strategy',
      question: 'How clearly defined are your organization\'s AI objectives?',
      options: [
        { value: '4', label: 'Very clear - we have specific, measurable AI goals' },
        { value: '3', label: 'Somewhat clear - we have general AI aspirations' },
        { value: '2', label: 'Unclear - we\'re exploring AI but lack specific goals' },
        { value: '1', label: 'No clear objectives - AI is not a strategic priority' }
      ]
    },
    {
      id: 1,
      category: 'Data',
      question: 'How would you rate the quality and accessibility of your data?',
      options: [
        { value: '4', label: 'Excellent - clean, well-organized, easily accessible' },
        { value: '3', label: 'Good - mostly clean with some accessibility challenges' },
        { value: '2', label: 'Fair - data exists but requires significant cleanup' },
        { value: '1', label: 'Poor - data is fragmented, inconsistent, or inaccessible' }
      ]
    },
    {
      id: 2,
      category: 'Technology',
      question: 'What is your current technology infrastructure capability?',
      options: [
        { value: '4', label: 'Modern cloud-based infrastructure with AI/ML capabilities' },
        { value: '3', label: 'Hybrid infrastructure with some cloud capabilities' },
        { value: '2', label: 'Traditional on-premise infrastructure' },
        { value: '1', label: 'Legacy systems with limited scalability' }
      ]
    },
    {
      id: 3,
      category: 'Skills',
      question: 'How would you assess your team\'s AI/ML expertise?',
      options: [
        { value: '4', label: 'Strong - we have dedicated AI/ML experts' },
        { value: '3', label: 'Moderate - some team members have AI/ML knowledge' },
        { value: '2', label: 'Limited - minimal AI/ML expertise in-house' },
        { value: '1', label: 'None - no AI/ML expertise currently available' }
      ]
    },
    {
      id: 4,
      category: 'Culture',
      question: 'How receptive is your organization to AI adoption?',
      options: [
        { value: '4', label: 'Very receptive - leadership and staff are enthusiastic' },
        { value: '3', label: 'Mostly receptive - some resistance but generally positive' },
        { value: '2', label: 'Mixed - significant resistance from some stakeholders' },
        { value: '1', label: 'Resistant - major cultural barriers to AI adoption' }
      ]
    },
    {
      id: 5,
      category: 'Governance',
      question: 'What is your current state of data governance and compliance?',
      options: [
        { value: '4', label: 'Excellent - comprehensive governance with clear policies' },
        { value: '3', label: 'Good - basic governance structures in place' },
        { value: '2', label: 'Developing - some policies but gaps exist' },
        { value: '1', label: 'Minimal - limited governance and compliance measures' }
      ]
    },
    {
      id: 6,
      category: 'Budget',
      question: 'What is your organization\'s AI investment readiness?',
      options: [
        { value: '4', label: 'Strong - dedicated AI budget allocated' },
        { value: '3', label: 'Moderate - some budget available for AI initiatives' },
        { value: '2', label: 'Limited - minimal budget for AI exploration' },
        { value: '1', label: 'None - no current budget for AI investments' }
      ]
    },
    {
      id: 7,
      category: 'Use Cases',
      question: 'How well-defined are your AI use cases?',
      options: [
        { value: '4', label: 'Very well-defined - specific use cases with clear ROI' },
        { value: '3', label: 'Somewhat defined - general use cases identified' },
        { value: '2', label: 'Exploring - considering various possibilities' },
        { value: '1', label: 'Undefined - no specific use cases identified' }
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
    const maxScore = questions.length * 4
    return Math.round((totalScore / maxScore) * 100)
  }

  const getReadinessLevel = (score: number) => {
    if (score >= 80) return { level: 'AI Ready', color: 'text-green-400', description: 'Your organization is well-positioned for AI implementation' }
    if (score >= 60) return { level: 'Mostly Ready', color: 'text-blue-400', description: 'Good foundation with some areas for improvement' }
    if (score >= 40) return { level: 'Developing', color: 'text-yellow-400', description: 'Significant preparation needed before AI implementation' }
    return { level: 'Not Ready', color: 'text-red-400', description: 'Substantial foundational work required' }
  }

  const getCategoryScores = () => {
    const categories = ['Strategy', 'Data', 'Technology', 'Skills', 'Culture', 'Governance', 'Budget', 'Use Cases']
    return categories.map((category, index) => {
      const score = answers[index] ? parseInt(answers[index]) : 0
      return { category, score: (score / 4) * 100 }
    })
  }

  if (showResults) {
    const score = calculateScore()
    const readiness = getReadinessLevel(score)
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
                  Your AI Readiness <span className="gradient-text">Assessment Results</span>
                </h1>
                
                <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-lg p-8 border border-purple-500/20 mb-8">
                  <div className="text-6xl font-bold mb-4 gradient-text">{score}%</div>
                  <div className={`text-2xl font-semibold mb-2 ${readiness.color}`}>{readiness.level}</div>
                  <p className="text-gray-300">{readiness.description}</p>
                </div>
              </div>

              {/* Category Breakdown */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-center mb-8">Category Breakdown</h2>
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
                <h2 className="text-3xl font-bold text-center mb-8">Recommendations</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {score >= 80 ? (
                    <>
                      <Card className="bg-green-900/20 border-green-500/30">
                        <CardHeader>
                          <CardTitle className="flex items-center space-x-2">
                            <CheckCircle className="w-5 h-5 text-green-400" />
                            <span>Ready to Proceed</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-gray-300">
                            <li>• Begin with pilot AI projects</li>
                            <li>• Focus on high-impact use cases</li>
                            <li>• Establish AI governance framework</li>
                            <li>• Plan for organization-wide rollout</li>
                          </ul>
                        </CardContent>
                      </Card>
                      <Card className="bg-blue-900/20 border-blue-500/30">
                        <CardHeader>
                          <CardTitle className="flex items-center space-x-2">
                            <TrendingUp className="w-5 h-5 text-blue-400" />
                            <span>Next Steps</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-gray-300">
                            <li>• Schedule AI strategy consultation</li>
                            <li>• Evaluate AI platform options</li>
                            <li>• Develop implementation timeline</li>
                            <li>• Create success metrics framework</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </>
                  ) : score >= 60 ? (
                    <>
                      <Card className="bg-blue-900/20 border-blue-500/30">
                        <CardHeader>
                          <CardTitle className="flex items-center space-x-2">
                            <TrendingUp className="w-5 h-5 text-blue-400" />
                            <span>Areas to Strengthen</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-gray-300">
                            <li>• Improve data quality and accessibility</li>
                            <li>• Invest in team AI/ML training</li>
                            <li>• Upgrade technology infrastructure</li>
                            <li>• Define clearer AI objectives</li>
                          </ul>
                        </CardContent>
                      </Card>
                      <Card className="bg-purple-900/20 border-purple-500/30">
                        <CardHeader>
                          <CardTitle className="flex items-center space-x-2">
                            <Users className="w-5 h-5 text-purple-400" />
                            <span>Recommended Actions</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-gray-300">
                            <li>• Conduct data audit and cleanup</li>
                            <li>• Develop AI skills training program</li>
                            <li>• Start with low-risk pilot projects</li>
                            <li>• Build stakeholder buy-in</li>
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
                            <span>Foundation Building</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-gray-300">
                            <li>• Establish clear AI strategy</li>
                            <li>• Invest in data infrastructure</li>
                            <li>• Build internal AI capabilities</li>
                            <li>• Address cultural resistance</li>
                          </ul>
                        </CardContent>
                      </Card>
                      <Card className="bg-red-900/20 border-red-500/30">
                        <CardHeader>
                          <CardTitle className="flex items-center space-x-2">
                            <Shield className="w-5 h-5 text-red-400" />
                            <span>Critical Prerequisites</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-gray-300">
                            <li>• Secure executive sponsorship</li>
                            <li>• Allocate sufficient budget</li>
                            <li>• Implement data governance</li>
                            <li>• Partner with AI experts</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </>
                  )}
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-6">Ready to Take the Next Step?</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Get personalized recommendations and a detailed AI implementation roadmap for your organization.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="xl">
                    <Link href="/contact?type=consultation&source=ai-readiness-assessment">
                      Schedule Expert Consultation
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="xl">
                    <Link href="/resources/roi-calculator">
                      Calculate AI ROI
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
            src="https://img.freepik.com/premium-photo/evaluation-assessment-featuring-elements-like-checklists-evaluation-forms-scorecards-symbolizing-review-grading-assessment_87543-51660.jpg?w=900"
            alt="AI Readiness Assessment"
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
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <div className="inline-block px-3 py-1 bg-purple-600/20 text-purple-400 text-sm rounded-full mb-4">
                Assessment Tool • AI Strategy • 5 Minutes
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                AI Readiness <span className="gradient-text">Assessment</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Evaluate your organization's readiness for AI implementation with our comprehensive assessment tool
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
                  <span className="px-2 py-1 bg-purple-600/20 text-purple-400 text-xs rounded-full">
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
