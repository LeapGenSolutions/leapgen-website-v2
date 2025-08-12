
import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold gradient-text">LeapGen.AI</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Pioneering Artificial Intelligence Solutions for Tomorrow's Challenges. 
              Trusted by 500+ organizations worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/leap-gen-solutions/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://x.com/LeapgenAi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/leapgen_solutions/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@leapgensolutions" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products/surroundai" className="text-gray-400 hover:text-white transition-colors text-sm">
                  SurroundAI
                </Link>
              </li>
              <li>
                <Link href="/products/data-coffee" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Data Coffee
                </Link>
              </li>
              <li>
                <Link href="/products/seismic" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Seismic
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Industries</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/industries/healthcare" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link href="/industries/financial-services" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Financial Services
                </Link>
              </li>
              <li>
                <Link href="/industries/manufacturing" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link href="/industries/retail" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Retail
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-purple-400" />
                <span className="text-gray-400 text-sm">contact@leapgen.ai</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-purple-400" />
                <span className="text-gray-400 text-sm">609-722-6768</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-purple-400 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  44790 Maynard Square Suite 350<br />
                  Ashburn, Virginia 20147
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 LeapGen.AI. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
