'use client'

import { motion } from 'framer-motion'
import { Reveal } from '@/components/motion/reveal'
import { SectionHeading } from '@/components/sections/section-heading'
import { processSteps } from '@/lib/site'

export function Process() {
    return (
        <section className="relative mx-auto max-w-6xl px-5 py-24 sm:py-32">
            <SectionHeading
                index="05"
                eyebrow="Design Process"
                title="How an idea becomes a shipped product."
            />

            <div className="relative mt-14">
                {/* vertical spine */}
                <div className="absolute left-[19px] top-2 h-full w-px bg-gradient-to-b from-primary/60 via-border to-transparent md:left-1/2 md:-translate-x-1/2" />

                <ol className="space-y-8 md:space-y-12">
                    {processSteps.map((step, i) => (
                        <li key={step.title} className="relative">
                            <Reveal delay={i * 0.05}>
                                <div
                                    className={`flex items-start gap-6 md:w-[calc(50%-2rem)] ${i % 2 === 1 ? 'md:ml-auto md:flex-row' : ''
                                        }`}
                                >
                                    <motion.span
                                        initial={{ scale: 0, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                                        className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-card font-mono text-sm text-primary md:absolute ${i % 2 === 1
                                                ? 'md:-left-[3.25rem]'
                                                : 'md:-right-[3.25rem] md:left-auto'
                                            }`}
                                    >
                                        {String(i + 1).padStart(2, '0')}
                                    </motion.span>

                                    <div className="rounded-2xl border border-border bg-card/40 p-5 transition-colors hover:border-primary/40">
                                        <h3 className="font-display text-lg font-semibold tracking-tight">
                                            {step.title}
                                        </h3>
                                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                                            {step.detail}
                                        </p>
                                    </div>
                                </div>
                            </Reveal>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    )
}
