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
  Eye,
  AlertTriangle,
  Wrench,
  Phone
} from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Restore your vehicle\'s structural integrity and protect yourself and passengers from potential hazards.',
    gradient: 'from-primary-light to-primary',
  },
  {
    icon: Eye,
    title: 'Crystal Clear Vision',
    description: 'Ensure optimal visibility with professional installation and high-quality OEM glass materials.',
    gradient: 'from-primary to-primary-dark',
  },
  {
    icon: Clock,
    title: 'Fast Service',
    description: 'Same-day windshield replacement available. Get back on the road quickly with our efficient service.',
    gradient: 'from-primary-dark to-primary',
  },
  {
    icon: Award,
    title: 'Insurance Approved',
    description: 'We work directly with your insurance provider. Most replacements covered with zero deductible.',
    gradient: 'from-primary to-primary-light',
  },
];

const serviceSteps = [
  {
    number: '01',
    title: 'Protection & Preparation',
    description: 'We carefully cover your vehicle\'s body and interior with protective materials to prevent any damage during the replacement process.',
  },
  {
    number: '02',
    title: 'Wiper Removal',
    description: 'Windshield wipers are carefully removed to access the windshield and ensure a clean installation area.',
  },
  {
    number: '03',
    title: 'Damaged Glass Removal',
    description: 'The old, damaged windshield is safely removed using professional tools and techniques to protect your vehicle.',
  },
  {
    number: '04',
    title: 'New Windshield Preparation',
    description: 'Your new OEM-quality windshield is prepared and inspected for perfect fit and quality standards.',
  },
  {
    number: '05',
    title: 'Professional Installation',
    description: 'The new windshield is expertly installed using premium adhesive and calibrated to manufacturer specifications.',
  },
  {
    number: '06',
    title: 'Drying & Curing',
    description: 'Adequate time is given for the adhesive to cure properly, ensuring a secure bond and lasting installation.',
  },
  {
    number: '07',
    title: 'Final Cleaning & Inspection',
    description: 'We thoroughly clean your windshield and perform a comprehensive quality inspection before handover.',
  },
];

const faqs = [
  {
    question: 'Why should I replace my windshield instead of ignoring the damage?',
    answer: 'A damaged windshield is a serious safety hazard that shouldn\'t be ignored. Cracks and chips can obstruct your view of the road, increasing the risk of accidents. More importantly, your windshield provides up to 30% of your vehicle\'s structural integrity. A compromised windshield can fail during an accident or rollover, putting you and your passengers at severe risk. Additionally, cracks tend to spread rapidly due to temperature changes, vibrations, and road conditions, making repair impossible and replacement inevitable. Acting quickly can save you money and, more importantly, save lives.',
  },
  {
    question: 'Can I repair a chipped windshield instead of replacing it?',
    answer: 'It depends on the size, location, and depth of the damage. Small chips (typically smaller than a quarter) that are not in the driver\'s direct line of sight can often be repaired successfully if addressed promptly. However, larger cracks, multiple chips, or damage near the windshield edges typically require full replacement. Our expert technicians will assess your windshield damage and recommend the most cost-effective and safest solution. If repair is possible, we\'ll save you time and money. If replacement is necessary, we\'ll explain why and provide competitive pricing.',
  },
  {
    question: 'Is windshield replacement covered by my insurance?',
    answer: 'Most comprehensive auto insurance policies in Canada cover windshield replacement with little to no deductible. Many insurance providers waive the deductible entirely for glass claims to encourage safe driving conditions. We work directly with all major insurance companies and can handle the entire claims process for you. Simply provide us with your insurance information, and we\'ll verify your coverage, file the claim, and deal with the paperwork. You won\'t have to pay out-of-pocket in most cases. Contact us to verify your specific coverage details.',
  },
  {
    question: 'What should I do if my windshield gets damaged again after replacement?',
    answer: 'Contact VIP Auto Glass immediately for a professional evaluation. The sooner you address new damage, the better chance we have to repair rather than replace. Our technicians will assess whether the damage can be repaired or if another replacement is necessary. If the damage occurred shortly after our installation due to workmanship issues (extremely rare), our warranty will cover it. For new damage from road debris or accidents, your insurance will typically cover another replacement. We\'re here to help 24/7 - early intervention prevents small chips from spreading into large, irreparable cracks.',
  },
  {
    question: 'How long does windshield replacement take?',
    answer: 'A professional windshield replacement typically takes 1-2 hours from start to finish. However, the adhesive requires additional curing time before you can safely drive your vehicle. We recommend waiting at least 1-2 hours after installation before driving, though this can vary based on weather conditions and adhesive type. Our technicians will provide specific guidance based on your situation. We offer flexible scheduling options to minimize disruption to your day, with convenient appointment times available throughout Calgary.',
  },
  {
    question: 'Do you use OEM (Original Equipment Manufacturer) glass?',
    answer: 'Yes! We exclusively use high-quality OEM or OEM-equivalent glass that meets or exceeds industry safety standards. OEM glass ensures perfect fit, proper seal, and maintains your vehicle\'s structural integrity exactly as the manufacturer intended. We never compromise on quality - your safety depends on it. All our windshields come with proper certifications and are backed by our workmanship warranty. Using premium glass also ensures compatibility with advanced driver assistance systems (ADAS) like lane departure warnings and automatic emergency braking.',
  },
];

export default function WindshieldReplacementContent() {
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
                <span className="text-sm font-medium">Professional Service</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Windshield <span className="text-primary">Replacement</span> Calgary
              </h1>

              <p className="text-xl text-gray-300 mb-8">
                Expert windshield replacement service in Calgary. Fast, affordable, and reliable.
                Don't let a cracked windshield compromise your safety - we offer same-day service
                with the lowest prices guaranteed.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-primary mb-1">9+</div>
                  <div className="text-xs text-gray-300">Years Experience</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-primary mb-1">5k+</div>
                  <div className="text-xs text-gray-300">Happy Clients</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-primary mb-1">4.9</div>
                  <div className="text-xs text-gray-300">Star Rating</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
                <button
                  onClick={() => openGlassBillerForm()}
                  className="group inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-primary/50 cursor-pointer"
                >
                  <span>Get Free Quote</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="tel:+14032852000"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold border-2 border-white/30 hover:border-white/50 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
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
                  src="/images/windshield.png"
                  alt="Professional Windshield Replacement Service"
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
                    <Star className="w-6 h-6 text-white fill-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">5.0</div>
                    <div className="text-sm text-gray-600">Customer Rating</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Content Section */}
      <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
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
                <Shield className="w-4 h-4" />
                Why Choose Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Calgary's Most Trusted <span className="text-primary">Windshield Replacement</span> Service
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional service, unbeatable quality, and customer satisfaction guaranteed
              </p>
            </motion.div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
              {/* Left Column - Image & Stats (Sticky) */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6 lg:sticky lg:top-24"
              >
                {/* Featured Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                  <div className="relative h-[400px]">
                    <Image
                      src="/images/windshield.png"
                      alt="Professional Windshield Replacement"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                    {/* Overlay Badge */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-2xl font-bold text-primary">100%</div>
                            <div className="text-sm text-gray-600">Satisfaction Rate</div>
                          </div>
                          <div className="h-12 w-px bg-gray-300"></div>
                          <div>
                            <div className="text-2xl font-bold text-primary">1-2hrs</div>
                            <div className="text-sm text-gray-600">Service Time</div>
                          </div>
                          <div className="h-12 w-px bg-gray-300"></div>
                          <div>
                            <div className="text-2xl font-bold text-primary">$0</div>
                            <div className="text-sm text-gray-600">Deductible*</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Warning Box */}
                <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-2 border-primary/20 rounded-3xl p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
                  <div className="relative">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                        <AlertTriangle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          Why Immediate Replacement Matters
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          Your windshield provides up to <strong>30% of your vehicle's structural support</strong>.
                          A compromised windshield can collapse during an accident or rollover, failing to protect
                          you when you need it most.
                        </p>
                      </div>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-primary/10">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm text-gray-700">
                          Cracks spread quickly - what's repairable today may require costly replacement tomorrow
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Content Card 1 */}
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        Serious Safety Hazard
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Cracked windshields are more than just an inconvenience - they're a serious safety hazard
                        and health risk.</strong> If you've been driving with a cracked or damaged windshield, you're putting
                        yourself and your passengers at risk every time you get behind the wheel. The good news? VIP Auto Glass
                        offers <strong className="text-primary">the lowest prices on windshield replacement in Calgary</strong>,
                        without compromising on quality or service.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content Card 2 */}
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        Don't Wait Until It's Too Late
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        A damaged windshield can obstruct your vision, weaken your vehicle's structural integrity, and worsen
                        rapidly due to temperature fluctuations and road vibrations. What starts as a small chip can quickly
                        spread into a large crack, making replacement inevitable. <strong>Addressing windshield damage promptly
                        can save you money</strong> and, more importantly, prevent serious accidents.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content Card 3 */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-2xl text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
                  <div className="relative">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                        <Award className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3">
                          Why Choose VIP Auto Glass?
                        </h3>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          Our <strong className="text-white">windshield repair and replacement services in Calgary are
                          second to none.</strong> We use cutting-edge technology and premium OEM-quality glass to ensure
                          your windshield replacement meets the highest industry standards.
                        </p>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 text-sm">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                            <span>Same-day service available throughout Calgary</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                            <span>Certified professional auto glass specialists</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                            <span>Direct insurance billing and claims processing</span>
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
                  <div className="text-4xl font-bold text-primary mb-2">9+</div>
                  <div className="text-gray-600 font-semibold">Years of Experience</div>
                  <p className="text-sm text-gray-500 mt-2">
                    Serving Calgary with excellence since 2015
                  </p>
                </div>
                <div className="relative md:border-x border-gray-200">
                  <div className="text-4xl font-bold text-primary mb-2">5,000+</div>
                  <div className="text-gray-600 font-semibold">Satisfied Customers</div>
                  <p className="text-sm text-gray-500 mt-2">
                    Join thousands of happy Calgary drivers
                  </p>
                </div>
                <div className="relative">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-gray-600 font-semibold">Quality Guarantee</div>
                  <p className="text-sm text-gray-500 mt-2">
                    Comprehensive warranties on all work
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
                <Award className="w-4 h-4" />
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
              Premium windshield replacement service with unmatched quality and value
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

      {/* Services Provided Section */}
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
              Professional <span className="text-primary">Installation Process</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Our 7-step process ensures perfect installation every time
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto">
            {serviceSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative pl-24 pb-12 last:pb-0"
              >
                {/* Timeline line */}
                {index !== serviceSteps.length - 1 && (
                  <div className="absolute left-10 top-16 w-0.5 h-full bg-gradient-to-b from-primary to-primary/20"></div>
                )}

                {/* Number Circle */}
                <div className="absolute left-0 top-0 w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>

                {/* Content */}
                <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
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
                Get answers to common questions about windshield replacement
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
                Ready to Replace Your Windshield?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Get a free quote today! Our expert technicians are ready to restore your vehicle's
                safety with fast, professional windshield replacement service.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <button
                  onClick={() => openGlassBillerForm()}
                  className="group inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl hover:scale-105 cursor-pointer"
                >
                  <span>Get Free Quote</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="tel:+14032852000"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg border-2 border-white/30 hover:border-white/50 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  +1 (403) 285-2000
                </a>
              </div>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <Clock className="w-8 h-8 text-white mx-auto mb-3" />
                  <div className="text-white font-bold">Same-Day Service</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <Shield className="w-8 h-8 text-white mx-auto mb-3" />
                  <div className="text-white font-bold">Quality Guarantee</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <Award className="w-8 h-8 text-white mx-auto mb-3" />
                  <div className="text-white font-bold">Insurance Approved</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
