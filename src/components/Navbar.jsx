"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/#hero" },
  { name: "About", href: "#about" },
  {
    name: "Services",
    href: "#services",
    hasDropdown: true,
    subLinks: [
      {
        name: "Windshield Replacement",
        href: "/services/windshield-replacement",
      },
      { name: "Rock Chip Repair", href: "/services/rock-chip-repair" },
      { name: "Glass Tinting", href: "/services/glass-tinting" },
      { name: "ADAS Calibration", href: "/services/adas-calibration" },
    ],
  },
  { name: "Gallery", href: "/#gallery" },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "Team", href: "/#team" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-lg shadow-lg shadow-primary/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#hero"
            whileHover={{ scale: 1.05 }}
            className="flex items-center group"
          >
            <div className="relative w-40 h-20 rounded-xl overflow-hidden group-hover:shadow-xl group-hover:shadow-primary/30 transition-all">
              <Image
                src="/images/vip_logo.png"
                alt="VIP Auto Glass Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) =>
              link.hasDropdown ? (
                <div
                  key={index}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <motion.button
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{
                      scale: 1.05,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      },
                    }}
                    className="font-semibold relative group text-white flex items-center gap-1"
                  >
                    <span className="relative z-10 transition-all duration-300 group-hover:text-primary-light group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                      {link.name}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 relative z-10 ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                    <motion.span
                      className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary-light to-white"
                      initial={{ width: 0 }}
                      whileHover={{
                        width: "100%",
                        transition: {
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        },
                      }}
                    />
                    <span className="absolute inset-0 -z-10 bg-white/0 group-hover:bg-white/10 rounded-lg transition-all duration-300 -mx-2 -my-1"></span>
                  </motion.button>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 z-50"
                      >
                        <div className="py-2">
                          {link.subLinks.map((subLink, subIndex) => (
                            <motion.a
                              key={subIndex}
                              href={subLink.href}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: subIndex * 0.05 }}
                              className="block px-6 py-3 text-gray-700 hover:bg-primary/5 hover:text-primary transition-all font-semibold relative group"
                            >
                              <span className="relative z-10">
                                {subLink.name}
                              </span>
                              <span className="absolute left-0 top-0 h-full w-1 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></span>
                            </motion.a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <motion.a
                  key={index}
                  href={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 400, damping: 10 },
                  }}
                  className="font-semibold relative group text-white"
                >
                  <span className="relative z-10 transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                    {link.name}
                  </span>
                  <motion.span
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary-light to-white"
                    initial={{ width: 0 }}
                    whileHover={{
                      width: "100%",
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      },
                    }}
                  />
                  <span className="absolute inset-0 -z-10 bg-white/0 group-hover:bg-white/10 rounded-lg transition-all duration-300 -mx-2 -my-1"></span>
                </motion.a>
              )
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+14032852000"
              className={`group inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl ${
                scrolled
                  ? "bg-white hover:bg-gray-100 text-primary hover:text-primary-dark"
                  : "bg-primary hover:bg-primary-dark text-white hover:shadow-primary/30"
              }`}
            >
              <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors text-white hover:bg-white/10"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{
          x: isOpen ? 0 : "-100%",
        }}
        transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full h-screen bg-gradient-to-br from-primary via-primary-dark to-gray-900 z-[80] lg:hidden overflow-hidden"
      >
        <div className="container mx-auto px-6 py-6 h-full flex flex-col overflow-hidden">
          {/* Drawer Header */}
          <div className="flex items-center justify-between mb-6 flex-shrink-0">
            <div className="relative w-32 h-16">
              <Image
                src="/images/vip_logo.png"
                alt="VIP Auto Glass Logo"
                fill
                className="object-contain"
              />
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto overflow-x-hidden -mr-2 pr-2 scrollbar-thin" style={{
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgba(255, 255, 255, 0.3) transparent'
          }}>
            <style dangerouslySetInnerHTML={{__html: `
              .scrollbar-thin::-webkit-scrollbar {
                width: 6px;
              }
              .scrollbar-thin::-webkit-scrollbar-track {
                background: transparent;
              }
              .scrollbar-thin::-webkit-scrollbar-thumb {
                background: rgba(255, 255, 255, 0.3);
                border-radius: 10px;
              }
              .scrollbar-thin::-webkit-scrollbar-thumb:hover {
                background: rgba(255, 255, 255, 0.5);
              }
            `}} />
            <div className="space-y-2 py-2">
              {navLinks.map((link, index) =>
                link.hasDropdown ? (
                  <div key={index}>
                    <motion.button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{
                        opacity: isOpen ? 1 : 0,
                        x: isOpen ? 0 : -50,
                      }}
                      transition={{
                        delay: isOpen
                          ? index * 0.1
                          : (navLinks.length - index - 1) * 0.05,
                        duration: 0.3,
                      }}
                      className="w-full flex items-center justify-between px-5 py-3 rounded-xl font-bold text-base text-white hover:bg-white/10 transition-all border-l-4 border-transparent hover:border-white"
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${
                          mobileServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </motion.button>

                    {/* Mobile Dropdown */}
                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden ml-3 mt-1"
                        >
                          {link.subLinks.map((subLink, subIndex) => (
                            <motion.a
                              key={subIndex}
                              href={subLink.href}
                              onClick={() => setIsOpen(false)}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: subIndex * 0.05 }}
                              className="block px-4 py-2.5 rounded-lg font-semibold text-sm text-white/80 hover:text-white hover:bg-white/10 transition-all border-l-2 border-white/30 hover:border-white mb-1"
                            >
                              {subLink.name}
                            </motion.a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <motion.a
                    key={index}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{
                      opacity: isOpen ? 1 : 0,
                      x: isOpen ? 0 : -50,
                    }}
                    transition={{
                      delay: isOpen
                        ? index * 0.1
                        : (navLinks.length - index - 1) * 0.05,
                      duration: 0.3,
                    }}
                    className="block px-5 py-3 rounded-xl font-bold text-base text-white hover:bg-white/10 transition-all border-l-4 border-transparent hover:border-white"
                  >
                    {link.name}
                  </motion.a>
                )
              )}
            </div>
          </nav>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
            transition={{ delay: isOpen ? 0.6 : 0, duration: 0.3 }}
            className="mt-4 flex-shrink-0"
          >
            <a
              href="tel:+14032852000"
              className="flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-primary hover:text-primary-dark px-6 py-4 rounded-xl font-bold text-base transition-all shadow-2xl"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </motion.div>

          {/* Footer Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpen ? 1 : 0 }}
            transition={{ delay: isOpen ? 0.7 : 0, duration: 0.3 }}
            className="mt-4 pt-4 border-t border-white/20 text-center text-white/80 text-xs flex-shrink-0"
          >
            <p>Calgary's Trusted Service</p>
            <p className="mt-1">9+ Years of Excellence</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black z-[55] lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Top bar with additional info */}
      {!scrolled && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="absolute top-0 left-0 right-0 bg-primary/90 backdrop-blur-sm -translate-y-full"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-2 text-sm text-white">
              <div className="flex items-center gap-6">
                <span className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +1 (403) 285-2000
                </span>
                <span className="hidden md:block">
                  24/7 Mobile Service Available
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="hidden md:block">9+ Years of Excellence</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold">
                  Free Quotes
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
