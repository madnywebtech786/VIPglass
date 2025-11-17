import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GlassTintingContent from '@/components/services/GlassTintingContent';

export const metadata = {
  title: "Car Window Tinting Calgary | Ceramic & Carbon Tint | VIP Auto Glass",
  description: "Professional car window tinting in Calgary. Ceramic & carbon tint options. UV protection, heat reduction, privacy. Custom fit for all vehicle makes and models. Expert installation!",
  keywords: "car window tinting Calgary, window tint Calgary, ceramic tint, carbon tint, UV protection, car tinting service, auto window tinting, vehicle tint Calgary, professional tinting, VIP Auto Glass Calgary",
  openGraph: {
    title: "Car Window Tinting Calgary | Ceramic & Carbon Tint",
    description: "Professional car window tinting in Calgary. Ceramic & carbon options. UV protection, heat reduction, privacy. Custom fit installation!",
    type: "website",
    locale: "en_CA",
    url: "https://vipautoglass.ca/services/glass-tinting",
    images: [
      {
        url: "/images/vip_logo.png",
        width: 1200,
        height: 630,
        alt: "VIP Auto Glass - Window Tinting Calgary",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Window Tinting Calgary | VIP Auto Glass",
    description: "Professional car window tinting. Ceramic & carbon options. UV protection & heat reduction.",
    images: ["/images/vip_logo.png"],
  },
};

export default function GlassTintingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <GlassTintingContent />
      </main>
      <Footer />
    </div>
  );
}
