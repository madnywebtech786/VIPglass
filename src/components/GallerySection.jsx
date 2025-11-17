"use client";

import { motion } from "framer-motion";
import { ZoomIn, Award } from "lucide-react";
import Image from "next/image";

const galleryItems = [
  {
    id: 1,
    title: "Windshield Replacement",
    category: "Replacement",
    image: "/images/gallery/g3.jpg",
  },
  {
    id: 2,
    title: "Rock Chip Repair",
    category: "Repair",
    image: "/images/gallery/g4.jpg",
  },
  {
    id: 3,
    title: "Window Tinting",
    category: "Tinting",
    image: "/images/gallery/g2.jpg",
  },
  {
    id: 4,
    title: "Ceramic Coating",
    category: "Coating",
    image: "/images/gallery/g1.jpg",
  },
  {
    id: 5,
    title: "Side Window Replacement",
    category: "Replacement",
    image: "/images/gallery/g3.jpg",
  },
  {
    id: 6,
    title: "Professional Tinting",
    category: "Tinting",
    image: "/images/gallery/g2.jpg",
  },
];

export default function GallerySection() {

  return (
    <section
      id="gallery"
      className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Hexagon pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23bc1622' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
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
            <span className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-primary/30">
              <Award className="w-4 h-4" />
              Our Work
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Work <span className="text-primary">Gallery</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Take a look at some of our recent projects and see the quality
            craftsmanship we deliver
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              layout
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Placeholder background with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900"></div>
              <Image
                src={item.image}
                alt={`project-${index + 1}`}
                width={300}
                height={300}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>

              {/* Icon overlay on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-xl"
                >
                  <ZoomIn className="w-8 h-8 text-white" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="inline-flex items-center gap-2 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-white mb-3">
                  {item.category}
                </div>
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/20 transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 rounded-bl-3xl"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "5000+", label: "Projects Completed" },
            { value: "100%", label: "Quality Assured" },
            { value: "24/7", label: "Service Available" },
            { value: "9+", label: "Years Experience" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition-all"
            >
              <div className="text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/3 left-10 w-3 h-3 bg-primary rounded-full animate-ping opacity-20"></div>
      <div className="absolute bottom-1/3 right-20 w-2 h-2 bg-primary rounded-full animate-bounce opacity-30"></div>
    </section>
  );
}
