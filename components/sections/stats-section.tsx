"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Users, Award, Building, Globe } from "lucide-react"

const stats = [
  {
    icon: <Users className="h-6 w-6" />,
    value: "500+",
    label: "Happy Clients",
  },
  {
    icon: <Award className="h-6 w-6" />,
    value: "25+",
    label: "Awards Won",
  },
  {
    icon: <Building className="h-6 w-6" />,
    value: "10+",
    label: "Years Experience",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    value: "30+",
    label: "Countries Served",
  },
]

export default function StatsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section className="py-16 bg-navy-blue text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                {stat.icon}
              </div>
              <motion.h3
                className="text-3xl md:text-4xl font-bold mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                {stat.value}
              </motion.h3>
              <p className="text-white/80">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
