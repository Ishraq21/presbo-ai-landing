"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { HeroHeader } from "@/components/header"
import { Button } from "@/components/ui/button"
import Features from "@/components/features"

const HeroSection = () => (
  <>
    <HeroHeader />
    <main className="overflow-x-hidden pb-16 md:pb-12 lg:pb-0">
      <section>
        <div className="py-20 pt-24 md:py-24 md:pt-28 lg:pb-20 lg:pt-72">
          <div className="relative mx-auto flex max-w-7xl flex-col px-4 sm:px-6 lg:block lg:px-12">
            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-white/70 backdrop-blur">
                Presbo AI on Whop
              </div>
              <h1 className="mt-6 sm:mt-8 max-w-2xl text-balance text-3xl sm:text-5xl md:text-6xl lg:mt-16 lg:max-w-4xl xl:text-7xl">
                Create 10x Faster with <span className="text-[#D13E08]">Presbo AI.</span> More Engagement. More Revenue.
              </h1>
              <p className="mt-6 sm:mt-8 max-w-2xl text-balance text-base sm:text-lg text-muted-foreground">
                Transform text, notes, and scripts into stunning explainer videos and podcasts for your <span className="text-[#D13E08]">Whop</span> community with AI.
              </p>

              <div className="mt-10 sm:mt-12 w-fit sm:max-w-2xl mx-auto sm:mx-0 flex flex-col gap-4 sm:flex-row sm:items-center">
                {/* <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-full pl-5 pr-3 text-base w-fit bg-gradient-to-r from-[#D13E08] to-[#ff5a2f] hover:from-[#b83206] hover:to-[#e74b26] text-white shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <Link href="https://whop.com/apps/app_jRTbCpr815MbzA/">
                    <span className="text-nowrap">Start Creating</span>
                    <ChevronRight className="ml-1" />
                  </Link>
                </Button> */}
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-full pl-5 pr-3 text-base w-fit bg-gradient-to-r from-[#D13E08] to-[#ff5a2f] hover:from-[#b83206] hover:to-[#e74b26] text-white shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <Link href="https://form.typeform.com/to/h16ar2HG">
                    <span className="text-nowrap">Join Waitlist</span>
                    <ChevronRight className="ml-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Features />
    </main>
    <footer className="bg-background px-4 sm:px-6 lg:px-12 fixed bottom-0 left-0 right-0 text-center py-3">
      <p className="text-xs sm:text-sm text-muted-foreground">
        © 2025 Presbo AI. All rights reserved.
      </p>
    </footer>
  </>
)

export default HeroSection
