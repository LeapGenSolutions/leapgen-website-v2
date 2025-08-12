
import HeroSection from '@/components/hero-section'
import ProductsSection from '@/components/products-section'
import TestimonialsSection from '@/components/testimonials-section'
import IndustriesSection from '@/components/industries-section'
import CTASection from '@/components/cta-section'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProductsSection />
      <TestimonialsSection />
      <IndustriesSection />
      <CTASection />
    </div>
  )
}
