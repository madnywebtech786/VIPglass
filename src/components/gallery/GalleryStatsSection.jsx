'use client';

import { motion } from 'framer-motion';
import { Award, Users, Star, TrendingUp, Phone, Calendar } from 'lucide-react';
import { openGlassBillerForm } from '../GlassBillerForm';

const stats = [
  {
    icon: Users,
    value: '5000+',
    label: 'Projects Completed',
    gradient: 'from-primary-light to-primary',
  },
  {
    icon: Star,
    value: '4.9',
    label: 'Average Rating',
    gradient: 'from-primary to-primary-dark',
  },
  {
    icon: Award,
    value: '100%',
    label: 'Quality Assured',
    gradient: 'from-primary-dark to-primary',
  },
  {
    icon: TrendingUp,
    value: '9+',
    label: 'Years Experience',
    gradient: 'from-primary to-primary-light',
  },
];

export default function GalleryStatsSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(188, 22, 34, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(188, 22, 34, 0.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}></div>
      </div>

      {/* Gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
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
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-primary-light rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative group"
            >
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 text-center">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>

                {/* Value */}
                <div className="text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>

                {/* Label */}
                <div className="text-gray-400 font-medium">
                  {stat.label}
                </div>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-center rounded-b-2xl`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light rounded-3xl p-12 overflow-hidden shadow-2xl">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E")`,
                backgroundSize: '60px 60px',
              }}></div>
            </div>

            {/* Decorative orbs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>

            <div className="relative text-center text-white">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Ready to Experience Our Quality?
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Join thousands of satisfied customers who trust VIP Auto Glass for their vehicle needs
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <motion.button
                    onClick={() => openGlassBillerForm()}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl"
                  >
                    <Calendar className="w-6 h-6" />
                    <span>Get Free Quote</span>
                  </motion.button>

                  <motion.a
                    href="tel:+14032852000"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all"
                  >
                    <Phone className="w-6 h-6" />
                    <span>(403) 285-2000</span>
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bottom testimonial snippet */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-gray-300 text-lg italic mb-4">
              "Exceptional service and attention to detail. The quality of their work exceeded my expectations!"
            </p>
            <div className="text-primary font-semibold">
              - Satisfied Customer
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
