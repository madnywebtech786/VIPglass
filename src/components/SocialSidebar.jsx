'use client';

import { motion } from 'framer-motion';
import { Facebook, Instagram } from 'lucide-react';

export default function SocialSidebar() {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/vipglasscalgary',
      color: 'hover:bg-[#1877F2]',
      iconColor: 'text-[#1877F2]'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/vipglass.ca/',
      color: 'hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-600 hover:to-orange-500',
      iconColor: 'text-pink-600'
    }
  ];

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 1 }}
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3"
    >
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ x: 60 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
          whileHover={{ x: -10, scale: 1.1 }}
          className={`group relative bg-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-l-xl p-3 ${social.color}`}
          aria-label={`Visit our ${social.name} page`}
        >
          {/* Icon */}
          <social.icon className={`w-6 h-6 ${social.iconColor} group-hover:text-white transition-colors duration-300`} />

          {/* Tooltip on hover */}
          <div className="absolute right-full mr-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300">
            <div className="bg-gray-900 text-white px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap">
              {social.name}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                <div className="w-2 h-2 bg-gray-900 rotate-45"></div>
              </div>
            </div>
          </div>

          {/* Animated border */}
          <div className="absolute inset-0 rounded-l-xl border-2 border-transparent group-hover:border-white/50 transition-colors duration-300"></div>
        </motion.a>
      ))}

      {/* Decorative line connecting icons */}
      <div className="absolute right-[22px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-transparent via-gray-300 to-transparent -z-10"></div>
    </motion.div>
  );
}
