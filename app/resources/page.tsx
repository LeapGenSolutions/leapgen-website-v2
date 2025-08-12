
'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Download, FileText, Video, Calculator, Search, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    { id: 'all', name: 'All Resources', count: 24 },
    { id: 'case-studies', name: 'Case Studies', count: 8 },
    { id: 'whitepapers', name: 'Whitepapers', count: 6 },
    { id: 'webinars', name: 'Webinars', count: 5 },
    { id: 'tools', name: 'Tools & Calculators', count: 3 },
    { id: 'guides', name: 'Implementation Guides', count: 2 }
  ]

  const featuredResources = [
    {
      id: 1,
      title: 'ROI Calculator for AI Implementation',
      description: 'Calculate potential cost savings and efficiency gains from implementing our AI solutions in your organization.',
      type: 'tool',
      category: 'tools',
      image: 'https://www.smartsheet.com/sites/default/files/IC-PLM-Product-Lifecycle-Management-ROI-Calculator.png',
      href: '/resources/roi-calculator',
      featured: true,
      downloadable: false
    },
    {
      id: 2,
      title: 'Healthcare AI Transformation: Regional Health Network Case Study',
      description: 'How a 500-bed hospital system reduced documentation time by 50% and improved patient satisfaction by 25%.',
      type: 'case-study',
      category: 'case-studies',
      image: 'https://www.healthcareitnews.com/sites/hitn/files/EFormistock_0.jpg',
      href: '/resources/healthcare-case-study',
      featured: true,
      downloadable: true
    },
    {
      id: 3,
      title: 'The Complete Guide to Enterprise AI Implementation',
      description: 'A comprehensive whitepaper covering strategy, implementation, and best practices for enterprise AI adoption.',
      type: 'whitepaper',
      category: 'whitepapers',
      image: 'https://bernardmarr.com/img/Data%20Stratey%20Template%20Image.png',
      href: '/resources/enterprise-ai-guide',
      featured: true,
      downloadable: true
    }
  ]

  const allResources = [
    // Case Studies
    {
      id: 4,
      title: 'TechFlow Solutions: 45% Support Cost Reduction with SurroundAI',
      description: 'How a growing SaaS company automated 80% of customer inquiries and improved response times by 75%.',
      type: 'case-study',
      category: 'case-studies',
      industry: 'Technology',
      product: 'SurroundAI',
      image: 'https://lh4.googleusercontent.com/P9iQQuNsY49du_cl6hvCM99XYZoMWGtZ9kXQ7_501qWQb832apFmGZXcsIUkxqwUUV3aPg-zJHc-Dw-2NFcaLqABsa_DtjKgIRzNJvOOFdh8ejo6HhHotWHN83pQeYsU5TdTei30vkFm4RM5xA',
      href: '/resources/techflow-case-study',
      downloadable: true
    },
    {
      id: 5,
      title: 'Global Finance Corp: 10x Faster Data Insights with Data Coffee',
      description: 'Financial services firm transforms regulatory reporting and risk analysis with centralized data platform.',
      type: 'case-study',
      category: 'case-studies',
      industry: 'Financial Services',
      product: 'Data Coffee',
      image: 'https://i.pinimg.com/originals/88/75/28/887528f840d9027d43b4ce93f54bc1ef.png',
      href: '/resources/finance-case-study',
      downloadable: true
    },
    {
      id: 6,
      title: 'Metro Medical Center: Revolutionizing Clinical Documentation',
      description: 'Large hospital system improves physician satisfaction and billing accuracy with AI-powered documentation.',
      type: 'case-study',
      category: 'case-studies',
      industry: 'Healthcare',
      product: 'Seismic',
      image: 'https://storage.googleapis.com/www-saludiario-com/wp-content/uploads/2022/02/067620ab-bigstock-asian-doctor-with-the-stethosc-449418803-1068x698.jpg',
      href: '/resources/medical-case-study',
      downloadable: true
    },
    
    // Whitepapers
    {
      id: 7,
      title: 'AI in Healthcare: Balancing Innovation with Patient Privacy',
      description: 'Exploring HIPAA compliance, ethical considerations, and best practices for healthcare AI implementation.',
      type: 'whitepaper',
      category: 'whitepapers',
      industry: 'Healthcare',
      image: 'https://imgix-prod.sgs.com/-/media/sgscorp/images/white-paper-thumbnails/sgs-dti-ai-whitepaper--privacy-and-security-in-ai.cdn.en.1.jpg?fit=clip&auto=format&w=1504',
      href: '/resources/healthcare-ai-privacy',
      downloadable: true
    },
    {
      id: 8,
      title: 'The Future of Customer Support: AI-Human Collaboration',
      description: 'Research-backed insights on optimizing customer support with AI while maintaining human touch.',
      type: 'whitepaper',
      category: 'whitepapers',
      industry: 'Technology',
      image: 'https://assets-global.website-files.com/5d9bdb47e33988bf5815bfed/64432f668ce602905ec1f721_AI-Role-in-Customer-Service.png',
      href: '/resources/future-customer-support',
      downloadable: true
    },
    {
      id: 9,
      title: 'Data Governance in the Age of AI',
      description: 'Best practices for data management, security, and compliance in AI-driven organizations.',
      type: 'whitepaper',
      category: 'whitepapers',
      image: 'https://plurilock.com/wp-content/uploads/2023/06/ai-policy-thumb.jpg',
      href: '/resources/data-governance-ai',
      downloadable: true
    },

    // Webinars
    {
      id: 10,
      title: 'Getting Started with AI: A 30-Minute Implementation Roadmap',
      description: 'Live webinar covering the essential steps for successful AI implementation in your organization.',
      type: 'webinar',
      category: 'webinars',
      image: 'https://i.ytimg.com/vi/bZwpXEgG0to/maxresdefault.jpg',
      href: '/resources/ai-implementation-webinar',
      downloadable: false,
      duration: '30 min'
    },
    {
      id: 11,
      title: 'Healthcare AI Success Stories: Lessons from Early Adopters',
      description: 'Panel discussion with healthcare leaders who have successfully implemented AI solutions.',
      type: 'webinar',
      category: 'webinars',
      industry: 'Healthcare',
      image: 'https://i.ytimg.com/vi/wdugh1mpyI4/maxresdefault.jpg',
      href: '/resources/healthcare-ai-panel',
      downloadable: false,
      duration: '45 min'
    },

    // Tools
    {
      id: 12,
      title: 'AI Readiness Assessment',
      description: 'Evaluate your organization\'s readiness for AI implementation with our comprehensive assessment tool.',
      type: 'tool',
      category: 'tools',
      image: 'https://www.wsiworld.com/hubfs/AI%20Readiness%20Assessment%20LP%20Image%20-%20web.png',
      href: '/resources/ai-readiness-assessment',
      downloadable: false
    },
    {
      id: 13,
      title: 'Data Maturity Calculator',
      description: 'Assess your data infrastructure and identify areas for improvement before AI implementation.',
      type: 'tool',
      category: 'tools',
      image: 'https://sync.appfluence.com/static/images/data-management-maturity-assessment-matrix.png',
      href: '/resources/data-maturity-calculator',
      downloadable: false
    }
  ]

  const filteredResources = allResources.filter(resource => {
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'case-study':
        return FileText
      case 'whitepaper':
        return FileText
      case 'webinar':
        return Video
      case 'tool':
        return Calculator
      default:
        return FileText
    }
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://www.libraryjournal.com/binaries/content/gallery/Jlibrary/2024/january/enis/ljx240101webenis1.jpg"
            alt="AI Resources Library"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              AI Knowledge <span className="gradient-text">Resource Center</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Explore our comprehensive library of case studies, whitepapers, tools, and guides 
              to accelerate your AI journey. Learn from real implementations and get practical 
              insights from industry experts.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="section-padding bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Resources</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start with these essential resources to understand the impact and implementation of AI in your organization.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredResources.map((resource) => {
              const IconComponent = getResourceIcon(resource.type)
              return (
                <Card key={resource.id} className="group hover:scale-105 transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                      <Image
                        src={resource.image}
                        alt={resource.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-full p-2">
                          <IconComponent className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      {resource.downloadable && (
                        <div className="absolute top-4 right-4">
                          <div className="bg-black/70 rounded-full p-2">
                            <Download className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      )}
                    </div>
                    <CardTitle className="text-xl leading-tight">{resource.title}</CardTitle>
                    <CardDescription className="text-gray-300">
                      {resource.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full group">
                      <Link href={resource.href}>
                        {resource.downloadable ? 'Download' : 'Access'} Resource
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* All Resources */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <div className="lg:w-1/4">
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-700 sticky top-24">
                <div className="flex items-center space-x-2 mb-6">
                  <Filter className="w-5 h-5 text-purple-400" />
                  <h3 className="text-lg font-semibold">Filter Resources</h3>
                </div>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-purple-600 text-white'
                          : 'text-gray-300 hover:bg-gray-800'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{category.name}</span>
                        <span className="text-sm opacity-70">({category.count})</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Resources Grid */}
            <div className="lg:w-3/4">
              <div className="mb-6">
                <h2 className="text-3xl font-bold mb-2">
                  {selectedCategory === 'all' ? 'All Resources' : 
                   categories.find(c => c.id === selectedCategory)?.name}
                </h2>
                <p className="text-gray-400">
                  {filteredResources.length} resource{filteredResources.length !== 1 ? 's' : ''} found
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {filteredResources.map((resource) => {
                  const IconComponent = getResourceIcon(resource.type)
                  return (
                    <Card key={resource.id} className="group hover:scale-105 transition-all duration-300">
                      <CardHeader className="pb-4">
                        <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                          <Image
                            src={resource.image}
                            alt={resource.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute top-4 left-4">
                            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-full p-2">
                              <IconComponent className="w-4 h-4 text-white" />
                            </div>
                          </div>
                          {resource.downloadable && (
                            <div className="absolute top-4 right-4">
                              <div className="bg-black/70 rounded-full p-2">
                                <Download className="w-4 h-4 text-white" />
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="flex items-center space-x-2 mb-2">
                          {resource.industry && (
                            <span className="px-2 py-1 bg-purple-600/20 text-purple-400 text-xs rounded-full">
                              {resource.industry}
                            </span>
                          )}
                          {resource.product && (
                            <span className="px-2 py-1 bg-blue-600/20 text-blue-400 text-xs rounded-full">
                              {resource.product}
                            </span>
                          )}
                          {resource.duration && (
                            <span className="px-2 py-1 bg-green-600/20 text-green-400 text-xs rounded-full">
                              {resource.duration}
                            </span>
                          )}
                        </div>
                        <CardTitle className="text-lg leading-tight">{resource.title}</CardTitle>
                        <CardDescription className="text-gray-300 text-sm">
                          {resource.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button asChild variant="outline" size="sm" className="w-full group">
                          <Link href={resource.href}>
                            {resource.downloadable ? 'Download' : 'Access'}
                            <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              {filteredResources.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-gray-400 mb-4">No resources found matching your criteria.</div>
                  <Button onClick={() => { setSelectedCategory('all'); setSearchTerm('') }}>
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-purple-900/20 to-blue-900/20 border-t border-purple-500/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Have questions about implementing AI in your organization? 
            Our experts are here to help you navigate your AI journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="xl">
              <Link href="/contact?type=consultation">
                Schedule Expert Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl">
              <Link href="/resources/roi-calculator">
                Calculate Your ROI
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
