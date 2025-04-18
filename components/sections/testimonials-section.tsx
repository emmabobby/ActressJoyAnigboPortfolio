"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Mazi Anigbo",
    position: "Film Director",
    image: "/placeholder.svg?height=100&width=100&text=MA",
    quote:
      "Chiamaka brings an extraordinary depth to every character she portrays. Her performance in 'The Mistress' was nothing short of mesmerizing. She has the rare ability to completely transform herself for each role.",
    rating: 5,
  },
  {
    id: 2,
    name: "Nolly Wood",
    position: "Film Review",
    image: "/placeholder.svg?height=100&width=100&text=NW",
    quote:
      "One of the most versatile actresses of her generation. Anigbo has the rare ability to completely transform herself for each role, bringing authenticity and emotional depth to every performance.",
    rating: 5,
  },
  {
    id: 3,
    name: "Chidi Okonkwo",
    position: "Theater Director",
    image: "/placeholder.svg?height=100&width=100&text=CO",
    quote:
      "Working with Chiamaka was a revelation. Her commitment to the craft and attention to detail elevated the entire production. She brings a unique energy to the stage that captivates audiences.",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-navy-blue/10 text-navy-blue text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent-black">What Directors Say</h2>
          <p className="text-transparent-black/80">
            Hear from directors and critics about their experience working with me.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 md:p-12 rounded-2xl shadow-lg"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                    {[...Array(5 - testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i + testimonials[currentIndex].rating} className="w-5 h-5 text-gray-300" />
                    ))}
                  </div>
                  <blockquote className="text-lg text-transparent-black/90 italic mb-6">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                  <div>
                    <h4 className="text-xl font-bold text-transparent-black">{testimonials[currentIndex].name}</h4>
                    <p className="text-navy-blue">{testimonials[currentIndex].position}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-navy-blue hover:bg-navy-blue hover:text-white transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? "bg-navy-blue" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-navy-blue hover:bg-navy-blue hover:text-white transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
