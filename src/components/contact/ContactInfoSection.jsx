'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar } from 'lucide-react';

const contactMethods = [
  {
    icon: Phone,
    title: 'Phone',
    primary: '(403) 285-2000',
    secondary: 'Quick Response Service',
    link: 'tel:+14032852000',
    gradient: 'from-primary-light to-primary',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    primary: 'Message Us',
    secondary: 'Instant messaging available',
    link: 'https://wa.me/14032852000',
    gradient: 'from-primary to-primary-dark',
  },
  {
    icon: Mail,
    title: 'Email',
    primary: 'info@vipglass.ca',
    secondary: 'We respond within 24 hours',
    link: 'mailto:info@vipglass.ca',
    gradient: 'from-primary-dark to-primary',
  },
];

const businessHours = [
  { days: 'Monday - Wednesday', time: '9:00 AM - 5:30 PM' },
  { days: 'Thursday', time: '9:00 AM - 5:30 PM' },
  { days: 'Friday', time: '9:00 AM - 5:30 PM' },
  { days: 'Saturday', time: '9:00 AM - 3:00 PM' },
  { days: 'Sunday', time: '10:00 AM - 3:00 PM' },
];

export default function ContactInfoSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-light rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4"
          >
            <Calendar className="w-4 h-4" />
            Contact Information
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
          >
            Multiple Ways to <span className="text-primary">Connect</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600"
          >
            Choose the most convenient way to reach us. We're here to help!
          </motion.p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <a
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : undefined}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 block h-full"
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${method.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>

                {/* Primary info */}
                <p className="text-primary font-semibold text-lg mb-2">{method.primary}</p>

                {/* Secondary info */}
                <p className="text-gray-600 text-sm">{method.secondary}</p>

                {/* Bottom accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${method.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-b-2xl`}></div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Business Hours & Location */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Business Hours */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl p-8 shadow-2xl overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'linear-gradient(rgba(188, 22, 34, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(188, 22, 34, 0.3) 1px, transparent 1px)',
                  backgroundSize: '30px 30px',
                }}></div>
              </div>

              {/* Gradient orb */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>

              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-light to-primary rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Business Hours</h3>
                </div>

                <div className="space-y-4">
                  {businessHours.map((schedule, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      viewport={{ once: true }}
                      className="flex justify-between items-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                    >
                      <span className="text-gray-300 font-medium">{schedule.days}</span>
                      <span className="text-primary-light font-bold">{schedule.time}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-xl">
                  <p className="text-white text-sm">
                    <span className="font-semibold">Note:</span> Flexible scheduling available outside regular hours by appointment
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-light to-primary rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Location</h3>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 mb-2">Address</h4>
                  <p className="text-gray-900 font-semibold text-lg">
                    10960 42 St NE #235<br />
                    Calgary, AB T3N 2B8
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-500 mb-2">Service Area</h4>
                  <p className="text-gray-600">
                    We proudly serve Calgary and surrounding areas with mobile auto glass services.
                  </p>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=10960+42+St+NE+235+Calgary+AB"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-light to-primary hover:from-primary hover:to-primary-dark text-white px-6 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                <MapPin className="w-5 h-5" />
                <span>Get Directions</span>
              </a>

              {/* Decorative element */}
              <div className="absolute bottom-8 right-8 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
