'use client';

import { motion } from 'framer-motion';
import { Send, User, Mail, Phone, MessageSquare, Calendar } from 'lucide-react';
import { openGlassBillerForm } from '../GlassBillerForm';

export default function ContactFormSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4"
            >
              <MessageSquare className="w-4 h-4" />
              Get a Quote
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
            >
              Request a <span className="text-primary">Free Quote</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Fill out our quick quote form or use our advanced quote calculator for instant pricing
            </motion.p>
          </div>

          {/* CTA Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Quick Quote CTA */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative bg-gradient-to-br from-primary-light via-primary to-primary-dark rounded-3xl p-8 shadow-2xl overflow-hidden h-full flex flex-col">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                  }}></div>
                </div>

                {/* Decorative orb */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

                <div className="relative flex flex-col flex-grow">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-4">
                    Get Instant Quote
                  </h3>

                  <p className="text-white/90 mb-6 flex-grow">
                    Use our advanced quote calculator to get instant pricing for your auto glass service. Fast, accurate, and easy to use.
                  </p>

                  <ul className="space-y-3 mb-8 text-white/90">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      <span>Instant pricing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      <span>No commitment required</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      <span>Insurance direct billing</span>
                    </li>
                  </ul>

                  <button
                    onClick={() => openGlassBillerForm()}
                    className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:scale-105 w-full"
                  >
                    <span>Open Quote Calculator</span>
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Alternative Contact CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 overflow-hidden h-full flex flex-col">
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full"></div>

                <div className="relative flex flex-col flex-grow">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-light to-primary rounded-2xl flex items-center justify-center mb-6">
                    <Phone className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Prefer to Talk?
                  </h3>

                  <p className="text-gray-600 mb-6 flex-grow">
                    Speak directly with our expert team. We're here to answer your questions and provide personalized service.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-light to-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">Call Us</p>
                        <a href="tel:+14032852000" className="text-primary font-bold text-lg hover:underline">
                          (403) 285-2000
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-light to-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">WhatsApp</p>
                        <a
                          href="https://wa.me/14032852000"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary font-bold hover:underline"
                        >
                          Message Us
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-primary/5 to-primary-light/5 border border-primary/10 rounded-xl p-4">
                    <p className="text-gray-700 text-sm">
                      <span className="font-semibold text-primary">Quick Response:</span> Most inquiries answered within 1 hour during business hours
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600">
              Need immediate assistance? Call us at{' '}
              <a href="tel:+14032852000" className="text-primary font-semibold hover:underline">
                (403) 285-2000
              </a>
              {' '}for quick response service
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
