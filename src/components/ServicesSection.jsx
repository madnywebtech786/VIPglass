'use client';

import { motion } from 'framer-motion';
import { Hammer, RefreshCw, Sun, ArrowRight, Clock, Shield, Star, Camera } from 'lucide-react';
import { openGlassBillerForm } from './GlassBillerForm';

const services = [
  {
    icon: Hammer,
    title: 'Rock Chip Repair',
    description: 'We have been in business for over 9 years and have been providing automotive glass repair and replacement. Get your car\'s any window fixed in a flash!',
    features: ['Quick Service', 'On-Site Available', 'Quality Guaranteed'],
    color: 'from-primary-light to-primary',
    image: '/images/rock-chip.jpg',
    link: '/services/rock-chip-repair',
  },
  {
    icon: RefreshCw,
    title: 'Windshield Replacement',
    description: 'Sometimes it\'s difficult to find the right company for your windshield replacement. We offer the best services with the most competitive prices.',
    features: ['On-Site Service', 'Quick Turnaround', 'All Makes & Models'],
    color: 'from-primary to-primary-dark',
    image: '/images/windshield.jpg',
    link: '/services/windshield-replacement',
  },
  {
    icon: Sun,
    title: 'Window Tinting',
    description: 'Tinting of Automotive is an art that demands perfection and precision. The experts at VIP Glass work hard to provide the highest quality product.',
    features: ['UV Protection', 'Premium Quality', 'Expert Installation'],
    color: 'from-primary-dark to-primary',
    image: '/images/tinting.jpg',
    link: '/services/glass-tinting',
  },
  {
    icon: Camera,
    title: 'ADAS Calibration',
    description: 'Professional Advanced Driver Assistance Systems calibration ensuring your vehicle\'s safety features function properly after windshield replacement.',
    features: ['Static & Dynamic', 'OEM Approved', 'All Vehicles'],
    color: 'from-primary to-primary-light',
    image: '/images/hero4.jpg',
    link: '/services/adas-calibration',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
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
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Star className="w-4 h-4" />
              Our Services
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
          >
            Premium Auto Glass <span className="text-primary">Solutions</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            From chips to cracks to full replacements, we offer comprehensive services to get you back on the road quickly and safely
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-full bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 flex flex-col">
                {/* Top gradient bar */}
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>

                {/* Card content */}
                <div className="p-8 flex flex-col flex-grow">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className={`w-5 h-5 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.a
                    href={service.link}
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </motion.a>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-20 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full -mr-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/5 to-transparent rounded-full -ml-12 -mb-12 group-hover:scale-150 transition-transform duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Info Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white relative overflow-hidden"
          >
            <div className="relative z-10">
              <Clock className="w-12 h-12 mb-4 opacity-90" />
              <h3 className="text-2xl font-bold mb-2">Professional Service</h3>
              <p className="text-white/90 mb-4">
                Expert auto glass service throughout Calgary with flexible scheduling to ensure you get back on the road quickly and safely.
              </p>
              <a href="tel:+14032852000" className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-full font-semibold transition-all backdrop-blur-sm">
                Call Now
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white relative overflow-hidden"
          >
            <div className="relative z-10">
              <Shield className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-2">Satisfaction Guarantee</h3>
              <p className="text-gray-300 mb-4">
                Your peace of mind is backed by our 1-Year Workmanship Guarantee. Quality workmanship, every time.
              </p>
              <button onClick={() => openGlassBillerForm()} className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark px-6 py-3 rounded-full font-semibold transition-all cursor-pointer">
                Get Free Quote
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full -ml-16 -mb-16"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
