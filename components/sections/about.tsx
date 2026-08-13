'use client'

import { motion } from 'framer-motion'
import { CountUp } from '@/components/motion/count-up'
import { Reveal } from '@/components/motion/reveal'
import { stats } from '@/lib/site'

export function About() {
    return (
        <section id="about" className="relative bg-[#070609] py-32 sm:py-48 overflow-hidden">
            {/* Ambient Background 3D Glow */}
            <div className="pointer-events-none absolute right-1/4 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-accent/15 blur-[160px]" />

            <div className="mx-auto max-w-7xl px-6">
                <Reveal>
                    <span className="font-mono text-xs font-semibold tracking-[0.3em] text-accent uppercase text-glow">
                        ABOUT ME
                    </span>
                    <h2 className="mt-3 max-w-4xl font-display text-4xl font-light tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.05]">
                        Designing ideas.{' '}
                        <span className="font-semibold text-accent text-glow">Building experiences.</span>
                    </h2>
                </Reveal>

                <div className="mt-16 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16 items-center">
                    <Reveal delay={0.2}>
                        <p className="font-sans text-lg sm:text-2xl font-light text-white/80 leading-relaxed">
                            I combine UI/UX design, frontend development and emerging AI tools to create digital experiences that are beautiful, intuitive and functional.
                        </p>
                        <p className="mt-6 font-sans text-sm sm:text-base text-white/50 leading-relaxed">
                            Sitting at the cross-section of aesthetic design and robust web architecture, I bridge the gap between creative vision and production code. Every micro-interaction, 3D element, and layout is built to engage users effortlessly.
                        </p>
                    </Reveal>

                    {/* Stat Panels */}
                    <div className="grid grid-cols-2 gap-4">
                        {stats.map((stat, i) => (
                            <Reveal key={stat.label} delay={0.25 + i * 0.08}>
                                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:border-accent/50 hover:bg-accent/[0.08]">
                                    <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/20 blur-2xl transition-opacity group-hover:opacity-100" />
                                    <p className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
                                        <CountUp to={stat.value} suffix={stat.suffix} />
                                    </p>
                                    <p className="mt-2 font-mono text-xs text-white/50">{stat.label}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

