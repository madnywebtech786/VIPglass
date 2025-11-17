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
  Sun,
  Eye,
  Thermometer,
  Wrench,
  Phone,
  Palette,
  Lock
} from 'lucide-react';

const benefits = [
  {
    icon: Sun,
    title: 'UV Protection',
    description: 'Block up to 99% of harmful UV rays, protecting your skin and preventing interior fading and cracking.',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Thermometer,
    title: 'Heat Reduction',
    description: 'Reduce interior heat by up to 60%, keeping your car cooler and reducing AC usage for better fuel efficiency.',
    gradient: 'from-red-500 to-pink-500',
  },
  {
    icon: Eye,
    title: 'Enhanced Privacy',
    description: 'Protect your privacy and valuables with professional tinting that obscures interior view from outside.',
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    icon: Palette,
    title: 'Aesthetic Appeal',
    description: 'Transform your vehicle\'s appearance with sleek, professional tinting that adds style and sophistication.',
    gradient: 'from-blue-500 to-cyan-500',
  },
];

const tintTypes = [
  {
    name: 'Carbon Tinting',
    icon: Shield,
    features: [
      'Superior heat rejection',
      'Non-metallic, no signal interference',
      'Matte finish for elegant look',
      'Excellent UV protection',
      'Long-lasting durability',
      'Fade-resistant technology'
    ],
    gradient: 'from-gray-700 to-gray-900',
    recommended: false,
  },
  {
    name: 'Ceramic Tinting',
    icon: Award,
    features: [
      'Premium heat rejection (up to 60%)',
      'Maximum UV protection (99%+)',
      'Crystal clear visibility',
      'No signal interference',
      'Superior glare reduction',
      'Lifetime warranty available'
    ],
    gradient: 'from-primary to-primary-dark',
    recommended: true,
  },
];

const serviceSteps = [
  {
    number: '01',
    title: 'Schedule Appointment',
    description: 'Book a convenient time for your window tinting service. We work with your schedule.',
  },
  {
    number: '02',
    title: 'Consultation & Selection',
    description: 'Choose your preferred tint shade and type (Carbon or Ceramic) based on your needs and budget.',
  },
  {
    number: '03',
    title: 'Window Preparation',
    description: 'Windows are thoroughly cleaned and prepared to ensure perfect adhesion and a flawless finish.',
  },
  {
    number: '04',
    title: 'Precision Cutting',
    description: 'Tint film is precisely cut to match your vehicle\'s window specifications for a custom fit.',
  },
  {
    number: '05',
    title: 'Professional Application',
    description: 'Our experts apply the tint using professional techniques to eliminate bubbles and imperfections.',
  },
  {
    number: '06',
    title: 'Quality Inspection',
    description: 'Thorough inspection ensures perfect application, clarity, and adherence to quality standards.',
  },
  {
    number: '07',
    title: 'Curing & Care Instructions',
    description: 'We provide detailed aftercare instructions to ensure your tint cures properly for lasting results.',
  },
];

const faqs = [
  {
    question: 'What is car window tinting, and why should I consider it?',
    answer: 'Car window tinting is the process of applying a thin film to your vehicle\'s windows that blocks sunlight, heat, and UV rays. You should consider it for several compelling reasons: it dramatically reduces sun glare while driving, making it safer and more comfortable; it blocks up to 99% of harmful UV rays that cause skin damage and fade your interior; it reduces interior heat by up to 60%, lowering AC usage and improving fuel efficiency; it enhances privacy by obscuring the view into your vehicle; and it significantly improves your car\'s aesthetic appeal with a sleek, professional look. Additionally, quality tinting can help hold shattered glass together in an accident, providing an extra layer of safety.',
  },
  {
    question: 'What types of vehicles can you tint windows for?',
    answer: 'We offer professional window tinting services for ALL vehicle makes, models, and sizes. Whether you drive a compact sedan, luxury SUV, pickup truck, sports car, van, or commercial vehicle, we have the expertise and materials to provide a custom-fit solution. Our technicians are experienced with every type of vehicle window configuration, from standard side windows to complex curved rear windshields and panoramic sunroofs. We stock tint films in various sizes and can handle any vehicle from classic cars to the latest electric vehicles. No job is too big or too small - we ensure every installation is tailored perfectly to your specific vehicle.',
  },
  {
    question: 'What is the process for getting my car windows tinted?',
    answer: 'Our window tinting process is straightforward and professional. First, schedule an appointment at your convenience - we offer flexible scheduling to work around your busy life. When you arrive, you\'ll consult with our experts to choose the perfect tint shade (within legal limits) and type (Carbon or Ceramic) based on your needs, budget, and preferences. We\'ll explain the benefits of each option and help you make an informed decision. Once selected, our professional technicians will meticulously clean your windows, precisely cut the tint film for a custom fit, and expertly apply it using professional-grade tools and techniques. We ensure bubble-free, perfect application every time. Finally, we\'ll inspect the work and provide you with aftercare instructions to ensure your tint cures properly and lasts for years.',
  },
  {
    question: 'How long does the car window tinting process take?',
    answer: 'The duration of the window tinting process varies based on several factors, including your vehicle\'s size, the number of windows being tinted, and the complexity of the window shapes. For a standard sedan with 4 side windows and a rear window, the process typically takes 2-4 hours. Larger vehicles like SUVs or trucks may take 3-5 hours. We never rush the process - taking the time to ensure perfect application is crucial for a quality result that lasts. During your consultation, we\'ll provide a more accurate time estimate based on your specific vehicle. Many customers choose to wait in our comfortable waiting area, or you can drop off your vehicle and pick it up later. We also recommend allowing 2-3 days after installation before rolling down windows to ensure proper curing.',
  },
  {
    question: 'Is window tinting legal in Calgary?',
    answer: 'Yes, window tinting is legal in Calgary and throughout Alberta, but there are specific regulations you must follow. In Alberta, the windshield can only have tint on the top 12.5cm (about 5 inches), and it must allow at least 75% of light through. Front side windows (driver and passenger) must allow at least 50% of light to pass through. Rear side windows and the rear windshield can be tinted to any darkness level. We are fully knowledgeable about all provincial tinting regulations and will ensure your tint is 100% compliant with the law. During your consultation, we\'ll help you choose the darkest legal shade that meets your needs while keeping you compliant. Our goal is to maximize your benefits while ensuring you never have issues with law enforcement.',
  },
  {
    question: 'What\'s the difference between Carbon and Ceramic tinting?',
    answer: 'Carbon and Ceramic are both premium tinting options, but they have key differences. Carbon tinting uses carbon particles embedded in the film, providing excellent heat rejection, superior UV protection, and a sleek matte finish. It\'s non-metallic, so it won\'t interfere with GPS, radio, or phone signals. It\'s fade-resistant and very durable, making it a great mid-tier option with excellent value. Ceramic tinting, on the other hand, is our premium option using nano-ceramic particles. It offers the absolute best heat rejection (up to 60% reduction), maximum UV protection (99%+), crystal-clear visibility without any haze, superior glare reduction, and the longest lifespan. Ceramic tint is also non-metallic and non-conductive. While ceramic costs more, it provides unmatched performance and often comes with a lifetime warranty. We\'ll help you decide which option best fits your needs and budget.',
  },
];

export default function GlassTintingContent() {
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
                <span className="text-sm font-medium">Premium Tinting Service</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Car Window <span className="text-primary">Tinting</span> Calgary
              </h1>

              <p className="text-xl text-gray-300 mb-8">
                Professional window tinting service providing UV protection, heat reduction,
                privacy, and style. Custom fit for all vehicle makes and models with premium
                Carbon and Ceramic options.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-primary mb-1">99%</div>
                  <div className="text-xs text-gray-300">UV Protection</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-primary mb-1">60%</div>
                  <div className="text-xs text-gray-300">Heat Reduction</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-primary mb-1">9+</div>
                  <div className="text-xs text-gray-300">Years Experience</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
                <a
                  href="#services"
                  className="group inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-primary/50"
                >
                  <span>View Tint Options</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:+14032852000"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold border-2 border-white/30 hover:border-white/50 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Book Appointment
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
                  src="/images/glasstinting.jpg"
                  alt="Professional Car Window Tinting Service"
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
                    <div className="text-2xl font-bold text-gray-900">Premium</div>
                    <div className="text-sm text-gray-600">Quality Service</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tint Types Section */}
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
                <Palette className="w-4 h-4" />
                Tint Options
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
            >
              Services <span className="text-primary">Provided</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Choose from our premium Carbon or Ceramic tinting options
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {tintTypes.map((tint, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className={`relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 ${tint.recommended ? 'border-primary' : 'border-gray-200'} h-full`}>
                  {tint.recommended && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1 bg-primary text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                        <Award className="w-4 h-4" />
                        RECOMMENDED
                      </span>
                    </div>
                  )}

                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${tint.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <tint.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {tint.name}
                  </h3>

                  {/* Features */}
                  <div className="space-y-3">
                    {tint.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-8">
                    <button
                      onClick={() => openGlassBillerForm()}
                      className={`block w-full text-center px-6 py-3 rounded-full font-semibold transition-all cursor-pointer ${
                        tint.recommended
                          ? 'bg-primary hover:bg-primary-dark text-white shadow-lg hover:shadow-xl'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                      }`}
                    >
                      Get a Quote
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Content Section */}
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
                <Shield className="w-4 h-4" />
                Why Choose Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Professional <span className="text-primary">Window Tinting</span> Service
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Custom fit solutions for all vehicle makes, models, and sizes
              </p>
            </motion.div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
              {/* Left Column - Image & Stats (Sticky) */}
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
                        src="/images/glasstinting.jpg"
                        alt="Professional Window Tinting Process"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                      {/* Overlay Badge */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-2xl font-bold text-primary">99%</div>
                              <div className="text-sm text-gray-600">UV Block</div>
                            </div>
                            <div className="h-12 w-px bg-gray-300"></div>
                            <div>
                              <div className="text-2xl font-bold text-primary">60%</div>
                              <div className="text-sm text-gray-600">Heat Cut</div>
                            </div>
                            <div className="h-12 w-px bg-gray-300"></div>
                            <div>
                              <div className="text-2xl font-bold text-primary">100%</div>
                              <div className="text-sm text-gray-600">Custom Fit</div>
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
                          <Lock className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            Premium Protection & Style
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            VIP Glass Calgary car window tinting creates a permanent barrier protecting
                            your interior from the sun's destructive rays, preventing fading and cracking.
                            <strong> One of the simplest and most cost-effective ways to improve your car's appearance.</strong>
                          </p>
                        </div>
                      </div>
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-primary/10">
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-sm text-gray-700">
                            Enjoy your new ride without spending thousands on replacement parts
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

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
                      <Sun className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        Interior Protection from Sun Damage
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        <strong>VIP Glass Calgary car window tinting process provides your interior protection
                        from the sun's destructive rays</strong> by creating a permanent barrier between your
                        vehicle's interior and the outside world, protecting your interior from fading and cracking.
                        This protection extends the life of your dashboard, seats, and trim significantly.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content Card 2 */}
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Palette className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        Cost-Effective Appearance Enhancement
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        Tinting is <strong>one of the simplest and most cost-effective ways to improve the
                        appearance of your car.</strong> We make it easy for you to enjoy your new ride without
                        spending thousands of dollars on new parts. A professional tint job can completely
                        transform your vehicle's look, giving it a sleek, modern, premium appearance.
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
                          Custom Solutions for All Vehicles
                        </h3>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          <strong>We manufacture and install tinted windows for all makes, models, and sizes.</strong>
                          From custom fit jobs to top of the line products – we pride ourselves in providing
                          quality products and excellent customer service.
                        </p>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 text-sm">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                            <span>Premium Carbon & Ceramic options</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                            <span>Custom fit for perfect installation</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                            <span>Top-quality products and service</span>
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
                  <div className="text-4xl font-bold text-primary mb-2">All Vehicles</div>
                  <div className="text-gray-600 font-semibold">Makes & Models</div>
                  <p className="text-sm text-gray-500 mt-2">
                    Custom fit solutions for every vehicle
                  </p>
                </div>
                <div className="relative md:border-x border-gray-200">
                  <div className="text-4xl font-bold text-primary mb-2">2 Options</div>
                  <div className="text-gray-600 font-semibold">Carbon & Ceramic</div>
                  <p className="text-sm text-gray-500 mt-2">
                    Premium quality tinting materials
                  </p>
                </div>
                <div className="relative">
                  <div className="text-4xl font-bold text-primary mb-2">9+ Years</div>
                  <div className="text-gray-600 font-semibold">Expert Experience</div>
                  <p className="text-sm text-gray-500 mt-2">
                    Professional installation guaranteed
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
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
              Transform your vehicle with professional tinting benefits
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

      {/* Process Section */}
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
              Our 7-step process ensures perfect tinting every time
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
                Get answers to common questions about window tinting
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
                Ready to Transform Your Vehicle?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Book your professional window tinting appointment today! Choose from premium
                Carbon or Ceramic options with expert installation guaranteed.
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
                  <Sun className="w-8 h-8 text-white mx-auto mb-3" />
                  <div className="text-white font-bold">99% UV Protection</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <Thermometer className="w-8 h-8 text-white mx-auto mb-3" />
                  <div className="text-white font-bold">60% Heat Reduction</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <Award className="w-8 h-8 text-white mx-auto mb-3" />
                  <div className="text-white font-bold">Premium Quality</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
