"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { HeroHeader } from "@/components/header"
import { Button } from "@/components/ui/button"

const HeroSection = () => (
  <>
    <HeroHeader />
    <main className="overflow-x-hidden">
      <section>
        <div className="py-24 md:pb-16 lg:pb-20 lg:pt-72">
          <div className="relative mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-white/70 backdrop-blur">
                Presbo AI on Whop
              </div>
              <h1 className="mt-8 max-w-2xl text-balance text-5xl md:text-6xl lg:mt-16 xl:text-7xl">
                Create 10x Faster with <span className="text-[#D13E08]">Presbo AI.</span> More Engagement. More Revenue.
              </h1>
              <p className="mt-8 max-w-2xl text-balance text-lg text-muted-foreground">
                Transform text, notes, and scripts into stunning explainer videos and podcasts for your <span className="text-[#D13E08]">Whop</span> community with AI.
              </p>

              <div className="mt-12 max-w-2xl flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-full pl-5 pr-3 text-base w-fit bg-gradient-to-r from-[#D13E08] to-[#ff5a2f] hover:from-[#b83206] hover:to-[#e74b26] text-white shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <Link href="#get-started">
                    <span className="text-nowrap">Start Creating</span>
                    <ChevronRight className="ml-1" />
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
      <section className="bg-background py-8 md:pb-0 lg:pb-0">
        <div className="relative mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
          <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
            <p className="max-w-2xl text-balance text-lg text-muted-foreground">
              Looking to earn, not create? <Link href="https://whop.com/thebuybox/thebuybox?a=mirzaishraq" target="_blank" className="text-[#D13E08] hover:text-[#ff5a2f] transition-colors">Click here.</Link>
            </p>
          </div>
        </div>
      </section>
    </main>
    <footer className="bg-background py-2 px-6 lg:px-12 fixed bottom-0 left-0 right-0 text-center">
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Presbo AI. All rights reserved.
      </p>
    </footer>
  </>
)

export default HeroSection
