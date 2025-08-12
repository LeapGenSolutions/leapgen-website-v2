
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Download, Database, Shield, Settings, CheckCircle, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Data Governance in the Age of AI | LeapGen.AI',
  description: 'Best practices for data management, security, and compliance in AI-driven organizations.',
}

export default function DataGovernanceAIPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://www.lucrative.ai/wp-content/uploads/2021/03/Salesforce-1024x620.jpg"
            alt="Data Governance in AI"
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
                Whitepaper • Data Governance • AI Strategy
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Data Governance in the <span className="gradient-text">Age of AI</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Best practices for data management, security, and compliance in AI-driven organizations
              </p>
            </div>

            {/* Key Pillars */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Security & Privacy</h3>
                  <p className="text-gray-300 text-sm">Comprehensive frameworks for protecting sensitive data in AI systems</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Settings className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Quality & Lineage</h3>
                  <p className="text-gray-300 text-sm">Ensuring data quality and traceability throughout the AI lifecycle</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Compliance & Ethics</h3>
                  <p className="text-gray-300 text-sm">Meeting regulatory requirements and ethical AI standards</p>
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
            
            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg p-8 border border-blue-500/20 mb-12">
              <p className="text-lg text-gray-300 leading-relaxed">
                As organizations increasingly rely on AI to drive business decisions, the importance of robust 
                data governance has never been greater. This whitepaper provides a comprehensive framework 
                for establishing data governance practices that enable AI innovation while ensuring security, 
                compliance, and ethical use of data.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">Critical Governance Areas</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Shield className="w-6 h-6 text-blue-400 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white">Data Security & Privacy</h4>
                      <p className="text-gray-300">Protecting sensitive information throughout the AI data pipeline</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Database className="w-6 h-6 text-purple-400 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white">Data Quality Management</h4>
                      <p className="text-gray-300">Ensuring accuracy, completeness, and consistency of AI training data</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Settings className="w-6 h-6 text-green-400 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white">Lifecycle Management</h4>
                      <p className="text-gray-300">Managing data from collection through AI model deployment and retirement</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-yellow-400 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white">Regulatory Compliance</h4>
                      <p className="text-gray-300">Meeting GDPR, CCPA, and industry-specific regulatory requirements</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="https://i.pinimg.com/originals/f2/78/a2/f278a2cb349fbb9f4d89161e1482c068.png"
                  alt="Data Governance Architecture"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance Challenges */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">AI Data Governance Challenges</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-red-900/20 border-red-500/30">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertTriangle className="w-5 h-5 text-red-400" />
                    <span>Data Complexity</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Massive data volumes and variety</li>
                    <li>• Real-time data processing requirements</li>
                    <li>• Multiple data sources and formats</li>
                    <li>• Complex data lineage tracking</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-orange-900/20 border-orange-500/30">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-orange-400" />
                    <span>Security Risks</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Data breaches and unauthorized access</li>
                    <li>• Model poisoning attacks</li>
                    <li>• Privacy violations in training data</li>
                    <li>• Third-party vendor risks</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-blue-900/20 border-blue-500/30">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Database className="w-5 h-5 text-blue-400" />
                    <span>Quality Issues</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Inconsistent data quality standards</li>
                    <li>• Bias in training datasets</li>
                    <li>• Incomplete or missing data</li>
                    <li>• Data drift over time</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-purple-900/20 border-purple-500/30">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Settings className="w-5 h-5 text-purple-400" />
                    <span>Compliance Complexity</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Multiple regulatory frameworks</li>
                    <li>• Cross-border data transfer rules</li>
                    <li>• Industry-specific requirements</li>
                    <li>• Evolving AI regulations</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Governance Framework */}
      <section className="section-padding bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">AI Data Governance Framework</h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Data Strategy & Policies</h3>
                  <p className="text-gray-300">Establish comprehensive data governance policies that align with AI objectives and regulatory requirements. Define data ownership, access controls, and usage guidelines.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Data Quality Management</h3>
                  <p className="text-gray-300">Implement automated data quality checks, validation rules, and monitoring systems to ensure AI models are trained on high-quality, unbiased data.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Security & Privacy Controls</h3>
                  <p className="text-gray-300">Deploy advanced encryption, access controls, and privacy-preserving techniques like differential privacy and federated learning.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Compliance & Audit</h3>
                  <p className="text-gray-300">Establish continuous monitoring and audit capabilities to ensure ongoing compliance with regulatory requirements and internal policies.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">5</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Lifecycle Management</h3>
                  <p className="text-gray-300">Manage data throughout its entire lifecycle, from collection and processing to model training, deployment, and eventual retirement.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Implementation Best Practices</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Technical Implementation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Automated data cataloging and lineage tracking</li>
                    <li>• Real-time data quality monitoring</li>
                    <li>• Encryption at rest and in transit</li>
                    <li>• Role-based access controls</li>
                    <li>• Data masking and anonymization</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Organizational Practices</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Cross-functional governance committees</li>
                    <li>• Regular policy reviews and updates</li>
                    <li>• Employee training and awareness programs</li>
                    <li>• Vendor risk assessment processes</li>
                    <li>• Incident response procedures</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Compliance Measures</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Regular compliance audits</li>
                    <li>• Documentation and record keeping</li>
                    <li>• Privacy impact assessments</li>
                    <li>• Data subject rights management</li>
                    <li>• Breach notification procedures</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Continuous Improvement</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Performance metrics and KPIs</li>
                    <li>• Regular framework assessments</li>
                    <li>• Technology stack evaluations</li>
                    <li>• Stakeholder feedback collection</li>
                    <li>• Industry best practice adoption</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section-padding bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Technology Stack Considerations</h2>
            
            <div className="bg-gray-900 rounded-lg p-8 border border-gray-700">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-blue-400">Data Management</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Data catalogs and metadata management</li>
                    <li>• Data quality and profiling tools</li>
                    <li>• Master data management systems</li>
                    <li>• Data lineage tracking platforms</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-purple-400">Security & Privacy</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Identity and access management</li>
                    <li>• Encryption and key management</li>
                    <li>• Data loss prevention tools</li>
                    <li>• Privacy-preserving technologies</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-green-400">Monitoring & Compliance</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Audit and compliance platforms</li>
                    <li>• Data monitoring and alerting</li>
                    <li>• Risk assessment tools</li>
                    <li>• Reporting and dashboard systems</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Whitepaper Contents</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Part 1: Governance Foundations</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• AI Data Governance Overview</li>
                    <li>• Regulatory Landscape</li>
                    <li>• Organizational Readiness</li>
                    <li>• Stakeholder Alignment</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Part 2: Framework Design</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Governance Architecture</li>
                    <li>• Policy Development</li>
                    <li>• Process Design</li>
                    <li>• Technology Integration</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Part 3: Implementation Guide</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Phased Deployment Strategy</li>
                    <li>• Change Management</li>
                    <li>• Training and Adoption</li>
                    <li>• Success Metrics</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Part 4: Advanced Topics</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Emerging Technologies</li>
                    <li>• Future Regulatory Trends</li>
                    <li>• Industry Case Studies</li>
                    <li>• Continuous Evolution</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="section-padding bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-t border-blue-500/20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Download the Complete Whitepaper</h2>
            <p className="text-xl text-gray-300 mb-8">
              Get the comprehensive 52-page whitepaper with detailed frameworks, implementation guides, 
              and best practices for data governance in AI-driven organizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="xl">
                <Link href="/contact?type=resource&resource=data-governance-ai">
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
