'use client'

import { motion } from 'framer-motion'
import { Reveal } from '@/components/motion/reveal'
import { SectionHeading } from '@/components/sections/section-heading'
import { experience } from '@/lib/site'

const kindColor: Record<string, string> = {
    Education: 'text-primary border-primary/40 bg-primary/10',
    Internship: 'text-accent border-accent/40 bg-accent/10',
    Project: 'text-primary border-primary/40 bg-primary/10',
    Certification: 'text-accent border-accent/40 bg-accent/10',
    Achievement: 'text-primary border-primary/40 bg-primary/10',
}

export function Experience() {
    return (
        <section id="experience" className="relative overflow-hidden py-24 sm:py-32">
            <div className="mx-auto max-w-6xl px-5">
                <SectionHeading
                    index="04"
                    eyebrow="Experience"
                    title="A path shaped by learning and building."
                />
            </div>

            <div className="relative mt-14">
                {/* Horizontal timeline track */}
                <div className="no-scrollbar overflow-x-auto pb-6">
                    <div className="mx-auto flex min-w-max gap-6 px-5 md:max-w-none md:px-[max(1.25rem,calc((100vw-72rem)/2))]">
                        {/* connecting line */}
                        <div className="pointer-events-none absolute left-0 right-0 top-[92px] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

                        {experience.map((item, i) => (
                            <Reveal key={item.title} delay={i * 0.08} className="relative">
                                <div className="w-[280px] shrink-0 sm:w-[320px]">
                                    <div className="mb-6 flex flex-col items-start gap-3">
                                        <span
                                            className={`rounded-full border px-3 py-1 text-xs font-medium ${kindColor[item.kind]}`}
                                        >
                                            {item.kind}
                                        </span>
                                        {/* node */}
                                        <motion.span
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.2 + i * 0.08, type: 'spring' }}
                                            className="relative flex h-4 w-4 items-center justify-center"
                                        >
                                            <span className="absolute h-4 w-4 animate-ping rounded-full bg-primary/40" />
                                            <span className="h-3 w-3 rounded-full border border-primary bg-background" />
                                        </motion.span>
                                    </div>

                                    <div className="rounded-2xl border border-border bg-card/50 p-5 transition-colors hover:border-primary/40">
                                        <p className="font-mono text-xs text-primary">{item.period}</p>
                                        <h3 className="mt-2 font-display text-lg font-semibold tracking-tight">
                                            {item.title}
                                        </h3>
                                        <p className="mt-1 text-sm text-muted-foreground">{item.org}</p>
                                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                            {item.detail}
                                        </p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
                <p className="mt-2 px-5 text-center text-xs text-muted-foreground md:hidden">
                    Swipe to explore the timeline →
                </p>
            </div>
        </section>
    )
}
