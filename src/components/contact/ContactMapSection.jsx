'use client';

import { motion } from 'framer-motion';
import { MapPin, Navigation, Phone, Clock } from 'lucide-react';

export default function ContactMapSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-light rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4"
          >
            <MapPin className="w-4 h-4" />
            Find Us
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
          >
            Visit Our <span className="text-primary">Location</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            We're conveniently located in Calgary. Stop by or schedule mobile service to your location.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              {/* Map placeholder */}
              <div className="aspect-[16/10] bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                {/* You can replace this with actual Google Maps embed */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2505.123!2d-113.9876!3d51.1234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDA3JzI0LjIiTiAxMTPCsDU5JzE1LjQiVw!5e0!3m2!1sen!2sca!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>

                {/* Overlay for styling */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Map info overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-light to-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-1">VIP Auto Glass</h3>
                      <p className="text-gray-600 text-sm">
                        10960 42 St NE #235<br />
                        Calgary, AB T3N 2B8
                      </p>
                    </div>
                  </div>
                  <a
                    href="https://maps.google.com/?q=10960+42+St+NE+235+Calgary+AB"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-light to-primary hover:from-primary hover:to-primary-dark text-white px-4 py-2 rounded-full font-semibold text-sm transition-all shadow-lg hover:scale-105 flex-shrink-0"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Directions</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Service Areas */}
            <div className="bg-gradient-to-br from-primary-light via-primary to-primary-dark rounded-2xl p-6 shadow-xl text-white">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Service Areas</h3>
              <p className="text-white/90 text-sm mb-4">
                We serve Calgary and surrounding areas with both in-shop and mobile auto glass services.
              </p>
              <ul className="space-y-2 text-sm text-white/90">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  <span>Calgary & Surrounding Areas</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  <span>Mobile Service Available</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  <span>Same-Day Service</span>
                </li>
              </ul>
            </div>

            {/* Quick Contact */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-light to-primary rounded-xl flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quick Contact</h3>
              <div className="space-y-3">
                <a
                  href="tel:+14032852000"
                  className="flex items-center gap-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-gray-500">Phone</p>
                    <p className="font-bold text-gray-900">(403) 285-2000</p>
                  </div>
                </a>
                <a
                  href="https://wa.me/14032852000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors"
                >
                  <svg className="w-5 h-5 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <div>
                    <p className="text-xs text-gray-500">WhatsApp</p>
                    <p className="font-bold text-gray-900">Message Us</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-light to-primary rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Open Today</h3>
              <p className="text-primary font-bold text-lg mb-2">9:00 AM - 5:30 PM</p>
              <p className="text-gray-600 text-sm">
                Mobile service available outside regular hours by appointment
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
