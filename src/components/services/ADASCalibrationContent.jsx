'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { openGlassBillerForm } from '../GlassBillerForm';
import {
  Shield,
  CheckCircle2,
  Clock,
  Award,
  Star,
  ChevronDown,
  ChevronRight,
  Sparkles,
  Camera,
  Radar,
  Activity,
  Wrench,
  Phone,
  AlertTriangle,
  Eye,
  Target
} from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: 'Enhanced Safety',
    description: 'Proper calibration ensures collision avoidance, lane keeping, and other safety features work correctly to protect you and your passengers.',
    gradient: 'from-primary-light to-primary',
  },
  {
    icon: Target,
    title: 'Precise Accuracy',
    description: 'Guarantees the accuracy of adaptive cruise control, blind spot detection, and automated emergency braking systems.',
    gradient: 'from-primary to-primary-dark',
  },
  {
    icon: Award,
    title: 'Manufacturer-Approved',
    description: 'Our calibration methods adhere strictly to manufacturer specifications, ensuring your systems work as originally intended.',
    gradient: 'from-primary-dark to-primary',
  },
  {
    icon: Eye,
    title: 'Peace of Mind',
    description: 'Knowing your ADAS systems are calibrated correctly provides confidence and peace of mind every time you drive.',
    gradient: 'from-primary to-primary-light',
  },
];

const calibrationTypes = [
  {
    name: 'Static ADAS Calibration',
    icon: Camera,
    description: 'Performed in a controlled shop environment using specialized targets and patterns placed in front of the vehicle.',
    features: [
      'Controlled shop environment',
      'Precise target placement',
      'Advanced calibration tools',
      'Ideal for camera-based systems',
      'Manufacturer-spec patterns',
      'Comprehensive verification'
    ],
    gradient: 'from-blue-600 to-blue-800',
  },
  {
    name: 'Dynamic ADAS Calibration',
    icon: Activity,
    title: 'Dynamic ADAS Calibration',
    description: 'Performed while driving the vehicle on the road, allowing systems to recalibrate using real-world driving conditions.',
    features: [
      'Real-world road conditions',
      'On-road driving calibration',
      'GPS and sensor integration',
      'Live system verification',
      'Multiple system calibration',
      'Comprehensive road testing'
    ],
    gradient: 'from-primary to-primary-dark',
  },
];

const whyChooseUs = [
  {
    icon: Wrench,
    title: 'Expert Technicians',
    description: 'Our skilled technicians are specially trained to perform precise ADAS calibration for all vehicle makes and models, with continuous education on the latest systems.',
  },
  {
    icon: Radar,
    title: 'Cutting-Edge Equipment',
    description: 'We invest in the latest calibration tools and equipment to guarantee accurate results. Our state-of-the-art technology meets or exceeds OEM standards.',
  },
  {
    icon: Shield,
    title: 'Manufacturer-Approved Methods',
    description: 'Our calibration methods strictly adhere to manufacturer specifications, ensuring your safety systems work exactly as the manufacturer intended.',
  },
  {
    icon: AlertTriangle,
    title: 'Safety First Priority',
    description: 'Accurate calibration is crucial for proper functioning of collision avoidance systems. We never compromise on safety - it\'s our top priority.',
  },
];

const calibrationProcess = [
  {
    number: '01',
    title: 'Initial Assessment',
    description: 'We comprehensively assess your vehicle\'s ADAS systems to determine which specific components require calibration and the best calibration method.',
  },
  {
    number: '02',
    title: 'System Diagnostics',
    description: 'Advanced diagnostic tools scan all ADAS components for error codes, misalignments, and performance issues that need addressing.',
  },
  {
    number: '03',
    title: 'Precise Calibration',
    description: 'Using manufacturer-approved tools and methods, we calibrate each ADAS component according to exact OEM specifications for your vehicle.',
  },
  {
    number: '04',
    title: 'Rigorous Verification',
    description: 'After calibration, we verify that all ADAS systems are functioning correctly through comprehensive testing protocols.',
  },
  {
    number: '05',
    title: 'Quality Assurance Check',
    description: 'Our team ensures all safety systems are perfectly aligned and ready to enhance your driving experience with a final quality check.',
  },
  {
    number: '06',
    title: 'Documentation & Certification',
    description: 'You receive complete documentation of the calibration performed, including before/after reports and certification of proper function.',
  },
];

const importance = [
  {
    icon: Shield,
    title: 'Critical Safety',
    description: 'Proper calibration ensures that your vehicle\'s safety features work correctly, dramatically reducing the risk of accidents and protecting lives.',
  },
  {
    icon: Target,
    title: 'System Accuracy',
    description: 'Calibration guarantees the accuracy of features like adaptive cruise control, lane-keeping assistance, and automated emergency braking.',
  },
  {
    icon: Eye,
    title: 'Peace of Mind',
    description: 'Knowing your ADAS systems are calibrated correctly provides confidence and peace of mind on the road, every single drive.',
  },
];

const faqs = [
  {
    question: 'What is ADAS calibration and why is it necessary?',
    answer: 'ADAS (Advanced Driver Assistance Systems) calibration is the process of precisely aligning and configuring cameras, sensors, and radars in your vehicle to ensure safety features work correctly. It\'s necessary after windshield replacement, collision repair, suspension work, or any service that affects sensor positioning. Even minor misalignments can cause safety features like lane departure warning, adaptive cruise control, or automatic emergency braking to malfunction or provide false alerts. Modern vehicles rely heavily on these systems for safety, making proper calibration critical for protecting you and your passengers. Without calibration, your safety systems may not detect obstacles, may brake unnecessarily, or may fail to activate when needed.',
  },
  {
    question: 'What ADAS systems require calibration?',
    answer: 'Many modern safety systems require calibration, including: Forward Collision Warning (FCW), Automatic Emergency Braking (AEB), Lane Departure Warning (LDW), Lane Keeping Assist (LKA), Adaptive Cruise Control (ACC), Blind Spot Monitoring (BSM), Parking Assist systems, Night Vision cameras, Head-Up Displays (HUD), Traffic Sign Recognition, and Pedestrian Detection. If your vehicle has cameras mounted in or near the windshield, radar sensors in the front bumper, or any driver assistance features, calibration is likely required after windshield replacement or related repairs. Our technicians will assess your specific vehicle to determine exactly which systems need calibration.',
  },
  {
    question: 'What\'s the difference between static and dynamic calibration?',
    answer: 'Static calibration is performed in a controlled shop environment. We position your vehicle in front of specialized targets and patterns, then use advanced equipment to calibrate the cameras and sensors. This method requires precise measurements, specific lighting, and manufacturer-approved targets. It\'s ideal for forward-facing camera systems and typically takes 1-2 hours. Dynamic calibration requires driving the vehicle on the road at specific speeds and conditions, allowing the systems to recalibrate using real-world data. Some vehicles require only static, some only dynamic, and many require both types. Our technicians determine the correct calibration method for your specific vehicle based on manufacturer requirements.',
  },
  {
    question: 'How long does ADAS calibration take?',
    answer: 'Calibration time varies based on your vehicle\'s make, model, and which systems require calibration. Static calibration typically takes 1-2 hours in our shop. Dynamic calibration requires 30-60 minutes of driving under specific conditions. Some vehicles require both methods, which can take 2-3 hours total. Complex vehicles with multiple systems may require additional time. We\'ll provide an accurate time estimate when we assess your specific vehicle. While calibration takes time, it\'s a critical safety step that cannot be rushed - accuracy is more important than speed when it comes to systems that protect your life.',
  },
  {
    question: 'How do I know if my ADAS systems need calibration?',
    answer: 'Your ADAS systems need calibration if: 1) You\'ve had your windshield replaced (cameras are mounted there), 2) You\'ve been in a collision affecting the front of the vehicle, 3) You see warning lights or messages about ADAS systems on your dashboard, 4) Safety features are activating unnecessarily or not activating when expected, 5) You\'ve had suspension work or alignment performed, 6) Your vehicle has been lowered or lifted, or 7) Steering wheel angle doesn\'t match straight ahead. When in doubt, bring your vehicle in for assessment. Our diagnostic tools can quickly determine if calibration is needed. Many drivers don\'t realize calibration is required until safety features malfunction - it\'s better to be proactive.',
  },
  {
    question: 'Is ADAS calibration expensive?',
    answer: 'ADAS calibration costs vary based on your vehicle\'s make, model, and which systems require calibration. While it\'s an additional cost beyond windshield replacement, it\'s absolutely essential for your safety. The specialized equipment required (targets, diagnostic tools, manufacturer software) represents a significant investment that\'s reflected in the service cost. However, consider that improperly functioning safety systems could fail to prevent an accident that could cost thousands in repairs or, worse, result in injuries. Many insurance companies cover ADAS calibration as part of windshield replacement claims. We provide upfront pricing and can work with your insurance to minimize out-of-pocket costs. Contact us for a specific quote for your vehicle.',
  },
];

export default function ADASCalibrationContent() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-light rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle, #bc1622 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white"
            >
              <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">State-of-the-Art Calibration</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                ADAS <span className="text-primary">Calibration</span> Services
              </h1>

              <p className="text-xl text-gray-300 mb-8">
                Advanced Driver Assistance Systems calibration to ensure your vehicle's safety
                features function optimally. Expert technicians, cutting-edge equipment,
                manufacturer-approved methods.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-primary mb-1">OEM</div>
                  <div className="text-xs text-gray-300">Approved</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-primary mb-1">All</div>
                  <div className="text-xs text-gray-300">Makes & Models</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-primary mb-1">9+</div>
                  <div className="text-xs text-gray-300">Years Expert</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
                <a
                  href="#services"
                  className="group inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-primary/50"
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:+14032852000"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold border-2 border-white/30 hover:border-white/50 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Book Service
                </a>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative h-[500px] rounded-3xl overflow-hidden border-4 border-primary/20 shadow-2xl">
                <Image
                  src="/images/adas.jpeg"
                  alt="ADAS Calibration Service"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">Certified</div>
                    <div className="text-sm text-gray-600">Calibration</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Calibration Types Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Radar className="w-4 h-4" />
                Calibration Types
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
            >
              Types of <span className="text-primary">ADAS Calibration</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              We offer both static and dynamic calibration methods
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {calibrationTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-200 h-full">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${type.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <type.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {type.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {type.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    {type.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us / Detailed Content Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Award className="w-4 h-4" />
                Why Choose Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose <span className="text-primary">VIP Glass Calgary</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                State-of-the-art equipment and manufacturer-approved methods
              </p>
            </motion.div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
              {/* Left Column - Image & Info (Sticky) */}
              <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {/* Featured Image */}
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl group mb-6">
                    <div className="relative h-[400px]">
                      <Image
                        src="/images/adas.jpeg"
                        alt="ADAS Calibration Equipment"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                      {/* Overlay Badge */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-2xl font-bold text-primary">OEM</div>
                              <div className="text-sm text-gray-600">Approved</div>
                            </div>
                            <div className="h-12 w-px bg-gray-300"></div>
                            <div>
                              <div className="text-2xl font-bold text-primary">All</div>
                              <div className="text-sm text-gray-600">Vehicles</div>
                            </div>
                            <div className="h-12 w-px bg-gray-300"></div>
                            <div>
                              <div className="text-2xl font-bold text-primary">9+</div>
                              <div className="text-sm text-gray-600">Years</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Info Box */}
                  <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-2 border-primary/20 rounded-3xl p-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
                    <div className="relative">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                          <Shield className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            Safety is Our Priority
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            At VIP Glass Calgary, we understand the importance of safety on the road.
                            That's why we offer <strong>state-of-the-art Advanced Driver Assistance
                            Systems (ADAS) calibration services</strong> to ensure your vehicle's
                            safety features function optimally.
                          </p>
                        </div>
                      </div>
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-primary/10">
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-sm text-gray-700">
                            Certified technicians with latest calibration technology
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Column - Content Cards */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Content Card 1 - Expert Technicians */}
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Wrench className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        Expert Technicians
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Our skilled technicians are specially trained to perform precise ADAS
                        calibration for all vehicle makes and models.</strong> With continuous education
                        on the latest systems and technologies, we ensure that every calibration meets
                        the highest standards. Our team stays updated with manufacturer requirements
                        and industry best practices.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content Card 2 - Cutting-Edge Equipment */}
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Radar className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        Cutting-Edge Equipment
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        We invest in the latest calibration tools and equipment to guarantee accurate
                        results. <strong>Our state-of-the-art technology meets or exceeds OEM standards,</strong>
                        ensuring your vehicle's safety systems are calibrated with precision. From advanced
                        diagnostic tools to manufacturer-specific targets, we have everything needed for
                        perfect calibration.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content Card 3 - Manufacturer-Approved */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-2xl text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
                  <div className="relative">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                        <Shield className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3">
                          Manufacturer-Approved Methods
                        </h3>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          <strong>Our calibration methods strictly adhere to manufacturer specifications,</strong>
                          ensuring your safety systems work exactly as the manufacturer intended. Accurate
                          calibration is crucial for the proper functioning of collision avoidance systems,
                          keeping you and your passengers safe.
                        </p>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 text-sm">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                            <span>OEM-approved calibration procedures</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                            <span>Latest diagnostic and calibration software</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                            <span>Comprehensive documentation and certification</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
            >
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="relative">
                  <div className="text-4xl font-bold text-primary mb-2">All Makes</div>
                  <div className="text-gray-600 font-semibold">& Models Supported</div>
                  <p className="text-sm text-gray-500 mt-2">
                    Expert calibration for every vehicle brand
                  </p>
                </div>
                <div className="relative md:border-x border-gray-200">
                  <div className="text-4xl font-bold text-primary mb-2">OEM-Spec</div>
                  <div className="text-gray-600 font-semibold">Calibration Methods</div>
                  <p className="text-sm text-gray-500 mt-2">
                    Manufacturer-approved procedures always
                  </p>
                </div>
                <div className="relative">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-gray-600 font-semibold">Quality Guarantee</div>
                  <p className="text-sm text-gray-500 mt-2">
                    Complete certification and documentation
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <AlertTriangle className="w-4 h-4" />
                Importance
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
            >
              Importance of <span className="text-primary">ADAS Calibration</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {importance.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow h-full text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Wrench className="w-4 h-4" />
                Our Process
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
            >
              Our ADAS <span className="text-primary">Calibration Process</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Our 6-step process ensures perfect calibration every time
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto">
            {calibrationProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative pl-24 pb-12 last:pb-0"
              >
                {/* Timeline line */}
                {index !== calibrationProcess.length - 1 && (
                  <div className="absolute left-10 top-16 w-0.5 h-full bg-gradient-to-b from-primary to-primary/20"></div>
                )}

                {/* Number Circle */}
                <div className="absolute left-0 top-0 w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>

                {/* Content */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Star className="w-4 h-4" />
                Benefits
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
            >
              What You <span className="text-primary">Get</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Professional ADAS calibration for optimal safety
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Decorative element */}
                  <div className="hidden md:block absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-primary/5 to-transparent rounded-full -mr-10 -mb-10"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <CheckCircle2 className="w-4 h-4" />
                  FAQs
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
              >
                Frequently Asked <span className="text-primary">Questions</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-xl text-gray-600"
              >
                Get answers to common questions about ADAS calibration
              </motion.p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-lg font-bold text-gray-900 text-left pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-6 h-6 text-primary flex-shrink-0 transition-transform duration-300 ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: openFaq === index ? 'auto' : 0,
                      opacity: openFaq === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 pt-2">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-primary-dark to-gray-900 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Schedule Your ADAS Calibration Today
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Don't compromise on safety. Ensure your ADAS systems are correctly calibrated.
                Contact VIP Glass Calgary for expert service with state-of-the-art equipment.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <button
                  onClick={() => openGlassBillerForm()}
                  className="group inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl hover:scale-105 cursor-pointer"
                >
                  <span>Get Quote</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="tel:+14032852000"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg border-2 border-white/30 hover:border-white/50 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  +1 (403) 285-2000
                </a>
              </div>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <Camera className="w-8 h-8 text-white mx-auto mb-3" />
                  <div className="text-white font-bold">OEM Approved</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <Radar className="w-8 h-8 text-white mx-auto mb-3" />
                  <div className="text-white font-bold">Latest Equipment</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <Award className="w-8 h-8 text-white mx-auto mb-3" />
                  <div className="text-white font-bold">Expert Technicians</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
