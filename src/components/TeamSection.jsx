'use client';

import { motion } from 'framer-motion';
import { Award, Wrench, Shield, Star } from 'lucide-react';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Pinder',
    role: 'Manager',
    specialty: 'Operations & Leadership',
    experience: '9+ Years',
    image: '/images/team/pinder.png',
    icon: Award,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Rona',
    role: 'Staff Member',
    specialty: 'Customer Service',
    experience: '5+ Years',
    image: '/images/team/Rona.png',
    icon: Star,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Don',
    role: 'Staff Member',
    specialty: 'Glass Installation',
    experience: '7+ Years',
    image: '/images/team/Don.png',
    icon: Wrench,
    gradient: 'from-orange-500 to-red-500',
  },
  {
    name: 'JMann',
    role: 'Staff Member',
    specialty: 'Auto Glass Repair',
    experience: '6+ Years',
    image: '/images/team/JMann.png',
    icon: Shield,
    gradient: 'from-green-500 to-emerald-500',
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      {/* Dotted pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, #bc1622 2px, transparent 2px)',
            backgroundSize: '50px 50px',
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
              <Award className="w-4 h-4" />
              Our Team
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
          >
            Meet Our <span className="text-primary">Expert Team</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Our dedicated professionals bring years of experience and expertise to every job
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                {/* Team Member Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent`}></div>

                  {/* Experience badge on image */}
                  <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                    {member.experience}
                  </div>

                  {/* Icon badge on image */}
                  <div className={`absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br ${member.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                    <member.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  {/* Name and role */}
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-primary font-semibold mb-1">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.specialty}</p>
                  </div>

                  {/* Skills indicator */}
                  <div className="flex justify-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className={`w-8 h-1 rounded-full bg-gradient-to-r ${member.gradient}`}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-3xl pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats/Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-white relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-light rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-2">Certified</h3>
              <p className="text-gray-300">All technicians are fully certified and insured professionals</p>
            </div>

            <div>
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-2">Experienced</h3>
              <p className="text-gray-300">Combined 9+ years of auto glass expertise</p>
            </div>

            <div>
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-2">Dedicated</h3>
              <p className="text-gray-300">Committed to delivering exceptional service every time</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 right-10 w-3 h-3 bg-primary rounded-full animate-bounce opacity-20"></div>
      <div className="absolute bottom-1/3 left-20 w-2 h-2 bg-primary rounded-full animate-ping opacity-30"></div>
    </section>
  );
}
