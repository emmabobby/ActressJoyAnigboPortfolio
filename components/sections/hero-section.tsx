"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  // Create a rotating text effect for the roles
  const [roleIndex, setRoleIndex] = useState(0)
  const roles = ["Actress", "Producer", "Storyteller"]

  useEffect(() => {
    // Rotate through the roles every 3 seconds
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="pt-32 pb-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Content */}
          <motion.div
            className="lg:w-1/2 mb-12 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Animated role text */}
            <motion.div
              className="inline-block py-1 px-3 rounded-full bg-navy-blue/10 mb-6 relative h-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  className="absolute text-navy-blue text-sm font-medium"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-transparent-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Chiamaka Joy <span className="text-navy-blue">Anigbo</span>
            </motion.h1>
            <motion.p
              className="text-lg text-transparent-black/80 mb-8 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Bringing characters to life with passion and authenticity. With over a decade of experience in film,
              television, and storytelling.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button className="bg-navy-blue hover:bg-navy-blue/90 text-white rounded-full px-8 py-6 h-auto font-medium">
                View Portfolio <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button className="bg-navy-blue hover:bg-navy-blue/90 text-white rounded-full px-8 py-6 h-auto font-medium">
                <Play size={16} className="mr-2" /> Showreel
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <motion.div
                className="absolute -top-10 -left-10 w-40 h-40 bg-navy-blue/10 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="absolute -bottom-10 -right-10 w-40 h-40 bg-navy-blue/10 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: 1,
                }}
              />
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl image-frame">
                <Image
                  src="https://res.cloudinary.com/dhnwzpkz2/image/upload/v1744959654/20250410_134440_nlkhlt.jpg"
                  alt="Chiamaka Joy Anigbo"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute top-10 right-10 bg-white p-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-navy-blue/20 flex items-center justify-center mr-3">
                  <span className="text-navy-blue font-bold">★</span>
                </div>
                <div>
                  <p className="text-transparent-black font-medium">Awards</p>
                  <p className="text-navy-blue font-bold">5+</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-10 left-10 bg-white p-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-navy-blue/20 flex items-center justify-center mr-3">
                  <span className="text-navy-blue font-bold">10+</span>
                </div>
                <div>
                  <p className="text-transparent-black font-medium">Years</p>
                  <p className="text-navy-blue font-bold">Experience</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
