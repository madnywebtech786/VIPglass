import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SocialSidebar from '@/components/SocialSidebar';
import GalleryHeroSection from '@/components/gallery/GalleryHeroSection';
import GalleryGridSection from '@/components/gallery/GalleryGridSection';
import GalleryStatsSection from '@/components/gallery/GalleryStatsSection';

export const metadata = {
  title: 'Gallery - VIP Auto Glass Calgary | Our Work Portfolio',
  description: 'Explore our portfolio of completed auto glass projects in Calgary. See examples of windshield replacements, rock chip repairs, window tinting, and ADAS calibration work.',
  keywords: 'VIP Auto Glass gallery, auto glass work Calgary, windshield replacement examples, window tinting portfolio, Calgary auto glass projects',
  openGraph: {
    title: 'Gallery - VIP Auto Glass Calgary Work Portfolio',
    description: 'View our portfolio of professional auto glass services completed across Calgary.',
    url: 'https://vipautoglass.ca/gallery',
    siteName: 'VIP Auto Glass',
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VIP Auto Glass Calgary Gallery',
    description: 'Professional auto glass work portfolio from Calgary\'s trusted experts.',
  },
  alternates: {
    canonical: 'https://vipautoglass.ca/gallery',
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

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <SocialSidebar />
      <main>
        <GalleryHeroSection />
        <GalleryGridSection />
        <GalleryStatsSection />
      </main>
      <Footer />
    </div>
  );
}
