"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Award, Star } from "lucide-react"

const awards = [
  {
    title: "Best Actress",
    organization: "International Film Festival",
    year: "2023",
    project: "The Mistress",
    description: "Recognized for outstanding performance in a leading role.",
  },
  {
    title: "Critics' Choice Award",
    organization: "Screen Critics Association",
    year: "2022",
    project: "Echoes of Tomorrow",
    description: "Acclaimed for portrayal of Dr. Elizabeth Chen in the sci-fi drama series.",
  },
  {
    title: "Theater Excellence Award",
    organization: "National Theater Foundation",
    year: "2020",
    project: "Hamlet",
    description: "Distinguished interpretation of Ophelia in the modern adaptation.",
  },
  {
    title: "Rising Star Award",
    organization: "Film Academy",
    year: "2019",
    project: "Beyond the Horizon",
    description: "Breakthrough performance in a challenging role.",
  },
  {
    title: "Best Ensemble Cast",
    organization: "Drama Guild",
    year: "2018",
    project: "The Winter's Tale",
    description: "Collaborative excellence in theatrical performance.",
  },
  {
    title: "Television Award",
    organization: "Screen Actors Guild",
    year: "2017",
    project: "City Lights",
    description: "Outstanding contribution to episodic television.",
  },
]

export default function AwardsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="awards" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-navy-blue/10 text-navy-blue text-sm font-medium mb-4">
            Recognition
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent-black">Awards & Honors</h2>
          <p className="text-transparent-black/80">
            Celebrating excellence and achievement in the performing arts throughout my career.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {awards.map((award, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-navy-blue/10 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-navy-blue" />
                </div>
                <span className="text-transparent-black/70 text-sm">{award.year}</span>
              </div>

              <h3 className="text-xl font-bold mb-2 text-transparent-black">{award.title}</h3>
              <p className="text-navy-blue mb-4">{award.organization}</p>

              <div className="h-px bg-gray-100 my-4"></div>

              <p className="text-sm text-transparent-black/70 mb-2">For "{award.project}"</p>
              <p className="text-sm text-transparent-black/80">{award.description}</p>

              <div className="mt-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-navy-blue" fill="currentColor" />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
