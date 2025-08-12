
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Download, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface Props {
  params: { slug: string }
}

export const metadata: Metadata = {
  title: 'Resource - LeapGen.AI',
  description: 'Access valuable AI resources and insights from LeapGen.AI.',
}

export async function generateStaticParams() {
  return [
    { slug: 'techflow-case-study' },
    { slug: 'finance-case-study' },
    { slug: 'medical-case-study' },
    { slug: 'healthcare-ai-privacy' },
    { slug: 'future-customer-support' },
    { slug: 'data-governance-ai' },
    { slug: 'ai-implementation-webinar' },
    { slug: 'healthcare-ai-panel' },
    { slug: 'ai-readiness-assessment' },
    { slug: 'data-maturity-calculator' },
    { slug: 'data-maturity-assessment' },
    { slug: 'seismic-roi-calculator' },
    { slug: 'data-coffee-demo' },
    { slug: 'surroundai-case-study' }
  ]
}

export default function ResourcePage({ params }: Props) {
  const { slug } = params

  // This is a catch-all page for resource links that don't have dedicated pages
  const getResourceInfo = (slug: string) => {
    const resources: Record<string, any> = {
      'techflow-case-study': {
        title: 'TechFlow Solutions: 45% Support Cost Reduction',
        description: 'How a growing SaaS company automated 80% of customer inquiries with SurroundAI',
        type: 'Case Study'
      },
      'finance-case-study': {
        title: 'Global Finance Corp: 10x Faster Data Insights',
        description: 'Financial services firm transforms regulatory reporting with Data Coffee',
        type: 'Case Study'
      },
      'medical-case-study': {
        title: 'Metro Medical Center: Clinical Documentation Revolution',
        description: 'Large hospital system improves physician satisfaction with Seismic',
        type: 'Case Study'
      },
      'healthcare-ai-privacy': {
        title: 'AI in Healthcare: Balancing Innovation with Patient Privacy',
        description: 'Exploring HIPAA compliance and ethical considerations for healthcare AI',
        type: 'Whitepaper'
      },
      'future-customer-support': {
        title: 'The Future of Customer Support: AI-Human Collaboration',
        description: 'Research-backed insights on optimizing customer support with AI',
        type: 'Whitepaper'
      },
      'data-governance-ai': {
        title: 'Data Governance in the Age of AI',
        description: 'Best practices for data management, security, and compliance',
        type: 'Whitepaper'
      },
      'ai-implementation-webinar': {
        title: 'Getting Started with AI: A 30-Minute Implementation Roadmap',
        description: 'Live webinar covering essential steps for successful AI implementation',
        type: 'Webinar'
      },
      'healthcare-ai-panel': {
        title: 'Healthcare AI Success Stories: Lessons from Early Adopters',
        description: 'Panel discussion with healthcare leaders who have implemented AI',
        type: 'Webinar'
      },
      'ai-readiness-assessment': {
        title: 'AI Readiness Assessment',
        description: 'Evaluate your organization\'s readiness for AI implementation',
        type: 'Assessment Tool'
      },
      'data-maturity-calculator': {
        title: 'Data Maturity Calculator',
        description: 'Assess your data infrastructure before AI implementation',
        type: 'Assessment Tool'
      },
      'data-maturity-assessment': {
        title: 'Data Maturity Assessment',
        description: 'Comprehensive assessment of your data infrastructure and processes',
        type: 'Assessment Tool'
      },
      'seismic-roi-calculator': {
        title: 'Seismic ROI Calculator',
        description: 'Calculate potential time savings and ROI from clinical documentation AI',
        type: 'ROI Calculator'
      },
      'data-coffee-demo': {
        title: 'Data Coffee Platform Demo',
        description: 'Interactive demo of our data analytics and integration platform',
        type: 'Product Demo'
      },
      'surroundai-case-study': {
        title: 'SurroundAI Customer Success Stories',
        description: 'Real-world examples of customer support automation success',
        type: 'Case Study'
      }
    }

    return resources[slug] || {
      title: 'Resource Not Found',
      description: 'The requested resource could not be found.',
      type: 'Resource'
    }
  }

  const resource = getResourceInfo(slug)

  return (
    <div className="min-h-screen pt-16">
      <section className="section-padding bg-gray-950">
        <div className="container mx-auto px-4">
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
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <div className="inline-block px-3 py-1 bg-purple-600/20 text-purple-400 text-sm rounded-full mb-4">
                {resource.type}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {resource.title}
              </h1>
              <p className="text-xl text-gray-300">
                {resource.description}
              </p>
            </div>

            <Card className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Access This Resource</CardTitle>
                <CardDescription className="text-center text-gray-300">
                  Fill out a quick form to get instant access to this valuable resource
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button asChild size="lg" className="w-full max-w-md">
                  <Link href={`/contact?type=resource&resource=${slug}`}>
                    <Download className="mr-2 w-5 h-5" />
                    Get Access
                  </Link>
                </Button>
                <p className="text-sm text-gray-400 mt-4">
                  No spam, just valuable insights delivered to your inbox
                </p>
              </CardContent>
            </Card>

            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold mb-6">Explore More Resources</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="outline" size="lg">
                  <Link href="/resources">
                    Browse All Resources
                  </Link>
                </Button>
                <Button asChild size="lg">
                  <Link href="/contact?type=demo">
                    Schedule a Demo
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
