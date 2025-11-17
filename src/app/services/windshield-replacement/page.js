import Navbar from '@/components/Navbar';
import WindshieldReplacementContent from '@/components/services/WindshieldReplacementContent';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Windshield Replacement Calgary | Professional Auto Glass Replacement | VIP Auto Glass",
  description: "Expert windshield replacement in Calgary. Fast, affordable, and reliable service. Insurance claims accepted. Mobile service available. Book your windshield replacement today!",
  keywords: "windshield replacement Calgary, auto glass replacement, cracked windshield repair, windshield installation Calgary, mobile windshield replacement, insurance windshield replacement",
  openGraph: {
    title: "Professional Windshield Replacement Services in Calgary",
    description: "Get your windshield replaced by Calgary's trusted experts. Same-day service available. Free quotes!",
    images: ["/images/vip_logo.png"],
  },
};

export default function WindshieldReplacementPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <WindshieldReplacementContent />
      </main>
      <Footer />
    </div>
  );
}
