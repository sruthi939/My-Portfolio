import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, ExternalLink } from 'lucide-react'
import { fishermenCase } from '@/lib/case-study'
import { Reveal } from '@/components/motion/reveal'
import { ScrollProgress } from '@/components/sections/scroll-progress'
import { Footer } from '@/components/sections/footer'

export const metadata: Metadata = {
    title: 'Smart Fishermen Safety System — Case Study',
    description:
        'A case study on designing and building a real-world safety platform that monitors fishermen, detects emergencies, and connects fishermen, families and rescue teams.',
    openGraph: {
        title: 'Smart Fishermen Safety System — Case Study',
        description:
            'Designing a multi-portal emergency safety platform for fishermen, families and rescue teams.',
        images: ['/projects/fishermen-dashboard.png'],
    },
}

export default function CaseStudyPage() {
    const c = fishermenCase

    return (
        <>
            <ScrollProgress />

            <div className="mx-auto max-w-4xl px-5 pt-28 pb-16">
                <Link
                    href="/#projects"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                    <ArrowLeft size={16} />
                    Back to projects
                </Link>

                {/* Header */}
                <header className="mt-8">
                    <Reveal>
                        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                            Case Study
                        </span>
                    </Reveal>
                    <Reveal delay={0.05}>
                        <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
                            {c.name}
                        </h1>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                            {c.tagline}
                        </p>
                    </Reveal>

                    <Reveal delay={0.15}>
                        <dl className="mt-10 grid grid-cols-2 gap-6 border-y border-border py-6 sm:grid-cols-4">
                            <Meta label="Role" value={c.role} />
                            <Meta label="Timeline" value={c.duration} />
                            <Meta label="Team" value={c.team} />
                            <Meta label="Design" value={c.designTools.join(', ')} />
                        </dl>
                    </Reveal>
                </header>

                {/* Cover */}
                <Reveal delay={0.1}>
                    <div className="relative mt-10 aspect-[16/10] overflow-hidden rounded-3xl border border-border">
                        <Image
                            src={c.cover.src || '/placeholder.svg'}
                            alt={c.cover.alt}
                            fill
                            sizes="(max-width: 896px) 100vw, 896px"
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                    </div>
                </Reveal>

                <div className="mt-6 flex flex-wrap gap-2">
                    {c.technologies.map((t) => (
                        <span
                            key={t}
                            className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-foreground/80"
                        >
                            {t}
                        </span>
                    ))}
                </div>

                {/* Sections */}
                <div className="mt-16 space-y-16 sm:space-y-24">
                    {c.sections.map((section) => (
                        <section key={section.index} className="scroll-mt-24">
                            <Reveal>
                                <div className="flex items-baseline gap-4">
                                    <span className="font-mono text-sm text-primary">
                                        {section.index}
                                    </span>
                                    <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                                        {section.title}
                                    </h2>
                                </div>
                            </Reveal>

                            <Reveal delay={0.05}>
                                <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                                    {section.body}
                                </p>
                            </Reveal>

                            {section.bullets && (
                                <Reveal delay={0.1}>
                                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                                        {section.bullets.map((b) => (
                                            <li
                                                key={b}
                                                className="flex items-start gap-3 rounded-2xl border border-border bg-card/40 p-4 text-sm text-foreground/90"
                                            >
                                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                                {b}
                                            </li>
                                        ))}
                                    </ul>
                                </Reveal>
                            )}

                            {section.image && (
                                <Reveal delay={0.1}>
                                    <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-3xl border border-border">
                                        <Image
                                            src={section.image.src || '/placeholder.svg'}
                                            alt={section.image.alt}
                                            fill
                                            sizes="(max-width: 896px) 100vw, 896px"
                                            className="object-cover"
                                        />
                                    </div>
                                </Reveal>
                            )}
                        </section>
                    ))}
                </div>

                {/* CTA */}
                <Reveal>
                    <div className="mt-20 flex flex-col items-center gap-6 rounded-3xl border border-border bg-card/50 p-10 text-center">
                        <h2 className="font-display text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
                            Interested in work like this?
                        </h2>
                        <div className="flex flex-wrap justify-center gap-3">
                            <Link
                                href="/#contact"
                                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
                            >
                                Get in touch
                                <ArrowUpRight size={16} />
                            </Link>
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                            >
                                <ExternalLink size={15} />
                                Live Demo
                            </a>
                        </div>
                    </div>
                </Reveal>
            </div>

            <Footer />
        </>
    )
}

function Meta({ label, value }: { label: string; value: string }) {
    return (
        <div>
            <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                {label}
            </dt>
            <dd className="mt-1.5 text-sm text-foreground">{value}</dd>
        </div>
    )
}
