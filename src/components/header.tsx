'use client'

import React from "react"
import Link from "next/link"
import { Logo } from "@/components/logo"
import { cn } from "@/lib/utils"

export const HeroHeader = () => {
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-20 w-full pt-2">
      <nav className="w-full">
        <div
          className={cn(
            "mx-auto max-w-7xl rounded-3xl px-6 transition-all duration-300 lg:px-12",
            scrolled && "bg-background/50 backdrop-blur-2xl"
          )}
        >
          <div
            className={cn(
              "relative flex items-center py-3 duration-200 lg:py-6",
              scrolled && "lg:py-4"
            )}
          >
            <Link
              href="/"
              aria-label="home"
              className="flex items-center space-x-2"
            >
              <Logo />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
