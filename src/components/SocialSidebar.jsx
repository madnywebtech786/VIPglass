'use client';

import { motion } from 'framer-motion';
import { Facebook, Instagram } from 'lucide-react';

// WhatsApp Icon Component
const WhatsAppIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export default function SocialSidebar() {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/people/VIP-Glass-Services/61583497340429/',
      color: 'hover:bg-[#1877F2]',
      iconColor: 'text-[#1877F2]'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/vipglass.ca/',
      color: 'hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-600 hover:to-orange-500',
      iconColor: 'text-pink-600'
    },
    {
      name: 'WhatsApp',
      icon: WhatsAppIcon,
      url: 'https://wa.me/14032852000',
      color: 'hover:bg-[#25D366]',
      iconColor: 'text-[#25D366]'
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
