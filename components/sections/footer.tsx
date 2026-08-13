import { site } from '@/lib/site'

export function Footer() {
    return (
        <footer className="relative border-t border-white/10 bg-[#070609] py-16">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
                    <div>
                        <a
                            href="#home"
                            data-cursor="OPEN"
                            className="font-display text-xl font-bold tracking-tight text-white uppercase"
                        >
                            {site.name}
                        </a>
                        <p className="mt-1 font-mono text-xs uppercase tracking-widest text-white/50">
                            UI/UX DESIGNER &bull; FRONTEND DEVELOPER
                        </p>
                    </div>

                    <p className="font-mono text-xs text-white/40 tracking-widest uppercase">
                        &copy; 2026 {site.name.toUpperCase()}. ALL RIGHTS RESERVED.
                    </p>
                </div>
            </div>
        </footer>
    )
}

