
import { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Lock, Eye, FileText } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Privacy Policy - LeapGen.AI',
  description: 'Learn how LeapGen.AI protects your privacy and handles your personal information.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-16">
      <section className="section-padding bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
              <p className="text-xl text-gray-300">
                Last updated: December 2024
              </p>
            </div>

            <div className="prose prose-invert max-w-none">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Eye className="w-5 h-5" />
                    <span>Information We Collect</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-300">
                  <p>We collect information you provide directly to us, such as when you:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Create an account or use our services</li>
                    <li>Contact us for support or inquiries</li>
                    <li>Subscribe to our newsletter or marketing communications</li>
                    <li>Participate in surveys or provide feedback</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Lock className="w-5 h-5" />
                    <span>How We Use Your Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-300">
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send technical notices and support messages</li>
                    <li>Respond to your comments and questions</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="w-5 h-5" />
                    <span>Data Security</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-300">
                  <p>We implement appropriate security measures to protect your personal information:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security assessments and updates</li>
                    <li>Access controls and authentication measures</li>
                    <li>SOC 2 Type II compliance</li>
                    <li>GDPR and CCPA compliance</li>
                  </ul>
                </CardContent>
              </Card>

              <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                <p className="text-gray-300 mb-4">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <p className="text-gray-300">
                  Email: privacy@leapgen.ai<br />
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
