const Logo = () => (
  <div className="flex items-center gap-2 font-semibold">
    <span className="flex size-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#D13E08] to-[#f97316] text-lg text-white shadow-lg shadow-[#D13E08]/30">
      P
    </span>
    <div className="hidden flex-col leading-none sm:flex">
      <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Presbo</span>
      <span className="text-lg font-semibold text-foreground">AI</span>
    </div>
  </div>
)

export { Logo }
