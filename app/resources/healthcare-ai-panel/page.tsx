
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Play, Calendar, Clock, Users, Heart, Award, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Healthcare AI Success Stories: Lessons from Early Adopters | LeapGen.AI',
  description: 'Panel discussion with healthcare leaders who have successfully implemented AI solutions.',
}

export default function HealthcareAIPanelPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://i.ytimg.com/vi/Q1dVSBFuDiA/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGBUgEyh_MA8=&rs=AOn4CLDoe6A9vjR2ycG_WWvoW7_kXcc-6A"
            alt="Healthcare AI Panel Discussion"
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
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div className="inline-block px-3 py-1 bg-red-600/20 text-red-400 text-sm rounded-full mb-4">
                Expert Panel • Healthcare AI • 45 Minutes
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Healthcare AI Success Stories: <span className="gradient-text">Lessons from Early Adopters</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join leading healthcare executives and AI pioneers as they share real-world experiences, challenges, and successes
              </p>
            </div>

            {/* Panel Details */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Clock className="w-12 h-12 text-red-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Duration</h3>
                  <p className="text-gray-300">45 minutes + 15 min Q&A</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Users className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Panelists</h3>
                  <p className="text-gray-300">4 healthcare AI leaders</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Award className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Experience</h3>
                  <p className="text-gray-300">50+ years combined</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Panel Speakers */}
      <section className="section-padding bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Meet Our Distinguished Panel</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src="https://i.pinimg.com/736x/bd/49/cf/bd49cff2e09fbef8481e16c201a49a8b.jpg"
                        alt="Dr. Emily Rodriguez"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">Dr. Emily Rodriguez, MD</h3>
                      <p className="text-red-400 mb-2">Chief Medical Officer</p>
                      <p className="text-gray-400 text-sm mb-3">Metro Medical Center</p>
                      <p className="text-gray-300 text-sm">
                        Led the implementation of AI-powered clinical documentation across 750-bed hospital system, 
                        achieving 80% reduction in documentation time.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src="https://i.pinimg.com/originals/67/eb/28/67eb28e989c6b1d208152e0a3b025a99.jpg"
                        alt="James Patterson"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">James Patterson</h3>
                      <p className="text-pink-400 mb-2">Chief Technology Officer</p>
                      <p className="text-gray-400 text-sm mb-3">Regional Health Network</p>
                      <p className="text-gray-300 text-sm">
                        Spearheaded AI transformation across 12-hospital network, focusing on radiology AI 
                        and predictive analytics for patient outcomes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src="https://i.pinimg.com/originals/d7/95/f5/d795f5f1c850eda020b0051bf52cb84f.jpg"
                        alt="Dr. Sarah Kim"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">Dr. Sarah Kim, PhD</h3>
                      <p className="text-blue-400 mb-2">Director of Innovation</p>
                      <p className="text-gray-400 text-sm mb-3">Academic Medical Center</p>
                      <p className="text-gray-300 text-sm">
                        Research leader in healthcare AI ethics and implementation, with focus on 
                        ensuring equitable AI deployment in diverse patient populations.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src="https://i.pinimg.com/474x/35/3b/db/353bdb3a706d58c1d22458a2ff30706f.jpg"
                        alt="Michael Thompson"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">Michael Thompson, RN</h3>
                      <p className="text-green-400 mb-2">VP of Quality & Safety</p>
                      <p className="text-gray-400 text-sm mb-3">Community Health System</p>
                      <p className="text-gray-300 text-sm">
                        Implemented AI-driven quality monitoring and patient safety systems, 
                        resulting in 40% reduction in preventable adverse events.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Discussion Topics */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Key Discussion Topics</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-red-900/20 border-red-500/30">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Heart className="w-5 h-5 text-red-400" />
                    <span>Clinical Implementation</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Overcoming physician resistance to AI</li>
                    <li>• Integrating AI with existing workflows</li>
                    <li>• Measuring clinical outcomes and ROI</li>
                    <li>• Ensuring patient safety and quality</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-pink-900/20 border-pink-500/30">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-pink-400" />
                    <span>Change Management</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Building organizational buy-in</li>
                    <li>• Training and education strategies</li>
                    <li>• Managing workflow disruptions</li>
                    <li>• Creating AI champions</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-blue-900/20 border-blue-500/30">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-blue-400" />
                    <span>Technology & Infrastructure</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300">
                    <li>• EHR integration challenges and solutions</li>
                    <li>• Data quality and governance</li>
                    <li>• Vendor selection and partnerships</li>
                    <li>• Scalability and future-proofing</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-green-900/20 border-green-500/30">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-green-400" />
                    <span>Regulatory & Compliance</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300">
                    <li>• HIPAA compliance in AI systems</li>
                    <li>• FDA regulations for medical AI</li>
                    <li>• Liability and risk management</li>
                    <li>• Ethical AI guidelines</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="section-padding bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Success Stories You'll Hear</h2>
            
            <div className="space-y-8">
              <Card className="bg-gradient-to-r from-red-900/20 to-pink-900/20 border-red-500/20">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">1</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">750-Bed Hospital Transforms Documentation</h3>
                      <p className="text-gray-300 mb-4">
                        Metro Medical Center reduced physician documentation time by 80% while improving billing accuracy 
                        by 90% through AI-powered clinical documentation.
                      </p>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-red-400">80%</div>
                          <div className="text-sm text-gray-400">Time Reduction</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-pink-400">90%</div>
                          <div className="text-sm text-gray-400">Billing Accuracy</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-blue-400">95%</div>
                          <div className="text-sm text-gray-400">Physician Satisfaction</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-blue-900/20 to-green-900/20 border-blue-500/20">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">2</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">12-Hospital Network Deploys Radiology AI</h3>
                      <p className="text-gray-300 mb-4">
                        Regional Health Network implemented AI-powered radiology across all locations, 
                        reducing diagnostic time by 60% and improving accuracy by 25%.
                      </p>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-blue-400">60%</div>
                          <div className="text-sm text-gray-400">Faster Diagnosis</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-green-400">25%</div>
                          <div className="text-sm text-gray-400">Accuracy Improvement</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-purple-400">$5M</div>
                          <div className="text-sm text-gray-400">Annual Savings</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Panel Agenda */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Panel Discussion Agenda</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold">
                  0-5
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Welcome & Introductions</h3>
                  <p className="text-gray-300">Meet the panelists and overview of their AI implementation journeys</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-pink-600 rounded-lg flex items-center justify-center text-white font-bold">
                  5-20
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Implementation Stories & Lessons Learned</h3>
                  <p className="text-gray-300">Each panelist shares their unique implementation experience and key insights</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                  20-35
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Challenges & Solutions Deep Dive</h3>
                  <p className="text-gray-300">Moderated discussion on common challenges and proven solutions</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold">
                  35-45
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Future of Healthcare AI</h3>
                  <p className="text-gray-300">Panel predictions and recommendations for healthcare AI evolution</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                  45-60
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Audience Q&A</h3>
                  <p className="text-gray-300">Submit questions in advance or ask live during the session</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Attendee Testimonials */}
      <section className="section-padding bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What Previous Attendees Say</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-r from-red-900/20 to-pink-900/20 border-red-500/30">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-300 mb-4">
                    "Incredibly valuable insights from real practitioners. The panel format allowed for deep discussion 
                    of challenges we're facing in our own AI implementation."
                  </blockquote>
                  <div>
                    <div className="font-semibold">Dr. Lisa Wang</div>
                    <div className="text-gray-400">Chief Medical Officer, City General Hospital</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-blue-900/20 to-green-900/20 border-blue-500/30">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-300 mb-4">
                    "The honest discussion about failures and setbacks was refreshing. It helped us avoid similar 
                    pitfalls in our own AI journey."
                  </blockquote>
                  <div>
                    <div className="font-semibold">Robert Martinez</div>
                    <div className="text-gray-400">CIO, Regional Medical Center</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="section-padding bg-gradient-to-r from-red-900/20 to-pink-900/20 border-t border-red-500/20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Join the Next Panel Discussion</h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't miss this opportunity to learn from healthcare AI pioneers. 
              Limited seats available for interactive participation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="xl">
                <Link href="/contact?type=webinar&resource=healthcare-ai-panel">
                  <Play className="mr-2 w-5 h-5" />
                  Register Free
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link href="/contact?type=consultation">
                  Schedule Private Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Can't attend live? Register to receive the recording and exclusive panel insights report.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
