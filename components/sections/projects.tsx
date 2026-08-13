'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { Reveal } from '@/components/motion/reveal'
import { TiltCard } from '@/components/motion/tilt-card'
import { SectionHeading } from '@/components/sections/section-heading'
import { projects } from '@/lib/site'

export function Projects() {
    const featured = projects.find((p) => p.featured)!
    const rest = projects.filter((p) => !p.featured)

    return (
        <section id="projects" className="relative mx-auto max-w-6xl px-5 py-24 sm:py-32">
            <SectionHeading
                index="03"
                eyebrow="Projects"
                title="Selected work, from concept to shipped."
            />

            {/* Featured project */}
            <Reveal delay={0.1}>
                <div className="group mt-12 grid gap-8 overflow-hidden rounded-3xl border border-border bg-card/50 p-5 lg:grid-cols-2 lg:p-8">
                    <TiltCard max={7} className="order-1 lg:order-none">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
                            <Image
                                src={featured.image || '/placeholder.svg'}
                                alt={`${featured.name} dashboard interface`}
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                style={{ transform: 'translateZ(40px)' }}
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                        </div>
                    </TiltCard>

                    <div className="flex flex-col justify-center">
                        <span className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                            Featured Case Study
                        </span>
                        <h3 className="font-display text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
                            {featured.name}
                        </h3>
                        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                            {featured.solution}
                        </p>

                        <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <dt className="text-muted-foreground">Role</dt>
                                <dd className="mt-1 text-foreground">{featured.role}</dd>
                            </div>
                            <div>
                                <dt className="text-muted-foreground">Portals</dt>
                                <dd className="mt-1 text-foreground">
                                    Fisherman · Family · Rescue · Admin
                                </dd>
                            </div>
                        </dl>

                        <div className="mt-6 flex flex-wrap gap-2">
                            {featured.technologies.map((t) => (
                                <span
                                    key={t}
                                    className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-foreground/80"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link
                                href={featured.caseStudy}
                                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
                            >
                                View Case Study
                                <ArrowUpRight size={16} />
                            </Link>
                            <a
                                href={featured.liveDemo}
                                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                            >
                                <ExternalLink size={15} />
                                Live Demo
                            </a>
                        </div>
                    </div>
                </div>
            </Reveal>

            {/* Additional projects */}
            <div className="mt-6 grid gap-6 md:grid-cols-3">
                {rest.map((project, i) => (
                    <Reveal key={project.slug} delay={0.1 + i * 0.08}>
                        <motion.article
                            whileHover={{ y: -6 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                            className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card/50 transition-colors hover:border-primary/40"
                        >
                            <div className="relative aspect-[16/11] overflow-hidden">
                                <Image
                                    src={project.image || '/placeholder.svg'}
                                    alt={`${project.name} interface preview`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent opacity-80" />
                            </div>
                            <div className="flex flex-1 flex-col p-5">
                                <h3 className="font-display text-lg font-semibold tracking-tight">
                                    {project.name}
                                </h3>
                                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                                    {project.problem}
                                </p>
                                <div className="mt-4 flex flex-wrap gap-1.5">
                                    {project.technologies.slice(0, 3).map((t) => (
                                        <span
                                            key={t}
                                            className="rounded-full border border-border px-2.5 py-0.5 text-xs text-foreground/70"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={project.liveDemo}
                                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-accent"
                                >
                                    View project
                                    <ArrowUpRight size={15} />
                                </a>
                            </div>
                        </motion.article>
                    </Reveal>
                ))}
            </div>
        </section>
    )
}
