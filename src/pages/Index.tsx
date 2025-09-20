import React from 'react';
import HeroSection from '../components/HeroSection'
import ProductsSection from '../components/ProductsSection'
import TestimonialsSection from '../components/TestimonialsSection'
import CTASection from '../components/CTASection'
import SEO from '../components/SEO'
import { useAnalytics } from '@/utils/analytics';
import AboutUs from './AboutUs';
import Features from './Features';

const Index = () => {
  const analytics = useAnalytics();

  // Track A/B test exposure
  React.useEffect(() => {
    const heroVariant = Math.random() > 0.5 ? 'original' : 'conversion-optimized';
    analytics.trackABTest('hero-optimization', heroVariant, 'demo_request');
  }, []);

  return (
    <>
      <SEO 
        title="LeapGen.AI - Transform Your Business with AI Solutions"
        description="Boost productivity by 40%, reduce errors by 75%, and unlock powerful insights with LeapGen.AI's enterprise-grade AI solutions. Trusted by 500+ organizations worldwide."
        keywords="AI solutions, artificial intelligence, enterprise AI, business automation, productivity, SurroundAI, Data Coffee, healthcare AI, finance AI"
        url="https://leapgen.ai"
        breadcrumbs={[
          { name: 'Home', url: '/' }
        ]}
      />
      <div className="min-h-screen">
        {/* Use the improved HeroSection instead of A/B testing for now */}
        <AboutUs />
        <HeroSection />
        <ProductsSection />
        <Features />
        <TestimonialsSection />
        <CTASection />
        
        {/* Performance monitoring */}
        <div id="performance-monitor-root" />
      </div>
    </>
  );
};

export default Index;
