'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navItems, site } from '@/lib/site'
import { cn } from '@/lib/utils'

export function Nav() {
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-6 pt-6">
            <motion.nav
                initial={{ y: -60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                    'pointer-events-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-transparent px-6 py-3 transition-all duration-500',
                    scrolled && 'border-accent/20 bg-[#070609]/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.8)]',
                )}
            >
                {/* Left: Initials Logo */}
                <a
                    href="#home"
                    data-cursor="OPEN"
                    className="group flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-white transition-opacity hover:opacity-80"
                >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-accent/40 bg-accent/10 font-sans text-xs text-accent transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-black">
                        SA
                    </span>
                    <span className="hidden tracking-widest text-white/80 sm:inline">SRUTHI ALEX</span>
                </a>

                {/* Center: Email */}
                <a
                    href={`mailto:${site.email}`}
                    data-cursor="OPEN"
                    className="hidden font-mono text-[11px] uppercase tracking-widest text-white/60 transition-colors hover:text-accent md:block"
                >
                    {site.email}
                </a>

                {/* Right: ABOUT, WORK, CONTACT */}
                <ul className="hidden items-center gap-8 md:flex">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                className="font-mono text-[11px] font-medium uppercase tracking-widest text-white/70 transition-colors hover:text-accent hover:drop-shadow-[0_0_8px_rgba(184,76,255,0.8)]"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    aria-expanded={open}
                    onClick={() => setOpen((v) => !v)}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-accent hover:text-accent md:hidden"
                >
                    {open ? <X size={16} /> : <Menu size={16} />}
                </button>
            </motion.nav>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="pointer-events-auto absolute top-20 w-[calc(100%-3rem)] max-w-md md:hidden"
                    >
                        <div className="glass-panel flex flex-col gap-4 rounded-2xl p-6">
                            <ul className="flex flex-col gap-3">
                                {navItems.map((item) => (
                                    <li key={item.href}>
                                        <a
                                            href={item.href}
                                            onClick={() => setOpen(false)}
                                            className="block font-mono text-xs uppercase tracking-widest text-white/80 transition-colors hover:text-accent"
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <div className="border-t border-white/10 pt-4">
                                <a
                                    href={`mailto:${site.email}`}
                                    className="font-mono text-[11px] text-accent"
                                >
                                    {site.email}
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}

