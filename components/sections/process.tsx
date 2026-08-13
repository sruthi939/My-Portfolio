'use client'

import { motion } from 'framer-motion'
import { processSteps } from '@/lib/site'

export function Process() {
    return (
        <section id="process" className="relative bg-[#070609] py-32 sm:py-48 overflow-hidden">
            {/* Background Glow */}
            <div className="pointer-events-none absolute left-1/3 bottom-1/4 h-[550px] w-[550px] rounded-full bg-accent/10 blur-[170px]" />

            <div className="mx-auto max-w-7xl px-6">
                {/* Heading */}
                <div className="text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-mono text-xs font-semibold tracking-[0.3em] text-accent uppercase text-glow"
                    >
                        METHODOLOGY
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-3 font-display text-4xl font-light tracking-tight text-white sm:text-6xl uppercase"
                    >
                        DESIGN <span className="font-semibold text-accent text-glow">PROCESS</span>
                    </motion.h2>
                </div>

                {/* Horizontal Process Grid / Gallery */}
                <div className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-8">
                    {processSteps.map((step, i) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08, duration: 0.5 }}
                            className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl transition-all duration-300 hover:border-accent/50 hover:bg-accent/[0.06] hover:shadow-[0_0_40px_rgba(184,76,255,0.25)]"
                        >
                            {/* Large Number */}
                            <span className="font-mono text-4xl font-extrabold tracking-widest text-accent/70 group-hover:text-accent transition-colors text-glow">
                                {step.number}
                            </span>

                            {/* Title & Detail */}
                            <div className="mt-12">
                                <h3 className="font-mono text-sm font-bold tracking-widest text-white uppercase group-hover:text-accent transition-colors">
                                    {step.title}
                                </h3>
                                <p className="mt-3 font-sans text-xs leading-relaxed text-white/50">
                                    {step.detail}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

