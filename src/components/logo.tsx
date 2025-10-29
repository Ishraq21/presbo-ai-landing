import Image from "next/image"

const Logo = () => (
  <div className="flex items-center gap-3 font-semibold">
    <Image
      src="/logos/presbo-ai-transparent.png"
      alt="Presbo AI Logo"
      width={40}
      height={40}
      className="size-10 object-contain"
      priority
    />
    <span className="text-lg font-semibold text-foreground">Presbo AI</span>
  </div>
)

export { Logo }
