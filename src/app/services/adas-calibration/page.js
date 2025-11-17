import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ADASCalibrationContent from '@/components/services/ADASCalibrationContent';

export const metadata = {
  title: "ADAS Calibration Calgary | Advanced Driver Assistance Systems | VIP Auto Glass",
  description: "Professional ADAS calibration services in Calgary. Static & dynamic calibration for all vehicle makes and models. Expert technicians, cutting-edge equipment, manufacturer-approved methods.",
  keywords: "ADAS calibration Calgary, camera calibration, windshield calibration, advanced driver assistance systems, static calibration, dynamic calibration, collision avoidance, lane keeping, adaptive cruise control, VIP Auto Glass Calgary",
  openGraph: {
    title: "ADAS Calibration Calgary | Advanced Driver Assistance Systems",
    description: "Professional ADAS calibration in Calgary. Static & dynamic calibration. Manufacturer-approved methods. Expert technicians.",
    type: "website",
    locale: "en_CA",
    url: "https://vipautoglass.ca/services/adas-calibration",
    images: [
      {
        url: "/images/vip_logo.png",
        width: 1200,
        height: 630,
        alt: "VIP Auto Glass - ADAS Calibration Calgary",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ADAS Calibration Calgary | VIP Auto Glass",
    description: "Professional ADAS calibration. Static & dynamic options. Manufacturer-approved methods.",
    images: ["/images/vip_logo.png"],
  },
};

export default function ADASCalibrationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <ADASCalibrationContent />
      </main>
      <Footer />
    </div>
  );
}
