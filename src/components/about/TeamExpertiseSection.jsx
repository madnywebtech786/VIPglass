'use client';

import { motion } from 'framer-motion';
import { Users, Award, Wrench, GraduationCap, Target, TrendingUp } from 'lucide-react';

const expertise = [
  {
    icon: Wrench,
    title: 'Windshield Specialists',
    description: 'Expert installation and replacement using OEM-quality materials for all vehicle makes and models.',
    stats: '5000+ Installations',
  },
  {
    icon: Target,
    title: 'ADAS Calibration',
    description: 'Certified technicians trained in advanced driver assistance systems calibration and diagnostics.',
    stats: 'OEM Certified',
  },
  {
    icon: Award,
    title: 'Window Tinting',
    description: 'Premium tinting solutions with UV protection and expert installation techniques.',
    stats: '3M Authorized',
  },
  {
    icon: GraduationCap,
    title: 'Continuous Training',
    description: 'Our team stays current with the latest industry standards and automotive glass technologies.',
    stats: 'Always Learning',
  },
];

const teamValues = [
  {
    title: 'Certified Professionals',
    description: 'Every technician is fully certified and continuously trained in the latest automotive glass technologies.',
    icon: Award,
  },
  {
    title: 'Safety First Culture',
    description: 'We prioritize your safety in every service, following strict industry standards and best practices.',
    icon: Target,
  },
  {
    title: 'Customer Dedication',
    description: 'Our team is committed to delivering exceptional service and ensuring your complete satisfaction.',
    icon: Users,
  },
];

export default function TeamExpertiseSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary-light rounded-full blur-3xl"></div>
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
            <Users className="w-4 h-4" />
            Our Expertise
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
          >
            Expert Team, <span className="text-primary">Expert Care</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600"
          >
            Our certified technicians bring years of experience and passion to every service
          </motion.p>
        </div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {expertise.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-primary-light to-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md mx-auto">
                  <item.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{item.title}</h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed mb-4 text-center flex-grow">{item.description}</p>

                {/* Stats badge */}
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-bold mx-auto block w-fit">
                  <TrendingUp className="w-3 h-3" />
                  {item.stats}
                </div>

                {/* Decorative gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Values Section */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Sets Our <span className="text-primary">Team Apart</span>
            </h3>
            <p className="text-lg text-gray-600">
              The people behind the service that Calgary trusts
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {teamValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="relative group"
              >
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center h-full">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-light to-primary rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform shadow-md">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-light to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-center rounded-b-2xl"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Experience Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl p-12 overflow-hidden shadow-2xl"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(rgba(188, 22, 34, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(188, 22, 34, 0.3) 1px, transparent 1px)',
                backgroundSize: '30px 30px',
              }}></div>
            </div>

            {/* Gradient orbs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-light/30 rounded-full blur-3xl"></div>

            <div className="relative text-center text-white">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-6"
              >
                <Award className="w-4 h-4 text-primary-light" />
                Industry Excellence
              </motion.div>

              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Over <span className="text-primary-light">9 Years</span> of Dedicated Service
              </h3>

              <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
                Our team's collective experience spans thousands of installations, repairs, and calibrations.
                Every service is performed with precision, care, and commitment to your safety.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                {[
                  { label: 'Certifications', value: '15+' },
                  { label: 'Team Members', value: '8+' },
                  { label: 'Services Daily', value: '20+' },
                  { label: 'Response Time', value: '<1hr' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-primary-light mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
