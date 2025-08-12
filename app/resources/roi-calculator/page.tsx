
'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calculator, TrendingUp, DollarSign, Clock, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function ROICalculatorPage() {
  const [formData, setFormData] = useState({
    industry: '',
    companySize: '',
    currentSupportCosts: '',
    supportTickets: '',
    avgResolutionTime: '',
    dataProcessingTime: '',
    complianceHours: ''
  })

  const [results, setResults] = useState<any>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const calculateROI = () => {
    const supportCosts = parseFloat(formData.currentSupportCosts) || 0
    const tickets = parseFloat(formData.supportTickets) || 0
    const resolutionTime = parseFloat(formData.avgResolutionTime) || 0
    const dataTime = parseFloat(formData.dataProcessingTime) || 0
    const complianceTime = parseFloat(formData.complianceHours) || 0

    // Calculate potential savings with updated 60% reduction
    const supportSavings = supportCosts * 0.6 // 60% reduction
    const timeSavings = (resolutionTime * tickets * 0.75 * 50) / 2080 // 75% faster resolution
    const dataSavings = (dataTime * 10 * 50) / 2080 // 10x faster data processing
    const complianceSavings = (complianceTime * 0.9 * 100) / 2080 // 90% automation

    const totalAnnualSavings = supportSavings + timeSavings + dataSavings + complianceSavings
    const implementationCost = 50000 // Estimated implementation cost
    const annualLicenseCost = totalAnnualSavings * 0.3 // 30% of savings
    const netSavings = totalAnnualSavings - annualLicenseCost
    const roi = ((netSavings - implementationCost) / implementationCost) * 100
    const paybackPeriod = implementationCost / (netSavings / 12)

    setResults({
      totalAnnualSavings: Math.round(totalAnnualSavings),
      netSavings: Math.round(netSavings),
      roi: Math.round(roi),
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
      supportSavings: Math.round(supportSavings),
      timeSavings: Math.round(timeSavings),
      dataSavings: Math.round(dataSavings),
      complianceSavings: Math.round(complianceSavings)
    })
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://www.smartsheet.com/sites/default/files/IC-PLM-Product-Lifecycle-Management-ROI-Calculator.png"
            alt="ROI Calculator"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                <Calculator className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              AI ROI <span className="gradient-text">Calculator</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Calculate the potential return on investment for implementing LeapGen.AI solutions 
              in your organization. Get personalized estimates based on your current operations.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="section-padding bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Input Form */}
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl">Your Organization Details</CardTitle>
                <CardDescription className="text-gray-300">
                  Provide some basic information about your current operations to get accurate ROI estimates.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Industry</label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    className="form-input"
                  >
                    <option value="">Select your industry</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="financial">Financial Services</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="retail">Retail</option>
                    <option value="technology">Technology</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Company Size</label>
                  <select
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleInputChange}
                    className="form-input"
                  >
                    <option value="">Select company size</option>
                    <option value="small">1-50 employees</option>
                    <option value="medium">51-500 employees</option>
                    <option value="large">501-5000 employees</option>
                    <option value="enterprise">5000+ employees</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Annual Customer Support Costs ($)
                  </label>
                  <input
                    type="number"
                    name="currentSupportCosts"
                    value={formData.currentSupportCosts}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="e.g., 500000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Monthly Support Tickets
                  </label>
                  <input
                    type="number"
                    name="supportTickets"
                    value={formData.supportTickets}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="e.g., 1000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Average Resolution Time (hours)
                  </label>
                  <input
                    type="number"
                    name="avgResolutionTime"
                    value={formData.avgResolutionTime}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="e.g., 4"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Weekly Data Processing Time (hours)
                  </label>
                  <input
                    type="number"
                    name="dataProcessingTime"
                    value={formData.dataProcessingTime}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="e.g., 20"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Monthly Compliance Hours
                  </label>
                  <input
                    type="number"
                    name="complianceHours"
                    value={formData.complianceHours}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="e.g., 40"
                  />
                </div>

                <Button onClick={calculateROI} size="lg" className="w-full">
                  Calculate ROI
                  <Calculator className="ml-2 w-5 h-5" />
                </Button>
              </CardContent>
            </Card>

            {/* Results */}
            <div className="space-y-6">
              {results ? (
                <>
                  <Card className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border-purple-500/30">
                    <CardHeader>
                      <CardTitle className="text-2xl text-center">Your ROI Results</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-green-400">
                            ${results.totalAnnualSavings.toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-400">Total Annual Savings</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-purple-400">
                            {results.roi}%
                          </div>
                          <div className="text-sm text-gray-400">ROI</div>
                        </div>
                      </div>

                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-400">
                          {results.paybackPeriod} months
                        </div>
                        <div className="text-sm text-gray-400">Payback Period</div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-semibold text-white">Savings Breakdown:</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-300">Support Cost Reduction:</span>
                            <span className="text-green-400">${results.supportSavings.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-300">Time Savings Value:</span>
                            <span className="text-green-400">${results.timeSavings.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-300">Data Processing Efficiency:</span>
                            <span className="text-green-400">${results.dataSavings.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-300">Compliance Automation:</span>
                            <span className="text-green-400">${results.complianceSavings.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-gray-700">
                        <Button asChild size="lg" className="w-full">
                          <Link href="/contact?type=demo">
                            Schedule Demo to Discuss Results
                            <ArrowRight className="ml-2 w-5 h-5" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </>
              ) : (
                <Card className="bg-gray-900 border-gray-700">
                  <CardContent className="p-12 text-center">
                    <Calculator className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-400 mb-2">
                      Ready to Calculate Your ROI?
                    </h3>
                    <p className="text-gray-500">
                      Fill out the form to see your potential savings and return on investment.
                    </p>
                  </CardContent>
                </Card>
              )}

              {/* Benefits */}
              <Card className="bg-gray-900 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-xl">Why Calculate ROI?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <DollarSign className="w-5 h-5 text-green-400 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white">Quantify Benefits</h4>
                      <p className="text-sm text-gray-300">Get concrete numbers on potential cost savings and efficiency gains.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <TrendingUp className="w-5 h-5 text-blue-400 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white">Business Case</h4>
                      <p className="text-sm text-gray-300">Build a compelling business case for AI investment with data-driven projections.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-purple-400 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white">Timeline Planning</h4>
                      <p className="text-sm text-gray-300">Understand payback periods and plan your AI implementation timeline.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Turn Projections into Reality?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Schedule a personalized demo to see how these savings can be achieved 
            in your specific environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="xl">
              <Link href="/contact?type=demo">
                Schedule Personalized Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl">
              <Link href="/resources">
                Explore More Resources
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
