
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const products = [
    { name: 'SurroundAI', href: '/products/surroundai', description: 'AI-powered customer support automation' },
    { name: 'Data Coffee', href: '/products/data-coffee', description: 'Centralized data analytics platform' },
    { name: 'Seismic', href: '/products/seismic', description: 'Clinical documentation with AI' },
  ]

  const industries = [
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Financial Services', href: '/industries/financial-services' },
    { name: 'Manufacturing', href: '/industries/manufacturing' },
    { name: 'Retail', href: '/industries/retail' },
  ]

  const useCases = [
    { name: 'Finance & Banking', href: '/use-cases/finance', description: 'Predictive intelligence for financial services' },
    { name: 'Healthcare', href: '/use-cases/healthcare', description: 'Proactive patient care and unified records' },
    { name: 'Government & Education', href: '/use-cases/sled', description: 'Data-driven public service optimization' },
    { name: 'E-commerce & Retail', href: '/use-cases/retail', description: 'Personalized customer experiences' },
    { name: 'Accounting & Audit', href: '/use-cases/accounting', description: 'Automated financial analysis' },
    { name: 'Enterprise', href: '/use-cases/enterprise', description: 'Enterprise-wide intelligence systems' },
    { name: 'Small & Medium Business', href: '/use-cases/smb', description: 'Enterprise-level insights for SMBs' },
  ]

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold gradient-text">LeapGen.AI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Products Dropdown */}
            <div className="relative group">
              <button
                onClick={() => handleDropdownToggle('products')}
                className="flex items-center space-x-1 text-white hover:text-purple-400 transition-colors"
              >
                <span>Products</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'products' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-gray-900 border border-gray-700 rounded-lg shadow-xl"
                  >
                    <div className="p-4">
                      {products.map((product) => (
                        <Link
                          key={product.name}
                          href={product.href}
                          className="block p-3 rounded-lg hover:bg-gray-800 transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div className="font-semibold text-white">{product.name}</div>
                          <div className="text-sm text-gray-400">{product.description}</div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Use Cases Dropdown */}
            <div className="relative group">
              <button
                onClick={() => handleDropdownToggle('usecases')}
                className="flex items-center space-x-1 text-white hover:text-purple-400 transition-colors"
              >
                <span>Use Cases</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'usecases' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-gray-900 border border-gray-700 rounded-lg shadow-xl"
                  >
                    <div className="p-4">
                      <Link
                        href="/customer-success"
                        className="block p-3 rounded-lg hover:bg-gray-800 transition-colors border-b border-gray-700 mb-2"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="font-semibold text-green-400">Customer Success Stories</div>
                        <div className="text-sm text-gray-400">Real results from our clients</div>
                      </Link>
                      <Link
                        href="/use-cases"
                        className="block p-3 rounded-lg hover:bg-gray-800 transition-colors border-b border-gray-700 mb-2"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="font-semibold text-purple-400">View All Use Cases</div>
                        <div className="text-sm text-gray-400">Explore AI solutions by industry</div>
                      </Link>
                      {useCases.map((useCase) => (
                        <Link
                          key={useCase.name}
                          href={useCase.href}
                          className="block p-3 rounded-lg hover:bg-gray-800 transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div className="font-semibold text-white">{useCase.name}</div>
                          <div className="text-sm text-gray-400">{useCase.description}</div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Industries Dropdown */}
            <div className="relative group">
              <button
                onClick={() => handleDropdownToggle('industries')}
                className="flex items-center space-x-1 text-white hover:text-purple-400 transition-colors"
              >
                <span>Industries</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'industries' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-gray-900 border border-gray-700 rounded-lg shadow-xl"
                  >
                    <div className="p-4">
                      {industries.map((industry) => (
                        <Link
                          key={industry.name}
                          href={industry.href}
                          className="block p-3 rounded-lg hover:bg-gray-800 transition-colors text-white"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {industry.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/about" className="text-white hover:text-purple-400 transition-colors">
              About Us
            </Link>
            <Link href="/resources" className="text-white hover:text-purple-400 transition-colors">
              Resources
            </Link>
            <Link href="/contact" className="text-white hover:text-purple-400 transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact?type=demo"
              className="btn-primary px-6 py-3 text-sm font-semibold"
            >
              Schedule Free Demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white hover:text-purple-400 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-gray-900 border-t border-gray-800"
            >
              <div className="p-4 space-y-4">
                <div>
                  <div className="font-semibold text-white mb-2">Products</div>
                  {products.map((product) => (
                    <Link
                      key={product.name}
                      href={product.href}
                      className="block py-2 pl-4 text-gray-300 hover:text-white transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
                <div>
                  <div className="font-semibold text-white mb-2">Use Cases</div>
                  <Link
                    href="/customer-success"
                    className="block py-2 pl-4 text-green-400 hover:text-white transition-colors font-semibold"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Customer Success Stories
                  </Link>
                  <Link
                    href="/use-cases"
                    className="block py-2 pl-4 text-purple-400 hover:text-white transition-colors font-semibold"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    View All Use Cases
                  </Link>
                  {useCases.map((useCase) => (
                    <Link
                      key={useCase.name}
                      href={useCase.href}
                      className="block py-2 pl-4 text-gray-300 hover:text-white transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {useCase.name}
                    </Link>
                  ))}
                </div>
                <div>
                  <div className="font-semibold text-white mb-2">Industries</div>
                  {industries.map((industry) => (
                    <Link
                      key={industry.name}
                      href={industry.href}
                      className="block py-2 pl-4 text-gray-300 hover:text-white transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {industry.name}
                    </Link>
                  ))}
                </div>
                <Link
                  href="/about"
                  className="block py-2 text-white hover:text-purple-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/resources"
                  className="block py-2 text-white hover:text-purple-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Resources
                </Link>
                <Link
                  href="/contact"
                  className="block py-2 text-white hover:text-purple-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  href="/contact?type=demo"
                  className="block w-full btn-primary text-center py-3 mt-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Schedule Free Demo
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Header
