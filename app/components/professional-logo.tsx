"use client"

import { type ReactNode, useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

interface ProfessionalLogoProps {
  children: ReactNode
  href?: string
}

export default function ProfessionalLogo({ children, href = "#" }: ProfessionalLogoProps) {
  const [bubbles, setBubbles] = useState<Array<{ id: number; x: number; y: number; size: number }>>([])

  useEffect(() => {
    // Create initial bubbles
    const initialBubbles = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 10 + 5,
    }))

    setBubbles(initialBubbles)

    // Add new bubbles periodically
    const interval = setInterval(() => {
      setBubbles((prev) => {
        // Remove old bubbles if there are too many
        const filtered = prev.length > 10 ? prev.slice(1) : prev

        // Add a new bubble
        return [
          ...filtered,
          {
            id: Date.now(),
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 10 + 5,
          },
        ]
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Link href={href} className="relative inline-block">
      <motion.div
        className="logo-professional text-xl font-medium logo-blink relative"
        whileHover={{
          scale: 1.05,
          textShadow: "0 0 8px rgba(255,255,255,0.5)",
        }}
      >
        {children}
      </motion.div>

      {/* Bubble container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            className="absolute rounded-full bg-white/10"
            style={{
              left: `${bubble.x}%`,
              top: `${bubble.y}%`,
              width: bubble.size,
              height: bubble.size,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.5, 0],
              scale: [0, 1, 0],
              y: [0, -20, -40],
            }}
            transition={{
              duration: 2,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
    </Link>
  )
}
