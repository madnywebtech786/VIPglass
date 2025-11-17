import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GlassBillerForm from "@/components/GlassBillerForm";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "VIP Auto Glass Calgary | Windshield Repair & Replacement | Mobile Service 24/7",
  description: "Calgary's trusted auto glass experts for 9+ years. Professional windshield repair & replacement, rock chip repair, window tinting, ceramic coating. Same-day mobile service available. Free quotes. Call now!",
  keywords: "auto glass Calgary, windshield repair Calgary, windshield replacement Calgary, mobile auto glass, rock chip repair, window tinting Calgary, ceramic coating, auto glass near me, car window repair, emergency windshield repair, VIP Auto Glass",
  authors: [{ name: "VIP Auto Glass" }],
  creator: "VIP Auto Glass",
  publisher: "VIP Auto Glass",
  applicationName: "VIP Auto Glass",
  referrer: "origin-when-cross-origin",
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
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://vipautoglass.ca",
    siteName: "VIP Auto Glass Calgary",
    title: "VIP Auto Glass Calgary | Expert Windshield Repair & Replacement",
    description: "Calgary's #1 auto glass repair service. 9+ years of excellence. Professional windshield repair, replacement, window tinting & ceramic coating. 24/7 mobile service. Free quotes!",
    images: [
      {
        url: "/images/vip_logo.png",
        width: 1200,
        height: 630,
        alt: "VIP Auto Glass Calgary - Professional Auto Glass Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VIP Auto Glass Calgary | Windshield Repair & Replacement",
    description: "Calgary's trusted auto glass experts. Professional windshield repair & replacement. 24/7 mobile service. Free quotes!",
    images: ["/images/vip_logo.png"],
    creator: "@vipautoglass",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: [
      { url: "/images/vip_logo.png" },
      { url: "/images/vip_logo.png", sizes: "16x16", type: "image/png" },
      { url: "/images/vip_logo.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/images/vip_logo.png" },
      { url: "/images/vip_logo.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/images/vip_logo.png"],
  },
  manifest: "/manifest.json",
  category: "Automotive Services",
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GlassBillerForm />
        {children}
      </body>
    </html>
  );
}
