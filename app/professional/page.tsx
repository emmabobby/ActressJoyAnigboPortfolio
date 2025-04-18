"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Components
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ServicesSection from "@/components/sections/services-section"
import StatsSection from "@/components/sections/stats-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import ContactSection from "@/components/sections/contact-section"

export default function ProfessionalPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-50 bg-white flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-16 h-16 border-4 border-navy-blue/30 border-t-navy-blue rounded-full animate-spin mb-6"></div>
              <h2 className="text-2xl font-bold text-navy-blue">ProStudio</h2>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-white">
        <Navbar />

        {/* Hero Section */}
        <section id="home" className="relative h-screen flex items-center">
          {/* Background with overlay */}
          <div className="absolute inset-0 bg-transparent-black/10 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent-black/40 to-transparent"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <motion.span
                className="inline-block py-1 px-3 rounded-full bg-navy-blue/10 text-navy-blue text-sm font-medium mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Professional Business Solutions
              </motion.span>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent-black"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Elevate Your Business with Modern Solutions
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-transparent-black/80 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                We help businesses transform their digital presence with cutting-edge technology and strategic insights.
                Our team of experts is ready to take your company to the next level.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.button
                  className="px-6 py-3 bg-navy-blue text-white rounded-full font-medium hover:bg-navy-blue/90 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
                <motion.button
                  className="px-6 py-3 border border-navy-blue text-navy-blue rounded-full font-medium hover:bg-navy-blue/10 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            </div>
          </div>

          {/* Animated scroll indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <div className="flex flex-col items-center">
              <span className="text-transparent-black/60 text-sm mb-2">Scroll Down</span>
              <motion.div
                className="w-6 h-10 border-2 border-navy-blue/30 rounded-full flex justify-center"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              >
                <motion.div
                  className="w-1.5 h-1.5 bg-navy-blue rounded-full"
                  animate={{ y: [0, 15, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-navy-blue/10 text-navy-blue text-sm font-medium mb-4">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent-black">Features That Set Us Apart</h2>
              <p className="text-transparent-black/80">
                Our comprehensive suite of features is designed to give your business the competitive edge it needs in
                today's fast-paced market.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Innovative Solutions",
                  description:
                    "We leverage cutting-edge technology to create innovative solutions that address your unique business challenges.",
                  icon: "💡",
                },
                {
                  title: "Expert Team",
                  description:
                    "Our team of seasoned professionals brings years of industry experience to every project we undertake.",
                  icon: "👥",
                },
                {
                  title: "Data-Driven Approach",
                  description:
                    "We make decisions based on comprehensive data analysis to ensure optimal outcomes for your business.",
                  icon: "📊",
                },
                {
                  title: "Scalable Architecture",
                  description:
                    "Our solutions are built to grow with your business, ensuring long-term value and performance.",
                  icon: "🏗️",
                },
                {
                  title: "24/7 Support",
                  description:
                    "Our dedicated support team is available around the clock to address any issues that may arise.",
                  icon: "🔧",
                },
                {
                  title: "Cost-Effective",
                  description:
                    "We deliver high-quality solutions at competitive prices, ensuring excellent return on investment.",
                  icon: "💰",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-transparent-black">{feature.title}</h3>
                  <p className="text-transparent-black/70">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <ServicesSection />
        <StatsSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  )
}
