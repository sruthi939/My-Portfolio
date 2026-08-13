import { CountUp } from '@/components/motion/count-up'
import { Reveal } from '@/components/motion/reveal'
import { SectionHeading } from '@/components/sections/section-heading'
import { stats } from '@/lib/site'

export function About() {
    return (
        <section id="about" className="relative mx-auto max-w-6xl px-5 py-24 sm:py-32">
            <SectionHeading
                index="01"
                eyebrow="About"
                title="Turning ideas into digital experiences."
            />

            <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
                <Reveal delay={0.1}>
                    <div className="space-y-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                        <p>
                            I sit at the intersection of design and engineering. I combine{' '}
                            <span className="text-foreground">UX thinking</span>,{' '}
                            <span className="text-foreground">visual design</span> and{' '}
                            <span className="text-foreground">frontend development</span> to
                            craft products that are as thoughtful as they are functional.
                        </p>
                        <p>
                            That means I can research a problem, shape the experience in Figma,
                            and then ship it as accessible, performant React and Next.js code —
                            without anything getting lost in translation between design and
                            build.
                        </p>
                        <p>
                            I care about the details that make interfaces feel effortless:
                            motion with intent, honest hierarchy, and performance that respects
                            every device and connection.
                        </p>
                    </div>
                </Reveal>

                <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, i) => (
                        <Reveal key={stat.label} delay={0.15 + i * 0.08}>
                            <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card/60 p-5 transition-colors hover:border-primary/40">
                                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:opacity-100" />
                                <p className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                                    <CountUp to={stat.value} suffix={stat.suffix} />
                                </p>
                                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
