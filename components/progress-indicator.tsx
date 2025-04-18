"use client"

import { motion, useSpring } from "framer-motion"

interface ProgressIndicatorProps {
  progress: any
}

export default function ProgressIndicator({ progress }: ProgressIndicatorProps) {
  const scaleX = useSpring(progress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return <motion.div className="progress-bar" style={{ scaleX }} />
}
