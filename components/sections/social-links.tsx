import type { SVGProps } from 'react'
import { site } from '@/lib/site'
import { cn } from '@/lib/utils'

function GithubIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
            <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.66.42.37.8 1.1.8 2.22v3.29c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .5Z" />
        </svg>
    )
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
        </svg>
    )
}

function XIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    )
}

function BehanceIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
            <path d="M9.6 8.9c.53 0 1.02.05 1.46.16.44.1.82.28 1.13.51.31.24.55.55.72.94.16.39.25.87.25 1.44 0 .61-.14 1.13-.42 1.54-.28.41-.7.75-1.24 1.01.75.21 1.3.59 1.67 1.13.36.54.55 1.2.55 1.96 0 .62-.12 1.15-.36 1.6-.24.45-.56.82-.96 1.1-.4.29-.87.5-1.39.63-.52.14-1.06.2-1.62.2H2V8.9h7.6Zm-.44 4.53c.44 0 .8-.1 1.08-.31.28-.21.42-.55.42-1.02 0-.26-.05-.47-.14-.64a1 1 0 0 0-.38-.4 1.6 1.6 0 0 0-.55-.2 3.6 3.6 0 0 0-.66-.06H4.7v2.63h4.46Zm.15 4.75c.25 0 .48-.02.7-.07.22-.05.42-.13.58-.25.17-.11.3-.27.4-.47.1-.2.15-.45.15-.75 0-.6-.17-1.02-.5-1.28-.34-.25-.79-.38-1.34-.38H4.7v3.17h4.76ZM16.9 17.6c.37.36.9.54 1.6.54.5 0 .93-.13 1.29-.38.36-.25.58-.52.66-.8h2.37c-.38 1.18-.96 2.02-1.75 2.53-.79.5-1.74.76-2.86.76-.78 0-1.48-.13-2.11-.38a4.4 4.4 0 0 1-1.6-1.07 4.8 4.8 0 0 1-1-1.66 6.1 6.1 0 0 1-.36-2.14c0-.76.12-1.46.37-2.1a4.9 4.9 0 0 1 2.62-2.77 5.2 5.2 0 0 1 2.08-.4c.85 0 1.6.16 2.24.5.64.32 1.16.77 1.57 1.32.4.56.7 1.2.88 1.9.18.72.24 1.47.19 2.25h-7.02c0 .8.27 1.42.66 1.8ZM15.5 6.36h4.87v1.32H15.5V6.36Zm4.28 6.5a1.94 1.94 0 0 0-1.51-.6c-.4 0-.74.07-1 .21-.27.14-.48.31-.65.51-.16.2-.27.42-.34.65-.06.23-.1.43-.11.6h4.34c-.13-.68-.36-1.18-.73-1.55Z" />
        </svg>
    )
}

const links = [
    { label: 'GitHub', href: site.socials.github, Icon: GithubIcon },
    { label: 'LinkedIn', href: site.socials.linkedin, Icon: LinkedinIcon },
    { label: 'X', href: site.socials.x, Icon: XIcon },
    { label: 'Behance', href: site.socials.behance, Icon: BehanceIcon },
]

export function SocialLinks({ className, vertical = false }: { className?: string; vertical?: boolean }) {
    return (
        <ul className={cn('flex items-center gap-3', vertical && 'flex-col gap-4', className)}>
            {links.map(({ label, href, Icon }) => (
                <li key={label}>
                    <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={label}
                        data-cursor="OPEN"
                        className="group relative flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/80 hover:bg-accent/20 hover:text-accent hover:shadow-[0_0_20px_rgba(184,76,255,0.6)]"
                    >
                        <Icon width={15} height={15} className="transition-transform duration-300 group-hover:scale-110" />
                    </a>
                </li>
            ))}
        </ul>
    )
}

