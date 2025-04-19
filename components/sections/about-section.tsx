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
            Chiamaka Joy Anigbo, popularly known as Joyce Bernard, is a distinguished A-list Nollywood actress and producer, making significant strides in the Nigerian film industry. A woman of many talents, she wears multiple hats as a filmmaker, writer, actress, and realtor.
Hailing from Enugu State, Nigeria, Joyce Bernard is widely celebrated for her ability to interpret roles with depth and authenticity. As a seasoned thespian, she is known for producing morally impactful films that not only entertain but also educate and promote African culture and tradition.

            </p>

            <p className="text-transparent-black/80 mb-6">
            Born on September 22nd, she is the only single lady in a family of seven. Her academic accomplishments are nothing short of remarkable, holding multiple prestigious qualifications, including:
- MBA in Project Management, M.Ed in Administration and Planning, B.Ed in Management Economics, M.C in Acting, NCE (Nigeria Certificate in Education)

            </p>

            <p className="text-transparent-black/80 mb-8">
            Joyce Bernard officially launched her acting and movie production career in 2018, and has since carved a niche for herself in the industry. Her impressive filmography includes movies such as:
 Thick-Skinned, The Mistress, Onye Onu Uto, Ihe Ngbu, Afunwa, Gbaghara, Ije Ndu

Beyond the silver screen, Joyce Bernard is also a realtor, actively working with the Nigerian Airforce Housing and Construction. When she's not captivating audiences with her performances, she’s overseeing real estate projects, demonstrating her versatility in both the entertainment and business sectors.
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
