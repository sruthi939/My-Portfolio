'use client'

import { motion } from 'framer-motion'
import { experience } from '@/lib/site'

const timelineItems = [
    {
        role: 'Learning & Building',
        category: 'Self-Development & AI',
        year: 'NOW',
        detail: 'Continuously exploring emerging design frameworks, 3D web graphics, AI agents, and pushing the boundaries of what is possible in frontend engineering.',
    },
    {
        role: 'Lead UI/UX & Frontend',
        category: 'Smart Fishermen Safety System',
        year: '2025',
        detail: 'Designed and shipped a multi-portal emergency safety platform connecting fishermen, families, and rescue teams with real-time alerts.',
    },
    {
        role: 'Frontend Developer Intern',
        category: 'Product Studio',
        year: '2024',
        detail: 'Shipped production React components and design-system primitives used across multiple enterprise products.',
    },
    {
        role: 'B.Tech, Computer Science',
        category: 'AKTU University',
        year: '2023',
        detail: 'Focused on human-computer interaction, web engineering, UI/UX research, and modern frontend application development.',
    },
]

export function Experience() {
    return (
        <section id="experience" className="relative bg-[#070609] py-32 sm:py-48 overflow-hidden">
            {/* Background Glow */}
            <div className="pointer-events-none absolute right-1/4 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-accent/15 blur-[160px]" />

            <div className="mx-auto max-w-6xl px-6">
                {/* Centered Heading */}
                <div className="text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-display text-4xl font-light tracking-tight text-white sm:text-6xl"
                    >
                        My career &amp; <br />
                        <span className="font-semibold text-accent text-glow">experience</span>
                    </motion.h2>

                    {/* Glowing Purple Orb Top Node with Vertical Drop Line */}
                    <div className="mt-8 flex flex-col items-center">
                        <div className="relative flex h-8 w-8 items-center justify-center">
                            <span className="absolute h-8 w-8 animate-ping rounded-full bg-accent/40 opacity-75" />
                            <span className="h-5 w-5 rounded-full border border-white bg-accent shadow-[0_0_20px_#B84CFF]" />
                        </div>
                        <div className="h-16 w-px bg-gradient-to-b from-accent via-accent/50 to-transparent" />
                    </div>
                </div>

                {/* 3-Column Timeline Alignment Grid */}
                <div className="mt-16 space-y-16">
                    {timelineItems.map((item, i) => (
                        <motion.div
                            key={item.role}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="grid grid-cols-1 gap-4 items-baseline md:grid-cols-[1fr_120px_1.4fr] lg:gap-8"
                        >
                            {/* Role Column */}
                            <div>
                                <h3 className="font-display text-2xl font-bold tracking-tight text-white/90 sm:text-3xl">
                                    {item.role}
                                </h3>
                                <p className="mt-1 font-mono text-xs text-accent uppercase tracking-wider">
                                    {item.category}
                                </p>
                            </div>

                            {/* Year Column */}
                            <div>
                                <span className="font-display text-3xl font-extrabold tracking-widest text-white/40 sm:text-4xl">
                                    {item.year}
                                </span>
                            </div>

                            {/* Detail Description Column */}
                            <div>
                                <p className="font-sans text-xs sm:text-sm text-white/50 leading-relaxed">
                                    {item.detail}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}


