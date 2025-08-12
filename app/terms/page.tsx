
import { Metadata } from 'next'
import Link from 'next/link'
import { FileText, Scale, AlertCircle, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Terms of Service - LeapGen.AI',
  description: 'Terms and conditions for using LeapGen.AI services and platform.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-16">
      <section className="section-padding bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Scale className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
              <p className="text-xl text-gray-300">
                Last updated: December 2024
              </p>
            </div>

            <div className="prose prose-invert max-w-none">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>Acceptance of Terms</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-300">
                  <p>
                    By accessing and using LeapGen.AI services, you accept and agree to be bound by the terms 
                    and provision of this agreement. If you do not agree to abide by the above, please do not 
                    use this service.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="w-5 h-5" />
                    <span>Use License</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-300">
                  <p>Permission is granted to temporarily use LeapGen.AI services for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for any commercial purpose or for any public display</li>
                    <li>Attempt to reverse engineer any software contained in the service</li>
                    <li>Remove any copyright or other proprietary notations from the materials</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertCircle className="w-5 h-5" />
                    <span>Disclaimer</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-300">
                  <p>
                    The materials on LeapGen.AI's website and services are provided on an 'as is' basis. 
                    LeapGen.AI makes no warranties, expressed or implied, and hereby disclaims and negates 
                    all other warranties including without limitation, implied warranties or conditions of 
                    merchantability, fitness for a particular purpose, or non-infringement of intellectual 
                    property or other violation of rights.
                  </p>
                </CardContent>
              </Card>

              <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <p className="text-gray-300 mb-4">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <p className="text-gray-300">
                  Email: legal@leapgen.ai<br />
                  Address: San Francisco, CA, United States
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
