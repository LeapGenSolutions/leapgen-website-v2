
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Users, Target, Award, Globe, Brain, Shield, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import AnimatedCounter from '@/components/animated-counter'

export const metadata: Metadata = {
  title: 'About LeapGen.AI - Pioneering AI Solutions for Enterprise | Our Story & Team',
  description: 'Learn about LeapGen.AI\'s mission to transform businesses with intelligent AI solutions. Meet our team of AI experts and discover our commitment to innovation.',
  keywords: 'about LeapGen.AI, AI company, enterprise AI, artificial intelligence team, AI innovation',
}

export default function AboutPage() {
  const stats = [
    {
      number: 500,
      suffix: '+',
      label: 'Organizations Trust Us',
      description: 'From startups to Fortune 500 companies'
    },
    {
      number: 99.9,
      suffix: '%',
      label: 'Uptime Guarantee',
      description: 'Enterprise-grade reliability'
    },
    {
      number: 40,
      suffix: '%',
      label: 'Average Cost Reduction',
      description: 'Measurable ROI for our clients'
    },
    {
      number: 30,
      suffix: '-Day',
      label: 'Implementation',
      description: 'Rapid deployment process'
    }
  ]

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI, constantly exploring new technologies and methodologies to solve complex business challenges.',
      color: 'from-purple-600 to-blue-600'
    },
    {
      icon: Users,
      title: 'Customer Success',
      description: 'Our success is measured by our customers\' success. We\'re committed to delivering measurable value and long-term partnerships.',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'We maintain the highest standards of security and compliance, ensuring our solutions protect your data and meet regulatory requirements.',
      color: 'from-green-600 to-emerald-600'
    },
    {
      icon: Zap,
      title: 'Rapid Impact',
      description: 'We believe AI should deliver immediate value. Our solutions are designed for quick implementation and fast time-to-value.',
      color: 'from-orange-600 to-red-600'
    }
  ]

  const team = [
    {
      name: 'Dr. Sarah Chen',
      title: 'CEO & Co-Founder',
      bio: 'Former AI Research Director at Google, PhD in Machine Learning from Stanford. 15+ years building enterprise AI solutions.',
      image: 'https://i.pinimg.com/originals/fb/c8/29/fbc8295cc4b534ec874c722b4e568d2f.jpg',
      expertise: ['AI Strategy', 'Machine Learning', 'Enterprise Software']
    },
    {
      name: 'Michael Rodriguez',
      title: 'CTO & Co-Founder',
      bio: 'Ex-Principal Engineer at Microsoft Azure AI. Led development of cloud-scale AI platforms serving millions of users.',
      image: 'https://media.istockphoto.com/id/157558498/photo/young-hispanic-professional-headshot.jpg?s=612x612&w=0&k=20&c=Cr3ZKnH54yVGaiogH5x6fxsZs5Qs4gtzjvF3hpxfbIg=',
      expertise: ['Cloud Architecture', 'AI Infrastructure', 'Scalable Systems']
    },
    {
      name: 'Dr. Jennifer Walsh',
      title: 'VP of Product',
      bio: 'Former Product Lead at Salesforce Einstein. PhD in Computer Science, expert in human-AI interaction design.',
      image: 'https://i.pinimg.com/originals/e2/cc/9e/e2cc9e2f2545443113be3cc3a99abb18.jpg',
      expertise: ['Product Strategy', 'UX Design', 'AI Ethics']
    },
    {
      name: 'David Kim',
      title: 'VP of Engineering',
      bio: 'Previously Senior Engineering Manager at Uber AI. Built real-time ML systems processing billions of events daily.',
      image: 'https://i.pinimg.com/originals/fa/be/61/fabe61b03be64af9d7deefbb59ddb278.jpg',
      expertise: ['Distributed Systems', 'Real-time ML', 'Team Leadership']
    }
  ]

  const timeline = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'LeapGen.AI was founded with a mission to democratize AI for enterprises of all sizes.'
    },
    {
      year: '2021',
      title: 'First Product Launch',
      description: 'Launched SurroundAI, our flagship customer support automation platform.'
    },
    {
      year: '2022',
      title: 'Series A Funding',
      description: 'Raised $25M Series A to accelerate product development and market expansion.'
    },
    {
      year: '2023',
      title: 'Platform Expansion',
      description: 'Introduced Data Coffee and Seismic, completing our comprehensive AI platform.'
    },
    {
      year: '2024',
      title: 'Global Scale',
      description: 'Reached 500+ enterprise customers across 25 countries with 99.9% uptime.'
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://img.freepik.com/premium-photo/teamwork-laptop-team-working-project-together-with-research-modern-corporate-office-diversity-technology-business-people-collaboration-company-strategy-planning-workplace_590464-101822.jpg?w=2000"
            alt="LeapGen.AI Team"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Pioneering <span className="gradient-text">AI Solutions</span> for Tomorrow's Challenges
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              At LeapGen.AI, we believe artificial intelligence should enhance human potential, 
              not replace it. We're building the future of enterprise AI—one that's accessible, 
              ethical, and delivers measurable value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="xl">
                <Link href="/contact">
                  Join Our Mission
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link href="#team">
                  Meet Our Team
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-lg font-semibold text-white mb-1">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Our <span className="gradient-text">Mission</span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  We're on a mission to democratize artificial intelligence for enterprises 
                  worldwide. Our goal is to make advanced AI accessible, practical, and 
                  immediately valuable for organizations of all sizes.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  We believe that AI should augment human intelligence, not replace it. 
                  Our solutions are designed to free people from repetitive tasks so they 
                  can focus on what they do best—creative problem-solving, strategic thinking, 
                  and building meaningful relationships.
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Our Vision</h3>
                  <p className="text-gray-300">A world where every organization can harness the power of AI to solve their biggest challenges.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square max-w-lg mx-auto relative">
                <Image
                  src="https://c8.alamy.com/comp/2WC4KBF/futuristic-collaboration-human-and-robot-hands-touching-ai-artificial-intelligence-technological-machine-innovation-global-network-data-2WC4KBF.jpg"
                  alt="AI Technology Vision"
                  fill
                  className="object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-blue-600/20 rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These core values guide everything we do, from product development 
              to customer relationships and company culture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <Card key={index} className="group hover:scale-105 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${value.color} rounded-lg flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-2xl">{value.title}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-300 text-lg leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our <span className="gradient-text">Leadership Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our team combines decades of experience in AI research, enterprise software, 
              and building products that scale to millions of users.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-purple-400 font-semibold">
                    {member.title}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  <div className="space-y-1">
                    <div className="text-sm font-semibold text-gray-400">Expertise:</div>
                    {member.expertise.map((skill, idx) => (
                      <div key={idx} className="text-xs text-gray-500">• {skill}</div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From a small startup to a trusted AI platform serving hundreds of enterprises worldwide.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-blue-600"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex items-start space-x-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
                      <span className="text-white font-bold">{item.year}</span>
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-purple-900/20 to-blue-900/20 border-t border-purple-500/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Join Our Mission?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're looking to transform your business with AI or join our team, 
            we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="xl">
              <Link href="/contact">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl">
              <Link href="/careers">
                View Open Positions
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
