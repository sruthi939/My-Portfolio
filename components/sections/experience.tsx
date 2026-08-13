'use client'

import { motion } from 'framer-motion'
import { Reveal } from '@/components/motion/reveal'
import { experience } from '@/lib/site'

export function Experience() {
    return (
        <section id="experience" className="relative bg-[#070609] py-32 sm:py-48">
            {/* Background Glow Spill */}
            <div className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[150px]" />

            <div className="mx-auto max-w-4xl px-6">
                {/* Centered Heading */}
                <div className="text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-mono text-xs font-semibold tracking-[0.3em] text-accent uppercase text-glow"
                    >
                        TIMELINE
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-3 font-display text-4xl font-light tracking-tight text-white sm:text-6xl"
                    >
                        My career &amp;{' '}
                        <span className="font-semibold text-accent text-glow">experience</span>
                    </motion.h2>
                </div>

                {/* Minimal Vertical Timeline */}
                <div className="relative mt-24">
                    {/* Vertical Center Line */}
                    <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-accent/0 via-accent/30 to-accent/0" />

                    <div className="space-y-16">
                        {experience.map((item, i) => {
                            const isEven = i % 2 === 0
                            return (
                                <Reveal
                                    key={item.title}
                                    delay={i * 0.1}
                                    className="relative flex flex-col sm:flex-row items-start"
                                >
                                    {/* Content Card */}
                                    <div
                                        className={`w-full sm:w-[45%] pl-14 sm:pl-0 ${
                                            isEven ? 'sm:mr-auto sm:text-right sm:pr-12' : 'sm:ml-auto sm:text-left sm:pl-12'
                                        }`}
                                    >
                                        <div className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:border-accent/40 hover:bg-accent/[0.05] hover:shadow-[0_0_30px_rgba(184,76,255,0.2)]">
                                            <div className="flex items-center gap-3 justify-between sm:justify-start">
                                                <span className="font-mono text-xs font-semibold tracking-wider text-accent uppercase">
                                                    {item.kind}
                                                </span>
                                                <span className="font-mono text-[11px] text-white/40">
                                                    {item.period}
                                                </span>
                                            </div>
                                            <h3 className="mt-2 font-display text-xl font-medium text-white group-hover:text-accent transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className="mt-1 font-sans text-xs text-white/60">{item.org}</p>
                                            <p className="mt-3 font-sans text-xs leading-relaxed text-white/50">
                                                {item.detail}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Timeline Dot Node */}
                                    <div className="absolute left-6 sm:left-1/2 top-6 flex h-4 w-4 -translate-x-1/2 items-center justify-center">
                                        <span className="absolute h-4 w-4 animate-ping rounded-full bg-accent/40 opacity-75" />
                                        <span className="h-2.5 w-2.5 rounded-full border border-white bg-accent shadow-[0_0_10px_#B84CFF]" />
                                    </div>
                                </Reveal>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

