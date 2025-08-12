'use client'

import { useState } from 'react'
import { Slider } from '@/components/ui/slider'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Calculator, TrendingUp, DollarSign, Clock, Users } from 'lucide-react'
import Link from 'next/link'

export default function SurroundAIROICalculator() {
  const [industry, setIndustry] = useState('')
  const [companySize, setCompanySize] = useState('')
  const [monthlyTickets, setMonthlyTickets] = useState([1000])
  const [avgResolutionTime, setAvgResolutionTime] = useState([4])
  const [agentHourlyRate, setAgentHourlyRate] = useState([35])
  const [currentAgents, setCurrentAgents] = useState([10])
  const [escalationRate, setEscalationRate] = useState([30])

  // Calculate ROI metrics
  const calculateROI = () => {
    const tickets = monthlyTickets[0]
    const resolutionHours = avgResolutionTime[0]
    const hourlyRate = agentHourlyRate[0]
    const agents = currentAgents[0]
    const escalation = escalationRate[0] / 100

    // Current costs
    const currentMonthlyCost = tickets * resolutionHours * hourlyRate
    const currentAnnualCost = currentMonthlyCost * 12

    // With SurroundAI (75% automation, 60% cost reduction)
    const automationRate = 0.75
    const automatedTickets = tickets * automationRate
    const humanTickets = tickets * (1 - automationRate)
    
    const newMonthlyCost = humanTickets * resolutionHours * hourlyRate
    const newAnnualCost = newMonthlyCost * 12
    
    const annualSavings = currentAnnualCost - newAnnualCost
    const costReduction = (annualSavings / currentAnnualCost) * 100
    
    // Time savings
    const hoursPerMonth = tickets * resolutionHours
    const savedHoursPerMonth = automatedTickets * resolutionHours
    const savedHoursPerYear = savedHoursPerMonth * 12

    // ROI calculation (assuming SurroundAI costs $50k annually)
    const implementationCost = 50000
    const roi = ((annualSavings - implementationCost) / implementationCost) * 100
    const paybackMonths = implementationCost / (annualSavings / 12)

    return {
      currentAnnualCost,
      newAnnualCost,
      annualSavings,
      costReduction,
      savedHoursPerYear,
      roi,
      paybackMonths,
      automatedTickets: automatedTickets * 12, // Annual
      humanTickets: humanTickets * 12 // Annual
    }
  }

  const results = calculateROI()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-purple-600 p-4 rounded-2xl">
              <Calculator className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            SurroundAI <span className="text-purple-400">ROI Calculator</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Calculate your potential savings from automating customer support with SurroundAI. 
            Adjust the sliders below to match your current operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Panel */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Users className="w-5 h-5" />
                Your Current Operations
              </CardTitle>
              <CardDescription className="text-gray-400">
                Adjust these values to match your organization's current customer support operations
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
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="financial">Financial Services</SelectItem>
                    <SelectItem value="retail">Retail</SelectItem>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
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

              {/* Monthly Support Tickets */}
              <div className="space-y-3">
                <div className="flex justify-between">
                  <label className="text-sm font-medium text-gray-300">Monthly Support Tickets</label>
                  <span className="text-purple-400 font-semibold">{monthlyTickets[0].toLocaleString()}</span>
                </div>
                <Slider
                  value={monthlyTickets}
                  onValueChange={setMonthlyTickets}
                  max={10000}
                  min={100}
                  step={100}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>100</span>
                  <span>10,000</span>
                </div>
              </div>

              {/* Average Resolution Time */}
              <div className="space-y-3">
                <div className="flex justify-between">
                  <label className="text-sm font-medium text-gray-300">Average Resolution Time (hours)</label>
                  <span className="text-purple-400 font-semibold">{avgResolutionTime[0]}</span>
                </div>
                <Slider
                  value={avgResolutionTime}
                  onValueChange={setAvgResolutionTime}
                  max={24}
                  min={0.5}
                  step={0.5}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>0.5</span>
                  <span>24</span>
                </div>
              </div>

              {/* Agent Hourly Rate */}
              <div className="space-y-3">
                <div className="flex justify-between">
                  <label className="text-sm font-medium text-gray-300">Agent Hourly Rate ($)</label>
                  <span className="text-purple-400 font-semibold">${agentHourlyRate[0]}</span>
                </div>
                <Slider
                  value={agentHourlyRate}
                  onValueChange={setAgentHourlyRate}
                  max={100}
                  min={15}
                  step={5}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>$15</span>
                  <span>$100</span>
                </div>
              </div>

              {/* Current Support Agents */}
              <div className="space-y-3">
                <div className="flex justify-between">
                  <label className="text-sm font-medium text-gray-300">Current Support Agents</label>
                  <span className="text-purple-400 font-semibold">{currentAgents[0]}</span>
                </div>
                <Slider
                  value={currentAgents}
                  onValueChange={setCurrentAgents}
                  max={100}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>1</span>
                  <span>100</span>
                </div>
              </div>

              {/* Escalation Rate */}
              <div className="space-y-3">
                <div className="flex justify-between">
                  <label className="text-sm font-medium text-gray-300">Current Escalation Rate (%)</label>
                  <span className="text-purple-400 font-semibold">{escalationRate[0]}%</span>
                </div>
                <Slider
                  value={escalationRate}
                  onValueChange={setEscalationRate}
                  max={80}
                  min={10}
                  step={5}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>10%</span>
                  <span>80%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results Panel */}
          <div className="space-y-6">
            {/* ROI Summary */}
            <Card className="bg-gradient-to-br from-purple-600 to-purple-800 border-purple-500">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Your SurroundAI ROI
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">
                      {results.roi > 0 ? '+' : ''}{Math.round(results.roi)}%
                    </div>
                    <div className="text-purple-200 text-sm">Annual ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">
                      {Math.round(results.paybackMonths)}
                    </div>
                    <div className="text-purple-200 text-sm">Months to Payback</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cost Savings */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Annual Cost Savings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Current Annual Cost</span>
                  <span className="text-red-400 font-semibold">${results.currentAnnualCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">With SurroundAI</span>
                  <span className="text-green-400 font-semibold">${results.newAnnualCost.toLocaleString()}</span>
                </div>
                <div className="border-t border-slate-600 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">Total Savings</span>
                    <span className="text-green-400 font-bold text-xl">${results.annualSavings.toLocaleString()}</span>
                  </div>
                  <div className="text-center mt-2">
                    <span className="text-purple-400 font-semibold">{Math.round(results.costReduction)}% cost reduction</span>
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
                  <span className="text-gray-300">Hours Saved Annually</span>
                  <span className="text-purple-400 font-semibold">{results.savedHoursPerYear.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Tickets Automated</span>
                  <span className="text-green-400 font-semibold">{Math.round(results.automatedTickets).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Human-Handled Tickets</span>
                  <span className="text-blue-400 font-semibold">{Math.round(results.humanTickets).toLocaleString()}</span>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="bg-gradient-to-r from-purple-600 to-pink-600 border-purple-500">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-2">Ready to Achieve These Results?</h3>
                <p className="text-purple-100 mb-4">
                  Schedule a personalized demo to see SurroundAI in action with your specific use cases.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/contact">
                    <Button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold">
                      Schedule Demo
                    </Button>
                  </Link>
                  <Link href="/products/surroundai">
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
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
                <h4 className="text-white font-medium mb-2">SurroundAI Performance</h4>
                <ul className="space-y-1">
                  <li>• 75% of tickets automated</li>
                  <li>• 60% average cost reduction</li>
                  <li>• 24/7 availability</li>
                  <li>• Instant response times</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-medium mb-2">Implementation</h4>
                <ul className="space-y-1">
                  <li>• $50,000 annual platform cost</li>
                  <li>• 30-day implementation</li>
                  <li>• Includes training & support</li>
                  <li>• No additional infrastructure needed</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

