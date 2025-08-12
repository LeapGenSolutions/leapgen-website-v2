'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Users, TrendingUp, Shield } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'
import AnimatedCounter from './animated-counter'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full bg-gradient-to-br from-black via-gray-900 to-black">
          <Image
            src="https://cdn.abacus.ai/images/1c4a902b-0626-4110-8238-04bda99fe7ab.png"
            alt="AI Technology Workspace"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Main Content Layout - Redesigned for better button visibility */}
        <div className="max-w-7xl mx-auto">
          {/* Content Section - Full width on mobile, left side on desktop */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Left Column - Content (takes more space) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-8 lg:pr-8"
            >
              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center space-x-2 text-sm text-purple-400"
              >
                <Users className="w-4 h-4" />
                <span>Trusted by 500+ organizations worldwide</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                Reduce Support Costs by{' '}
                <span className="gradient-text">
                  <AnimatedCounter end={60} suffix="%" />
                </span>{' '}
                with Enterprise AI
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-300 leading-relaxed"
              >
                Join 500+ organizations using LeapGen.AI to automate customer support,
                unlock data insights, and revolutionize clinical documentation—with
                enterprise-grade security and rapid deployment.
              </motion.p>

              {/* Key Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-6"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      <AnimatedCounter end={75} suffix="%" />
                    </div>
                    <div className="text-sm text-gray-400">Faster Response Times</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      99.<AnimatedCounter end={9} />%
                    </div>
                    <div className="text-sm text-gray-400">Uptime Guarantee</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      <AnimatedCounter end={30} />-Day
                    </div>
                    <div className="text-sm text-gray-400">Implementation</div>
                  </div>
                </div>
              </motion.div>

              {/* CTA Buttons - Enhanced spacing and visibility */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Button asChild size="xl" className="group bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <Link href="/contact?type=demo">
                    Schedule Your Free AI Strategy Session
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="xl" className="group border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black bg-black/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                  <Link href="/resources/surroundai-roi-calculator">
                    <Play className="mr-2 w-5 h-5" />
                    Calculate Your ROI
                  </Link>
                </Button>
              </motion.div>

              {/* Social Proof */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex items-center space-x-4 text-sm text-gray-400 pt-4"
              >
                <span>Join 50+ demos scheduled this month</span>
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full border-2 border-black flex items-center justify-center text-xs font-semibold"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Visual (smaller, positioned to not interfere) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 mt-12 lg:mt-0"
            >
              <div className="relative aspect-[4/3] max-w-md mx-auto lg:max-w-none">
                <Image
                  src="https://cdn.abacus.ai/images/007859da-9f38-4031-bf4d-1aaf8d834962.png"
                  alt="AI Dashboard Interface"
                  fill
                  className="object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-blue-600/20 rounded-2xl" />

                {/* Floating Stats Cards - Repositioned within image bounds */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute top-4 right-4 bg-gray-900/90 backdrop-blur-sm border border-purple-500/30 rounded-lg p-3 shadow-xl"
                >
                  <div className="text-xl font-bold text-purple-400">
                    <AnimatedCounter end={60} suffix="%" />
                  </div>
                  <div className="text-xs text-gray-300">Cost Reduction</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="absolute bottom-4 left-4 bg-gray-900/90 backdrop-blur-sm border border-blue-500/30 rounded-lg p-3 shadow-xl"
                >
                  <div className="text-xl font-bold text-blue-400">
                    <AnimatedCounter end={500} suffix="+" />
                  </div>
                  <div className="text-xs text-gray-300">Happy Clients</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-purple-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
