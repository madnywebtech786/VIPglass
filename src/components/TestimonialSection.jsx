'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Star, Quote, ChevronLeft, ChevronRight, MessageCircle, Award, BadgeCheck, Trophy, Sparkles } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const testimonials = [
  {
    name: 'John Anderson',
    image: '/images/client1.jpg',
    rating: 5,
    text: 'VIP Auto Glass provided exceptional service! They replaced my windshield within hours, and the quality is outstanding. Their professional service and 1-year workmanship guarantee made it so convenient. Highly recommended!',
  },
  {
    name: 'Sarah Mitchell',
    image: '/images/client2.jpg',
    rating: 5,
    text: 'I was impressed by their professionalism and attention to detail. The team arrived on time, completed the work efficiently, and the pricing was very competitive. Will definitely use them again!',
  },
  {
    name: 'Michael Chen',
    image: '/images/client3.jpg',
    rating: 5,
    text: 'Amazing experience from start to finish! The rock chip repair was done perfectly, and they even cleaned my entire windshield. Great customer service and quality work.',
  },
  {
    name: 'Emily Rodriguez',
    image: '/images/client4.jpg',
    rating: 5,
    text: 'Best auto glass service in Calgary! Their window tinting looks fantastic and the ceramic coating has made a huge difference. The team is knowledgeable and friendly.',
  },
  {
    name: 'David Thompson',
    image: '/images/client5.jpg',
    rating: 5,
    text: 'I\'ve used VIP Auto Glass multiple times for different vehicles. Consistently excellent service, fair prices, and quality workmanship. They truly care about customer satisfaction.',
  },
];

export default function TestimonialSection() {
  return (
    <section id="testimonials" className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, #bc1622 1px, transparent 1px)',
            backgroundSize: '40px 40px',
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
              Testimonials
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
          >
            What Our <span className="text-primary">Clients Say</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Don't just take our word for it - hear from our satisfied customers
          </motion.p>
        </div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="relative max-w-7xl mx-auto"
        >
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: '.testimonial-pagination',
            }}
            navigation={{
              prevEl: '.testimonial-prev',
              nextEl: '.testimonial-next',
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="h-full pb-4 m-4">
                  <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full flex flex-col min-h-[380px]">
                    {/* Quote icon */}
                    <div className="absolute top-6 right-6 w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <Quote className="w-7 h-7 text-primary" />
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Testimonial text */}
                    <p className="text-gray-700 leading-relaxed mb-6 flex-grow italic text-[15px]">
                      "{testimonial.text}"
                    </p>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-6"></div>

                    {/* Client info */}
                    <div className="flex items-center gap-4 mt-auto">
                      {/* Avatar placeholder */}
                      <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg flex-shrink-0">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                      </div>
                    </div>

                    {/* Decorative element */}
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/5 to-transparent rounded-full -ml-12 -mb-12 group-hover:scale-150 transition-transform duration-500"></div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation with Pagination in Center */}
          <div className="flex items-center justify-center gap-8 mt-12">
            <button className="testimonial-prev w-14 h-14 bg-gradient-to-br from-gray-50 to-white hover:from-primary hover:to-primary-dark text-gray-900 hover:text-white rounded-2xl flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-primary group">
              <ChevronLeft className="w-6 h-6 group-hover:scale-110 group-hover:-translate-x-1 transition-all" />
            </button>

            <div className=" rounded-full px-6 py-3 ">
              <div className="testimonial-pagination flex gap-2"></div>
            </div>

            <button className="testimonial-next w-14 h-14 bg-gradient-to-br from-gray-50 to-white hover:from-primary hover:to-primary-dark text-gray-900 hover:text-white rounded-2xl flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-primary group">
              <ChevronRight className="w-6 h-6 group-hover:scale-110 group-hover:translate-x-1 transition-all" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
