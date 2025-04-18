"use client"

import { useEffect, useRef } from "react"

interface StarBubbleProps {
  count?: number
}

export default function StarBubble({ count = 5 }: StarBubbleProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const createStar = () => {
      const star = document.createElement("div")

      // Random position within the button
      const x = Math.random() * container.offsetWidth
      const y = Math.random() * container.offsetHeight

      // Random movement direction
      const tx = (Math.random() - 0.5) * 40
      const ty = (Math.random() - 0.5) * 40 - 20 // Bias upward

      star.style.setProperty("--tx", `${tx}px`)
      star.style.setProperty("--ty", `${ty}px`)
      star.style.left = `${x}px`
      star.style.top = `${y}px`
      star.className = "star-bubble absolute"

      // Create SVG star
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
      svg.setAttribute("width", "10")
      svg.setAttribute("height", "10")
      svg.setAttribute("viewBox", "0 0 24 24")
      svg.setAttribute("fill", "none")
      svg.setAttribute("stroke", "white")
      svg.setAttribute("stroke-width", "2")
      svg.setAttribute("stroke-linecap", "round")
      svg.setAttribute("stroke-linejoin", "round")

      const path = document.createElementNS("http://www.w3.org/2000/svg", "path")
      path.setAttribute("d", "M12 3l1.5 5h5l-4 3 1.5 5-4-3-4 3 1.5-5-4-3h5z")
      path.setAttribute("fill", "rgba(255, 255, 255, 0.8)")
      path.setAttribute("stroke", "rgba(255, 255, 255, 0.5)")

      svg.appendChild(path)
      star.appendChild(svg)

      container.appendChild(star)

      // Remove the star after animation completes
      setTimeout(() => {
        if (container.contains(star)) {
          container.removeChild(star)
        }
      }, 2000)
    }

    // Create initial stars
    for (let i = 0; i < count; i++) {
      setTimeout(() => createStar(), i * 200)
    }

    // Create stars periodically
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        // 30% chance to create a star
        createStar()
      }
    }, 300)

    return () => clearInterval(interval)
  }, [count])

  return <div ref={containerRef} className="star-container" />
}
