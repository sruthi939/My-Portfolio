import { SocialLinks } from '@/components/sections/social-links'
import { site } from '@/lib/site'

export function Footer() {
    return (
        <footer className="relative border-t border-border">
            <div className="mx-auto max-w-6xl px-5 py-14">
                <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
                    <div>
                        <a
                            href="#home"
                            className="font-display text-2xl font-semibold tracking-tight"
                        >
                            {site.name}
                            <span className="text-primary">.</span>
                        </a>
                        <p className="mt-2 text-sm text-muted-foreground">{site.role}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{site.location}</p>
                    </div>

                    <SocialLinks />
                </div>

                <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
                    <p>
                        © {new Date().getFullYear()} {site.name}. All rights reserved.
                    </p>
                    <p>Designed &amp; built with Next.js, R3F and Framer Motion.</p>
                </div>
            </div>
        </footer>
    )
}
