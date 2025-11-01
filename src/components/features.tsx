import Link from 'next/link'

export default function Features() {
    return (
        <section className="py-16 md:py-24 lg:py-32">
            <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-12 md:space-y-20">
                <div className="relative z-10 mx-auto max-w-3xl space-y-6 text-center md:space-y-8">
                    <h2 className="text-balance text-3xl font-normal sm:text-4xl md:text-5xl">Why Choose <span className="text-[#D13E08]">Presbo AI</span></h2>
                    <p className="text-base sm:text-lg text-muted-foreground whitespace-nowrap">Create stunning videos in seconds. No credit card, no subscription, no strings attached.</p>
                    <Link href="https://whop.com/apps/app_jRTbCpr815MbzA/" className="text-white hover:text-[#D13E08] transition-colors duration-200 inline-block text-sm sm:text-base">
                        Try for Free &gt;
                    </Link>
                </div>

                <div className="relative mx-auto grid max-w-5xl gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="relative rounded-2xl border border-orange-500/40 bg-gradient-to-br from-orange-950/20 via-transparent to-transparent backdrop-blur-2xl p-8 sm:p-10 space-y-4 hover:border-orange-500/80 hover:from-orange-950/40 transition-all duration-500 overflow-hidden group transform hover:scale-105 hover:-translate-y-1">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#D13E08]/40 to-[#ff5a2f]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                        <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#D13E08]/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <h3 className="text-lg sm:text-xl font-semibold relative z-10 text-white">AI Video & Podcast Generation</h3>
                        <p className="text-sm sm:text-base text-white/80 relative z-10">Transform text into videos and podcasts with 80+ templates and AI voices.</p>
                    </div>
                    <div className="relative rounded-2xl border border-purple-500/40 bg-gradient-to-br from-purple-950/20 via-transparent to-transparent backdrop-blur-2xl p-8 sm:p-10 space-y-4 hover:border-purple-500/80 hover:from-purple-950/40 transition-all duration-500 overflow-hidden group transform hover:scale-105 hover:-translate-y-1">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#AA41D4]/40 to-[#9333EA]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                        <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#AA41D4]/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <h3 className="text-lg sm:text-xl font-semibold relative z-10 text-white">Multi-Format Content</h3>
                        <p className="text-sm sm:text-base text-white/80 relative z-10">Create videos and podcasts from the same input with multiple modes.</p>
                    </div>
                    <div className="relative rounded-2xl border border-pink-500/40 bg-gradient-to-br from-pink-950/20 via-transparent to-transparent backdrop-blur-2xl p-8 sm:p-10 space-y-4 hover:border-pink-500/80 hover:from-pink-950/40 transition-all duration-500 overflow-hidden group transform hover:scale-105 hover:-translate-y-1">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#B94086]/40 to-[#ec4899]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                        <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#B94086]/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <h3 className="text-lg sm:text-xl font-semibold relative z-10 text-white">100+ Viral Hooks</h3>
                        <p className="text-sm sm:text-base text-white/80 relative z-10">Built-in library of proven hooks for attention-grabbing intros.</p>
                    </div>
                    <div className="relative rounded-2xl border border-blue-500/40 bg-gradient-to-br from-blue-950/20 via-transparent to-transparent backdrop-blur-2xl p-8 sm:p-10 space-y-4 hover:border-blue-500/80 hover:from-blue-950/40 transition-all duration-500 overflow-hidden group transform hover:scale-105 hover:-translate-y-1">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/40 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                        <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <h3 className="text-lg sm:text-xl font-semibold relative z-10 text-white">Series Organization</h3>
                        <p className="text-sm sm:text-base text-white/80 relative z-10">Organize content into structured series with playlists.</p>
                    </div>
                    <div className="relative rounded-2xl border border-green-500/40 bg-gradient-to-br from-green-950/20 via-transparent to-transparent backdrop-blur-2xl p-8 sm:p-10 space-y-4 hover:border-green-500/80 hover:from-green-950/40 transition-all duration-500 overflow-hidden group transform hover:scale-105 hover:-translate-y-1">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/40 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                        <div className="absolute -top-32 -right-32 w-64 h-64 bg-green-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <h3 className="text-lg sm:text-xl font-semibold relative z-10 text-white">Analytics Dashboard</h3>
                        <p className="text-sm sm:text-base text-white/80 relative z-10">Track views, engagement, and completion trends instantly.</p>
                    </div>
                    <div className="relative rounded-2xl border border-indigo-500/40 bg-gradient-to-br from-indigo-950/20 via-transparent to-transparent backdrop-blur-2xl p-8 sm:p-10 space-y-4 hover:border-indigo-500/80 hover:from-indigo-950/40 transition-all duration-500 overflow-hidden group transform hover:scale-105 hover:-translate-y-1">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/40 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                        <div className="absolute -top-32 -right-32 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <h3 className="text-lg sm:text-xl font-semibold relative z-10 text-white">Dual-View Experience</h3>
                        <p className="text-sm sm:text-base text-white/80 relative z-10">Creator dashboard and free member experience for viewers.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
