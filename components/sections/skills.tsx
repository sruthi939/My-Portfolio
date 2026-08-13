'use client'

import { motion } from 'framer-motion'
import { Reveal } from '@/components/motion/reveal'
import { TiltCard } from '@/components/motion/tilt-card'
import { SectionHeading } from '@/components/sections/section-heading'
import { skillGroups } from '@/lib/site'

export function Skills() {
    return (
        <section
            id="skills"
            className="relative overflow-hidden py-24 sm:py-32"
        >
            <div className="pointer-events-none absolute left-1/2 top-1/3 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]" />

            <div className="mx-auto max-w-6xl px-5">
                <SectionHeading
                    index="02"
                    eyebrow="Skills"
                    title="A toolkit that spans design and code."
                />

                <div className="mt-12 grid gap-5 sm:grid-cols-2">
                    {skillGroups.map((group, gi) => (
                        <Reveal key={group.title} delay={gi * 0.08}>
                            <TiltCard className="group h-full">
                                <div className="relative h-full overflow-hidden rounded-3xl border border-border bg-card/60 p-6 backdrop-blur-sm transition-colors group-hover:border-primary/40 sm:p-7">
                                    <div className="mb-5 flex items-center justify-between">
                                        <h3 className="font-display text-xl font-semibold tracking-tight">
                                            {group.title}
                                        </h3>
                                        <span className="font-mono text-xs text-muted-foreground">
                                            {String(gi + 1).padStart(2, '0')}
                                        </span>
                                    </div>

                                    <div className="flex flex-wrap gap-2.5">
                                        {group.items.map((item, i) => (
                                            <motion.span
                                                key={item}
                                                initial={{ opacity: 0, scale: 0.85 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.04, duration: 0.4 }}
                                                whileHover={{ y: -3 }}
                                                className="cursor-default rounded-full border border-border bg-secondary/50 px-3.5 py-1.5 text-sm text-foreground/90 transition-colors hover:border-accent/50 hover:text-foreground"
                                                style={{ transform: 'translateZ(30px)' }}
                                            >
                                                {item}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </TiltCard>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
