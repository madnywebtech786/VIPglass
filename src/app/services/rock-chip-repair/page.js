import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RockChipRepairContent from '@/components/services/RockChipRepairContent';

export const metadata = {
  title: "Rock Chip Repair Calgary $29.99 | Windshield Crack Repair | VIP Auto Glass",
  description: "Fast rock chip repair in Calgary for just $29.99! No appointment needed. Expert windshield crack repair in under 30 minutes. Walk-in service available. Prevent costly replacement today!",
  keywords: "rock chip repair Calgary, windshield crack repair, chip repair $29.99, windshield chip repair Calgary, auto glass chip repair, stone chip repair, windshield repair Calgary, cheap windshield repair, quick chip repair, VIP Auto Glass Calgary",
  openGraph: {
    title: "Rock Chip Repair Calgary $29.99 | Quick Windshield Crack Repair",
    description: "Fast rock chip repair in Calgary for just $29.99! No appointment needed. Expert service in under 30 minutes. Walk-in welcome!",
    type: "website",
    locale: "en_CA",
    url: "https://vipautoglass.ca/services/rock-chip-repair",
    images: [
      {
        url: "/images/vip_logo.png",
        width: 1200,
        height: 630,
        alt: "VIP Auto Glass - Rock Chip Repair Calgary",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rock Chip Repair Calgary $29.99 | VIP Auto Glass",
    description: "Fast rock chip repair for just $29.99! No appointment needed. Under 30 minutes.",
    images: ["/images/vip_logo.png"],
  },
};

export default function RockChipRepairPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <RockChipRepairContent />
      </main>
      <Footer />
    </div>
  );
}
