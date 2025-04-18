import type React from "react"
import LuxuryLayout from "../luxury-layout"

export default function Layout({ children }: { children: React.ReactNode }) {
  return <LuxuryLayout>{children}</LuxuryLayout>
}
