'use client';

import { motion } from 'framer-motion';
import { Award, Users, Clock, TrendingUp } from 'lucide-react';
import { openGlassBillerForm } from './GlassBillerForm';

const stats = [
  { icon: Clock, value: '9+', label: 'Years Experience', color: 'from-blue-500 to-cyan-500' },
  { icon: Users, value: '5000+', label: 'Happy Clients', color: 'from-purple-500 to-pink-500' },
  { icon: Award, value: '100%', label: 'Satisfaction Rate', color: 'from-orange-500 to-red-500' },
  { icon: TrendingUp, value: '24/7', label: 'Support Available', color: 'from-green-500 to-emerald-500' },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Award className="w-4 h-4" />
                About VIP Auto Glass
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
            >
              Calgary's Most <span className="text-primary">Trusted</span> Auto Glass Experts
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 mb-6 leading-relaxed"
            >
              VIP Glass has been serving Calgary residents for over <span className="font-semibold text-primary">9+ years</span>,
              specializing in repairing and replacing auto glass, windshields, window tinting, and ceramic coating
              for all makes & models.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-600 mb-8 leading-relaxed"
            >
              We care about the safety of the person behind the windshield. Our dedicated and experienced
              professional team ensures expert care for your vehicle's glass, prioritizing your satisfaction
              with every service.
            </motion.p>

            {/* Key features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              {[
                'Professional Team',
                'Customer Support',
                'Mobile Service',
                'Quality Guarantee'
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 group"
                >
                  <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform"></div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </motion.div>

            <motion.button
              onClick={() => openGlassBillerForm()}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/30 cursor-pointer"
            >
              Get Free Quote
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </motion.button>
          </motion.div>

          {/* Right side - Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="relative group"
              >
                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>

                  {/* Icon */}
                  <div className={`relative w-14 h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Value */}
                  <div className="relative text-4xl font-bold mb-2 bg-gradient-to-br from-gray-900 to-gray-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div className="relative text-gray-600 font-medium">
                    {stat.label}
                  </div>

                  {/* Decorative element */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/5 to-transparent rounded-full -mr-10 -mt-10"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 right-10 w-4 h-4 bg-primary rounded-full animate-bounce opacity-20"></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-primary rounded-full animate-pulse opacity-20"></div>
    </section>
  );
}
