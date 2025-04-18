"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

// Change the categories array to remove "Theater"
const categories = ["All", "Film", "Television"]

// Update the projects array with the new movie names and character names
const projects = [
  {
    id: 1,
    title: "IHE NGBU",
    role: "Ngozi",
    category: "Film",
    image: "https://res.cloudinary.com/dhnwzpkz2/image/upload/v1744959662/20250410_133850_j5qccx.jpg",
    description:
      "A gripping tale of betrayal and revenge set in a rural Nigerian village, where Ngozi must fight for justice.",
  },
  {
    id: 2,
    title: "BACKFIRE",
    role: "Ada",
    category: "Television",
    image: "https://res.cloudinary.com/dhnwzpkz2/image/upload/v1744959661/20250410_134001_mwqgkr.jpg",
    description:
      "When Ada's carefully laid plans unexpectedly backfire, she must navigate a dangerous web of deception and intrigue.",
  },
  {
    id: 3,
    title: "ONYE ONU UTO",
    role: "Daberech",
    category: "Film",
    image: "https://res.cloudinary.com/dhnwzpkz2/image/upload/v1744959663/20250410_133823_xyteyc.jpg",
    description:
      "A heartwarming story about Daberech, whose sweet words and wisdom bring healing to a divided community.",
  },
  {
    id: 4,
    title: "LOVING LORA",
    role: "Chloe",
    category: "Film",
    image: "https://res.cloudinary.com/dhnwzpkz2/image/upload/v1744959654/20250410_134335_vrl8ed.jpg",
    description:
      "Chloe's journey of self-discovery as she helps her friend Lora find love while unexpectedly finding her own.",
  },
  {
    id: 5,
    title: "THE RAVAGE",
    role: "Joy",
    category: "Television",
    image: "https://res.cloudinary.com/dhnwzpkz2/image/upload/v1744959661/20250410_133936_rlxbps.jpg",
    description:
      "Joy finds herself entangled in a complicated love triangle that threatens to destroy multiple lives and families.",
  },
  {
    id: 6,
    title: "UNWANTED",
    role: "Victoria",
    category: "Film",
    image: "https://res.cloudinary.com/dhnwzpkz2/image/upload/v1744959653/20250410_134427_p4yndu.jpg",
    description:
      "Victoria's powerful story of overcoming rejection and finding her true worth in a society that once cast her aside.",
  },
]

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-navy-blue/10 text-navy-blue text-sm font-medium mb-4">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent-black">Featured Performances</h2>
          <p className="text-transparent-black/80">
            A selection of my most notable roles across film, television, and theater productions.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={`rounded-full ${
                activeCategory === category
                  ? "bg-navy-blue hover:bg-navy-blue/90 text-white"
                  : "bg-navy-blue/10 text-navy-blue hover:bg-navy-blue hover:text-white"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button className="bg-navy-blue hover:bg-navy-blue/90 text-white rounded-full">
                      <Play className="mr-2 h-4 w-4" /> Watch Clip
                    </Button>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <span className="text-sm text-navy-blue font-medium">{project.category}</span>
                  <h3 className="text-lg font-bold text-transparent-black mt-1">{project.title}</h3>
                  <p className="text-transparent-black/70 text-sm mt-1">as {project.role}</p>
                  <p className="text-transparent-black/70 text-sm mt-2">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button className="bg-navy-blue hover:bg-navy-blue/90 text-white rounded-full px-8">
            View Full Filmography <ArrowRight size={16} className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
