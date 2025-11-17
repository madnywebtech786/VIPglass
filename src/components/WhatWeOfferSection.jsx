'use client';

import { motion } from 'framer-motion';
import { Shield, Users, Headphones, CheckCircle } from 'lucide-react';
import { openGlassBillerForm } from './GlassBillerForm';

const offerings = [
  {
    icon: Shield,
    title: 'Auto Glass Repair Services',
    description: 'Comprehensive repair services for all your auto glass needs with top-tier quality and precision.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Users,
    title: 'Professional Team',
    description: 'Our dedicated and experienced professionals ensure expert care for your vehicle\'s glass.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Headphones,
    title: 'Customer Support',
    description: '24/7 support to assist you every step of the way. Your satisfaction is our priority.',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: CheckCircle,
    title: 'Most Trusted Guarantee',
    description: 'Peace of mind backed by our Most Trusted Auto Glass Repair Guarantee.',
    gradient: 'from-green-500 to-emerald-500',
  },
];

export default function WhatWeOfferSection() {
  return (
    <section id="offers" className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(#bc1622 1px, transparent 1px), linear-gradient(90deg, #bc1622 1px, transparent 1px)',
            backgroundSize: '100px 100px',
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-primary/30">
              What We Do
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            We Provide Professional Auto <br />
            <span className="text-primary">Glass Repair Services</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            At VIP Auto Glass, discover a comprehensive range of top-tier services for all your auto glass needs
          </motion.p>
        </div>

        {/* Offerings Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offerings.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative h-full bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-all duration-300 overflow-hidden">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${offer.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-3xl"></div>

                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${offer.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    <offer.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {offer.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {offer.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${offer.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col items-center gap-4">
            <p className="text-gray-300 text-lg">
              Your safety and satisfaction are our top priorities
            </p>
            <button
              onClick={() => openGlassBillerForm()}
              className="group inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/50 cursor-pointer"
            >
              Get Free Quote
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-primary rounded-full animate-ping opacity-30"></div>
      <div className="absolute bottom-1/4 right-20 w-3 h-3 bg-primary rounded-full animate-bounce opacity-20"></div>
    </section>
  );
}
