'use client';

import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin, Clock, ArrowUp } from 'lucide-react';
import Image from 'next/image';

const footerLinks = {
  services: [
    { name: 'Rock Chip Repair', href: '#services' },
    { name: 'Windshield Replacement', href: '#services' },
    { name: 'Window Tinting', href: '#services' },
    { name: 'Ceramic Coating', href: '#services' },
  ],
  quickLinks: [
    { name: 'About Us', href: '#about' },
    { name: 'Our Team', href: '#team' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'Disclaimer', href: '#' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:bg-blue-600' },
  { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-pink-600' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-light rounded-full blur-3xl"></div>
      </div>

      {/* Geometric pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23bc1622' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="mb-6">
              <div className="relative w-40 h-20 rounded-xl overflow-hidden">
                <Image
                  src="/images/vip_logo.png"
                  alt="VIP Auto Glass Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Calgary's most trusted auto glass repair service with over 9+ years of excellence.
              We provide professional windshield repair, replacement, tinting, and ceramic coating services.
            </p>

       
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full group-hover:scale-150 transition-transform"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full group-hover:scale-150 transition-transform"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6 text-white">Contact Info</h4>
            <ul className="space-y-4 mb-6">
              <li className="text-gray-400">
                <div className="font-semibold text-white mb-1">Phone:</div>
                <a href="tel:+14032852000" className="hover:text-primary transition-colors">
                  (403) 285-2000
                </a>
              </li>
              <li className="text-gray-400">
                <div className="font-semibold text-white mb-1">Address:</div>
                <div>10960 42 St NE #235</div>
                <div>Calgary, AB T3N 2B8</div>
              </li>
              <li className="text-gray-400">
                <div className="font-semibold text-white mb-1">Hours:</div>
                <div className="text-sm space-y-1">
                  <div>Mon-Fri: 9am-5:30pm</div>
                  <div>Sat: 9am-3pm</div>
                  <div>Sun: 10am-3pm</div>
                </div>
              </li>
            </ul>

            {/* Social Links */}
            <div>
              <h5 className="text-sm font-semibold mb-3 text-gray-400">Follow Us</h5>
              <div className="flex gap-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center ${social.color} transition-all duration-300 hover:scale-110`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>


        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm text-center md:text-left"
            >
              © {new Date().getFullYear()} VIP Auto Glass. All rights reserved. | Designed with ❤️ for excellence
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <span className="text-gray-400 text-sm">Certified & Insured</span>
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold text-xs">✓</span>
                </div>
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold text-xs">★</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        viewport={{ once: true }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-primary hover:bg-primary-dark rounded-full flex items-center justify-center shadow-2xl hover:shadow-primary/50 transition-all duration-300 z-50 group hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 text-white group-hover:translate-y-[-2px] transition-transform" />
      </motion.button>
    </footer>
  );
}
