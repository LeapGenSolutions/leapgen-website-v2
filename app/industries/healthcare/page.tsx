
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Heart, FileText, Shield, Clock, Users, TrendingUp, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import AnimatedCounter from '@/components/animated-counter'

export const metadata: Metadata = {
  title: 'Healthcare AI Solutions - Improve Patient Outcomes & Reduce Costs | LeapGen.AI',
  description: 'Transform healthcare with AI-powered clinical documentation, patient engagement, and operational efficiency. HIPAA compliant solutions for modern healthcare.',
  keywords: 'healthcare AI, clinical documentation, patient care, HIPAA compliant, medical AI, healthcare automation',
}

export default function HealthcarePage() {
  const challenges = [
    {
      title: 'Administrative Burden',
      description: 'Physicians spend 50% of their time on documentation instead of patient care',
      impact: 'Reduced patient interaction time and physician burnout'
    },
    {
      title: 'Rising Operational Costs',
      description: 'Healthcare costs continue to rise while reimbursements decrease',
      impact: 'Pressure on margins and sustainability'
    },
    {
      title: 'Patient Experience',
      description: 'Patients expect immediate responses and personalized care',
      impact: 'Lower satisfaction scores and competitive disadvantage'
    }
  ]

  const solutions = [
    {
      product: 'Seismic',
      title: 'AI-Powered Clinical Documentation',
      description: 'Reduce documentation time by 50% while improving accuracy and compliance',
      benefits: [
        'Real-time clinical note generation',
        'Automated billing code suggestions',
        'HIPAA compliant security',
        'Emotional intelligence insights'
      ],
      metrics: '50% less documentation time, 35% billing accuracy improvement',
      image: 'https://img.freepik.com/premium-photo/doctor-ai-learning-patient-ai-artificial-intelligence-modern-medical-technology-iot-automation-doctor-using-ai-document-management-concept_10541-9936.jpg',
      href: '/products/seismic'
    },
    {
      product: 'SurroundAI',
      title: 'Patient Engagement & Support',
      description: 'Provide 24/7 patient support and streamline appointment scheduling',
      benefits: [
        '24/7 patient support availability',
        'Automated appointment scheduling',
        'Medication reminders',
        'Post-care follow-up'
      ],
      metrics: '40% reduction in call volume, 25% improvement in patient satisfaction',
      image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjaQVNxtD8bnrNj05slps2kQ7dGkRP2UIeZMaZxUlC_ICYSLHloc_gy4WKCuczq38uNyWPShEUW6VTfzhW5WBW5mHE9YKrKvEOpyvcP3TUoRB937iH1d7u8YXJuAWtH8bKZ8WGFSaK_aA7RyUt0YLR9dYnQ0-YnebS89Zy-SFTQeDEThN9h1jpRCm8Iyg/s1024/ai-chatbot-healthcare-patient-outcomes.png',
      href: '/products/surroundai'
    },
    {
      product: 'Data Coffee',
      title: 'Synthetic Healthcare Data Generation',
      description: 'Generate realistic synthetic patient data for testing, training, and research while maintaining 100% HIPAA compliance',
      benefits: [
        'HIPAA-compliant synthetic patient records',
        'Safe data for AI model training',
        'Realistic test datasets for development',
        'Privacy-protected research data'
      ],
      metrics: '100% privacy protection, 95% statistical accuracy of synthetic data',
      image: 'https://www.spec-india.com/wp-content/uploads/2022/09/Banner-Patient-Management-Analytics-Dashboard-for-Hospitals.png',
      href: '/products/data-coffee'
    }
  ]

  const useCases = [
    {
      title: 'Large Hospital System',
      challenge: 'Reducing physician burnout and improving documentation efficiency',
      solution: 'Implemented Seismic across 15 departments',
      results: [
        '2 hours saved per physician per day',
        '35% improvement in billing accuracy',
        '40% reduction in documentation errors',
        '25% increase in physician satisfaction'
      ],
      image: 'https://as1.ftcdn.net/v2/jpg/01/47/24/36/1000_F_147243616_wVM8NqgX72UY3eJLfz25QO9zwWnBsYXe.jpg'
    },
    {
      title: 'Primary Care Network',
      challenge: 'Managing high patient volume with limited staff',
      solution: 'Deployed SurroundAI for patient triage and support',
      results: [
        '60% of routine inquiries automated',
        '30% reduction in no-show rates',
        '45% improvement in appointment efficiency',
        '20% increase in patient satisfaction'
      ],
      image: 'https://www.care.ai/images/webp/platfrm_banner_suite_carescene_v01.webp'
    },
    {
      title: 'Specialty Practice',
      challenge: 'Improving patient outcomes through data-driven insights',
      solution: 'Leveraged Data Coffee for population health management',
      results: [
        '25% improvement in treatment outcomes',
        '30% reduction in readmission rates',
        '40% faster clinical decision making',
        '50% improvement in care coordination'
      ],
      image: 'https://klik.solutions/wp-content/uploads/2023/04/image-2.png'
    }
  ]

  const compliance = [
    {
      standard: 'HIPAA',
      description: 'Full compliance with healthcare privacy and security regulations',
      features: ['End-to-end encryption', 'Access controls', 'Audit trails', 'Data residency']
    },
    {
      standard: 'SOC 2 Type II',
      description: 'Rigorous security controls and operational procedures',
      features: ['Security monitoring', 'Incident response', 'Vendor management', 'Risk assessment']
    },
    {
      standard: 'HL7 FHIR',
      description: 'Seamless integration with existing healthcare systems',
      features: ['EHR integration', 'Data interoperability', 'Standard APIs', 'Real-time sync']
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://thedoctorpreneuracademy.com/wp-content/uploads/2024/06/Ai-hospital-5.jpg"
            alt="Healthcare AI Solutions"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-3">
                <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-pink-600 rounded-xl flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-5xl md:text-6xl font-bold">Healthcare</h1>
                  <p className="text-xl text-red-400">AI Solutions</p>
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Transform Patient Care While Reducing Documentation Time by{' '}
                <span className="gradient-text">
                  <AnimatedCounter end={50} suffix="%" />
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Revolutionize healthcare delivery with AI-powered solutions that improve 
                patient outcomes, reduce administrative burden, and enhance operational 
                efficiency—all while maintaining the highest standards of security and compliance.
              </p>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400">
                    <AnimatedCounter end={50} suffix="%" />
                  </div>
                  <div className="text-sm text-gray-400">Time Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400">
                    <AnimatedCounter end={35} suffix="%" />
                  </div>
                  <div className="text-sm text-gray-400">Better Outcomes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">100%</div>
                  <div className="text-sm text-gray-400">HIPAA Compliant</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="xl">
                  <Link href="/contact?type=demo&industry=healthcare">
                    Schedule Healthcare Demo
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="xl">
                  <Link href="/resources/healthcare-roi-calculator">
                    Calculate Your ROI
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square max-w-lg mx-auto relative">
                <Image
                  src="https://eco-cdn.iqpc.com/eco/images/channel_content/images/transforming_healthcare_with_ai9ioi87Snj7ZgNpbaUo3q30s91a6yUj2wqpaIUDPw.webp"
                  alt="Healthcare AI Technology"
                  fill
                  className="object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-pink-600/20 rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="section-padding bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Healthcare <span className="gradient-text">Challenges</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Modern healthcare faces unprecedented challenges that require innovative solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-red-400">{challenge.title}</CardTitle>
                  <CardDescription className="text-gray-300 text-lg">
                    {challenge.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-red-900/20 rounded-lg p-4 border border-red-500/20">
                    <div className="text-sm font-semibold text-red-400 mb-1">Impact:</div>
                    <div className="text-sm text-gray-300">{challenge.impact}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              AI-Powered <span className="gradient-text">Healthcare Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive AI platform addresses the unique challenges of healthcare 
              with specialized solutions for clinical documentation, patient engagement, and data analytics.
            </p>
          </div>

          <div className="space-y-16">
            {solutions.map((solution, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-3">
                    <div className="px-3 py-1 bg-gradient-to-r from-red-600 to-pink-600 rounded-full text-sm font-semibold">
                      {solution.product}
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold">{solution.title}</h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {solution.description}
                  </p>
                  <div className="space-y-2">
                    {solution.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-gradient-to-r from-red-900/20 to-pink-900/20 rounded-lg p-4 border border-red-500/20">
                    <div className="text-sm font-semibold text-red-400 mb-1">Proven Results:</div>
                    <div className="text-sm text-gray-300">{solution.metrics}</div>
                  </div>
                  <Button asChild variant="outline" size="lg">
                    <Link href={solution.href}>
                      Learn More About {solution.product}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="aspect-video relative overflow-hidden rounded-2xl">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-pink-600/20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="section-padding bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Healthcare <span className="gradient-text">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how healthcare organizations are transforming patient care and operations with our AI solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={useCase.image}
                      alt={useCase.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
                  <CardDescription className="text-gray-300 mb-4">
                    <strong>Challenge:</strong> {useCase.challenge}
                  </CardDescription>
                  <CardDescription className="text-gray-300">
                    <strong>Solution:</strong> {useCase.solution}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-red-400 mb-2">Results:</div>
                    {useCase.results.map((result, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        <span className="text-sm text-gray-300">{result}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Enterprise-Grade <span className="gradient-text">Security & Compliance</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built specifically for healthcare with the highest standards of security, 
              privacy, and regulatory compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {compliance.map((item, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{item.standard}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {item.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-red-900/20 to-pink-900/20 border-t border-red-500/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Healthcare Delivery?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join leading healthcare organizations using LeapGen.AI to improve patient outcomes, 
            reduce costs, and enhance operational efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="xl">
              <Link href="/contact?type=demo&industry=healthcare">
                Schedule Your Healthcare Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl">
              <Link href="/resources/healthcare-case-studies">
                View Healthcare Case Studies
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
