"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, Lightbulb, BarChart3, Globe, Shield, Users } from "lucide-react"

const services = [
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Strategic Consulting",
    description: "Expert guidance to help you navigate complex business challenges and achieve your goals.",
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Web Development",
    description: "Custom websites and applications built with the latest technologies for optimal performance.",
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Data Analytics",
    description: "Transform your data into actionable insights that drive business growth and efficiency.",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Digital Marketing",
    description: "Comprehensive marketing strategies to increase your online presence and attract customers.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Cybersecurity",
    description: "Protect your business with advanced security solutions and proactive threat management.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Team Training",
    description: "Empower your team with the skills they need to excel in today's competitive landscape.",
  },
]

export default function ServicesSection() {
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
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-navy-blue/10 text-navy-blue text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent-black">
            Comprehensive Business Solutions
          </h2>
          <p className="text-transparent-black/80">
            We offer a wide range of services designed to help your business thrive in today's competitive market. Our
            expert team is dedicated to delivering exceptional results.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-12 h-12 bg-navy-blue/10 rounded-lg flex items-center justify-center mb-4 text-navy-blue">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-transparent-black">{service.title}</h3>
              <p className="text-transparent-black/70">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
