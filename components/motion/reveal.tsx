'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type RevealProps = {
    children: ReactNode
    delay?: number
    y?: number
    className?: string
    as?: 'div' | 'section' | 'li' | 'span'
}

export function Reveal({
    children,
    delay = 0,
    y = 24,
    className,
}: RevealProps) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    )
}

type TextRevealProps = {
    text: string
    className?: string
    delay?: number
}

/** Word-by-word text reveal for headings. */
export function TextReveal({ text, className, delay = 0 }: TextRevealProps) {
    const words = text.split(' ')
    return (
        <span className={className}>
            {words.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden align-bottom">
                    <motion.span
                        className="inline-block"
                        initial={{ y: '110%' }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{
                            duration: 0.7,
                            delay: delay + i * 0.06,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        {word}
                        {i < words.length - 1 ? '\u00A0' : ''}
                    </motion.span>
                </span>
            ))}
        </span>
    )
}
