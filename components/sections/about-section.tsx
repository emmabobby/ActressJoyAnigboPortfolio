"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-navy-blue/10 text-navy-blue text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent-black">My Journey</h2>
          <p className="text-transparent-black/80">
            With over a decade of experience in film, television, and theater, I have dedicated my life to the art of
            storytelling through performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="image-frame">
              <Image
                src="https://res.cloudinary.com/dhnwzpkz2/image/upload/v1744959662/20250410_133904_voiw9g.jpg"
                alt="Chiamaka Joy Anigbo"
                width={600}
                height={800}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-transparent-black/80 mb-6">
              My journey began on the stages of local theaters and has since expanded to international productions. I am
              known for my versatility and commitment to each role, diving deep into the psychology of the characters I
              portray.
            </p>

            <p className="text-transparent-black/80 mb-6">
              My work has been recognized with several awards, including the Nigerian Film Critics Award for Best
              Actress. I believe in the power of storytelling to create empathy and understanding across cultures.
            </p>

            <p className="text-transparent-black/80 mb-8">
              When I'm not in front of the camera or on stage, I mentor young actors and participate in community
              theater programs to help nurture the next generation of performers.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <h3 className="text-3xl font-bold text-navy-blue mb-1">10+</h3>
                <p className="text-transparent-black/70">Years Experience</p>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <h3 className="text-3xl font-bold text-navy-blue mb-1">30+</h3>
                <p className="text-transparent-black/70">Productions</p>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
                <h3 className="text-3xl font-bold text-navy-blue mb-1">5</h3>
                <p className="text-transparent-black/70">Major Awards</p>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.8 }}
              >
                <h3 className="text-3xl font-bold text-navy-blue mb-1">3</h3>
                <p className="text-transparent-black/70">Languages</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
