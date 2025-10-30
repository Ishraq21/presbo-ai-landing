import Link from 'next/link'

export default function Features() {
    return (
        <section className="py-16 md:py-24 lg:py-32">
            <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-12 md:space-y-20">
                <div className="relative z-10 mx-auto max-w-3xl space-y-6 text-center md:space-y-8">
                    <h2 className="text-balance text-3xl font-normal sm:text-4xl md:text-5xl">Why Choose <span className="text-[#D13E08]">Presbo AI</span></h2>
                    <p className="text-base sm:text-lg text-muted-foreground whitespace-nowrap">Powered by cutting-edge AI technology to help you create stunning content faster than ever before.</p>
                    <Link href="#request-demo" className="text-white hover:text-[#D13E08] transition-colors duration-200 inline-block text-sm sm:text-base">
                        Request a Demo &gt;
                    </Link>
                </div>

                <div className="relative mx-auto grid max-w-5xl gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="relative rounded-2xl border border-orange-500/60 bg-gradient-to-br from-[#D13E08]/55 to-[#ff5a2f]/50 backdrop-blur-xl p-8 sm:p-10 space-y-4 hover:border-orange-500/80 hover:bg-gradient-to-br hover:from-[#D13E08]/65 hover:to-[#ff5a2f]/60 transition-all duration-300 overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#D13E08]/35 to-[#ff5a2f]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <h3 className="text-lg sm:text-xl font-semibold relative z-10 text-white">AI Video & Podcast Generation</h3>
                        <p className="text-sm sm:text-base text-white/90 relative z-10">Transform text into videos and podcasts with 80+ templates and AI voices.</p>
                    </div>
                    <div className="relative rounded-2xl border border-purple-500/60 bg-gradient-to-br from-[#AA41D4]/55 to-[#9333EA]/50 backdrop-blur-xl p-8 sm:p-10 space-y-4 hover:border-purple-500/80 hover:bg-gradient-to-br hover:from-[#AA41D4]/65 hover:to-[#9333EA]/60 transition-all duration-300 overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#AA41D4]/35 to-[#9333EA]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <h3 className="text-lg sm:text-xl font-semibold relative z-10 text-white">Multi-Format Content</h3>
                        <p className="text-sm sm:text-base text-white/90 relative z-10">Create videos and podcasts from the same input with multiple modes.</p>
                    </div>
                    <div className="relative rounded-2xl border border-pink-500/60 bg-gradient-to-br from-[#B94086]/55 to-[#ec4899]/50 backdrop-blur-xl p-8 sm:p-10 space-y-4 hover:border-pink-500/80 hover:bg-gradient-to-br hover:from-[#B94086]/65 hover:to-[#ec4899]/60 transition-all duration-300 overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#B94086]/35 to-[#ec4899]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <h3 className="text-lg sm:text-xl font-semibold relative z-10 text-white">100+ Viral Hooks</h3>
                        <p className="text-sm sm:text-base text-white/90 relative z-10">Built-in library of proven hooks for attention-grabbing intros.</p>
                    </div>
                    <div className="relative rounded-2xl border border-blue-500/60 bg-gradient-to-br from-blue-500/55 to-cyan-500/50 backdrop-blur-xl p-8 sm:p-10 space-y-4 hover:border-blue-500/80 hover:bg-gradient-to-br hover:from-blue-500/65 hover:to-cyan-500/60 transition-all duration-300 overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/35 to-cyan-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <h3 className="text-lg sm:text-xl font-semibold relative z-10 text-white">Series Organization</h3>
                        <p className="text-sm sm:text-base text-white/90 relative z-10">Organize content into structured series with playlists.</p>
                    </div>
                    <div className="relative rounded-2xl border border-green-500/60 bg-gradient-to-br from-green-500/55 to-emerald-500/50 backdrop-blur-xl p-8 sm:p-10 space-y-4 hover:border-green-500/80 hover:bg-gradient-to-br hover:from-green-500/65 hover:to-emerald-500/60 transition-all duration-300 overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/35 to-emerald-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <h3 className="text-lg sm:text-xl font-semibold relative z-10 text-white">Analytics Dashboard</h3>
                        <p className="text-sm sm:text-base text-white/90 relative z-10">Track views, engagement, and completion trends instantly.</p>
                    </div>
                    <div className="relative rounded-2xl border border-indigo-500/60 bg-gradient-to-br from-indigo-500/55 to-purple-500/50 backdrop-blur-xl p-8 sm:p-10 space-y-4 hover:border-indigo-500/80 hover:bg-gradient-to-br hover:from-indigo-500/65 hover:to-purple-500/60 transition-all duration-300 overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/35 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <h3 className="text-lg sm:text-xl font-semibold relative z-10 text-white">Dual-View Experience</h3>
                        <p className="text-sm sm:text-base text-white/90 relative z-10">Creator dashboard and free member experience for viewers.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
