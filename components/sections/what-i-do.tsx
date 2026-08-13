'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { CharacterDeskScene } from '@/components/3d/character-desk-scene'

const services = [
    {
        title: 'UI/UX DESIGNER',
        tagline: 'Building intuitive design systems & prototypes',
        description:
            'Crafting human-centered digital experiences, Figma design tokens, interactive wireframes, and responsive product interfaces focused on clarity, hierarchy, and usability.',
    },
    {
        title: 'FRONTEND DEVELOPER',
        tagline: 'Modern web development & scalable applications',
        description:
            'Building high-performance, accessible web applications using React, Next.js, TypeScript, Tailwind CSS, and interactive Three.js 3D graphics.',
    },
]

export function WhatIDo() {
    const [expanded, setExpanded] = useState<number | null>(0)

    return (
        <section id="what-i-do" className="relative bg-[#070609] py-32 sm:py-48 overflow-hidden">
            {/* Background Purple Glow Spill */}
            <div className="pointer-events-none absolute right-1/3 top-1/2 h-[550px] w-[550px] -translate-y-1/2 rounded-full bg-[#5A189A]/20 blur-[170px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

                    {/* LEFT HALF: 3D Character Desk Scene + WHAT I DO Heading */}
                    <div className="relative flex flex-col justify-between h-[480px] sm:h-[550px] w-full">
                        <div className="absolute inset-0 h-full w-full">
                            <CharacterDeskScene />
                        </div>
                        <div className="relative z-20 mt-auto pointer-events-none">
                            <h2 className="font-display text-5xl font-extrabold tracking-tight text-white uppercase sm:text-7xl lg:text-8xl">
                                WHAT I DO
                            </h2>
                        </div>
                    </div>

                    {/* RIGHT HALF: Bracket-Cornered Cards */}
                    <div className="space-y-8">
                        {services.map((service, index) => {
                            const isOpen = expanded === index
                            return (
                                <div
                                    key={service.title}
                                    className="group relative rounded-2xl border border-dashed border-white/20 bg-white/[0.02] p-8 backdrop-blur-xl transition-all duration-300 hover:border-accent/60 hover:bg-accent/[0.04]"
                                >
                                    {/* Bracket Corner Marks */}
                                    <div className="absolute top-2 left-2 h-3 w-3 border-t-2 border-l-2 border-white/40 group-hover:border-accent" />
                                    <div className="absolute top-2 right-2 h-3 w-3 border-t-2 border-r-2 border-white/40 group-hover:border-accent" />
                                    <div className="absolute bottom-2 left-2 h-3 w-3 border-b-2 border-l-2 border-white/40 group-hover:border-accent" />
                                    <div className="absolute bottom-2 right-2 h-3 w-3 border-b-2 border-r-2 border-white/40 group-hover:border-accent" />

                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h3 className="font-display text-2xl font-bold tracking-wider text-white uppercase sm:text-3xl">
                                                {service.title}
                                            </h3>
                                            <p className="mt-2 font-mono text-xs text-white/50 tracking-wide uppercase">
                                                {service.tagline}
                                            </p>
                                        </div>

                                        <button
                                            type="button"
                                            onClick={() => setExpanded(isOpen ? null : index)}
                                            data-cursor="OPEN"
                                            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 text-white/80 transition-colors hover:border-accent hover:text-accent"
                                        >
                                            <ChevronDown
                                                size={18}
                                                className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-accent' : ''}`}
                                            />
                                        </button>
                                    </div>

                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <p className="mt-6 border-t border-white/10 pt-4 font-sans text-sm leading-relaxed text-white/60">
                                                    {service.description}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>
        </section>
    )
}
