'use client'

import { motion } from 'framer-motion'
import { Download, ArrowDown } from 'lucide-react'
import { HeroAvatarScene } from '@/components/3d/hero-avatar-scene'
import { SocialLinks } from '@/components/sections/social-links'
import { site } from '@/lib/site'

export function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-[#070609] pt-24 pb-12"
        >
            {/* Background Purple Glow Spill */}
            <div className="pointer-events-none absolute top-1/2 left-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[150px]" />

            {/* Left Margin Vertical Social Links */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute left-6 top-1/2 z-30 hidden -translate-y-1/2 xl:block"
            >
                <SocialLinks vertical />
            </motion.div>

            {/* Main Centerpiece 3D Canvas */}
            <div className="absolute inset-0 z-10 h-full w-full">
                <HeroAvatarScene />
            </div>

            {/* Hero Overlay Typography Container */}
            <div className="relative z-20 mx-auto flex w-full max-w-[85rem] flex-col justify-between px-6 pointer-events-none min-h-[82svh] py-6">
                <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-36">

                    {/* Left Side Typography: HELLO, I'M SRUTHI ALEX */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="pointer-events-auto flex flex-col items-start lg:pl-8"
                    >
                        <span className="font-mono text-xs font-semibold tracking-[0.3em] text-accent uppercase text-glow">
                            HELLO, I&apos;M
                        </span>
                        <h1 className="mt-2 font-display text-4xl font-extrabold tracking-tight text-white uppercase sm:text-5xl lg:text-6xl leading-tight">
                            {site.name}
                        </h1>
                        <p className="mt-4 max-w-xs font-mono text-xs tracking-wider text-white/50 leading-relaxed uppercase">
                            {site.location} &mdash; {site.tagline}
                        </p>
                    </motion.div>

                    {/* Right Side Typography: UI/UX DESIGNER & FRONTEND DEVELOPER */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="pointer-events-auto flex flex-col items-start lg:items-end text-left lg:text-right lg:pr-8"
                    >
                        <span className="font-mono text-xs font-semibold tracking-[0.3em] text-accent/80 uppercase text-glow">
                            CREATIVE DESIGN &amp; CODE
                        </span>
                        <h2 className="mt-2 font-display text-2xl font-light tracking-tight text-white uppercase sm:text-4xl lg:text-5xl leading-tight">
                            UI/UX DESIGNER
                        </h2>
                        <h2 className="mt-1 font-display text-2xl font-semibold tracking-tight text-accent uppercase sm:text-4xl lg:text-5xl leading-tight text-glow">
                            FRONTEND DEVELOPER
                        </h2>

                        {/* RESUME Action Button */}
                        <div className="mt-6 flex items-center gap-4">
                            <a
                                href="/resume.pdf"
                                data-cursor="OPEN"
                                className="group inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-5 py-2.5 font-mono text-xs font-semibold tracking-widest text-white uppercase transition-all duration-300 hover:border-accent hover:bg-accent hover:text-black hover:shadow-[0_0_25px_rgba(184,76,255,0.7)]"
                            >
                                <Download size={14} className="transition-transform group-hover:scale-110" />
                                RESUME
                            </a>
                        </div>
                    </motion.div>

                </div>

                {/* Bottom Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="pointer-events-auto mx-auto mt-8 flex flex-col items-center gap-2"
                >
                    <a
                        href="#about"
                        data-cursor="OPEN"
                        className="group flex flex-col items-center gap-2 font-mono text-[10px] tracking-[0.3em] text-white/40 uppercase transition-colors hover:text-accent"
                    >
                        <span>SCROLL</span>
                        <ArrowDown size={14} className="animate-bounce text-accent" />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}




