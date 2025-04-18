"use client"

import { type ReactNode, useState } from "react"
import { Button } from "@/components/ui/button"
import StarBubble from "./star-bubble"
import { motion } from "framer-motion"

interface ProfessionalButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
}

export default function ProfessionalButton({ children, className = "", onClick }: ProfessionalButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div className="relative" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button
        className={`btn-professional rounded-full px-8 py-6 text-base ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
      >
        {children}
      </Button>
      {isHovered && <StarBubble count={8} />}
    </motion.div>
  )
}
