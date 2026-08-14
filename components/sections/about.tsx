'use client'

import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'
import { HeroAvatarScene } from '@/components/3d/hero-avatar-scene'

export function About() {
    return (
        <section id="about" className="relative bg-[#070609] py-32 sm:py-44 overflow-hidden">
            {/* Background Glow */}
            <div className="pointer-events-none absolute left-1/3 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[160px]" />

            <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-6 lg:grid-cols-2 lg:gap-12">

                {/* LEFT HALF: 3D Avatar Bust */}
                <div className="relative h-[450px] sm:h-[540px] w-full">
                    <HeroAvatarScene />
                </div>

                {/* RIGHT HALF: ABOUT ME Header & Bio */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative flex flex-col items-start justify-center pr-4"
                >
                    {/* Glowing Orb Highlight next to text */}
                    <div className="pointer-events-none absolute -left-10 top-2 h-9 w-9 rounded-full bg-accent/80 blur-md shadow-[0_0_20px_#B84CFF]" />

                    <h2 className="font-mono text-base font-semibold tracking-[0.4em] text-accent uppercase text-glow">
                        A B O U T &nbsp; M E
                    </h2>

                    <p className="mt-8 font-sans text-lg sm:text-2xl font-medium text-white/90 leading-relaxed tracking-wide">
                        I am a UI/UX Designer &amp; Frontend Developer based in Kerala, India. I build intuitive digital systems, design frameworks, and modern 3D web applications.
                    </p>

                    <p className="mt-4 font-sans text-sm sm:text-base text-white/60 leading-relaxed">
                        My expertise includes React, Next.js, TypeScript, Tailwind CSS, Three.js, and emerging AI tools. I have a passion for high-end creative interactions, motion with intent, and production-ready code.
                    </p>

                    {/* RESUME Link at bottom right */}
                    <div className="mt-12 flex w-full justify-end">
                        <a
                            href="/resume.pdf"
                            data-cursor="OPEN"
                            className="group flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-white/70 uppercase transition-colors hover:text-accent"
                        >
                            <span>RESUME</span>
                            <FileText size={14} className="transition-transform group-hover:scale-110" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}


