'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { ChevronRight, Shield, Sparkles, Zap, CheckCircle2, Star } from 'lucide-react';
import Image from 'next/image';
import { openGlassBillerForm } from './GlassBillerForm';
import 'swiper/css';
import 'swiper/css/pagination';

const slides = [
  {
    title: 'Professional Auto ',
    highlight: ' Glass Repair',
    subtitle: 'VIP Auto Glass',
    description: 'Serving Calgary for over 9+ years with excellence and trust',
    image: '/images/hero2.jpeg',
    features: ['Mobile Service', '24/7 Support', 'Certified Experts']
  },
  {
    title: 'Windshield',
    highlight: 'Replacement',
    subtitle: 'Expert Solutions',
    description: 'Quick, safe, and reliable windshield replacement services',
    image: '/images/hero1.jpeg',
    features: ['Same Day Service', 'Quality Guarantee', 'All Makes & Models']
  },
  {
    title: 'Window Tinting &',
    highlight: 'Coating',
    subtitle: 'Premium Protection',
    description: 'Advanced ceramic coating and professional tinting services',
    image: '/images/hero3.jpeg',
    features: ['UV Protection', 'Lifetime Warranty', 'Expert Installation']
  },
  {
    title: 'ADAS',
    highlight: 'Calibration',
    subtitle: 'Advanced Technology',
    description: 'Professional ADAS calibration for your vehicle\'s safety systems',
    image: '/images/hero4.jpg',
    features: ['Static & Dynamic', 'OEM Approved', 'All Vehicles']
  }
];

export default function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-light rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #bc1622 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full relative z-10">
        <div className="h-full flex items-center">
          <div className="w-full">
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                el: '.hero-pagination',
              }}
              loop={true}
              className="hero-swiper"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="grid lg:grid-cols-2 gap-12 items-center py-20">
                    {/* Left Content */}
                    <div className="text-white">
                      {/* Floating badge */}
                      <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">{slide.subtitle}</span>
                      </div>

                      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                        {slide.title} <br />
                        <span className="text-primary">{slide.highlight}</span>
                      </h1>

                      <p className="text-xl text-gray-300 mb-8 max-w-xl">
                        {slide.description}
                      </p>

                      {/* Features */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                        {slide.features.map((feature, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20"
                          >
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Buttons */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
                        <button
                          onClick={() => openGlassBillerForm()}
                          className="group relative inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 overflow-hidden shadow-lg hover:shadow-primary/50 cursor-pointer"
                        >
                          <span className="relative z-10">Get Free Quote</span>
                          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                        </button>

                        <a
                          href="tel:+14032852000"
                          className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold border-2 border-white/30 hover:border-white/50 transition-all duration-300"
                        >
                          <Zap className="w-5 h-5" />
                          Call Now
                        </a>
                      </div>
                    </div>

                    {/* Right Image with Decoratives */}
                    <div className="relative hidden lg:flex lg:justify-center">
                      <div className="relative w-full max-w-lg h-[500px]">
                        {/* Decorative circles */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-primary-light/20 rounded-full blur-3xl animate-pulse"></div>

                        {/* Main Image Container */}
                        <div className="relative z-10 h-full">
                          {/* Image with decorative border */}
                          <div className="relative h-full rounded-3xl overflow-hidden border-4 border-primary/20 shadow-2xl group">
                            <Image
                              src={slide.image}
                              alt={slide.title}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-700"
                              priority={index === 0}
                            />
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                          </div>

                          {/* Floating stats card */}
                          <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20 shadow-2xl animate-float">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                                <Star className="w-6 h-6 text-white fill-white" />
                              </div>
                              <div>
                                <h3 className="text-white font-bold text-xl">9+ Years</h3>
                                <p className="text-gray-300 text-xs">Excellence</p>
                              </div>
                            </div>
                          </div>

                          {/* Floating badge */}
                          <div className="absolute -top-6 -right-6 bg-primary/90 backdrop-blur-sm rounded-2xl p-3 border border-primary-light shadow-2xl">
                            <div className="text-center">
                              <div className="text-white font-bold text-2xl mb-1">5000+</div>
                              <div className="text-white/90 text-xs font-medium">Happy Clients</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Pagination Only */}
            <div className="hidden md:flex items-center justify-center mt-8">
              <div className="hero-pagination flex gap-2"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-2 text-white">
          <span className="text-sm font-medium">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1 h-3 bg-primary rounded-full"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
