"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { openGlassBillerForm } from "../GlassBillerForm";
import {
  Shield,
  CheckCircle2,
  Clock,
  Award,
  Star,
  ChevronDown,
  ChevronRight,
  Sparkles,
  DollarSign,
  AlertTriangle,
  Wrench,
  Phone,
  BadgeCheck,
  Zap,
} from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Affordable at $29.99",
    description:
      "Industry-leading price for rock chip repair. Save hundreds compared to full windshield replacement.",
    gradient: "from-primary-light to-primary",
  },
  {
    icon: Clock,
    title: "Under 30 Minutes",
    description:
      "Quick, efficient service with no appointment needed. Walk in and drive out with a repaired windshield.",
    gradient: "from-primary to-primary-dark",
  },
  {
    icon: Shield,
    title: "Prevents Spreading",
    description:
      "Stop small chips from becoming large, expensive cracks. Protect your windshield's structural integrity.",
    gradient: "from-primary-dark to-primary",
  },
  {
    icon: BadgeCheck,
    title: "Insurance Approved",
    description:
      "Most insurance policies cover rock chip repair with no deductible. We handle all the paperwork.",
    gradient: "from-primary to-primary-light",
  },
];

const serviceSteps = [
  {
    number: "01",
    title: "Walk-In Service",
    description:
      "No appointment necessary! Just drive in to VIP Auto Glass at your convenience.",
  },
  {
    number: "02",
    title: "Quick Inspection",
    description:
      "Our expert technicians assess the chip size, location, and repairability in minutes.",
  },
  {
    number: "03",
    title: "Professional Cleaning",
    description:
      "The damaged area is thoroughly cleaned to remove debris and moisture for optimal adhesion.",
  },
  {
    number: "04",
    title: "Resin Application",
    description:
      "High-quality resin is injected into the chip, filling it completely and bonding the glass.",
  },
  {
    number: "05",
    title: "UV Curing",
    description:
      "The resin is cured using UV light, creating a permanent, strong repair that restores clarity.",
  },
  {
    number: "06",
    title: "Final Polish",
    description:
      "The repaired area is polished smooth, making the chip virtually invisible and restoring your view.",
  },
];

const chipTypes = [
  {
    name: "Surface Chip",
    description: "Small divot without complete break",
  },
  {
    name: "Bullseye",
    description: "Circular damage with a cone in the outer layer",
  },
  {
    name: "Star",
    description: "Multiple cracks extending from impact point",
  },
  {
    name: "Straight Line",
    description: "Single line crack extending from damage",
  },
  {
    name: "Half Moon",
    description: "Partial circular break, crescent shaped",
  },
  {
    name: "Angel Wings",
    description: "Two cracks extending at angles",
  },
  {
    name: "Star Burst",
    description: "Multiple radial cracks from center point",
  },
  {
    name: "Extended Ray on Bullseye",
    description: "Bullseye with extending crack lines",
  },
];

const faqs = [
  {
    question: "Can all rock chips be repaired?",
    answer:
      "Most rock chips can be repaired if they're smaller than a quarter (about 1 inch in diameter) and not directly in the driver's line of sight. The chip must also be on the outer layer of glass and not too close to the windshield edge. Our expert technicians will assess your specific damage and provide an honest recommendation. If the chip is too large, has multiple cracks extending beyond 3 inches, or compromises the windshield's structural integrity, we'll recommend replacement instead. Early repair is key - the sooner you address a chip, the better chance we have of successful repair.",
  },
  {
    question: "Why does rock chip repair only cost $29.99?",
    answer:
      "At VIP Auto Glass, we believe in transparent, affordable pricing that makes windshield safety accessible to everyone. Rock chip repair is a quick, straightforward process that takes under 30 minutes and uses minimal materials - just high-quality resin and UV curing equipment. Unlike full windshield replacement, there's no need for expensive glass or lengthy installation time. Our $29.99 price reflects the actual cost of the service while ensuring you get expert workmanship. This price point also encourages Calgary drivers to fix small chips immediately, preventing them from spreading into costly cracks that require full replacement. It's a win-win: you save money, and we help keep Calgary drivers safe.",
  },
  {
    question: "How long does a rock chip repair last?",
    answer:
      "A professionally completed rock chip repair is permanent and will last the lifetime of your windshield. The high-quality resin we use creates a strong bond that's as durable as the surrounding glass. Once cured with UV light, the resin won't deteriorate, wash out, or weaken over time. The repair restores the windshield's structural integrity and prevents the chip from spreading. While the repaired area may be slightly visible upon close inspection, it will not affect your visibility or compromise safety. Our repairs come with a warranty, and we're so confident in our work that we guarantee it won't spread from the repair point.",
  },
  {
    question: "Do I need an appointment for rock chip repair?",
    answer:
      "No appointment needed! That's the beauty of our rock chip repair service. We understand that windshield damage is unexpected and you need it fixed quickly. Simply drive in to VIP Auto Glass during our business hours, and our technicians will take care of you right away. The entire process takes under 30 minutes from start to finish, so you can get back on the road quickly. While walk-ins are welcome, you can also call ahead if you want to confirm we're available or have any specific questions. We're here to make windshield repair as convenient and hassle-free as possible.",
  },
  {
    question: "Will my insurance cover rock chip repair?",
    answer:
      "Most comprehensive auto insurance policies in Canada cover rock chip repair with absolutely no deductible. Insurance companies actually prefer to pay for chip repairs because it prevents much more expensive windshield replacement claims down the road. We work directly with all major insurance providers and can handle the entire claims process for you. Just provide your insurance information, and we'll verify coverage, file the claim, and complete the paperwork. In many cases, you won't pay anything out of pocket. Even if you don't have insurance coverage, our $29.99 cash price is incredibly affordable and worth the investment to prevent a $300-800 replacement later.",
  },
  {
    question: "Can I repair a chip myself with a DIY kit?",
    answer:
      "While DIY rock chip repair kits are available, we strongly recommend professional repair for several important reasons. First, windshield repair requires specialized equipment, including professional-grade resin and UV curing lights that DIY kits don't include. Second, improper application can actually make the damage worse, cause the chip to spread, or create cloudiness that obstructs your vision. Third, insurance companies may not cover a botched DIY repair, meaning you'll pay out of pocket for eventual replacement. Our professional service costs just $29.99, takes under 30 minutes, and comes with a warranty. The peace of mind and guaranteed results are well worth the minimal investment.",
  },
];

export default function RockChipRepairContent() {
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
              backgroundImage:
                "radial-gradient(circle, #bc1622 1px, transparent 1px)",
              backgroundSize: "50px 50px",
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
                <span className="text-sm font-medium">Fast & Affordable</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Rock Chip Repair <span className="text-primary">$29.99</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8">
                Quick and hassle-free windshield rock chip and crack repairs,
                all completed in under 30 minutes! No appointment needed - just
                swing by VIP Auto Glass and our expert technicians will have
                your windshield looking as good as new.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-primary mb-1">
                    $29.99
                  </div>
                  <div className="text-xs text-gray-300">Per Chip Repair</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-primary mb-1">
                    &lt;30
                  </div>
                  <div className="text-xs text-gray-300">Minutes Service</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-primary mb-1">No</div>
                  <div className="text-xs text-gray-300">Appointment</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
                <a
                  href="#pricing"
                  className="group inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-primary/50"
                >
                  <span>See Pricing</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
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
                  src="/images/rockchip.jpeg"
                  alt="Professional Rock Chip Repair Service"
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
                    <Zap className="w-6 h-6 text-white fill-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      &lt;30min
                    </div>
                    <div className="text-sm text-gray-600">Quick Service</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Special $29.99 Pricing Section */}
      <section
        id="pricing"
        className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <DollarSign className="w-4 h-4" />
                Special Offer
              </span>

              <h2 className="text-4xl md:text-5xl font-bold  mb-6">
                ANY <span className="text-primary">ROCK CHIP</span> REPAIR IN
                JUST <span className="text-primary">$29.99</span>
              </h2>
              <p className="text-xl  max-w-3xl mx-auto">
                With the Best Auto Glass Service in Calgary - Fast, Affordable,
                Professional
              </p>
            </motion.div>

            {/* Rock Chip Types Visual */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                Types of Rock Chips We Repair
              </h3>

              {/* Rock Chip Types Image */}
              <div className="relative h-[200px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border-2 border-primary/20 p-8">
                <Image
                  src="/images/rockchiptypes.png"
                  alt="Types of Rock Chip Damage - Surface Chip, Bullseye, Star, Straight Line, Half Moon, Angel Wings, Star Burst, Extended Ray on Bullseye"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Chip Types Grid Below Image */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {chipTypes.map((type, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all hover:border-primary/30"
                  >
                    <div className="space-y-2">
                      <div className="font-bold text-primary text-sm">
                        {type.name}
                      </div>
                      <div className="text-xs text-gray-600 leading-relaxed">
                        {type.description}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Pricing Details */}
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200">
                  <div className="text-center">
                    <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <div className="text-4xl font-bold text-green-600 mb-2">
                      $29.99
                    </div>
                    <div className="text-gray-700 font-semibold mb-2">
                      Per Chip Repair
                    </div>
                    <div className="text-sm text-gray-600">
                      All chip types included
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border-2 border-blue-200">
                  <div className="text-center">
                    <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      &lt;30
                    </div>
                    <div className="text-gray-700 font-semibold mb-2">
                      Minutes
                    </div>
                    <div className="text-sm text-gray-600">
                      Quick turnaround time
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200">
                  <div className="text-center">
                    <BadgeCheck className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <div className="text-4xl font-bold text-purple-600 mb-2">
                      $0
                    </div>
                    <div className="text-gray-700 font-semibold mb-2">
                      Insurance Deductible
                    </div>
                    <div className="text-sm text-gray-600">
                      Most policies covered
                    </div>
                  </div>
                </div>
              </div>

              {/* Walk-in CTA */}
              <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-3 bg-primary/10 border-2 border-primary/30 rounded-2xl px-6 py-4">
                  <Zap className="w-6 h-6 text-primary" />
                  <span className="text-gray-900 font-semibold">
                    No Appointment Needed - Walk-Ins Welcome!
                  </span>
                </div>
              </div>
            </motion.div>
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
                Calgary's <span className="text-primary">Most Trusted</span>{" "}
                Rock Chip Repair
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cost-effective, efficient service that saves you from expensive
                windshield replacement
              </p>
            </motion.div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
              {/* Left Column - Image & Stats (Sticky) */}
              <div className=" lg:sticky lg:top-24 lg:self-start">
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
                        src="/images/rockchip.jpeg"
                        alt="Professional Rock Chip Repair Process"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                      {/* Overlay Badge */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-2xl font-bold text-primary">
                                $29.99
                              </div>
                              <div className="text-sm text-gray-600">
                                Per Repair
                              </div>
                            </div>
                            <div className="h-12 w-px bg-gray-300"></div>
                            <div>
                              <div className="text-2xl font-bold text-primary">
                                &lt;30min
                              </div>
                              <div className="text-sm text-gray-600">
                                Service Time
                              </div>
                            </div>
                            <div className="h-12 w-px bg-gray-300"></div>
                            <div>
                              <div className="text-2xl font-bold text-primary">
                                No
                              </div>
                              <div className="text-sm text-gray-600">
                                Appointment
                              </div>
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
                            Don't Wait - Chips Spread Fast!
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            A small chip today can become a large crack
                            tomorrow. Temperature changes, vibrations, and road
                            conditions cause chips to spread rapidly.
                            <strong>
                              {" "}
                              Repair it now for $29.99, or pay $300-800 for
                              replacement later.
                            </strong>
                          </p>
                        </div>
                      </div>
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-primary/10">
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-sm text-gray-700">
                            Early repair saves you hundreds of dollars and
                            prevents safety hazards
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
                      <Zap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        Efficient Repairs, No Appointments Needed
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        We understand that your time is valuable. That's why we
                        specialize in{" "}
                        <strong>
                          quick and hassle-free windshield rock chip and crack
                          repairs, all completed in under 30 minutes!
                        </strong>
                        No need to schedule appointments; just swing by VIP Auto
                        Glass, and our expert technicians will have your
                        windshield looking as good as new in no time.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content Card 2 */}
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        Our Specialty - Cost-Effective Solution
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        Rock chip repairs and windshield cracks are our
                        specialty.{" "}
                        <strong>
                          VIP Glass Experts can quickly go over your windshield
                          for any type of rock chips and fill them up, so your
                          windshield looks as good as new.
                        </strong>{" "}
                        There is no need for expensive windshield repairs or a
                        window replacement in Calgary, when VIP Autoglass has
                        the cost-effective and efficient service of rock-chip
                        repair for you.
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
                        <BadgeCheck className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3">
                          Why VIP Auto Glass for Rock Chip Repair?
                        </h3>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          We use professional-grade resin and UV curing
                          equipment to ensure your rock chip repair is
                          permanent, strong, and virtually invisible. Our
                          certified technicians have years of experience and can
                          repair all types of chips.
                        </p>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 text-sm">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                            <span>Walk-in service - no appointment needed</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                            <span>Unbeatable $29.99 price for all chip types</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                            <span>Insurance claims handled for free</span>
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
                  <div className="text-4xl font-bold text-primary mb-2">
                    Save $275+
                  </div>
                  <div className="text-gray-600 font-semibold">
                    Vs. Replacement Cost
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Repair for $29.99 instead of $300-800 replacement
                  </p>
                </div>
                <div className="relative md:border-x border-gray-200">
                  <div className="text-4xl font-bold text-primary mb-2">
                    10,000+
                  </div>
                  <div className="text-gray-600 font-semibold">
                    Chips Repaired
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Serving Calgary drivers since 2015
                  </p>
                </div>
                <div className="relative">
                  <div className="text-4xl font-bold text-primary mb-2">
                    100%
                  </div>
                  <div className="text-gray-600 font-semibold">
                    Satisfaction Rate
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Warranty on all chip repairs
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
              Professional rock chip repair service at an unbeatable price
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
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}
                  >
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

      {/* Membership Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary-light rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <Award className="w-4 h-4" />
                  Professional Affiliations
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-6 text-white"
              >
                Certified & <span className="text-primary">Trusted</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                VIP Auto Glass is proud to be affiliated with leading industry organizations
              </motion.p>
            </div>

            {/* Membership Cards */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* AGRSS Membership */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-light to-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                    <BadgeCheck className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">AGRSS Certified</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Member of the Auto Glass Replacement Safety Standards Council.
                      Our technicians follow strict industry standards to ensure your
                      vehicle's structural integrity and your safety.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span>Industry-leading safety standards</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span>Certified installation techniques</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span>1-Year Workmanship Guarantee</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* IGA Membership */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">IGA Member</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Proud member of the Independent Glass Association. We stay
                      current with the latest industry advancements, best practices,
                      and technology to provide you with superior service.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span>Continuous professional development</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span>Latest repair techniques & equipment</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span>Insurance company approved</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom Guarantee Banner */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-12 bg-gradient-to-r from-primary-light via-primary to-primary-dark rounded-3xl p-8 text-center"
            >
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="text-white">
                  <div className="text-2xl md:text-3xl font-bold mb-2">
                    1-Year Workmanship Guarantee
                  </div>
                  <div className="text-white/90">
                    All rock chip repairs backed by our professional warranty
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Process Section */}
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
              Quick & Professional{" "}
              <span className="text-primary">Repair Process</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Our 6-step process ensures perfect repairs in under 30 minutes
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
                  <span className="text-2xl font-bold text-white">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
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
                Get answers to common questions about rock chip repair
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
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: openFaq === index ? "auto" : 0,
                      opacity: openFaq === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 pt-2">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
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
                Ready to Fix That Chip for Just $29.99?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                No appointment needed! Walk in today and drive out with a
                like-new windshield in under 30 minutes. Our expert technicians
                are ready to help.
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
                  <DollarSign className="w-8 h-8 text-white mx-auto mb-3" />
                  <div className="text-white font-bold">Only $29.99</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <Zap className="w-8 h-8 text-white mx-auto mb-3" />
                  <div className="text-white font-bold">Under 30 Minutes</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <BadgeCheck className="w-8 h-8 text-white mx-auto mb-3" />
                  <div className="text-white font-bold">No Appointment</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
