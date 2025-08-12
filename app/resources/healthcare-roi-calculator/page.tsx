
'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Calculator, TrendingUp, Clock, DollarSign, Users, FileText, Download, Printer } from 'lucide-react';
import { motion } from 'framer-motion';

interface CalculatorInputs {
  practitioners: number;
  patientsPerDay: number;
  documentationTime: number;
  billingTime: number;
  physicianRate: number;
  billingRate: number;
}

interface CalculationResults {
  dailyDocumentationCosts: number;
  dailyBillingCosts: number;
  totalDailyCosts: number;
  documentationSavings: number;
  billingSavings: number;
  totalDailySavings: number;
  annualSavings: number;
  annualCurrentCosts: number;
}

export default function HealthcareROICalculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    practitioners: 5,
    patientsPerDay: 25,
    documentationTime: 0.27, // 16 minutes converted to hours
    billingTime: 0.1, // 6 minutes converted to hours
    physicianRate: 145,
    billingRate: 21,
  });

  const [results, setResults] = useState<CalculationResults>({
    dailyDocumentationCosts: 0,
    dailyBillingCosts: 0,
    totalDailyCosts: 0,
    documentationSavings: 0,
    billingSavings: 0,
    totalDailySavings: 0,
    annualSavings: 0,
    annualCurrentCosts: 0,
  });

  const calculateROI = () => {
    // Current daily costs
    const totalPatientsPerDay = inputs.practitioners * inputs.patientsPerDay;
    const dailyDocumentationCosts = totalPatientsPerDay * inputs.documentationTime * inputs.physicianRate;
    const dailyBillingCosts = totalPatientsPerDay * inputs.billingTime * inputs.billingRate;
    const totalDailyCosts = dailyDocumentationCosts + dailyBillingCosts;

    // Savings calculations
    // Seismic reduces documentation time by 80%
    const documentationSavings = dailyDocumentationCosts * 0.8;
    // Improved billing accuracy reduces billing time by 50% (fewer corrections/resubmissions)
    const billingSavings = dailyBillingCosts * 0.5;
    const totalDailySavings = documentationSavings + billingSavings;

    // Annual calculations (250 working days)
    const annualCurrentCosts = totalDailyCosts * 250;
    const annualSavings = totalDailySavings * 250;

    setResults({
      dailyDocumentationCosts,
      dailyBillingCosts,
      totalDailyCosts,
      documentationSavings,
      billingSavings,
      totalDailySavings,
      annualSavings,
      annualCurrentCosts,
    });
  };

  useEffect(() => {
    calculateROI();
  }, [inputs]);

  const updateInput = (key: keyof CalculatorInputs, value: number[]) => {
    setInputs(prev => ({ ...prev, [key]: value[0] }));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatTime = (hours: number) => {
    const minutes = Math.round(hours * 60);
    return `${minutes} min`;
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center mb-4">
                <Calculator className="h-12 w-12 text-purple-500 mr-3" />
                <h1 className="text-4xl font-bold text-white">Healthcare ROI Calculator</h1>
              </div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Calculate potential savings from AI-powered documentation and billing automation for your medical practice
              </p>
              <div className="flex items-center justify-center mt-4 space-x-4">
                <Badge variant="secondary" className="bg-purple-900/50 text-purple-300 border-purple-700">
                  <Clock className="h-4 w-4 mr-1" />
                  Real-time Calculations
                </Badge>
                <Badge variant="secondary" className="bg-blue-900/50 text-blue-300 border-blue-700">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  Evidence-based Metrics
                </Badge>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Controls */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="shadow-lg bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Users className="h-5 w-5 mr-2 text-purple-500" />
                  Practice Parameters
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Adjust the sliders to match your medical practice
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Number of Practitioners */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-medium text-gray-300">
                      Number of Medical Practitioners
                    </label>
                    <span className="text-lg font-semibold text-purple-400">
                      {inputs.practitioners}
                    </span>
                  </div>
                  <Slider
                    value={[inputs.practitioners]}
                    onValueChange={(value) => updateInput('practitioners', value)}
                    max={50}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1</span>
                    <span>50</span>
                  </div>
                </div>

                {/* Patients per Day */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-medium text-gray-300">
                      Patients per Day (per practitioner)
                    </label>
                    <span className="text-lg font-semibold text-purple-400">
                      {inputs.patientsPerDay}
                    </span>
                  </div>
                  <Slider
                    value={[inputs.patientsPerDay]}
                    onValueChange={(value) => updateInput('patientsPerDay', value)}
                    max={40}
                    min={10}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>10</span>
                    <span>40</span>
                  </div>
                </div>

                {/* Documentation Time */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-medium text-gray-300">
                      Documentation Time per Patient
                    </label>
                    <span className="text-lg font-semibold text-purple-400">
                      {formatTime(inputs.documentationTime)}
                    </span>
                  </div>
                  <Slider
                    value={[inputs.documentationTime]}
                    onValueChange={(value) => updateInput('documentationTime', value)}
                    max={0.5}
                    min={0.1}
                    step={0.01}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>6 min</span>
                    <span>30 min</span>
                  </div>
                </div>

                {/* Billing Time */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-medium text-gray-300">
                      Billing & Coding Time per Patient
                    </label>
                    <span className="text-lg font-semibold text-purple-400">
                      {formatTime(inputs.billingTime)}
                    </span>
                  </div>
                  <Slider
                    value={[inputs.billingTime]}
                    onValueChange={(value) => updateInput('billingTime', value)}
                    max={0.2}
                    min={0.05}
                    step={0.01}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>3 min</span>
                    <span>12 min</span>
                  </div>
                </div>

                {/* Physician Rate */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-medium text-gray-300">
                      Physician Hourly Rate
                    </label>
                    <span className="text-lg font-semibold text-purple-400">
                      ${inputs.physicianRate}/hr
                    </span>
                  </div>
                  <Slider
                    value={[inputs.physicianRate]}
                    onValueChange={(value) => updateInput('physicianRate', value)}
                    max={300}
                    min={100}
                    step={5}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>$100</span>
                    <span>$300</span>
                  </div>
                </div>

                {/* Billing Rate */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-medium text-gray-300">
                      Billing Specialist Hourly Rate
                    </label>
                    <span className="text-lg font-semibold text-purple-400">
                      ${inputs.billingRate}/hr
                    </span>
                  </div>
                  <Slider
                    value={[inputs.billingRate]}
                    onValueChange={(value) => updateInput('billingRate', value)}
                    max={35}
                    min={15}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>$15</span>
                    <span>$35</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Current Costs */}
            <Card className="shadow-lg bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <DollarSign className="h-5 w-5 mr-2 text-red-500" />
                  Current Daily Costs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Documentation Costs</span>
                    <span className="text-lg font-semibold text-red-400">
                      {formatCurrency(results.dailyDocumentationCosts)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Billing & Coding Costs</span>
                    <span className="text-lg font-semibold text-red-400">
                      {formatCurrency(results.dailyBillingCosts)}
                    </span>
                  </div>
                  <Separator className="bg-gray-700" />
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-white">Total Daily Costs</span>
                    <span className="text-xl font-bold text-red-400">
                      {formatCurrency(results.totalDailyCosts)}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Potential Savings */}
            <Card className="shadow-lg bg-gray-900 border-green-700/50">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <TrendingUp className="h-5 w-5 mr-2 text-green-500" />
                  Potential Daily Savings with LeapGen
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">
                      Documentation Savings (80% reduction)
                    </span>
                    <span className="text-lg font-semibold text-green-400">
                      {formatCurrency(results.documentationSavings)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">
                      Billing Efficiency Savings (50% reduction)
                    </span>
                    <span className="text-lg font-semibold text-green-400">
                      {formatCurrency(results.billingSavings)}
                    </span>
                  </div>
                  <Separator className="bg-gray-700" />
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-white">Total Daily Savings</span>
                    <span className="text-xl font-bold text-green-400">
                      {formatCurrency(results.totalDailySavings)}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Annual Projections */}
            <Card className="shadow-lg bg-gradient-to-r from-purple-900/30 to-blue-900/30 border-purple-700/50">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <FileText className="h-5 w-5 mr-2 text-blue-400" />
                  Annual Projections
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Current Annual Costs</span>
                    <span className="text-lg font-semibold text-white">
                      {formatCurrency(results.annualCurrentCosts)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Potential Annual Savings</span>
                    <span className="text-2xl font-bold text-green-400">
                      {formatCurrency(results.annualSavings)}
                    </span>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                    <div className="text-center">
                      <p className="text-sm text-gray-400 mb-2">ROI Percentage</p>
                      <p className="text-3xl font-bold text-purple-400">
                        {((results.annualSavings / results.annualCurrentCosts) * 100).toFixed(1)}%
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <Button onClick={handlePrint} variant="outline" className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white">
                <Printer className="h-4 w-4 mr-2" />
                Print Results
              </Button>
              <Button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                <Download className="h-4 w-4 mr-2" />
                Get LeapGen Demo
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Methodology */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12"
        >
          <Card className="shadow-lg bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Calculation Methodology</CardTitle>
              <CardDescription className="text-gray-400">
                Based on 2024-2025 healthcare industry research and benchmarks
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-white mb-3">Data Sources</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Medscape 2024 Physician Compensation Report</li>
                    <li>• AMA 2024 EHR Time Study (JAMA Network Open)</li>
                    <li>• AAPC 2025 Medical Billing Salary Report</li>
                    <li>• Healthcare industry productivity benchmarks</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-3">Assumptions</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• 250 working days per year</li>
                    <li>• Seismic reduces documentation time by 80%</li>
                    <li>• Improved billing accuracy reduces rework by 50%</li>
                    <li>• Rates based on national averages</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-yellow-900/30 border border-yellow-700/50 rounded-lg">
                <p className="text-sm text-yellow-300">
                  <strong>Note:</strong> This calculator provides estimated savings based on industry benchmarks. 
                  Actual results may vary based on practice size, specialty, region, and implementation factors. 
                  Contact LeapGen for a detailed ROI analysis specific to your practice.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
