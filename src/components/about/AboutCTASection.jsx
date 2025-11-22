'use client';

import { motion } from 'framer-motion';
import { Phone, MessageCircle, Calendar, ArrowRight, Sparkles, Shield } from 'lucide-react';
import { openGlassBillerForm } from '../GlassBillerForm';

export default function AboutCTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>

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
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-primary-light rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main content */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full mb-6"
            >
              <Sparkles className="w-5 h-5 text-primary-light" />
              <span className="font-semibold">Ready to Experience VIP Service?</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight"
            >
              Let's Get You Back on the Road
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-12"
            >
              Experience the VIP difference. Fast, reliable, and professional auto glass service
              that puts your safety and satisfaction first.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
            >
              <button
                onClick={() => openGlassBillerForm()}
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-primary-light to-primary hover:from-primary hover:to-primary-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-primary/50 hover:scale-105"
              >
                <Calendar className="w-6 h-6" />
                <span>Get Free Quote</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </button>

              <a
                href="tel:+14032852000"
                className="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white hover:border-white text-white hover:text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:scale-105"
              >
                <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                <span>(403) 285-2000</span>
              </a>
            </motion.div>

            {/* Quick contact options */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary-light" />
                <span>Quick Response</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary-light" />
                <span>Mobile Service Available</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary-light" />
                <span>Insurance Direct Billing</span>
              </div>
            </motion.div>
          </div>

          {/* Feature cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mt-16"
          >
            {[
              {
                icon: Phone,
                title: 'Call Us Now',
                description: 'Speak with our team',
                action: 'Quick Response',
                link: 'tel:+14032852000',
              },
              {
                icon: MessageCircle,
                title: 'WhatsApp',
                description: 'Message us anytime',
                action: 'Instant Reply',
                link: 'https://wa.me/14032852000',
              },
              {
                icon: Calendar,
                title: 'Book Online',
                description: 'Get a free quote',
                action: 'Easy Scheduling',
                onClick: () => openGlassBillerForm(),
              },
            ].map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative group"
              >
                {option.link ? (
                  <a
                    href={option.link}
                    target={option.link.startsWith('http') ? '_blank' : undefined}
                    rel={option.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 block cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-light to-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <option.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{option.title}</h3>
                    <p className="text-gray-400 mb-3">{option.description}</p>
                    <div className="inline-flex items-center gap-2 text-primary-light text-sm font-semibold">
                      <span>{option.action}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                ) : (
                  <button
                    onClick={option.onClick}
                    className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 block cursor-pointer w-full text-left"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-light to-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <option.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{option.title}</h3>
                    <p className="text-gray-400 mb-3">{option.description}</p>
                    <div className="inline-flex items-center gap-2 text-primary-light text-sm font-semibold">
                      <span>{option.action}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </section>
  );
}
