import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import WhatWeOfferSection from '@/components/WhatWeOfferSection';
import ServicesSection from '@/components/ServicesSection';
import GallerySection from '@/components/GallerySection';
import TestimonialSection from '@/components/TestimonialSection';
import CTASection from '@/components/CTASection';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import SocialSidebar from '@/components/SocialSidebar';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <SocialSidebar />
      <main>
        <div id="hero">
          <HeroSection />
        </div>
        <AboutSection />
        <WhatWeOfferSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialSection />
        <CTASection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
