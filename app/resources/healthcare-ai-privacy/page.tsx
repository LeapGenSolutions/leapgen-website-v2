
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Download, Shield, Lock, FileText, CheckCircle, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'AI in Healthcare: Balancing Innovation with Patient Privacy | LeapGen.AI',
  description: 'Comprehensive whitepaper exploring HIPAA compliance, ethical considerations, and best practices for healthcare AI implementation.',
}

export default function HealthcareAIPrivacyPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://demigos.com/media/blog/upload/2021/11/18/142.jpeg"
            alt="Healthcare AI Privacy"
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
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div className="inline-block px-3 py-1 bg-blue-600/20 text-blue-400 text-sm rounded-full mb-4">
                Whitepaper • Healthcare • Privacy & Compliance
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                AI in Healthcare: <span className="gradient-text">Balancing Innovation with Patient Privacy</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Exploring HIPAA compliance, ethical considerations, and best practices for healthcare AI implementation
              </p>
            </div>

            {/* Key Topics */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">HIPAA Compliance</h3>
                  <p className="text-gray-300 text-sm">Comprehensive guide to maintaining compliance while leveraging AI</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Lock className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Data Security</h3>
                  <p className="text-gray-300 text-sm">Advanced encryption and security measures for patient data</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <CheckCircle className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Best Practices</h3>
                  <p className="text-gray-300 text-sm">Proven frameworks for ethical AI implementation</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="section-padding bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Executive Summary</h2>
            
            <div className="bg-gradient-to-r from-blue-900/20 to-green-900/20 rounded-lg p-8 border border-blue-500/20 mb-12">
              <p className="text-lg text-gray-300 leading-relaxed">
                As artificial intelligence transforms healthcare delivery, organizations face the critical challenge 
                of balancing innovation with patient privacy protection. This whitepaper provides healthcare leaders 
                with a comprehensive framework for implementing AI solutions while maintaining strict compliance 
                with HIPAA regulations and ethical standards.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">What You'll Learn</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-blue-400 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white">HIPAA Compliance Framework</h4>
                      <p className="text-gray-300">Step-by-step guide to ensuring AI systems meet all regulatory requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white">Data Governance Strategies</h4>
                      <p className="text-gray-300">Best practices for managing patient data throughout the AI lifecycle</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-purple-400 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white">Ethical AI Implementation</h4>
                      <p className="text-gray-300">Guidelines for responsible AI development and deployment</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-yellow-400 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white">Risk Mitigation</h4>
                      <p className="text-gray-300">Strategies to identify and address privacy and security risks</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="https://blog.quadrant.health/content/images/size/w2000/2024/08/Screenshot-2024-08-11-at-11.46.24.png"
                  alt="Healthcare AI Compliance"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Challenges */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Key Challenges in Healthcare AI</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-red-900/20 border-red-500/30">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertTriangle className="w-5 h-5 text-red-400" />
                    <span>Regulatory Complexity</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300">
                    <li>• HIPAA compliance requirements</li>
                    <li>• State and federal regulations</li>
                    <li>• International data transfer laws</li>
                    <li>• Evolving regulatory landscape</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-orange-900/20 border-orange-500/30">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Lock className="w-5 h-5 text-orange-400" />
                    <span>Data Security Risks</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Cybersecurity threats</li>
                    <li>• Data breach vulnerabilities</li>
                    <li>• Third-party vendor risks</li>
                    <li>• Cloud security concerns</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-blue-900/20 border-blue-500/30">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-blue-400" />
                    <span>Patient Trust</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Transparency in AI decisions</li>
                    <li>• Informed consent processes</li>
                    <li>• Data usage communication</li>
                    <li>• Building patient confidence</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-purple-900/20 border-purple-500/30">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="w-5 h-5 text-purple-400" />
                    <span>Ethical Considerations</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Algorithmic bias prevention</li>
                    <li>• Fair and equitable care</li>
                    <li>• AI decision accountability</li>
                    <li>• Human oversight requirements</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Framework Overview */}
      <section className="section-padding bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Privacy-First AI Framework</h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Privacy by Design</h3>
                  <p className="text-gray-300">Integrate privacy considerations from the earliest stages of AI system development, ensuring data protection is built into the architecture rather than added as an afterthought.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Data Minimization</h3>
                  <p className="text-gray-300">Collect and process only the minimum amount of patient data necessary for the specific AI application, reducing privacy risks and compliance burden.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Encryption & Security</h3>
                  <p className="text-gray-300">Implement end-to-end encryption, secure data transmission protocols, and robust access controls to protect patient information at all stages.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Audit & Monitoring</h3>
                  <p className="text-gray-300">Establish continuous monitoring systems to track data access, AI decision-making processes, and compliance with privacy regulations.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">5</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Transparency & Consent</h3>
                  <p className="text-gray-300">Provide clear communication to patients about AI usage, obtain proper consent, and maintain transparency in AI-driven healthcare decisions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Real-World Implementation Examples</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Large Academic Medical Center</CardTitle>
                  <CardDescription>Implementation of AI-powered diagnostic imaging while maintaining HIPAA compliance</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300">
                    <li>• 500+ bed hospital system</li>
                    <li>• Radiology AI implementation</li>
                    <li>• Zero privacy violations in 2 years</li>
                    <li>• 40% improvement in diagnostic accuracy</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Regional Health Network</CardTitle>
                  <CardDescription>Multi-site AI deployment with centralized privacy governance</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300">
                    <li>• 12 hospital network</li>
                    <li>• Clinical documentation AI</li>
                    <li>• Unified privacy framework</li>
                    <li>• 95% physician adoption rate</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="section-padding bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Whitepaper Contents</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Part 1: Regulatory Landscape</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• HIPAA Requirements for AI</li>
                    <li>• State Privacy Laws</li>
                    <li>• International Regulations</li>
                    <li>• Emerging Compliance Trends</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Part 2: Technical Implementation</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Privacy-Preserving AI Techniques</li>
                    <li>• Encryption and Security</li>
                    <li>• Data Governance Frameworks</li>
                    <li>• Access Control Systems</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Part 3: Ethical Guidelines</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Bias Prevention Strategies</li>
                    <li>• Fairness in AI Decisions</li>
                    <li>• Patient Consent Processes</li>
                    <li>• Transparency Requirements</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Part 4: Implementation Guide</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Step-by-Step Deployment</li>
                    <li>• Risk Assessment Tools</li>
                    <li>• Monitoring and Auditing</li>
                    <li>• Incident Response Plans</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="section-padding bg-gradient-to-r from-blue-900/20 to-green-900/20 border-t border-blue-500/20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Download the Complete Whitepaper</h2>
            <p className="text-xl text-gray-300 mb-8">
              Get the comprehensive 45-page whitepaper with detailed frameworks, implementation guides, 
              and real-world case studies for privacy-compliant healthcare AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="xl">
                <Link href="/contact?type=resource&resource=healthcare-ai-privacy">
                  <Download className="mr-2 w-5 h-5" />
                  Download Free Whitepaper
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link href="/contact?type=consultation">
                  Schedule Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
