'use client'

import { motion } from 'framer-motion'
import { TechStack3D } from '@/components/3d/tech-stack-3d'

export function Skills() {
    return (
        <section id="skills" className="relative bg-[#070609] py-32 sm:py-48 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6">
                {/* Large Centered Heading */}
                <div className="text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-mono text-xs font-semibold tracking-[0.3em] text-accent uppercase text-glow"
                    >
                        CAPABILITIES &amp; TOOLS
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-3 font-display text-4xl font-light tracking-tight text-white sm:text-6xl uppercase"
                    >
                        TECH <span className="font-semibold text-accent text-glow">STACK</span>
                    </motion.h2>
                    <p className="mt-4 font-mono text-xs text-white/40 tracking-widest uppercase">
                        HOVER OVER ANY 3D TILE TO EXPLORE PROFICIENCY
                    </p>
                </div>

                {/* 3D Tech Stack Constellation Canvas */}
                <div className="mt-12">
                    <TechStack3D />
                </div>
            </div>
        </section>
    )
}

