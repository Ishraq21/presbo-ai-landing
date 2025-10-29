import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "next-themes"
import { cn } from "@/lib/utils"
import "@/app/globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
})

export const metadata: Metadata = {
  title: "Presbo AI — Transform Text Into Stunning Video",
  description:
    "Presbo AI is the fastest way to generate narrated video presentations from text using AI-powered storytelling."
}

type RootLayoutProps = {
  children: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en" suppressHydrationWarning>
    <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        {children}
      </ThemeProvider>
    </body>
  </html>
)

export default RootLayout
