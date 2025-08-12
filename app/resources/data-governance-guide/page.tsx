
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Shield, Database, CheckCircle, Download, Users, Lock, FileText, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import AnimatedCounter from '@/components/animated-counter'

export const metadata: Metadata = {
  title: 'Complete Data Governance Guide - Best Practices & Framework | LeapGen.AI',
  description: 'Comprehensive guide to implementing data governance in your organization. Learn best practices, frameworks, and strategies for GDPR, HIPAA, and enterprise compliance.',
  keywords: 'data governance, data management, GDPR compliance, HIPAA compliance, data privacy, data security, enterprise data strategy',
}

export default function DataGovernanceGuidePage() {
  const governanceFramework = [
    {
      phase: 'Assessment & Planning',
      description: 'Evaluate current data landscape and define governance objectives',
      duration: '2-4 weeks',
      activities: [
        'Data inventory and classification',
        'Risk assessment and gap analysis',
        'Stakeholder identification',
        'Governance charter development'
      ],
      completion: 85
    },
    {
      phase: 'Policy Development',
      description: 'Create comprehensive data policies and procedures',
      duration: '3-6 weeks',
      activities: [
        'Data quality standards',
        'Access control policies',
        'Retention and disposal policies',
        'Privacy and security protocols'
      ],
      completion: 70
    },
    {
      phase: 'Implementation',
      description: 'Deploy governance tools and processes across the organization',
      duration: '8-12 weeks',
      activities: [
        'Technology platform deployment',
        'Process automation setup',
        'Training and change management',
        'Monitoring and reporting systems'
      ],
      completion: 45
    },
    {
      phase: 'Monitoring & Optimization',
      description: 'Continuous improvement and compliance monitoring',
      duration: 'Ongoing',
      activities: [
        'Performance metrics tracking',
        'Regular compliance audits',
        'Policy updates and refinements',
        'Stakeholder feedback integration'
      ],
      completion: 30
    }
  ]

  const bestPractices = [
    {
      category: 'Data Classification',
      icon: Database,
      practices: [
        'Implement automated data discovery and classification',
        'Define clear data sensitivity levels (Public, Internal, Confidential, Restricted)',
        'Establish data lineage tracking across all systems',
        'Regular data inventory updates and validation'
      ]
    },
    {
      category: 'Access Control',
      icon: Lock,
      practices: [
        'Role-based access control (RBAC) implementation',
        'Principle of least privilege enforcement',
        'Regular access reviews and certifications',
        'Multi-factor authentication for sensitive data'
      ]
    },
    {
      category: 'Compliance Management',
      icon: Shield,
      practices: [
        'Automated compliance monitoring and reporting',
        'Regular risk assessments and audits',
        'Incident response and breach notification procedures',
        'Continuous regulatory update tracking'
      ]
    },
    {
      category: 'Data Quality',
      icon: CheckCircle,
      practices: [
        'Automated data quality monitoring',
        'Data validation rules and constraints',
        'Master data management processes',
        'Regular data cleansing and enrichment'
      ]
    }
  ]

  const complianceRequirements = [
    {
      regulation: 'GDPR (General Data Protection Regulation)',
      scope: 'EU residents\' personal data',
      keyRequirements: [
        'Lawful basis for processing personal data',
        'Data subject rights (access, rectification, erasure)',
        'Privacy by design and by default',
        'Data protection impact assessments (DPIA)',
        'Breach notification within 72 hours'
      ],
      penalties: 'Up to €20M or 4% of annual global turnover'
    },
    {
      regulation: 'HIPAA (Health Insurance Portability and Accountability Act)',
      scope: 'Protected health information (PHI)',
      keyRequirements: [
        'Administrative, physical, and technical safeguards',
        'Minimum necessary standard',
        'Business associate agreements',
        'Audit controls and integrity controls',
        'Breach notification requirements'
      ],
      penalties: 'Up to $1.5M per incident'
    },
    {
      regulation: 'CCPA (California Consumer Privacy Act)',
      scope: 'California residents\' personal information',
      keyRequirements: [
        'Consumer rights to know, delete, and opt-out',
        'Data minimization and purpose limitation',
        'Third-party data sharing disclosures',
        'Non-discrimination for exercising rights',
        'Reasonable security measures'
      ],
      penalties: 'Up to $7,500 per violation'
    }
  ]

  const tools = [
    {
      category: 'Data Discovery & Classification',
      tools: ['Microsoft Purview', 'Collibra', 'Informatica', 'DataCoffee Platform'],
      description: 'Automated discovery and classification of sensitive data across your organization'
    },
    {
      category: 'Access Management',
      tools: ['Okta', 'Azure AD', 'SailPoint', 'CyberArk'],
      description: 'Identity and access management solutions for data security'
    },
    {
      category: 'Compliance Monitoring',
      tools: ['OneTrust', 'TrustArc', 'Protiviti', 'DataCoffee Compliance'],
      description: 'Continuous compliance monitoring and reporting platforms'
    },
    {
      category: 'Data Quality',
      tools: ['Talend', 'Informatica DQ', 'IBM InfoSphere', 'DataCoffee Quality'],
      description: 'Data quality assessment and improvement tools'
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://static.vecteezy.com/system/resources/previews/011/006/295/original/data-protection-concept-data-security-and-privacy-and-internet-security-flat-illustration-vector.jpg"
            alt="Data Governance Guide"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold">Data Governance Guide</h1>
                <p className="text-xl text-blue-400">Complete Implementation Framework</p>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Build a Comprehensive Data Governance Program That Ensures{' '}
              <span className="gradient-text">100% Compliance</span>
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              This comprehensive guide provides everything you need to implement effective data governance 
              in your organization, from initial assessment to ongoing optimization. Learn proven frameworks, 
              best practices, and compliance strategies used by leading enterprises.
            </p>

            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">
                  <AnimatedCounter end={50} suffix="+" />
                </div>
                <div className="text-sm text-gray-400">Best Practices</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">
                  <AnimatedCounter end={15} suffix="+" />
                </div>
                <div className="text-sm text-gray-400">Compliance Frameworks</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">100%</div>
                <div className="text-sm text-gray-400">Implementation Ready</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="xl">
                <Link href="/contact?type=demo&resource=data-governance-guide">
                  Get Expert Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link href="#framework">
                  <Download className="mr-2 w-5 h-5" />
                  Download Framework
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Framework */}
      <section id="framework" className="section-padding bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              4-Phase Implementation <span className="gradient-text">Framework</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our proven methodology for implementing comprehensive data governance across your organization.
            </p>
          </div>

          <div className="space-y-8">
            {governanceFramework.map((phase, index) => (
              <Card key={index} className="group hover:scale-[1.02] transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                        {index + 1}
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{phase.phase}</CardTitle>
                        <CardDescription className="text-gray-300 text-lg">
                          {phase.description}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-blue-400 font-semibold">Duration</div>
                      <div className="text-sm text-gray-300">{phase.duration}</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Implementation Progress</span>
                      <span className="text-blue-400">{phase.completion}%</span>
                    </div>
                    <Progress value={phase.completion} className="h-2" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {phase.activities.map((activity, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-gray-300">{activity}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Data Governance <span className="gradient-text">Best Practices</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Essential practices for building and maintaining effective data governance across your organization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {bestPractices.map((category, index) => {
              const IconComponent = category.icon
              return (
                <Card key={index} className="group hover:scale-105 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-2xl">{category.category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {category.practices.map((practice, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                          <span className="text-sm text-gray-300">{practice}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Compliance Requirements */}
      <section className="section-padding bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Regulatory <span className="gradient-text">Compliance Requirements</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Understanding key regulatory requirements and how to achieve compliance.
            </p>
          </div>

          <div className="space-y-8">
            {complianceRequirements.map((regulation, index) => (
              <Card key={index} className="group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <CardTitle className="text-2xl text-blue-400">{regulation.regulation}</CardTitle>
                      <CardDescription className="text-gray-300 text-lg">
                        Scope: {regulation.scope}
                      </CardDescription>
                    </div>
                    <div className="bg-red-900/20 rounded-lg p-3 border border-red-500/20">
                      <div className="text-sm font-semibold text-red-400 mb-1">Max Penalties:</div>
                      <div className="text-sm text-gray-300">{regulation.penalties}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-blue-400 mb-3">Key Requirements:</div>
                    <div className="grid md:grid-cols-2 gap-2">
                      {regulation.keyRequirements.map((requirement, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <AlertTriangle className="w-4 h-4 text-yellow-400 mt-0.5" />
                          <span className="text-sm text-gray-300">{requirement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Recommended <span className="gradient-text">Tools & Technologies</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Essential tools for implementing and maintaining effective data governance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {tools.map((category, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{category.category}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.tools.map((tool, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-900/20 rounded-full text-sm text-blue-400 border border-blue-500/20">
                        {tool}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border-t border-blue-500/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Implement Data Governance?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get expert guidance on implementing comprehensive data governance in your organization. 
            Our team will help you navigate compliance requirements and build a robust governance framework.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="xl">
              <Link href="/contact?type=consultation&resource=data-governance">
                Schedule Expert Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl">
              <Link href="/products/data-coffee">
                Explore DataCoffee Platform
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
