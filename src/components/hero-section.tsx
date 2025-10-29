"use client"

import React from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { HeroHeader } from "@/components/header"
import { Button } from "@/components/ui/button"
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider"
import { ProgressiveBlur } from "@/components/motion-primitives/progressive-blur"

const customerLogos = [
  {
    src: "https://html.tailus.io/blocks/customers/nvidia.svg",
    alt: "Nvidia Logo",
    height: 20
  },
  {
    src: "https://html.tailus.io/blocks/customers/column.svg",
    alt: "Column Logo",
    height: 16
  },
  {
    src: "https://html.tailus.io/blocks/customers/github.svg",
    alt: "GitHub Logo",
    height: 16
  },
  {
    src: "https://html.tailus.io/blocks/customers/nike.svg",
    alt: "Nike Logo",
    height: 20
  },
  {
    src: "https://html.tailus.io/blocks/customers/lemonsqueezy.svg",
    alt: "Lemon Squeezy Logo",
    height: 20
  },
  {
    src: "https://html.tailus.io/blocks/customers/laravel.svg",
    alt: "Laravel Logo",
    height: 16
  },
  {
    src: "https://html.tailus.io/blocks/customers/lilly.svg",
    alt: "Lilly Logo",
    height: 28
  },
  {
    src: "https://html.tailus.io/blocks/customers/openai.svg",
    alt: "OpenAI Logo",
    height: 24
  }
]

const HeroSection = () => (
  <>
    <HeroHeader />
    <main className="overflow-x-hidden">
      <section>
        <div className="py-24 md:pb-32 lg:pb-36 lg:pt-72">
          <div className="relative mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70 backdrop-blur">
                Presbo AI on Whop
              </div>
              <h1 className="mt-8 max-w-2xl text-balance text-5xl md:text-6xl lg:mt-16 xl:text-7xl">
                Create 10x Faster with Presbo AI
              </h1>
              <p className="mt-8 max-w-2xl text-balance text-lg text-muted-foreground">
                Transform scripts into narrated, visually rich lessons in minutes. Automate video
                creation, stay on-brand, and publish to your Whop community with zero editing.
              </p>

              <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-full pl-5 pr-3 text-base"
                >
                  <Link href="#get-started">
                    <span className="text-nowrap">Start Building</span>
                    <ChevronRight className="ml-1" />
                  </Link>
                </Button>
                <Button
                  key={2}
                  asChild
                  size="lg"
                  variant="ghost"
                  className="h-12 rounded-full px-5 text-base hover:bg-zinc-950/5 dark:hover:bg-white/5"
                >
                  <Link href="#request-demo">
                    <span className="text-nowrap">Request a demo</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="aspect-[2/3] absolute inset-1 -z-10 overflow-hidden rounded-3xl border border-white/10 lg:aspect-video lg:rounded-[3rem]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="size-full object-cover opacity-50 invert dark:opacity-35 dark:invert-0 dark:lg:opacity-75"
              src="https://ik.imagekit.io/lrigu76hy/tailark/dna-video.mp4?updatedAt=1745736251477"
            />
          </div>
        </div>
      </section>
      <section className="bg-background pb-2">
        <div className="group relative m-auto max-w-7xl px-6">
          <div className="flex flex-col items-center md:flex-row">
            <div className="md:max-w-44 md:border-r md:pr-6">
              <p className="text-end text-sm text-muted-foreground">Powering the best teams</p>
            </div>
            <div className="relative py-6 md:w-[calc(100%-11rem)]">
              <InfiniteSlider
                speedOnHover={20}
                speed={40}
                gap={112}
              >
                {customerLogos.map((logo) => (
                  <div className="flex" key={logo.alt}>
                    <img
                      className="mx-auto w-fit dark:invert"
                      src={logo.src}
                      alt={logo.alt}
                      height={logo.height}
                      style={{ height: logo.height }}
                    />
                  </div>
                ))}
              </InfiniteSlider>

              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background" />
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background" />
              <ProgressiveBlur
                className="pointer-events-none absolute left-0 top-0 h-full w-20"
                direction="left"
                blurIntensity={1}
              />
              <ProgressiveBlur
                className="pointer-events-none absolute right-0 top-0 h-full w-20"
                direction="right"
                blurIntensity={1}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  </>
)

export default HeroSection
