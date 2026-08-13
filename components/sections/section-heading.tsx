import { Reveal, TextReveal } from '@/components/motion/reveal'

type Props = {
    index: string
    eyebrow: string
    title: string
    className?: string
}

export function SectionHeading({ index, eyebrow, title, className }: Props) {
    return (
        <div className={className}>
            <Reveal>
                <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">
                    <span>{index}</span>
                    <span className="h-px w-8 bg-primary/50" />
                    <span className="text-muted-foreground">{eyebrow}</span>
                </div>
            </Reveal>
            <h2 className="max-w-3xl font-display text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl">
                <TextReveal text={title} />
            </h2>
        </div>
    )
}
