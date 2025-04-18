"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import { Menu, X } from "lucide-react"

// Components
import CustomCursor from "@/components/custom-cursor"
import LoadingScreen from "@/components/loading-screen"
import MainNavigation from "@/components/main-navigation"

// Sections
import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import PortfolioSection from "@/components/sections/portfolio-section"
import AwardsSection from "@/components/sections/awards-section"
import GallerySection from "@/components/sections/gallery-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import ContactSection from "@/components/sections/contact-section"
import FooterSection from "@/components/sections/footer-section"

export default function LuxuryPortfolio() {
  const [loading, setLoading] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Section refs for scroll animations
  const aboutRef = useRef<HTMLDivElement>(null)
  const portfolioRef = useRef<HTMLDivElement>(null)
  const awardsRef = useRef<HTMLDivElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  const footerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Loading Screen */}
      {loading && <LoadingScreen />}

      {/* Custom Cursor */}
      <CustomCursor />

      {/* Progress Bar */}
      <motion.div className="progress-bar" style={{ scaleX }} />

      {/* Main Navigation */}
      <MainNavigation isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-30 py-6 px-8">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-luxury-gold font-playfair text-2xl">
            CJA
          </a>

          <button
            className="menu-button z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection ref={aboutRef} />
        <PortfolioSection ref={portfolioRef} />
        <AwardsSection ref={awardsRef} />
        <GallerySection ref={galleryRef} />
        <TestimonialsSection ref={testimonialsRef} />
        <ContactSection ref={contactRef} />
      </main>

      {/* Footer */}
      <FooterSection ref={footerRef} />
    </>
  )
}
