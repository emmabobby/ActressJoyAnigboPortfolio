"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <div className="text-2xl font-bold">
                <span className="text-navy-blue">Chiamaka</span>
                <span className="text-accent-blue"> Joy Anigbo</span>
              </div>
            </Link>
            <p className="text-transparent-black/80 mb-6 max-w-md">
              Award-winning actress with a passion for bringing complex characters to life on stage and screen. With
              over a decade of experience in film, television, and theater.
            </p>
            <div className="flex space-x-4">
              {["instagram", "twitter", "facebook"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-navy-blue/10 rounded-full flex items-center justify-center hover:bg-navy-blue hover:text-white transition-colors duration-300"
                >
                  <span className="sr-only">{social}</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-transparent-black mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About", "Portfolio", "Awards", "Gallery", "Testimonials", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={`#${link.toLowerCase()}`}
                    className="text-transparent-black/80 hover:text-navy-blue transition-colors duration-300"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-transparent-black mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-transparent-black/80">
                <strong className="text-transparent-black">Email:</strong> contact@chiamakajoy.com
              </li>
              <li className="text-transparent-black/80">
                <strong className="text-transparent-black">Phone:</strong> +234 123 456 7890
              </li>
              <li className="text-transparent-black/80">
                <strong className="text-transparent-black">Management:</strong> management@chiamakajoy.com
              </li>
              <li className="text-transparent-black/80">
                <strong className="text-transparent-black">Location:</strong> Abuja, Nigeria
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-transparent-black/80 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Chiamaka Joy Anigbo. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            className="w-10 h-10 bg-navy-blue rounded-full flex items-center justify-center text-white hover:bg-navy-blue/90 transition-colors duration-300"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
