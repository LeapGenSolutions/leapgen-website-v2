'use client'

import { useState } from 'react'
import { Slider } from '@/components/ui/slider'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Calculator, TrendingUp, DollarSign, Clock, Shield, Database } from 'lucide-react'
import Link from 'next/link'

export default function DataCoffeeROICalculator() {
  const [industry, setIndustry] = useState('')
  const [companySize, setCompanySize] = useState('')
  const [weeklyDataProcessing, setWeeklyDataProcessing] = useState([40])
  const [monthlyComplianceHours, setMonthlyComplianceHours] = useState([80])
  const [dataAnalystHourlyRate, setDataAnalystHourlyRate] = useState([75])
  const [complianceHourlyRate, setComplianceHourlyRate] = useState([85])
  const [dataBreachRisk, setDataBreachRisk] = useState([15])
  const [testingCycles, setTestingCycles] = useState([12])

  // Calculate ROI metrics
  const calculateROI = () => {
    const weeklyHours = weeklyDataProcessing[0]
    const complianceHours = monthlyComplianceHours[0]
    const analystRate = dataAnalystHourlyRate[0]
    const complianceRate = complianceHourlyRate[0]
    const breachRisk = dataBreachRisk[0] / 100
    const cycles = testingCycles[0]

    // Current costs
    const annualDataProcessingCost = weeklyHours * 52 * analystRate
    const annualComplianceCost = complianceHours * 12 * complianceRate
    const currentAnnualCost = annualDataProcessingCost + annualComplianceCost

    // Data breach risk cost (average breach cost $4.45M)
    const averageBreachCost = 4450000
    const annualBreachRiskCost = averageBreachCost * breachRisk

    // With DataCoffee (80% time reduction, 95% risk reduction)
    const timeReduction = 0.80
    const riskReduction = 0.95
    
    const newDataProcessingCost = annualDataProcessingCost * (1 - timeReduction)
    const newComplianceCost = annualComplianceCost * (1 - 0.60) // 60% compliance time reduction
    const newBreachRiskCost = annualBreachRiskCost * (1 - riskReduction)
    
    const newAnnualCost = newDataProcessingCost + newComplianceCost
    const totalCurrentCost = currentAnnualCost + annualBreachRiskCost
    const totalNewCost = newAnnualCost + newBreachRiskCost
    
    const annualSavings = totalCurrentCost - totalNewCost
    const operationalSavings = currentAnnualCost - newAnnualCost
    const riskSavings = annualBreachRiskCost - newBreachRiskCost
    
    // Time savings
    const savedDataHours = weeklyHours * 52 * timeReduction
    const savedComplianceHours = complianceHours * 12 * 0.60

    // Testing efficiency (90% faster test data generation)
    const testingTimeSaved = cycles * 40 * 0.90 // 40 hours per cycle, 90% reduction
    const testingSavings = testingTimeSaved * analystRate

    // ROI calculation (assuming DataCoffee costs $75k annually)
    const implementationCost = 75000
    const totalSavings = annualSavings + testingSavings
    const roi = ((totalSavings - implementationCost) / implementationCost) * 100
    const paybackMonths = implementationCost / (totalSavings / 12)

    return {
      currentAnnualCost: totalCurrentCost,
      newAnnualCost: totalNewCost,
      annualSavings: totalSavings,
      operationalSavings,
      riskSavings,
      testingSavings,
      savedDataHours,
      savedComplianceHours,
      testingTimeSaved,
      roi,
      paybackMonths
    }
  }

  const results = calculateROI()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-600 p-4 rounded-2xl">
              <Database className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            DataCoffee <span className="text-blue-400">ROI Calculator</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Calculate your potential savings from implementing secure data governance and synthetic data generation. 
            Adjust the sliders below to match your current data operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Panel */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Your Current Data Operations
              </CardTitle>
              <CardDescription className="text-gray-400">
                Adjust these values to match your organization's current data processing and compliance operations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Industry Selection */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Industry</label>
                <Select value={industry} onValueChange={setIndustry}>
                  <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                    <SelectValue placeholder="Select your industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="financial">Financial Services</SelectItem>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="retail">Retail</SelectItem>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="government">Government</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Company Size */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Company Size</label>
                <Select value={companySize} onValueChange={setCompanySize}>
                  <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                    <SelectValue placeholder="Select company size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">1-50 employees</SelectItem>
                    <SelectItem value="medium">51-500 employees</SelectItem>
                    <SelectItem value="large">501-5000 employees</SelectItem>
                    <SelectItem value="enterprise">5000+ employees</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Weekly Data Processing Hours */}
              <div className="space-y-3">
                <div className="flex justify-between">
                  <label className="text-sm font-medium text-gray-300">Weekly Data Processing Hours</label>
                  <span className="text-blue-400 font-semibold">{weeklyDataProcessing[0]}</span>
                </div>
                <Slider
                  value={weeklyDataProcessing}
                  onValueChange={setWeeklyDataProcessing}
                  max={200}
                  min={5}
                  step={5}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>5</span>
                  <span>200</span>
                </div>
              </div>

              {/* Monthly Compliance Hours */}
              <div className="space-y-3">
                <div className="flex justify-between">
                  <label className="text-sm font-medium text-gray-300">Monthly Compliance Hours</label>
                  <span className="text-blue-400 font-semibold">{monthlyComplianceHours[0]}</span>
                </div>
                <Slider
                  value={monthlyComplianceHours}
                  onValueChange={setMonthlyComplianceHours}
                  max={400}
                  min={10}
                  step={10}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>10</span>
                  <span>400</span>
                </div>
              </div>

              {/* Data Analyst Hourly Rate */}
              <div className="space-y-3">
                <div className="flex justify-between">
                  <label className="text-sm font-medium text-gray-300">Data Analyst Hourly Rate ($)</label>
                  <span className="text-blue-400 font-semibold">${dataAnalystHourlyRate[0]}</span>
                </div>
                <Slider
                  value={dataAnalystHourlyRate}
                  onValueChange={setDataAnalystHourlyRate}
                  max={150}
                  min={30}
                  step={5}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>$30</span>
                  <span>$150</span>
                </div>
              </div>

              {/* Compliance Specialist Hourly Rate */}
              <div className="space-y-3">
                <div className="flex justify-between">
                  <label className="text-sm font-medium text-gray-300">Compliance Specialist Rate ($)</label>
                  <span className="text-blue-400 font-semibold">${complianceHourlyRate[0]}</span>
                </div>
                <Slider
                  value={complianceHourlyRate}
                  onValueChange={setComplianceHourlyRate}
                  max={200}
                  min={40}
                  step={5}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>$40</span>
                  <span>$200</span>
                </div>
              </div>

              {/* Data Breach Risk */}
              <div className="space-y-3">
                <div className="flex justify-between">
                  <label className="text-sm font-medium text-gray-300">Annual Data Breach Risk (%)</label>
                  <span className="text-blue-400 font-semibold">{dataBreachRisk[0]}%</span>
                </div>
                <Slider
                  value={dataBreachRisk}
                  onValueChange={setDataBreachRisk}
                  max={50}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>1%</span>
                  <span>50%</span>
                </div>
              </div>

              {/* Testing Cycles */}
              <div className="space-y-3">
                <div className="flex justify-between">
                  <label className="text-sm font-medium text-gray-300">Annual Testing Cycles</label>
                  <span className="text-blue-400 font-semibold">{testingCycles[0]}</span>
                </div>
                <Slider
                  value={testingCycles}
                  onValueChange={setTestingCycles}
                  max={52}
                  min={4}
                  step={2}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>4</span>
                  <span>52</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results Panel */}
          <div className="space-y-6">
            {/* ROI Summary */}
            <Card className="bg-gradient-to-br from-blue-600 to-blue-800 border-blue-500">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Your DataCoffee ROI
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">
                      {results.roi > 0 ? '+' : ''}{Math.round(results.roi)}%
                    </div>
                    <div className="text-blue-200 text-sm">Annual ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">
                      {Math.round(results.paybackMonths)}
                    </div>
                    <div className="text-blue-200 text-sm">Months to Payback</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cost Savings Breakdown */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Annual Savings Breakdown
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Operational Savings</span>
                  <span className="text-green-400 font-semibold">${results.operationalSavings.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Risk Reduction Savings</span>
                  <span className="text-green-400 font-semibold">${results.riskSavings.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Testing Efficiency Savings</span>
                  <span className="text-green-400 font-semibold">${results.testingSavings.toLocaleString()}</span>
                </div>
                <div className="border-t border-slate-600 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">Total Annual Savings</span>
                    <span className="text-green-400 font-bold text-xl">${results.annualSavings.toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Time Savings */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Time & Efficiency Gains
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Data Processing Hours Saved</span>
                  <span className="text-blue-400 font-semibold">{Math.round(results.savedDataHours).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Compliance Hours Saved</span>
                  <span className="text-blue-400 font-semibold">{Math.round(results.savedComplianceHours).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Testing Hours Saved</span>
                  <span className="text-blue-400 font-semibold">{Math.round(results.testingTimeSaved).toLocaleString()}</span>
                </div>
                <div className="border-t border-slate-600 pt-4">
                  <div className="text-center">
                    <span className="text-blue-400 font-semibold">80% faster data processing</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Security & Compliance */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Security & Compliance Benefits
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Data Breach Risk Reduction</span>
                  <span className="text-green-400 font-semibold">95%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">GDPR/HIPAA Compliance</span>
                  <span className="text-green-400 font-semibold">100%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Synthetic Data Accuracy</span>
                  <span className="text-blue-400 font-semibold">99%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Real-time Anonymization</span>
                  <span className="text-green-400 font-semibold">✓ Enabled</span>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="bg-gradient-to-r from-blue-600 to-cyan-600 border-blue-500">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-2">Ready to Secure Your Data?</h3>
                <p className="text-blue-100 mb-4">
                  Schedule a personalized demo to see DataCoffee in action with your specific data governance needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/contact">
                    <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
                      Schedule Demo
                    </Button>
                  </Link>
                  <Link href="/products/data-coffee">
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Assumptions */}
        <Card className="mt-12 bg-slate-800/30 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white text-lg">Calculation Assumptions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
              <div>
                <h4 className="text-white font-medium mb-2">DataCoffee Performance</h4>
                <ul className="space-y-1">
                  <li>• 80% reduction in data processing time</li>
                  <li>• 60% reduction in compliance overhead</li>
                  <li>• 95% reduction in data breach risk</li>
                  <li>• 90% faster test data generation</li>
                  <li>• 99% statistical accuracy of synthetic data</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-medium mb-2">Implementation</h4>
                <ul className="space-y-1">
                  <li>• $75,000 annual platform cost</li>
                  <li>• 30-day implementation</li>
                  <li>• GDPR, HIPAA, FedRAMP compliant</li>
                  <li>• Average data breach cost: $4.45M</li>
                  <li>• Includes training & support</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

