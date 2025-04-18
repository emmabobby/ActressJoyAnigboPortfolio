"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Instagram, Twitter, Mail } from "lucide-react"

interface MainNavigationProps {
  isOpen: boolean
  onClose: () => void
}

export default function MainNavigation({ isOpen, onClose }: MainNavigationProps) {
  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    closed: { opacity: 0, x: 50 },
    open: { opacity: 1, x: 0 },
  }

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Awards", href: "#awards" },
    { label: "Gallery", href: "#gallery" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ]

  const handleLinkClick = () => {
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 menu-luxury"
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
        >
          <div className="h-full flex flex-col justify-center items-center p-8">
            <div className="mb-12">
              <motion.h2 className="text-luxury-gold text-3xl font-playfair mb-2" variants={itemVariants}>
                Chiamaka Joy Anigbo
              </motion.h2>
              <motion.p className="text-white/60 text-center" variants={itemVariants}>
                Award-Winning Actress
              </motion.p>
            </div>

            <nav className="mb-12">
              <ul className="space-y-6 text-center">
                {menuItems.map((item, index) => (
                  <motion.li key={index} variants={itemVariants}>
                    <Link
                      href={item.href}
                      className="text-2xl font-playfair hover:text-luxury-gold transition-colors duration-300"
                      onClick={handleLinkClick}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <motion.div className="flex space-x-6" variants={itemVariants}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-luxury-light rounded-full hover:border-luxury-gold transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-luxury-light rounded-full hover:border-luxury-gold transition-colors duration-300"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:contact@chiamakajoyanigbo.com"
                className="p-2 border border-luxury-light rounded-full hover:border-luxury-gold transition-colors duration-300"
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
