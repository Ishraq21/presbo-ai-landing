'use client'

import { motion } from "motion/react"
import { cn } from "@/lib/utils"

type ProgressiveBlurProps = {
  className?: string
  direction?: "left" | "right"
  blurIntensity?: number
}

export const ProgressiveBlur = ({
  className,
  direction = "left",
  blurIntensity = 1
}: ProgressiveBlurProps) => (
  <motion.div
    aria-hidden
    className={cn("pointer-events-none", className)}
    initial={{ opacity: 0.5 }}
    animate={{ opacity: [0.4, 0.6, 0.4] }}
    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    style={{
      backdropFilter: `blur(${12 * blurIntensity}px)`,
      WebkitBackdropFilter: `blur(${12 * blurIntensity}px)`,
      maskImage:
        direction === "left"
          ? "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)"
          : "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)"
    }}
  />
)
