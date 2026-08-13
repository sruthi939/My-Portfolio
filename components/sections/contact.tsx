'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Mail } from 'lucide-react'
import { site } from '@/lib/site'

export function Contact() {
    return (
        <section id="contact" className="relative bg-[#070609] py-36 sm:py-56 overflow-hidden">
            {/* Glowing 3D Purple Orb Background */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
                    transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                    className="h-[500px] w-[500px] rounded-full bg-accent/25 blur-[160px] purple-orb-glow"
                />
                <motion.div
                    animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute h-[400px] w-[400px] rounded-full bg-[#5A189A]/30 blur-[150px]"
                />
            </div>

            <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
                <motion.span
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-mono text-xs font-semibold tracking-[0.3em] text-accent uppercase text-glow"
                >
                    GET IN TOUCH
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.8 }}
                    className="mt-6 font-display text-4xl font-light tracking-tight text-white uppercase sm:text-6xl lg:text-8xl leading-[1.05]"
                >
                    LET&apos;S CREATE <br />
                    <span className="font-semibold text-accent text-glow">SOMETHING</span> <br />
                    <span className="font-bold text-white tracking-wide">EXTRAORDINARY.</span>
                </motion.h2>

                {/* Magnetic LET'S TALK Button */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-14 flex justify-center"
                >
                    <a
                        href={`mailto:${site.email}`}
                        data-cursor="OPEN"
                        className="group relative inline-flex items-center justify-center rounded-full border border-accent/50 bg-accent/15 px-10 py-5 font-mono text-sm font-bold tracking-widest text-white uppercase backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-accent hover:bg-accent hover:text-black hover:shadow-[0_0_50px_rgba(184,76,255,0.8)]"
                    >
                        <span className="flex items-center gap-3">
                            <Mail size={18} />
                            LET&apos;S TALK
                            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </span>
                    </a>
                </motion.div>

                {/* Quick Action Links */}
                <div className="mt-16 flex flex-wrap items-center justify-center gap-8 font-mono text-xs tracking-widest uppercase text-white/60">
                    <a
                        href={`mailto:${site.email}`}
                        data-cursor="OPEN"
                        className="transition-colors hover:text-accent"
                    >
                        EMAIL ME
                    </a>
                    <span className="text-white/20">&bull;</span>
                    <a
                        href={site.socials.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        data-cursor="OPEN"
                        className="transition-colors hover:text-accent"
                    >
                        LINKEDIN
                    </a>
                    <span className="text-white/20">&bull;</span>
                    <a
                        href={site.socials.github}
                        target="_blank"
                        rel="noreferrer"
                        data-cursor="OPEN"
                        className="transition-colors hover:text-accent"
                    >
                        GITHUB
                    </a>
                </div>
            </div>
        </section>
    )
}

