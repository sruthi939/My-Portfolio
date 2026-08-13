'use client'

import { Download, Eye, FileText } from 'lucide-react'
import { Reveal } from '@/components/motion/reveal'
import { TiltCard } from '@/components/motion/tilt-card'
import { Magnetic } from '@/components/motion/magnetic'
import { site } from '@/lib/site'

export function Resume() {
    return (
        <section className="relative mx-auto max-w-6xl px-5 py-16 sm:py-20">
            <Reveal>
                <TiltCard max={6} className="group">
                    <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card via-card/70 to-card p-8 sm:p-12">
                        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
                        <div className="pointer-events-none absolute -bottom-16 left-1/4 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />

                        <div
                            className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center"
                            style={{ transform: 'translateZ(40px)' }}
                        >
                            <div>
                                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground">
                                    <FileText size={13} className="text-primary" />
                                    Resume
                                </span>
                                <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
                                    Everything, on one page.
                                </h2>
                                <p className="mt-2 max-w-md text-pretty text-muted-foreground">
                                    A concise overview of {site.name}&apos;s experience, skills and
                                    selected work — ready for your review.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <Magnetic>
                                    <a
                                        href="/resume.pdf"
                                        className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
                                    >
                                        <Download size={16} />
                                        Download Resume
                                    </a>
                                </Magnetic>
                                <Magnetic>
                                    <a
                                        href="/resume.pdf"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                                    >
                                        <Eye size={16} />
                                        View Resume
                                    </a>
                                </Magnetic>
                            </div>
                        </div>
                    </div>
                </TiltCard>
            </Reveal>
        </section>
    )
}
