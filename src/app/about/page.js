import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SocialSidebar from '@/components/SocialSidebar';
import AboutHeroSection from '@/components/about/AboutHeroSection';
import MissionVisionSection from '@/components/about/MissionVisionSection';
import WhyChooseUsSection from '@/components/about/WhyChooseUsSection';
import TeamExpertiseSection from '@/components/about/TeamExpertiseSection';
import AboutCTASection from '@/components/about/AboutCTASection';

export const metadata = {
  title: 'About Us - VIP Auto Glass Calgary | 9+ Years of Excellence',
  description: 'Learn about VIP Auto Glass, Calgary\'s trusted auto glass experts since 2015. We specialize in windshield replacement, repair, ADAS calibration, and window tinting with over 5000 satisfied customers.',
  keywords: 'VIP Auto Glass Calgary, auto glass company Calgary, windshield experts Calgary, ADAS calibration Calgary, about VIP Glass, Calgary auto glass history',
  openGraph: {
    title: 'About VIP Auto Glass - Calgary\'s Premier Auto Glass Specialists',
    description: 'Discover our story, mission, and commitment to excellence in auto glass services across Calgary. 9+ years of trusted service.',
    url: 'https://vipautoglass.ca/about',
    siteName: 'VIP Auto Glass',
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About VIP Auto Glass Calgary',
    description: '9+ years serving Calgary with expert auto glass solutions.',
  },
  alternates: {
    canonical: 'https://vipautoglass.ca/about',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <SocialSidebar />
      <main>
        <AboutHeroSection />
        <MissionVisionSection />
        <WhyChooseUsSection />
        <TeamExpertiseSection />
        <AboutCTASection />
      </main>
      <Footer />
    </div>
  );
}
