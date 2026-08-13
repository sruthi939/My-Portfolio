'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useMediaQuery } from '@/lib/use-media-query'

export function CursorGlow() {
    const hasPointer = useMediaQuery('(pointer: fine)')
    const x = useMotionValue(-100)
    const y = useMotionValue(-100)
    const dotX = useMotionValue(-100)
    const dotY = useMotionValue(-100)

    const ringX = useSpring(x, { stiffness: 250, damping: 25, mass: 0.2 })
    const ringY = useSpring(y, { stiffness: 250, damping: 25, mass: 0.2 })

    const [cursorText, setCursorText] = useState('')
    const [isHovered, setIsHovered] = useState(false)

    useEffect(() => {
        if (!hasPointer) return

        const handleMouseMove = (e: MouseEvent) => {
            x.set(e.clientX)
            y.set(e.clientY)
            dotX.set(e.clientX)
            dotY.set(e.clientY)

            const target = e.target as HTMLElement | null
            if (!target) return

            const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null
            if (cursorTarget) {
                const text = cursorTarget.getAttribute('data-cursor') || ''
                setCursorText(text)
                setIsHovered(true)
            } else if (target.closest('a, button, [role="button"]')) {
                setCursorText('')
                setIsHovered(true)
            } else {
                setCursorText('')
                setIsHovered(false)
            }
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [hasPointer, x, y, dotX, dotY])

    if (!hasPointer) return null

    return (
        <>
            {/* Ambient Background Spotlight */}
            <motion.div
                aria-hidden
                className="pointer-events-none fixed z-30 hidden md:block"
                style={{
                    left: ringX,
                    top: ringY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            >
                <div className="h-[450px] w-[450px] rounded-full bg-accent/10 blur-[110px]" />
            </motion.div>

            {/* Center Pointer Dot */}
            <motion.div
                aria-hidden
                className="pointer-events-none fixed z-50 h-2 w-2 rounded-full bg-white shadow-[0_0_10px_#FFFFFF] hidden md:block"
                style={{
                    left: dotX,
                    top: dotY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            />

            {/* Interactive Outer Lavender Ring */}
            <motion.div
                aria-hidden
                className="pointer-events-none fixed z-50 flex items-center justify-center rounded-full border border-accent/60 bg-accent/15 backdrop-blur-[2px] transition-all duration-300 ease-out hidden md:flex"
                style={{
                    left: ringX,
                    top: ringY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    width: cursorText ? 90 : isHovered ? 52 : 36,
                    height: cursorText ? 90 : isHovered ? 52 : 36,
                    scale: isHovered ? 1.1 : 1,
                    borderColor: cursorText ? 'rgba(214, 107, 255, 0.9)' : 'rgba(184, 76, 255, 0.5)',
                    backgroundColor: cursorText ? 'rgba(184, 76, 255, 0.25)' : 'rgba(184, 76, 255, 0.1)',
                }}
            >
                {cursorText && (
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="font-mono text-[10px] font-bold tracking-widest text-white uppercase"
                    >
                        {cursorText}
                    </motion.span>
                )}
            </motion.div>
        </>
    )
}

