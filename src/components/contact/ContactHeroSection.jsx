'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Sparkles, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactHeroSection() {
  return (
    <section className="relative py-20 min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(188, 22, 34, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(188, 22, 34, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-primary-light rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full mb-8"
          >
            <MessageCircle className="w-5 h-5 text-primary-light" />
            <span className="font-semibold">We're Here to Help</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-white">Get in </span>
            <span className="bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent">
              Touch
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto"
          >
            Have questions? Need a quote? Our expert team is ready to assist you with all your auto glass needs.
          </motion.p>

          {/* Quick contact cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid md:grid-cols-3 gap-6 mb-8"
          >
            {[
              {
                icon: Phone,
                title: 'Call Us',
                info: '(403) 285-2000',
                subtext: 'Quick Response',
                link: 'tel:+14032852000',
              },
              {
                icon: MapPin,
                title: 'Visit Us',
                info: '10960 42 St NE #235',
                subtext: 'Calgary, AB T3N 2B8',
                link: 'https://maps.google.com/?q=10960+42+St+NE+235+Calgary+AB',
              },
              {
                icon: Clock,
                title: 'Hours',
                info: 'Mon-Fri: 9am-5:30pm',
                subtext: 'Sat: 9am-3pm, Sun: 10am-3pm',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative group"
              >
                {item.link ? (
                  <a
                    href={item.link}
                    target={item.link.startsWith('http') ? '_blank' : undefined}
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 block"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-light to-primary rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-sm font-semibold text-gray-400 mb-2">{item.title}</h3>
                    <p className="text-white font-bold text-lg mb-1">{item.info}</p>
                    <p className="text-gray-400 text-sm">{item.subtext}</p>
                  </a>
                ) : (
                  <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-light to-primary rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-sm font-semibold text-gray-400 mb-2">{item.title}</h3>
                    <p className="text-white font-bold text-lg mb-1">{item.info}</p>
                    <p className="text-gray-400 text-sm">{item.subtext}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Decorative corner accents */}
      <div className="absolute top-0 left-0 w-64 h-64 border-t-2 border-l-2 border-primary/20 rounded-tl-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 border-b-2 border-r-2 border-primary/20 rounded-br-3xl"></div>
    </section>
  );
}
