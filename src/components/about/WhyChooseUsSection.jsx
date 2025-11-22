'use client';

import { motion } from 'framer-motion';
import { Shield, Clock, Users, Award, Wrench, DollarSign, Phone, Star, CheckCircle } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: 'Quality Guaranteed',
    description: 'We use only OEM-quality materials and stand behind our work with comprehensive warranties.',
    gradient: 'from-primary-light to-primary',
  },
  {
    icon: Clock,
    title: 'Fast & Efficient',
    description: 'Quick turnaround times without compromising quality. Most services completed same-day.',
    gradient: 'from-primary to-primary-dark',
  },
  {
    icon: Users,
    title: 'Expert Technicians',
    description: 'Our certified professionals bring 9+ years of experience to every job.',
    gradient: 'from-primary-dark to-primary',
  },
  {
    icon: Award,
    title: 'Industry Leaders',
    description: '4.9-star rating and over 5000 satisfied customers across Calgary.',
    gradient: 'from-primary to-primary-light',
  },
  {
    icon: Wrench,
    title: 'Advanced Technology',
    description: 'State-of-the-art ADAS calibration equipment and modern installation techniques.',
    gradient: 'from-primary-light to-primary',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'Upfront quotes with no hidden fees. We work directly with insurance companies.',
    gradient: 'from-primary to-primary-dark',
  },
  {
    icon: Phone,
    title: 'Mobile Service',
    description: 'We come to you! Convenient on-site service at your home or workplace.',
    gradient: 'from-primary-dark to-primary',
  },
  {
    icon: Star,
    title: 'Customer Focused',
    description: 'Your satisfaction is our priority. Personalized service tailored to your needs.',
    gradient: 'from-primary to-primary-light',
  },
];

const certifications = [
  'ICBC Approved',
  'OEM Certified',
  'ADAS Calibration',
  'Insurance Direct Billing',
  '3M Authorized',
  'Safety Standards',
];

export default function WhyChooseUsSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-light rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4"
          >
            <Star className="w-4 h-4" />
            Why VIP Auto Glass
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
          >
            Why Calgary Chooses <span className="text-primary">VIP</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600"
          >
            Experience the difference that expertise, quality, and dedication make
          </motion.p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl`}></div>

                {/* Icon */}
                <div className={`relative w-14 h-14 bg-gradient-to-br ${reason.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md`}>
                  <reason.icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="relative text-lg font-bold text-gray-900 mb-3">{reason.title}</h3>

                {/* Description */}
                <p className="relative text-sm text-gray-600 leading-relaxed">{reason.description}</p>

                {/* Bottom accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${reason.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-b-2xl`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications & Accreditations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-3">
                Certified & <span className="text-primary">Trusted</span>
              </h3>
              <p className="text-gray-600">
                Backed by industry-leading certifications and approvals
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-light to-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-semibold text-sm">{cert}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-light via-primary to-primary-dark rounded-3xl p-8 shadow-2xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { value: '9+', label: 'Years Serving Calgary' },
              { value: '5000+', label: 'Happy Customers' },
              { value: '4.9', label: 'Average Rating' },
              { value: '100%', label: 'Satisfaction Rate' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-white/90">{stat.label}</div>

                {/* Separator line (except last) */}
                {index < 3 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-white/20"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 right-10 w-3 h-3 bg-primary rounded-full animate-bounce opacity-20"></div>
      <div className="absolute bottom-1/4 left-10 w-4 h-4 bg-primary-light rounded-full animate-pulse opacity-20"></div>
    </section>
  );
}
