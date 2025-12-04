import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SocialSidebar from '@/components/SocialSidebar';
import ContactHeroSection from '@/components/contact/ContactHeroSection';
import ContactInfoSection from '@/components/contact/ContactInfoSection';
import ContactFormSection from '@/components/contact/ContactFormSection';
import ContactMapSection from '@/components/contact/ContactMapSection';

export const metadata = {
  title: 'Contact Us - VIP Auto Glass Calgary | Get in Touch',
  description: 'Contact VIP Auto Glass for professional auto glass services in Calgary. Call (403) 285-2000 or visit us at 10960 42 St NE #235. Quick response, 1-year workmanship guarantee.',
  keywords: 'contact VIP Auto Glass, Calgary auto glass contact, windshield repair Calgary contact, auto glass quote Calgary, VIP Glass phone number',
  openGraph: {
    title: 'Contact VIP Auto Glass Calgary - Get a Free Quote',
    description: 'Reach out to Calgary\'s trusted auto glass experts. Quick response, professional service.',
    url: 'https://vipautoglass.ca/contact',
    siteName: 'VIP Auto Glass',
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact VIP Auto Glass Calgary',
    description: 'Get in touch with Calgary\'s premier auto glass service provider.',
  },
  alternates: {
    canonical: 'https://vipautoglass.ca/contact',
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

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <SocialSidebar />
      <main>
        <ContactHeroSection />
        <ContactInfoSection />
        <ContactFormSection />
        <ContactMapSection />
      </main>
      <Footer />
    </div>
  );
}
