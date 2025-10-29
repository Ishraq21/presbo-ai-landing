'use client'

import * as React from "react"
import { cn } from "@/lib/utils"

type InfiniteSliderProps = {
  children: React.ReactNode
  gap?: number
  speed?: number
  speedOnHover?: number
  className?: string
}

const duplicateChildren = (children: React.ReactNode) => {
  const items = React.Children.toArray(children)
  return [...items, ...items]
}

export const InfiniteSlider = ({
  children,
  gap = 96,
  speed = 40,
  speedOnHover = speed,
  className
}: InfiniteSliderProps) => {
  const [isHovered, setIsHovered] = React.useState(false)
  const duration = React.useMemo(() => {
    const activeSpeed = isHovered ? speedOnHover : speed
    return `${Math.max(8, 1200 / Math.max(activeSpeed, 1))}s`
  }, [isHovered, speed, speedOnHover])

  const duplicatedChildren = React.useMemo(
    () => duplicateChildren(children),
    [children]
  )

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      onMouseEnter={() => setIsHovered(true)}
      onFocus={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onBlur={() => setIsHovered(false)}
    >
      <div
        className="flex animate-infinite-scroll"
        style={{
          gap,
          animationDuration: duration
        }}
      >
        {duplicatedChildren.map((child, index) => (
          <div
            className="flex min-w-[200px] items-center justify-center"
            key={index}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  )
}
