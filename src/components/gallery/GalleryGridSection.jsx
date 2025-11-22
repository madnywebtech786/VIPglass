'use client';

import { motion } from 'framer-motion';
import { ZoomIn, Sparkles } from 'lucide-react';
import Image from 'next/image';

const galleryItems = [
  {
    id: 1,
    title: 'Windshield Replacement',
    category: 'Replacement',
    image: '/images/gallery/g3.jpg',
  },
  {
    id: 2,
    title: 'Rock Chip Repair',
    category: 'Repair',
    image: '/images/gallery/g4.jpg',
  },
  {
    id: 3,
    title: 'Window Tinting',
    category: 'Tinting',
    image: '/images/gallery/g2.jpg',
  },
  {
    id: 4,
    title: 'Ceramic Coating',
    category: 'Coating',
    image: '/images/gallery/g1.jpg',
  },
  {
    id: 5,
    title: 'Side Window Replacement',
    category: 'Replacement',
    image: '/images/gallery/g3.jpg',
  },
  {
    id: 6,
    title: 'Professional Tinting',
    category: 'Tinting',
    image: '/images/gallery/g2.jpg',
  },
  {
    id: 7,
    title: 'Full Windshield Service',
    category: 'Replacement',
    image: '/images/gallery/g1.jpg',
  },
  {
    id: 8,
    title: 'Precision Chip Repair',
    category: 'Repair',
    image: '/images/gallery/g4.jpg',
  },
  {
    id: 9,
    title: 'Advanced Window Tinting',
    category: 'Tinting',
    image: '/images/gallery/g3.jpg',
  },
];

export default function GalleryGridSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Hexagon pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23bc1622' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
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
            className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-primary/30"
          >
            <Sparkles className="w-4 h-4" />
            Featured Projects
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Our <span className="text-primary">Latest Work</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Every project represents our commitment to excellence and precision in auto glass services
          </motion.p>
        </div>

        {/* Gallery Grid - Masonry style layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer ${
                index % 7 === 0 ? 'md:col-span-2 md:row-span-2' : 'aspect-square'
              }`}
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"></div>

              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={600}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>

              {/* Hover icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  whileHover={{ scale: 1.1, rotate: 180 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="w-20 h-20 bg-gradient-to-br from-primary-light to-primary rounded-full flex items-center justify-center shadow-2xl"
                >
                  <ZoomIn className="w-10 h-10 text-white" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 z-10">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-light to-primary backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold text-white mb-3 shadow-lg">
                  {item.category}
                </div>
                <h3 className="text-white text-2xl font-bold mb-1">{item.title}</h3>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-primary/30 transform translate-x-12 -translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 rounded-tr-3xl"></div>

              {/* Bottom left accent */}
              <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-primary/30 transform -translate-x-12 translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 rounded-bl-3xl"></div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 ring-0 group-hover:ring-2 ring-primary/50 rounded-3xl transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
        />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/3 left-10 w-3 h-3 bg-primary rounded-full animate-ping opacity-20"></div>
      <div className="absolute bottom-1/3 right-20 w-2 h-2 bg-primary-light rounded-full animate-bounce opacity-30"></div>
    </section>
  );
}
