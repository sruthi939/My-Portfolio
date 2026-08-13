'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import { projects, Project } from '@/lib/site'

function Project3DCard({ project }: { project: Project }) {
    const cardRef = useRef<HTMLDivElement>(null)
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), { stiffness: 200, damping: 20 })
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { stiffness: 200, damping: 20 })

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return
        const rect = cardRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width - 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5
        mouseX.set(x)
        mouseY.set(y)
    }

    const handleMouseLeave = () => {
        mouseX.set(0)
        mouseY.set(0)
    }

    return (
        <div className="perspective-1200 shrink-0 w-[340px] sm:w-[450px] lg:w-[540px]">
            <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: 'preserve-3d',
                }}
                data-cursor="VIEW"
                className="group relative flex h-[480px] flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#0F0D15]/80 p-8 backdrop-blur-2xl transition-colors duration-500 hover:border-accent/60 hover:shadow-[0_0_50px_rgba(184,76,255,0.3)]"
            >
                {/* Background Lavender Ambient Spill */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/15 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-30" />

                {/* Top Section: Number & Title */}
                <div className="relative z-10" style={{ transform: 'translateZ(30px)' }}>
                    <div className="flex items-center justify-between">
                        <span className="font-mono text-3xl font-extrabold text-accent/80 tracking-widest text-glow">
                            {project.number}
                        </span>
                        <div className="flex gap-2">
                            {project.technologies.slice(0, 3).map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] text-white/70"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-white group-hover:text-accent transition-colors duration-300 sm:text-3xl">
                        {project.name}
                    </h3>
                    <p className="mt-3 font-sans text-xs sm:text-sm text-white/60 line-clamp-2 leading-relaxed">
                        {project.solution}
                    </p>
                </div>

                {/* Floating 3D Image Layer */}
                <div
                    className="relative mt-6 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-105"
                    style={{ transform: 'translateZ(50px)' }}
                >
                    <Image
                        src={project.image || '/placeholder.svg'}
                        alt={project.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F0D15] via-transparent to-transparent opacity-80" />
                </div>

                {/* Bottom Action Footer */}
                <div className="relative z-10 mt-6 flex items-center justify-between" style={{ transform: 'translateZ(40px)' }}>
                    <span className="font-mono text-xs text-white/40">{project.role}</span>
                    <Link
                        href={project.caseStudy !== '#' ? project.caseStudy : '#'}
                        className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-accent transition-colors hover:text-white"
                    >
                        VIEW CASE STUDY
                        <ArrowUpRight size={14} />
                    </Link>
                </div>
            </motion.div>
        </div>
    )
}

export function Projects() {
    return (
        <section id="projects" className="relative bg-[#070609] py-32 sm:py-48 overflow-hidden">
            {/* Background Glow */}
            <div className="pointer-events-none absolute top-1/3 left-1/4 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#5A189A]/15 blur-[160px]" />

            <div className="mx-auto max-w-7xl px-6">
                {/* Heading */}
                <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-mono text-xs font-semibold tracking-[0.3em] text-accent uppercase text-glow"
                        >
                            PORTFOLIO
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="mt-2 font-display text-4xl font-light tracking-tight text-white sm:text-6xl"
                        >
                            My <span className="font-semibold text-accent text-glow">Work</span>
                        </motion.h2>
                    </div>
                    <p className="font-mono text-xs tracking-widest text-white/40 uppercase">
                        &larr; SCROLL TO EXPLORE GALLERY &rarr;
                    </p>
                </div>
            </div>

            {/* Horizontal Project Gallery */}
            <div className="mt-16 no-scrollbar overflow-x-auto px-6 pb-12 pt-4">
                <div className="mx-auto flex w-max gap-8 px-6">
                    {projects.map((project) => (
                        <Project3DCard key={project.slug} project={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}

