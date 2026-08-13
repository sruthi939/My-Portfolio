'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import type { ReactNode } from 'react'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

type TiltCardProps = {
    children: ReactNode
    className?: string
    max?: number
    glare?: boolean
}

export function TiltCard({
    children,
    className,
    max = 10,
    glare = true,
}: TiltCardProps) {
    const ref = useRef<HTMLDivElement>(null)
    const mx = useMotionValue(0.5)
    const my = useMotionValue(0.5)

    const rotateX = useSpring(useTransform(my, [0, 1], [max, -max]), {
        stiffness: 200,
        damping: 20,
    })
    const rotateY = useSpring(useTransform(mx, [0, 1], [-max, max]), {
        stiffness: 200,
        damping: 20,
    })

    const glareX = useTransform(mx, [0, 1], ['0%', '100%'])
    const glareY = useTransform(my, [0, 1], ['0%', '100%'])

    function handleMove(e: React.MouseEvent<HTMLDivElement>) {
        const el = ref.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        mx.set((e.clientX - rect.left) / rect.width)
        my.set((e.clientY - rect.top) / rect.height)
    }

    function reset() {
        mx.set(0.5)
        my.set(0.5)
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMove}
            onMouseLeave={reset}
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            className={cn('relative [perspective:1000px]', className)}
        >
            {children}
            {glare && (
                <motion.div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                        background: `radial-gradient(circle at ${glareX} ${glareY}, color-mix(in oklch, var(--primary) 30%, transparent), transparent 60%)`,
                    }}
                />
            )}
        </motion.div>
    )
}
