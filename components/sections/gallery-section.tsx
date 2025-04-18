"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryImages = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dhnwzpkz2/image/upload/v1744959655/20250410_134303_bjpmtv.jpg",
    alt: "Gallery image 1",
    size: "normal",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dhnwzpkz2/image/upload/v1744959658/20250410_134206_retenv.jpg",
    alt: "Gallery image 2",
    size: "wide",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dhnwzpkz2/image/upload/v1744959660/20250410_134154_yepstz.jpg",
    alt: "Gallery image 3",
    size: "tall",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dhnwzpkz2/image/upload/v1744959658/20250410_134240_pkwiwc.jpg",
    alt: "Gallery image 4",
    size: "large",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dhnwzpkz2/image/upload/v1744959654/20250410_134139_ipekvi.jpg",
    alt: "Gallery image 5",
    size: "normal",
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/dhnwzpkz2/image/upload/v1744959657/20250410_134230_kn2uzy.jpg",
    alt: "Gallery image 6",
    size: "normal",
  },
  {
    id: 7,
    src: "https://res.cloudinary.com/dhnwzpkz2/image/upload/v1744959654/20250410_134315_rhrsmn.jpg",
    alt: "Gallery image 7",
    size: "wide",
  },
  {
    id: 8,
    src: "https://res.cloudinary.com/dhnwzpkz2/image/upload/v1744959660/20250410_133916_wdz3bi.jpg",
    alt: "Gallery image 8",
    size: "normal",
  },
]

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="gallery" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-navy-blue/10 text-navy-blue text-sm font-medium mb-4">
            Gallery
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent-black">Photo Collection</h2>
          <p className="text-transparent-black/80">
            Professional headshots and production stills from my career in film, television, and theater.
          </p>
        </motion.div>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className={`gallery-item ${
                image.size === "wide" ? "wide" : image.size === "tall" ? "tall" : image.size === "large" ? "large" : ""
              }`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-transparent-black to-transparent opacity-0 hover:opacity-70 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm uppercase tracking-wider">View</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button className="bg-navy-blue hover:bg-navy-blue/90 text-white rounded-full px-8">View Full Gallery</Button>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-transparent-black/90 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-6 right-6 p-2 rounded-full bg-black/50 text-white z-10"
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </button>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-4xl max-h-[80vh] w-full h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedImage.src || "/placeholder.svg"}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
