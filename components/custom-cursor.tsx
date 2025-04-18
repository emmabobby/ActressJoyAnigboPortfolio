"use client"

import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isActive, setIsActive] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only show custom cursor on non-touch devices
    if (window.matchMedia("(pointer: fine)").matches) {
      setIsVisible(true)

      const updatePosition = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY })
      }

      const handleMouseDown = () => setIsActive(true)
      const handleMouseUp = () => setIsActive(false)

      const handleMouseEnter = () => {
        document.body.style.cursor = "none"
      }

      const handleMouseLeave = () => {
        document.body.style.cursor = "auto"
      }

      window.addEventListener("mousemove", updatePosition)
      window.addEventListener("mousedown", handleMouseDown)
      window.addEventListener("mouseup", handleMouseUp)
      document.body.addEventListener("mouseenter", handleMouseEnter)
      document.body.addEventListener("mouseleave", handleMouseLeave)

      return () => {
        window.removeEventListener("mousemove", updatePosition)
        window.removeEventListener("mousedown", handleMouseDown)
        window.removeEventListener("mouseup", handleMouseUp)
        document.body.removeEventListener("mouseenter", handleMouseEnter)
        document.body.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      className={`custom-cursor ${isActive ? "active" : ""}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  )
}
