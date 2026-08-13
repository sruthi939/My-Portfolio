'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Download, MapPin } from 'lucide-react'
import { Hero3D } from '@/components/three/hero-3d'
import { Magnetic } from '@/components/motion/magnetic'
import { SocialLinks } from '@/components/sections/social-links'
import { site } from '@/lib/site'

export function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16"
        >
            {/* Ambient background */}
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
            <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-primary/15 blur-[130px]" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-accent/10 blur-[130px]" />

            {/* 3D scene: right on desktop, subtle backdrop on mobile */}
            <div className="absolute inset-y-0 right-0 h-full w-full md:w-[55%]">
                <div className="h-full w-full opacity-70 md:opacity-100">
                    <Hero3D />
                </div>
            </div>

            <div className="relative z-10 mx-auto w-full max-w-6xl px-5">
                <div className="max-w-2xl">
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1.5 text-xs tracking-wide text-muted-foreground backdrop-blur-sm"
                    >
                        <MapPin size={13} className="text-accent" />
                        {site.location}
                        <span className="text-border">•</span>
                        {site.tagline}
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="font-mono text-sm uppercase tracking-[0.25em] text-primary"
                    >
                        Hello, I&apos;m {site.name}
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 22 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-3 font-display text-5xl font-semibold leading-[0.98] tracking-tight text-balance sm:text-6xl lg:text-7xl"
                    >
                        UI/UX Designer
                        <br />
                        <span className="text-glow bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                            &amp; Frontend Developer
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
                    >
                        I design intuitive digital experiences and transform them into fast,
                        responsive and beautiful web applications.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.65 }}
                        className="mt-9 flex flex-wrap items-center gap-3"
                    >
                        <Magnetic>
                            <a
                                href="#projects"
                                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_8px_30px_-8px_var(--primary)] transition-transform hover:scale-[1.03]"
                            >
                                View My Work
                            </a>
                        </Magnetic>
                        <Magnetic>
                            <a
                                href="/resume.pdf"
                                className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-6 py-3 text-sm font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-secondary"
                            >
                                <Download size={16} />
                                Download Resume
                            </a>
                        </Magnetic>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.8 }}
                        className="mt-10"
                    >
                        <SocialLinks />
                    </motion.div>
                </div>
            </div>

            <motion.a
                href="#about"
                aria-label="Scroll to about"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted-foreground md:flex"
            >
                <span className="tracking-widest uppercase">Scroll</span>
                <ArrowDown size={16} className="animate-bounce text-primary" />
            </motion.a>
        </section>
    )
}
