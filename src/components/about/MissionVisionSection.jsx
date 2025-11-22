'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Heart, Zap } from 'lucide-react';

const cards = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To deliver exceptional auto glass services with unwavering commitment to safety, quality, and customer satisfaction. We strive to exceed expectations in every interaction, ensuring peace of mind for every driver we serve.',
    gradient: 'from-primary-light to-primary',
    features: [
      'Customer-First Approach',
      'Quality Craftsmanship',
      'Safety Excellence',
    ],
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description: 'To be Calgary\'s most trusted and innovative auto glass service provider, setting industry standards through cutting-edge technology, expert craftsmanship, and unparalleled customer care.',
    gradient: 'from-primary to-primary-dark',
    features: [
      'Industry Leadership',
      'Innovation & Technology',
      'Community Trust',
    ],
  },
];

const values = [
  {
    icon: Heart,
    title: 'Customer Care',
    description: 'Your satisfaction drives everything we do',
  },
  {
    icon: Zap,
    title: 'Excellence',
    description: 'We never compromise on quality or service',
  },
  {
    icon: Target,
    title: 'Integrity',
    description: 'Honest, transparent, and reliable always',
  },
  {
    icon: Eye,
    title: 'Safety First',
    description: 'Your safety is our top priority',
  },
];

export default function MissionVisionSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-light/5 rounded-full blur-3xl"></div>
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
            <Target className="w-4 h-4" />
            What Drives Us
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
          >
            Mission & <span className="text-primary">Vision</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600"
          >
            Guided by purpose, driven by passion, committed to excellence
          </motion.p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-24">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                {/* Icon */}
                <div className="relative">
                  <div className={`w-20 h-20 bg-gradient-to-br ${card.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <card.icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{card.title}</h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {card.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    {card.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 group/item"
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${card.gradient} rounded-full group-hover/item:scale-150 transition-transform`}></div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Decorative corner */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${card.gradient} opacity-5 rounded-bl-full`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Values */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core <span className="text-primary">Values</span>
            </h3>
            <p className="text-lg text-gray-600">
              The principles that guide every decision we make
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative group"
              >
                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-light to-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h4>

                  {/* Description */}
                  <p className="text-sm text-gray-600">{value.description}</p>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-light to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-center rounded-b-2xl"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 right-10 w-4 h-4 bg-primary rounded-full animate-pulse opacity-20"></div>
      <div className="absolute bottom-1/3 left-20 w-3 h-3 bg-primary-light rounded-full animate-bounce opacity-20"></div>
    </section>
  );
}
