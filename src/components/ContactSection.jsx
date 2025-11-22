'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, FileText, MessageCircle, ArrowRight } from 'lucide-react';
import { openGlassBillerForm } from './GlassBillerForm';

const contactInfo = [
  {
    icon: Phone,
    title: 'Call Us',
    details: '(403) 285-2000',
    subtext: 'Quick Response Service',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: MapPin,
    title: 'Address',
    details: '10960 42 St NE #235',
    subtext: 'Calgary, AB T3N 2B8',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    gradient: 'from-orange-500 to-red-500',
    hours: [
      { days: 'Monday - Friday', time: '9 a.m.–5:30 p.m.' },
      { days: 'Saturday', time: '9 a.m.–3 p.m.' },
      { days: 'Sunday', time: '10 a.m.–3 p.m.' },
    ],
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(#bc1622 1px, transparent 1px), linear-gradient(90deg, #bc1622 1px, transparent 1px)',
            backgroundSize: '80px 80px',
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
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <MessageCircle className="w-4 h-4" />
              Get In Touch
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
          >
            Contact <span className="text-primary">Us</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Have questions? We're here to help. Reach out to us anytime!
          </motion.p>
        </div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Icon */}
              <div className={`w-14 h-14 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md`}>
                <info.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>

              {/* Conditional rendering for hours vs regular info */}
              {info.hours ? (
                <div className="space-y-2">
                  {info.hours.map((schedule, idx) => (
                    <div key={idx} className="flex justify-between items-center text-sm">
                      <span className="text-gray-700 font-medium">{schedule.days}</span>
                      <span className="text-primary font-semibold">{schedule.time}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <p className="text-primary font-semibold mb-1">{info.details}</p>
                  <p className="text-gray-600 text-sm">{info.subtext}</p>
                </>
              )}

              {/* Decorative element */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${info.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-b-2xl`}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Get Quote CTA and Map */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Get Quote CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary via-primary-dark to-gray-900 rounded-3xl p-12 shadow-2xl relative overflow-hidden"
          >
            {/* Decorative background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-light rounded-full blur-3xl"></div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-300"></div>

            <div className="relative z-10 h-full flex flex-col justify-center">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                viewport={{ once: true }}
                className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-8 border-2 border-white/30"
              >
                <FileText className="w-10 h-10 text-white" />
              </motion.div>

              {/* Content */}
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-white/90 text-lg mb-8 leading-relaxed">
                Get your free quote now! Our comprehensive form takes just a few minutes to complete,
                and we'll respond with a detailed estimate tailored to your auto glass needs.
              </p>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {[
                  'Quick & Easy Online Form',
                  'Instant Quote Generation',
                  'No Obligation Required',
                  'Expert Consultation Included'
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-white/90"
                  >
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                onClick={() => openGlassBillerForm()}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-white hover:bg-gray-100 text-primary px-8 py-5 rounded-xl font-bold text-lg shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 group cursor-pointer"
              >
                <FileText className="w-6 h-6" />
                Get Your Free Quote Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </motion.button>

              {/* Sub text */}
              <p className="text-white/70 text-sm text-center mt-4">
                Trusted by 5000+ satisfied customers in Calgary
              </p>
            </div>
          </motion.div>

          {/* Map/Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Map placeholder */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 h-[400px] relative overflow-hidden group">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-light rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
              </div>
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
                <MapPin className="w-16 h-16 text-primary mb-4 animate-bounce" />
                <h3 className="text-2xl font-bold text-white mb-3">Service Area</h3>
                <p className="text-gray-300 text-lg mb-4">Calgary & Surrounding Areas</p>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full border border-white/20">
                  <MapPin className="w-5 h-5 text-primary" />
                  Mobile Service Available
                </div>
              </div>
            </div>

            {/* Quick info */}
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Why Choose VIP Auto Glass?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>9+ Years of Trusted Service</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Certified & Experienced Team</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Mobile Service Available</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Competitive Pricing</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>100% Satisfaction Guarantee</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
